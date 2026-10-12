import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BrutalButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        Error 404
      </p>
      <h1 className="mt-4 text-[clamp(4rem,16vw,10rem)] leading-none font-bold">
        Lost<span className="text-accent-2 dark:text-accent">.</span>
      </h1>      <p className="mt-4 max-w-md text-lg text-muted">
        This page took a wrong turn on the ride. Let&apos;s get you back on route.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <BrutalButton href="/" variant="solid" size="lg">
          Back home
        </BrutalButton>
        <BrutalButton href="/projects" variant="outline" size="lg">
          See projects
        </BrutalButton>
      </div>
      <p className="mt-8 font-mono text-xs uppercase tracking-wide text-muted">
        <Link href="/contact" className="underline underline-offset-4">
          or get in touch
        </Link>
      </p>
    </Container>
  );
}
