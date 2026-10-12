"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { pick } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Tag } from "@/components/ui/tag";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  index,
  featured,
  className,
}: {
  project: Project;
  index: number;
  featured?: boolean;
  className?: string;
}) {
  const { locale, t } = useLanguage();
  const cover = project.gallery[0];
  // Phone screenshots are portrait: show them contained so nothing is cropped.
  const isPortrait = project.galleryAspect === "portrait";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group brutal-lift relative flex flex-col border-brutal bg-paper text-ink shadow-hard hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-hard-lg dark:bg-ink dark:text-paper",
        featured && "sm:col-span-2",
        className,
      )}
    >
      {/* Shot / placeholder */}
      <div
        className={cn(
          "relative overflow-hidden border-b-[3px] border-ink dark:border-paper",
          isPortrait ? "aspect-[16/10] bg-accent" : "aspect-[16/10]",
        )}
      >
        {cover ? (
          isPortrait ? (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          )
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-accent">
            <span className="font-mono text-xs uppercase tracking-widest text-ink">
              {t.projects.screenshotSoon}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wide text-muted">
          <span>{project.year}</span>
          <span>{pick(locale, project.type)}</span>
        </div>

        <h3 className="mt-3 flex items-baseline gap-2 text-2xl font-bold sm:text-3xl">
          <span aria-hidden className="font-mono text-sm text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.name}
        </h3>

        <p className="mt-2 text-sm text-muted sm:text-base">
          {pick(locale, project.tagline)}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Tag key={tag} hot={project.hotTags?.includes(tag)}>
              {tag}
            </Tag>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide group-hover:text-accent-2 dark:group-hover:text-accent">
          {t.sections.readCase}
        </span>
      </div>
    </Link>
  );
}
