import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="/blog"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Blog
          </a>
          <a
            href="/murmur"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Murmur
          </a>
          <a
            href="https://chat.sylee.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Newsletter
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="sm:hidden p-2 text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white">
          <div className="px-5 py-4 space-y-4">
            <a
              href="/blog"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="/murmur"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Murmur
            </a>
            <a
              href="https://chat.sylee.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-gray-900"
            >
              Newsletter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
