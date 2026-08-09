# COLHYBRI embeddings layer (GEO semantic layer)

Chunks the cocon content, embeds it, and stores it in Supabase to power semantic
search and internal-link suggestions across the bilingual cocon.

## Pieces

- `supabase/migrations/20260627000000_content_embeddings.sql` : `vector` extension,
  `content_embeddings` table, HNSW cosine index, RLS (public read / service-role
  write), and two SQL functions: `match_content_embeddings` (semantic search) and
  `suggest_internal_links` (maillage interne).
- `generate-embeddings.js` : corpus build + chunking (300 to 500 tokens) + embed +
  idempotent upsert, plus `search` and `links` query helpers.

## 1. Apply the migration (after review)

Nothing here is applied to production automatically. Apply with the Supabase CLI:

```bash
supabase link --project-ref isuzbpzwxcagtnbosgjl
supabase db push
```

Or paste the migration into the Supabase SQL editor.

## 2. Configure environment (never commit secrets)

```bash
export SUPABASE_URL="https://isuzbpzwxcagtnbosgjl.supabase.co"
export SUPABASE_SERVICE_ROLE_KEY="..."   # service role, bypasses RLS, write access
export EMBEDDINGS_API_KEY="..."          # embedding model provider key
# Optional, with defaults:
export EMBEDDINGS_API_URL="https://api.openai.com/v1/embeddings"
export EMBEDDING_MODEL="text-embedding-3-small"
export EMBEDDING_DIM="1536"
export SITE_URL="https://www.colhybri.vision"
```

The embedding dimension (`EMBEDDING_DIM`) MUST match `vector(N)` in the migration.
Default is OpenAI `text-embedding-3-small` (1536). To use Voyage instead, set the
URL/model/dim and change the migration's `vector(1536)` to `vector(1024)`.

## 3. Run

```bash
# Preview chunking with no API calls and no writes:
node scripts/embeddings/generate-embeddings.js embed --dry-run

# Embed + upsert everything (idempotent, skips unchanged chunks):
node scripts/embeddings/generate-embeddings.js embed

# Just one locale, or a capped run:
node scripts/embeddings/generate-embeddings.js embed --locale fr --limit 50

# Semantic search:
node scripts/embeddings/generate-embeddings.js search "revitalize downtown" en

# Internal-link suggestions for a page:
node scripts/embeddings/generate-embeddings.js links https://www.colhybri.vision/en/main-street-america en
```

## Notes

- Re-runs are safe: each chunk has a `content_hash`; unchanged chunks are skipped.
- Read-only commands (`search`, `links`) work with the anon key.
- The corpus is sourced from `messages/<locale>.json` cocon entries (title, snippet,
  sections, FAQ, comparison matrix). Extend `buildCorpus` to add other page types.
