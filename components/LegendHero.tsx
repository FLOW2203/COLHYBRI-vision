'use client';

import { getLegendForLocale } from '@/data/geo-legends';
import { getCulturalContext } from '@/lib/culturalMapping';
import type { Locale } from '@/i18n';

interface LegendHeroProps {
  locale: string;
}

export function LegendHero({ locale }: LegendHeroProps) {
  const ctx = getCulturalContext(locale as Locale);
  const legend = ctx.legend;

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${legend.colorPalette.gradient}`}
      id="legend"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Protagoniste */}
          <p className="text-white/80 font-semibold text-sm tracking-wide uppercase mb-4">
            {legend.protagoniste}
          </p>

          {/* Titre */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
            {legend.titre}
          </h2>

          {/* Histoire */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <p className="text-white/90 text-lg leading-relaxed">
              {legend.histoire}
            </p>
          </div>

          {/* Symbole */}
          <div className="mb-8">
            <p className="text-white/70 italic text-base">
              {legend.symbole}
            </p>
          </div>

          {/* Mission COLHYBRI */}
          <div className="border-l-4 border-white/60 pl-6 text-left max-w-2xl mx-auto">
            <p className="text-white font-medium text-lg leading-relaxed">
              {legend.missionColhybri}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
