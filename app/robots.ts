import type { MetadataRoute } from 'next';

/**
 * Smart robots policy (doctrine ONLYMORE, 2026-04-19):
 * - Allow classic search engines explicitly.
 * - Allow user-facing LLM crawlers (ChatGPT, Claude, Perplexity, Google AI)
 *   so COLHYBRI keeps getting cited in their answers — investors and
 *   partners will use those tools to check us.
 * - Block dataset / training scrapers that feed commercial ML pipelines
 *   without attribution (CCBot, Bytespider, Omgilibot, ImagesiftBot).
 * - Wildcard bucket gets a polite crawl-delay + /api + /_next shielded.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.colhybri.vision';

  return {
    rules: [
      // Mainstream search engines — always welcome.
      {
        userAgent: ['Googlebot', 'Bingbot', 'DuckDuckBot', 'Slurp', 'YandexBot', 'Applebot'],
        allow: '/',
      },
      // User-facing LLM crawlers — welcome (drives discovery via chat UIs).
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'Google-Extended',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Perplexity-User',
          'cohere-ai',
          'YouBot',
        ],
        allow: '/',
      },
      // Commercial dataset scrapers — blocked (train without attribution).
      {
        userAgent: ['CCBot', 'Bytespider', 'Omgilibot', 'Omgili', 'ImagesiftBot', 'Diffbot', 'magpie-crawler', 'MJ12bot', 'SemrushBot', 'AhrefsBot'],
        disallow: '/',
      },
      // Everything else — allowed with lane restrictions.
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/dashboard/', '/private/'],
        crawlDelay: 10,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
