import fs from 'node:fs'
import path from 'node:path'

const SITE_URL = process.env.SITE_URL || 'https://sylee.cc'

function parseMarkdownFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) {
    return {
      frontmatter: { title: 'Untitled', date: new Date().toISOString() },
      content: raw,
    }
  }

  const yamlContent = match[1]
  const content = match[2]

  const frontmatter = {}

  for (const line of yamlContent.split('\n')) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue

    const key = line.slice(0, colonIndex).trim()
    let value = line.slice(colonIndex + 1).trim()

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1)
    } else if (value.startsWith("'") && value.endsWith("'")) {
      value = value.slice(1, -1)
    }

    if (key === 'tags' && value) {
      frontmatter[key] = value.split(',').map((t) => t.trim())
    } else {
      frontmatter[key] = value
    }
  }

  return { frontmatter, content }
}

function getAllPosts() {
  const postsDir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, '')
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
    const { frontmatter } = parseMarkdownFrontmatter(raw)
    return { slug, ...frontmatter }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function escapeXml(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function generateRssFeed(posts, siteUrl) {
  const now = new Date().toUTCString()

  const items = posts
    .slice(0, 20)
    .map((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug}`
      const pubDate = new Date(post.date).toUTCString()

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      ${post.description ? `<description>${escapeXml(post.description)}</description>` : ''}
    </item>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sy Lee - Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Blog posts about web development and technology</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${siteUrl}/feed" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`
}

// Generate the feed
const posts = getAllPosts()
const rss = generateRssFeed(posts, SITE_URL)

// Write to output directory
const outputDir = path.join(process.cwd(), '.output/public')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

fs.writeFileSync(path.join(outputDir, 'feed'), rss)
console.log('Generated RSS feed at .output/public/feed')
