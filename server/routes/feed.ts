import fs from 'node:fs'
import path from 'node:path'
import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
  const feedPath = path.join(process.cwd(), 'public', 'feed')

  if (!fs.existsSync(feedPath)) {
    throw createError({
      statusCode: 404,
      message: 'Feed not found. Run npm run dev to generate it.',
    })
  }

  const content = fs.readFileSync(feedPath, 'utf-8')

  setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'max-age=3600')

  return content
})
