"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { pick } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Tag, IndexLabel } from "@/components/ui/tag";
import { BrutalButton } from "@/components/ui/button";
import { BackButton } from "@/components/ui/back-button";
import { Reveal } from "@/components/motion/reveal";
import { ProjectVideo } from "@/components/ui/project-video";
import type { Project } from "@/content/projects";
import { getNextProject } from "@/content/projects";

function MetaRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 border-b-2 border-ink/15 pb-3 dark:border-paper/15">
      <dt className="font-mono text-xs uppercase tracking-widest text-muted">
        {label}
      </dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}

function ProseSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="border-t-[3px] border-ink pt-8 dark:border-paper">
      <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
        <div>
          <IndexLabel index={index}>{title}</IndexLabel>
        </div>
        <div className="max-w-2xl text-lg leading-relaxed">{children}</div>
      </div>
    </Reveal>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const { locale, t } = useLanguage();
  const next = getNextProject(project.slug);

  return (
    <article>
      {/* Header */}
      <header className="border-b-[3px] border-ink bg-accent text-ink dark:border-paper">
        <Container className="py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <BackButton fallbackHref="/projects" className="border-ink" />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide hover:underline"
            >
              {t.projects.backToProjects}
            </Link>
          </div>

          <h1 className="mt-6 text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] font-bold">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink/80 sm:text-xl">
            {pick(locale, project.tagline)}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag
                key={tag}
                hot={project.hotTags?.includes(tag)}
                className="border-ink"
              >
                {tag}
              </Tag>
            ))}
          </div>
        </Container>
      </header>

      <Container className="py-12 sm:py-16">
        {/* Meta + links */}
        <dl className="grid gap-6 sm:grid-cols-3">
          <MetaRow label={t.projects.role} value={pick(locale, project.role)} />
          <MetaRow label={t.projects.type} value={pick(locale, project.type)} />
          <MetaRow label={t.projects.year} value={project.year} />
        </dl>

        {(project.links.repo || project.links.live) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.live ? (
              <BrutalButton href={project.links.live} variant="accent" external>
                {t.projects.live}
              </BrutalButton>
            ) : null}
            {project.links.repo ? (
              <BrutalButton href={project.links.repo} variant="solid" external>
                {t.projects.repo}
              </BrutalButton>
            ) : null}
          </div>
        )}

        {/* Gallery */}
        {project.gallery.length ? (
          <div
            className={cn(
              "mt-14 grid gap-6",
              project.galleryAspect === "portrait"
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                : "sm:grid-cols-2",
            )}
          >
            {project.gallery.map((shot) => (
              <figure
                key={shot.src}
                className="border-brutal bg-paper shadow-hard dark:bg-ink"
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden border-b-[3px] border-ink bg-accent dark:border-paper",
                    project.galleryAspect === "portrait"
                      ? "aspect-[9/19]"
                      : "aspect-[16/10]",
                  )}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes={
                      project.galleryAspect === "portrait"
                        ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        : "(max-width: 640px) 100vw, 50vw"
                    }
                    className={
                      project.galleryAspect === "portrait"
                        ? "object-contain"
                        : "object-cover"
                    }
                  />
                </div>
                <figcaption className="px-3 py-3 font-mono text-xs uppercase tracking-wide text-muted">
                  {shot.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}

        {/* Demo video */}
        {project.video ? (
          <Reveal className="mt-14">
            <ProjectVideo video={project.video} title={project.name} />
          </Reveal>
        ) : null}

        {/* Problem / Why */}
        <div className="mt-16 space-y-12">
          <ProseSection index="01" title={t.projects.problem}>
            <p>{pick(locale, project.problem)}</p>
          </ProseSection>

          <ProseSection index="02" title={t.projects.why}>
            <p>{pick(locale, project.why)}</p>
          </ProseSection>
        </div>

        {/* Features */}
        <Reveal className="mt-16 border-t-[3px] border-ink pt-8 dark:border-paper">
          <IndexLabel index="03">{t.projects.features}</IndexLabel>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {pick(locale, project.features).map((feat) => (
              <li
                key={feat}
                className="border-brutal bg-paper p-4 text-sm shadow-hard-sm dark:bg-ink"
              >
                {feat}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Stack reasoning */}
        <Reveal className="mt-16 border-t-[3px] border-ink pt-8 dark:border-paper">
          <IndexLabel index="04">{t.projects.stackWhy}</IndexLabel>
          <div className="mt-6 space-y-4">
            {project.stack.map((item) => (
              <div
                key={item.tech}
                className="grid gap-3 border-brutal bg-paper p-5 shadow-hard-sm sm:grid-cols-[220px_1fr] dark:bg-ink"
              >
                <h3 className="text-lg font-bold">{item.tech}</h3>
                <p className="text-sm text-muted">
                  {pick(locale, item.reason)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Architecture */}
        <ProseSection index="05" title={t.projects.architecture}>
          <p>{pick(locale, project.architecture)}</p>
        </ProseSection>

        {/* Challenges */}
        <Reveal className="mt-16 border-t-[3px] border-ink pt-8 dark:border-paper">
          <IndexLabel index="06">{t.projects.challenges}</IndexLabel>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {project.challenges.map((ch, i) => (
              <div
                key={ch.title.en}
                className={cn(
                  "border-brutal p-5 shadow-hard",
                  i % 2 === 0 ? "bg-paper dark:bg-ink" : "bg-accent text-ink",
                )}
              >
                <h3 className="text-lg font-bold">
                  {pick(locale, ch.title)}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    i % 2 === 0 ? "text-muted" : "text-ink/80",
                  )}
                >
                  {pick(locale, ch.detail)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Next project */}
        <Reveal className="mt-16 border-t-[3px] border-ink pt-8 dark:border-paper">
          <Link
            href={`/projects/${next.slug}`}
            className="brutal-lift flex items-center justify-between gap-4 border-brutal bg-ink p-6 text-paper shadow-hard hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-hard-lg dark:bg-paper dark:text-ink"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {t.projects.nextProject}
            </p>
            <p className="text-2xl font-bold">{next.name}</p>
          </Link>
        </Reveal>
      </Container>
    </article>
  );
}
