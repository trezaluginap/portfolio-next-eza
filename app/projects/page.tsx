import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { IndexLabel } from "@/components/ui/tag";
import { BackButton } from "@/components/ui/back-button";
import { ProjectsGrid } from "@/components/sections/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of mobile apps, web platforms, and full-stack systems - the problem, the why, and the stack reasoning.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <BackButton className="mb-8" />
      <IndexLabel index="01">Projects</IndexLabel>
      <h1 className="mt-3 max-w-3xl text-5xl font-bold sm:text-6xl">
        Selected work.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        Case studies of things I designed, built, and shipped - with the problem,
        the why, and the stack reasoning.
      </p>

      <div className="mt-12">
        <ProjectsGrid />
      </div>
    </Container>
  );
}
