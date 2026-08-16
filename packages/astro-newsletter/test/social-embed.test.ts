import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { Element } from 'hast';
import { renderMarkdownToHtml } from '../src/markdown/render.ts';
import { readEmbedMeta } from '../src/markdown/rehype-social-embed.ts';

// --- Pipeline parity: the same plugin still emits social-embed wrappers -------
// Pins the published behaviour that the editor preview now piggybacks on.

test('renderMarkdownToHtml wraps an x.com link as a twitter embed', async () => {
  const html = await renderMarkdownToHtml('![](https://x.com/houjoe1/status/2085552047664029834)');
  assert.match(html, /social-embed/);
  assert.match(html, /twitter-embed/);
  assert.match(html, /data-tweet-id="2085552047664029834"/);
});

test('renderMarkdownToHtml wraps a bsky.app link as a bluesky embed', async () => {
  const html = await renderMarkdownToHtml('![](https://bsky.app/profile/alice.bsky.social/post/abc123)');
  assert.match(html, /social-embed/);
  assert.match(html, /bluesky-embed/);
  assert.match(html, /data-bluesky-url="https:\/\/bsky\.app\/profile\/alice\.bsky\.social\/post\/abc123"/);
});

test('renderMarkdownToHtml wraps a youtube link as a youtube embed', async () => {
  const html = await renderMarkdownToHtml('![](https://www.youtube.com/watch?v=dQw4w9WgXcQ)');
  assert.match(html, /social-embed/);
  assert.match(html, /youtube-embed/);
  assert.match(html, /youtube\.com\/embed\/dQw4w9WgXcQ/);
});

// --- readEmbedMeta: the single reader used by the live-preview card ----------

function div(properties: Element['properties'], children: Element['children'] = []): Element {
  return { type: 'element', tagName: 'div', properties, children };
}

test('readEmbedMeta reads a twitter wrapper', () => {
  const node = div({
    className: ['social-embed', 'twitter-embed'],
    'data-tweet-id': '2085552047664029834',
    'data-tweet-url': 'https://x.com/houjoe1/status/2085552047664029834',
  });
  assert.deepEqual(readEmbedMeta(node), {
    type: 'twitter',
    url: 'https://x.com/houjoe1/status/2085552047664029834',
    id: '2085552047664029834',
  });
});

test('readEmbedMeta reads a bluesky wrapper', () => {
  const node = div({
    className: ['social-embed', 'bluesky-embed'],
    'data-bluesky-url': 'https://bsky.app/profile/alice.bsky.social/post/abc123',
  });
  assert.deepEqual(readEmbedMeta(node), {
    type: 'bluesky',
    url: 'https://bsky.app/profile/alice.bsky.social/post/abc123',
  });
});

test('readEmbedMeta recovers the watch URL from a youtube iframe', () => {
  const node = div({ className: ['social-embed', 'youtube-embed'] }, [
    {
      type: 'element',
      tagName: 'iframe',
      properties: { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      children: [],
    },
  ]);
  assert.deepEqual(readEmbedMeta(node), {
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    id: 'dQw4w9WgXcQ',
  });
});

test('readEmbedMeta returns null for a plain div', () => {
  assert.equal(readEmbedMeta(div({ className: ['note'] })), null);
  assert.equal(readEmbedMeta(div({})), null);
});
