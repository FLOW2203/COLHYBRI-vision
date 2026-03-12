import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { BASE_URL } from '@/lib/navigation';
import { locales } from '@/i18n';

interface LayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'games' });
  const title = `${t('title')} | COLHYBRI`;
  const description = t('subtitle');
  const canonicalUrl = `${BASE_URL}/${locale}/games`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}/games`;
  }
  languages['x-default'] = `${BASE_URL}/en/games`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'COLHYBRI',
      type: 'website',
      images: [{ url: `${BASE_URL}/og-image-${locale}.png`, width: 1200, height: 630 }],
    },
  };
}

export default function GamesLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
