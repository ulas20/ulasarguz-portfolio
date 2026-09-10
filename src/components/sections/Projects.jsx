import { useState } from 'react';
import Container from '../Container.jsx';
import SectionHeading from '../SectionHeading.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectDialog from './ProjectDialog.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';

export default function Projects() {
  const { t } = useLocale();
  const [openSlug, setOpenSlug] = useState(null);
  const openProject = t.projects.items.find((p) => p.slug === openSlug) ?? null;

  return (
    <section id="projeler" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.projects.heading} title={t.projects.title} />

        <div className="mt-16 space-y-20 sm:space-y-28">
          {t.projects.items.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              labels={t.projects}
              onOpen={() => setOpenSlug(project.slug)}
            />
          ))}
        </div>
      </Container>

      <ProjectDialog
        project={openProject}
        labels={t.projects}
        onClose={() => setOpenSlug(null)}
      />
    </section>
  );
}
