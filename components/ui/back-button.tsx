"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

/**
 * Goes back to wherever the visitor came from (so a filtered project grid or a
 * scrolled position is restored), falling back to `fallbackHref` when there is
 * no in-app history - e.g. the page was opened directly or from a shared link.
 *
 * The history length is read inside the click handler rather than in an effect,
 * so there is no state to sync and no cascading render.
 */
export function BackButton({
  fallbackHref = "/",
  label,
  className,
}: {
  fallbackHref?: string;
  label?: string;
  className?: string;
}) {
  const router = useRouter();
  const { t } = useLanguage();

  const onClick = useCallback(() => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }, [fallbackHref, router]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "brutal-lift inline-flex items-center gap-2 border-brutal bg-paper px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink shadow-hard-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-accent hover:shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:bg-ink dark:text-paper",
        className,
      )}
    >
      <span aria-hidden>&larr;</span>
      {label ?? t.common.back}
    </button>
  );
}
