import type { CollectionEntry } from 'astro:content';

export interface TagInfo {
  tag: string;
  slug: string;
  count: number;
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[\s.]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getUniqueTags(posts: CollectionEntry<'blog'>[]): TagInfo[] {
  const tagMap = new Map<string, Map<string, number>>();

  for (const post of posts) {
    const tags = Array.isArray(post.data.tags) ? post.data.tags : [];
    for (const raw of tags) {
      const trimmed = raw.trim().replace(/,$/g, '');
      if (!trimmed) continue;
      const slug = slugifyTag(trimmed);
      if (!slug) continue;

      if (!tagMap.has(slug)) {
        tagMap.set(slug, new Map());
      }
      const names = tagMap.get(slug)!;
      names.set(trimmed, (names.get(trimmed) || 0) + 1);
    }
  }

  return Array.from(tagMap.entries())
    .map(([slug, names]) => {
      let bestName = '';
      let bestCount = 0;
      let totalCount = 0;
      for (const [name, count] of names) {
        totalCount += count;
        if (count > bestCount) {
          bestName = name;
          bestCount = count;
        }
      }
      return { tag: bestName, slug, count: totalCount };
    })
    .sort((a, b) => a.tag.toLowerCase().localeCompare(b.tag.toLowerCase()));
}

export function getPostsByTag(
  posts: CollectionEntry<'blog'>[],
  tagSlug: string
): CollectionEntry<'blog'>[] {
  return posts.filter((post) => {
    const tags = Array.isArray(post.data.tags) ? post.data.tags : [];
    return tags.some((t) => slugifyTag(t.trim()) === tagSlug);
  });
}
