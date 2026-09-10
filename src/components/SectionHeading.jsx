import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {note && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-ink-muted">{note}</p>
        </Reveal>
      )}
    </div>
  );
}
