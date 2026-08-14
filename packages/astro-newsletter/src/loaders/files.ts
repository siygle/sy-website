import { glob } from 'astro/loaders';
import type { ResolvedNewsletterOptions } from '../options';

// `files` mode: the original glob loader, unchanged.
export function filesLoader(options: ResolvedNewsletterOptions) {
  return glob({ pattern: '**/*.{md,mdx}', base: options.files.base });
}
