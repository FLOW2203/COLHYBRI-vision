'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { supabase, SUPABASE_CONFIGURED, openMailtoFallback } from '@/lib/supabase';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function CityContactForm() {
  const t = useTranslations('forms.city');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    fonction: '',
    commune: '',
    code_postal: '',
    email: '',
    telephone: '',
    message: '',
  });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const payload = {
      ...form,
      statut: 'nouveau',
    };

    if (SUPABASE_CONFIGURED && supabase) {
      const { error } = await supabase.from('contact_collectivites').insert(payload);
      if (!error) {
        setStatus('success');
        return;
      }
      // fall through to mailto fallback if insert fails (e.g. table missing)
      // Log to dev console so Florent can diagnose once table is created.
      console.warn('[CityContactForm] Supabase insert failed, using mailto fallback:', error.message);
    }

    // Fallback: open pre-filled email
    const subject = `Demo COLHYBRI - ${form.commune || 'commune'}`;
    const body = [
      `Prenom: ${form.prenom}`,
      `Nom: ${form.nom}`,
      `Fonction: ${form.fonction}`,
      `Commune: ${form.commune}`,
      `Code postal: ${form.code_postal}`,
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
        <Field label={t('firstName')}>
          <input
            required
            type="text"
            value={form.prenom}
            onChange={update('prenom')}
            className="form-input"
          />
        </Field>
        <Field label={t('lastName')}>
          <input
            required
            type="text"
            value={form.nom}
            onChange={update('nom')}
            className="form-input"
          />
        </Field>
      </div>

      <Field label={t('role')}>
        <select
          required
          value={form.fonction}
          onChange={update('fonction')}
          className="form-input"
        >
          <option value="">{t('rolePlaceholder')}</option>
          <option value="maire">{t('roles.mayor')}</option>
          <option value="adjoint">{t('roles.deputy')}</option>
          <option value="dgs">{t('roles.dgs')}</option>
          <option value="manager">{t('roles.manager')}</option>
          <option value="cci">{t('roles.cci')}</option>
          <option value="intercom">{t('roles.intercom')}</option>
          <option value="autre">{t('roles.other')}</option>
        </select>
      </Field>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <Field label={t('city')}>
            <input
              required
              type="text"
              value={form.commune}
              onChange={update('commune')}
              className="form-input"
            />
          </Field>
        </div>
        <Field label={t('postcode')}>
          <input
            required
            type="text"
            maxLength={5}
            pattern="[0-9]{5}"
            value={form.code_postal}
            onChange={update('code_postal')}
            className="form-input"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={t('email')}>
          <input
            required
            type="email"
            value={form.email}
            onChange={update('email')}
            className="form-input"
          />
        </Field>
        <Field label={t('phone')}>
          <input
            type="tel"
            value={form.telephone}
            onChange={update('telephone')}
            className="form-input"
          />
        </Field>
      </div>

      <Field label={t('message')}>
        <textarea
          rows={4}
          maxLength={500}
          value={form.message}
          onChange={update('message')}
          className="form-input resize-none"
        />
      </Field>

      {status === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-800">
          {errorMessage || t('errorBody')}
        </div>
      )}

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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-sans text-sm font-medium text-colhybri-dark/80 mb-2 block">{label}</span>
      {children}
    </label>
  );
}
