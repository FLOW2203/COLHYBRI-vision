'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { getLocalizedPath } from '@/lib/navigation';
import type { Locale } from '@/i18n';

const navLinks = [
  'mission',
  'how-it-works',
  'pricing',
  'impact',
  'for-shops',
  'miami',
  'faq',
  'contact',
] as const;

const navTranslationMap: Record<string, string> = {
  mission: 'mission',
  'how-it-works': 'howItWorks',
  pricing: 'pricing',
  impact: 'impact',
  'for-shops': 'forShops',
  miami: 'miami',
  faq: 'faq',
  contact: 'contact',
};

export function Header() {
  const t = useTranslations('nav');
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-colhybri-light/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 font-bold text-xl text-colhybri-dark"
          >
            <span className="text-2xl" role="img" aria-label="Hummingbird">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="#00A878" />
                <path d="M10 20c2-4 6-8 12-10-2 4-4 6-6 8l-2 4-4-2z" fill="white" />
                <circle cx="20" cy="12" r="1.5" fill="white" />
              </svg>
            </span>
            <span>COLHYBRI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((key) => (
              <Link
                key={key}
                href={getLocalizedPath(key, locale)}
                className="text-sm font-medium text-colhybri-dark/70 hover:text-colhybri-primary transition-colors"
              >
                {t(navTranslationMap[key])}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link href={getLocalizedPath('contact', locale)} className="hidden sm:inline-flex btn-primary text-sm px-4 py-2">
              {t('contact')}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <nav className="lg:hidden pb-4 border-t border-gray-100 pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-2">
              {navLinks.map((key) => (
                <Link
                  key={key}
                  href={getLocalizedPath(key, locale)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-colhybri-dark/70 hover:bg-colhybri-primary/5 hover:text-colhybri-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(navTranslationMap[key])}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
