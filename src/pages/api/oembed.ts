import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get('url');

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: 'Missing url parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let oembedUrl: string;

  // Bluesky URLs
  if (targetUrl.startsWith('https://bsky.app/')) {
    oembedUrl = `https://embed.bsky.app/oembed?url=${encodeURIComponent(targetUrl)}&format=json`;
  }
  // Twitter/X URLs
  else if (targetUrl.match(/^https?:\/\/(?:www\.)?(twitter\.com|x\.com)\//)) {
    oembedUrl = `https://publish.twitter.com/oembed?url=${encodeURIComponent(targetUrl)}&omit_script=true`;
  }
  // Unsupported URL
  else {
    return new Response(
      JSON.stringify({ error: 'Only Bluesky and Twitter/X URLs are supported' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const response = await fetch(oembedUrl);

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch oEmbed data' }),
        {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=86400', // Cache for 1 day
      },
    });
  } catch (error) {
    console.error('oEmbed proxy error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch oEmbed data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
