// lib/culturalMapping.ts
// Mapping culturel : locale → région → légende → palette de couleurs
// Centralise la logique de personnalisation culturelle par géographie.

import type { Locale } from '@/i18n';
import { getLegendForLocale, getColorPaletteForLocale, type GeoLegend } from '@/data/geo-legends';
import { LOCALE_DEFAULT_REGION } from '@/data/trust-data';

// Mapping locale → région géographique
export const LOCALE_REGION_MAP: Record<string, string> = {
  fr: 'france',
  en: 'usa',
  'en-gb': 'united-kingdom',
  es: 'spain',
  pt: 'brazil',
  de: 'germany',
  it: 'italy',
  zh: 'china',
  ja: 'japan',
  hi: 'india',
  pl: 'poland',
};

// Mapping locale → devise
export const LOCALE_CURRENCY_MAP: Record<string, { symbol: string; code: string; name: string }> = {
  fr: { symbol: '€', code: 'EUR', name: 'Euro' },
  en: { symbol: '$', code: 'USD', name: 'US Dollar' },
  'en-gb': { symbol: '£', code: 'GBP', name: 'British Pound' },
  es: { symbol: '€', code: 'EUR', name: 'Euro' },
  pt: { symbol: 'R$', code: 'BRL', name: 'Real' },
  de: { symbol: '€', code: 'EUR', name: 'Euro' },
  it: { symbol: '€', code: 'EUR', name: 'Euro' },
  zh: { symbol: '¥', code: 'CNY', name: 'Yuan' },
  ja: { symbol: '¥', code: 'JPY', name: 'Yen' },
  hi: { symbol: '₹', code: 'INR', name: 'Rupee' },
  pl: { symbol: 'zł', code: 'PLN', name: 'Złoty' },
};

export interface CulturalContext {
  locale: Locale;
  region: string;
  trustRegion: string;
  legend: GeoLegend;
  currency: { symbol: string; code: string; name: string };
  colorPalette: GeoLegend['colorPalette'];
}

/**
 * Retourne le contexte culturel complet pour un locale donné.
 * Utilisé par les composants pour adapter le contenu à la région.
 */
export function getCulturalContext(locale: Locale): CulturalContext {
  return {
    locale,
    region: LOCALE_REGION_MAP[locale] || 'usa',
    trustRegion: LOCALE_DEFAULT_REGION[locale] || 'usa',
    legend: getLegendForLocale(locale),
    currency: LOCALE_CURRENCY_MAP[locale] || LOCALE_CURRENCY_MAP['en'],
    colorPalette: getColorPaletteForLocale(locale),
  };
}

/**
 * Retourne le nom localisé de la région pour l'affichage.
 */
export function getRegionDisplayName(locale: Locale): string {
  const regionNames: Record<string, string> = {
    fr: 'France',
    en: 'United States',
    'en-gb': 'United Kingdom',
    es: 'España',
    pt: 'Brasil',
    de: 'Deutschland',
    it: 'Italia',
    zh: '中国',
    ja: '日本',
    hi: 'भारत',
    pl: 'Polska',
  };
  return regionNames[locale] || 'World';
}
