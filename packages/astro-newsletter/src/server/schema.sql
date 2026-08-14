CREATE TABLE IF NOT EXISTS newsletter_posts (
  slug        TEXT PRIMARY KEY,
  issue       INTEGER,
  title       TEXT NOT NULL,
  date        TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  tags        TEXT NOT NULL DEFAULT '[]',   -- JSON array
  body        TEXT NOT NULL,                -- markdown 原文
  status      TEXT NOT NULL DEFAULT 'draft',-- draft | published
  created_at  TEXT NOT NULL,
  updated_at  TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_newsletter_status_issue ON newsletter_posts(status, issue DESC);

-- Admin login throttling (per client IP). Epoch-ms timestamps.
CREATE TABLE IF NOT EXISTS newsletter_login_attempts (
  ip           TEXT PRIMARY KEY,
  fails        INTEGER NOT NULL DEFAULT 0,
  window_start INTEGER NOT NULL,
  locked_until INTEGER NOT NULL DEFAULT 0
);
