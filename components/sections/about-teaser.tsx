"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { IndexLabel } from "@/components/ui/tag";
import { BrutalButton } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/content/site";

export function AboutTeaser() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <IndexLabel index="04">{t.sections.aboutTitle}</IndexLabel>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              {t.about.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <p className="text-lg">{t.about.lead}</p>
            <p className="text-muted">{t.about.body[0]}</p>

            <ul className="grid gap-3 font-mono text-xs uppercase tracking-wide sm:grid-cols-3">
              <li className="border-brutal bg-paper px-3 py-3 shadow-hard-sm dark:bg-ink">
                {t.about.facts.location}
              </li>
              <li className="border-brutal bg-paper px-3 py-3 shadow-hard-sm dark:bg-ink">
                {site.focus}
              </li>
              <li className="border-brutal bg-paper px-3 py-3 shadow-hard-sm dark:bg-ink">
                {t.about.facts.open}
              </li>
            </ul>

            <div>
              <BrutalButton href="/about" variant="solid">
                {t.sections.aboutTitle}
              </BrutalButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
