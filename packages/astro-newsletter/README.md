# @sylee/astro-newsletter

Astro integration that owns the 網路黑手的呢喃 newsletter — its loader, routes,
layout, styles and markdown pipeline — switchable between two sources:

- **`files`** — markdown files via Astro's glob loader (the original behaviour).
- **`cms`** — posts in Cloudflare D1, images in R2, with a Tiptap admin.

The design axis is **format parity**: both sources go through one canonical
frontmatter serializer (`markdown/frontmatter.ts`) and one markdown plugin list
(`markdown/plugins.ts`), so switching sources never changes the output. The
invariant `serializePost(parsePost(text)) === text` is pinned byte-for-byte
against all real posts in `test/frontmatter.test.ts`.

## Usage

Options live once in the repo-root `newsletter.config.mjs`, imported by both the
integration and the content collection:

```js
// astro.config.mjs
import newsletter from '@sylee/astro-newsletter';
import options from './newsletter.config.mjs';
export default defineConfig({ integrations: [react(), mdx(), newsletter(options)] });
```

```ts
// src/content.config.ts
import { newsletterCollection } from '@sylee/astro-newsletter/content';
import options from '../newsletter.config.mjs';
export const collections = { newsletter: newsletterCollection(options) };
```

`NEWSLETTER_SOURCE=files|cms` selects the mode. In `files` mode the admin routes
are **not** injected at all.

## CMS setup (Cloudflare)

1. Create a D1 database and an R2 bucket.
2. Copy `wrangler.jsonc.example` (repo root) to `wrangler.jsonc`, fill in the D1
   `database_id`, R2 `bucket_name` and the `SESSION` KV id, then verify with
   `wrangler deploy --dry-run`. (The example was copied from the adapter's
   generated config; re-check `main`/`no_bundle`/`rules`/`compatibility_date`
   against a fresh `pnpm build`'s `dist/server/wrangler.json`.)
3. Apply the schema and migrate the files in:

   ```bash
   node packages/astro-newsletter/bin/newsletter.mjs db:migrate --remote
   node packages/astro-newsletter/bin/newsletter.mjs import --from src/content/newsletter --remote
   ```

4. Set secrets (`wrangler secret put …` for prod, `.dev.vars` for local):
   `NEWSLETTER_ADMIN_PASSWORD`, `NEWSLETTER_SESSION_SECRET`, and
   `GITHUB_DISPATCH_TOKEN` (see below). Build-time D1 access uses `CF_ACCOUNT_ID`,
   `CF_D1_DATABASE_ID`, `CF_API_TOKEN`.

### Publish → rebuild

The public pages are static, so publishing writes `status='published'` to D1 and
then triggers a rebuild. With GitHub Actions, set `deploy.githubRepo` in
`newsletter.config.mjs` and a `GITHUB_DISPATCH_TOKEN` worker secret (a PAT with
Actions: write); publish fires a `repository_dispatch` (`newsletter-publish`,
also declared in `deploy.yml`) that re-runs the deploy. Without a token it just
marks the post published — re-run the deploy manually. (A bare
`NEWSLETTER_DEPLOY_HOOK_URL` is still honoured as a fallback.)

## CLI (`bin/newsletter.mjs`)

| command | what |
|---|---|
| `check --dir <path>` | frontmatter round-trip check (byte-identical) |
| `db:migrate [--local\|--remote]` | apply `server/schema.sql` |
| `import --from <dir> --remote` | files → D1 (published) |
| `export --to <dir> --remote` | D1 → files (byte-identical for unedited posts) |

`import` → `export` → `git diff` should be clean; that's the migration safety net.

## Admin

- `/newsletter/admin` — post list (create / edit / delete / publish)
- `/newsletter/admin/edit/[slug]` — frontmatter form + editor
- `/newsletter/admin/preview/[slug]` — SSR draft preview in the real layout
- Auth: one password + an HMAC-signed cookie (Web Crypto, zero deps). Every admin
  route/API calls `requireSession`; failures return an identical 401.
- Login is throttled per client IP (5 failures / 15 min → 15 min lockout, 429),
  backed by a `newsletter_login_attempts` table in the same D1 — so re-run
  `db:migrate` when upgrading. Best-effort: it fails open if D1 is unavailable.

### Editor

`components/Editor.tsx` is a [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor)
island — a **markdown-source** editor with a toolbar, syntax highlighting and
live preview, plus an R2 image-upload toolbar button. Because it edits the
markdown text directly (not a WYSIWYG document model), it can never silently
rewrite content, and the SSR `preview/[slug]` route renders the real pipeline
(social embeds, code highlight) for a full-fidelity check.

## Gotcha: Tailwind content scanning

This repo uses `@tailwindcss/vite`, whose automatic content detection scans the
whole project (including `.md`) and — in this git-worktree setup — ignores
`@source` / `@config` overrides. Any plain identifier that collides with a real
utility name (a font-style keyword, a text-transform keyword, an `outl` + `ine`
CSS declaration) inside a scanned file leaks an unused rule into the global
stylesheet and breaks the site's byte-for-byte output — even from a comment or
this very doc, which is why the words above are broken up. Keep such tokens out
of scanned `.ts`/`.tsx`/`.md` (put component CSS in imported `.css`, which is not
scanned). An isolation build (build with vs. without a suspect file, diff
`dist/client`) tells you if a file leaks.
