import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n';

const intl = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

// Hosts allowed to embed COLHYBRI images via <img src> (own properties +
// investor/partner sites) — exact or subdomain match.
const ALLOWED_REFERER_HOSTS = [
  'colhybri.vision',
  'colhybri.com',
  'onlymore.group',
  'localhost',
];

// User-Agent substrings of legitimate social / messaging preview bots
// that fetch Open Graph images — must NOT be blocked because they power
// link previews shared to investors, press, partners.
const SOCIAL_PREVIEW_UA_PATTERNS = [
  'facebookexternalhit',
  'Facebot',
  'Twitterbot',
  'LinkedInBot',
  'Slackbot',
  'Discordbot',
  'WhatsApp',
  'TelegramBot',
  'SkypeUriPreview',
  'redditbot',
  'Pinterest',
  'Googlebot',
  'Bingbot',
  'DuckDuckBot',
  'YandexBot',
  'Applebot',
];

function isAllowedRefererHost(hostname: string): boolean {
  return ALLOWED_REFERER_HOSTS.some(
    (allowed) => hostname === allowed || hostname.endsWith('.' + allowed),
  );
}

function isVercelPreview(hostname: string): boolean {
  // colhybri-vision-git-<branch>-<team>.vercel.app + *.vercel.app production aliases
  return hostname.endsWith('.vercel.app');
}

function isSocialPreviewBot(ua: string | null): boolean {
  if (!ua) return false;
  return SOCIAL_PREVIEW_UA_PATTERNS.some((p) =>
    ua.toLowerCase().includes(p.toLowerCase()),
  );
}

function allowImageRequest(request: NextRequest): boolean {
  // No Referer → could be direct paste, crawler, or social bot.
  // We keep it permissive for bots + accept direct requests (SEO friendly).
  const referer = request.headers.get('referer');
  if (!referer) return true;

  // Social / SEO preview bots always allowed regardless of Referer.
  if (isSocialPreviewBot(request.headers.get('user-agent'))) return true;

  try {
    const url = new URL(referer);
    if (isAllowedRefererHost(url.hostname)) return true;
    if (isVercelPreview(url.hostname)) return true;
    return false;
  } catch {
    // Malformed Referer — be safe, block.
    return false;
  }
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Hotlink protection for Next.js Image Optimization endpoint.
  // Direct Supabase URLs remain fully hotlinkable (Supabase is public by design).
  if (pathname.startsWith('/_next/image')) {
    if (!allowImageRequest(request)) {
      return new NextResponse('Forbidden: image hotlinking not allowed', {
        status: 403,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
    // Allowed — fall through to default Next.js image handling.
    return NextResponse.next();
  }

  return intl(request);
}

export const config = {
  // First matcher covers locale-prefixed pages; second matcher covers the
  // image optimization endpoint so hotlink protection fires.
  matcher: [
    '/',
    '/(en|en-gb|fr|es|pt|de|it|zh|ja|hi|pl)/:path*',
    '/_next/image',
  ],
};
