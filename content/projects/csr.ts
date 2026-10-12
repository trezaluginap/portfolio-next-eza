import type { Project } from "./types";

export const csr: Project = {
  slug: "csr-project",
  name: "CSR Project",
  category: "fullstack",
  year: "2025",
  tags: ["React 19", "Vite", "Express 5", "Sequelize", "MySQL", "JWT"],
  hotTags: ["React 19", "JWT"],
  hasShots: true,
  gallery: [
    { src: "/images/projects/csr/01.png", alt: "CSR monitoring dashboard with proposal statistics" },
    { src: "/images/projects/csr/02.png", alt: "CSR proposal list with status filters" },
    { src: "/images/projects/csr/03.png", alt: "CSR routine activity schedule with proof upload" },
    { src: "/images/projects/csr/04.png", alt: "CSR report page with CSV export" },
  ],
  video: {
    mp4: "/videos/csr.mp4",
    poster: "/videos/csr-poster.jpg",
    alt: {
      en: "Walkthrough of the CSR proposal monitoring system.",
      id: "Penelusuran sistem monitoring proposal CSR.",
    },
  },
  links: {
    repo: "https://github.com/trezaluginap/CSR-Project",
  },
  tagline: {
    en: "Proposal management system: intake, PIC assignment, routine scheduling, and reporting.",
    id: "Sistem manajemen proposal: intake, penugasan PIC, penjadwalan rutin, dan pelaporan.",
  },
  role: {
    en: "Full-stack (frontend + API)",
    id: "Full-stack (frontend + API)",
  },
  type: {
    en: "Internal web app",
    id: "Aplikasi web internal",
  },
  problem: {
    en: "CSR (corporate social responsibility) proposals were tracked in spreadsheets and chat threads. Nobody could see at a glance which proposals were in progress, who owned them, or whether a scheduled handover actually happened - and there was no proof trail for routine activities.",
    id: "Proposal CSR dilacak lewat spreadsheet dan thread chat. Tidak ada yang bisa melihat sekilas proposal mana yang sedang berjalan, siapa penanggung jawabnya, atau apakah penyerahan terjadwal benar-benar terjadi - dan tidak ada jejak bukti untuk kegiatan rutin.",
  },
  why: {
    en: "The team needed one place of truth with clear statuses and accountability. Instead of a heavy ERP, I built a focused tool: proposals move through a visible status flow, each has a PIC, routine activities are scheduled and backed by uploaded proof, and everything rolls up into a dashboard and exportable reports.",
    id: "Tim butuh satu sumber kebenaran dengan status jelas dan akuntabilitas. Daripada ERP berat, saya bangun tool yang fokus: proposal bergerak lewat alur status yang terlihat, masing-masing punya PIC, kegiatan rutin dijadwalkan dan didukung bukti yang di-upload, dan semuanya terangkum di dashboard serta laporan yang bisa di-export.",
  },
  features: {
    en: [
      "JWT auth with role-based access (access token 1h + refresh token 7d, auto-refresh)",
      "Proposal intake with file attachments (jpg/png/pdf/doc/xls, max 10MB)",
      "PIC management - assign an owner to each proposal",
      "Routine activity scheduling with monthly auto-generation and proof uploads",
      "Dashboard metrics by status (In Progress / Siap Diambil / Done)",
      "Filtering, search, sorting, pagination, and CSV export for reports",
    ],
    id: [
      "Auth JWT dengan akses berbasis role (access token 1 jam + refresh token 7 hari, auto-refresh)",
      "Intake proposal dengan lampiran file (jpg/png/pdf/doc/xls, maks 10MB)",
      "Manajemen PIC - tetapkan penanggung jawab tiap proposal",
      "Penjadwalan kegiatan rutin dengan auto-generate bulanan dan upload bukti",
      "Metrik dashboard per status (In Progress / Siap Diambil / Done)",
      "Filter, pencarian, sorting, pagination, dan export CSV untuk laporan",
    ],
  },
  stack: [
    {
      tech: "React 19 + Vite",
      reason: {
        en: "Vite's dev server and build are noticeably faster than CRA, which matters for an internal tool that iterates quickly.",
        id: "Dev server dan build Vite terasa lebih cepat daripada CRA, penting untuk tool internal yang iterasinya cepat.",
      },
    },
    {
      tech: "Tailwind CSS 4 + Radix UI",
      reason: {
        en: "Utility styling keeps the UI consistent without a heavy component library, while Radix provides accessible primitives (dialogs, menus) out of the box.",
        id: "Styling utility menjaga UI konsisten tanpa library komponen berat, sementara Radix menyediakan primitif aksesibel (dialog, menu) langsung pakai.",
      },
    },
    {
      tech: "Express 5 + Sequelize",
      reason: {
        en: "The proposal/PIC/routine schema is relational and predictable; Sequelize models make the relations explicit and the API code short.",
        id: "Skema proposal/PIC/rutin bersifat relasional dan mudah diprediksi; model Sequelize membuat relasinya eksplisit dan kode API ringkas.",
      },
    },
    {
      tech: "JWT + bcryptjs",
      reason: {
        en: "Stateless auth fits an internal app with a small user base. Short-lived access tokens plus rotating refresh tokens balance security and usability.",
        id: "Auth stateless cocok untuk aplikasi internal dengan basis pengguna kecil. Access token berumur pendek plus refresh token yang dirotasi menyeimbangkan keamanan dan kemudahan.",
      },
    },
    {
      tech: "Helmet + rate-limit",
      reason: {
        en: "Basic hardening on day one: security headers, a CORS allowlist, and tighter rate limits on login/register than on general traffic.",
        id: "Hardening dasar sejak awal: security header, allowlist CORS, dan rate limit lebih ketat di login/register dibanding trafik umum.",
      },
    },
  ],
  architecture: {
    en: "A Vite React SPA talks to an Express API with Bearer tokens. Auth issues a 1-hour access token and a 7-day refresh token stored in the DB; a response interceptor silently refreshes on 403. Proposal status is an enum (In Progress -> Siap Diambil -> Done) used for filtering, dashboard stats, and UI badges. Uploads are handled by Multer and served statically.",
    id: "SPA Vite React berkomunikasi dengan API Express memakai Bearer token. Auth menerbitkan access token 1 jam dan refresh token 7 hari yang disimpan di DB; interceptor response me-refresh diam-diam saat 403. Status proposal adalah enum (In Progress -> Siap Diambil -> Done) yang dipakai untuk filter, statistik dashboard, dan badge UI. Upload ditangani Multer dan disajikan statis.",
  },
  challenges: [
    {
      title: {
        en: "Silent token refresh",
        id: "Refresh token tanpa terasa",
      },
      detail: {
        en: "A short access-token lifetime means users would get logged out mid-work. An Axios interceptor catches 403, exchanges the refresh token for a new access token, and replays the original request - invisible to the user.",
        id: "Umur access token yang pendek membuat user logout di tengah pekerjaan. Interceptor Axios menangkap 403, menukar refresh token dengan access token baru, dan mengulang request asli - tanpa terasa oleh user.",
      },
    },
    {
      title: {
        en: "Auto-generating routine schedules",
        id: "Auto-generate jadwal rutin",
      },
      detail: {
        en: "Routine activities repeat monthly. A generate endpoint creates the month's schedules (dated the 15th) and skips any month that already has one, preventing duplicates.",
        id: "Kegiatan rutin berulang tiap bulan. Endpoint generate membuat jadwal bulan tersebut (tanggal 15) dan melewati bulan yang sudah punya jadwal, mencegah duplikasi.",
      },
    },
    {
      title: {
        en: "Being honest about the guard model",
        id: "Jujur soal model guard",
      },
      detail: {
        en: "Role enforcement lives in the backend (authorizeRoles), while the frontend ProtectedRoute only checks that a user is logged in. I documented this rather than pretending the UI was the security boundary.",
        id: "Penegakan role ada di backend (authorizeRoles), sementara ProtectedRoute di frontend hanya mengecek user sudah login. Saya dokumentasikan ini alih-alih berpura-pura UI adalah batas keamanannya.",
      },
    },
  ],
};
