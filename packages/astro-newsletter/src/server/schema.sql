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
