import { createFileRoute, Link } from '@tanstack/react-router'
import { getAllPosts, type PostMeta } from '~/lib/posts'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: 'Blog - Sy Lee' },
      { name: 'description', content: 'Blog posts about web development and technology' },
    ],
  }),
  loader: () => getAllPosts(),
  component: BlogPage,
})

function BlogPage() {
  const posts = Route.useLoaderData()

  return (
    <div className="max-w-2xl lg:max-w-3xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Blog
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No posts yet.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

function BlogPostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group">
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="block"
      >
        <time className="text-sm text-gray-500 dark:text-gray-500">
          {formatDate(post.date)}
        </time>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mt-1">
          {post.title}
        </h2>
        {post.description && (
          <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
            {post.description}
          </p>
        )}
      </Link>
    </article>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
