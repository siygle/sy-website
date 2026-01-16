import { parseMarkdown, renderMarkdown, type Frontmatter } from './markdown'

export interface PostMeta extends Frontmatter {
  slug: string
}

export interface Post extends PostMeta {
  content: string
  html: string
}

export interface PaginatedPosts {
  posts: PostMeta[]
  currentPage: number
  totalPages: number
  totalPosts: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

// Posts per page - can be overridden by VITE_POSTS_PER_PAGE env variable
export const POSTS_PER_PAGE = parseInt(import.meta.env.VITE_POSTS_PER_PAGE || '10', 10)

// Import all blog posts at build time using Vite's import.meta.glob (supports .md and .mdx)
const postModules = import.meta.glob('/content/blog/*.{md,mdx}', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

// Parse all posts at module load time
const allPosts: Post[] = Object.entries(postModules).map(([path, raw]) => {
  const slug = path.replace('/content/blog/', '').replace(/\.mdx?$/, '')
  const { frontmatter, content } = parseMarkdown(raw)
  const html = renderMarkdown(content)
  return { slug, ...frontmatter, content, html }
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

/**
 * Get all posts metadata (for listing)
 */
export function getAllPosts(): PostMeta[] {
  return allPosts.map(({ slug, title, date, description, tags }) => ({
    slug,
    title,
    date,
    description,
    tags,
  }))
}

/**
 * Get the latest N posts (for homepage)
 */
export function getLatestPosts(count: number = 3): PostMeta[] {
  return getAllPosts().slice(0, count)
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  return allPosts.find(post => post.slug === slug) ?? null
}

/**
 * Get all post slugs (for prerendering)
 */
export function getAllPostSlugs(): string[] {
  return allPosts.map(post => post.slug)
}

/**
 * Get paginated posts
 */
export function getPaginatedPosts(page: number = 1): PaginatedPosts {
  const allPostsMeta = getAllPosts()
  const totalPosts = allPostsMeta.length
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)
  const currentPage = Math.max(1, Math.min(page, totalPages))

  const start = (currentPage - 1) * POSTS_PER_PAGE
  const end = start + POSTS_PER_PAGE
  const posts = allPostsMeta.slice(start, end)

  return {
    posts,
    currentPage,
    totalPages,
    totalPosts,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  }
}

/**
 * Get total number of pages
 */
export function getTotalPages(): number {
  return Math.ceil(allPosts.length / POSTS_PER_PAGE)
}
