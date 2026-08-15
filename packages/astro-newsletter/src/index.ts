import type { AstroIntegration } from 'astro';
import { fileURLToPath } from 'node:url';
import { resolveOptions, type NewsletterOptions } from './options';
import { getRemarkPlugins, getRehypePlugins } from './markdown/plugins';

export type { NewsletterOptions } from './options';
export { getRemarkPlugins, getRehypePlugins } from './markdown/plugins';

const VIRTUAL_ID = 'virtual:astro-newsletter/config';
const RESOLVED_VIRTUAL_ID = '\0' + VIRTUAL_ID;

/**
 * Newsletter integration. Owns the newsletter's routes, markdown pipeline and
 * styles. `files` mode reproduces the previous hard-coded behaviour exactly;
 * `cms` mode swaps the loader for a D1-backed one and mounts the admin.
 */
export default function newsletter(userOptions: NewsletterOptions = {}): AstroIntegration {
  const options = resolveOptions(userOptions);
  const route = (rel: string) => fileURLToPath(new URL(rel, import.meta.url));
  const base = options.basePath;
  const adminPath = options.admin.path;

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
          vite: {
            plugins: [
              {
                // Expose the resolved (serialisable) options to runtime routes.
                name: 'astro-newsletter-config',
                resolveId(id) {
                  if (id === VIRTUAL_ID) return RESOLVED_VIRTUAL_ID;
                  return null;
                },
                load(id) {
                  if (id === RESOLVED_VIRTUAL_ID) {
                    return `export default ${JSON.stringify(options)};`;
                  }
                  return null;
                },
              },
            ],
          },
        });

        // Public newsletter routes (both modes).
        injectRoute({ pattern: `${base}/feed`, entrypoint: route('./routes/feed.ts'), prerender: true });
        injectRoute({ pattern: `${base}/[...page]`, entrypoint: route('./routes/list.astro'), prerender: true });
        injectRoute({ pattern: `${base}/[slug]`, entrypoint: route('./routes/entry.astro'), prerender: true });

        // Admin — only in cms mode, and never prerendered.
        if (options.source === 'cms' && options.admin.enabled) {
          injectRoute({ pattern: `${adminPath}/login`, entrypoint: route('./routes/admin/login.astro'), prerender: false });
          injectRoute({ pattern: `${adminPath}/edit/[slug]`, entrypoint: route('./routes/admin/edit/[slug].astro'), prerender: false });
          injectRoute({ pattern: `${adminPath}/preview/[slug]`, entrypoint: route('./routes/admin/preview/[slug].astro'), prerender: false });
          injectRoute({ pattern: `${adminPath}/api/[...path]`, entrypoint: route('./routes/admin/api/[...path].ts'), prerender: false });
          injectRoute({ pattern: `${adminPath}`, entrypoint: route('./routes/admin/index.astro'), prerender: false });
        }
      },
    },
  };
}
