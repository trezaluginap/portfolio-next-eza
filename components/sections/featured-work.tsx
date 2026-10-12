"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { featuredProjects } from "@/content/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { Container } from "@/components/ui/container";
import { IndexLabel } from "@/components/ui/tag";
import { BrutalButton } from "@/components/ui/button";
import { Reveal, StaggerList, StaggerItem } from "@/components/motion/reveal";

export function FeaturedWork() {
  const { t } = useLanguage();
  // With an odd count, the first card spans both columns as a hero tile.
  const hasHero = featuredProjects.length % 2 === 1;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <IndexLabel index="02">{t.sections.workIdx}</IndexLabel>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              {t.sections.workTitle}
            </h2>
            <p className="mt-4 max-w-xl text-muted">{t.sections.workLead}</p>
          </div>
          <BrutalButton href="/projects" variant="outline">
            {t.sections.viewAll}
          </BrutalButton>
        </Reveal>

        <StaggerList className="mt-12 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => {
            const isHero = hasHero && i === 0;
            return (
              <StaggerItem
                key={project.slug}
                className={isHero ? "sm:col-span-2" : ""}
              >
                <ProjectCard project={project} index={i} featured={isHero} />
              </StaggerItem>
            );
          })}
        </StaggerList>
      </Container>
    </section>
  );
}
