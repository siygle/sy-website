import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { slugifyTag } from '~/lib/tags';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10));
  const limit = Math.min(50, Math.max(1, parseInt(url.searchParams.get('limit') || '5', 10)));

  const allPosts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const start = (page - 1) * limit;
  const end = start + limit;
  const posts = sortedPosts.slice(start, end).map((post) => {
    const tags = Array.isArray(post.data.tags) ? post.data.tags : [];
    return {
      slug: post.slug,
      title: post.data.title,
      date: post.data.date,
      description: post.data.description || '',
      tags: tags.map((tag: string) => ({
        name: tag,
        slug: slugifyTag(tag),
      })),
    };
  });

  const totalPages = Math.ceil(sortedPosts.length / limit);

  return new Response(JSON.stringify({
    posts,
    page,
    totalPages,
    hasMore: end < sortedPosts.length,
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
