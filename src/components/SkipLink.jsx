import { useLocale } from '../context/LocaleContext.jsx';

export default function SkipLink() {
  const { t } = useLocale();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
    >
      {t.skipLink}
    </a>
  );
}
