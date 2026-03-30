import type { Locale } from '@/i18n';

export const BASE_URL = 'https://www.colhybri.vision';

// Mapping of route keys to locale-specific slugs
export const routeMap: Record<string, Record<string, string>> = {
  home: {
    en: '', 'en-gb': '', fr: '', es: '', pt: '', de: '', it: '', zh: '', ja: '', hi: '', pl: '',
  },
  mission: {
    en: 'mission', 'en-gb': 'mission', fr: 'mission', es: 'mision', pt: 'missao',
    de: 'mission', it: 'missione', zh: '使命', ja: 'ミッション', hi: 'mission', pl: 'misja',
  },
  'how-it-works': {
    en: 'how-it-works', 'en-gb': 'how-it-works', fr: 'comment-ca-marche', es: 'como-funciona',
    pt: 'como-funciona', de: 'so-funktioniert-es', it: 'come-funziona', zh: '工作原理', ja: '仕組み',
    hi: 'kaise-kaam-karta-hai', pl: 'jak-to-dziala',
  },
  pricing: {
    en: 'pricing', 'en-gb': 'pricing', fr: 'tarifs', es: 'precios', pt: 'precos',
    de: 'preise', it: 'prezzi', zh: '定价', ja: '料金', hi: 'mulya', pl: 'cennik',
  },
  impact: {
    en: 'impact', 'en-gb': 'impact', fr: 'impact', es: 'impacto', pt: 'impacto',
    de: 'wirkung', it: 'impatto', zh: '影响', ja: 'インパクト', hi: 'prabhav', pl: 'wplyw',
  },
  'for-individuals': {
    en: 'for-individuals', 'en-gb': 'for-individuals', fr: 'pour-les-particuliers', es: 'para-individuos',
    pt: 'para-individuos', de: 'fuer-einzelpersonen', it: 'per-i-cittadini', zh: '个人用户', ja: '個人向け',
    hi: 'vyaktiyon-ke-liye', pl: 'dla-osob-prywatnych',
  },
  'for-shops': {
    en: 'for-shops', 'en-gb': 'for-shops', fr: 'pour-les-commerces', es: 'para-comercios',
    pt: 'para-comercios', de: 'fuer-geschaefte', it: 'per-le-botteghe', zh: '商家', ja: '店舗向け',
    hi: 'dukano-ke-liye', pl: 'dla-sklepow',
  },
  'for-cities': {
    en: 'for-cities', 'en-gb': 'for-cities', fr: 'pour-les-villes', es: 'para-ciudades',
    pt: 'para-cidades', de: 'fuer-staedte', it: 'per-i-comuni', zh: '城市', ja: '都市向け',
    hi: 'shaharon-ke-liye', pl: 'dla-miast',
  },
  miami: {
    en: 'miami', 'en-gb': 'miami', fr: 'miami', es: 'miami', pt: 'miami',
    de: 'miami', it: 'miami', zh: 'miami', ja: 'miami', hi: 'miami', pl: 'miami',
  },
  ecosystem: {
    en: 'ecosystem', 'en-gb': 'ecosystem', fr: 'ecosysteme', es: 'ecosistema', pt: 'ecossistema',
    de: 'oekosystem', it: 'ecosistema', zh: '生态系统', ja: 'エコシステム', hi: 'paristhitiki-tantra', pl: 'ekosystem',
  },
  investors: {
    en: 'investors', 'en-gb': 'investors', fr: 'investisseurs', es: 'inversores', pt: 'investidores',
    de: 'investoren', it: 'investitori', zh: '投资者', ja: '投資家向け', hi: 'niveshak', pl: 'inwestorzy',
  },
  blog: {
    en: 'blog', 'en-gb': 'blog', fr: 'blog', es: 'blog', pt: 'blog',
    de: 'blog', it: 'blog', zh: '博客', ja: 'ブログ', hi: 'blog', pl: 'blog',
  },
  faq: {
    en: 'faq', 'en-gb': 'faq', fr: 'faq', es: 'faq', pt: 'faq',
    de: 'faq', it: 'faq', zh: '常见问题', ja: 'よくある質問', hi: 'faq', pl: 'faq',
  },
  contact: {
    en: 'contact', 'en-gb': 'contact', fr: 'contact', es: 'contacto', pt: 'contato',
    de: 'kontakt', it: 'contatti', zh: '联系我们', ja: 'お問い合わせ', hi: 'sampark', pl: 'kontakt',
  },
  'solidarite-proximite': {
    en: 'solidarite-proximite', 'en-gb': 'solidarite-proximite', fr: 'solidarite-proximite',
    es: 'solidarite-proximite', pt: 'solidarite-proximite', de: 'solidarite-proximite',
    it: 'solidarite-proximite', zh: 'solidarite-proximite', ja: 'solidarite-proximite',
    hi: 'solidarite-proximite', pl: 'solidarite-proximite',
  },
  'caffe-sospeso-histoire': {
    en: 'caffe-sospeso-histoire', 'en-gb': 'caffe-sospeso-histoire', fr: 'caffe-sospeso-histoire',
    es: 'caffe-sospeso-histoire', pt: 'caffe-sospeso-histoire', de: 'caffe-sospeso-histoire',
    it: 'caffe-sospeso-histoire', zh: 'caffe-sospeso-histoire', ja: 'caffe-sospeso-histoire',
    hi: 'caffe-sospeso-histoire', pl: 'caffe-sospeso-histoire',
  },
  'legende-colibri': {
    en: 'legende-colibri', 'en-gb': 'legende-colibri', fr: 'legende-colibri',
    es: 'legende-colibri', pt: 'legende-colibri', de: 'legende-colibri',
    it: 'legende-colibri', zh: 'legende-colibri', ja: 'legende-colibri',
    hi: 'legende-colibri', pl: 'legende-colibri',
  },
  'economie-solidaire-locale': {
    en: 'economie-solidaire-locale', 'en-gb': 'economie-solidaire-locale', fr: 'economie-solidaire-locale',
    es: 'economie-solidaire-locale', pt: 'economie-solidaire-locale', de: 'economie-solidaire-locale',
    it: 'economie-solidaire-locale', zh: 'economie-solidaire-locale', ja: 'economie-solidaire-locale',
    hi: 'economie-solidaire-locale', pl: 'economie-solidaire-locale',
  },
  'mutualisme-francais': {
    en: 'mutualisme-francais', 'en-gb': 'mutualisme-francais', fr: 'mutualisme-francais',
    es: 'mutualisme-francais', pt: 'mutualisme-francais', de: 'mutualisme-francais',
    it: 'mutualisme-francais', zh: 'mutualisme-francais', ja: 'mutualisme-francais',
    hi: 'mutualisme-francais', pl: 'mutualisme-francais',
  },
  'don-solidaire-quotidien': {
    en: 'don-solidaire-quotidien', 'en-gb': 'don-solidaire-quotidien', fr: 'don-solidaire-quotidien',
    es: 'don-solidaire-quotidien', pt: 'don-solidaire-quotidien', de: 'don-solidaire-quotidien',
    it: 'don-solidaire-quotidien', zh: 'don-solidaire-quotidien', ja: 'don-solidaire-quotidien',
    hi: 'don-solidaire-quotidien', pl: 'don-solidaire-quotidien',
  },
  'cafe-suspendu-numerique': {
    en: 'cafe-suspendu-numerique', 'en-gb': 'cafe-suspendu-numerique', fr: 'cafe-suspendu-numerique',
    es: 'cafe-suspendu-numerique', pt: 'cafe-suspendu-numerique', de: 'cafe-suspendu-numerique',
    it: 'cafe-suspendu-numerique', zh: 'cafe-suspendu-numerique', ja: 'cafe-suspendu-numerique',
    hi: 'cafe-suspendu-numerique', pl: 'cafe-suspendu-numerique',
  },
  'commerce-local': {
    en: 'commerce-local', 'en-gb': 'commerce-local', fr: 'commerce-local',
    es: 'commerce-local', pt: 'commerce-local', de: 'commerce-local',
    it: 'commerce-local', zh: 'commerce-local', ja: 'commerce-local',
    hi: 'commerce-local', pl: 'commerce-local',
  },
  'soutenir-commercants-proximite': {
    en: 'soutenir-commercants-proximite', 'en-gb': 'soutenir-commercants-proximite', fr: 'soutenir-commercants-proximite',
    es: 'soutenir-commercants-proximite', pt: 'soutenir-commercants-proximite', de: 'soutenir-commercants-proximite',
    it: 'soutenir-commercants-proximite', zh: 'soutenir-commercants-proximite', ja: 'soutenir-commercants-proximite',
    hi: 'soutenir-commercants-proximite', pl: 'soutenir-commercants-proximite',
  },
  'tpe-pme-digitalisation': {
    en: 'tpe-pme-digitalisation', 'en-gb': 'tpe-pme-digitalisation', fr: 'tpe-pme-digitalisation',
    es: 'tpe-pme-digitalisation', pt: 'tpe-pme-digitalisation', de: 'tpe-pme-digitalisation',
    it: 'tpe-pme-digitalisation', zh: 'tpe-pme-digitalisation', ja: 'tpe-pme-digitalisation',
    hi: 'tpe-pme-digitalisation', pl: 'tpe-pme-digitalisation',
  },
  'circuit-court-economie': {
    en: 'circuit-court-economie', 'en-gb': 'circuit-court-economie', fr: 'circuit-court-economie',
    es: 'circuit-court-economie', pt: 'circuit-court-economie', de: 'circuit-court-economie',
    it: 'circuit-court-economie', zh: 'circuit-court-economie', ja: 'circuit-court-economie',
    hi: 'circuit-court-economie', pl: 'circuit-court-economie',
  },
  'fidelisation-commerce-quartier': {
    en: 'fidelisation-commerce-quartier', 'en-gb': 'fidelisation-commerce-quartier', fr: 'fidelisation-commerce-quartier',
    es: 'fidelisation-commerce-quartier', pt: 'fidelisation-commerce-quartier', de: 'fidelisation-commerce-quartier',
    it: 'fidelisation-commerce-quartier', zh: 'fidelisation-commerce-quartier', ja: 'fidelisation-commerce-quartier',
    hi: 'fidelisation-commerce-quartier', pl: 'fidelisation-commerce-quartier',
  },
  'impact-economique-local': {
    en: 'impact-economique-local', 'en-gb': 'impact-economique-local', fr: 'impact-economique-local',
    es: 'impact-economique-local', pt: 'impact-economique-local', de: 'impact-economique-local',
    it: 'impact-economique-local', zh: 'impact-economique-local', ja: 'impact-economique-local',
    hi: 'impact-economique-local', pl: 'impact-economique-local',
  },
  'multiplicateur-keynesien': {
    en: 'multiplicateur-keynesien', 'en-gb': 'multiplicateur-keynesien', fr: 'multiplicateur-keynesien',
    es: 'multiplicateur-keynesien', pt: 'multiplicateur-keynesien', de: 'multiplicateur-keynesien',
    it: 'multiplicateur-keynesien', zh: 'multiplicateur-keynesien', ja: 'multiplicateur-keynesien',
    hi: 'multiplicateur-keynesien', pl: 'multiplicateur-keynesien',
  },
  'inclusion-financiere': {
    en: 'inclusion-financiere', 'en-gb': 'inclusion-financiere', fr: 'inclusion-financiere',
    es: 'inclusion-financiere', pt: 'inclusion-financiere', de: 'inclusion-financiere',
    it: 'inclusion-financiere', zh: 'inclusion-financiere', ja: 'inclusion-financiere',
    hi: 'inclusion-financiere', pl: 'inclusion-financiere',
  },
  'pouvoir-achat-solidaire': {
    en: 'pouvoir-achat-solidaire', 'en-gb': 'pouvoir-achat-solidaire', fr: 'pouvoir-achat-solidaire',
    es: 'pouvoir-achat-solidaire', pt: 'pouvoir-achat-solidaire', de: 'pouvoir-achat-solidaire',
    it: 'pouvoir-achat-solidaire', zh: 'pouvoir-achat-solidaire', ja: 'pouvoir-achat-solidaire',
    hi: 'pouvoir-achat-solidaire', pl: 'pouvoir-achat-solidaire',
  },
  'fintech-sociale': {
    en: 'fintech-sociale', 'en-gb': 'fintech-sociale', fr: 'fintech-sociale',
    es: 'fintech-sociale', pt: 'fintech-sociale', de: 'fintech-sociale',
    it: 'fintech-sociale', zh: 'fintech-sociale', ja: 'fintech-sociale',
    hi: 'fintech-sociale', pl: 'fintech-sociale',
  },
  'abonnement-solidaire': {
    en: 'abonnement-solidaire', 'en-gb': 'abonnement-solidaire', fr: 'abonnement-solidaire',
    es: 'abonnement-solidaire', pt: 'abonnement-solidaire', de: 'abonnement-solidaire',
    it: 'abonnement-solidaire', zh: 'abonnement-solidaire', ja: 'abonnement-solidaire',
    hi: 'abonnement-solidaire', pl: 'abonnement-solidaire',
  },
  'banque-ethique-alternative': {
    en: 'banque-ethique-alternative', 'en-gb': 'banque-ethique-alternative', fr: 'banque-ethique-alternative',
    es: 'banque-ethique-alternative', pt: 'banque-ethique-alternative', de: 'banque-ethique-alternative',
    it: 'banque-ethique-alternative', zh: 'banque-ethique-alternative', ja: 'banque-ethique-alternative',
    hi: 'banque-ethique-alternative', pl: 'banque-ethique-alternative',
  },
  'economie-sociale-solidaire': {
    en: 'economie-sociale-solidaire', 'en-gb': 'economie-sociale-solidaire', fr: 'economie-sociale-solidaire',
    es: 'economie-sociale-solidaire', pt: 'economie-sociale-solidaire', de: 'economie-sociale-solidaire',
    it: 'economie-sociale-solidaire', zh: 'economie-sociale-solidaire', ja: 'economie-sociale-solidaire',
    hi: 'economie-sociale-solidaire', pl: 'economie-sociale-solidaire',
  },
};

export function getLocalizedPath(routeKey: string, locale: Locale): string {
  const slug = routeMap[routeKey]?.[locale] ?? routeMap[routeKey]?.['en'] ?? routeKey;
  if (!slug) return `/${locale}`;
  return `/${locale}/${slug}`;
}

export function getAbsoluteUrl(path: string): string {
  return `${BASE_URL}${path}`;
}

export function getHreflangAlternates(routeKey: string): Array<{ locale: string; url: string }> {
  const allLocales: Locale[] = ['en', 'en-gb', 'fr', 'es', 'pt', 'de', 'it', 'zh', 'ja', 'hi', 'pl'];
  const alternates: Array<{ locale: string; url: string }> = allLocales.map((locale) => ({
    locale,
    url: getAbsoluteUrl(getLocalizedPath(routeKey, locale)),
  }));
  alternates.push({
    locale: 'x-default',
    url: getAbsoluteUrl(getLocalizedPath(routeKey, 'en')),
  });
  return alternates;
}

export const localeLabels: Record<string, { flag: string; name: string }> = {
  en: { flag: '\uD83C\uDDFA\uD83C\uDDF8', name: 'EN' },
  'en-gb': { flag: '\uD83C\uDDEC\uD83C\uDDE7', name: 'GB' },
  fr: { flag: '\uD83C\uDDEB\uD83C\uDDF7', name: 'FR' },
  es: { flag: '\uD83C\uDDEA\uD83C\uDDF8', name: 'ES' },
  pt: { flag: '\uD83C\uDDE7\uD83C\uDDF7', name: 'PT' },
  de: { flag: '\uD83C\uDDE9\uD83C\uDDEA', name: 'DE' },
  it: { flag: '\uD83C\uDDEE\uD83C\uDDF9', name: 'IT' },
  zh: { flag: '\uD83C\uDDE8\uD83C\uDDF3', name: 'ZH' },
  ja: { flag: '\uD83C\uDDEF\uD83C\uDDF5', name: 'JA' },
  hi: { flag: '\uD83C\uDDEE\uD83C\uDDF3', name: 'HI' },
  pl: { flag: '\uD83C\uDDF5\uD83C\uDDF1', name: 'PL' },
};
