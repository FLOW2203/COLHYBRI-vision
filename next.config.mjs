import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'isuzbpzwxcagtnbosgjl.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async rewrites() {
    // Localized slugs → actual file-based routes
    // navigation.ts generates localized URLs but pages live under English slugs
    const localizedRoutes = [
      // FR
      { source: '/fr/pour-les-commerces', destination: '/fr/for-shops' },
      { source: '/fr/pour-les-villes', destination: '/fr/for-cities' },
      { source: '/fr/pour-les-particuliers', destination: '/fr/for-individuals' },
      { source: '/fr/comment-ca-marche', destination: '/fr/how-it-works' },
      { source: '/fr/tarifs', destination: '/fr/pricing' },
      { source: '/fr/ecosysteme', destination: '/fr/ecosystem' },
      { source: '/fr/investisseurs', destination: '/fr/investors' },
      // ES
      { source: '/es/para-comercios', destination: '/es/for-shops' },
      { source: '/es/para-ciudades', destination: '/es/for-cities' },
      { source: '/es/para-individuos', destination: '/es/for-individuals' },
      { source: '/es/como-funciona', destination: '/es/how-it-works' },
      { source: '/es/precios', destination: '/es/pricing' },
      { source: '/es/mision', destination: '/es/mission' },
      { source: '/es/ecosistema', destination: '/es/ecosystem' },
      { source: '/es/inversores', destination: '/es/investors' },
      { source: '/es/contacto', destination: '/es/contact' },
      { source: '/es/impacto', destination: '/es/impact' },
      // PT
      { source: '/pt/para-comercios', destination: '/pt/for-shops' },
      { source: '/pt/para-cidades', destination: '/pt/for-cities' },
      { source: '/pt/para-individuos', destination: '/pt/for-individuals' },
      { source: '/pt/como-funciona', destination: '/pt/how-it-works' },
      { source: '/pt/precos', destination: '/pt/pricing' },
      { source: '/pt/missao', destination: '/pt/mission' },
      { source: '/pt/ecossistema', destination: '/pt/ecosystem' },
      { source: '/pt/investidores', destination: '/pt/investors' },
      { source: '/pt/contato', destination: '/pt/contact' },
      { source: '/pt/impacto', destination: '/pt/impact' },
      // DE
      { source: '/de/fuer-geschaefte', destination: '/de/for-shops' },
      { source: '/de/fuer-staedte', destination: '/de/for-cities' },
      { source: '/de/fuer-einzelpersonen', destination: '/de/for-individuals' },
      { source: '/de/so-funktioniert-es', destination: '/de/how-it-works' },
      { source: '/de/preise', destination: '/de/pricing' },
      { source: '/de/oekosystem', destination: '/de/ecosystem' },
      { source: '/de/investoren', destination: '/de/investors' },
      { source: '/de/kontakt', destination: '/de/contact' },
      { source: '/de/wirkung', destination: '/de/impact' },
      // IT
      { source: '/it/per-le-botteghe', destination: '/it/for-shops' },
      { source: '/it/per-i-comuni', destination: '/it/for-cities' },
      { source: '/it/per-i-cittadini', destination: '/it/for-individuals' },
      { source: '/it/come-funziona', destination: '/it/how-it-works' },
      { source: '/it/prezzi', destination: '/it/pricing' },
      { source: '/it/missione', destination: '/it/mission' },
      { source: '/it/ecosistema', destination: '/it/ecosystem' },
      { source: '/it/investitori', destination: '/it/investors' },
      { source: '/it/contatti', destination: '/it/contact' },
      { source: '/it/impatto', destination: '/it/impact' },
      // PL
      { source: '/pl/dla-sklepow', destination: '/pl/for-shops' },
      { source: '/pl/dla-miast', destination: '/pl/for-cities' },
      { source: '/pl/dla-osob-prywatnych', destination: '/pl/for-individuals' },
      { source: '/pl/jak-to-dziala', destination: '/pl/how-it-works' },
      { source: '/pl/cennik', destination: '/pl/pricing' },
      { source: '/pl/misja', destination: '/pl/mission' },
      { source: '/pl/ekosystem', destination: '/pl/ecosystem' },
      { source: '/pl/inwestorzy', destination: '/pl/investors' },
      { source: '/pl/wplyw', destination: '/pl/impact' },
    ];
    return localizedRoutes;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
