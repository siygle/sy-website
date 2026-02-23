import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional().default(''),
    tags: z.union([
      z.array(z.string()),
      z.string().transform((val) => {
        if (!val.trim()) return [];
        // Handle "[tag1, tag2]" format
        if (val.startsWith('[') && val.endsWith(']')) {
          return val
            .slice(1, -1)
            .split(',')
            .map((tag) => tag.trim().replace(/^["']|["']$/g, ''))
            .filter(Boolean);
        }
        // Handle "tag1, tag2" format
        return val
          .split(',')
          .map((tag) => tag.trim().replace(/^["']|["']$/g, ''))
          .filter(Boolean);
      }),
    ]).optional().default([]),
    draft: z.boolean().optional().default(false),
    // Legacy fields from previous blog system (ignored but accepted)
    summary: z.string().optional(),
    authors: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
