# sylee.dev

A personal blog built with Vite, TanStack React Router, and React Start.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site will be output to `dist/`.

## Deployment

This project is automatically deployed to Cloudflare Pages on every push to the `master` branch.

### Required GitHub Secrets

Configure the following secrets in your GitHub repository settings:

- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token with Pages deployment permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

### Required GitHub Variables

- `CLOUDFLARE_PROJECT_NAME` - Your Cloudflare Pages project name

### Setting up Cloudflare

1. Create a Cloudflare Pages project via the Cloudflare dashboard
2. Generate an API token with `Cloudflare Pages:Edit` permission
3. Add the secrets and variables to your GitHub repository

## Tech Stack

- [Vite](https://vite.dev/) - Build tool
- [TanStack React Router](https://tanstack.com/router) - Type-safe routing
- [TanStack React Start](https://tanstack.com/start) - Full-stack React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting
