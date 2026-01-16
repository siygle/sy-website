import { visit } from 'unist-util-visit'
import type { Root, Image, Html, Paragraph, Parent } from 'mdast'
import type { Plugin } from 'unified'

// URL patterns for social media platforms
const PATTERNS = {
  twitter: /^https?:\/\/(?:www\.)?(twitter\.com|x\.com)\/(\w+)\/status\/(\d+)/,
  bluesky: /^https?:\/\/bsky\.app\/profile\/([^/]+)\/post\/(\w+)/,
  youtube: /^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/,
}

interface SocialEmbedInfo {
  type: 'twitter' | 'bluesky' | 'youtube'
  url: string
  user?: string
  id: string
}

function detectSocialEmbed(url: string): SocialEmbedInfo | null {
  // Twitter/X
  const twitterMatch = url.match(PATTERNS.twitter)
  if (twitterMatch) {
    return {
      type: 'twitter',
      url,
      user: twitterMatch[2],
      id: twitterMatch[3],
    }
  }

  // Bluesky
  const blueskyMatch = url.match(PATTERNS.bluesky)
  if (blueskyMatch) {
    return {
      type: 'bluesky',
      url,
      user: blueskyMatch[1],
      id: blueskyMatch[2],
    }
  }

  // YouTube
  const youtubeMatch = url.match(PATTERNS.youtube)
  if (youtubeMatch) {
    return {
      type: 'youtube',
      url,
      id: youtubeMatch[1],
    }
  }

  return null
}

function renderTwitterEmbed(info: SocialEmbedInfo): string {
  // Use a placeholder that will be hydrated by client-side script
  // The script fetches oEmbed and injects the embed HTML directly
  return `<div class="social-embed twitter-embed" data-twitter-url="${info.url}">
  <blockquote>
    <a href="${info.url}">Loading tweet...</a>
  </blockquote>
</div>`
}

function renderBlueskyEmbed(info: SocialEmbedInfo): string {
  // Use a placeholder that will be hydrated by client-side script
  // The script fetches oEmbed and injects the official embed HTML
  return `<div class="social-embed bluesky-embed" data-bluesky-url="${info.url}">
  <blockquote>
    <a href="${info.url}">Loading Bluesky post...</a>
  </blockquote>
</div>`
}

function renderYouTubeEmbed(info: SocialEmbedInfo): string {
  return `<div class="social-embed youtube-embed">
  <iframe
    src="https://www.youtube.com/embed/${info.id}"
    width="100%"
    height="400"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
    title="YouTube video"
  ></iframe>
</div>`
}

function renderEmbed(info: SocialEmbedInfo): string {
  switch (info.type) {
    case 'twitter':
      return renderTwitterEmbed(info)
    case 'bluesky':
      return renderBlueskyEmbed(info)
    case 'youtube':
      return renderYouTubeEmbed(info)
  }
}

export const remarkSocialEmbed: Plugin<[], Root> = () => {
  return (tree) => {
    // We need to track replacements to avoid issues with visitor
    const replacements: Array<{ parent: Parent; index: number; html: string }> = []

    visit(tree, 'paragraph', (paragraph: Paragraph, paragraphIndex, grandparent) => {
      if (!grandparent || paragraphIndex === undefined) return

      // Check if paragraph contains only a single image that is a social embed
      if (paragraph.children.length === 1 && paragraph.children[0].type === 'image') {
        const image = paragraph.children[0] as Image
        const embedInfo = detectSocialEmbed(image.url)

        if (embedInfo) {
          // Mark for replacement - replace entire paragraph to avoid <p><div></div></p> issue
          replacements.push({
            parent: grandparent as Parent,
            index: paragraphIndex,
            html: renderEmbed(embedInfo),
          })
        }
      }
    })

    // Apply replacements in reverse order to maintain correct indices
    for (let i = replacements.length - 1; i >= 0; i--) {
      const { parent, index, html } = replacements[i]
      const htmlNode: Html = {
        type: 'html',
        value: html,
      }
      parent.children.splice(index, 1, htmlNode)
    }
  }
}
