import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import newsletter from '@sylee/astro-newsletter';
import newsletterOptions from './newsletter.config.mjs';

export default defineConfig({
  site: 'https://sylee.dev',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [
    react(),
    // The newsletter integration injects the shared remark/rehype plugin list
    // into Astro's markdown config; mdx() inherits it via extendMarkdownConfig.
    mdx(),
    newsletter(newsletterOptions),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
