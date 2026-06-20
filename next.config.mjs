import createNextIntlPlugin from 'next-intl/plugin';
import { routeMap } from './lib/route-map.mjs';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

// Locales come straight from routeMap (the `home` entry carries every locale
// key), so the config never imports the TS i18n module and never drifts from it.
const locales = Object.keys(routeMap.home);

// ---------------------------------------------------------------------------
// Localized-slug routing is generated from routeMap (the SAME source the
// sitemap and hreflang use in lib/navigation.ts), so the router and the
// sitemap can never drift. The pages physically live under the English slug
// (routeMap[key].en); for every locale whose slug differs we emit a rewrite
// localizedSlug -> englishSlug. Non-ASCII slugs (zh/ja/hi) are percent-encoded
// because Next.js matches `source` against the encoded pathname.
// ---------------------------------------------------------------------------

// Route keys handled specially elsewhere, excluded from the generic rewrites:
//  - home: empty slug
//  - how-it-works: consolidated into /solution via redirects (below)
//  - solution-pool-solidaire: every localized slug is itself a real file path
const REWRITE_EXCLUDE = new Set(['home', 'how-it-works', 'solution-pool-solidaire']);

function encodeSlug(slug) {
  // encodeURI leaves ASCII slugs untouched and percent-encodes CJK/Devanagari,
  // preserving any '/' inside multi-segment slugs.
  return slug.split('/').map(encodeURIComponent).join('/');
}

function buildLocalizedRewrites() {
  const rewrites = [];
  for (const [routeKey, slugs] of Object.entries(routeMap)) {
    if (REWRITE_EXCLUDE.has(routeKey)) continue;
    const fileSlug = slugs.en; // pages live under the English slug
    if (!fileSlug) continue;
    for (const locale of locales) {
      const slug = slugs[locale];
      if (!slug || slug === fileSlug) continue; // identical -> served directly
      rewrites.push({
        source: `/${locale}/${encodeSlug(slug)}`,
        destination: `/${locale}/${fileSlug}`,
      });
    }
  }

  // Sub-routes of localized hubs must resolve to their canonical English
  // parent just like the base slug does:
  //   /{locale}/{impactSlug}/:rest*  ->  /{locale}/impact/:rest*   (regions)
  //   /{locale}/{blogSlug}/:rest*     ->  /{locale}/blog/:rest*     (articles)
  const parentRoutes = ['impact', 'blog'];
  for (const routeKey of parentRoutes) {
    const slugs = routeMap[routeKey];
    const fileSlug = slugs.en;
    for (const locale of locales) {
      const slug = slugs[locale];
      if (!slug || slug === fileSlug) continue;
      rewrites.push({
        source: `/${locale}/${encodeSlug(slug)}/:rest*`,
        destination: `/${locale}/${fileSlug}/:rest*`,
      });
    }
  }
  return rewrites;
}

function buildHowItWorksRedirects() {
  // /how-it-works (English alias) AND each localized slug consolidate into /solution.
  const hiw = routeMap['how-it-works'];
  const redirects = [];
  for (const locale of locales) {
    const localized = hiw[locale];
    const sources = new Set(['how-it-works']);
    if (localized) sources.add(localized);
    for (const slug of sources) {
      redirects.push({
        source: `/${locale}/${encodeSlug(slug)}`,
        destination: `/${locale}/solution`,
        permanent: true,
      });
    }
  }
  return redirects;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'isuzbpzwxcagtnbosgjl.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    // EN / en-gb: rename /solution/pool-solidaire → /solution/community-pool
    // (FR keeps pool-solidaire since it is the locale term)
    const communityPoolRedirects = [
      { source: '/en/solution/pool-solidaire', destination: '/en/solution/community-pool', permanent: true },
      { source: '/en-gb/solution/pool-solidaire', destination: '/en-gb/solution/community-pool', permanent: true },
    ];
    return [...buildHowItWorksRedirects(), ...communityPoolRedirects];
  },
  async rewrites() {
    // Localized slugs → actual file-based routes, generated from routeMap.
    return buildLocalizedRewrites();
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      // Next.js injects inline scripts; Vercel Analytics + Live Preview
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://vercel.live",
      // Tailwind runtime styles + Google Fonts CSS
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      // Supabase vision-images, world-atlas TopoJSON thumbnails, ONLYMORE Group CDN for team photos
      "img-src 'self' data: blob: https://isuzbpzwxcagtnbosgjl.supabase.co https://cdn.jsdelivr.net https://www.onlymore.group",
      // world-atlas geojson fetched by react-simple-maps, Supabase APIs, Vercel telemetry + HMR
      "connect-src 'self' https://isuzbpzwxcagtnbosgjl.supabase.co https://cdn.jsdelivr.net https://vitals.vercel-insights.com https://vercel.live wss://vercel.live",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=(), browsing-topics=()' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
