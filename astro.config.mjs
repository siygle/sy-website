import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { rehypeSocialEmbed } from './src/lib/rehype-social-embed';

export default defineConfig({
  site: 'https://sylee.dev',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSocialEmbed],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSocialEmbed, [rehypeHighlight, { prefix: 'hljs language-' }]],
  },
});
