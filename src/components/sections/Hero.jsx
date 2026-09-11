import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import Container from '../Container.jsx';
import Button from '../Button.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';
import { scrollToId } from '../../lib/scroll.js';
import { EASE } from '../../lib/motion.js';
import HeroAvatar from './HeroAvatar.jsx';

export default function Hero({ start = true }) {
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
          animate={start ? 'visible' : 'hidden'}
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

          <div className="relative">
            <HeroAvatar start={start} />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
