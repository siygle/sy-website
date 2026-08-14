// Admin login throttling, backed by the newsletter_login_attempts table. Keeps
// a rolling failure count per client IP and locks the IP out for a cooldown once
// too many failures happen inside a window. Best-effort: callers fail open if
// D1 is unavailable (the password is still required), so a limiter outage can't
// lock out a legitimate admin.
import type { D1Runner } from './d1';

export const LOGIN_LIMIT = 5; // failures allowed per window
export const LOGIN_WINDOW_MS = 15 * 60 * 1000; // 15 min rolling window
export const LOGIN_LOCKOUT_MS = 15 * 60 * 1000; // 15 min lockout once tripped

interface AttemptRow {
  fails: number;
  window_start: number;
  locked_until: number;
}

export interface LoginGate {
  locked: boolean;
  retryAfterSec: number;
}

async function readAttempt(runner: D1Runner, ip: string): Promise<AttemptRow | undefined> {
  const { results } = await runner.all<AttemptRow>(
    'SELECT fails, window_start, locked_until FROM newsletter_login_attempts WHERE ip = ?',
    [ip],
  );
  return results[0];
}

/** True (with retry-after) when this IP is currently locked out. */
export async function isLoginLocked(runner: D1Runner, ip: string, now: number): Promise<LoginGate> {
  const row = await readAttempt(runner, ip);
  if (row && row.locked_until > now) {
    return { locked: true, retryAfterSec: Math.ceil((row.locked_until - now) / 1000) };
  }
  return { locked: false, retryAfterSec: 0 };
}

/** Record a failed attempt; lock the IP once it exceeds the limit in a window. */
export async function registerLoginFailure(runner: D1Runner, ip: string, now: number): Promise<void> {
  const row = await readAttempt(runner, ip);
  let fails: number;
  let windowStart: number;
  if (!row || now - row.window_start > LOGIN_WINDOW_MS) {
    fails = 1;
    windowStart = now;
  } else {
    fails = row.fails + 1;
    windowStart = row.window_start;
  }
  const lockedUntil = fails >= LOGIN_LIMIT ? now + LOGIN_LOCKOUT_MS : 0;
  await runner.run(
    `INSERT INTO newsletter_login_attempts (ip, fails, window_start, locked_until)
     VALUES (?, ?, ?, ?)
     ON CONFLICT(ip) DO UPDATE SET
       fails = excluded.fails,
       window_start = excluded.window_start,
       locked_until = excluded.locked_until`,
    [ip, fails, windowStart, lockedUntil],
  );
}

/** Clear an IP's failures after a successful login. */
export async function clearLoginAttempts(runner: D1Runner, ip: string): Promise<void> {
  await runner.run('DELETE FROM newsletter_login_attempts WHERE ip = ?', [ip]);
}
