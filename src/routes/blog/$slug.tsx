import { createFileRoute, notFound } from '@tanstack/react-router'
import { getPostBySlug } from '~/lib/posts'

export const Route = createFileRoute('/blog/$slug')({
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || 'Post'} - Sy Lee` },
      { name: 'description', content: loaderData?.description || '' },
    ],
  }),
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug)
    if (!post) {
      throw notFound()
    }
    return post
  },
  component: BlogPostPage,
  notFoundComponent: NotFoundPage,
})

function BlogPostPage() {
  const post = Route.useLoaderData()

  return (
    <article className="max-w-2xl lg:max-w-3xl mx-auto px-5 py-12">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <time className="text-sm text-gray-500 dark:text-gray-500">
            {formatDate(post.date)}
          </time>
          {post.tags.length > 0 && (
            <>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <div
        className="prose prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}

function NotFoundPage() {
  return (
    <div className="max-w-2xl lg:max-w-3xl mx-auto px-5 py-20 text-center">
      <h1 className="text-6xl md:text-9xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        404
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        We couldn't find the post you're looking for.
      </p>
      <a
        href="/"
        className="text-teal-600 dark:text-teal-400 hover:underline"
      >
        Back to the Homepage
      </a>
    </div>
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
