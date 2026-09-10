import { GraduationCap, Briefcase } from 'lucide-react';
import Container from '../Container.jsx';
import SectionHeading from '../SectionHeading.jsx';
import Reveal from '../Reveal.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';

export default function Timeline() {
  const { t } = useLocale();

  return (
    <section id="deneyim" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.timeline.heading} title={t.timeline.title} />

        <ol className="relative mt-14 border-l border-line/15 pl-8 sm:pl-10">
          {t.timeline.items.map((entry, i) => {
            const Icon = entry.type === 'education' ? GraduationCap : Briefcase;
            return (
              <li key={entry.id} className="relative pb-12 last:pb-0">
                <span className="absolute -left-10 grid h-8 w-8 place-items-center rounded-full border border-line/15 bg-bg text-accent sm:-left-[3.25rem]">
                  <Icon className="h-4 w-4" />
                </span>
                <Reveal delay={i * 0.05}>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {entry.date}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">{entry.org}</h3>
                  <p className="text-sm text-ink-muted">{entry.role}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
                    {entry.points.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 text-xs text-ink-faint">{t.timeline.note}</p>
      </Container>
    </section>
  );
}
