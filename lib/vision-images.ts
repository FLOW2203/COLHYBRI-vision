/**
 * Vision Images Registry
 * Centralized URLs for the 16 Gemini-generated WebP images hosted in Supabase Storage.
 * Bucket: vision-images (public, Supabase project isuzbpzwxcagtnbosgjl)
 */

const SUPABASE_STORAGE =
  'https://isuzbpzwxcagtnbosgjl.supabase.co/storage/v1/object/public/vision-images';

export const visionImages = {
  hero: {
    mainStreet: `${SUPABASE_STORAGE}/hero-main-street.webp`,
    rustBelt: `${SUPABASE_STORAGE}/hero-rust-belt.webp`,
  },
  mission: {
    colibriFire: `${SUPABASE_STORAGE}/mission-colibri-fire.webp`,
    colibriHope: `${SUPABASE_STORAGE}/mission-colibri-hope.webp`,
  },
  heritage: {
    caffeSospeso: `${SUPABASE_STORAGE}/heritage-caffe-sospeso.webp`,
    mutualisme: `${SUPABASE_STORAGE}/heritage-mutualisme.webp`,
  },
  solution: {
    poolSolidaire: `${SUPABASE_STORAGE}/solution-pool-solidaire.webp`,
    mapsPlus: `${SUPABASE_STORAGE}/solution-maps-plus.webp`,
    gamification: `${SUPABASE_STORAGE}/solution-gamification.webp`,
  },
  impact: {
    france: `${SUPABASE_STORAGE}/impact-france-zrcv.webp`,
    usa: `${SUPABASE_STORAGE}/impact-usa-rust-belt.webp`,
  },
  triplePlay: `${SUPABASE_STORAGE}/triple-play-ecosystem.webp`,
  forCities: `${SUPABASE_STORAGE}/for-cities-partnership.webp`,
  investors: `${SUPABASE_STORAGE}/investors-growth-vine.webp`,
  founder: `${SUPABASE_STORAGE}/founder-florent.webp`,
  mascot: `${SUPABASE_STORAGE}/icon-colibri-mascot.webp`,
} as const;

/**
 * Team member photos — hosted on onlymore.group's public CDN (same
 * portraits used on the ONLYMORE Group holding site). Centralised here
 * so a future migration to Supabase is a one-line change.
 * Hostname is already covered by the `**` wildcard in next.config.mjs.
 */
export const teamPhotos = {
  florent: 'https://www.onlymore.group/images/florent_400.jpg',
  joao: 'https://www.onlymore.group/images/joao_400.jpg',
  stephane: 'https://www.onlymore.group/images/stephane_400.jpg',
} as const;
