import type { Metadata } from "next";
import { ContactView } from "@/components/sections/contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Treza Lugina Pamungkas - open to freelance and full-time work in mobile, backend, and AI automation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactView />;
}
