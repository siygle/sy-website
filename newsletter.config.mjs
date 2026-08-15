// Single source of newsletter options. Imported by both `astro.config.mjs`
// (the integration) and `src/content.config.ts` (the collection).
export default {
  source: process.env.NEWSLETTER_SOURCE ?? 'files', // 'files' | 'cms'
  collection: 'newsletter',
  basePath: '/newsletter',
  pageSize: 7,
  branding: {
    title: '網路黑手的呢喃',
    description: '關於科技、開源、網路世界的不定期電子報',
    slugPrefix: 'whispers-of-network-tinkerer',
  },
  files: { base: './src/content/newsletter' },
  cms: {
    accountId: process.env.CF_ACCOUNT_ID, // build-time D1 access
    databaseId: process.env.CF_D1_DATABASE_ID,
    apiToken: process.env.CF_API_TOKEN,
    d1Binding: 'NEWSLETTER_DB', // runtime binding name
    r2Binding: 'NEWSLETTER_MEDIA',
    r2PublicBase: process.env.NEWSLETTER_MEDIA_BASE,
  },
  admin: { enabled: true, path: '/newsletter/admin' },
  deploy: {
    // Publishing fires a GitHub repository_dispatch to rebuild the static pages.
    // Needs a GITHUB_DISPATCH_TOKEN worker secret (PAT with Actions write).
    githubRepo: 'siygle/sy-website',
    githubEventType: 'newsletter-publish',
  },
};
