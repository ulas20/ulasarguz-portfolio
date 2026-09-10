import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ProjectDialog({ project, labels, onClose }) {
  const reduce = useReducedMotion();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const open = Boolean(project);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll(FOCUSABLE);
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line/10 bg-surface p-6 sm:rounded-3xl sm:p-8"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4">
              <h3
                id="project-dialog-title"
                className="font-display text-2xl font-semibold tracking-tight text-ink"
              >
                {project.title}
              </h3>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label={labels.close}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line/15 text-ink-muted transition-colors hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="mt-5 aspect-[16/10] w-full rounded-2xl border border-line/10 object-cover"
            />

            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-muted">
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line/15 px-4 py-2 text-sm text-ink transition-colors hover:border-line/30"
                >
                  <Github className="h-4 w-4" />
                  {labels.code}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line/15 px-4 py-2 text-sm text-ink transition-colors hover:border-line/30"
                >
                  <ExternalLink className="h-4 w-4" />
                  {labels.live}
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
