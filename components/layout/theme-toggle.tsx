"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/**
 * Theme toggle. The icon is switched purely with CSS (`dark:` variants) so
 * there is no hydration mismatch and no mount-state effect needed.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "brutal-lift inline-flex h-10 w-10 items-center justify-center border-brutal bg-paper text-ink shadow-hard-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:bg-ink dark:text-paper",
        className,
      )}
    >
      <span aria-hidden className="text-base leading-none dark:hidden">
        ☀
      </span>
      <span aria-hidden className="hidden text-base leading-none dark:inline">
        ☾
      </span>
    </button>
  );
}
