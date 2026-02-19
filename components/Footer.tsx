import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/lib/navigation';
import type { Locale } from '@/i18n';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  const footerLinks = [
    { key: 'mission', label: nav('mission') },
    { key: 'how-it-works', label: nav('howItWorks') },
    { key: 'pricing', label: nav('pricing') },
    { key: 'impact', label: nav('impact') },
    { key: 'for-individuals', label: nav('forIndividuals') },
    { key: 'for-shops', label: nav('forShops') },
    { key: 'for-cities', label: nav('forCities') },
    { key: 'ecosystem', label: nav('ecosystem') },
    { key: 'investors', label: nav('investors') },
    { key: 'faq', label: nav('faq') },
    { key: 'contact', label: nav('contact') },
  ];

  return (
    <footer className="bg-colhybri-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-xl mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="#00A878" />
                <path d="M10 20c2-4 6-8 12-10-2 4-4 6-6 8l-2 4-4-2z" fill="white" />
                <circle cx="20" cy="12" r="1.5" fill="white" />
              </svg>
              <span>COLHYBRI</span>
            </Link>
            <p className="text-white/60 text-sm mb-4">{t('tagline')}</p>
            <blockquote className="text-white/50 text-sm italic">
              {t('quote')}
            </blockquote>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4 text-white/80">Navigation</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {footerLinks.map(({ key, label }) => (
                <Link
                  key={key}
                  href={getLocalizedPath(key, locale)}
                  className="text-sm text-white/60 hover:text-colhybri-primary transition-colors py-1"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Group */}
          <div>
            <h3 className="font-semibold mb-4 text-white/80">{nav('contact')}</h3>
            <a
              href="mailto:onlymore2024@gmail.com"
              className="text-sm text-white/60 hover:text-colhybri-primary transition-colors block mb-4"
            >
              onlymore2024@gmail.com
            </a>
            <p className="text-sm text-white/40">{t('group')}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">{t('copyright')}</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              {t('links.privacy')}
            </Link>
            <Link href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              {t('links.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
