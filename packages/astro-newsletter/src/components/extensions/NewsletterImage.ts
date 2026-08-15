import { Node } from '@tiptap/core';
import { detectSocial } from '../../markdown/social.ts';

// The corpus writes both real images and social embeds with image syntax:
// `![](https://x.com/…/status/…)`. This one node captures every markdown image
// token and renders it straight back to `![alt](src)`, so the syntax survives a
// round-trip. Social URLs additionally get a data-social attribute so the editor
// can show an embed affordance; that attribute never affects the markdown output.
export interface NewsletterImageAttrs {
  src: string;
  alt: string;
  title: string | null;
}

export const NewsletterImage = Node.create({
  name: 'newsletterImage',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      src: { default: '' },
      alt: { default: '' },
      title: { default: null },
    };
  },

  parseHTML() {
    return [{ tag: 'img[src]' }];
  },

  renderHTML({ node }) {
    const src = String(node.attrs.src ?? '');
    const social = detectSocial(src);
    return [
      'img',
      {
        src,
        alt: node.attrs.alt ?? '',
        ...(node.attrs.title ? { title: node.attrs.title } : {}),
        ...(social ? { 'data-social': social } : {}),
      },
    ];
  },

  // ── @tiptap/markdown hooks ────────────────────────────────────────────────
  markdownName: 'image',

  parseMarkdown(token: { href?: string; text?: string; title?: string | null }) {
    return {
      type: 'newsletterImage',
      attrs: {
        src: token.href ?? '',
        alt: token.text ?? '',
        title: token.title ?? null,
      },
    };
  },

  renderMarkdown(node: { attrs?: Partial<NewsletterImageAttrs> }) {
    const attrs = node.attrs ?? {};
    const alt = attrs.alt ?? '';
    const src = attrs.src ?? '';
    const title = attrs.title ? ` "${attrs.title}"` : '';
    return `![${alt}](${src}${title})`;
  },
} as never);
