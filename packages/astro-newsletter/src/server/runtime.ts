// Runtime-only accessors for Cloudflare bindings. This module imports
// `cloudflare:workers`, which only resolves inside the Worker runtime, so it
// must be reached ONLY from on-demand (prerender = false) admin routes — never
// from build-time code (the cms loader uses the D1 HTTP API instead).
import { env } from 'cloudflare:workers';
import { bindingRunner, type D1DatabaseLike, type D1Runner } from './d1';

type Env = Record<string, unknown>;

export function getRunner(binding: string): D1Runner {
  const db = (env as Env)[binding] as D1DatabaseLike | undefined;
  if (!db) throw new Error(`D1 binding "${binding}" is not configured`);
  return bindingRunner(db);
}

export interface R2BucketLike {
  put(key: string, value: ArrayBuffer | ReadableStream | Uint8Array, opts?: unknown): Promise<unknown>;
  get(key: string): Promise<unknown>;
}

export function getBucket(binding: string): R2BucketLike {
  const bucket = (env as Env)[binding] as R2BucketLike | undefined;
  if (!bucket) throw new Error(`R2 binding "${binding}" is not configured`);
  return bucket;
}

export function getSecret(name: string): string | undefined {
  const value = (env as Env)[name];
  return typeof value === 'string' ? value : undefined;
}
