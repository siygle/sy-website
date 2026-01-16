import { defineEventHandler, getQuery, setHeader, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url as string

  if (!url) {
    throw createError({
      statusCode: 400,
      message: 'Missing url parameter',
    })
  }

  let oembedUrl: string

  // Bluesky URLs
  if (url.startsWith('https://bsky.app/')) {
    oembedUrl = `https://embed.bsky.app/oembed?url=${encodeURIComponent(url)}&format=json`
  }
  // Twitter/X URLs
  else if (url.match(/^https?:\/\/(?:www\.)?(twitter\.com|x\.com)\//)) {
    oembedUrl = `https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}&omit_script=true`
  }
  // Unsupported URL
  else {
    throw createError({
      statusCode: 400,
      message: 'Only Bluesky and Twitter/X URLs are supported',
    })
  }

  try {
    const response = await fetch(oembedUrl)

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: 'Failed to fetch oEmbed data',
      })
    }

    const data = await response.json()

    // Set CORS and cache headers
    setHeader(event, 'Content-Type', 'application/json')
    setHeader(event, 'Cache-Control', 'public, max-age=86400') // Cache for 1 day

    return data
  } catch (error) {
    console.error('oEmbed proxy error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch oEmbed data',
    })
  }
})
