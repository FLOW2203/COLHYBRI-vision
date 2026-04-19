import type { Locale } from '@/i18n';

export type ImpactRegionSlug =
  | 'france'
  | 'usa'
  | 'europe'
  | 'latam'
  | 'africa'
  | 'espana'
  | 'uk'
  | 'maroc';

// Regions displayed in the hub menu per locale (geolocalized by linguistic sphere).
// Regions NOT listed here remain accessible by direct URL for cross-sphere visitors
// (investors, international partners).
const REGIONS_BY_LOCALE: Partial<Record<Locale, ImpactRegionSlug[]>> = {
  fr: ['france', 'usa', 'europe', 'latam', 'africa'],
  es: ['espana', 'usa', 'europe', 'latam', 'africa'],
  en: ['france', 'usa', 'europe', 'latam', 'africa'],
  'en-gb': ['france', 'usa', 'uk', 'europe', 'africa'],
};

// Fallback for locales without a dedicated sphere: show the 5 primary regions.
const DEFAULT_REGIONS: ImpactRegionSlug[] = ['france', 'usa', 'europe', 'latam', 'africa'];

export function getRegionsForLocale(locale: string): ImpactRegionSlug[] {
  return REGIONS_BY_LOCALE[locale as Locale] ?? DEFAULT_REGIONS;
}

// Placeholder list for the "Roadmap internationale" section (TODO: future pages).
export const ROADMAP_REGIONS_BY_LOCALE: Partial<Record<Locale, string[]>> = {
  fr: ['Senegal', 'Cote d\'Ivoire', 'Tunisie', 'Belgique', 'Quebec'],
  es: ['Mexico', 'Colombia', 'Argentina', 'Chile', 'Peru'],
  en: ['Canada', 'Australia', 'Ireland'],
  'en-gb': ['Canada', 'Australia', 'Ireland'],
};
