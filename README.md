# sylee.dev

A personal site (blog + newsletter) built with **Astro 6** and **React 19**,
deployed to **Cloudflare Workers**. Search is powered by Pagefind.

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build     # astro build + pagefind index
```

Output goes to `dist/` (`dist/client` static assets, `dist/server` Worker).

## Tests

```bash
pnpm test      # node:test — newsletter frontmatter, auth, tiptap round-trip
```

## Newsletter

The newsletter (網路黑手的呢喃) lives in its own workspace package,
[`@sylee/astro-newsletter`](./packages/astro-newsletter/README.md). It runs in
one of two modes, selected by `NEWSLETTER_SOURCE` and configured once in
[`newsletter.config.mjs`](./newsletter.config.mjs):

- **`files`** (default) — 72 markdown files under `src/content/newsletter/`, the
  original behaviour, byte-for-byte unchanged.
- **`cms`** — posts in Cloudflare D1, images in R2, with a password-protected
  Tiptap admin at `/newsletter/admin`. Publishing writes to D1 and triggers a
  Cloudflare deploy hook to rebuild the static pages.

Both modes go through the **same** markdown pipeline and the **same** canonical
frontmatter serializer, so switching sources never changes the output. See the
package README for the D1/R2/secret setup and the `newsletter` CLI
(`check` / `db:migrate` / `import` / `export`).

## Deployment

Pushing to `master` builds and deploys to Cloudflare Workers via
`.github/workflows/deploy.yml`.

### Required GitHub secrets

- `CLOUDFLARE_API_TOKEN` — Cloudflare API token with Workers deploy permission
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account ID

Enabling the CMS additionally needs the Cloudflare resources and secrets listed
in the [package README](./packages/astro-newsletter/README.md).

## Tech stack

- [Astro](https://astro.build/) — site framework
- [React](https://react.dev/) — interactive islands (comments, newsletter editor)
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Pagefind](https://pagefind.app/) — static search
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) — hosting (D1 + R2 for the CMS)
