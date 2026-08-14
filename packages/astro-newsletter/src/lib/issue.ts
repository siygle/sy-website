// Single source of truth for deriving an issue number from a newsletter entry.
// CMS entries carry an explicit `issue` field; files mode falls back to parsing
// the first run of digits out of the entry id (e.g. `whispers-...-72` -> "72").

export interface IssueLike {
  id: string;
  data?: { issue?: number | null };
}

export function getIssueNumber(entry: IssueLike): string {
  if (entry?.data?.issue != null) return String(entry.data.issue);
  return String(entry?.id ?? '').match(/(\d+)/)?.[1] || '';
}

/** Numeric form for sorting; missing numbers sort as 0. */
export function getIssueNumberValue(entry: IssueLike): number {
  const n = getIssueNumber(entry);
  return n ? parseInt(n, 10) : 0;
}
