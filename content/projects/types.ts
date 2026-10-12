import type { Locale } from "@/lib/i18n";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type StackReason = {
  /** technology name */
  tech: string;
  /** why this tech - localized */
  reason: LocalizedText;
};

export type Challenge = {
  /** short title */
  title: LocalizedText;
  /** what was done about it */
  detail: LocalizedText;
};

export type ProjectVideo = {
  /** optional webm source (used only if smaller than the mp4) */
  webm?: string;
  /** mp4 (H.264) source - required fallback */
  mp4: string;
  /** poster image shown before play */
  poster: string;
  /** accessible description */
  alt: LocalizedText;
};

export type ProjectCategory = "mobile" | "web" | "fullstack";

/** Shape of the gallery frames. Mobile apps use portrait phone shots. */
export type GalleryAspect = "landscape" | "portrait";

export type Project = {
  slug: string;
  /** display name (same across locales) */
  name: string;
  /** short one-liner tagline */
  tagline: LocalizedText;
  /** category for filtering */
  category: ProjectCategory;
  /** e.g. "2026" */
  year: string;
  /** localized role, e.g. "Mobile + API design" */
  role: LocalizedText;
  /** localized project type label */
  type: LocalizedText;
  /** feature/tech tags (not localized) */
  tags: string[];
  /** which tags render as "hot" */
  hotTags?: string[];
  /** screenshot paths under /public - may be empty */
  gallery: { src: string; alt: string }[];
  /** how gallery frames are shaped (defaults to landscape) */
  galleryAspect?: GalleryAspect;
  /** optional demo video */
  video?: ProjectVideo;
  /** external links */
  links: {
    repo?: string;
    live?: string;
  };
  /** the problem this project solves */
  problem: LocalizedText;
  /** why it was built */
  why: LocalizedText;
  /** features list */
  features: LocalizedList;
  /** stack with reasoning */
  stack: StackReason[];
  /** architecture summary */
  architecture: LocalizedText;
  /** challenges & decisions */
  challenges: Challenge[];
  /**
   * True only when real screenshots exist. Projects without real shots are
   * hidden from the home page (they still appear on /projects as placeholders).
   */
  hasShots?: boolean;
};
