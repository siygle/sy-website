import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import newsletterOptions from '../newsletter.config.mjs';
import { newsletterCollection } from '@sylee/astro-newsletter/content';

const tagSchema = z.any().transform((val) => {
  if (!val) return [];
  if (Array.isArray(val)) return val.map((v: unknown) => String(v));
  if (typeof val === 'string') {
    if (!val.trim()) return [];
    if (val.startsWith('[') && val.endsWith(']')) {
      return val
        .slice(1, -1)
        .split(',')
        .map((tag: string) => tag.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    }
    return val
      .split(',')
      .map((tag: string) => tag.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  return [];
}).optional().default([]);

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional().default(''),
    tags: tagSchema,
    draft: z.boolean().optional().default(false),
    blueskyUri: z.string().optional(),
    // Legacy fields from previous blog system (ignored but accepted)
    summary: z.string().optional(),
    authors: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  newsletter: newsletterCollection(newsletterOptions),
};
