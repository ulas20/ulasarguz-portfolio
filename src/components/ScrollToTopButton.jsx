import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLocale } from '../context/LocaleContext.jsx';

const SHOW_AFTER_PX = 480;

// Sağ altta sabit duran "yukarı çık" düğmesi — sayfa biraz aşağı kayınca
// belirir, scroll'la birlikte hep orada kalır, tıklayınca en tepeye yumuşakça
// döner. prefers-reduced-motion'da animasyonsuz görünür/kaybolur ve anında atlar.
export default function ScrollToTopButton() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label={t.footer.backToTop}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-line/15 bg-surface/90 text-ink-muted shadow-lg backdrop-blur-sm transition-colors hover:text-ink focus-visible:text-ink active:scale-95 sm:bottom-8 sm:right-8"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
