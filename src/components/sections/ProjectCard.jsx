import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Reveal from '../Reveal.jsx';

export default function ProjectCard({ project, index, labels, onOpen }) {
  const flip = index % 2 === 1;

  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div
          className={`group relative overflow-hidden rounded-3xl border border-line/10 ${
            flip ? 'lg:order-2' : ''
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={1600}
            height={1000}
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-violet/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className={flip ? 'lg:order-1' : ''}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-lg leading-relaxed text-ink-muted">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
            >
              {labels.detail}
              <ArrowRight className="h-4 w-4" />
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-ink"
              >
                <Github className="h-4 w-4" />
                {labels.code}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-ink"
              >
                <ExternalLink className="h-4 w-4" />
                {labels.live}
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
