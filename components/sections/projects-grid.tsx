"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { projects, categories } from "@/content/projects";
import type { ProjectCategory } from "@/content/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const { t } = useLanguage();
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <div>
      {/* Filter bar */}
      <div
        role="tablist"
        aria-label={t.projects.idx}
        className="flex flex-wrap gap-2"
      >
        {categories.map((cat) => {
          const isActive = cat.key === active;
          const label = t.projects[cat.labelKey as keyof typeof t.projects];
          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat.key)}
              className={cn(
                "brutal-lift border-brutal px-4 py-2 font-mono text-xs uppercase tracking-wide shadow-hard-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
                isActive
                  ? "bg-ink text-paper dark:bg-paper dark:text-ink"
                  : "bg-paper text-ink dark:bg-ink dark:text-paper",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
