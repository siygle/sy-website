import { useEffect, useRef, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import {
  newsletterEditorExtensions,
  isFaithfulRoundTrip,
  type MarkdownManagerLike,
} from '../markdown/tiptap';
import '../styles/editor.css';

// The emphasis mark name collides with a Tailwind font-style utility, and this
// repo's @tailwindcss/vite setup ignores @source/@config. Any plain literal of
// that word in this scanned file (even a comment!) makes the scanner emit an
// unused rule and breaks the files-mode build's byte-for-byte output, so the
// name is assembled from fragments to keep the token out of the source.
const EMPHASIS_MARK = 'ital' + 'ic';

interface EditorProps {
  /** Markdown body loaded from D1. */
  initialMarkdown: string;
  /** id of the hidden field the edit form saves; kept in sync on every change. */
  targetId: string;
  /** Admin upload endpoint. */
  uploadUrl: string;
}

function manager(editor: { storage: { markdown?: { manager?: MarkdownManagerLike } } }): MarkdownManagerLike | null {
  return editor?.storage?.markdown?.manager ?? null;
}

function writeTarget(targetId: string, markdown: string) {
  const el = document.getElementById(targetId) as HTMLTextAreaElement | HTMLInputElement | null;
  if (el) el.value = markdown;
}

export default function Editor({ initialMarkdown, targetId, uploadUrl }: EditorProps) {
  // Default to raw until the self-check clears the post for the rich editor.
  const [rawMode, setRawMode] = useState(true);
  const [raw, setRaw] = useState(initialMarkdown);
  const [warning, setWarning] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: newsletterEditorExtensions(),
    content: '',
    editorProps: { attributes: { class: 'newsletter-prose nl-pm', style: 'min-height:55vh' } },
    onUpdate: ({ editor }) => {
      const mgr = manager(editor);
      if (!mgr) return;
      const md = mgr.serialize(editor.getJSON());
      setRaw(md);
      writeTarget(targetId, md);
    },
  });

  // Load-time fidelity self-check.
  useEffect(() => {
    if (!editor) return;
    const mgr = manager(editor);
    if (!mgr) return;
    const faithful = isFaithfulRoundTrip(mgr, initialMarkdown);
    setWarning(!faithful);
    setRawMode(!faithful);
    if (faithful) {
      editor.commands.setContent(mgr.parse(initialMarkdown) as never);
    }
    writeTarget(targetId, initialMarkdown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  function toRaw() {
    if (editor) {
      const mgr = manager(editor);
      if (mgr) {
        const md = mgr.serialize(editor.getJSON());
        setRaw(md);
        writeTarget(targetId, md);
      }
    }
    setRawMode(true);
  }

  function toRich() {
    if (editor) {
      const mgr = manager(editor);
      if (mgr) editor.commands.setContent(mgr.parse(raw) as never);
    }
    writeTarget(targetId, raw);
    setRawMode(false);
  }

  function onRawChange(value: string) {
    setRaw(value);
    writeTarget(targetId, value);
  }

  async function upload(file: File) {
    const form = new FormData();
    form.append('file', file);
    const res = await fetch(uploadUrl, { method: 'POST', body: form });
    const data = (await res.json().catch(() => ({}))) as { url?: string };
    if (!data.url) return;
    if (rawMode) {
      onRawChange(`${raw}\n\n![](${data.url})\n`);
    } else if (editor) {
      editor.chain().focus().insertContent({ type: 'newsletterImage', attrs: { src: data.url, alt: '' } }).run();
    }
  }

  const btn = (label: string, action: () => void, active = false) => (
    <button type="button" class={`tb ${active ? 'on' : ''}`} onMouseDown={(e) => { e.preventDefault(); action(); }}>
      {label}
    </button>
  );

  return (
    <div class="nl-editor">
      <div class="row" style={{ justifyContent: 'space-between' }}>
        <div class="tbgroup">
          {!rawMode && editor && (
            <>
              {btn('B', () => editor.chain().focus().toggleBold().run(), editor.isActive('bold'))}
              {btn('I', () => editor.chain().focus().toggleItalic().run(), editor.isActive(EMPHASIS_MARK))}
              {btn('S', () => editor.chain().focus().toggleStrike().run(), editor.isActive('strike'))}
              {btn('`', () => editor.chain().focus().toggleCode().run(), editor.isActive('code'))}
              {btn('H2', () => editor.chain().focus().toggleHeading({ level: 2 }).run(), editor.isActive('heading', { level: 2 }))}
              {btn('H3', () => editor.chain().focus().toggleHeading({ level: 3 }).run(), editor.isActive('heading', { level: 3 }))}
              {btn('• List', () => editor.chain().focus().toggleBulletList().run(), editor.isActive('bulletList'))}
              {btn('1. List', () => editor.chain().focus().toggleOrderedList().run(), editor.isActive('orderedList'))}
              {btn('❝', () => editor.chain().focus().toggleBlockquote().run(), editor.isActive('blockquote'))}
              {btn('―', () => editor.chain().focus().setHorizontalRule().run())}
              {btn('Image', () => fileRef.current?.click())}
            </>
          )}
        </div>
        <label class="row" style={{ gap: '0.35rem', fontSize: '0.85rem' }}>
          <input type="checkbox" checked={rawMode} onChange={(e) => ((e.target as HTMLInputElement).checked ? toRaw() : toRich())} />
          Raw markdown
        </label>
      </div>

      {warning && (
        <div class="warn">
          This post has content the rich editor can’t round-trip exactly, so it opened in
          <strong> Markdown mode</strong>. Editing here won’t rewrite anything unexpectedly.
        </div>
      )}

      <div style={{ display: rawMode ? 'none' : 'block' }}>
        <EditorContent editor={editor} />
      </div>

      {rawMode && (
        <textarea
          class="rawmd"
          value={raw}
          onInput={(e) => onRawChange((e.target as HTMLTextAreaElement).value)}
          style={{ width: '100%', minHeight: '55vh', fontFamily: 'ui-monospace, monospace', fontSize: '0.85rem' }}
        />
      )}

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => {
          const f = (e.target as HTMLInputElement).files?.[0];
          if (f) upload(f);
          (e.target as HTMLInputElement).value = '';
        }}
      />
    </div>
  );
}
