import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Supabase is optional at build time. At runtime, forms detect the missing
// client and fall back to a mailto: link (see components/*Form.tsx).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const SUPABASE_CONFIGURED = Boolean(supabaseUrl && supabaseKey);

export const supabase: SupabaseClient | null = SUPABASE_CONFIGURED
  ? createClient(supabaseUrl!, supabaseKey!)
  : null;

export const CONTACT_EMAIL = 'onlymore2024@gmail.com';

/**
 * Open a pre-filled email in the user's mail client as a graceful fallback
 * when Supabase is unavailable or the insert fails.
 */
export function openMailtoFallback(subject: string, body: string) {
  const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}
