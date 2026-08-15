import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { getIssueNumberValue } from '../lib/issue';

export async function GET(context: APIContext) {
  const newsletters = await getCollection('newsletter');
  const sorted = newsletters.sort((a, b) => getIssueNumberValue(b) - getIssueNumberValue(a));

  return rss({
    title: '網路黑手的呢喃',
    description: '關於科技、開源、網路世界的不定期電子報',
    site: context.site!,
    items: sorted.slice(0, 20).map((issue) => ({
      title: issue.data.title,
      pubDate: new Date(issue.data.date),
      description: issue.data.description || '',
      link: `/newsletter/${issue.id.replace('.md', '')}/`,
    })),
  });
}
