"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { localeLabels, locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LangToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.lang.label}
      className={cn(
        "inline-flex items-stretch border-brutal bg-paper shadow-hard-sm dark:bg-ink",
        className,
      )}
    >
      {locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => setLocale(loc)}
            aria-pressed={active}
            className={cn(
              "px-2.5 py-2 font-mono text-xs uppercase transition-colors",
              active
                ? "bg-accent text-ink"
                : "text-ink hover:bg-ink hover:text-paper dark:text-paper dark:hover:bg-paper dark:hover:text-ink",
            )}
          >
            {localeLabels[loc]}
          </button>
        );
      })}
    </div>
  );
}
