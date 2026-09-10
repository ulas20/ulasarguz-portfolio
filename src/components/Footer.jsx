import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import Container from './Container.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { scrollToId } from '../lib/scroll.js';
import { SITE } from '../config/site.js';

const iconLink =
  'grid h-9 w-9 place-items-center rounded-lg border border-line/15 text-ink-muted transition-colors hover:text-ink';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-ink-faint">
          © {year} · {t.footer.credit}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className={iconLink}
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className={iconLink}
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="E-posta" className={iconLink}>
            <Mail className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => scrollToId('hero')}
            aria-label={t.footer.backToTop}
            className={iconLink}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
