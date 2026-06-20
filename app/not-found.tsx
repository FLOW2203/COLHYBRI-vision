import type { Metadata } from 'next';
import Link from 'next/link';
import '@/app/globals.css';

// Root-level 404. Next.js renders this for paths that match no route at all
// (including unknown slugs under a locale). The root layout is a passthrough,
// so this page provides its own <html>/<body>. It is intentionally locale
// neutral (bilingual FR/EN) since the locale cannot be resolved for an
// unmatched path. In-segment notFound() calls use app/[locale]/not-found.tsx.
export const metadata: Metadata = {
  title: '404 | COLHYBRI',
  robots: { index: false, follow: false },
};

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="font-sans bg-colhybri-cream text-colhybri-dark min-h-screen flex flex-col">
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
          <p className="text-7xl sm:text-8xl font-extrabold text-colhybri-primary mb-6">
            404
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-colhybri-dark mb-3">
            Page introuvable / Page not found
          </h1>
          <p className="text-colhybri-dark/60 text-base sm:text-lg max-w-md mb-8">
            La page que vous cherchez n&apos;existe pas ou a été déplacée. The
            page you are looking for does not exist or has moved.
          </p>
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center min-h-[44px]"
          >
            Retour a l&apos;accueil / Back to Home
          </Link>
        </main>
      </body>
    </html>
  );
}
