import { useEffect, useRef, useState } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import { rehypeSocialEmbed } from '../markdown/rehype-social-embed';
import { EmbedDiv } from './SocialEmbedCard';

interface EditorProps {
  /** Markdown body loaded from D1. */
  initialMarkdown: string;
  /** id of the hidden field the edit form saves; kept in sync on every change. */
  targetId: string;
  /** Admin upload endpoint. */
  uploadUrl: string;
}

function writeTarget(targetId: string, markdown: string) {
  const el = document.getElementById(targetId) as HTMLTextAreaElement | HTMLInputElement | null;
  if (el) el.value = markdown;
}

// A markdown-source editor with live preview and a toolbar. Editing operates on
// the markdown text directly, so it can never silently rewrite content the way a
// WYSIWYG round-trip could.
export default function Editor({ initialMarkdown, targetId, uploadUrl }: EditorProps) {
  const [value, setValue] = useState(initialMarkdown);
  const fileRef = useRef<HTMLInputElement>(null);

  // Seed the hidden field so a save without edits still submits the body.
  useEffect(() => {
    writeTarget(targetId, initialMarkdown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onChange(next?: string) {
    const md = next ?? '';
    setValue(md);
    writeTarget(targetId, md);
  }

  async function upload(file: File) {
    const form = new FormData();
    form.append('file', file);
    const res = await fetch(uploadUrl, { method: 'POST', body: form });
    const data = (await res.json().catch(() => ({}))) as { url?: string };
    if (data.url) onChange(`${value}\n\n![](${data.url})\n`);
  }

  const uploadImage: (typeof commands)['bold'] = {
    name: 'upload-image',
    keyCommand: 'upload-image',
    buttonProps: { 'aria-label': 'Upload image', title: 'Upload image to R2' },
    icon: (
      <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
        <path d="M4 3h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 2v7l3.5-3.5L11 14l2.5-2.5L16 14V5H4Zm3 2.5A1.5 1.5 0 1 1 4 7.5a1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    execute: () => fileRef.current?.click(),
  };

  return (
    <div data-color-mode="light" className="nl-mdeditor">
      <MDEditor
        value={value}
        onChange={onChange}
        height={560}
        preview="edit"
        commands={[...commands.getCommands(), commands.divider, uploadImage]}
        textareaProps={{ placeholder: 'Write Markdown…' }}
        previewOptions={{
          // Reuse the site's one embed definition so the preview splits blocks
          // exactly like the published page, then swap the wrapper for a
          // no-request card. rehypePlugins are appended to the preview's own,
          // so highlight/anchor behaviour is preserved.
          rehypePlugins: [rehypeSocialEmbed],
          components: { div: EmbedDiv },
        }}
      />
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
