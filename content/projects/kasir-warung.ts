import type { Project } from "./types";

export const kasirWarung: Project = {
  slug: "kasir-warung",
  name: "Kasir Warung",
  category: "mobile",
  year: "2026",
  tags: ["Expo", "React Native", "SQLite", "Supabase", "Zustand"],
  hotTags: ["Expo", "SQLite"],
  gallery: [
    { src: "/images/projects/kasir-warung/01.png", alt: "Kasir Warung fast checkout screen" },
    { src: "/images/projects/kasir-warung/02.png", alt: "Kasir Warung product management and receipt" },
  ],
  links: {
    repo: "https://github.com/trezaluginap/kasir-warung",
  },
  tagline: {
    en: "Offline-first POS for small stalls: fast checkout, product CRUD, and 58mm thermal receipts.",
    id: "POS offline-first untuk warung kecil: kasir cepat, CRUD produk, dan struk thermal 58mm.",
  },
  role: {
    en: "Mobile app (solo)",
    id: "Aplikasi mobile (solo)",
  },
  type: {
    en: "Mobile app (Android + iOS)",
    id: "Aplikasi mobile (Android + iOS)",
  },
  problem: {
    en: "Small neighborhood stalls (warung) still total up sales by hand or with a basic calculator. Purpose-built POS systems assume reliable internet and cost more than the stall's monthly margin, and a cloud POS is useless the moment the connection drops.",
    id: "Warung kecil masih menjumlah penjualan manual atau pakai kalkulator sederhana. Sistem POS yang ada mengasumsikan internet stabil dan harganya lebih dari margin bulanan warung, dan POS berbasis cloud langsung tidak berguna begitu koneksi putus.",
  },
  why: {
    en: "The constraint that shaped everything was offline-first: a warung must keep selling whether or not there is internet. So I put all transactional data in a local SQLite database and used the cloud only for authentication. That keeps checkout instant, works with zero signal, and costs the owner nothing to run.",
    id: "Batasan yang membentuk semuanya adalah offline-first: warung harus tetap bisa jualan dengan atau tanpa internet. Jadi saya taruh semua data transaksi di database SQLite lokal dan pakai cloud hanya untuk autentikasi. Ini membuat kasir instan, jalan tanpa sinyal, dan tanpa biaya bagi pemiliknya.",
  },
  features: {
    en: [
      "Fast checkout - quick-price buttons (IDR 1,000-5,000), custom price, and cart with quantity controls",
      "Product CRUD - create, edit, soft-delete, categories, search, with 16 seeded defaults",
      "Transaction history - search by ID/date/time/item/total, with a detail modal",
      "58mm thermal receipt printing via expo-print + expo-sharing (also exportable to PDF)",
      "Username + PIN login via Supabase, session persisted locally with auto-redirect",
      "Offline-first - a local SQLite database, no mandatory backend besides auth",
    ],
    id: [
      "Kasir cepat - tombol harga cepat (Rp 1.000-5.000), harga custom, dan keranjang dengan kontrol jumlah",
      "CRUD produk - tambah, edit, soft-delete, kategori, pencarian, dengan 16 produk default",
      "Riwayat transaksi - cari via ID/tanggal/jam/item/total, dengan modal detail",
      "Cetak struk thermal 58mm via expo-print + expo-sharing (juga bisa export PDF)",
      "Login username + PIN via Supabase, sesi tersimpan lokal dengan auto-redirect",
      "Offline-first - database SQLite lokal, tanpa backend wajib selain auth",
    ],
  },
  stack: [
    {
      tech: "Expo / React Native",
      reason: {
        en: "One codebase for both platforms, and Expo gives easy access to the print, sharing, and SQLite modules the app depends on.",
        id: "Satu codebase untuk kedua platform, dan Expo memberi akses mudah ke modul print, sharing, dan SQLite yang dibutuhkan aplikasi.",
      },
    },
    {
      tech: "expo-sqlite",
      reason: {
        en: "Transactions and products live in a local SQLite file. Checkout writes instantly, works with no network, and survives app restarts.",
        id: "Transaksi dan produk tersimpan di file SQLite lokal. Kasir menulis instan, jalan tanpa jaringan, dan tetap ada setelah aplikasi ditutup.",
      },
    },
    {
      tech: "Supabase (auth only)",
      reason: {
        en: "I needed a login without running a backend. Supabase provides username + PIN auth via RPC, and using it only for auth keeps the app fully functional offline.",
        id: "Saya butuh login tanpa menjalankan backend. Supabase menyediakan auth username + PIN via RPC, dan menggunakannya hanya untuk auth menjaga aplikasi tetap berfungsi penuh offline.",
      },
    },
    {
      tech: "Zustand",
      reason: {
        en: "Cart and session state are global and updated often. Zustand gives a minimal store without the ceremony of heavier state libraries.",
        id: "State keranjang dan sesi bersifat global dan sering diperbarui. Zustand memberi store minimal tanpa kerumitan library state yang lebih berat.",
      },
    },
    {
      tech: "expo-print + expo-sharing",
      reason: {
        en: "The owner already has a cheap 58mm thermal printer. Rendering an HTML receipt to PDF and using the native share sheet means printing works without custom native code.",
        id: "Pemilik sudah punya printer thermal 58mm murah. Merender struk HTML ke PDF dan memakai share sheet bawaan berarti cetak berfungsi tanpa native code kustom.",
      },
    },
  ],
  architecture: {
    en: "All data flows through a local SQLite database: the cashier UI writes to a Zustand cart store, which persists transactions to SQLite, and the history screen reads them back. Supabase is used exclusively for authentication, so the app never blocks on the network during a sale. Two tables (transaksi, products) are created automatically on first launch with no migration step.",
    id: "Semua data mengalir lewat database SQLite lokal: UI kasir menulis ke store keranjang Zustand, yang menyimpan transaksi ke SQLite, dan layar riwayat membacanya kembali. Supabase dipakai khusus untuk autentikasi, sehingga aplikasi tidak pernah terblokir jaringan saat transaksi. Dua tabel (transaksi, products) dibuat otomatis saat pertama dibuka tanpa langkah migrasi.",
  },
  challenges: [
    {
      title: {
        en: "Making offline truly the default",
        id: "Menjadikan offline benar-benar default",
      },
      detail: {
        en: "It is easy to say 'offline-first' and still hit the network somewhere. I deliberately limited cloud usage to auth only, so a sale never waits on a request that might fail.",
        id: "Mudah bilang 'offline-first' tapi tetap memukul jaringan di suatu tempat. Saya sengaja membatasi penggunaan cloud hanya untuk auth, sehingga transaksi tidak pernah menunggu request yang mungkin gagal.",
      },
    },
    {
      title: {
        en: "Receipts without native code",
        id: "Struk tanpa native code",
      },
      detail: {
        en: "Rather than writing a native thermal-printer module, I render a 58mm HTML template to PDF and hand it to the OS share sheet - the owner's printer app takes it from there.",
        id: "Daripada menulis modul printer thermal native, saya render template HTML 58mm ke PDF dan menyerahkannya ke share sheet OS - aplikasi printer pemilik melanjutkan dari situ.",
      },
    },
    {
      title: {
        en: "Documenting the honest gaps",
        id: "Mendokumentasikan kekurangan secara jujur",
      },
      detail: {
        en: "The README lists real limitations: stock is stored but not used in the cashier UI, a daily-revenue helper exists without a screen, and store info is still hardcoded. Naming these makes the next iteration obvious.",
        id: "README mencantumkan keterbatasan nyata: stok tersimpan tapi belum dipakai di UI kasir, helper omzet harian ada tanpa layar, dan info toko masih hardcoded. Menyebutkan ini membuat iterasi berikutnya jelas.",
      },
    },
  ],
};
