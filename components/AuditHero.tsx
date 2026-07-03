'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n';
import { getLocalizedPath } from '@/lib/navigation';

// Projection hypotheses aligned with public/cockpit.html:
// 30% engagement, 1 gesture/month, 80% redeemed, 5 EUR/month, 75% redistributed.
const ENGAGEMENT = 0.3;
const REDEEM_RATE = 0.8;
const MONTHLY_AMOUNT = 5;
const REDISTRIBUTED_SHARE = 0.75;

const REFERENTIALS = ['ESRS S3', 'ISO 26000', 'ODD', 'B Corp', 'EcoVadis'];

interface AuditHeroProps {
  locale: Locale;
}

export function AuditHero({ locale }: AuditHeroProps) {
  const t = useTranslations('auditHero');
  const [workforce, setWorkforce] = useState(1200);

  const mobilized = Math.round(workforce * ENGAGEMENT);
  const gestures = Math.round(mobilized * 12 * REDEEM_RATE);
  const value = Math.round(gestures * MONTHLY_AMOUNT * REDISTRIBUTED_SHARE);
  const fmt = (n: number) => n.toLocaleString(locale);

  return (
    <section id="audit" className="chero bg-colhybri-dark text-colhybri-cream">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: B2B pitch + referentials + CTAs */}
          <div>
            <p className="text-colhybri-gold font-sans font-semibold text-sm tracking-widest uppercase mb-5">
              {t('eyebrow')}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              {t('headline')}
            </h2>
            <p className="font-sans text-colhybri-cream/80 text-lg leading-relaxed mb-8">
              {t('subheadline')}
            </p>

            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-colhybri-cream/50 mb-3">
              {t('refsLabel')}
            </p>
            <ul className="flex flex-wrap gap-2 mb-10" aria-label={t('refsLabel')}>
              {REFERENTIALS.map((ref) => (
                <li
                  key={ref}
                  className="font-mono text-xs font-bold tracking-wide text-colhybri-teal border border-colhybri-teal/40 rounded-full px-4 py-2 bg-colhybri-teal/10"
                >
                  {ref}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/cockpit" className="btn-primary text-base px-7 py-3.5">
                {t('ctaCockpit')}
              </a>
              <Link
                href={getLocalizedPath('contact', locale)}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border-2 border-colhybri-gold text-colhybri-gold font-sans font-semibold hover:bg-colhybri-gold hover:text-colhybri-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-colhybri-gold focus:ring-offset-2 focus:ring-offset-colhybri-dark"
              >
                {t('ctaMeeting')}
              </Link>
            </div>
          </div>

          {/* Right: interactive cockpit teaser in a browser frame */}
          <div className="rounded-2xl border border-colhybri-cream/15 bg-[#0d1a22] shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-colhybri-cream/10 bg-[#0a141b]">
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="w-3 h-3 rounded-full bg-[#CC3333]/70" />
                <i className="w-3 h-3 rounded-full bg-colhybri-gold/70" />
                <i className="w-3 h-3 rounded-full bg-colhybri-success/70" />
              </span>
              <span className="font-mono text-xs text-colhybri-cream/50 bg-colhybri-cream/5 rounded-md px-3 py-1 truncate">
                colhybri.vision/cockpit
              </span>
            </div>

            {/* Teaser body */}
            <div className="p-6 sm:p-8">
              <p className="font-mono text-[11px] font-bold tracking-widest uppercase text-[#18c3a6] mb-4">
                {t('teaser.title')}
              </p>

              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="chero-workforce" className="font-sans text-sm text-colhybri-cream/90">
                    {t('teaser.effLabel')}
                  </label>
                  <span className="font-mono font-bold text-[#18c3a6]">
                    {fmt(workforce)} {t('teaser.effUnit')}
                  </span>
                </div>
                <input
                  id="chero-workforce"
                  type="range"
                  min={250}
                  max={20000}
                  step={50}
                  value={workforce}
                  onChange={(e) => setWorkforce(Number(e.target.value))}
                  className="w-full h-1 rounded-full appearance-none bg-colhybri-cream/20 accent-[#18c3a6] cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-3 gap-px rounded-xl overflow-hidden border border-colhybri-cream/10 bg-colhybri-cream/10">
                <div className="bg-[#16252f] p-4">
                  <div className="font-mono font-bold text-xl text-colhybri-cream leading-tight">{fmt(mobilized)}</div>
                  <div className="font-sans text-[11px] text-colhybri-cream/60 mt-1.5 leading-snug">{t('teaser.kpiMobilized')}</div>
                </div>
                <div className="bg-[#16252f] p-4">
                  <div className="font-mono font-bold text-xl text-colhybri-cream leading-tight">{fmt(gestures)}</div>
                  <div className="font-sans text-[11px] text-colhybri-cream/60 mt-1.5 leading-snug">{t('teaser.kpiGestures')}</div>
                </div>
                <div className="bg-[#16252f] p-4">
                  <div className="font-mono font-bold text-xl text-colhybri-cream leading-tight">
                    {fmt(value)}<span className="text-sm text-[#18c3a6]"> €</span>
                  </div>
                  <div className="font-sans text-[11px] text-colhybri-cream/60 mt-1.5 leading-snug">{t('teaser.kpiValue')}</div>
                </div>
              </div>

              <p className="font-sans text-[11px] text-colhybri-cream/40 mt-5 leading-relaxed">
                {t('teaser.note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
