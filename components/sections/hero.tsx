"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { site } from "@/content/site";
import { BrutalButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b-[3px] border-ink dark:border-paper">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 border-brutal bg-paper px-3 py-1.5 font-mono text-xs uppercase tracking-wide shadow-hard-sm dark:bg-ink">
              <span
                aria-hidden
                className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-accent-2"
              />
              {t.hero.available}
            </p>

            <h1 className="mt-6 text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] font-bold tracking-tight">
              Treza Lugina
              <br />
              Pamungkas
              <span className="text-accent-2 dark:text-accent">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted">{t.hero.sub}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <BrutalButton href="/projects" variant="solid" size="lg">
                {t.hero.viewWork}
              </BrutalButton>
              <BrutalButton href="/contact" variant="outline" size="lg">
                {t.hero.getInTouch}
              </BrutalButton>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wide text-muted">
              <div className="flex items-center gap-2">
                <dt>{t.hero.basedIn}</dt>
                <dd className="text-ink dark:text-paper">
                  {site.location.en}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt>{t.hero.focus}</dt>
                <dd className="text-ink dark:text-paper">{site.focus}</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 border-brutal-thick border-ink bg-accent dark:border-paper"
            />
            <div className="relative border-brutal-thick border-ink bg-paper dark:border-paper dark:bg-ink">
              <Image
                src="/images/treza-opt.jpg"
                alt="Treza Lugina Pamungkas"
                width={800}
                height={1000}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-muted">
              Software Engineer
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
