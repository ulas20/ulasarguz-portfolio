import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import Container from '../Container.jsx';
import Button from '../Button.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';
import { scrollToId } from '../../lib/scroll.js';
import { EASE } from '../../lib/motion.js';

const codeSnippet = `let focus = Focus(
  ios:  ["Swift", "SwiftUI", "UIKit"],
  data: ["Python", "ML", "FastAPI"],
  goal: "build → measure → improve"
)`;

export default function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const parent = reduce
    ? {}
    : { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } };
  const item = reduce
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      };

  const goTo = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <section id="hero" className="relative scroll-mt-24 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <Container>
        <motion.div
          variants={parent}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        >
          <div>
            <motion.p variants={item} className="mb-4 font-mono text-sm text-accent">
              {t.hero.role}
            </motion.p>

            <motion.h1
              variants={item}
              className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            >
              {t.hero.greeting}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
            >
              {t.hero.description}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="#projeler" onClick={goTo('projeler')} size="lg">
                {t.hero.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                as="a"
                href="#iletisim"
                onClick={goTo('iletisim')}
                variant="secondary"
                size="lg"
              >
                <Mail className="h-4 w-4" />
                {t.hero.secondaryCta}
              </Button>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-accent/15 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-line/10 bg-surface/70 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-line/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-line/20" />
                <span className="h-3 w-3 rounded-full bg-line/20" />
                <span className="h-3 w-3 rounded-full bg-line/20" />
                <span className="ml-2 font-mono text-xs text-ink-faint">{t.hero.codeCaption}</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-ink-muted">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
