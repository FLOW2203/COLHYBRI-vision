import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata, generateProductJsonLd } from '@/lib/metadata';
import { getLocalizedPath } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'pricing' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'pricing',
    title: t('title'),
    description: t('headline'),
    semanticPrimary: 'COLHYBRI pricing individuals shops Maps+ Premium gift card',
    semanticSecondary: 'affordable financial inclusion, subscription pricing, community banking cost, solidarity gift card',
    chunkType: 'page',
    audience: 'underbanked individuals, local shop owners',
  });
}

export default function PricingPage({ params: { locale } }: PageProps) {
  const t = useTranslations('pricing');
  const common = useTranslations('common');
  const l = locale as Locale;
  const contactHref = getLocalizedPath('contact', l);
  const giftCardHref = getLocalizedPath('gift-card-solidaire', l);

  return (
    <>
      <JsonLd data={generateProductJsonLd(l)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-tight">
            {t('headline')}
          </h1>
          <a
            href="https://www.colhybri.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 font-sans text-colhybri-primary underline hover:no-underline"
          >
            {t('ctaApp')} — colhybri.com
          </a>
        </div>
      </section>

      {/* Pricing Cards — 3 tiers */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Individuals Card */}
            <div className="card border-2 border-colhybri-primary/20 hover:border-colhybri-primary transition-colors">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-4">{t('individuals.title')}</h2>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-colhybri-primary">{t('individuals.price')}</span>
                  <span className="text-colhybri-dark/50">{t('individuals.period')}</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-colhybri-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-colhybri-dark/70">{t(`individuals.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <Link href={contactHref} className="btn-primary w-full">
                  {t('individuals.cta')}
                </Link>
              </div>
            </div>

            {/* Shops Card */}
            <div className="card border-2 border-colhybri-secondary/20 hover:border-colhybri-secondary transition-colors">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-colhybri-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-4">{t('shops.title')}</h2>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-colhybri-secondary">{t('shops.price')}</span>
                  <span className="text-colhybri-dark/50">{t('shops.period')}</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-colhybri-secondary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-colhybri-dark/70">{t(`shops.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <Link href={contactHref} className="btn-accent w-full">
                  {t('shops.cta')}
                </Link>
              </div>
            </div>

            {/* Premium / Maps+ Card */}
            <div className="card border-2 border-colhybri-gold/30 hover:border-colhybri-gold transition-colors">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-colhybri-gold/10 flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" aria-hidden="true">
                    <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-4">{t('premium.title')}</h2>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-colhybri-gold">{t('premium.price')}</span>
                  <span className="text-colhybri-dark/50">{t('premium.period')}</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-colhybri-gold flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-colhybri-dark/70">{t(`premium.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <Link href={contactHref} className="btn-secondary w-full">
                  {t('premium.cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card */}
      <section className="bg-colhybri-cream">
        <div className="section-container max-w-4xl mx-auto">
          <div className="card border-2 border-colhybri-primary/20 bg-white">
            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-colhybri-dark mb-2">
                  {t('giftCard.title')}
                </h2>
                <p className="font-sans text-colhybri-dark/70 mb-3">{t('giftCard.subtitle')}</p>
                <p className="font-sans text-colhybri-dark/60 text-sm">{t('giftCard.description')}</p>
              </div>
              <div className="md:col-span-2 text-center md:text-right">
                <p className="font-sans text-colhybri-dark/60 text-sm mb-2">{t('giftCard.priceLabel')}</p>
                <Link href={giftCardHref} className="btn-primary inline-block">
                  {t('giftCard.cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links (Cocon Semantique) */}
      <section className="bg-colhybri-light">
        <div className="section-container text-center">
          <h2 className="section-heading mb-10">
            {common('learnMore')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('solution', l)} className="btn-primary">
              {common('discoverSolution')}
            </Link>
            <Link href={getLocalizedPath('impact', l)} className="btn-secondary">
              {t('title')}
            </Link>
            <Link href={getLocalizedPath('faq', l)} className="btn-accent">
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
