// Runtime markdown -> HTML, used ONLY for the admin draft preview. It reuses the
// exact same remark/rehype list as the build (markdown/plugins.ts), so the
// preview matches the published output closely. It is not byte-identical to
// Astro's own renderer (Astro adds its own remark-rehype settings); known
// differences are acceptable for a preview and pinned by render-parity tests.
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { getRemarkPlugins, getRehypePlugins } from './plugins';

export async function renderMarkdownToHtml(markdown: string): Promise<string> {
  let processor = unified().use(remarkParse);
  for (const plugin of getRemarkPlugins()) {
    processor = processor.use(plugin as never);
  }
  processor = processor.use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw);
  for (const plugin of getRehypePlugins()) {
    if (Array.isArray(plugin)) {
      processor = processor.use(plugin[0] as never, plugin[1] as never);
    } else {
      processor = processor.use(plugin as never);
    }
  }
  processor = processor.use(rehypeStringify, { allowDangerousHtml: true });

  const file = await processor.process(markdown);
  return String(file);
}
