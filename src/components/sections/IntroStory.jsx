import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail, Smartphone, Server, Brain, Wrench, Database } from 'lucide-react';
import Container from '../Container.jsx';
import Button from '../Button.jsx';
import SectionHeading from '../SectionHeading.jsx';
import Reveal from '../Reveal.jsx';
import Marquee from '../Marquee.jsx';
import StreetLamp from './StreetLamp.jsx';
import HeroBackgroundVideo from '../HeroBackgroundVideo.jsx';
import HeroAvatar from './HeroAvatar.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';
import { scrollToId } from '../../lib/scroll.js';
import { EASE } from '../../lib/motion.js';

const ICONS = { smartphone: Smartphone, server: Server, brain: Brain, wrench: Wrench, database: Database };
const ICON_COLOR = { ios: 'text-accent', backend: 'text-teal', ai: 'text-violet', tools: 'text-lamp', db: 'text-accent' };

// Hero + Hakkımda + Yetenekler'i TEK akışta birleştirir: sağdaki video+karakter
// sahnesi bu üç bölüm boyunca ekranda sabit kalır (lg:sticky), soldaki metin
// içeriği normal akışta kayar — "sayfa değişmiş gibi ama aynı sahne, sadece
// yazılar değişiyor" hissi. Projeler/Deneyim/İletişim bu akıştan sonra kendi
// tam genişlik tasarımlarıyla devam eder (zengin kart/form düzenleri dar bir
// sütuna sığmayacağı için kasıtlı olarak bu akışın dışında tutuldu).
export default function IntroStory({ start = true }) {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const allTech = t.skills.categories.flatMap((category) => category.items);

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
    <div className="relative">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.9fr] lg:gap-14">
          {/* Sol — kayan içerik: Hero metni → Hakkımda → Yetenekler */}
          <div className="order-2 lg:order-1">
            <motion.div
              id="hero"
              variants={parent}
              initial="hidden"
              animate={start ? 'visible' : 'hidden'}
              className="scroll-mt-24 pb-20 pt-10 sm:pb-28 lg:pt-40"
            >
              <motion.p variants={item} className="mb-4 font-mono text-sm text-accent">
                {t.hero.role}
              </motion.p>
              <motion.h1
                variants={item}
                className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
              >
                {t.hero.greeting}
              </motion.h1>
              <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                {t.hero.description}
              </motion.p>
              <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
                <Button as="a" href="#projeler" onClick={goTo('projeler')} size="lg">
                  {t.hero.primaryCta}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button as="a" href="#iletisim" onClick={goTo('iletisim')} variant="secondary" size="lg">
                  <Mail className="h-4 w-4" />
                  {t.hero.secondaryCta}
                </Button>
              </motion.div>
            </motion.div>

            <div id="hakkimda" className="scroll-mt-24 py-20 sm:py-28">
              <SectionHeading eyebrow={t.about.heading} title={t.about.title} />
              <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-ink-muted sm:text-base">
                {t.about.paragraphs.map((paragraph, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.15}>
                <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/[0.06]">
                  {t.about.facts.map((fact) => (
                    <div key={fact.label} className="bg-bg p-5">
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.2}>
                <StreetLamp />
              </Reveal>
            </div>

            <div id="yetenekler" className="scroll-mt-24 py-20 sm:py-28">
              <SectionHeading eyebrow={t.skills.heading} title={t.skills.title} note={t.skills.note} />
              <div className="mt-10 divide-y divide-line/10 border-y border-line/10">
                {t.skills.categories.map((category, i) => {
                  const Icon = ICONS[category.icon] ?? Smartphone;
                  return (
                    <Reveal key={category.id} delay={i * 0.04}>
                      <div className="grid gap-4 py-6 sm:grid-cols-[170px_1fr] sm:items-center">
                        <div className="flex items-center gap-3">
                          <Icon className={`h-5 w-5 ${ICON_COLOR[category.id] ?? 'text-accent'}`} />
                          <span className="font-display text-lg font-medium text-ink">{category.label}</span>
                        </div>
                        <ul className="flex flex-wrap gap-2">
                          {category.items.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full border border-line/15 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-ink-muted"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sağ — sabit sahne: video kartı + karakter, üç bölüm boyunca yerinde kalır */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="relative aspect-[1280/536] w-full overflow-hidden rounded-[28px] border border-line/10">
                <HeroBackgroundVideo opacityClass="opacity-80" showScrim={false} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              </div>
              <HeroAvatar start={start} />
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-2 sm:mt-4">
        <Marquee items={allTech} />
      </div>
    </div>
  );
}
