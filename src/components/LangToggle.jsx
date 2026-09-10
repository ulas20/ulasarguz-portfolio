import { useLocale } from '../context/LocaleContext.jsx';

export default function LangToggle({ className = '' }) {
  const { locale, locales, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.lang.label}
      className={`inline-flex items-center rounded-xl border border-line/15 p-0.5 text-xs font-medium ${className}`}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded-lg px-2.5 py-1.5 uppercase transition-colors ${
            locale === code ? 'bg-line/10 text-ink' : 'text-ink-faint hover:text-ink'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
