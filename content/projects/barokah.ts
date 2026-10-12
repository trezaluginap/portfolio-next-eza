import type { Project } from "./types";

export const barokah: Project = {
  slug: "barokah-tour-travel",
  name: "Barokah Tour & Travel",
  category: "fullstack",
  year: "2026",
  tags: ["React 19", "Express 5", "Sequelize", "MySQL", "Vercel", "Render"],
  hotTags: ["React 19", "Express 5"],
  hasShots: true,
  gallery: [
    { src: "/images/projects/barokah/01.png", alt: "Barokah Tour & Travel homepage with package search" },
    { src: "/images/projects/barokah/02.png", alt: "Barokah package catalog and booking flow" },
    { src: "/images/projects/barokah/03.png", alt: "Barokah invoice and Virtual Account payment page" },
    { src: "/images/projects/barokah/04.png", alt: "Barokah admin dashboard and revenue report" },
  ],
  video: {
    mp4: "/videos/barokah.mp4",
    poster: "/videos/barokah-poster.jpg",
    alt: {
      en: "Walkthrough of the Barokah booking flow, from catalog to QR e-ticket.",
      id: "Penelusuran alur booking Barokah, dari katalog sampai e-tiket QR.",
    },
  },
  links: {
    repo: "https://github.com/trezaluginap/Barokah-Tour-Travel",
  },
  tagline: {
    en: "End-to-end travel booking: catalog -> invoice -> Virtual Account -> QR e-ticket -> check-in.",
    id: "Booking wisata end-to-end: katalog -> invoice -> Virtual Account -> e-tiket QR -> check-in.",
  },
  role: {
    en: "Full-stack (frontend + API)",
    id: "Full-stack (frontend + API)",
  },
  type: {
    en: "Web platform",
    id: "Platform web",
  },
  problem: {
    en: "A travel agency was running bookings by hand: WhatsApp messages for orders, manual receipts, and paper tickets that staff had to cross-check at the meeting point. It doesn't scale, payments are hard to reconcile, and double check-ins slip through.",
    id: "Sebuah biro travel menangani booking secara manual: pesanan lewat WhatsApp, kwitansi manual, dan tiket kertas yang harus dicocokkan petugas di titik kumpul. Tidak skalabel, pembayaran sulit direkonsiliasi, dan check-in ganda lolos begitu saja.",
  },
  why: {
    en: "The agency needed a real booking system but had no engineering team and a tiny budget. So I built the whole flow to be self-serve and cheap to host: customers book and pay online, get a QR ticket, and staff scan it at the gate. Everything runs on free tiers so it can stay online without monthly infrastructure cost.",
    id: "Biro ini butuh sistem booking sungguhan tapi tidak punya tim engineering dan budgetnya kecil. Jadi saya bangun seluruh alurnya agar self-serve dan murah di-hosting: pelanggan booking dan bayar online, dapat tiket QR, dan petugas scan di gerbang. Semua jalan di free tier sehingga bisa tetap online tanpa biaya infrastruktur bulanan.",
  },
  features: {
    en: [
      "Package catalog per city with destination + date filtering",
      "Multi-step booking flow with participant data (1 booking = N participants)",
      "Invoice with PDF export and a deterministic Virtual Account number",
      "Customer payment claim -> admin verification -> marked as paid",
      "One QR e-ticket per participant for fast on-site check-in",
      "QR scanner for staff with manual fallback, plus dashboard, revenue reports, and guest-book data",
    ],
    id: [
      "Katalog paket per kota dengan filter destinasi + tanggal",
      "Alur booking multi-langkah dengan data peserta (1 booking = N peserta)",
      "Invoice dengan export PDF dan nomor Virtual Account yang deterministik",
      "Klaim pembayaran pelanggan -> verifikasi admin -> ditandai lunas",
      "Satu e-tiket QR per peserta untuk check-in cepat di lokasi",
      "Scanner QR untuk petugas dengan input manual, plus dashboard, laporan keuangan, dan data buku tamu",
    ],
  },
  stack: [
    {
      tech: "React 19 (CRA)",
      reason: {
        en: "A familiar, stable SPA stack the client could later hand to any React developer. CRA keeps the build simple and deploys to Vercel for free.",
        id: "Stack SPA yang familiar dan stabil, bisa diserahkan ke developer React mana pun nantinya. CRA menjaga build tetap sederhana dan gratis di-deploy ke Vercel.",
      },
    },
    {
      tech: "Express 5 + Sequelize",
      reason: {
        en: "The domain (cities -> packages -> bookings -> participants -> transactions) maps cleanly to an ORM. Express + Sequelize is lightweight and runs on Render's free tier.",
        id: "Domainnya (kota -> paket -> booking -> peserta -> transaksi) cocok dipetakan ke ORM. Express + Sequelize ringan dan jalan di free tier Render.",
      },
    },
    {
      tech: "MySQL (cloud)",
      reason: {
        en: "A free managed MySQL (Aiven/TiDB) keeps hosting cost at zero while still giving a real relational store with SSL.",
        id: "MySQL terkelola gratis (Aiven/TiDB) menjaga biaya hosting nol sekaligus memberi database relasional nyata dengan SSL.",
      },
    },
    {
      tech: "qrcode.react + html5-qrcode",
      reason: {
        en: "QR generation for tickets and in-browser scanning for staff - no extra hardware or native app required.",
        id: "Generasi QR untuk tiket dan scanning di browser untuk petugas - tanpa hardware tambahan atau aplikasi native.",
      },
    },
  ],
  architecture: {
    en: "A React SPA on Vercel talks to an Express API on Render over REST, backed by a managed MySQL database. The booking lifecycle is a state machine: menunggu_pembayaran -> menunggu_verifikasi -> lunas -> selesai. Each participant carries a ticket_status (valid -> used) and a check-in timestamp. The Virtual Account number is derived deterministically from the booking code so it is consistent across every page.",
    id: "SPA React di Vercel berkomunikasi dengan API Express di Render lewat REST, ditopang database MySQL terkelola. Siklus booking adalah state machine: menunggu_pembayaran -> menunggu_verifikasi -> lunas -> selesai. Setiap peserta membawa ticket_status (valid -> used) dan timestamp check-in. Nomor Virtual Account diturunkan secara deterministik dari booking code sehingga konsisten di semua halaman.",
  },
  challenges: [
    {
      title: {
        en: "A Virtual Account without a payment gateway",
        id: "Virtual Account tanpa payment gateway",
      },
      detail: {
        en: "Integrating a real payment gateway was out of budget. I generate a deterministic VA number from the booking code so it looks and behaves like a real one for demos, and the architecture leaves room to swap in a real gateway later.",
        id: "Integrasi payment gateway sungguhan di luar budget. Saya generate nomor VA deterministik dari booking code sehingga tampil dan berperilaku seperti asli untuk demo, dan arsitekturnya menyisakan ruang untuk ganti ke gateway sungguhan nanti.",
      },
    },
    {
      title: {
        en: "One QR per passenger, not per booking",
        id: "Satu QR per penumpang, bukan per booking",
      },
      detail: {
        en: "A group booking can have many passengers. The QR payload is { participant_id, booking_id }, so scanning marks exactly one person as used - double check-ins are rejected with 409.",
        id: "Satu booking grup bisa punya banyak penumpang. Payload QR-nya { participant_id, booking_id }, jadi scan menandai tepat satu orang sebagai used - check-in ganda ditolak dengan 409.",
      },
    },
    {
      title: {
        en: "Deploying cheaply on two platforms",
        id: "Deploy murah di dua platform",
      },
      detail: {
        en: "Frontend on Vercel and backend on Render (via render.yaml), with DB_SSL and SYNC_DB handled per environment, so a non-technical owner can redeploy without touching infrastructure.",
        id: "Frontend di Vercel dan backend di Render (via render.yaml), dengan DB_SSL dan SYNC_DB ditangani per environment, sehingga pemilik non-teknis bisa redeploy tanpa menyentuh infrastruktur.",
      },
    },
  ],
};
