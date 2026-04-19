#!/usr/bin/env bash
# Embed ONLYMORE Group copyright metadata (EXIF / XMP / IPTC) in COLHYBRI
# team portraits. Run locally — this script cannot execute inside the
# Claude Code sandbox (no exiftool, no binary upload tool for Supabase).
#
# Usage (from repo root):
#   brew install exiftool          # macOS
#   apt-get install libimage-exiftool-perl   # Debian/Ubuntu
#   bash scripts/embed-copyright-metadata.sh
#   # Then drag the three enriched files from /tmp/photos-metadata/ into
#   # the Supabase dashboard → Storage → bucket `vision-images` (Replace).

set -euo pipefail

BUCKET_URL="https://isuzbpzwxcagtnbosgjl.supabase.co/storage/v1/object/public/vision-images"
TEMP_DIR="/tmp/photos-metadata"
mkdir -p "$TEMP_DIR"

if ! command -v exiftool >/dev/null 2>&1; then
  echo "❌ exiftool not found. Install it first:"
  echo "   macOS: brew install exiftool"
  echo "   Linux: sudo apt-get install libimage-exiftool-perl"
  exit 1
fi

# filename|description|subject
PHOTOS=(
  "founder-florent.webp|Florent Gibert, Founder and CEO of COLHYBRI|Florent Gibert"
  "cfo-joao-almeida.webp|João Almeida, CFO of COLHYBRI|João Almeida"
  "fundraising-stephane-picard.webp|Stéphane Picard, Fundraising Partner of COLHYBRI|Stéphane Picard"
)

for entry in "${PHOTOS[@]}"; do
  IFS='|' read -r filename description subject <<< "$entry"

  echo ""
  echo "── $filename ───────────────────────────────"

  if ! curl -fsSL "$BUCKET_URL/$filename" -o "$TEMP_DIR/$filename"; then
    echo "⚠️  Skip: $filename not found in Supabase bucket yet."
    continue
  fi

  if [ ! -s "$TEMP_DIR/$filename" ]; then
    echo "⚠️  Skip: $filename downloaded empty."
    continue
  fi

  exiftool \
    -overwrite_original \
    -Copyright="© 2026 ONLYMORE Group. All rights reserved." \
    -Artist="ONLYMORE Group" \
    -Creator="ONLYMORE Group" \
    -Rights="© 2026 ONLYMORE Group. Use prohibited without written permission." \
    -Description="$description" \
    -ImageDescription="$description" \
    -Subject="$subject" \
    -Keywords="COLHYBRI, ONLYMORE, team, founder, portrait" \
    -CopyrightNotice="© 2026 ONLYMORE Group" \
    -UsageTerms="Contact onlymore2024@gmail.com for licensing" \
    -URL="https://www.colhybri.vision" \
    "$TEMP_DIR/$filename" >/dev/null

  echo "✅ embedded — verifying:"
  exiftool -Copyright -Artist -Rights -Subject "$TEMP_DIR/$filename" | sed 's/^/   /'
done

echo ""
echo "📤 Enriched files are in $TEMP_DIR/"
echo "   Upload them back to Supabase (vision-images bucket, Replace existing)."
