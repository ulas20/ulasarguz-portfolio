import { Mail, Github, Linkedin } from 'lucide-react';
import Container from '../Container.jsx';
import Reveal from '../Reveal.jsx';
import Button from '../Button.jsx';
import ContactForm from './ContactForm.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';
import { SITE } from '../../config/site.js';

export default function Contact() {
  const { t } = useLocale();

  return (
    <section id="iletisim" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {t.contact.heading}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
                {t.contact.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md leading-relaxed text-ink-muted">
                {t.contact.description}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button as="a" href={`mailto:${SITE.email}`} size="lg">
                  <Mail className="h-4 w-4" />
                  {t.contact.emailCta}
                </Button>
                <Button
                  as="a"
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="secondary"
                  size="lg"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  as="a"
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="secondary"
                  size="lg"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
