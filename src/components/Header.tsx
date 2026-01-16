import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
      <nav className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            to="/blog"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            Blog
          </Link>
          <a
            href="https://chat.sylee.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            Newsletter
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="sm:hidden p-2 text-gray-600 dark:text-gray-400"
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
        <div className="sm:hidden border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="px-5 py-4 space-y-4">
            <Link
              to="/blog"
              className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <a
              href="https://chat.sylee.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Newsletter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
