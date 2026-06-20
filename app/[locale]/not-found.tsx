'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

// Styled 404 for any unmatched path under a valid locale. Rendered inside
// app/[locale]/layout.tsx, so it inherits the header, footer, fonts and the
// NextIntlClientProvider (hence useLocale / useTranslations work here).
export default function NotFound() {
  const t = useTranslations('notFound');
  const common = useTranslations('common');
  const locale = useLocale();

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-7xl sm:text-8xl font-extrabold text-colhybri-primary mb-6">
        404
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold text-colhybri-dark mb-3">
        {t('title')}
      </h1>
      <p className="text-colhybri-dark/60 text-base sm:text-lg max-w-md mb-8">
        {t('subtitle')}
      </p>
      <Link
        href={`/${locale}`}
        className="btn-primary inline-flex items-center justify-center min-h-[44px]"
      >
        {common('backToHome')}
      </Link>
    </main>
  );
}
