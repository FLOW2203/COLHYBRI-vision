'use client';

import { GEO_LEGENDS, getLegendForLocale } from '@/data/geo-legends';

interface GeoLegendSwitcherProps {
  currentGeo: string;
  locale: string;
  onSelect: (geoId: string) => void;
}

const legendFlags: Record<string, string> = {
  fr: '\uD83C\uDDEB\uD83C\uDDF7',
  'en-gb': '\uD83C\uDDEC\uD83C\uDDE7',
  en: '\uD83C\uDDFA\uD83C\uDDF8',
  es: '\uD83C\uDDEA\uD83C\uDDF8',
  pt: '\uD83C\uDDE7\uD83C\uDDF7',
  de: '\uD83C\uDDE9\uD83C\uDDEA',
  it: '\uD83C\uDDEE\uD83C\uDDF9',
  ja: '\uD83C\uDDEF\uD83C\uDDF5',
  zh: '\uD83C\uDDE8\uD83C\uDDF3',
  hi: '\uD83C\uDDEE\uD83C\uDDF3',
  pl: '\uD83C\uDDF5\uD83C\uDDF1',
  africa: '\uD83C\uDF0D',
};

export function GeoLegendSwitcher({ currentGeo, locale, onSelect }: GeoLegendSwitcherProps) {
  const legendIds = Object.keys(GEO_LEGENDS);

  return (
    <nav aria-label="Cultural legends navigation" className="flex flex-wrap justify-center gap-2">
      {legendIds.map((id) => {
        const legend = GEO_LEGENDS[id];
        const isActive = id === currentGeo;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            aria-current={isActive ? 'page' : undefined}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              isActive
                ? 'bg-colhybri-primary text-white shadow-md'
                : 'bg-colhybri-light text-colhybri-dark/70 hover:bg-colhybri-primary/10 hover:text-colhybri-dark'
            }`}
          >
            {legendFlags[id] || '\uD83C\uDF10'} {legend.protagoniste}
          </button>
        );
      })}
    </nav>
  );
}
