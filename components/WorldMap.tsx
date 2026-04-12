'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { useTranslations } from 'next-intl';

// Free world topojson mirror
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Numeric ISO 3166-1 country IDs highlighted as COLHYBRI target territories.
// (world-atlas topojson uses numeric ids on properties.)
const TARGET_COUNTRIES = new Set([
  '250', // France
  '840', // USA
  '724', // Spain
  '620', // Portugal
  '380', // Italy
  '076', // Brazil
  '170', // Colombia
  '484', // Mexico
  '686', // Senegal
  '384', // Cote d'Ivoire
  '788', // Tunisia
]);

type MarkerDef = {
  key: string;
  coords: [number, number];
  region: 'france' | 'usa' | 'europe' | 'latam' | 'africa';
};

const MARKERS: MarkerDef[] = [
  { key: 'paris', coords: [2.35, 48.86], region: 'france' },
  { key: 'pittsburgh', coords: [-79.99, 40.44], region: 'usa' },
  { key: 'barcelona', coords: [2.17, 41.39], region: 'europe' },
  { key: 'dakar', coords: [-17.44, 14.69], region: 'africa' },
  { key: 'saopaulo', coords: [-46.63, -23.55], region: 'latam' },
];

interface WorldMapProps {
  locale: string;
}

export function WorldMap({ locale }: WorldMapProps) {
  const t = useTranslations('worldMap');
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  const goTo = useCallback(
    (region: string) => {
      router.push(`/${locale}/impact/${region}`);
    },
    [locale, router]
  );

  return (
    <div className="relative w-full">
      <ComposableMap
        projectionConfig={{ scale: 150 }}
        width={980}
        height={480}
        style={{ width: '100%', height: 'auto' }}
      >
        <ZoomableGroup center={[10, 30]} zoom={1}>
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Array<{ rsmKey: string; id: string }> }) =>
              geographies.map((geo) => {
                const isTarget = TARGET_COUNTRIES.has(geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isTarget ? '#008080' : '#F0F0F0'}
                    fillOpacity={isTarget ? 0.55 : 1}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: {
                        outline: 'none',
                        fill: isTarget ? '#008080' : '#E0E0E0',
                        fillOpacity: isTarget ? 0.75 : 1,
                      },
                      pressed: { outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {MARKERS.map((m) => (
            <Marker
              key={m.key}
              coordinates={m.coords}
              onClick={() => goTo(m.region)}
              onMouseEnter={() => setHovered(m.key)}
              onMouseLeave={() => setHovered(null)}
            >
              <g style={{ cursor: 'pointer' }}>
                {/* outer pulse */}
                <circle r={10} fill="#008080" fillOpacity={0.25} className="animate-pulse-slow" />
                {/* core marker */}
                <circle r={5} fill="#008080" stroke="#FFFFFF" strokeWidth={1.5} />
              </g>
              {hovered === m.key && (
                <g transform="translate(10,-8)">
                  <rect
                    x={0}
                    y={-18}
                    rx={6}
                    ry={6}
                    width={Math.max(90, t(`markers.${m.key}.label`).length * 6.5)}
                    height={24}
                    fill="#1A1A2E"
                  />
                  <text
                    x={8}
                    y={-2}
                    fill="#FFFFFF"
                    fontSize={12}
                    fontFamily="DM Sans, sans-serif"
                    fontWeight={500}
                  >
                    {t(`markers.${m.key}.label`)}
                  </text>
                </g>
              )}
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      <p className="text-center text-xs text-colhybri-dark/50 mt-4 font-sans">
        {t('hint')}
      </p>
    </div>
  );
}
