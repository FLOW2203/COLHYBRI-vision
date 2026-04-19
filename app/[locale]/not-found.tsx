import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function LocaleNotFound() {
  const t = useTranslations('notFound');
  const nav = useTranslations('nav');

  return (
    <main className="min-h-[70vh] bg-colhybri-dark text-white flex flex-col items-center justify-center px-6 py-24">
      <p className="font-sans text-colhybri-primary font-semibold text-sm tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-semibold text-colhybri-primary mb-8 leading-none">
        {t('title')}
      </h1>
      <p className="font-sans text-lg sm:text-xl text-center max-w-xl mb-12 text-white/70 leading-relaxed">
        {t('message')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-colhybri-primary text-colhybri-dark font-semibold rounded-full hover:bg-colhybri-gold transition-colors"
        >
          {nav('home')}
        </Link>
        <Link
          href="/mission"
          className="px-6 py-3 border border-colhybri-primary text-colhybri-primary rounded-full hover:bg-colhybri-primary/10 transition-colors"
        >
          {nav('mission')}
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-white/30 text-white/70 rounded-full hover:bg-white/10 transition-colors"
        >
          {nav('contact')}
        </Link>
      </div>
    </main>
  );
}
