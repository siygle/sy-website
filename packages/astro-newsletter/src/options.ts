// Options for the newsletter integration. A single `newsletter.config.mjs` at the
// project root is imported by both `astro.config.mjs` (the integration) and
// `src/content.config.ts` (the collection), so the options are declared once.

export interface NewsletterBranding {
  title: string;
  description: string;
  slugPrefix?: string;
}

export interface NewsletterCmsOptions {
  accountId?: string;
  databaseId?: string;
  apiToken?: string;
  d1Binding?: string;
  r2Binding?: string;
  r2PublicBase?: string;
}

export interface NewsletterOptions {
  /** Where posts come from. Defaults to `files`. */
  source?: 'files' | 'cms';
  /** Content collection name. */
  collection?: string;
  /** URL prefix the newsletter is mounted at. */
  basePath?: string;
  /** Issues per list page. */
  pageSize?: number;
  branding?: Partial<NewsletterBranding>;
  files?: { base?: string };
  cms?: NewsletterCmsOptions;
  admin?: { enabled?: boolean; path?: string };
  /** How publishing triggers a rebuild of the static pages. */
  deploy?: NewsletterDeployOptions;
}

export interface NewsletterDeployOptions {
  /** `owner/repo` to fire a GitHub repository_dispatch at on publish. */
  githubRepo?: string;
  /** repository_dispatch event_type (must match deploy.yml). */
  githubEventType?: string;
}

export interface ResolvedNewsletterOptions {
  source: 'files' | 'cms';
  collection: string;
  basePath: string;
  pageSize: number;
  branding: NewsletterBranding;
  files: { base: string };
  cms: NewsletterCmsOptions;
  admin: { enabled: boolean; path: string };
  deploy: { githubRepo: string; githubEventType: string };
}

const DEFAULT_BRANDING: NewsletterBranding = {
  title: '網路黑手的呢喃',
  description: '關於科技、開源、網路世界的不定期電子報',
  slugPrefix: 'whispers-of-network-tinkerer',
};

export function resolveOptions(options: NewsletterOptions = {}): ResolvedNewsletterOptions {
  const basePath = (options.basePath ?? '/newsletter').replace(/\/$/, '');
  return {
    source: options.source ?? 'files',
    collection: options.collection ?? 'newsletter',
    basePath,
    pageSize: options.pageSize ?? 7,
    branding: { ...DEFAULT_BRANDING, ...(options.branding ?? {}) },
    files: { base: options.files?.base ?? './src/content/newsletter' },
    cms: options.cms ?? {},
    admin: {
      enabled: options.admin?.enabled ?? true,
      path: options.admin?.path ?? `${basePath}/admin`,
    },
    deploy: {
      githubRepo: options.deploy?.githubRepo ?? '',
      githubEventType: options.deploy?.githubEventType ?? 'newsletter-publish',
    },
  };
}
