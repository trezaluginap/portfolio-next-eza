"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { BackButton } from "@/components/ui/back-button";
import { IndexLabel } from "@/components/ui/tag";
import { BrutalButton } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/content/site";

const socialRows = [
  { key: "github", labelKey: "github", href: site.socials.github, handle: "trezaluginap" },
  { key: "linkedin", labelKey: "linkedin", href: site.socials.linkedin, handle: "Treza Pamungkas" },
  { key: "instagram", labelKey: "instagram", href: site.socials.instagram, handle: "trezapmngks_" },
] as const;

export function ContactView() {
  const { t } = useLanguage();

  return (
    <Container className="py-14 sm:py-20">
      <BackButton className="mb-8" />
      <IndexLabel index="01">{t.sections.contactIdx}</IndexLabel>

      <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] font-bold">
            {t.contact.title}
            <br />
            <span className="text-accent-2 dark:text-accent">
              {t.contact.titleAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">{t.contact.lead}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <BrutalButton href={`mailto:${site.email}`} variant="solid" size="lg">
              {t.contact.emailCta}
            </BrutalButton>
            <BrutalButton
              href={site.socials.linkedin}
              variant="outline"
              size="lg"
              external
            >
              LinkedIn
            </BrutalButton>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 border-brutal bg-accent px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink shadow-hard-sm">
            <span
              aria-hidden
              className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-accent-2"
            />
            {t.contact.availability}
          </p>
        </div>

        <Reveal delay={0.1}>
          <div className="border-brutal bg-paper shadow-hard dark:bg-ink">
            <div className="border-b-[3px] border-ink px-5 py-4 dark:border-paper">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {t.contact.or}
              </p>
            </div>
            <ul>
              <li className="border-b-2 border-ink/15 dark:border-paper/15">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-accent hover:text-ink"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {t.contact.email}
                  </span>
                  <span className="text-sm font-medium">{site.email}</span>
                </a>
              </li>
              {socialRows.map((row) => (
                <li
                  key={row.key}
                  className="border-b-2 border-ink/15 last:border-b-0 dark:border-paper/15"
                >
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-accent hover:text-ink"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      {t.contact[row.labelKey]}
                    </span>
                    <span className="text-sm font-medium">{row.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
