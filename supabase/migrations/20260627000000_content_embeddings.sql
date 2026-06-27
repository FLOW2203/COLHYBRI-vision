-- COLHYBRI GEO embeddings layer
-- Project ref: isuzbpzwxcagtnbosgjl (COLHYBRI). Apply via Supabase CLI or the
-- dashboard SQL editor AFTER review. Do not run against production blindly.
--
-- Stores chunked page content + vector embeddings to power semantic search and
-- internal-link suggestions for the cocon. Read is public; writes go through the
-- service_role key (which bypasses RLS), used only by scripts/embeddings.
--
-- IMPORTANT placeholder: vector dimension MUST match the embedding model chosen
-- in scripts/embeddings (.env EMBEDDING_DIM). 1536 = OpenAI text-embedding-3-small.
-- If you switch models (e.g. Voyage voyage-3 = 1024), change every vector(1536)
-- below and re-run, since pgvector column dimension is fixed at creation.

create extension if not exists vector with schema extensions;

create table if not exists public.content_embeddings (
  id           uuid primary key default gen_random_uuid(),
  url          text not null,
  locale       text not null,
  title        text,
  chunk_index  int  not null default 0,
  chunk_text   text not null,
  content_hash text not null,
  token_count  int,
  embedding    vector(1536),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  unique (url, locale, chunk_index)
);

comment on table public.content_embeddings is
  'Chunked COLHYBRI page content with vector embeddings for GEO semantic search and internal-link suggestion.';

-- Approximate-nearest-neighbour index (cosine). HNSW builds on populated data;
-- it is fine to create up front on an empty table.
create index if not exists content_embeddings_embedding_hnsw
  on public.content_embeddings using hnsw (embedding extensions.vector_cosine_ops);

create index if not exists content_embeddings_url_locale_idx
  on public.content_embeddings (url, locale);

-- Row Level Security: public read, service-role write.
alter table public.content_embeddings enable row level security;

drop policy if exists "content_embeddings public read" on public.content_embeddings;
create policy "content_embeddings public read"
  on public.content_embeddings
  for select
  to anon, authenticated
  using (true);

-- No insert/update/delete policies: with RLS enabled, only the service_role key
-- (which bypasses RLS) may write. The embeddings pipeline uses that key.

-- Semantic search: nearest chunks to a query embedding, optionally per locale.
create or replace function public.match_content_embeddings(
  query_embedding extensions.vector(1536),
  match_count int default 5,
  filter_locale text default null
)
returns table (
  id uuid,
  url text,
  locale text,
  title text,
  chunk_text text,
  similarity float
)
language sql
stable
as $$
  select
    ce.id,
    ce.url,
    ce.locale,
    ce.title,
    ce.chunk_text,
    1 - (ce.embedding <=> query_embedding) as similarity
  from public.content_embeddings ce
  where ce.embedding is not null
    and (filter_locale is null or ce.locale = filter_locale)
  order by ce.embedding <=> query_embedding
  limit match_count;
$$;

-- Internal-link suggestions: most semantically related OTHER pages (same locale),
-- aggregated to one row per destination URL. Feeds cocon maillage interne.
create or replace function public.suggest_internal_links(
  source_url text,
  source_locale text,
  match_count int default 5
)
returns table (
  url text,
  title text,
  similarity float
)
language sql
stable
as $$
  with src as (
    select embedding
    from public.content_embeddings
    where url = source_url and locale = source_locale and embedding is not null
    limit 1
  )
  select
    ce.url,
    max(ce.title) as title,
    max(1 - (ce.embedding <=> src.embedding)) as similarity
  from public.content_embeddings ce
  cross join src
  where ce.locale = source_locale
    and ce.url <> source_url
    and ce.embedding is not null
  group by ce.url
  order by similarity desc
  limit match_count;
$$;

grant execute on function public.match_content_embeddings(extensions.vector, int, text) to anon, authenticated;
grant execute on function public.suggest_internal_links(text, text, int) to anon, authenticated;
