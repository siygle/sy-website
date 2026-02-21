import { useState } from "react";

function NavIcon({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative text-gray-600 hover:text-gray-900 transition-all duration-150 hover:-translate-y-px"
      aria-label={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </a>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 rounded-full">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full transition-transform duration-150 hover:scale-105"
            style={{ viewTransitionName: "site-avatar" }}
          />
        </a>

        {/* Desktop navigation - icons with tooltips */}
        <div className="hidden sm:flex items-center gap-4">
          <NavIcon href="/blog" label="Blog">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </NavIcon>

          <NavIcon href="/murmur" label="Murmur">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </NavIcon>

          <NavIcon href="https://chat.sylee.dev" label="Newsletter" external>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </NavIcon>

          <NavIcon href="/search" label="Search">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </NavIcon>
        </div>

        {/* Mobile menu button - larger touch target */}
        <button
          type="button"
          className="sm:hidden p-3 -m-1 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${mobileMenuOpen ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu - animated */}
      <div
        className={`sm:hidden border-t border-gray-200 bg-white overflow-hidden transition-all duration-200 ease-out ${
          mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          <a
            href="/blog"
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="/tags"
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tags
          </a>
          <a
            href="/murmur"
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Murmur
          </a>
          <a
            href="https://chat.sylee.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Newsletter
          </a>
          <a
            href="/search"
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Search
          </a>
        </div>
      </div>
    </header>
  );
}
