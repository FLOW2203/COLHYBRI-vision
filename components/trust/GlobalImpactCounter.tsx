'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { GLOBAL_STATS } from '@/data/trust-data';

interface GlobalImpactCounterProps {
  locale: string;
}

interface CounterConfig {
  endValue: number;
  prefix: string;
  suffix: string;
  label: string;
  source: string;
  colorClass: string;
  decimals: number;
}

function useCountUp(endValue: number, isVisible: boolean, duration: number = 2000, decimals: number = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out cubic for a smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * endValue;

      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, endValue, duration, decimals]);

  return count;
}

function AnimatedStat({
  config,
  isVisible,
  delay,
}: {
  config: CounterConfig;
  isVisible: boolean;
  delay: number;
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const count = useCountUp(config.endValue, shouldAnimate, 2000, config.decimals);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setShouldAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [isVisible, delay]);

  const displayValue = shouldAnimate
    ? `${config.prefix}${config.decimals > 0 ? count.toFixed(config.decimals) : count}${config.suffix}`
    : `${config.prefix}0${config.suffix}`;

  return (
    <div
      className={`text-center transition-all duration-700 ${
        shouldAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div
        className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 ${config.colorClass}`}
        data-fact="true"
      >
        {displayValue}
      </div>
      <p className="text-white/70 text-sm sm:text-base font-medium mb-2">
        {config.label}
      </p>
      <p className="text-white/40 text-xs" data-source="true">
        {config.source}
      </p>
    </div>
  );
}

// Numeric values and styling stay in code; all display text is localized
// through the `globalImpact` i18n namespace (label, suffix, source).
const STAT_STYLES: Pick<CounterConfig, 'endValue' | 'prefix' | 'colorClass' | 'decimals'>[] = [
  { endValue: 1.4, prefix: '', colorClass: 'text-colhybri-primary', decimals: 1 },
  { endValue: 13.4, prefix: '+', colorClass: 'text-colhybri-secondary', decimals: 1 },
  { endValue: 1, prefix: '', colorClass: 'text-colhybri-primary', decimals: 0 },
];

export function GlobalImpactCounter({ locale: _locale }: GlobalImpactCounterProps) {
  const t = useTranslations('globalImpact');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const configs: CounterConfig[] = STAT_STYLES.map((style, i) => ({
    ...style,
    suffix: t(`stats.${i}.suffix`),
    label: t(`stats.${i}.label`),
    source: t(`stats.${i}.source`),
  }));

  return (
    <section
      ref={sectionRef}
      className="bg-colhybri-dark py-20 sm:py-28"
      aria-label={t('ariaLabel')}
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-colhybri-primary font-semibold text-sm tracking-wide uppercase mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 max-w-4xl mx-auto leading-tight">
            {t('heading')}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t('subheading')}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {configs.map((config, index) => (
            <AnimatedStat
              key={index}
              config={config}
              isVisible={isVisible}
              delay={index * 300}
            />
          ))}
        </div>

        {/* Sources block visible in the DOM for GEO/Google AI */}
        <div className="mt-12 text-center" data-sources="true">
          <p className="text-white/30 text-xs">
            {t('sourcesLabel')}: {GLOBAL_STATS.sources.who} | {GLOBAL_STATS.sources.jama}
          </p>
        </div>
      </div>
    </section>
  );
}
