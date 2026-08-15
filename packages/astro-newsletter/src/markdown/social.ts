// Social-embed URL detection, kept in step with lib rehype-social-embed.ts.
// (Duplicated deliberately so the verbatim, byte-identity-critical rehype plugin
// is never touched.)
const PATTERNS = {
  twitter: /^https?:\/\/(?:www\.)?(twitter\.com|x\.com)\/(\w+)\/status\/(\d+)/,
  bluesky: /^https?:\/\/bsky\.app\/profile\/([^/]+)\/post\/(\w+)/,
  youtube: /^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/,
};

export type SocialType = 'twitter' | 'bluesky' | 'youtube';

export function detectSocial(url: string): SocialType | null {
  if (PATTERNS.twitter.test(url)) return 'twitter';
  if (PATTERNS.bluesky.test(url)) return 'bluesky';
  if (PATTERNS.youtube.test(url)) return 'youtube';
  return null;
}
