import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Supabase is optional at build time. At runtime, forms detect the missing
// client and fall back to a mailto: link (see components/*Form.tsx).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const SUPABASE_CONFIGURED = Boolean(supabaseUrl && supabaseKey);

export const supabase: SupabaseClient | null = SUPABASE_CONFIGURED
  ? createClient(supabaseUrl!, supabaseKey!)
  : null;

export const CONTACT_EMAIL = 'contact@colhybri.com';
export const INVESTOR_EMAIL = 'florent@onlymore.group';

/**
 * Open a pre-filled email in the user's mail client as a graceful fallback
 * when Supabase is unavailable or the insert fails. Defaults to the general
 * contact inbox; pass `to` to route to a specific recipient (e.g. investors).
 */
export function openMailtoFallback(subject: string, body: string, to: string = CONTACT_EMAIL) {
  const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}
