'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { supabase, SUPABASE_CONFIGURED, openMailtoFallback } from '@/lib/supabase';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function InvestorContactForm() {
  const t = useTranslations('forms.investor');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const [form, setForm] = useState({
    nom: '',
    organisation: '',
    email: '',
    telephone: '',
    message: '',
  });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const payload = { ...form, statut: 'nouveau' };

    if (SUPABASE_CONFIGURED && supabase) {
      const { error } = await supabase.from('contact_investisseurs').insert(payload);
      if (!error) {
        setStatus('success');
        return;
      }
      console.warn('[InvestorContactForm] Supabase insert failed:', error.message);
    }

    const subject = `Investissement COLHYBRI - ${form.organisation || form.nom}`;
    const body = [
      `Nom: ${form.nom}`,
      `Organisation: ${form.organisation}`,
      `Email: ${form.email}`,
      `Telephone: ${form.telephone}`,
      '',
      `Message:`,
      form.message,
    ].join('\n');
    openMailtoFallback(subject, body);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-6 text-center">
        <p className="text-green-800 font-medium">{t('successTitle')}</p>
        <p className="text-green-700 text-sm mt-2">{t('successBody')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-sans text-sm font-medium text-colhybri-dark/80 mb-2 block">
            {t('name')}
          </span>
          <input
            required
            type="text"
            value={form.nom}
            onChange={update('nom')}
            className="form-input"
          />
        </label>
        <label className="block">
          <span className="font-sans text-sm font-medium text-colhybri-dark/80 mb-2 block">
            {t('organization')}
          </span>
          <input
            type="text"
            value={form.organisation}
            onChange={update('organisation')}
            className="form-input"
          />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-sans text-sm font-medium text-colhybri-dark/80 mb-2 block">
            {t('email')}
          </span>
          <input
            required
            type="email"
            value={form.email}
            onChange={update('email')}
            className="form-input"
          />
        </label>
        <label className="block">
          <span className="font-sans text-sm font-medium text-colhybri-dark/80 mb-2 block">
            {t('phone')}
          </span>
          <input
            type="tel"
            value={form.telephone}
            onChange={update('telephone')}
            className="form-input"
          />
        </label>
      </div>

      <label className="block">
        <span className="font-sans text-sm font-medium text-colhybri-dark/80 mb-2 block">
          {t('message')}
        </span>
        <textarea
          rows={4}
          value={form.message}
          onChange={update('message')}
          className="form-input resize-none"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full sm:w-auto text-lg px-8 py-3 disabled:opacity-60"
      >
        {status === 'loading' ? t('sending') : t('submit')}
      </button>
    </form>
  );
}
