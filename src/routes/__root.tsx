import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { Header } from '~/components/Header'
import appCss from '~/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Sy Lee - Software Engineer' },
      { name: 'description', content: 'Personal website of a software engineer from Taiwan' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'alternate', type: 'application/rss+xml', title: 'RSS Feed', href: '/feed' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Social embed hydration - runs AFTER React hydration
              (function() {
                function hydrateBluesky() {
                  var embeds = document.querySelectorAll('.bluesky-embed[data-bluesky-url]');
                  if (embeds.length === 0) return;

                  var needsScript = false;
                  embeds.forEach(function(el) {
                    if (el.dataset.hydrated) return;
                    el.dataset.hydrated = 'true';
                    needsScript = true;
                    var url = el.dataset.blueskyUrl;
                    fetch('/api/oembed?url=' + encodeURIComponent(url))
                      .then(function(r) {
                        if (!r.ok) throw new Error('HTTP ' + r.status);
                        return r.json();
                      })
                      .then(function(data) {
                        if (data.html) {
                          // Insert the oEmbed HTML (blockquote) directly
                          el.innerHTML = data.html;
                          // Trigger Bluesky embed.js to process the new blockquote
                          if (window.bluesky && window.bluesky.scan) {
                            window.bluesky.scan();
                          }
                        }
                      })
                      .catch(function(err) { console.error('Bluesky embed error:', err); });
                  });

                  // Load Bluesky's embed.js script to handle blockquote -> iframe transformation
                  if (needsScript && !document.querySelector('script[src*="embed.bsky.app"]')) {
                    var script = document.createElement('script');
                    script.src = 'https://embed.bsky.app/static/embed.js';
                    script.async = true;
                    document.head.appendChild(script);
                  }
                }

                function hydrateTwitter() {
                  document.querySelectorAll('.twitter-embed[data-twitter-url]').forEach(function(el) {
                    if (el.dataset.hydrated) return;
                    el.dataset.hydrated = 'true';
                    var url = el.dataset.twitterUrl;
                    fetch('/api/oembed?url=' + encodeURIComponent(url))
                      .then(function(r) {
                        if (!r.ok) throw new Error('HTTP ' + r.status);
                        return r.json();
                      })
                      .then(function(data) {
                        if (data.html) {
                          el.innerHTML = data.html;
                          // Load Twitter widgets.js to render the embed
                          if (!window.twttr) {
                            var script = document.createElement('script');
                            script.src = 'https://platform.twitter.com/widgets.js';
                            script.async = true;
                            document.head.appendChild(script);
                          } else if (window.twttr.widgets) {
                            window.twttr.widgets.load(el);
                          }
                        }
                      })
                      .catch(function(err) { console.error('Twitter embed error:', err); });
                  });
                }

                function hydrateAll() {
                  hydrateBluesky();
                  hydrateTwitter();
                }

                // Wait for React to finish hydrating before loading embeds
                // Use a longer delay to ensure React hydration is complete
                setTimeout(hydrateAll, 500);

                // Also run after SPA navigation
                var lastUrl = location.href;
                var observer = new MutationObserver(function() {
                  if (location.href !== lastUrl) {
                    lastUrl = location.href;
                    setTimeout(hydrateAll, 500);
                  }
                });
                observer.observe(document.body, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
