// The one place the newsletter_posts SQL lives. Works against any D1Runner
// (HTTP at build time, binding at runtime). Rows map 1:1 onto PostRecord plus
// the CMS-only columns (issue/status/timestamps) that never reach the files.
import type { D1Runner } from './d1';
import type { PostRecord } from '../markdown/frontmatter';

export type PostStatus = 'draft' | 'published';

export interface PostRow {
  slug: string;
  issue: number | null;
  title: string;
  date: string;
  description: string;
  tags: string; // JSON array
  body: string;
  status: PostStatus;
  created_at: string;
  updated_at: string;
}

export interface CmsPost extends PostRecord {
  issue: number | null;
  status: PostStatus;
  created_at: string;
  updated_at: string;
}

const COLUMNS = 'slug, issue, title, date, description, tags, body, status, created_at, updated_at';

function rowToPost(row: PostRow): CmsPost {
  let tags: string[] = [];
  try {
    const parsed = JSON.parse(row.tags);
    if (Array.isArray(parsed)) tags = parsed.map(String);
  } catch {
    tags = [];
  }
  return {
    slug: row.slug,
    issue: row.issue,
    title: row.title,
    date: row.date,
    description: row.description,
    tags,
    body: row.body,
    status: row.status,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function listPosts(
  runner: D1Runner,
  opts: { status?: PostStatus } = {},
): Promise<CmsPost[]> {
  const where = opts.status ? 'WHERE status = ?' : '';
  const params = opts.status ? [opts.status] : [];
  const { results } = await runner.all<PostRow>(
    `SELECT ${COLUMNS} FROM newsletter_posts ${where} ORDER BY issue DESC, date DESC`,
    params,
  );
  return results.map(rowToPost);
}

export async function getPost(runner: D1Runner, slug: string): Promise<CmsPost | null> {
  const { results } = await runner.all<PostRow>(
    `SELECT ${COLUMNS} FROM newsletter_posts WHERE slug = ?`,
    [slug],
  );
  return results[0] ? rowToPost(results[0]) : null;
}

export interface UpsertInput {
  slug: string;
  issue?: number | null;
  title: string;
  date: string;
  description: string;
  tags: string[];
  body: string;
  status?: PostStatus;
  /** ISO timestamp; caller supplies it (Workers/Node both have Date). */
  now: string;
}

export async function upsertPost(runner: D1Runner, input: UpsertInput): Promise<void> {
  await runner.run(
    `INSERT INTO newsletter_posts
       (slug, issue, title, date, description, tags, body, status, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(slug) DO UPDATE SET
       issue = excluded.issue,
       title = excluded.title,
       date = excluded.date,
       description = excluded.description,
       tags = excluded.tags,
       body = excluded.body,
       status = excluded.status,
       updated_at = excluded.updated_at`,
    [
      input.slug,
      input.issue ?? null,
      input.title,
      input.date,
      input.description,
      JSON.stringify(input.tags),
      input.body,
      input.status ?? 'draft',
      input.now,
      input.now,
    ],
  );
}

export async function deletePost(runner: D1Runner, slug: string): Promise<void> {
  await runner.run('DELETE FROM newsletter_posts WHERE slug = ?', [slug]);
}

export async function publishPost(runner: D1Runner, slug: string, now: string): Promise<void> {
  await runner.run(
    "UPDATE newsletter_posts SET status = 'published', updated_at = ? WHERE slug = ?",
    [now, slug],
  );
}
