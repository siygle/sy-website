import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import fs from 'node:fs'
import path from 'node:path'

// Get all blog post slugs for prerendering (supports .md and .mdx)
function getBlogPostRoutes(): { path: string }[] {
  const postsDir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(postsDir)) return []

  return fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => ({ path: `/blog/${file.replace(/\.mdx?$/, '')}` }))
}

const blogPages = getBlogPostRoutes()

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart({
      srcDirectory: 'src',
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      pages: [
        { path: '/' },
        { path: '/blog' },
        ...blogPages,
      ],
    }),
    viteReact(),
    nitro(),
  ],
})
