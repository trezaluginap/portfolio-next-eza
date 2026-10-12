"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { BackButton } from "@/components/ui/back-button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { IndexLabel } from "@/components/ui/tag";
import { StaggerList, StaggerItem } from "@/components/motion/reveal";
import { stackGroups, exploring, timeline } from "@/content/stack";
import { site } from "@/content/site";
import { pick } from "@/lib/i18n";

export function AboutView() {
  const { locale, t } = useLanguage();

  return (
    <div>
      {/* Intro */}
      <Container className="py-14 sm:py-20">
        <BackButton className="mb-8" />
        <IndexLabel index="01">{t.about.idx}</IndexLabel>
        <h1 className="mt-3 max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-bold">
          {t.about.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl">{t.about.lead}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4 text-lg text-muted">
            {t.about.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <aside className="h-max border-brutal bg-accent p-6 text-ink shadow-hard">
            <p className="font-mono text-xs uppercase tracking-widest">
              {t.about.facts.location}
            </p>
            <ul className="mt-4 space-y-3 font-mono text-sm">
              <li>{t.about.facts.focus}</li>
              <li>{t.about.facts.open}</li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="underline decoration-2 underline-offset-4"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </Container>

      {/* Approach */}
      <section className="border-y-[3px] border-ink py-14 sm:py-20 dark:border-paper">
        <Container>
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t.about.approachTitle}
          </h2>
          <StaggerList className="mt-8 grid gap-5 sm:grid-cols-2">
            {t.about.approach.map((item) => (
              <StaggerItem key={item.k}>
                <div className="h-full border-brutal bg-paper p-5 shadow-hard dark:bg-ink">
                  <h3 className="text-xl font-bold">{item.k}</h3>
                  <p className="mt-2 text-sm text-muted">{item.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </Container>
      </section>

      {/* Stack */}
      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t.about.stackTitle}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stackGroups.map((group) => (
              <div
                key={group.key}
                className="border-brutal bg-paper p-5 shadow-hard-sm dark:bg-ink"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <BrandLogo logo={item.logo} name={item.name} size="sm" />
                      <div>
                        <span className="font-bold">{item.name}</span>
                        <span className="block text-sm text-muted">
                          {pick(locale, item.note)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {t.about.exploringTitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exploring.map((item) => (
                <span
                  key={item}
                  className="border-brutal bg-accent px-3 py-1 font-mono text-xs uppercase text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="border-t-[3px] border-ink py-14 sm:py-20 dark:border-paper">
        <Container>
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t.about.timelineTitle}
          </h2>
          <ol className="mt-8 space-y-5">
            {timeline.map((item) => (
              <li
                key={item.period}
                className="grid gap-3 border-brutal bg-paper p-5 shadow-hard-sm sm:grid-cols-[160px_1fr] dark:bg-ink"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-accent-2">
                  {item.period}
                </span>
                <div>
                  <h3 className="text-xl font-bold">
                    {pick(locale, item.title)}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted">
                    {item.org}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {pick(locale, item.detail)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </div>
  );
}
