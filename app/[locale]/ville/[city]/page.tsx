import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { locales } from '@/i18n';
import { BASE_URL } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface CityData {
  slug: string;
  name: string;
  region: string;
  population: string;
  lat: number;
  lng: number;
  geoRegion: string;
  placename: string;
}

const cities: Record<string, CityData> = {
  nimes: {
    slug: 'nimes',
    name: 'Nimes',
    region: 'Occitanie',
    population: '150 000',
    lat: 43.8367,
    lng: 4.3601,
    geoRegion: 'FR-OC',
    placename: 'Nimes, France',
  },
  montpellier: {
    slug: 'montpellier',
    name: 'Montpellier',
    region: 'Occitanie',
    population: '290 000',
    lat: 43.6108,
    lng: 3.8767,
    geoRegion: 'FR-OC',
    placename: 'Montpellier, France',
  },
  marseille: {
    slug: 'marseille',
    name: 'Marseille',
    region: "Provence-Alpes-Cote d'Azur",
    population: '870 000',
    lat: 43.2965,
    lng: 5.3698,
    geoRegion: 'FR-PAC',
    placename: 'Marseille, France',
  },
  lyon: {
    slug: 'lyon',
    name: 'Lyon',
    region: 'Auvergne-Rhone-Alpes',
    population: '520 000',
    lat: 45.7640,
    lng: 4.8357,
    geoRegion: 'FR-ARA',
    placename: 'Lyon, France',
  },
  paris: {
    slug: 'paris',
    name: 'Paris',
    region: 'Ile-de-France',
    population: '2 100 000',
    lat: 48.8566,
    lng: 2.3522,
    geoRegion: 'FR-IDF',
    placename: 'Paris, France',
  },
};

const CITY_SLUGS = Object.keys(cities);

interface PageProps {
  params: { locale: string; city: string };
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    CITY_SLUGS.map((city) => ({ locale, city }))
  );
}

export async function generateMetadata({ params: { locale, city } }: PageProps): Promise<Metadata> {
  const cityData = cities[city];
  if (!cityData) return {};

  const t = await getTranslations({ locale, namespace: 'city' });
  const title = t('metaTitle', { city: cityData.name });
  const description = t('metaDescription', { city: cityData.name, region: cityData.region });
  const canonicalUrl = `${BASE_URL}/${locale}/ville/${city}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}/ville/${city}`;
  }
  languages['x-default'] = `${BASE_URL}/en/ville/${city}`;

  return {
    title: `${title} | COLHYBRI`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: `${title} | COLHYBRI`,
      description,
      url: canonicalUrl,
      siteName: 'COLHYBRI',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
      images: [{ url: `${BASE_URL}/og-image-${locale}.png`, width: 1200, height: 630 }],
    },
    other: {
      'geo.region': cityData.geoRegion,
      'geo.placename': cityData.placename,
      'geo.position': `${cityData.lat};${cityData.lng}`,
      'ICBM': `${cityData.lat}, ${cityData.lng}`,
    },
  };
}

export default function CityPage({ params: { locale, city } }: PageProps) {
  const cityData = cities[city];
  if (!cityData) notFound();

  const t = useTranslations('city');

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `COLHYBRI ${cityData.name}`,
    description: t('metaDescription', { city: cityData.name, region: cityData.region }),
    url: `${BASE_URL}/${locale}/ville/${city}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityData.name,
      addressRegion: cityData.region,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cityData.lat,
      longitude: cityData.lng,
    },
    areaServed: {
      '@type': 'City',
      name: cityData.name,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'COLHYBRI by ONLYMORE Group',
      url: BASE_URL,
    },
  };

  return (
    <>
      <JsonLd data={localBusinessJsonLd} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-colhybri-primary/10 to-colhybri-secondary/10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-colhybri-primary/20 text-colhybri-primary rounded-full text-sm font-medium mb-4">
            {cityData.region}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-colhybri-dark mb-6">
            {t('heroTitle', { city: cityData.name })}
          </h1>
          <p className="text-lg text-colhybri-dark/70 max-w-2xl mx-auto mb-8">
            {t('heroDescription', { city: cityData.name, population: cityData.population })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-3 bg-colhybri-primary text-white rounded-xl font-semibold hover:bg-colhybri-primary/90 transition"
            >
              {t('ctaJoin')}
            </Link>
            <Link
              href={`/${locale}`}
              className="px-8 py-3 border-2 border-colhybri-primary text-colhybri-primary rounded-xl font-semibold hover:bg-colhybri-primary/10 transition"
            >
              {t('ctaLearnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why this city */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-colhybri-dark mb-8 text-center">
            {t('whyTitle', { city: cityData.name })}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-colhybri-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-colhybri-primary mb-2">{cityData.population}</div>
              <p className="text-colhybri-dark/70">{t('statPopulation')}</p>
            </div>
            <div className="bg-colhybri-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-colhybri-secondary mb-2">{t('statShopsValue')}</div>
              <p className="text-colhybri-dark/70">{t('statShops')}</p>
            </div>
            <div className="bg-colhybri-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-colhybri-primary mb-2">{t('statMultiplierValue')}</div>
              <p className="text-colhybri-dark/70">{t('statMultiplier')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local commerce benefits */}
      <section className="py-16 px-6 bg-colhybri-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-colhybri-dark mb-8 text-center">
            {t('benefitsTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {['benefit1', 'benefit2', 'benefit3', 'benefit4'].map((key) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-colhybri-dark mb-2">
                  {t(`${key}Title`)}
                </h3>
                <p className="text-colhybri-dark/70">
                  {t(`${key}Description`, { city: cityData.name })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-colhybri-dark text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            {t('ctaTitle', { city: cityData.name })}
          </h2>
          <p className="text-white/70 mb-8">{t('ctaDescription')}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block px-8 py-3 bg-colhybri-primary text-white rounded-xl font-semibold hover:bg-colhybri-primary/90 transition"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
