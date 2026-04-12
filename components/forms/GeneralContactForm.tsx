'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { supabase, SUPABASE_CONFIGURED, openMailtoFallback } from '@/lib/supabase';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function GeneralContactForm() {
  const t = useTranslations('forms.general');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const [form, setForm] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const payload = { ...form, statut: 'nouveau' };

    if (SUPABASE_CONFIGURED && supabase) {
      const { error } = await supabase.from('contact_general').insert(payload);
      if (!error) {
        setStatus('success');
        return;
      }
      console.warn('[GeneralContactForm] Supabase insert failed:', error.message);
    }

    const subject = `Contact COLHYBRI - ${form.sujet || 'question'}`;
    const body = [
      `Nom: ${form.nom}`,
      `Email: ${form.email}`,
      `Sujet: ${form.sujet}`,
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
          {t('subject')}
        </span>
        <select
          required
          value={form.sujet}
          onChange={update('sujet')}
          className="form-input"
        >
          <option value="">{t('subjectPlaceholder')}</option>
          <option value="partenariat">{t('subjects.partnership')}</option>
          <option value="presse">{t('subjects.press')}</option>
          <option value="investissement">{t('subjects.investment')}</option>
          <option value="question">{t('subjects.question')}</option>
          <option value="autre">{t('subjects.other')}</option>
        </select>
      </label>

      <label className="block">
        <span className="font-sans text-sm font-medium text-colhybri-dark/80 mb-2 block">
          {t('message')}
        </span>
        <textarea
          required
          rows={5}
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
