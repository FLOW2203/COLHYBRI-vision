'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface DemoResult {
  shopName: string;
  profile: { status: string; tone: 'green' | 'orange' | 'red' };
  reviews: { count: number; tone: 'green' | 'orange' | 'red' };
  photos: { count: number; tone: 'green' | 'orange' | 'red' };
  hours: { status: string; tone: 'green' | 'orange' | 'red' };
  score: number;
}

/**
 * Simulated Google Maps audit demo. Uses deterministic-looking pseudo-random
 * output based on shop name length so repeat visits feel consistent.
 */
function simulate(name: string): DemoResult {
  const seed = Array.from(name).reduce((a, c) => a + c.charCodeAt(0), 0);
  const reviews = (seed % 7) + 2; // 2..8
  const photos = seed % 4; // 0..3
  const score = Math.max(30, Math.min(60, 30 + (seed % 31))); // 30..60

  return {
    shopName: name,
    profile: { status: 'incomplete', tone: 'orange' },
    reviews: { count: reviews, tone: reviews < 4 ? 'red' : 'orange' },
    photos: { count: photos, tone: photos === 0 ? 'red' : 'orange' },
    hours: { status: 'missing', tone: 'red' },
    score,
  };
}

const toneClasses: Record<'green' | 'orange' | 'red', string> = {
  green: 'bg-green-100 text-green-800',
  orange: 'bg-amber-100 text-amber-800',
  red: 'bg-red-100 text-red-800',
};

export function ScoreMapsDemo() {
  const t = useTranslations('mapsPlus.demo');
  const [input, setInput] = useState('');
  const [result, setResult] = useState<DemoResult | null>(null);

  const onAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setResult(simulate(input.trim()));
  };

  return (
    <div className="rounded-2xl bg-white border border-colhybri-teal/10 p-6 sm:p-8">
      <form onSubmit={onAudit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('placeholder')}
          className="form-input flex-1"
          aria-label={t('placeholder')}
        />
        <button type="submit" className="btn-primary px-6">
          {t('audit')}
        </button>
      </form>

      {result && (
        <div className="mt-8 space-y-4">
          <div className="text-center">
            <div className="font-mono font-bold text-5xl text-colhybri-teal">{result.score}</div>
            <p className="font-sans text-sm text-colhybri-dark/60 mt-1">{t('scoreLabel')}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <RowTag label={t('profile')} tag={t('status.incomplete')} tone={result.profile.tone} />
            <RowTag
              label={t('reviews')}
              tag={String(result.reviews.count)}
              tone={result.reviews.tone}
            />
            <RowTag label={t('photos')} tag={String(result.photos.count)} tone={result.photos.tone} />
            <RowTag label={t('hours')} tag={t('status.missing')} tone={result.hours.tone} />
          </div>

          <div className="p-4 rounded-xl bg-colhybri-cream text-center">
            <p className="font-sans text-colhybri-dark/80">
              {t('improvement', { value: 100 - result.score })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function RowTag({ label, tag, tone }: { label: string; tag: string; tone: 'green' | 'orange' | 'red' }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-colhybri-cream">
      <span className="font-sans text-sm text-colhybri-dark/70">{label}</span>
      <span className={`font-mono text-xs font-bold px-2 py-1 rounded ${toneClasses[tone]}`}>{tag}</span>
    </div>
  );
}
