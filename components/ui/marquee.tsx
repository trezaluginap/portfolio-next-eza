import { cn } from "@/lib/utils";

/** Infinite scrolling text strip. Pure CSS animation. */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = (
    <span className="flex shrink-0 items-center gap-6 pr-6">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center gap-6">
          <span>{item}</span>
          <span aria-hidden className="text-accent">
            /
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      aria-hidden
      className={cn(
        "overflow-hidden border-y-[3px] border-ink bg-ink py-3 text-paper dark:border-paper dark:bg-paper dark:text-ink",
        className,
      )}
    >
      <div className="animate-marquee flex w-max font-mono text-xs tracking-[0.2em] uppercase">
        {row}
        {row}
      </div>
    </div>
  );
}
