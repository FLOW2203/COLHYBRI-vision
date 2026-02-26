'use client';

import Link from 'next/link';
import { getLegendForLocale, type GeoLegend } from '@/data/geo-legends';

interface LegendCardProps {
  legendId: string;
  locale: string;
  compact?: boolean;
}

export function LegendCard({ legendId, locale, compact = false }: LegendCardProps) {
  const legend: GeoLegend = getLegendForLocale(legendId);

  if (compact) {
    return (
      <div className="card p-4 hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-bold mb-1">{legend.protagoniste}</h3>
        <p className="text-colhybri-dark/60 text-sm line-clamp-2">{legend.symbole}</p>
        <Link
          href={`/${locale}/impact/${legend.region}`}
          className="text-colhybri-primary text-sm font-medium mt-2 inline-block hover:underline"
        >
          &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className={`card overflow-hidden bg-gradient-to-br ${legend.colorPalette.gradient}`}>
      <div className="bg-black/40 p-6">
        <p className="text-white/70 text-sm font-medium uppercase tracking-wide mb-2">
          {legend.region}
        </p>
        <h3 className="text-xl font-bold text-white mb-3">{legend.titre}</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-4">
          {legend.histoire}
        </p>
        <blockquote className="border-l-3 border-white/50 pl-3 mb-4">
          <p className="text-white/90 italic text-sm">{legend.symbole}</p>
        </blockquote>
        <p className="text-white/70 text-sm leading-relaxed">{legend.missionColhybri}</p>
        <Link
          href={`/${locale}/impact/${legend.region}`}
          className="inline-block mt-4 px-4 py-2 rounded-lg bg-white/20 text-white text-sm font-medium hover:bg-white/30 transition-colors"
        >
          &rarr;
        </Link>
      </div>
    </div>
  );
}
