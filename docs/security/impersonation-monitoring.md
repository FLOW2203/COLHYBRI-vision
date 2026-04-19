# Impersonation monitoring — ONLYMORE Group

Practical playbook to detect misuse of COLHYBRI / ONLYMORE Group names,
team photos, or brand assets (crypto scams, fake profiles, content
theft). One-time setup ≈ 10 minutes, recurring checks ≤ 10 min / month.

---

## 1. Google Alerts (one-time setup, free)

Create six alerts at https://www.google.com/alerts — they all deliver
to `onlymore2024@gmail.com`.

| # | Query | Frequency |
|---|-------|-----------|
| 1 | `"Florent Gibert" COLHYBRI` | daily |
| 2 | `"Florent Gibert" ONLYMORE` | daily |
| 3 | `"João Almeida" COLHYBRI` | daily |
| 4 | `"Stéphane Picard" COLHYBRI` | daily |
| 5 | `COLHYBRI scam OR fraud OR fake` | daily |
| 6 | `"ONLYMORE Group" OR "ONLYMORE FINANCE"` | weekly |

Settings for each alert: sources `All` / language `All` / region `All` /
how many `Only the best results` / deliver to your inbox.

## 2. Reverse image search (monthly, 5 min)

Run once a month against each of the three team portraits. The
expected result set should only include `colhybri.vision`,
`onlymore.group`, and official LinkedIn pages.

| Service | URL |
|---------|-----|
| Google Images | https://images.google.com (camera icon → paste URL) |
| TinEye | https://tineye.com |

Canonical URLs to paste:
- https://isuzbpzwxcagtnbosgjl.supabase.co/storage/v1/object/public/vision-images/founder-florent.webp
- https://www.onlymore.group/images/florent_400.jpg
- https://www.onlymore.group/images/joao_400.jpg
- https://www.onlymore.group/images/stephane_400.jpg

Flag anything outside your owned properties.

## 3. LinkedIn monitoring (weekly, 2 min)

- Search each founder name + `COLHYBRI`.
- There should be exactly one verified profile per person.
- Report duplicates immediately with the "Report profile" button.

## 4. Response playbook

### Social impersonation (LinkedIn / Twitter / Facebook / Instagram)
1. Use the platform's Report flow.
2. Attach proof of identity if requested (passport).
3. Typical resolution: 48–72h.

### Content theft on a regular website
1. Send a DMCA / LCEN takedown notice (templates in
   `docs/legal/dmca-takedown-template.md`).
2. Recipients: the infringing site's webmaster **plus** its hosting
   provider (use https://who.is to find them).
3. Escalate to the hosting provider's abuse desk (AWS abuse, OVH abuse,
   Cloudflare trust & safety…) if no response within 7 days.
4. Last resort France: plainte CNIL (if personal data) or cybergend.

### Financial scam using the brand
1. Flag on the exchange / marketplace / social network immediately.
2. French report: https://www.internet-signalement.gouv.fr (Pharos).
3. US report: https://www.ic3.gov.
4. Proactive comms: publish a short advisory on LinkedIn / X so the
   network knows "only colhybri.vision and onlymore.group are official."
