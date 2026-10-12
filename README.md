# Treza Portfolio - Neo-Brutalism

Personal portfolio for **Treza Lugina Pamungkas**, a mobile & backend software engineer.
Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**,
in a **neo-brutalism** style: thick borders, hard shadows, electric yellow, and sharp typography.

Live case studies for: Tikum, Barokah Tour & Travel, Kasir Warung, CSR Project, and Website Buku Tamu.

---

## Features

- **Neo-brutalism design system** - tokens for colors, hard shadows, and radii in `app/globals.css`
- **Bilingual EN / ID** - cookie-backed locale store with `useSyncExternalStore` (no hydration mismatch)
- **Light / dark mode** - via `next-themes` (class strategy)
- **Project case studies** - problem -> why -> stack reasoning -> features -> architecture -> challenges
- **Lazy-loaded demo videos** - self-hosted WebM/MP4, `preload="none"`, play-on-click, pause off-screen
- **SEO ready** - per-page metadata, dynamic OG image, `sitemap.xml`, `robots.txt`, JSON-LD
- **Accessible** - skip link, visible focus rings, semantic landmarks, `prefers-reduced-motion` support
- **Fully static** - every route is prerendered at build time

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@theme` tokens, `@utility`) |
| Animation | Framer Motion |
| Theming | next-themes |
| Icons / UI | Custom brutalist components |
| Deploy | Vercel |

## Project Structure

```
app/
├── layout.tsx              # fonts, providers, nav, footer
├── page.tsx                # home
├── globals.css             # design tokens + utilities
├── projects/
│   ├── page.tsx            # all projects (filterable)
│   └── [slug]/page.tsx     # case study (static)
├── about/page.tsx
├── contact/page.tsx
├── opengraph-image.tsx     # dynamic OG image
├── sitemap.ts / robots.ts
└── not-found.tsx
components/
├── layout/                 # navbar, footer, theme-toggle, lang-toggle
├── sections/               # hero, featured-work, stack-grid, project-detail, ...
├── ui/                     # button, card, tag, marquee, project-card, container
├── motion/                 # reveal, stagger
└── providers/              # theme + language providers, locale store
content/
├── projects/               # 5 case studies (typed)
├── dictionaries/           # en.json, id.json
├── site.ts                 # identity, contacts, socials
├── nav.ts                  # navigation items
└── stack.ts                # stack groups, exploring, timeline
lib/
├── i18n.ts                 # locales, dictionary loader, pick()
└── utils.ts                # cn(), pad()
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev      # start dev server
npm run build    # production build (static export of all routes)
npm run start    # run the production build
npm run lint     # eslint
```

## Adding Your Own Images

Project galleries look for files under `public/images/projects/<slug>/`:

```
public/images/projects/
├── tikum/01.png, 02.png
├── barokah/01.png ... 04.png
├── kasir-warung/01.png, 02.png
├── csr/01.png ... 04.png
└── buku-tamu/01.png ... 04.png
```

Placeholder images are included - **replace them with real screenshots** (recommended 16:10,
e.g. 1600×1000). The profile photo lives at `public/images/treza-opt.jpg` (4:5 portrait).

Next.js optimizes these automatically (WebP/AVIF), so you can drop in large PNGs.

## Demo Videos

Videos are self-hosted under `public/videos/` and loaded lazily, so they do not affect
initial page weight:

```
public/videos/
├── barokah.mp4         # H.264 (plays everywhere)
├── barokah-poster.jpg  # shown before play
├── csr.mp4
└── csr-poster.jpg
```

The `<ProjectVideo>` component uses `preload="none"`, a poster image, play-on-click,
and pauses automatically when scrolled out of view.

### Re-encoding a video (ffmpeg)

Keep videos small: strip audio, scale to 1280 wide. H.264 MP4 is the default
target because it plays in every modern browser and compresses well for
screen recordings.

```bash
# MP4 (H.264)
ffmpeg -i input.mp4 -vf scale=1280:-2 -an -c:v libx264 -preset slow -crf 30 \
  -pix_fmt yuv420p -movflags +faststart public/videos/name.mp4

# Poster frame
ffmpeg -ss 3 -i input.mp4 -vframes 1 -vf scale=1280:-2 public/videos/name-poster.jpg
```

> Optional: a WebM (VP9) source can be added and will be preferred when present,
> but only if it is actually smaller than the MP4. For screen recordings it often
> is not, so MP4 alone is the recommended default.

Then reference it in the project file:

```ts
video: {
  mp4: "/videos/name.mp4",
  poster: "/videos/name-poster.jpg",
  alt: { en: "...", id: "..." },
},
```

> Raw source media lives in `/assets/` and is git-ignored. Only the optimized
> files in `public/videos/` and `public/images/` are committed.

## Background Music

A **manual-only** music player sits in the bottom-right corner. Nothing plays
until the visitor presses the button, since browsers block audio autoplay.

1. Put your track at `public/audio/bgm.mp3`.
2. Adjust path/volume in `content/audio.ts` if needed.

The player uses `preload="none"`, so the track is only downloaded when the
visitor presses play and never affects initial page load. See
`public/audio/README.md` for compression tips.

## Editing Content

- **Identity, email, socials** -> `content/site.ts`
- **Background music** -> `content/audio.ts` (drop the file in `public/audio/`)
- **Project case studies** -> `content/projects/*.ts` (each has `en` / `id` fields)
- **UI strings** -> `content/dictionaries/en.json` and `id.json`
- **Stack & timeline** -> `content/stack.ts`

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo on [vercel.com](https://vercel.com) - Next.js is detected automatically.
3. Update `site.url` in `content/site.ts` to your final domain.
4. Deploy. Add a custom domain in the Vercel dashboard if you have one.

Or from the CLI:

```bash
npx vercel
```

## License

Personal project. All rights reserved.
