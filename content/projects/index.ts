import type { Project, ProjectCategory } from "./types";
import { tikum } from "./tikum";
import { barokah } from "./barokah";
import { kasirWarung } from "./kasir-warung";
import { smartWaterPump } from "./smart-water-pump";
import { csr } from "./csr";
import { bukuTamu } from "./buku-tamu";

export type {
  Project,
  ProjectCategory,
  GalleryAspect,
  ProjectVideo,
  StackReason,
  Challenge,
} from "./types";

/** Order matters: this is the display order everywhere. */
export const projects: Project[] = [
  tikum,
  barokah,
  kasirWarung,
  smartWaterPump,
  csr,
  bukuTamu,
];

/**
 * Home page only shows projects that have real screenshots. Projects still
 * waiting on assets stay visible on /projects but are kept off the home grid.
 */
export const featuredProjects = projects.filter((p) => p.hasShots);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Next project in the list, wrapping around. */
export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

export const categories: { key: ProjectCategory | "all"; labelKey: string }[] = [
  { key: "all", labelKey: "filterAll" },
  { key: "mobile", labelKey: "filterMobile" },
  { key: "web", labelKey: "filterWeb" },
  { key: "fullstack", labelKey: "filterFullstack" },
];
