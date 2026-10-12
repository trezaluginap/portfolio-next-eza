import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "solid" | "accent" | "outline";
type Size = "md" | "lg";

const base =
  "brutal-lift inline-flex items-center justify-center gap-2 border-brutal font-mono font-medium uppercase tracking-wide " +
  "shadow-hard-sm hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-hard " +
  "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper dark:bg-paper dark:text-ink",
  accent: "bg-accent text-ink",
  outline:
    "bg-transparent text-ink dark:text-paper hover:bg-accent hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-xs sm:text-sm",
  lg: "px-7 py-4 text-sm sm:text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function BrutalButton(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "solid",
    size = "md",
    className,
    children,
    ...rest
  } = props as CommonProps & Record<string, unknown>;

  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof rest.href === "string") {
    const { href, external, ...anchorRest } = rest as ButtonAsLink;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
