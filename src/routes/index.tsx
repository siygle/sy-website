import { createFileRoute, Link } from '@tanstack/react-router'
import { SocialLinks } from '~/components/SocialLinks'
import { getLatestPosts, type PostMeta } from '~/lib/posts'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Sy Lee - Software Engineer' },
      { name: 'description', content: 'Personal website of a software engineer from Taiwan who is passionate about web development' },
    ],
  }),
  loader: () => getLatestPosts(3),
  component: HomePage,
})

function HomePage() {
  const latestPosts = Route.useLoaderData()

  return (
    <div className="max-w-2xl lg:max-w-5xl mx-auto px-5">
      {/* Hero Section */}
      <section className="mt-16 sm:mt-32 mb-16">
        <div className="flex flex-col items-start">
          <img
            src="/avatar.svg"
            alt="Avatar"
            className="w-20 h-20 rounded-full mb-8"
          />
          <h1 className="text-4xl sm:text-5xl font-mono font-bold text-gray-900 dark:text-gray-100 mb-6">
            My Style, My way, My blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 max-w-2xl">
            I'm <span className="text-gray-900 dark:text-gray-100 font-medium">SY</span>, a software engineer from Taiwan who is passionate about web development.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            I write about the latest web trends, TypeScript, React, and the tools I use in my daily work.
          </p>
          <SocialLinks />
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Latest Posts
        </h2>
        <div className="space-y-6">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/blog"
            className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
          >
            View all posts →
          </Link>
        </div>
      </section>
    </div>
  )
}

function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="block group"
    >
      <article className="py-4 border-b border-gray-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {post.title}
          </h3>
          <time className="text-sm text-gray-500 dark:text-gray-500 shrink-0">
            {formatDate(post.date)}
          </time>
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
