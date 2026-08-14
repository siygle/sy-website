import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import type { NewsletterOptions } from './options';

// Tolerant tags parsing: accepts a YAML array, a comma-separated string, or a
// bracketed `[a, b]` string. Mirrors the existing site behaviour.
export const tagSchema = z
  .any()
  .transform((val) => {
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
  })
  .optional()
  .default([]);

export const newsletterSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string().optional().default(''),
  tags: tagSchema,
});

export function newsletterCollection(options: NewsletterOptions = {}) {
  const base = options.files?.base ?? './src/content/newsletter';
  return defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base }),
    schema: newsletterSchema,
  });
}
