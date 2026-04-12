import type { ReactNode } from 'react';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { getLocalizedPath } from '@/lib/navigation';

export interface RegionStat {
  value: string;
  label: string;
}

export interface ImpactRegionTemplateProps {
  locale: Locale;
  badge: string;
  title: string;
  subtitle: string;
  stats: RegionStat[];
  contextParagraphs: string[];
  propositionTitle: string;
  propositionBody: string;
  ctaLabel: string;
  ctaRouteKey: string; // e.g. 'for-cities' or 'contact'
  children?: ReactNode; // optional extra sections (e.g. Barometer, Miami)
}

export function ImpactRegionTemplate({
  locale,
  badge,
  title,
  subtitle,
  stats,
  contextParagraphs,
  propositionTitle,
  propositionBody,
  ctaLabel,
  ctaRouteKey,
  children,
}: ImpactRegionTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-colhybri-cream">
        <div className="section-container text-center">
          <p className="text-colhybri-teal font-sans font-semibold text-sm tracking-widest uppercase mb-4">
            {badge}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-[1.08]">
            {title}
          </h1>
          <p className="font-sans text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-colhybri-cream border border-colhybri-teal/10"
              >
                <div className="font-mono font-bold text-3xl sm:text-4xl text-colhybri-teal leading-none mb-3">
                  {s.value}
                </div>
                <p className="font-sans text-sm text-colhybri-dark/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="bg-colhybri-cream">
        <div className="section-container max-w-3xl mx-auto">
          <div className="space-y-5">
            {contextParagraphs.map((p, i) => (
              <p key={i} className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Optional extra sections */}
      {children}

      {/* COLHYBRI Proposition */}
      <section className="bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <div className="card border-l-4 border-colhybri-teal bg-colhybri-teal/5">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">{propositionTitle}</h2>
            <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">{propositionBody}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-colhybri-teal text-white">
        <div className="section-container text-center">
          <Link
            href={getLocalizedPath(ctaRouteKey, locale)}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-teal font-semibold text-lg hover:bg-colhybri-cream transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
