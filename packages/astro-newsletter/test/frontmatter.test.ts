import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parsePost, serializePost } from '../src/markdown/frontmatter.ts';

const here = dirname(fileURLToPath(import.meta.url));
const contentDir = join(here, '../../../src/content/newsletter');

const files = readdirSync(contentDir).filter((f) => f.endsWith('.md')).sort();

test('there are newsletter posts to check', () => {
  assert.ok(files.length > 0, `expected .md posts in ${contentDir}`);
});

// The core invariant: parse then serialize must reproduce the file byte-for-byte.
for (const file of files) {
  test(`round-trip byte-identical: ${file}`, () => {
    const original = readFileSync(join(contentDir, file), 'utf8');
    const slug = file.replace(/\.md$/, '');
    const record = parsePost(original, slug);
    const roundTripped = serializePost(record);
    assert.equal(roundTripped, original);
  });
}

// Spot-check the structured fields parse sensibly.
test('parsed records expose the expected fields', () => {
  const sample = readFileSync(join(contentDir, files[0]), 'utf8');
  const record = parsePost(sample, files[0].replace(/\.md$/, ''));
  assert.equal(typeof record.title, 'string');
  assert.equal(typeof record.date, 'string');
  assert.equal(typeof record.description, 'string');
  assert.ok(Array.isArray(record.tags));
  assert.ok(record.title.length > 0);
  assert.match(record.date, /^\d{4}-\d{2}-\d{2}$/);
});

// Synthetic edge cases for values the real corpus doesn't cover yet, so the
// CMS can round-trip posts containing quotes/backslashes and empty tags.
test('escapes quotes and backslashes symmetrically', () => {
  const record = {
    slug: 'x',
    title: 'a "quoted" \\ path',
    date: '2025-01-01',
    description: 'say "hi"',
    tags: ['A', 'B'],
    body: '\nbody\n',
  };
  const text = serializePost(record);
  assert.deepEqual(parsePost(text, 'x'), record);
});

test('empty tags round-trip', () => {
  const record = {
    slug: 'x',
    title: 'T',
    date: '2025-01-01',
    description: '',
    tags: [],
    body: '\nbody',
  };
  assert.deepEqual(parsePost(serializePost(record), 'x'), record);
});
