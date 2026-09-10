import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import Container from './Container.jsx';
import Button from './Button.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import LangToggle from './LangToggle.jsx';
import MobileMenu from './MobileMenu.jsx';
import { useScrolled } from '../hooks/useScrolled.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { useLocale } from '../context/LocaleContext.jsx';
import { scrollToId } from '../lib/scroll.js';
import { SITE } from '../config/site.js';

export default function Navbar() {
  const { t } = useLocale();
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  const ids = t.nav.items.map((item) => item.id);
  const active = useActiveSection(['hero', ...ids]);

  const handleNav = (event, id) => {
    event.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line/10 bg-bg/70 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, 'hero')}
          aria-label="Ulaş Argüz"
          className="group inline-flex items-center"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-line/15 font-display text-sm font-bold tracking-tight text-ink transition-colors group-hover:border-accent/50">
            UA
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label={t.nav.label}>
          {t.nav.items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNav(e, item.id)}
              aria-current={active === item.id ? 'true' : undefined}
              className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                active === item.id ? 'text-ink' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle className="hidden sm:inline-flex" />
          <ThemeToggle />
          <Button
            as="a"
            href={SITE.cvPath}
            download
            variant="secondary"
            className="hidden sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            {t.nav.cv}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line/15 text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} onNavigate={handleNav} />
    </header>
  );
}
