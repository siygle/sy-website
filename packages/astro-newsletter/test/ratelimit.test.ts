import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  isLoginLocked,
  registerLoginFailure,
  clearLoginAttempts,
  LOGIN_LIMIT,
  LOGIN_WINDOW_MS,
} from '../src/server/ratelimit.ts';

// Minimal in-memory stand-in for the D1Runner, understanding just the three
// statements ratelimit.ts issues.
function mockRunner() {
  const store = new Map<string, { fails: number; window_start: number; locked_until: number }>();
  return {
    store,
    async all(sql: string, params: unknown[] = []) {
      if (sql.includes('SELECT')) {
        const row = store.get(String(params[0]));
        return { results: row ? [row] : [] };
      }
      return { results: [] };
    },
    async run(sql: string, params: unknown[] = []) {
      if (sql.includes('INSERT')) {
        const [ip, fails, window_start, locked_until] = params as [string, number, number, number];
        store.set(ip, { fails, window_start, locked_until });
      } else if (sql.includes('DELETE')) {
        store.delete(String(params[0]));
      }
    },
  };
}

const IP = '203.0.113.7';
const T0 = 1_000_000_000_000;

test('a fresh IP is not locked', async () => {
  const r = mockRunner();
  assert.equal((await isLoginLocked(r, IP, T0)).locked, false);
});

test('locks out after LOGIN_LIMIT failures within the window', async () => {
  const r = mockRunner();
  for (let i = 0; i < LOGIN_LIMIT - 1; i++) {
    await registerLoginFailure(r, IP, T0 + i * 1000);
    assert.equal((await isLoginLocked(r, IP, T0 + i * 1000)).locked, false, `not locked at fail ${i + 1}`);
  }
  await registerLoginFailure(r, IP, T0 + LOGIN_LIMIT * 1000);
  const gate = await isLoginLocked(r, IP, T0 + LOGIN_LIMIT * 1000);
  assert.equal(gate.locked, true);
  assert.ok(gate.retryAfterSec > 0);
});

test('a successful login clears the failures', async () => {
  const r = mockRunner();
  for (let i = 0; i < LOGIN_LIMIT; i++) await registerLoginFailure(r, IP, T0 + i * 1000);
  assert.equal((await isLoginLocked(r, IP, T0 + LOGIN_LIMIT * 1000)).locked, true);
  await clearLoginAttempts(r, IP);
  assert.equal((await isLoginLocked(r, IP, T0 + LOGIN_LIMIT * 1000)).locked, false);
});

test('failures older than the window do not accumulate', async () => {
  const r = mockRunner();
  // LIMIT-1 failures, then one long after the window — counter should restart.
  for (let i = 0; i < LOGIN_LIMIT - 1; i++) await registerLoginFailure(r, IP, T0 + i * 1000);
  await registerLoginFailure(r, IP, T0 + LOGIN_WINDOW_MS + 10_000);
  assert.equal((await isLoginLocked(r, IP, T0 + LOGIN_WINDOW_MS + 10_000)).locked, false);
  assert.equal(r.store.get(IP)?.fails, 1);
});

test('different IPs are throttled independently', async () => {
  const r = mockRunner();
  for (let i = 0; i < LOGIN_LIMIT; i++) await registerLoginFailure(r, IP, T0 + i * 1000);
  assert.equal((await isLoginLocked(r, IP, T0 + LOGIN_LIMIT * 1000)).locked, true);
  assert.equal((await isLoginLocked(r, '198.51.100.9', T0 + LOGIN_LIMIT * 1000)).locked, false);
});
