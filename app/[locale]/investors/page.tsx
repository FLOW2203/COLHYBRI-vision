import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/JsonLd';
import { InvestorContactForm } from '@/components/forms/InvestorContactForm';
import { VisionImage } from '@/components/ui/VisionImage';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { visionImages, teamPhotos } from '@/lib/vision-images';
import { TeamMember } from '@/components/team/TeamMember';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'investorsPage' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'investors',
    title: t('meta.title'),
    description: t('meta.description'),
    semanticPrimary: 'downtown revitalization pre-seed investment SaaS',
    semanticSecondary: 'ONLYMORE Group, flywheel, Main Street revitalization, Keynesian multiplier',
    chunkType: 'landing',
    audience: 'investors, VCs, business angels, accelerators',
  });
}

export default function InvestorsPage({ params: { locale } }: PageProps) {
  const t = useTranslations('investorsPage');
  const tImg = useTranslations('images');
  const l = locale as Locale;

  const investorJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('meta.title'),
    description: t('meta.description'),
    about: {
      '@type': 'Thing',
      name: 'COLHYBRI pre-seed investment',
      description: t('hero.subtitle'),
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.vision',
    },
  };

  const keyNumbers = [
    { value: t('keyNumbers.0.value'), label: t('keyNumbers.0.label') },
    { value: t('keyNumbers.1.value'), label: t('keyNumbers.1.label') },
    { value: t('keyNumbers.2.value'), label: t('keyNumbers.2.label') },
    { value: t('keyNumbers.3.value'), label: t('keyNumbers.3.label') },
    { value: t('keyNumbers.4.value'), label: t('keyNumbers.4.label') },
    { value: t('keyNumbers.5.value'), label: t('keyNumbers.5.label') },
  ];

  const flywheel = [
    t('flywheel.step1'),
    t('flywheel.step2'),
    t('flywheel.step3'),
    t('flywheel.step4'),
  ];

  const team = [
    { name: 'Florent Gibert', role: t('team.florent.role'), bio: t('team.florent.bio'), photoUrl: teamPhotos.florent, photoAlt: 'FG' },
    { name: 'Joao Almeida', role: t('team.joao.role'), bio: t('team.joao.bio'), photoUrl: teamPhotos.joao, photoAlt: 'JA' },
  ];

  return (
    <>
      <JsonLd data={investorJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-colhybri-cream">
        <div className="section-container text-center">
          <p className="text-colhybri-teal font-sans font-semibold text-sm tracking-widest uppercase mb-4">
            {t('hero.badge')}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-[1.08]">
            {t('hero.title')}
          </h1>
          <p className="font-sans text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Growth vine visual */}
      <section className="bg-white">
        <div className="section-container max-w-5xl mx-auto">
          <FadeInOnScroll>
            <VisionImage
              src={visionImages.investors}
              alt={tImg('investors.alt')}
              aspectRatio="16:9"
              overlay="gradient-light"
              className="w-full"
            />
          </FadeInOnScroll>
        </div>
      </section>

      {/* Key numbers grid 2x3 */}
      <section className="bg-white">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">{t('keyNumbers.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keyNumbers.map((n, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-colhybri-cream border border-colhybri-teal/10 text-center"
              >
                <div className="font-mono font-bold text-3xl sm:text-4xl text-colhybri-teal mb-3 leading-tight">
                  {n.value}
                </div>
                <p className="font-sans text-sm text-colhybri-dark/70">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flywheel */}
      <section className="bg-colhybri-cream">
        <div className="section-container max-w-5xl mx-auto">
          <h2 className="section-heading text-center mb-4">{t('flywheel.title')}</h2>
          <p className="section-subheading mx-auto text-center mb-12">{t('flywheel.subtitle')}</p>

          <div className="flex flex-col md:flex-row items-stretch gap-4 justify-between">
            {flywheel.map((step, i) => (
              <div key={i} className="flex-1 flex items-center gap-4">
                <div className="flex-1 p-5 rounded-2xl bg-white border border-colhybri-teal/10 text-center">
                  <div className="font-mono text-xs text-colhybri-teal mb-1">0{i + 1}</div>
                  <p className="font-sans text-sm text-colhybri-dark/80">{step}</p>
                </div>
                {i < flywheel.length - 1 && (
                  <svg className="hidden md:block w-6 h-6 text-colhybri-teal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <p className="font-display italic text-lg text-center text-colhybri-dark/80 mt-10 max-w-2xl mx-auto">
            {t('flywheel.quote')}
          </p>
        </div>
      </section>

      {/* Use of funds */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-12">{t('useOfFunds.title')}</h2>

          <div className="flex rounded-2xl overflow-hidden h-16 shadow-sm">
            <div className="flex items-center justify-center bg-colhybri-teal text-white font-mono font-bold" style={{ width: '50%' }}>
              50%
            </div>
            <div className="flex items-center justify-center bg-colhybri-gold text-colhybri-dark font-mono font-bold" style={{ width: '30%' }}>
              30%
            </div>
            <div className="flex items-center justify-center bg-colhybri-dark text-white font-mono font-bold" style={{ width: '20%' }}>
              20%
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="w-4 h-4 bg-colhybri-teal rounded-full mx-auto mb-2" />
              <p className="font-sans font-semibold text-colhybri-dark">{t('useOfFunds.product.title')}</p>
              <p className="font-sans text-sm text-colhybri-dark/60">{t('useOfFunds.product.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-colhybri-gold rounded-full mx-auto mb-2" />
              <p className="font-sans font-semibold text-colhybri-dark">{t('useOfFunds.gtm.title')}</p>
              <p className="font-sans text-sm text-colhybri-dark/60">{t('useOfFunds.gtm.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-colhybri-dark rounded-full mx-auto mb-2" />
              <p className="font-sans font-semibold text-colhybri-dark">{t('useOfFunds.ops.title')}</p>
              <p className="font-sans text-sm text-colhybri-dark/60">{t('useOfFunds.ops.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-colhybri-cream">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">{t('team.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((m) => (
              <TeamMember
                key={m.name}
                name={m.name}
                role={m.role}
                bio={m.bio}
                photoUrl={m.photoUrl}
                photoAlt={m.photoAlt}
              />
            ))}
            <div className="card text-center border-2 border-dashed border-colhybri-teal/30">
              <div className="w-20 h-20 rounded-full bg-colhybri-teal/10 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold">{t('team.hiring.title')}</h3>
              <p className="font-sans text-sm text-colhybri-dark/70 mt-3 mb-4">{t('team.hiring.text')}</p>
              <a
                href="mailto:onlymore2024@gmail.com?subject=Candidature"
                className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-colhybri-teal text-white font-semibold text-sm hover:bg-colhybri-teal/90 transition-colors"
              >
                {t('team.hiring.cta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deck download */}
      <section className="bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">{t('deck.title')}</h2>
          <p className="font-sans text-colhybri-dark/70 mb-8">{t('deck.body')}</p>
          <a
            href="mailto:onlymore2024@gmail.com?subject=Demande%20dossier%20investisseur%20COLHYBRI"
            className="btn-primary text-lg px-8 py-4"
          >
            {t('deck.cta')}
          </a>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-colhybri-cream">
        <div className="section-container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">{t('form.title')}</h2>
            <p className="section-subheading mx-auto">{t('form.subtitle')}</p>
          </div>
          <InvestorContactForm />
        </div>
      </section>
    </>
  );
}
