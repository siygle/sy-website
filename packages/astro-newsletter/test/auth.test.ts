import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  signSession,
  verifySession,
  verifyPassword,
  constantTimeEqual,
  sessionCookie,
  readSessionCookie,
  nowSeconds,
} from '../src/server/auth.ts';

const SECRET = 'test-secret-key';

test('a freshly signed session verifies', async () => {
  const token = await signSession(SECRET, 3600);
  const result = await verifySession(SECRET, token);
  assert.ok(result);
  assert.equal(typeof result.exp, 'number');
});

test('a tampered payload is rejected', async () => {
  const token = await signSession(SECRET, 3600);
  const [, sig] = token.split('.');
  const forged = `${Buffer.from(JSON.stringify({ exp: nowSeconds() + 99999 })).toString('base64url')}.${sig}`;
  assert.equal(await verifySession(SECRET, forged), null);
});

test('a tampered signature is rejected', async () => {
  const token = await signSession(SECRET, 3600);
  const [payload] = token.split('.');
  assert.equal(await verifySession(SECRET, `${payload}.deadbeef`), null);
});

test('a token signed with a different secret is rejected', async () => {
  const token = await signSession(SECRET, 3600);
  assert.equal(await verifySession('other-secret', token), null);
});

test('an expired session is rejected', async () => {
  // issuedAt far in the past so exp is already behind us.
  const token = await signSession(SECRET, 60, nowSeconds() - 3600);
  assert.equal(await verifySession(SECRET, token), null);
});

test('garbage tokens are rejected, not thrown', async () => {
  for (const bad of ['', 'nodot', '.', 'a.b.c', 'x.']) {
    assert.equal(await verifySession(SECRET, bad), null);
  }
});

test('password check is exact', () => {
  assert.equal(verifyPassword('hunter2', 'hunter2'), true);
  assert.equal(verifyPassword('hunter2', 'hunter3'), false);
  assert.equal(verifyPassword('hunter2', undefined), false);
  // An empty configured password is treated as "not set" and always rejected.
  assert.equal(verifyPassword('', ''), false);
  assert.equal(verifyPassword('anything', ''), false);
});

test('constant-time equal handles unequal lengths', () => {
  assert.equal(constantTimeEqual('abc', 'abc'), true);
  assert.equal(constantTimeEqual('abc', 'abcd'), false);
  assert.equal(constantTimeEqual('abc', 'abd'), false);
});

test('cookie round-trips through a Request', async () => {
  const token = await signSession(SECRET, 3600);
  const cookie = sessionCookie(token, '/newsletter/admin');
  assert.match(cookie, /HttpOnly/);
  assert.match(cookie, /SameSite=Lax/);
  assert.match(cookie, /Path=\/newsletter\/admin/);
  // Simulate the browser sending just the name=value pair back.
  const req = new Request('https://x/', { headers: { cookie: `nl_session=${token}` } });
  assert.equal(readSessionCookie(req), token);
});
