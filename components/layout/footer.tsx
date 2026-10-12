"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {site.role.en}
            </p>
            <p className="mt-3 max-w-sm text-2xl font-bold">
              {t.contact.title} {t.contact.titleAccent}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block font-mono text-sm underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-widest opacity-50">
              {t.nav.menu}
            </p>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-sm uppercase hover:text-accent"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-50">
              {t.contact.or}
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm uppercase hover:text-accent"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm uppercase hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm uppercase hover:text-accent"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t-2 border-paper/20 pt-6 font-mono text-xs uppercase tracking-wide opacity-70 sm:flex-row sm:items-center sm:justify-between dark:border-ink/20">
          <span>
            © {year} {site.name}. {t.footer.rights}
          </span>
          <span>{t.footer.builtWith}</span>
          <a href="#main" className="hover:text-accent">
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
