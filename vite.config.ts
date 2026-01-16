import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import fs from "node:fs";
import path from "node:path";

// Posts per page - can be overridden by VITE_POSTS_PER_PAGE env variable
const POSTS_PER_PAGE = parseInt(process.env.VITE_POSTS_PER_PAGE || "10", 10);

// Get all blog post slugs for prerendering (supports .md and .mdx)
function getBlogPostRoutes(): { path: string }[] {
  const postsDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => ({ path: `/blog/${file.replace(/\.mdx?$/, "")}` }));
}

// Get pagination routes for prerendering
function getPaginationRoutes(): { path: string }[] {
  const postsDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(postsDir)) return [];

  const postCount = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx")).length;

  const totalPages = Math.ceil(postCount / POSTS_PER_PAGE);

  // Generate routes for page 2 onwards (page 1 is /blog)
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    path: `/blog/page/${i + 2}`,
  }));
}

const blogPages = getBlogPostRoutes();
const paginationPages = getPaginationRoutes();

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({
      srcDirectory: "src",
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
      pages: [{ path: "/" }, { path: "/blog" }, ...blogPages, ...paginationPages],
    }),
    viteReact(),
    nitro({
      serverDir: "server",
    }),
  ],
});
