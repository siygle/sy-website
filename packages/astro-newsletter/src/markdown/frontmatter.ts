// Canonical frontmatter serialization — the ONE place that turns a newsletter
// post between its on-disk markdown form and a structured record. Both `files`
// mode and `cms` mode go through these two functions, so the two sources can
// never drift. The invariant, pinned by test/frontmatter.test.ts against all
// real posts, is: serializePost(parsePost(text)) === text (byte-identical).
//
// The on-disk format is fixed:
//
//   ---
//   title: "…"
//   date: "…"
//   description: "…"
//   tags:
//     - Tag
//   ---
//
//   <markdown body>
//
// The body is stored and re-emitted verbatim (it frequently contains its own
// `---` thematic breaks), so only the frontmatter block is reconstructed.

export interface PostRecord {
  /** Derived from the filename / D1 primary key; never written into the file. */
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  /** Everything after the closing `---\n`, verbatim (may start with a blank line). */
  body: string;
}

const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;

/** Unwrap a YAML scalar. Handles double-quoted (with \" and \\ escapes) or plain. */
function parseScalar(raw: string): string {
  const s = raw;
  if (s.length >= 2 && s.startsWith('"') && s.endsWith('"')) {
    return s.slice(1, -1).replace(/\\(["\\])/g, '$1');
  }
  return s;
}

/** Emit a double-quoted YAML scalar, matching the existing files' style. */
function quoteScalar(value: string): string {
  return '"' + value.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

export function parsePost(text: string, slug = ''): PostRecord {
  const match = text.match(FRONTMATTER_RE);
  if (!match) {
    throw new Error(`parsePost: no frontmatter block found${slug ? ` in ${slug}` : ''}`);
  }
  const [, fm, body] = match;
  const lines = fm.split('\n');

  let title = '';
  let date = '';
  let description = '';
  const tags: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('title: ')) {
      title = parseScalar(line.slice('title: '.length));
    } else if (line.startsWith('date: ')) {
      date = parseScalar(line.slice('date: '.length));
    } else if (line.startsWith('description: ')) {
      description = parseScalar(line.slice('description: '.length));
    } else if (line === 'tags:') {
      // Consume the following block-sequence items.
      while (i + 1 < lines.length && lines[i + 1].startsWith('  - ')) {
        tags.push(parseScalar(lines[++i].slice('  - '.length)));
      }
    } else if (line.startsWith('tags: [')) {
      // Inline array form, tolerated on read (not produced on write).
      const inner = line.slice('tags: ['.length).replace(/\]\s*$/, '');
      for (const part of inner.split(',')) {
        const t = part.trim().replace(/^["']|["']$/g, '');
        if (t) tags.push(t);
      }
    }
  }

  return { slug, title, date, description, tags, body };
}

export function serializePost(record: PostRecord): string {
  const lines = [
    `title: ${quoteScalar(record.title)}`,
    `date: ${quoteScalar(record.date)}`,
    `description: ${quoteScalar(record.description)}`,
  ];
  // Empty tags are written as a bare `tags:` (matching the existing corpus),
  // which parses back to an empty array.
  lines.push('tags:');
  for (const tag of record.tags) lines.push(`  - ${tag}`);
  return `---\n${lines.join('\n')}\n---\n${record.body}`;
}
