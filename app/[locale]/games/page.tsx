'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const GAMES_URL = 'https://colhybri-games-src-games.vercel.app';
const SIGNUP_URL = 'https://colhybri.com/signup';

export default function GamesPage() {
  const t = useTranslations('games');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Lazy load: only load iframe when container enters viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observerRef.current?.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observerRef.current.observe(container);
    return () => observerRef.current?.disconnect();
  }, []);

  // Show CTA after some time playing
  useEffect(() => {
    if (!isLoaded) return;
    const timer = setTimeout(() => setShowCta(true), 60000); // 60s
    return () => clearTimeout(timer);
  }, [isLoaded]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-colhybri-primary/10 to-colhybri-secondary/10 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-colhybri-dark mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-colhybri-dark/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Game iframe */}
      <section className="py-8 px-6 bg-white">
        <div ref={containerRef} className="max-w-5xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-colhybri-dark" style={{ paddingBottom: '56.25%' }}>
            {shouldLoad ? (
              <iframe
                ref={iframeRef}
                src={GAMES_URL}
                title={t('iframeTitle')}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen"
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 border-4 border-colhybri-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-lg">{t('loading')}</p>
                </div>
              </div>
            )}
          </div>

          {!isLoaded && shouldLoad && (
            <div className="text-center mt-4 text-colhybri-dark/50 text-sm">
              {t('loading')}
            </div>
          )}
        </div>
      </section>

      {/* Post-game CTA */}
      {showCta && (
        <section className="py-12 px-6 bg-colhybri-dark text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
            <p className="text-white/70 mb-6">{t('ctaDescription')}</p>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-colhybri-primary text-white rounded-xl font-semibold hover:bg-colhybri-primary/90 transition"
            >
              {t('ctaButton')}
            </a>
          </div>
        </section>
      )}
    </>
  );
}
