import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MusicPlayer } from "@/components/ui/music-player";
import { site } from "@/content/site";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const jet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jet",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - Software Engineer`,
    template: `%s - ${site.name}`,
  },
  description:
    "Mobile & backend engineer. Expo apps, Laravel APIs, PostgreSQL, and AI automation that removes busywork.",
  keywords: [
    "Treza Lugina Pamungkas",
    "Software Engineer",
    "React Native",
    "Expo",
    "Laravel",
    "PostgreSQL",
    "AI automation",
    "portfolio",
  ],
  authors: [{ name: site.name, url: site.socials.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: `${site.name} - Software Engineer`,
    description:
      "Mobile & backend engineer. Expo apps, Laravel APIs, PostgreSQL, and AI automation that removes busywork.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - Software Engineer`,
    description:
      "Mobile & backend engineer. Expo apps, Laravel APIs, PostgreSQL, and AI automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${grotesk.variable} ${jet.variable} antialiased`}>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:border-brutal focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-ink focus:uppercase"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <MusicPlayer />
        </Providers>
      </body>
    </html>
  );
}
