#!/usr/bin/env node
// i18n-check: diff top-level keys across locales against reference (en.json)
// Usage: node scripts/i18n-check.js
const fs = require('fs');
const path = require('path');

const MESSAGES_DIR = path.join(__dirname, '..', 'messages');
const REFERENCE = 'en';
const LOCALES = ['en', 'en-gb', 'fr', 'es', 'pt', 'de', 'it', 'zh', 'ja', 'hi', 'pl'];

function load(loc) {
  return JSON.parse(fs.readFileSync(path.join(MESSAGES_DIR, `${loc}.json`), 'utf8'));
}

function flatten(obj, prefix = '', out = []) {
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (const [k, v] of Object.entries(obj)) {
      flatten(v, prefix ? `${prefix}.${k}` : k, out);
    }
  } else {
    out.push(prefix);
  }
  return out;
}

const ref = new Set(flatten(load(REFERENCE)));
let hasErrors = false;

console.log(`Reference: ${REFERENCE} (${ref.size} keys)\n`);
for (const loc of LOCALES) {
  if (loc === REFERENCE) continue;
  const keys = new Set(flatten(load(loc)));
  const missing = [...ref].filter((k) => !keys.has(k));
  const extra = [...keys].filter((k) => !ref.has(k));
  const status = missing.length === 0 ? 'OK' : 'MISSING';
  console.log(`${loc}: ${status} — missing=${missing.length}, extra=${extra.length}`);
  if (missing.length) {
    hasErrors = true;
    console.log(`  first 10 missing: ${missing.slice(0, 10).join(', ')}`);
  }
}

process.exit(hasErrors ? 1 : 0);
