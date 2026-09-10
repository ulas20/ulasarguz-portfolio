import { useEffect } from 'react';

// locked=true iken sayfa gövdesinin kaydırılmasını engeller (modal/menü için).
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}
