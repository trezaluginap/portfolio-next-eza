import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
  tone?: "surface" | "ink" | "accent";
};

const tones = {
  surface: "bg-paper text-ink dark:bg-ink dark:text-paper",
  ink: "bg-ink text-paper dark:bg-paper dark:text-ink",
  accent: "bg-accent text-ink",
};

export function BrutalCard({
  className,
  interactive,
  tone = "surface",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "border-brutal shadow-hard",
        tones[tone],
        interactive &&
          "brutal-lift hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-hard-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
