import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, type Locale } from '@/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/metadata';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.colhybri.vision'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon.svg',
  },
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const fontClass = locale === 'zh'
    ? 'font-zh'
    : locale === 'ja'
      ? 'font-ja'
      : '';

  return (
    <html lang={locale} className={fontClass}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {(locale === 'zh' || locale === 'ja') && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${
              locale === 'zh' ? 'Noto+Sans+SC:wght@400;500;700' : 'Noto+Sans+JP:wght@400;500;700'
            }&display=swap`}
            rel="stylesheet"
          />
        )}
      </head>
      <body className="font-sans bg-colhybri-cream text-colhybri-dark min-h-screen flex flex-col">
        <JsonLd data={generateOrganizationJsonLd(locale as Locale)} />
        <JsonLd data={generateWebSiteJsonLd(locale as Locale)} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
