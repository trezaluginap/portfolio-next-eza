export type StackItem = {
  name: string;
  /** key into `brandIcons` in lib/brand-icons.ts */
  logo?: string;
  note: { en: string; id: string };
};

export type StackGroup = {
  key: string;
  label: string;
  items: StackItem[];
};

/** Grouped toolbox shown on the home page and About page. */
export const stackGroups: StackGroup[] = [
  {
    key: "mobile",
    label: "mobile",
    items: [
      {
        name: "Expo",
        logo: "expo",
        note: {
          en: "Cross-platform apps with React Native - maps, background tracking, native modules.",
          id: "Aplikasi cross-platform dengan React Native - peta, background tracking, native module.",
        },
      },
      {
        name: "React Native",
        logo: "react-native",
        note: {
          en: "Production mobile UI with navigation, state, and offline storage.",
          id: "UI mobile produksi dengan navigasi, state, dan penyimpanan offline.",
        },
      },
    ],
  },
  {
    key: "backend",
    label: "backend",
    items: [
      {
        name: "Laravel",
        logo: "laravel",
        note: {
          en: "REST APIs, auth, queues, WebSocket - boring-reliable PHP that just works.",
          id: "REST API, auth, queue, WebSocket - PHP yang boring-reliable dan bekerja.",
        },
      },
      {
        name: "Node / Express",
        logo: "node-express",
        note: {
          en: "Lightweight APIs and services that power the frontend.",
          id: "API dan service ringan yang menopang frontend.",
        },
      },
    ],
  },
  {
    key: "data",
    label: "database",
    items: [
      {
        name: "PostgreSQL",
        logo: "postgresql",
        note: {
          en: "Schema design, relations, and queries that scale.",
          id: "Desain skema, relasi, dan query yang skalabel.",
        },
      },
      {
        name: "MySQL",
        logo: "mysql",
        note: {
          en: "Reliable relational storage for web platforms and internal tools.",
          id: "Penyimpanan relasional andal untuk platform web dan tool internal.",
        },
      },
      {
        name: "SQLite",
        logo: "sqlite",
        note: {
          en: "Local, offline-first storage for mobile apps.",
          id: "Penyimpanan lokal offline-first untuk aplikasi mobile.",
        },
      },
    ],
  },
  {
    key: "realtime",
    label: "realtime",
    items: [
      {
        name: "Reverb / WebSocket",
        logo: "reverb",
        note: {
          en: "Self-hosted realtime channels for live positions and alerts.",
          id: "Channel realtime self-hosted untuk posisi live dan alert.",
        },
      },
      {
        name: "Redis",
        logo: "redis",
        note: {
          en: "Cache, queues, and pub/sub for the realtime layer.",
          id: "Cache, queue, dan pub/sub untuk layer realtime.",
        },
      },
    ],
  },
  {
    key: "frontend",
    label: "frontend",
    items: [
      {
        name: "Next.js",
        logo: "nextjs",
        note: {
          en: "App Router, SSR/SSG, and SEO-friendly React for the web.",
          id: "App Router, SSR/SSG, dan React yang SEO-friendly untuk web.",
        },
      },
      {
        name: "Tailwind CSS",
        logo: "tailwindcss",
        note: {
          en: "Utility-first styling and responsive layouts without the bloat.",
          id: "Styling utility-first dan layout responsif tanpa bloat.",
        },
      },
    ],
  },
  {
    key: "iot",
    label: "iot",
    items: [
      {
        name: "ESP32 + Firebase",
        logo: "esp32-firebase",
        note: {
          en: "Sensor-to-cloud systems where the device writes straight to a realtime database.",
          id: "Sistem sensor-ke-cloud di mana perangkat menulis langsung ke database realtime.",
        },
      },
      {
        name: "PZEM / sensors",
        logo: "arduino",
        note: {
          en: "Real power, current, and level sensing wired into a mobile dashboard.",
          id: "Pengukuran daya nyata, arus, dan level yang tersambung ke dashboard mobile.",
        },
      },
    ],
  },
  {
    key: "workflow",
    label: "workflow",
    items: [
      {
        name: "AI Automation",
        logo: "n8n",
        note: {
          en: "Agents and pipelines that remove busywork - including clipping.",
          id: "Agent dan pipeline yang menghapus pekerjaan repetitif - termasuk clipping.",
        },
      },
      {
        name: "Docker",
        logo: "docker",
        note: {
          en: "Reproducible environments across machine and VPS.",
          id: "Environment yang reproducible di laptop dan VPS.",
        },
      },
    ],
  },
];

export const exploring = [
  "AI Agents",
  "Clipping Automation",
  "Realtime Systems",
  "IoT",
  "n8n",
  "Next.js",
];

export type TimelineItem = {
  period: string;
  title: { en: string; id: string };
  org: string;
  detail: { en: string; id: string };
};

export const timeline: TimelineItem[] = [
  {
    period: "2026 - now",
    title: { en: "Independent Software Engineer", id: "Software Engineer Independen" },
    org: "Freelance & product work",
    detail: {
      en: "Building Tikum (touring app), the Smart Water Pump IoT system, travel booking systems, and AI clipping automation for clients and personal products.",
      id: "Membangun Tikum (aplikasi touring), sistem IoT Smart Water Pump, sistem booking travel, dan otomatisasi clipping AI untuk klien dan produk pribadi.",
    },
  },
  {
    period: "2025 - 2026",
    title: { en: "Mobile & Backend Developer", id: "Developer Mobile & Backend" },
    org: "Project-based",
    detail: {
      en: "Delivered Barokah Tour & Travel booking platform and the CSR proposal monitoring system end to end.",
      id: "Menyerahkan platform booking Barokah Tour & Travel dan sistem monitoring proposal CSR dari awal sampai akhir.",
    },
  },
  {
    period: "2025",
    title: { en: "Web Developer Intern", id: "Intern Web Developer" },
    org: "Statistics Indonesia (BPS) Sukabumi",
    detail: {
      en: "Designed and built the digital guest book - QR check-in, follow-up tracking, and PDF reporting.",
      id: "Merancang dan membangun buku tamu digital - check-in QR, pelacakan tindak lanjut, dan laporan PDF.",
    },
  },
];
