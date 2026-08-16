// THE single definition of the newsletter markdown pipeline.
//
// The integration injects these into Astro's `markdown` config via
// `updateConfig()`, so build-time rendering (glob loader / content collections)
// and any future runtime SSR preview both go through exactly this list — no
// second pipeline, no drift.
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { rehypeSocialEmbed } from './rehype-social-embed.ts';

export function getRemarkPlugins() {
  return [remarkGfm];
}

export function getRehypePlugins() {
  return [rehypeSocialEmbed, [rehypeHighlight, { prefix: 'hljs language-' }]];
}
