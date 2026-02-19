'use client';

import { useState, useRef, useEffect } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { localeLabels } from '@/lib/navigation';
import { locales, type Locale } from '@/i18n';

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = (params.locale as Locale) || 'en';
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setOpen(false);
  }

  const current = localeLabels[currentLocale];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                   hover:bg-gray-100 transition-colors border border-gray-200"
        aria-label="Switch language"
        aria-expanded={open}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
          <circle cx="8" cy="8" r="7" />
          <path d="M1 8h14M8 1c-2.5 2.5-2.5 10.5 0 14M8 1c2.5 2.5 2.5 10.5 0 14" />
        </svg>
        <span>{current.flag} {current.name}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M3 5l3 3 3-3" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
          {locales.map((locale) => {
            const label = localeLabels[locale];
            return (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-colhybri-primary/5 transition-colors ${
                  locale === currentLocale ? 'text-colhybri-primary font-semibold' : 'text-colhybri-dark/70'
                }`}
              >
                <span>{label.flag}</span>
                <span>{label.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
