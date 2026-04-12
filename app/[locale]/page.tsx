import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata, generateOrganizationJsonLd, generateWebSiteJsonLd, generateMythologyJsonLd } from '@/lib/metadata';
import { getLocalizedPath } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { LocalStats } from '@/components/LocalStats';
import { WorldMap } from '@/components/WorldMap';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'home',
    title: 'COLHYBRI',
    description: t('description'),
    semanticPrimary: 'downtown revitalization neighborhood community support',
    semanticSecondary: 'main street revitalization, local commerce, digital mutual, Keynesian multiplier, ZRCV, Opportunity Zones',
    chunkType: 'landing',
    audience: 'cities, institutions, merchants, investors, residents',
  });
}

// SVG Icons as inline components for the three solution pillars
function IconDrop() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  );
}

function IconRadar() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
    </svg>
  );
}

// Animated hummingbird silhouette in hero background
function HummingbirdBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 mx-auto my-auto h-[70%] w-[70%] max-w-4xl opacity-10"
      viewBox="0 0 400 300"
      aria-hidden="true"
    >
      <g fill="#008080">
        <path d="M200 150c-30-20-60-15-85 5 15-35 50-50 85-40 20 5 35 15 45 30-12 10-30 10-45 5z" />
        <g style={{ transformOrigin: '200px 145px' }} className="animate-wing-flap">
          <path d="M205 140c20-30 60-45 95-35-15 30-50 50-85 45-5 0-7-5-10-10z" opacity="0.7" />
        </g>
        <circle cx="245" cy="128" r="3" fill="#D4A843" />
      </g>
    </svg>
  );
}

export default function HomePage({ params: { locale } }: PageProps) {
  const t = useTranslations();
  const l = locale as Locale;

  const institutionalBadges = [0, 1, 2, 3, 4];

  return (
    <>
      <JsonLd data={generateOrganizationJsonLd(l)} />
      <JsonLd data={generateWebSiteJsonLd(l)} />
      <JsonLd data={generateMythologyJsonLd(l)} />

      {/* ================= Section 1: HERO ================= */}
      <section className="relative overflow-hidden bg-colhybri-cream min-h-[85vh] flex items-center">
        <HummingbirdBackdrop />
        <div className="section-container text-center relative z-10">
          <div data-type="definition" data-concept="COLHYBRI" lang={locale}>
            <p className="text-colhybri-teal font-sans font-semibold mb-6 text-sm sm:text-base tracking-widest uppercase">
              {t('hero.tagline')}
            </p>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-colhybri-dark mb-6 max-w-5xl mx-auto leading-[1.05]">
            {t('hero.headline')}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://www.colhybri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              {t('hero.cta')}
            </a>
            <Link
              href={getLocalizedPath('impact', l)}
              className="btn-secondary text-lg px-8 py-4"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>

          {/* Three hero stats (no pre-seed, no pricing) */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <AnimatedCounter
              value={t('hero.stats.stage')}
              label={t('hero.stats.stageLabel')}
            />
            <AnimatedCounter
              value={t('hero.stats.mission')}
              label={t('hero.stats.missionLabel')}
            />
            <AnimatedCounter
              value={t('hero.stats.price')}
              label={t('hero.stats.priceLabel')}
            />
          </div>
        </div>
      </section>

      {/* ================= Section 2: THE PROBLEM ================= */}
      <section className="bg-white" id="problem">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="section-heading">{t('problem.headline')}</h2>
            <p className="section-subheading mx-auto">{t('problem.subheadline')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {(['vacancy', 'invisible', 'commission'] as const).map((key) => (
              <div
                key={key}
                className="text-center p-8 rounded-2xl bg-colhybri-cream border border-colhybri-teal/10"
              >
                <div className="font-mono font-bold text-5xl sm:text-6xl text-colhybri-teal mb-2 leading-none">
                  {t(`problem.stats.${key}.value`)}
                  <span className="text-3xl">{t(`problem.stats.${key}.unit`)}</span>
                </div>
                <p className="font-sans text-colhybri-dark/70 mt-4 text-sm sm:text-base">
                  {t(`problem.stats.${key}.label`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Section 3: THE SOLUTION (3 pillars) ================= */}
      <section className="bg-colhybri-cream" id="solution">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="section-heading">{t('solution.headline')}</h2>
            <p className="section-subheading mx-auto">{t('solution.subheadline')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-left hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-teal/10 flex items-center justify-center mb-6">
                <IconDrop />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{t('solution.pillar1.title')}</h3>
              <p className="text-colhybri-dark/70 font-sans">{t('solution.pillar1.description')}</p>
            </div>

            <div className="card text-left hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-teal/10 flex items-center justify-center mb-6">
                <IconRadar />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{t('solution.pillar2.title')}</h3>
              <p className="text-colhybri-dark/70 font-sans">{t('solution.pillar2.description')}</p>
            </div>

            <div className="card text-left hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-teal/10 flex items-center justify-center mb-6">
                <IconPlay />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{t('solution.pillar3.title')}</h3>
              <p className="text-colhybri-dark/70 font-sans">{t('solution.pillar3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Section 4: INSTITUTIONAL BADGES ================= */}
      <section className="bg-white" id="institutional">
        <div className="section-container text-center">
          <h2 className="section-heading">{t('institutional.headline')}</h2>
          <p className="section-subheading mx-auto mb-12">{t('institutional.subheadline')}</p>

          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {institutionalBadges.map((i) => (
              <span
                key={i}
                className="inline-block border-2 border-colhybri-teal/20 rounded-full px-6 py-3 font-sans font-medium text-colhybri-dark bg-colhybri-cream"
              >
                {t(`institutional.badges.${i}`)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Section 5: WORLD IMPACT (interactive map) ================= */}
      <section className="bg-colhybri-cream" id="world-impact">
        <div className="section-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="section-heading">{t('worldImpact.headline')}</h2>
            <p className="section-subheading mx-auto">{t('worldImpact.subheadline')}</p>
          </div>

          {/* Interactive react-simple-maps world map */}
          <div className="mb-12 max-w-5xl mx-auto">
            <WorldMap locale={locale} />
          </div>

          {/* Region cards underneath as text fallback and quick nav */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {(['france', 'usa', 'europe', 'latam', 'africa'] as const).map((region) => (
              <Link
                key={region}
                href={`${getLocalizedPath('impact', l)}/${region}`}
                className="group card text-left hover:border-colhybri-teal transition-colors"
              >
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-colhybri-teal transition-colors">
                  {t(`worldImpact.regions.${region}.title`)}
                </h3>
                <p className="text-sm text-colhybri-dark/70 font-sans leading-relaxed">
                  {t(`worldImpact.regions.${region}.detail`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Section 6: TRIPLE-PLAY ONLYMORE ================= */}
      <section className="bg-white" id="triple-play">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="section-heading">{t('triplePlay.headline')}</h2>
            <p className="section-subheading mx-auto">{t('triplePlay.subheadline')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {(['col1', 'col2', 'col3'] as const).map((key, i) => (
              <div
                key={key}
                className="text-center p-8 rounded-2xl bg-colhybri-cream border border-colhybri-teal/10"
              >
                <div className="font-display text-3xl font-bold text-colhybri-dark mb-2">
                  {t(`triplePlay.${key}.brand`)}
                </div>
                <div className="h-1 w-16 mx-auto my-4" style={{ background: i === 1 ? '#D4A843' : '#008080' }} />
                <p className="font-sans text-colhybri-dark/70">{t(`triplePlay.${key}.tag`)}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-16 max-w-3xl mx-auto text-center">
            <p className="font-display italic text-xl sm:text-2xl text-colhybri-dark/80 leading-relaxed">
              {t('triplePlay.quote')}
            </p>
          </blockquote>
        </div>
      </section>

      {/* Local impact (kept from existing component) */}
      <LocalStats locale={l} />

      {/* ================= Section 7: FINAL CTA ================= */}
      <section className="bg-colhybri-teal text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12">
            {t('finalCta.headline')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* CTA 1: Open app */}
            <a
              href="https://www.colhybri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl bg-white text-colhybri-teal hover:bg-colhybri-cream transition-colors"
            >
              <div className="font-display text-2xl font-semibold mb-2">{t('finalCta.cta1.title')}</div>
              <div className="font-sans text-sm text-colhybri-dark/70">{t('finalCta.cta1.sub')}</div>
            </a>

            {/* CTA 2: Book demo */}
            <Link
              href={getLocalizedPath('for-cities', l)}
              className="block p-8 rounded-2xl bg-colhybri-gold text-colhybri-dark hover:bg-colhybri-gold/90 transition-colors"
            >
              <div className="font-display text-2xl font-semibold mb-2">{t('finalCta.cta2.title')}</div>
              <div className="font-sans text-sm text-colhybri-dark/70">{t('finalCta.cta2.sub')}</div>
            </Link>

            {/* CTA 3: Investors */}
            <Link
              href={getLocalizedPath('investors', l)}
              className="block p-8 rounded-2xl border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              <div className="font-display text-2xl font-semibold mb-2">{t('finalCta.cta3.title')}</div>
              <div className="font-sans text-sm text-white/70">{t('finalCta.cta3.sub')}</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
