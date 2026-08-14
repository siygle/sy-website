#!/usr/bin/env node
// Newsletter maintenance CLI.
//
//   newsletter check    [--dir <path>]              frontmatter round-trip check
//   newsletter db:migrate [--local | --remote]      apply schema.sql
//   newsletter import   --from <dir> [--local|--remote]   files -> D1 (published)
//   newsletter export   --to   <dir> [--local|--remote]   D1 -> files
//
// Remote uses the D1 REST API (CF_ACCOUNT_ID / CF_D1_DATABASE_ID / CF_API_TOKEN).
// Local shells out to `wrangler d1 execute NEWSLETTER_DB --local` and therefore
// needs the root wrangler.jsonc to be filled in.
//
// NOTE: the D1 paths are written against placeholders and have not been run
// against a real database yet — verify before relying on them.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { spawnSync } from 'node:child_process';
import { parsePost, serializePost } from '../src/markdown/frontmatter.ts';
import { httpRunner } from '../src/server/d1.ts';
import { listPosts, upsertPost } from '../src/server/repo.ts';

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(here, '..');
const repoRoot = resolve(here, '../../..');
const schemaPath = join(pkgRoot, 'src/server/schema.sql');

const [command, ...rest] = process.argv.slice(2);

const FLAGS = {
  dir: { type: 'string' },
  from: { type: 'string' },
  to: { type: 'string' },
  local: { type: 'boolean' },
  remote: { type: 'boolean' },
  database: { type: 'string' },
};

function flags(args) {
  return parseArgs({ args, options: FLAGS, allowPositionals: false }).values;
}

function issueFromSlug(slug) {
  const m = String(slug).match(/(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

function listMarkdown(dir) {
  return readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
}

function remoteRunner() {
  return httpRunner({
    accountId: process.env.CF_ACCOUNT_ID,
    databaseId: process.env.CF_D1_DATABASE_ID,
    apiToken: process.env.CF_API_TOKEN,
  });
}

function wrangler(args) {
  const res = spawnSync('pnpm', ['exec', 'wrangler', ...args], {
    cwd: repoRoot,
    stdio: 'inherit',
  });
  if (res.status !== 0) process.exit(res.status ?? 1);
}

// ── check ────────────────────────────────────────────────────────────────
function cmdCheck(args) {
  const { dir } = flags(args);
  const target = resolve(repoRoot, dir ?? 'src/content/newsletter');
  const files = listMarkdown(target);
  if (files.length === 0) {
    console.error(`No .md files found in ${target}`);
    process.exit(1);
  }
  const failures = [];
  for (const file of files) {
    const original = readFileSync(join(target, file), 'utf8');
    const slug = file.replace(/\.md$/, '');
    try {
      if (serializePost(parsePost(original, slug)) !== original) {
        failures.push({ file, reason: 'not byte-identical' });
      }
    } catch (err) {
      failures.push({ file, reason: err.message });
    }
  }
  const ok = files.length - failures.length;
  console.log(`checked ${files.length} file(s) in ${target}`);
  console.log(`  ✓ ${ok} byte-identical`);
  if (failures.length) {
    console.log(`  ✗ ${failures.length} failed:`);
    for (const f of failures) console.log(`      - ${f.file}: ${f.reason}`);
    process.exit(1);
  }
  console.log('all good ✅');
}

// ── db:migrate ─────────────────────────────────────────────────────────────
async function cmdMigrate(args) {
  const f = flags(args);
  const db = f.database ?? 'NEWSLETTER_DB';
  if (f.local || !f.remote) {
    console.log(`Applying schema to local D1 (${db}) via wrangler…`);
    wrangler(['d1', 'execute', db, '--local', '--file', schemaPath]);
  }
  if (f.remote) {
    console.log('Applying schema to remote D1 via REST API…');
    const runner = remoteRunner();
    const statements = readFileSync(schemaPath, 'utf8')
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean);
    for (const sql of statements) await runner.run(sql);
    console.log(`  applied ${statements.length} statement(s)`);
  }
  console.log('migrate done ✅');
}

// ── import (files -> D1) ────────────────────────────────────────────────────
async function cmdImport(args) {
  const f = flags(args);
  if (!f.from) {
    console.error('import needs --from <dir>');
    process.exit(1);
  }
  if (f.local) {
    console.error('local import is not implemented yet; use --remote with CF_* env');
    process.exit(2);
  }
  const dir = resolve(repoRoot, f.from);
  const files = listMarkdown(dir);
  const runner = remoteRunner();
  const now = new Date().toISOString();
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const record = parsePost(readFileSync(join(dir, file), 'utf8'), slug);
    await upsertPost(runner, {
      slug,
      issue: issueFromSlug(slug),
      title: record.title,
      date: record.date,
      description: record.description,
      tags: record.tags,
      body: record.body,
      status: 'published',
      now,
    });
  }
  console.log(`imported ${files.length} post(s) into D1 ✅`);
}

// ── export (D1 -> files) ────────────────────────────────────────────────────
async function cmdExport(args) {
  const f = flags(args);
  if (!f.to) {
    console.error('export needs --to <dir>');
    process.exit(1);
  }
  if (f.local) {
    console.error('local export is not implemented yet; use --remote with CF_* env');
    process.exit(2);
  }
  const outDir = resolve(repoRoot, f.to);
  mkdirSync(outDir, { recursive: true });
  const runner = remoteRunner();
  const posts = await listPosts(runner);
  for (const post of posts) {
    const text = serializePost({
      slug: post.slug,
      title: post.title,
      date: post.date,
      description: post.description,
      tags: post.tags,
      body: post.body,
    });
    writeFileSync(join(outDir, `${post.slug}.md`), text);
  }
  console.log(`exported ${posts.length} post(s) to ${outDir} ✅`);
}

const commands = {
  check: cmdCheck,
  'db:migrate': cmdMigrate,
  import: cmdImport,
  export: cmdExport,
};

const handler = commands[command];
if (!handler) {
  console.error('Usage: newsletter <check|db:migrate|import|export> [flags]');
  process.exit(command ? 1 : 0);
}
await handler(rest);
