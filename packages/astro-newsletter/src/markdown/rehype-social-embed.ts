import { visit } from 'unist-util-visit'
import type { Root, Element, Text } from 'hast'
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

function createTwitterEmbed(info: SocialEmbedInfo): Element {
  return {
    type: 'element',
    tagName: 'div',
    properties: {
      className: ['social-embed', 'twitter-embed'],
      'data-tweet-id': info.id,
      'data-tweet-url': info.url,
    },
    children: [
      {
        type: 'element',
        tagName: 'blockquote',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'a',
            properties: { href: info.url },
            children: [{ type: 'text', value: 'Loading post from X...' }],
          },
        ],
      },
    ],
  }
}

function createBlueskyEmbed(info: SocialEmbedInfo): Element {
  return {
    type: 'element',
    tagName: 'div',
    properties: {
      className: ['social-embed', 'bluesky-embed'],
      'data-bluesky-url': info.url,
    },
    children: [
      {
        type: 'element',
        tagName: 'blockquote',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'a',
            properties: { href: info.url },
            children: [{ type: 'text', value: 'Loading Bluesky post...' }],
          },
        ],
      },
    ],
  }
}

function createYouTubeEmbed(info: SocialEmbedInfo): Element {
  return {
    type: 'element',
    tagName: 'div',
    properties: { className: ['social-embed', 'youtube-embed'] },
    children: [
      {
        type: 'element',
        tagName: 'iframe',
        properties: {
          src: `https://www.youtube.com/embed/${info.id}`,
          width: '100%',
          height: '400',
          frameBorder: '0',
          allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowFullScreen: true,
          loading: 'lazy',
          title: 'YouTube video',
        },
        children: [],
      },
    ],
  }
}

function createEmbed(info: SocialEmbedInfo): Element {
  switch (info.type) {
    case 'twitter':
      return createTwitterEmbed(info)
    case 'bluesky':
      return createBlueskyEmbed(info)
    case 'youtube':
      return createYouTubeEmbed(info)
  }
}

export const rehypeSocialEmbed: Plugin<[], Root> = () => {
  return (tree) => {
    // Process paragraphs containing img elements with social embed URLs
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'p' || !parent || index === undefined) return

      // Find all img children that are social embeds
      const children = node.children
      const hasEmbedImg = children.some((child) => {
        if (child.type !== 'element' || child.tagName !== 'img') return false
        const src = child.properties?.src as string | undefined
        return src && detectSocialEmbed(src)
      })

      if (!hasEmbedImg) return

      // Simple case: paragraph contains only a single img
      if (
        children.length === 1 &&
        children[0].type === 'element' &&
        children[0].tagName === 'img'
      ) {
        const img = children[0]
        const src = img.properties?.src as string | undefined
        if (!src) return
        const embedInfo = detectSocialEmbed(src)
        if (embedInfo) {
          // Replace the entire paragraph with the embed
          parent.children.splice(index, 1, createEmbed(embedInfo))
        }
        return
      }

      // Complex case: paragraph contains mixed content (text + img)
      // We need to split the paragraph around embed images
      const resultNodes: Element[] = []
      let currentChildren: (Element | Text)[] = []

      for (const child of children) {
        if (child.type === 'element' && child.tagName === 'img') {
          const src = child.properties?.src as string | undefined
          const embedInfo = src ? detectSocialEmbed(src) : null

          if (embedInfo) {
            // Flush accumulated children as a paragraph
            if (currentChildren.length > 0) {
              const trimmed = trimTextNodes(currentChildren)
              if (trimmed.length > 0) {
                resultNodes.push({
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: trimmed,
                })
              }
              currentChildren = []
            }
            // Add the embed
            resultNodes.push(createEmbed(embedInfo))
          } else {
            // Regular image, keep it
            currentChildren.push(child as Element | Text)
          }
        } else {
          currentChildren.push(child as Element | Text)
        }
      }

      // Flush remaining children
      if (currentChildren.length > 0) {
        const trimmed = trimTextNodes(currentChildren)
        if (trimmed.length > 0) {
          resultNodes.push({
            type: 'element',
            tagName: 'p',
            properties: {},
            children: trimmed,
          })
        }
      }

      // Replace the original paragraph with the result nodes
      if (resultNodes.length > 0) {
        parent.children.splice(index, 1, ...resultNodes)
      }
    })
  }
}

// --- Preview helper -----------------------------------------------------
//
// The admin live preview (@uiw/react-md-editor) runs this same plugin, but then
// renders the resulting `div.social-embed` wrappers with a lightweight card
// instead of the real embed script. `readEmbedMeta` is the single reader of that
// wrapper shape, so "what is an embed / which platform / which post" stays
// defined here alongside the writer above. It does not alter the plugin's HTML
// output — the published pages are untouched.

export interface EmbedMeta {
  type: 'twitter' | 'bluesky' | 'youtube'
  url: string
  id?: string
}

function classList(node: Element): string[] {
  const cn = node.properties?.className
  if (Array.isArray(cn)) return cn.map(String)
  if (typeof cn === 'string') return cn.split(/\s+/)
  return []
}

const YOUTUBE_EMBED_SRC = /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/

export function readEmbedMeta(node: Element): EmbedMeta | null {
  if (node.tagName !== 'div') return null
  const classes = classList(node)
  if (!classes.includes('social-embed')) return null

  const props = node.properties ?? {}
  const tweetUrl = props['data-tweet-url']
  if (classes.includes('twitter-embed') && typeof tweetUrl === 'string') {
    const id = props['data-tweet-id']
    return { type: 'twitter', url: tweetUrl, id: typeof id === 'string' ? id : undefined }
  }

  const blueskyUrl = props['data-bluesky-url']
  if (classes.includes('bluesky-embed') && typeof blueskyUrl === 'string') {
    return { type: 'bluesky', url: blueskyUrl }
  }

  if (classes.includes('youtube-embed')) {
    // The youtube wrapper carries no data attribute; recover the id from the
    // child iframe's src and rebuild the canonical watch URL.
    const iframe = node.children.find(
      (c): c is Element => c.type === 'element' && c.tagName === 'iframe',
    )
    const src = iframe?.properties?.src
    const match = typeof src === 'string' ? src.match(YOUTUBE_EMBED_SRC) : null
    if (match) {
      return { type: 'youtube', url: `https://www.youtube.com/watch?v=${match[1]}`, id: match[1] }
    }
  }

  return null
}

// Helper to trim whitespace-only text nodes from start and end
function trimTextNodes(children: (Element | Text)[]): (Element | Text)[] {
  const result = [...children]

  // Trim leading whitespace
  while (result.length > 0 && result[0].type === 'text') {
    const text = result[0]
    const trimmed = text.value.replace(/^\s+/, '')
    if (trimmed === '') {
      result.shift()
    } else {
      result[0] = { type: 'text', value: trimmed }
      break
    }
  }

  // Trim trailing whitespace
  while (result.length > 0 && result[result.length - 1].type === 'text') {
    const text = result[result.length - 1] as Text
    const trimmed = text.value.replace(/\s+$/, '')
    if (trimmed === '') {
      result.pop()
    } else {
      result[result.length - 1] = { type: 'text', value: trimmed }
      break
    }
  }

  return result
}
