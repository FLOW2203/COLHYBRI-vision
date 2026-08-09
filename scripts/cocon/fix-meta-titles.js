#!/usr/bin/env node
/**
 * Backfills missing cocon.meta.<slug>.title entries that internal-link cards
 * reference via tMeta() in SeoCoconPage. Without them, next-intl renders the
 * raw key path (e.g. "pour-les-commercants.title") on the related-link cards.
 *
 * Slugs fixed (surfaced by MISSING_MESSAGE during next build):
 *   comment-ca-marche, pour-les-collectivites, pour-les-commercants -> mirror
 *   the locale's own cocon.<slug>.title;
 *   mission (cross-linked from caffe-sospeso, no cocon block) -> locale's
 *   mission.title (homepage mission section), fallback nav.mission.
 *
 * Idempotent. Usage: node scripts/cocon/fix-meta-titles.js
 */
const fs = require('fs');
const path = require('path');

const MESSAGES_DIR = path.join(__dirname, '..', '..', 'messages');
const LOCALES = ['en', 'en-gb', 'fr', 'es', 'pt', 'de', 'it', 'zh', 'ja', 'hi', 'pl'];
const MIRROR_SLUGS = ['comment-ca-marche', 'pour-les-collectivites', 'pour-les-commercants'];

for (const loc of LOCALES) {
  const file = path.join(MESSAGES_DIR, `${loc}.json`);
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  const added = [];

  for (const slug of MIRROR_SLUGS) {
    const title = json.cocon?.[slug]?.title;
    if (!title) throw new Error(`${loc}: cocon.${slug}.title not found, cannot mirror`);
    if (json.cocon.meta[slug]?.title !== title) {
      json.cocon.meta[slug] = { title };
      added.push(slug);
    }
  }

  const missionTitle = json.mission?.title || json.nav?.mission;
  if (!missionTitle) throw new Error(`${loc}: no mission title source`);
  if (json.cocon.meta.mission?.title !== missionTitle) {
    json.cocon.meta.mission = { title: missionTitle };
    added.push('mission');
  }

  fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`${loc}: ${added.length ? 'added ' + added.join(', ') : 'already complete'}`);
}
console.log('Done.');
