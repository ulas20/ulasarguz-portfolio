import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLocale } from '../../context/LocaleContext.jsx';
import { FORMSPREE_ENDPOINT } from '../../config/site.js';

const fieldClass =
  'w-full rounded-xl border border-line/15 bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus-visible:border-accent/60';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const { t } = useLocale();
  const f = t.contact.form;
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | not-configured
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const next = {};
    if (!data.name.trim()) next.name = f.required;
    if (!data.email.trim()) next.email = f.required;
    else if (!EMAIL_RE.test(data.email)) next.email = f.invalidEmail;
    if (!data.message.trim()) next.message = f.required;
    return next;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!FORMSPREE_ENDPOINT) {
      setStatus('not-configured');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      action={FORMSPREE_ENDPOINT || undefined}
      method="POST"
      noValidate
      className="rounded-2xl border border-line/10 bg-line/[0.03] p-6 sm:p-8"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="cf-name"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-faint"
          >
            {f.name}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
          />
          {errors.name && (
            <p id="cf-name-error" className="mt-1 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="cf-email"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-faint"
          >
            {f.email}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
          />
          {errors.email && (
            <p id="cf-email-error" className="mt-1 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="cf-message"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-faint"
          >
            {f.message}
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            className={`${fieldClass} resize-y`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'cf-message-error' : undefined}
          />
          {errors.message && (
            <p id="cf-message-error" className="mt-1 text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-white transition hover:brightness-110 active:scale-[0.98] disabled:opacity-60 motion-reduce:transition-none motion-reduce:active:scale-100"
      >
        <Send className="h-4 w-4" />
        {status === 'sending' ? f.sending : f.submit}
      </button>

      <div aria-live="polite" className="mt-3 min-h-[1.25rem] text-xs">
        {status === 'success' && <p className="text-teal">{f.success}</p>}
        {status === 'error' && <p className="text-red-400">{f.error}</p>}
        {status === 'not-configured' && <p className="text-ink-faint">{f.notConfigured}</p>}
      </div>
    </form>
  );
}
