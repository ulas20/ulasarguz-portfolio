import { Smartphone, Server, Brain, Wrench, Database } from 'lucide-react';
import Container from '../Container.jsx';
import SectionHeading from '../SectionHeading.jsx';
import Reveal from '../Reveal.jsx';
import Marquee from '../Marquee.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';

const ICONS = {
  smartphone: Smartphone,
  server: Server,
  brain: Brain,
  wrench: Wrench,
  database: Database,
};

export default function Skills() {
  const { t } = useLocale();
  const allTech = t.skills.categories.flatMap((category) => category.items);

  return (
    <section id="yetenekler" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.skills.heading} title={t.skills.title} note={t.skills.note} />

        <div className="mt-12 divide-y divide-line/10 border-y border-line/10">
          {t.skills.categories.map((category, i) => {
            const Icon = ICONS[category.icon] ?? Smartphone;
            return (
              <Reveal key={category.id} delay={i * 0.04}>
                <div className="grid gap-4 py-6 sm:grid-cols-[200px_1fr] sm:items-center">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-accent" />
                    <span className="font-display text-lg font-medium text-ink">
                      {category.label}
                    </span>
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
      </Container>

      <div className="mt-14">
        <Marquee items={allTech} />
      </div>
    </section>
  );
}
