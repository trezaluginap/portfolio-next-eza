import type { Metadata } from "next";
import { AboutView } from "@/components/sections/about-view";

export const metadata: Metadata = {
  title: "About",
  description:
    "Treza Lugina Pamungkas - a software engineer who likes finished software, built with boring-reliable tools.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutView />;
}
