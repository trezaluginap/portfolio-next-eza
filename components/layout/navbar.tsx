"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";
import { cn, pad } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b-[3px] border-ink transition-colors dark:border-paper",
          scrolled ? "bg-accent" : "bg-paper dark:bg-ink",
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-baseline gap-1.5 border-2 border-transparent px-3 py-2 font-mono text-xs uppercase tracking-wide transition-colors",
                      isActive(item.href)
                        ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                        : "hover:border-ink hover:bg-paper dark:hover:border-paper dark:hover:bg-ink",
                    )}
                  >
                    <span aria-hidden className="text-[0.6rem] opacity-60">
                      {pad(i + 1)}
                    </span>
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <LangToggle className="hidden sm:inline-flex" />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="brutal-lift inline-flex items-center border-brutal bg-paper px-3 py-2 font-mono text-xs uppercase shadow-hard-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden dark:bg-ink"
            >
              {open ? t.nav.close : t.nav.menu}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-ink text-paper md:hidden"
          >
            <div className="mt-[68px] flex flex-1 flex-col justify-between p-6">
              <nav aria-label="Mobile">
                <ul className="flex flex-col">
                  {navItems.map((item, i) => (
                    <li key={item.href} className="border-b-2 border-paper/20">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-baseline gap-4 py-5 text-3xl font-bold uppercase",
                          isActive(item.href) && "text-accent",
                        )}
                      >
                        <span
                          aria-hidden
                          className="font-mono text-xs text-accent"
                        >
                          {pad(i + 1)}
                        </span>
                        {t.nav[item.key]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col gap-4 pt-8">
                <LangToggle className="w-max dark:bg-ink" />
                <p className="font-mono text-xs uppercase tracking-widest text-paper/50">
                  {site.name} - Software Engineer
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
