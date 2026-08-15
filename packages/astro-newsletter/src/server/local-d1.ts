// BUILD-TIME ONLY. Imports `wrangler` (Node-only, pulls Node built-ins), so it
// must never be reached from the Worker runtime bundle — keep it out of
// server/runtime.ts and anything an admin route imports. Used by the cms loader
// and the CLI for offline local dev against wrangler's Miniflare D1.
import { bindingRunner, type D1DatabaseLike, type D1Runner } from './d1.ts';

export async function localRunner(
  binding: string,
  configPath?: string,
): Promise<{ runner: D1Runner; dispose: () => Promise<void> }> {
  const { getPlatformProxy } = await import('wrangler');
  const proxy = await getPlatformProxy(configPath ? { configPath } : undefined);
  const db = (proxy.env as Record<string, unknown>)[binding] as D1DatabaseLike | undefined;
  if (!db) {
    await proxy.dispose();
    throw new Error(`local D1 binding "${binding}" not found (check your wrangler config)`);
  }
  return { runner: bindingRunner(db), dispose: proxy.dispose };
}
