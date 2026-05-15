import type { Locale } from '@/i18n';

export type ImpactRegionId =
  | 'france'
  | 'espana'
  | 'maroc'
  | 'usa'
  | 'uk'
  | 'europe'
  | 'latam'
  | 'africa';

export interface ImpactRegionMenuItem {
  id: ImpactRegionId;
  href: (locale: Locale) => string;
  i18nKey: string;
}

const REGIONS_BY_LOCALE: Partial<Record<Locale, ImpactRegionId[]>> = {
  fr: ['france', 'maroc'],
  es: ['espana'],
  en: ['usa', 'uk'],
  'en-gb': ['usa', 'uk'],
};

const DEFAULT_REGIONS: ImpactRegionId[] = ['france', 'usa'];

const ROADMAP_PLACEHOLDERS_BY_LOCALE: Partial<Record<Locale, string[]>> = {
  fr: ['Europe francophone (Belgique, Quebec)', 'Afrique francophone (Senegal, Cote d Ivoire, Tunisie)'],
  es: ['Mexico', 'Colombia', 'Argentina', 'Chile', 'Peru'],
  en: ['Canada', 'Australia', 'Ireland'],
  'en-gb': ['Canada', 'Australia', 'Ireland'],
};

export function getRegionsForLocale(locale: Locale): ImpactRegionId[] {
  return REGIONS_BY_LOCALE[locale] ?? DEFAULT_REGIONS;
}

export function getRoadmapPlaceholdersForLocale(locale: Locale): string[] {
  return ROADMAP_PLACEHOLDERS_BY_LOCALE[locale] ?? [];
}

export function getRegionHref(region: ImpactRegionId, locale: Locale): string {
  return `/${locale}/impact/${region}`;
}
