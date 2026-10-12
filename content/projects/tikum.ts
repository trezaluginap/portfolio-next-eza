import type { Project } from "./types";

export const tikum: Project = {
  slug: "tikum",
  name: "Tikum",
  category: "mobile",
  year: "2026",
  tags: ["React Native", "Expo", "Laravel", "PostgreSQL", "Reverb", "Redis", "Docker"],
  hotTags: ["React Native", "Laravel", "Reverb"],
  gallery: [
    { src: "/images/projects/tikum/01.png", alt: "Tikum live map with convoy positions" },
    { src: "/images/projects/tikum/02.png", alt: "Tikum room and SOS alert screen" },
  ],
  links: {
    repo: "https://github.com/trezaluginap/Tikum",
  },
  tagline: {
    en: "Touring companion with room-based convoy tracking, live GPS, and SOS alerts.",
    id: "Aplikasi touring dengan pelacakan rombongan berbasis room, GPS live, dan SOS alert.",
  },
  role: {
    en: "Mobile app + API design",
    id: "Aplikasi mobile + desain API",
  },
  type: {
    en: "Mobile app (iOS + Android)",
    id: "Aplikasi mobile (iOS + Android)",
  },
  problem: {
    en: "Motorcycle touring groups ride as a convoy, but once the group spreads out nobody knows where anyone is. Riders get separated at traffic lights, someone takes a wrong turn, and if a rider crashes there is no fast, shared way to call for help. Group chats are useless for this - they show messages, not positions.",
    id: "Rombongan touring motor itu bergerak bersama, tapi begitu grup menyebar tidak ada yang tahu posisi satu sama lain. Rider terpisah di lampu merah, ada yang salah belok, dan kalau terjadi kecelakaan tidak ada cara cepat dan terpusat untuk memanggil bantuan. Grup chat tidak menyelesaikan ini - yang tampil pesan, bukan posisi.",
  },
  why: {
    en: "I ride with touring communities myself, so I was solving a problem I actually felt. Existing apps were either generic friend-locator tools (no notion of a trip or a group) or fleet-tracking software built for logistics companies. Neither fit a casual weekend ride: you need to create a trip in seconds, share a PIN, and have everyone visible on one map - then close it and move on.",
    id: "Saya sendiri ikut komunitas touring, jadi ini masalah yang saya rasakan langsung. Aplikasi yang ada cuma dua jenis: friend-locator generik (tanpa konsep trip atau grup) atau software fleet-tracking untuk perusahaan logistik. Dua-duanya tidak cocok untuk riding akhir pekan: kamu butuh membuat trip dalam hitungan detik, bagikan PIN, semua orang terlihat di satu peta - lalu tutup dan lanjut.",
  },
  features: {
    en: [
      "Room & trip session - create a room, share a PIN, join in seconds",
      "Live tracking - every member's position on one map, updated over WebSocket",
      "Background location - keeps reporting position even when the app is not in the foreground",
      "SOS alert - one tap broadcasts an emergency to the whole room, resolved when safe",
      "Route & destination - search a place and get a riding route (OSRM)",
      "Trip history & stats - revisit past rides with route traces and per-user statistics",
    ],
    id: [
      "Room & trip session - buat room, bagikan PIN, gabung dalam hitungan detik",
      "Live tracking - posisi setiap anggota di satu peta, diperbarui via WebSocket",
      "Background location - tetap melaporkan posisi meski aplikasi tidak di foreground",
      "SOS alert - satu ketukan menyiarkan darurat ke seluruh room, di-resolve saat aman",
      "Rute & destinasi - cari lokasi dan dapatkan rute perjalanan (OSRM)",
      "Riwayat & statistik - lihat kembali perjalanan lampau dengan jejak rute dan statistik per pengguna",
    ],
  },
  stack: [
    {
      tech: "Expo / React Native",
      reason: {
        en: "One codebase for iOS and Android, and Expo's task-manager makes background location tracking practical without writing native modules.",
        id: "Satu codebase untuk iOS dan Android, dan task-manager Expo membuat background location tracking praktis tanpa menulis native module.",
      },
    },
    {
      tech: "Laravel 13 + Sanctum",
      reason: {
        en: "REST API with token auth. Laravel's conventions (queues, broadcasting, migrations) let me ship the API fast and keep it maintainable.",
        id: "REST API dengan auth token. Konvensi Laravel (queue, broadcasting, migration) membuat API cepat rilis dan tetap mudah dirawat.",
      },
    },
    {
      tech: "Laravel Reverb (WebSocket)",
      reason: {
        en: "Live positions need a persistent connection, not polling. Reverb is a self-hosted WebSocket server - same protocol as Pusher but no per-message bill.",
        id: "Posisi live butuh koneksi persisten, bukan polling. Reverb adalah WebSocket server self-hosted - protokol sama seperti Pusher tapi tanpa tagihan per pesan.",
      },
    },
    {
      tech: "PostgreSQL 17",
      reason: {
        en: "The data is deeply relational - users, rooms, members, sessions, locations, SOS alerts. Postgres handles the relations and geo-ish history queries cleanly.",
        id: "Datanya sangat relasional - user, room, member, session, lokasi, SOS alert. Postgres menangani relasi dan query riwayat lokasi dengan rapi.",
      },
    },
    {
      tech: "Redis 7",
      reason: {
        en: "Backs cache, queue, and Reverb's pub/sub so the realtime layer stays fast under many concurrent riders.",
        id: "Menopang cache, queue, dan pub/sub Reverb agar layer realtime tetap cepat saat banyak rider terhubung.",
      },
    },
    {
      tech: "Docker Compose",
      reason: {
        en: "Six services (app, nginx, postgres, redis, queue, reverb) run identically on my machine and on a VPS - no 'works on my machine'.",
        id: "Enam service (app, nginx, postgres, redis, queue, reverb) jalan identik di laptop dan di VPS - tidak ada lagi 'di laptop saya jalan'.",
      },
    },
  ],
  architecture: {
    en: "The Expo app talks to a containerized Laravel API over REST, and subscribes to a private per-session WebSocket channel (private-tour-session.{id}) through Reverb for live positions and SOS events. Channel authorization is checked server-side so only active members of a session can listen. A queue worker handles async work while Redis backs cache, queue, and Reverb pub/sub.",
    id: "Aplikasi Expo berkomunikasi dengan API Laravel (containerized) lewat REST, dan berlangganan channel WebSocket privat per-session (private-tour-session.{id}) melalui Reverb untuk posisi live dan event SOS. Otorisasi channel dicek di server sehingga hanya anggota aktif sebuah session yang bisa mendengarkan. Queue worker menangani pekerjaan async sementara Redis menopang cache, queue, dan pub/sub Reverb.",
  },
  challenges: [
    {
      title: {
        en: "Background location without killing the battery",
        id: "Background location tanpa menguras baterai",
      },
      detail: {
        en: "Continuous GPS drains battery fast. I used Expo's background task with a sensible interval and only report while a session is active, so tracking stops the moment a room is closed.",
        id: "GPS terus-menerus menguras baterai dengan cepat. Saya pakai background task Expo dengan interval yang wajar dan hanya melapor saat session aktif, jadi tracking berhenti begitu room ditutup.",
      },
    },
    {
      title: {
        en: "Authorizing realtime channels",
        id: "Mengamankan channel realtime",
      },
      detail: {
        en: "A WebSocket channel is easy to subscribe to if you don't guard it. Every subscription passes through POST /api/broadcasting/auth, which verifies the user is an active member of that session before granting access.",
        id: "Channel WebSocket mudah di-subscribe kalau tidak dijaga. Setiap subscription melewati POST /api/broadcasting/auth, yang memverifikasi user adalah anggota aktif session tersebut sebelum memberi akses.",
      },
    },
    {
      title: {
        en: "Modeling trip state cleanly",
        id: "Memodelkan status perjalanan dengan rapi",
      },
      detail: {
        en: "Rooms, members, sessions, and SOS alerts each have their own lifecycle. I defined explicit state machines (active -> closed, active -> resolved) so the app never has to guess what state it's in.",
        id: "Room, member, session, dan SOS alert punya siklus hidup masing-masing. Saya definisikan state machine eksplisit (active -> closed, active -> resolved) agar aplikasi tidak perlu menebak statusnya.",
      },
    },
  ],
};
