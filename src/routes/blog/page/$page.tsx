import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { getPaginatedPosts, type PostMeta, type PaginatedPosts } from '~/lib/posts'

export const Route = createFileRoute('/blog/page/$page')({
  head: ({ params }) => ({
    meta: [
      { title: `Blog - Page ${params.page} - Sy Lee` },
      { name: 'description', content: 'Blog posts about web development and technology' },
    ],
  }),
  loader: ({ params }): PaginatedPosts => {
    const page = parseInt(params.page, 10)
    if (isNaN(page) || page < 1) {
      throw redirect({ to: '/blog/page/$page', params: { page: '1' } })
    }
    const result = getPaginatedPosts(page)
    if (page > result.totalPages && result.totalPages > 0) {
      throw redirect({ to: '/blog/page/$page', params: { page: String(result.totalPages) } })
    }
    return result
  },
  component: BlogPaginatedPage,
})

function BlogPaginatedPage() {
  const { posts, currentPage, totalPages, hasNextPage, hasPrevPage } = Route.useLoaderData()

  return (
    <div className="max-w-2xl lg:max-w-3xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Blog
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No posts yet.</p>
      ) : (
        <>
          <div className="space-y-8">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        </>
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

function Pagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
}: {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}) {
  return (
    <nav className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div>
        {hasPrevPage ? (
          <Link
            to="/blog/page/$page"
            params={{ page: String(currentPage - 1) }}
            className="text-teal-600 dark:text-teal-400 hover:underline"
          >
            ← Previous
          </Link>
        ) : (
          <span className="text-gray-400 dark:text-gray-600">← Previous</span>
        )}
      </div>

      <div className="text-gray-600 dark:text-gray-400">
        Page {currentPage} of {totalPages}
      </div>

      <div>
        {hasNextPage ? (
          <Link
            to="/blog/page/$page"
            params={{ page: String(currentPage + 1) }}
            className="text-teal-600 dark:text-teal-400 hover:underline"
          >
            Next →
          </Link>
        ) : (
          <span className="text-gray-400 dark:text-gray-600">Next →</span>
        )}
      </div>
    </nav>
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
