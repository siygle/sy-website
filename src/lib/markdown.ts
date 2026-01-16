import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

// Configure marked with syntax highlighting
const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
  })
)

marked.setOptions({
  gfm: true,
  breaks: false,
})

export interface Frontmatter {
  title: string
  date: string
  description: string
  tags: string[]
}

export interface ParsedMarkdown {
  frontmatter: Frontmatter
  content: string
}

/**
 * Parse tags from a YAML value (supports "tag1, tag2" or "[tag1, tag2]" formats)
 */
function parseTags(value: string): string[] {
  const trimmed = value.trim()
  if (!trimmed) return []

  // Handle YAML array format: [tag1, tag2]
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    return trimmed
      .slice(1, -1)
      .split(',')
      .map(tag => tag.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean)
  }

  // Handle comma-separated format: tag1, tag2
  return trimmed
    .split(',')
    .map(tag => tag.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean)
}

/**
 * Parse markdown with YAML frontmatter
 */
export function parseMarkdown(raw: string): ParsedMarkdown {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/
  const match = raw.match(frontmatterRegex)

  let frontmatter: Frontmatter = {
    title: '',
    date: '',
    description: '',
    tags: [],
  }
  let body = raw

  if (match) {
    body = raw.slice(match[0].length)
    // Parse YAML-like frontmatter (simple key: value pairs)
    const lines = match[1].split('\n')
    for (const line of lines) {
      const colonIndex = line.indexOf(':')
      if (colonIndex > 0) {
        const key = line.slice(0, colonIndex).trim()
        const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '')

        if (key === 'tags') {
          frontmatter.tags = parseTags(value)
        } else if (key in frontmatter) {
          ;(frontmatter as Record<string, string>)[key] = value
        }
      }
    }
  }

  return { frontmatter, content: body }
}

/**
 * Render markdown to HTML
 */
export function renderMarkdown(content: string): string {
  return marked.parse(content) as string
}
