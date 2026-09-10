import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';
import Container from './Container.jsx';
import Button from './Button.jsx';
import LangToggle from './LangToggle.jsx';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll.js';
import { useLocale } from '../context/LocaleContext.jsx';
import { SITE } from '../config/site.js';

export default function MobileMenu({ open, onClose, onNavigate }) {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 border-b border-line/10 bg-bg/95 backdrop-blur-xl md:hidden"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Container className="flex flex-col gap-1 py-6">
            {t.nav.items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => onNavigate(e, item.id)}
                className="rounded-xl px-3 py-3 text-lg text-ink-muted transition-colors hover:bg-line/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <Button as="a" href={SITE.cvPath} download variant="secondary" className="flex-1">
                <Download className="h-4 w-4" />
                {t.nav.cv}
              </Button>
              <LangToggle />
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
