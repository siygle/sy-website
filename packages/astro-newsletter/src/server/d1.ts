// A tiny D1 access shim with two interchangeable backends behind one interface,
// so the query strings in repo.ts are written exactly once:
//
//   - build time (Node): the D1 REST API, authenticated with CF_API_TOKEN. A
//     Worker binding is not reachable from a Node build process, so this is the
//     only clean path.
//   - runtime (admin SSR): a real D1Database binding (see server/runtime.ts).

export interface D1QueryResult<T = Record<string, unknown>> {
  results: T[];
}

export interface D1Runner {
  all<T = Record<string, unknown>>(sql: string, params?: unknown[]): Promise<D1QueryResult<T>>;
  run(sql: string, params?: unknown[]): Promise<void>;
}

export interface D1HttpConfig {
  accountId?: string;
  databaseId?: string;
  apiToken?: string;
}

/** Build-time backend: Cloudflare D1 REST API. */
export function httpRunner(config: D1HttpConfig): D1Runner {
  const { accountId, databaseId, apiToken } = config;
  if (!accountId || !databaseId || !apiToken) {
    throw new Error(
      'D1 HTTP access needs CF_ACCOUNT_ID, CF_D1_DATABASE_ID and CF_API_TOKEN.',
    );
  }
  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`;

  async function exec<T>(sql: string, params: unknown[] = []): Promise<D1QueryResult<T>> {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sql, params }),
    });
    const json = (await res.json()) as {
      success: boolean;
      errors?: { message: string }[];
      result?: { results: T[] }[];
    };
    if (!res.ok || !json.success) {
      const msg = json.errors?.map((e) => e.message).join('; ') || res.statusText;
      throw new Error(`D1 query failed: ${msg}`);
    }
    return { results: json.result?.[0]?.results ?? [] };
  }

  return {
    all: (sql, params) => exec(sql, params),
    run: async (sql, params) => {
      await exec(sql, params);
    },
  };
}

// Minimal shape of the runtime D1 binding we rely on.
export interface D1DatabaseLike {
  prepare(sql: string): {
    bind(...values: unknown[]): {
      all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
      run(): Promise<unknown>;
    };
  };
}

/** Runtime backend: a live D1Database binding. */
export function bindingRunner(db: D1DatabaseLike): D1Runner {
  return {
    all: async <T,>(sql: string, params: unknown[] = []) => {
      const { results } = await db.prepare(sql).bind(...params).all<T>();
      return { results };
    },
    run: async (sql: string, params: unknown[] = []) => {
      await db.prepare(sql).bind(...params).run();
    },
  };
}
