import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Window } from 'happy-dom';
import { parsePost } from '../src/markdown/frontmatter.ts';

// Tiptap needs a DOM; provide one before importing the editor.
const win = new Window();
for (const k of ['window', 'document', 'DOMParser', 'Node', 'Element', 'HTMLElement', 'Text', 'getComputedStyle', 'MutationObserver']) {
  try {
    (globalThis as Record<string, unknown>)[k] = (win as unknown as Record<string, unknown>)[k];
  } catch {
    /* read-only global (e.g. navigator) — skip */
  }
}

const { Editor } = await import('@tiptap/core');
const { newsletterEditorExtensions, isFaithfulRoundTrip } = await import('../src/markdown/tiptap.ts');

const editor = new Editor({ extensions: newsletterEditorExtensions() });
const mgr = editor.storage.markdown.manager as {
  parse(md: string): unknown;
  serialize(doc: unknown): string;
};

const contentDir = join(dirname(fileURLToPath(import.meta.url)), '../../../src/content/newsletter');
const files = readdirSync(contentDir).filter((f) => f.endsWith('.md')).sort();

after(() => editor.destroy());

// The safety invariant: the editor must never throw on real content, so the
// admin can ALWAYS at least open a post in raw-markdown mode. Byte-identical
// round-trips are reported but not required — non-faithful posts fall back to
// raw mode via the load-time self-check (see markdown/tiptap.ts) and are never
// silently rewritten.
test('editor never throws on any real post; reports round-trip fidelity', () => {
  let threw = 0;
  let exact = 0;
  const failing: string[] = [];
  for (const f of files) {
    const body = parsePost(readFileSync(join(contentDir, f), 'utf8'), f).body;
    try {
      const out = mgr.serialize(mgr.parse(body));
      if (out === body) exact++;
      else failing.push(f);
    } catch (err) {
      threw++;
      failing.push(`${f} (threw: ${(err as Error).message})`);
    }
  }
  console.log(
    `\n  tiptap round-trip: ${exact}/${files.length} byte-identical; ` +
      `${files.length - exact} fall back to raw mode; ${threw} threw`,
  );
  assert.equal(threw, 0, `editor threw on: ${failing.filter((x) => x.includes('threw')).join(', ')}`);
});

test('self-check agrees with an actual round-trip', () => {
  for (const s of ['hello', '## Head\n\ntext', 'a plain line', '---\n\ntext']) {
    assert.equal(isFaithfulRoundTrip(mgr, s), mgr.serialize(mgr.parse(s)) === s);
  }
});

test('self-check catches a non-round-trippable input (fallback exercised)', () => {
  // Trailing whitespace + extra blank lines get normalised away, so this must
  // be reported as unfaithful, forcing raw mode.
  assert.equal(isFaithfulRoundTrip(mgr, 'trailing   \n\n\n\n'), false);
});
