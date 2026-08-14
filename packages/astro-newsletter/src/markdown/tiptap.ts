import StarterKit from '@tiptap/starter-kit';
import { Markdown } from '@tiptap/markdown';
import { NewsletterImage } from '../components/extensions/NewsletterImage.ts';

// The one shared extension list, used by both the browser editor (Editor.tsx)
// and the headless round-trip test. StarterKit brings headings, lists,
// blockquote, code/code-block, emphasis marks, links and the
// horizontal rule; NewsletterImage keeps `![](url)` syntax intact; Markdown
// wires up parse/serialize.
export function newsletterEditorExtensions() {
  return [StarterKit, NewsletterImage, Markdown];
}

// A tiptap markdown manager exposes parse()/serialize(); on an Editor it lives at
// editor.storage.markdown.manager. These helpers work with either.
export interface MarkdownManagerLike {
  parse(markdown: string): unknown;
  serialize(doc: unknown): string;
}

export function roundTripMarkdown(manager: MarkdownManagerLike, markdown: string): string {
  return manager.serialize(manager.parse(markdown));
}

/**
 * The load-time fidelity self-check. Returns true only when the editor can
 * round-trip this markdown byte-for-byte; when false the UI must default to the
 * raw markdown textarea so nothing is silently rewritten.
 */
export function isFaithfulRoundTrip(manager: MarkdownManagerLike, markdown: string): boolean {
  try {
    return roundTripMarkdown(manager, markdown) === markdown;
  } catch {
    return false;
  }
}
