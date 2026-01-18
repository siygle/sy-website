import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { remarkSocialEmbed } from './src/lib/remark-social-embed';

export default defineConfig({
  site: 'https://sylee.dev',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [
    react(),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkSocialEmbed],
    rehypePlugins: [[rehypeHighlight, { prefix: 'hljs language-' }]],
  },
});
