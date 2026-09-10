import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, LOCALES, getDictionary } from '../data/index.js';

const LocaleContext = createContext(null);
const STORAGE_KEY = 'locale';

function getInitialLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LOCALES.includes(stored)) return stored;
  } catch {
    /* yoksay */
  }
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* yoksay */
    }
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      locales: LOCALES,
      setLocale: (next) => {
        if (LOCALES.includes(next)) setLocaleState(next);
      },
      toggleLocale: () => setLocaleState((prev) => (prev === 'tr' ? 'en' : 'tr')),
      // t = o anki dilin tüm metinlerini içeren nesne
      t: getDictionary(locale),
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale, LocaleProvider içinde kullanılmalı');
  return ctx;
}
