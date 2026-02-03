import { useState } from "react";

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

        {/* Desktop navigation */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="/blog"
            className="text-gray-600 hover:text-gray-900 transition-all duration-150 hover:-translate-y-px"
          >
            Blog
          </a>
          <a
            href="/murmur"
            className="text-gray-600 hover:text-gray-900 transition-all duration-150 hover:-translate-y-px"
          >
            Murmur
          </a>
          <a
            href="https://chat.sylee.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-all duration-150 hover:-translate-y-px"
          >
            Newsletter
          </a>
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
          mobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
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
        </div>
      </div>
    </header>
  );
}
