'use client';

import { useState, useCallback } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { useTranslations } from 'next-intl';
import { TRUST_DATA, getRegionForLocale } from '@/data/trust-data';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Representative centroid (longitude, latitude) for each tracked region.
type MarkerSpec = {
  id: string;
  coords: [number, number];
  labelOffsetY?: number;
};

const REGION_MARKERS: MarkerSpec[] = [
  { id: 'france', coords: [2.35, 46.23] },
  { id: 'uk', coords: [-3.44, 54.0], labelOffsetY: -16 },
  { id: 'usa', coords: [-98.5, 39.5] },
  { id: 'canada', coords: [-106.0, 58.0], labelOffsetY: -16 },
  { id: 'brazil', coords: [-53.0, -12.0] },
  { id: 'africa', coords: [18.0, 2.0] },
  { id: 'eastern-europe', coords: [25.0, 50.5] },
  { id: 'india', coords: [80.0, 22.0] },
  { id: 'japan', coords: [138.0, 37.0] },
];

function potentialColor(potential: number): string {
  switch (potential) {
    case 5:
      return '#00A878'; // colhybri primary — Highest
    case 4:
      return '#2dd4bf'; // teal — High
    case 3:
    default:
      return '#FF6B35'; // colhybri secondary — Moderate
  }
}

interface WorldTrustMapProps {
  locale: string;
  onRegionClick: (regionId: string) => void;
}

export function WorldTrustMap({ locale, onRegionClick }: WorldTrustMapProps) {
  const t = useTranslations('trustMap');
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleMarkerClick = useCallback(
    (regionId: string) => {
      setSelectedRegion(regionId);
    },
    []
  );

  const handleExplore = useCallback(
    (regionId: string) => {
      onRegionClick(regionId);
    },
    [onRegionClick]
  );

  const selectedData = selectedRegion ? TRUST_DATA[selectedRegion] : null;
  const selectedLocaleData = selectedRegion
    ? getRegionForLocale(selectedRegion, locale)
    : null;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-5 mb-6">
        {[5, 4, 3].map((p) => (
          <div key={p} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: potentialColor(p) }}
            />
            <span className="text-colhybri-dark/70 text-xs font-sans">
              {t(`legend.score${p}`)}
            </span>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="relative rounded-2xl overflow-hidden border border-colhybri-teal/10 bg-colhybri-cream">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 155 }}
          width={980}
          height={480}
          style={{ width: '100%', height: 'auto' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Array<{ rsmKey: string; id: string }> }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E8EFE6"
                  stroke="#FFFFFF"
                  strokeWidth={0.4}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: '#DDE8DB' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {REGION_MARKERS.map((marker) => {
            const data = TRUST_DATA[marker.id];
            if (!data) return null;
            const color = potentialColor(data.colhybriPotential);
            const isHovered = hoveredRegion === marker.id;
            const isSelected = selectedRegion === marker.id;
            const scale = isHovered || isSelected ? 1.35 : 1;
            const localeData = getRegionForLocale(marker.id, locale);
            const label = localeData?.regionName ?? t(`regions.${marker.id}`);

            return (
              <Marker
                key={marker.id}
                coordinates={marker.coords}
                onMouseEnter={() => setHoveredRegion(marker.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => handleMarkerClick(marker.id)}
                style={{
                  default: { cursor: 'pointer' },
                  hover: { cursor: 'pointer' },
                  pressed: { cursor: 'pointer' },
                }}
              >
                <g transform={`scale(${scale})`} style={{ transition: 'transform 180ms ease' }}>
                  <circle
                    r={9}
                    fill={color}
                    fillOpacity={0.22}
                    stroke="none"
                  />
                  <circle
                    r={5}
                    fill={color}
                    stroke="#FFFFFF"
                    strokeWidth={1.5}
                  />
                </g>
                <text
                  textAnchor="middle"
                  y={marker.labelOffsetY ?? 18}
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: 11,
                    fontWeight: 600,
                    fill: '#1A1A2E',
                    pointerEvents: 'none',
                  }}
                >
                  {label}
                </text>
              </Marker>
            );
          })}
        </ComposableMap>

        {/* Detail panel */}
        {selectedData && selectedLocaleData && (
          <div
            role="dialog"
            aria-label={selectedLocaleData.regionName}
            className="absolute top-4 right-4 max-w-xs w-[85%] sm:w-80 bg-white rounded-xl shadow-xl border border-colhybri-teal/20 p-5"
          >
            <button
              type="button"
              onClick={() => setSelectedRegion(null)}
              className="absolute top-3 right-3 text-colhybri-dark/50 hover:text-colhybri-dark text-xl leading-none"
              aria-label={t('close')}
            >
              ×
            </button>
            <p
              className="font-sans text-xs uppercase tracking-widest mb-2"
              style={{ color: potentialColor(selectedData.colhybriPotential) }}
            >
              {t(`legend.score${selectedData.colhybriPotential}`)}
            </p>
            <h3 className="font-display text-lg font-semibold text-colhybri-dark mb-3">
              {selectedLocaleData.regionName}
            </h3>
            <dl className="space-y-2 text-sm font-sans">
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-colhybri-dark/60">{t('labels.loneliness')}</dt>
                <dd className="font-bold text-colhybri-dark">{selectedData.lonelinessRate}%</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-colhybri-dark/60">{t('labels.trust')}</dt>
                <dd className="font-bold text-colhybri-dark">{selectedData.trustRate}%</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-colhybri-dark/60">{t('labels.population')}</dt>
                <dd className="font-bold text-colhybri-dark">{selectedData.adultPopulation}</dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={() => handleExplore(selectedRegion!)}
              className="mt-5 w-full px-4 py-2 bg-colhybri-teal text-white text-sm font-semibold rounded-full hover:bg-colhybri-gold transition-colors"
            >
              {t('explore')}
            </button>
          </div>
        )}
      </div>

      {/* Hint + sources */}
      <p className="text-center text-xs text-colhybri-dark/50 mt-4 font-sans">
        {t('hint')}
      </p>
      <p className="text-center text-xs text-colhybri-dark/40 mt-1 font-sans">
        {t('sources')}
      </p>
    </div>
  );
}
