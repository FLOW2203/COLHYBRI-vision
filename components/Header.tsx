'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { getLocalizedPath } from '@/lib/navigation';
import { visionImages } from '@/lib/vision-images';
import type { Locale } from '@/i18n';

const navLinks = [
  'mission',
  'solution',
  'impact',
  'for-cities',
  'investors',
] as const;

const navTranslationMap: Record<string, string> = {
  mission: 'mission',
  solution: 'howItWorks',
  impact: 'impact',
  'for-cities': 'forCities',
  investors: 'investors',
};

export function Header() {
  const t = useTranslations('nav');
  const tImg = useTranslations('images');
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-colhybri-cream/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 font-bold text-xl text-colhybri-dark"
          >
            <Image
              src={visionImages.mascot}
              alt={tImg('mascot.alt')}
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="font-display">COLHYBRI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((key) => (
              <Link
                key={key}
                href={getLocalizedPath(key, locale)}
                className="text-sm font-medium text-colhybri-dark/70 hover:text-colhybri-teal transition-colors"
              >
                {t(navTranslationMap[key])}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <a
              href="https://www.colhybri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-sm px-4 py-2"
            >
              {t('openApp')}
            </a>

            {/* Mobile menu button (44x44 tap target) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-2" aria-label="Mobile navigation">
            <div className="flex flex-col">
              {navLinks.map((key) => (
                <Link
                  key={key}
                  href={getLocalizedPath(key, locale)}
                  className="flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium text-colhybri-dark/70 hover:bg-colhybri-teal/5 hover:text-colhybri-teal transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(navTranslationMap[key])}
                </Link>
              ))}
              <a
                href="https://www.colhybri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base mt-3 w-full justify-center min-h-[44px] inline-flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                {t('openApp')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
