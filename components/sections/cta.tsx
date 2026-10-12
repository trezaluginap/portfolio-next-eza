"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { BrutalButton } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/content/site";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="border-t-[3px] border-ink bg-ink py-16 text-paper sm:py-24 dark:border-paper dark:bg-paper dark:text-ink">
      <Container>
        <Reveal className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.sections.contactIdx}
            </p>
            <h2 className="mt-3 text-5xl font-bold sm:text-6xl lg:text-7xl">
              {t.contact.title}
              <br />
              <span className="text-accent">{t.contact.titleAccent}</span>
            </h2>
            <p className="mt-5 max-w-lg text-paper/70 dark:text-ink/70">
              {t.contact.lead}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <BrutalButton href={`mailto:${site.email}`} variant="accent" size="lg">
              {t.contact.emailCta}
            </BrutalButton>
            <BrutalButton href="/contact" variant="outline" size="lg">
              {t.nav.contact}
            </BrutalButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
