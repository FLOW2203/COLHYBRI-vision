import type { Locale } from '@/i18n';
// Mapping of route keys to locale-specific slugs.
// The data lives in route-map.mjs so next.config.mjs (ESM) can share the exact
// same source of truth used here for the sitemap, hreflang and internal links.
import { routeMap as routeMapData } from './route-map.mjs';

export const BASE_URL = 'https://www.colhybri.vision';

export const routeMap: Record<string, Record<string, string>> = routeMapData;

export function getLocalizedPath(routeKey: string, locale: Locale): string {
  const slug = routeMap[routeKey]?.[locale] ?? routeMap[routeKey]?.['en'] ?? routeKey;
  if (!slug) return `/${locale}`;
  return `/${locale}/${slug}`;
}

export function getAbsoluteUrl(path: string): string {
  return `${BASE_URL}${path}`;
}

export function getHreflangAlternates(routeKey: string): Array<{ locale: string; url: string }> {
  const allLocales: Locale[] = ['en', 'en-gb', 'fr', 'es', 'pt', 'de', 'it', 'zh', 'ja', 'hi', 'pl'];
  const alternates: Array<{ locale: string; url: string }> = allLocales.map((locale) => ({
    locale,
    url: getAbsoluteUrl(getLocalizedPath(routeKey, locale)),
  }));
  alternates.push({
    locale: 'x-default',
    url: getAbsoluteUrl(getLocalizedPath(routeKey, 'en')),
  });
  return alternates;
}

export const localeLabels: Record<string, { flag: string; name: string }> = {
  en: { flag: '\uD83C\uDDFA\uD83C\uDDF8', name: 'EN' },
  'en-gb': { flag: '\uD83C\uDDEC\uD83C\uDDE7', name: 'GB' },
  fr: { flag: '\uD83C\uDDEB\uD83C\uDDF7', name: 'FR' },
  es: { flag: '\uD83C\uDDEA\uD83C\uDDF8', name: 'ES' },
  pt: { flag: '\uD83C\uDDE7\uD83C\uDDF7', name: 'PT' },
  de: { flag: '\uD83C\uDDE9\uD83C\uDDEA', name: 'DE' },
  it: { flag: '\uD83C\uDDEE\uD83C\uDDF9', name: 'IT' },
  zh: { flag: '\uD83C\uDDE8\uD83C\uDDF3', name: 'ZH' },
  ja: { flag: '\uD83C\uDDEF\uD83C\uDDF5', name: 'JA' },
  hi: { flag: '\uD83C\uDDEE\uD83C\uDDF3', name: 'HI' },
  pl: { flag: '\uD83C\uDDF5\uD83C\uDDF1', name: 'PL' },
};
