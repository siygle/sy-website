import type { APIRoute } from 'astro';
import config from 'virtual:astro-newsletter/config';
import { getRunner, getSecret, getBucket } from '../../../server/runtime';
import { listPosts, getPost, upsertPost, deletePost, publishPost } from '../../../server/repo';
import {
  verifyPassword,
  signSession,
  requireSession,
  sessionCookie,
  clearCookie,
} from '../../../server/auth';
import { renderMarkdownToHtml } from '../../../markdown/render';

export const prerender = false;

const adminPath = config.admin.path;

function json(data: unknown, init: { status?: number; headers?: Record<string, string> } = {}) {
  return new Response(JSON.stringify(data), {
    status: init.status ?? 200,
    headers: { 'content-type': 'application/json; charset=utf-8', ...(init.headers ?? {}) },
  });
}

const unauthorized = () => json({ error: 'unauthorized' }, { status: 401 });

async function authed(request: Request): Promise<boolean> {
  const secret = getSecret('NEWSLETTER_SESSION_SECRET');
  if (!secret) return false;
  return requireSession(request, secret);
}

// ── POST ────────────────────────────────────────────────────────────────────
export const POST: APIRoute = async ({ params, request }) => {
  const path = (params.path as string) ?? '';

  // Login is the only unauthenticated endpoint.
  if (path === 'session') {
    const secret = getSecret('NEWSLETTER_SESSION_SECRET');
    const password = getSecret('NEWSLETTER_ADMIN_PASSWORD');
    const body = (await request.json().catch(() => ({}))) as { password?: string };
    if (!secret || !verifyPassword(String(body.password ?? ''), password)) {
      return unauthorized(); // identical response on any failure
    }
    const token = await signSession(secret);
    return json({ ok: true }, { headers: { 'set-cookie': sessionCookie(token, adminPath) } });
  }

  if (path === 'logout') {
    return json({ ok: true }, { headers: { 'set-cookie': clearCookie(adminPath) } });
  }

  if (!(await authed(request))) return unauthorized();

  // Live markdown render for the editor preview pane.
  if (path === 'render') {
    const body = (await request.json().catch(() => ({}))) as { body?: string };
    const html = await renderMarkdownToHtml(String(body.body ?? ''));
    return json({ html });
  }

  if (path === 'upload') {
    return uploadHandler(request);
  }

  const runner = getRunner(config.cms.d1Binding);
  const now = new Date().toISOString();

  if (path === 'posts') {
    const body = (await request.json()) as {
      slug?: string;
      issue?: number | null;
      title?: string;
      date?: string;
      description?: string;
      tags?: string[];
      body?: string;
      status?: 'draft' | 'published';
    };
    const slug = String(body.slug ?? '').trim();
    if (!slug) return json({ error: 'slug required' }, { status: 400 });
    // Guard the [...page] vs [slug] route collision: no all-digit slugs.
    if (/^\d+$/.test(slug)) return json({ error: 'slug cannot be all digits' }, { status: 400 });
    await upsertPost(runner, {
      slug,
      issue: body.issue ?? null,
      title: String(body.title ?? ''),
      date: String(body.date ?? ''),
      description: String(body.description ?? ''),
      tags: Array.isArray(body.tags) ? body.tags.map(String) : [],
      body: String(body.body ?? ''),
      status: body.status ?? 'draft',
      now,
    });
    return json({ ok: true, slug });
  }

  const publishMatch = path.match(/^posts\/(.+)\/publish$/);
  if (publishMatch) {
    const slug = decodeURIComponent(publishMatch[1]);
    await publishPost(runner, slug, now);
    // Trigger a rebuild so the static pages pick the post up.
    const hook = getSecret('NEWSLETTER_DEPLOY_HOOK_URL');
    let rebuild = false;
    if (hook) {
      rebuild = await fetch(hook, { method: 'POST' }).then((r) => r.ok).catch(() => false);
    }
    return json({ ok: true, rebuildTriggered: rebuild });
  }

  return json({ error: 'not found' }, { status: 404 });
};

// ── GET ─────────────────────────────────────────────────────────────────────
export const GET: APIRoute = async ({ params, request }) => {
  if (!(await authed(request))) return unauthorized();
  const runner = getRunner(config.cms.d1Binding);
  const path = (params.path as string) ?? '';

  if (path === 'posts') {
    return json({ posts: await listPosts(runner) });
  }
  const match = path.match(/^posts\/(.+)$/);
  if (match) {
    const post = await getPost(runner, decodeURIComponent(match[1]));
    return post ? json(post) : json({ error: 'not found' }, { status: 404 });
  }
  return json({ error: 'not found' }, { status: 404 });
};

// ── DELETE ──────────────────────────────────────────────────────────────────
export const DELETE: APIRoute = async ({ params, request }) => {
  if (!(await authed(request))) return unauthorized();
  const runner = getRunner(config.cms.d1Binding);
  const path = (params.path as string) ?? '';
  const match = path.match(/^posts\/(.+)$/);
  if (match) {
    await deletePost(runner, decodeURIComponent(match[1]));
    return json({ ok: true });
  }
  return json({ error: 'not found' }, { status: 404 });
};

// ── R2 upload ─────────────────────────────────────────────────────────────
async function uploadHandler(request: Request): Promise<Response> {
  const form = await request.formData();
  const file = form.get('file');
  if (!(file instanceof File)) return json({ error: 'file required' }, { status: 400 });

  const ext = file.name.includes('.') ? file.name.slice(file.name.lastIndexOf('.')) : '';
  // Deterministic-ish key without Math.random: timestamp + name hash.
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const key = `newsletter/${Date.now()}-${safeName}${ext && safeName.endsWith(ext) ? '' : ext}`;

  const bucket = getBucket(config.cms.r2Binding);
  await bucket.put(key, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type || 'application/octet-stream' },
  } as unknown as undefined);

  const base = (config.cms.r2PublicBase ?? '').replace(/\/$/, '');
  const url = base ? `${base}/${key}` : `/${key}`;
  return json({ ok: true, url });
}
