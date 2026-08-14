import type { AstroIntegration } from 'astro';
import { fileURLToPath } from 'node:url';
import { resolveOptions, type NewsletterOptions } from './options';
import { getRemarkPlugins, getRehypePlugins } from './markdown/plugins';

export type { NewsletterOptions } from './options';
export { getRemarkPlugins, getRehypePlugins } from './markdown/plugins';

/**
 * Newsletter integration. Owns the newsletter's routes, markdown pipeline and
 * styles. `files` mode reproduces the previous hard-coded behaviour exactly;
 * `cms` mode (added in a later phase) swaps the loader for a D1-backed one.
 */
export default function newsletter(userOptions: NewsletterOptions = {}): AstroIntegration {
  const options = resolveOptions(userOptions);
  const route = (rel: string) => fileURLToPath(new URL(rel, import.meta.url));
  const base = options.basePath;

  return {
    name: '@sylee/astro-newsletter',
    hooks: {
      'astro:config:setup': ({ injectRoute, updateConfig }) => {
        // The markdown pipeline lives in exactly one place (markdown/plugins.ts)
        // and is injected here so content rendering picks it up.
        updateConfig({
          markdown: {
            remarkPlugins: getRemarkPlugins(),
            rehypePlugins: getRehypePlugins() as never,
          },
        });

        injectRoute({ pattern: `${base}/feed`, entrypoint: route('./routes/feed.ts'), prerender: true });
        injectRoute({ pattern: `${base}/[...page]`, entrypoint: route('./routes/list.astro'), prerender: true });
        injectRoute({ pattern: `${base}/[slug]`, entrypoint: route('./routes/entry.astro'), prerender: true });
      },
    },
  };
}
