"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { stackGroups } from "@/content/stack";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/ui/brand-logo";
import { IndexLabel } from "@/components/ui/tag";
import { Reveal, StaggerList, StaggerItem } from "@/components/motion/reveal";
import { pick } from "@/lib/i18n";

export function StackGrid() {
  const { locale, t } = useLanguage();

  return (
    <section className="border-y-[3px] border-ink bg-accent py-16 text-ink sm:py-24 dark:border-paper">
      <Container>
        <Reveal>
          <IndexLabel index="03" className="text-ink/60">
            toolbox
          </IndexLabel>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
            {t.sections.stackTitle}
          </h2>
          <p className="mt-4 max-w-xl text-ink/70">{t.sections.stackLead}</p>
        </Reveal>

        <StaggerList className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <StaggerItem key={group.key}>
              <div className="brutal-lift h-full border-brutal border-ink bg-paper p-5 shadow-hard hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-hard-lg">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
                  {group.label}
                </p>
                <ul className="mt-4 space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <BrandLogo logo={item.logo} name={item.name} />
                      <div>
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="mt-1 text-sm text-muted">
                          {pick(locale, item.note)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </section>
  );
}
