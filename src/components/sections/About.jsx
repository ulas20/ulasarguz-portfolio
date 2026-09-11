import Container from '../Container.jsx';
import SectionHeading from '../SectionHeading.jsx';
import Reveal from '../Reveal.jsx';
import StreetLamp from './StreetLamp.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';

export default function About() {
  const { t } = useLocale();

  return (
    <section id="hakkimda" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.about.heading} title={t.about.title} />

        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_0.9fr] md:gap-16">
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {t.about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal delay={0.1}>
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/[0.06]">
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

            <Reveal delay={0.15}>
              <StreetLamp />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
