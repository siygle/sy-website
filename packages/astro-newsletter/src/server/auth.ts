// Zero-dependency admin auth: a single shared password plus an HMAC-signed
// session cookie. Uses only Web Crypto (crypto.subtle), which exists in both
// the Workers runtime and Node, so the same code runs in production and tests.

const enc = new TextEncoder();
const dec = new TextDecoder();

const COOKIE_NAME = 'nl_session';
const DEFAULT_TTL_SECONDS = 60 * 60 * 12; // 12h

function b64urlEncode(bytes: Uint8Array): string {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function b64urlDecode(s: string): Uint8Array {
  const pad = s.length % 4 === 0 ? '' : '='.repeat(4 - (s.length % 4));
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + pad);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function hmac(secret: string, data: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return new Uint8Array(sig);
}

/** Length-safe constant-time string comparison. */
export function constantTimeEqual(a: string, b: string): boolean {
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  // Compare a fixed number of bytes regardless of lengths.
  const len = Math.max(ab.length, bb.length);
  let diff = ab.length ^ bb.length;
  for (let i = 0; i < len; i++) {
    diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  }
  return diff === 0;
}

export function nowSeconds(): number {
  return Math.floor(Date.now() / 1000);
}

/** Sign a session token: base64url({exp}).base64url(HMAC). */
export async function signSession(
  secret: string,
  ttlSeconds: number = DEFAULT_TTL_SECONDS,
  issuedAt: number = nowSeconds(),
): Promise<string> {
  const payload = b64urlEncode(enc.encode(JSON.stringify({ exp: issuedAt + ttlSeconds })));
  const sig = b64urlEncode(await hmac(secret, payload));
  return `${payload}.${sig}`;
}

export async function verifySession(
  secret: string,
  token: string | undefined | null,
): Promise<{ exp: number } | null> {
  if (!token) return null;
  const dot = token.indexOf('.');
  if (dot <= 0) return null;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);

  const expected = b64urlEncode(await hmac(secret, payload));
  if (!constantTimeEqual(sig, expected)) return null;

  let data: { exp?: unknown };
  try {
    data = JSON.parse(dec.decode(b64urlDecode(payload)));
  } catch {
    return null;
  }
  if (typeof data.exp !== 'number' || data.exp < nowSeconds()) return null;
  return { exp: data.exp };
}

export function verifyPassword(input: string, expected: string | undefined): boolean {
  if (!expected) return false;
  return constantTimeEqual(input, expected);
}

// ── Cookie helpers ──────────────────────────────────────────────────────────

export function sessionCookie(token: string, path: string, ttlSeconds = DEFAULT_TTL_SECONDS): string {
  return [
    `${COOKIE_NAME}=${token}`,
    'HttpOnly',
    'Secure',
    'SameSite=Lax',
    `Path=${path}`,
    `Max-Age=${ttlSeconds}`,
  ].join('; ');
}

export function clearCookie(path: string): string {
  return `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=${path}; Max-Age=0`;
}

export function readSessionCookie(request: Request): string | undefined {
  const header = request.headers.get('cookie');
  if (!header) return undefined;
  for (const part of header.split(';')) {
    const [name, ...v] = part.trim().split('=');
    if (name === COOKIE_NAME) return v.join('=');
  }
  return undefined;
}

/** True when the request carries a valid, unexpired session. */
export async function requireSession(request: Request, secret: string): Promise<boolean> {
  return (await verifySession(secret, readSessionCookie(request))) !== null;
}
