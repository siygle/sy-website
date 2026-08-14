#!/usr/bin/env node
// Newsletter maintenance CLI.
//
//   newsletter check   [--dir <path>]   frontmatter round-trip check
//   newsletter db:migrate                (Phase 3 — needs Cloudflare D1)
//   newsletter import  --from <dir>      (Phase 3 — files -> D1)
//   newsletter export  --to <dir>        (Phase 3 — D1 -> files)
//
// Uses only Node built-ins + the package's own canonical frontmatter layer.
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { parsePost, serializePost } from '../src/markdown/frontmatter.ts';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '../../..');

const [command, ...rest] = process.argv.slice(2);

function parseFlags(rest, options) {
  return parseArgs({ args: rest, options, allowPositionals: false }).values;
}

function listMarkdown(dir) {
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort();
}

function cmdCheck(rest) {
  const { dir } = parseFlags(rest, { dir: { type: 'string' } });
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
    let roundTripped;
    try {
      roundTripped = serializePost(parsePost(original, slug));
    } catch (err) {
      failures.push({ file, reason: err.message });
      continue;
    }
    if (roundTripped !== original) {
      failures.push({ file, reason: 'frontmatter round-trip not byte-identical' });
    }
  }

  const ok = files.length - failures.length;
  console.log(`checked ${files.length} file(s) in ${target}`);
  console.log(`  ✓ ${ok} byte-identical`);
  if (failures.length > 0) {
    console.log(`  ✗ ${failures.length} failed:`);
    for (const f of failures) console.log(`      - ${f.file}: ${f.reason}`);
    process.exit(1);
  }
  console.log('all good ✅');
}

function notYet(name) {
  console.error(`\`${name}\` needs the Cloudflare D1 setup landed in Phase 3.`);
  process.exit(2);
}

switch (command) {
  case 'check':
    cmdCheck(rest);
    break;
  case 'db:migrate':
    notYet('db:migrate');
    break;
  case 'import':
    notYet('import');
    break;
  case 'export':
    notYet('export');
    break;
  default:
    console.error('Usage: newsletter <check|db:migrate|import|export> [flags]');
    process.exit(command ? 1 : 0);
}
