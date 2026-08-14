import type { Loader, LoaderContext } from 'astro/loaders';
import { httpRunner } from '../server/d1';
import { listPosts } from '../server/repo';
import type { ResolvedNewsletterOptions } from '../options';

// `cms` mode build-time loader. Reads published posts from D1 over the REST API
// and renders each body with Astro's own markdown pipeline (ctx.renderMarkdown),
// so cms-mode output goes through exactly the same remark/rehype list as files
// mode — no drift.
export function cmsLoader(options: ResolvedNewsletterOptions): Loader {
  return {
    name: '@sylee/astro-newsletter:cms',
    async load(ctx: LoaderContext) {
      const { store, parseData, generateDigest, logger } = ctx;
      const runner = httpRunner(options.cms);
      const posts = await listPosts(runner, { status: 'published' });

      store.clear();
      for (const post of posts) {
        const data = await parseData({
          id: post.slug,
          data: {
            title: post.title,
            date: post.date,
            description: post.description,
            tags: post.tags,
            issue: post.issue ?? undefined,
          },
        });
        const rendered = ctx.renderMarkdown
          ? await ctx.renderMarkdown(post.body)
          : undefined;
        store.set({
          id: post.slug,
          data,
          body: post.body,
          rendered,
          digest: generateDigest(`${post.updated_at}:${post.body}`),
        });
      }
      logger.info(`Loaded ${posts.length} published post(s) from D1`);
    },
  };
}
