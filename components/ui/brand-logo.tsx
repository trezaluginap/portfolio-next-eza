import { createElement } from "react";
import { getBrandIcon } from "@/lib/brand-icons";
import { cn } from "@/lib/utils";

/**
 * Monochrome brand mark inside a brutalist frame.
 *
 * The icon is decorative: the tool name is always rendered as text next to it,
 * so screen readers get the name once, not twice.
 */
export function BrandLogo({
  logo,
  name,
  size = "md",
  className,
}: {
  logo?: string;
  name: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const icon = getBrandIcon(logo);

  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const iconSize = size === "sm" ? 16 : 20;

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center border-2 border-ink bg-paper text-ink shadow-hard-sm dark:border-paper dark:bg-ink dark:text-paper",
        box,
        className,
      )}
    >
      {icon ? (
        createElement(icon, { "aria-hidden": true, size: iconSize })
      ) : (
        <span aria-hidden className="font-mono text-xs font-bold uppercase">
          {name.charAt(0)}
        </span>
      )}
    </span>
  );
}
