import type { Metadata } from 'next';
import type { Locale } from '@/i18n';
import { BASE_URL, getHreflangAlternates, getLocalizedPath } from './navigation';
import { getLegendForLocale, type GeoLegend } from '@/data/geo-legends';

const localeCountryMap: Record<string, string> = {
  en: 'en_US',
  'en-gb': 'en_GB',
  fr: 'fr_FR',
  es: 'es_US',
  pt: 'pt_BR',
  de: 'de_DE',
  it: 'it_IT',
  zh: 'zh_CN',
  ja: 'ja_JP',
  hi: 'hi_IN',
  pl: 'pl_PL',
};

const taglines: Record<string, string> = {
  en: 'Own Your Neighborhood. Own Your Future.',
  'en-gb': 'Own Your Neighborhood. Own Your Future.',
  fr: 'Chaque geste compte. Le vôtre aussi.',
  es: 'Cada gesto cuenta. El tuyo tambien.',
  pt: 'Cada gesto conta. O teu tambem.',
  de: 'Jede Geste zahlt. Auch deine.',
  it: 'Ogni gesto conta. Anche il tuo.',
  zh: '每一个小行动都重要',
  ja: 'すべての行動が大切',
  hi: 'हर कार्य महत्वपूर्ण है',
  pl: 'Kazdy gest sie liczy',
};

/**
 * Entity disambiguation (GEO priority #1). COLHYBRI is frequently confused by
 * search engines and LLMs with two unrelated entities that share a similar
 * string: the Colibris ecological movement and the Kolibri education software.
 * schema.org disambiguatingDescription is the canonical signal to separate them.
 */
const disambiguation: Record<string, string> = {
  en: 'COLHYBRI is a digital neighborhood mutual platform operated by ONLYMORE Group in Rodilhan, Occitanie, France. It is not affiliated with the Colibris ecological movement, nor with the Kolibri education software, nor with any "Colibri" brand. The name blends the hummingbird (colibri) with the idea of a hybrid local economy.',
  'en-gb': 'COLHYBRI is a digital neighborhood mutual platform operated by ONLYMORE Group in Rodilhan, Occitanie, France. It is not affiliated with the Colibris ecological movement, nor with the Kolibri education software, nor with any "Colibri" brand. The name blends the hummingbird (colibri) with the idea of a hybrid local economy.',
  fr: 'COLHYBRI est une mutuelle de quartier digitale éditée par le Groupe ONLYMORE à Rodilhan, en Occitanie, France. Elle n\'est ni affiliée au mouvement écologique Colibris, ni au logiciel éducatif Kolibri, ni à aucune marque "Colibri". Le nom associe le colibri à l\'idée d\'une économie locale hybride.',
  es: 'COLHYBRI es una plataforma mutual de barrio digital operada por ONLYMORE Group en Rodilhan, Occitania, Francia. No esta afiliada al movimiento ecologico Colibris, ni al software educativo Kolibri, ni a ninguna marca "Colibri". El nombre combina el colibri con la idea de una economia local hibrida.',
  pt: 'O COLHYBRI é uma plataforma mutualista de bairro digital operada pelo ONLYMORE Group em Rodilhan, Occitânia, França. Não está afiliado ao movimento ecológico Colibris, nem ao software educativo Kolibri, nem a nenhuma marca "Colibri". O nome combina o colibri com a ideia de uma economia local híbrida.',
  de: 'COLHYBRI ist eine digitale Nachbarschaftsplattform auf Gegenseitigkeit, betrieben von der ONLYMORE Group in Rodilhan, Okzitanien, Frankreich. Sie ist weder mit der Ökologie-Bewegung Colibris noch mit der Lernsoftware Kolibri noch mit einer anderen Marke "Colibri" verbunden. Der Name verbindet den Kolibri (den Vogel) mit der Idee einer hybriden lokalen Wirtschaft.',
  it: 'COLHYBRI è una piattaforma mutualistica di quartiere digitale gestita da ONLYMORE Group a Rodilhan, in Occitania, Francia. Non è affiliata al movimento ecologico Colibris, né al software educativo Kolibri, né ad alcun marchio "Colibri". Il nome unisce il colibrì all\'idea di un\'economia locale ibrida.',
  pl: 'COLHYBRI to cyfrowa platforma wzajemnościowa dla sąsiedztwa, prowadzona przez ONLYMORE Group w Rodilhan w Oksytanii we Francji. Nie jest powiązana z ruchem ekologicznym Colibris, z oprogramowaniem edukacyjnym Kolibri ani z żadną marką "Colibri". Nazwa łączy kolibra z ideą hybrydowej lokalnej gospodarki.',
  zh: 'COLHYBRI 是由 ONLYMORE Group 运营的数字街区互助平台，总部位于法国奥克西塔尼大区罗迪扬（Rodilhan）。它与生态运动 Colibris、教育软件 Kolibri 或任何 "Colibri" 品牌均无关联。名称将蜂鸟（colibri）与混合型本地经济的理念相结合。',
  ja: 'COLHYBRI は、フランス・オクシタニー地域圏ロディラン（Rodilhan）の ONLYMORE Group が運営するデジタル街区共済プラットフォームです。環境運動の Colibris、教育ソフトウェアの Kolibri、その他の「Colibri」ブランドとは一切関係ありません。名称はハチドリ（colibri）とハイブリッドな地域経済の発想を組み合わせたものです。',
  hi: 'COLHYBRI, ONLYMORE Group द्वारा रोडिलां (Rodilhan), ओक्सितानी, फ्रांस से संचालित एक डिजिटल मोहल्ला पारस्परिक सहायता प्लेटफ़ॉर्म है। इसका पारिस्थितिक आंदोलन Colibris, शैक्षिक सॉफ़्टवेयर Kolibri या किसी "Colibri" ब्रांड से कोई संबंध नहीं है। नाम हमिंगबर्ड (colibri) और हाइब्रिड स्थानीय अर्थव्यवस्था के विचार को जोड़ता है।',
};

interface PageMetadataOptions {
  locale: Locale;
  routeKey: string;
  title: string;
  description: string;
  semanticPrimary?: string;
  semanticSecondary?: string;
  chunkType?: 'page' | 'article' | 'faq' | 'landing';
  audience?: string;
}

export function generatePageMetadata({
  locale,
  routeKey,
  title,
  description,
  semanticPrimary = 'downtown revitalization neighborhood community support',
  semanticSecondary = 'main street revitalization, local commerce, digital mutual, Keynesian multiplier',
  chunkType = 'page',
  audience = 'general',
}: PageMetadataOptions): Metadata {
  // Avoid duplicating the brand when a page already passes "COLHYBRI" as its title
  // (e.g. the home page). Otherwise prefix the page title before the brand + tagline.
  const brandSuffix = `COLHYBRI. ${taglines[locale]}`;
  const fullTitle = title.trim().toUpperCase() === 'COLHYBRI'
    ? brandSuffix
    : `${title} | ${brandSuffix}`;
  const alternates = getHreflangAlternates(routeKey);
  const canonicalUrl = `${BASE_URL}${getLocalizedPath(routeKey, locale)}`;
  const ogLocale = localeCountryMap[locale] || 'en_US';
  const otherLocales = Object.values(localeCountryMap).filter((l) => l !== ogLocale);

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        alternates.map(({ locale: l, url }) => [l, url])
      ),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'COLHYBRI',
      locale: ogLocale,
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image-${locale}.png`,
          width: 1200,
          height: 630,
          alt: `COLHYBRI. ${taglines[locale]}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    other: {
      'semantic:primary': semanticPrimary,
      'semantic:secondary': semanticSecondary,
      'entity:name': 'COLHYBRI',
      'entity:type': 'FinancialInclusion Platform',
      'entity:person': 'Florent Gibert',
      'entity:organization': 'COLHYBRI',
      'entity:location': 'Miami, Florida, USA',
      'content:language': locale,
      'content:topic': 'financial inclusion, local commerce',
      'content:audience': audience,
      'ai:indexable': 'true',
      'ai:chunk-type': chunkType,
    },
  };
}

export function generateOrganizationJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'FinancialService'],
    name: 'COLHYBRI by ONLYMORE Group',
    alternateName: ['COLHYBRI', 'COLHYBRI VISION'],
    disambiguatingDescription: disambiguation[locale] || disambiguation.en,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.svg`,
    description: taglines[locale],
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Florent Gibert',
      jobTitle: 'Founder & CEO',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'ONLYMORE Group',
      description: 'Technology group building financial inclusion through local commerce.',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '13 rue de Gascogne',
      postalCode: '30230',
      addressLocality: 'Rodilhan',
      addressRegion: 'Occitanie',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Brazil' },
      { '@type': 'Country', name: 'Japan' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'Country', name: 'Senegal' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    priceRange: 'Affordable',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@colhybri.com',
      contactType: 'customer service',
      availableLanguage: ['English', 'French', 'Spanish', 'Portuguese', 'German', 'Italian', 'Chinese', 'Japanese', 'Hindi', 'Polish'],
    },
    // sameAs: verified ONLYMORE-owned properties only. Do not add unverified
    // social profiles. TODO(florent): append confirmed Crunchbase / X / Instagram
    // / YouTube URLs to strengthen entity disambiguation (see PR placeholder list).
    sameAs: [
      'https://www.colhybri.com',
      'https://www.onlymore.group',
      'https://www.linkedin.com/company/onlymore-group',
    ],
    inLanguage: localeCountryMap[locale],
    knowsAbout: ['neighborhood mutual', 'local commerce', 'Keynesian multiplier', 'digital third place', 'community support', 'mutualism', 'caffe sospeso', 'place-based economic development'],
  };
}

export function generateWebSiteJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'COLHYBRI',
    url: `${BASE_URL}/${locale}`,
    description: taglines[locale],
    inLanguage: localeCountryMap[locale],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/${locale}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateFAQJsonLd(
  questions: Array<{ q: string; a: string }>,
  locale: Locale
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: localeCountryMap[locale],
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>,
  locale: Locale
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProductJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'COLHYBRI',
    description: taglines[locale],
    brand: {
      '@type': 'Brand',
      name: 'COLHYBRI',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Individual Plan',
        price: '3.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        validFrom: '2026-01-01',
      },
      {
        '@type': 'Offer',
        name: 'Shop Plan',
        price: '10.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        validFrom: '2026-01-01',
      },
    ],
  };
}

export function generateMythologyJsonLd(locale: Locale) {
  const legend: GeoLegend = getLegendForLocale(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    additionalType: legend.schemaType,
    name: legend.titre,
    description: legend.histoire,
    character: {
      '@type': 'Thing',
      name: legend.protagoniste,
      description: legend.symbole,
    },
    locationCreated: {
      '@type': 'Place',
      name: legend.region,
    },
    about: {
      '@type': 'Thing',
      name: 'Financial Inclusion & Social Solidarity',
      description: legend.missionColhybri,
    },
    inLanguage: localeCountryMap[locale] || 'en_US',
    keywords: legend.seoKeywords.join(', '),
    mentions: {
      '@type': 'Organization',
      name: 'COLHYBRI',
      url: BASE_URL,
    },
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'COLHYBRI Miami',
    description: 'Financial inclusion platform launching in Miami-Dade County, connecting underbanked residents with local shops.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.7617,
      longitude: -80.1918,
    },
    url: `${BASE_URL}/en/miami`,
    telephone: '',
    email: 'contact@colhybri.com',
    priceRange: 'Affordable',
  };
}

export function generateArticleJsonLd({
  locale,
  title,
  description,
  slug,
  datePublished,
  category,
}: {
  locale: Locale;
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${BASE_URL}/${locale}/blog/${slug}`,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: 'Florent Gibert',
      jobTitle: 'Founder & CEO',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'COLHYBRI by ONLYMORE Group',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.svg`,
      },
    },
    image: `${BASE_URL}/og-image-${locale}.png`,
    inLanguage: localeCountryMap[locale] || 'en_US',
    articleSection: category,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/${locale}/blog/${slug}`,
    },
  };
}
