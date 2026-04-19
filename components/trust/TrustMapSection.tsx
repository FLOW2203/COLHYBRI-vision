'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { WorldTrustMap } from './WorldTrustMap';

interface TrustMapSectionProps {
  locale: string;
}

export function TrustMapSection({ locale }: TrustMapSectionProps) {
  const router = useRouter();
  const t = useTranslations('trustMap');

  const handleRegionClick = useCallback(
    (regionId: string) => {
      router.push(`/${locale}/impact/${regionId}`);
    },
    [locale, router]
  );

  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-colhybri-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-colhybri-dark/60 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <WorldTrustMap locale={locale} onRegionClick={handleRegionClick} />
      </div>
    </section>
  );
}
