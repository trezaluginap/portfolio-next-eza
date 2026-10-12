import { cn } from "@/lib/utils";

type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  hot?: boolean;
};

/** Small mono pill used for tech tags. */
export function Tag({ className, hot, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border-2 px-3 py-1 font-mono text-xs tracking-wide uppercase",
        hot
          ? "border-ink bg-accent text-ink dark:border-paper"
          : "border-ink text-ink dark:border-paper dark:text-paper",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/** Numbered index label like "01 - Selected work". */
export function IndexLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs tracking-[0.2em] uppercase text-muted",
        className,
      )}
    >
      {index ? <span className="text-ink dark:text-paper">{index} - </span> : null}
      {children}
    </p>
  );
}

/** Big section heading with an optional accent underline. */
export function SectionHeading({
  title,
  lead,
  align = "left",
  className,
}: {
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {lead ? (
        <p className="max-w-2xl text-base text-muted sm:text-lg">{lead}</p>
      ) : null}
    </div>
  );
}
