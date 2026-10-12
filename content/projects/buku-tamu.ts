import type { Project } from "./types";

export const bukuTamu: Project = {
  slug: "website-buku-tamu",
  name: "Website Buku Tamu",
  category: "fullstack",
  year: "2025",
  tags: ["React", "Express", "MySQL", "Tailwind", "QR", "Internship"],
  hotTags: ["React", "QR"],
  hasShots: true,
  gallery: [
    { src: "/images/projects/buku-tamu/01.png", alt: "Buku Tamu landing page with QR check-in" },
    { src: "/images/projects/buku-tamu/02.png", alt: "Buku Tamu visitor registration form" },
    { src: "/images/projects/buku-tamu/03.png", alt: "Buku Tamu admin dashboard with visit list" },
    { src: "/images/projects/buku-tamu/04.png", alt: "Buku Tamu follow-up detail and PDF report" },
  ],
  links: {
    repo: "https://github.com/trezaluginap/Website-Buku-Tamu",
  },
  tagline: {
    en: "Digital guest book for a government office - QR check-in, follow-up tracking, PDF reports.",
    id: "Buku tamu digital untuk kantor pemerintah - check-in QR, pelacakan tindak lanjut, laporan PDF.",
  },
  role: {
    en: "UI design -> implementation (internship)",
    id: "Desain UI -> implementasi (magang)",
  },
  type: {
    en: "Government web app",
    id: "Aplikasi web pemerintahan",
  },
  problem: {
    en: "At Statistics Indonesia (BPS) Sukabumi, visitors signed a paper guest book. Handwriting was often illegible, rekap for reports meant manually counting pages, and there was no way to track whether a visitor's request was actually followed up.",
    id: "Di Badan Pusat Statistik (BPS) Sukabumi, tamu menandatangani buku tamu kertas. Tulisan sering tidak terbaca, rekap untuk laporan berarti menghitung halaman manual, dan tidak ada cara melacak apakah permintaan tamu benar-benar ditindaklanjuti.",
  },
  why: {
    en: "This was my internship project, and the goal was concrete: replace the paper book without disrupting the front-desk workflow. Visitors should be able to register from their phone by scanning a QR at the entrance, and staff should get a searchable, reportable record with a follow-up status instead of a pile of pages.",
    id: "Ini proyek magang saya, dan tujuannya konkret: mengganti buku kertas tanpa mengganggu alur kerja meja depan. Tamu harus bisa mendaftar dari HP dengan scan QR di pintu masuk, dan petugas mendapat catatan yang bisa dicari dan dilaporkan dengan status tindak lanjut, bukan tumpukan halaman.",
  },
  features: {
    en: [
      "Visitor registration via web form or QR scan at the entrance",
      "Central storage of every visit in MySQL - no more paper pages",
      "Follow-up status flow: Belum Diproses -> Diproses -> Selesai",
      "Automatic timestamps for received and completed handovers",
      "Supporting document upload per visit",
      "Admin dashboard with filtering and printable PDF reports",
    ],
    id: [
      "Registrasi tamu via form web atau scan QR di pintu masuk",
      "Penyimpanan terpusat setiap kunjungan di MySQL - tidak ada lagi halaman kertas",
      "Alur status tindak lanjut: Belum Diproses -> Diproses -> Selesai",
      "Timestamp otomatis untuk penerimaan dan selesainya tindak lanjut",
      "Upload dokumen pendukung per kunjungan",
      "Dashboard admin dengan filter dan laporan PDF siap cetak",
    ],
  },
  stack: [
    {
      tech: "React (CRA) + Tailwind",
      reason: {
        en: "A single-page app kept the visitor form instant and the admin dashboard interactive; Tailwind let me build the UI design quickly and consistently.",
        id: "SPA membuat form tamu instan dan dashboard admin interaktif; Tailwind mempercepat pembuatan desain UI secara konsisten.",
      },
    },
    {
      tech: "Express + MySQL (mysql2)",
      reason: {
        en: "Simple REST endpoints over a relational store were enough for structured visit records, and mysql2's connection pool handles concurrent front-desk traffic.",
        id: "Endpoint REST sederhana di atas database relasional cukup untuk catatan kunjungan terstruktur, dan connection pool mysql2 menangani trafik meja depan yang bersamaan.",
      },
    },
    {
      tech: "qrcode.react",
      reason: {
        en: "Generating the entrance QR in-app meant no third-party QR service and no dependency on an external tool at the office.",
        id: "Membuat QR pintu masuk langsung di aplikasi berarti tanpa layanan QR pihak ketiga dan tanpa ketergantungan tool eksternal di kantor.",
      },
    },
    {
      tech: "Multer",
      reason: {
        en: "Visitors sometimes bring supporting documents; Multer handles the multipart upload and stores files for the admin to review.",
        id: "Tamu kadang membawa dokumen pendukung; Multer menangani upload multipart dan menyimpan file untuk ditinjau admin.",
      },
    },
  ],
  architecture: {
    en: "The React SPA serves two audiences from one codebase: a public visitor form (reachable via QR) and an admin dashboard behind a login. Both hit the same Express REST API, which persists to MySQL through a connection pool and stores uploaded documents via Multer. Visit status is a simple linear state machine with automatic timestamps at each transition.",
    id: "SPA React melayani dua audiens dari satu codebase: form tamu publik (dapat diakses via QR) dan dashboard admin di balik login. Keduanya memukul REST API Express yang sama, yang menyimpan ke MySQL lewat connection pool dan menyimpan dokumen yang di-upload via Multer. Status kunjungan adalah state machine linier sederhana dengan timestamp otomatis di setiap transisi.",
  },
  challenges: [
    {
      title: {
        en: "Designing for non-technical visitors",
        id: "Merancang untuk tamu non-teknis",
      },
      detail: {
        en: "Visitors range from students to officials, often in a hurry. I kept the form to the essentials and made QR entry land directly on it, so registration takes under a minute on a phone.",
        id: "Tamu berkisar dari pelajar sampai pejabat, sering terburu-buru. Saya jaga formnya ke hal penting saja dan QR langsung mengarah ke form, sehingga registrasi selesai di bawah satu menit di HP.",
      },
    },
    {
      title: {
        en: "Making reports actually useful",
        id: "Membuat laporan benar-benar berguna",
      },
      detail: {
        en: "The value of replacing paper is only realized if reports are easy. Admin can filter by date range or status and print a PDF, replacing the manual page-counting that the paper book required.",
        id: "Nilai mengganti kertas baru terwujud kalau laporannya mudah. Admin bisa filter per rentang tanggal atau status dan mencetak PDF, menggantikan hitung-halaman manual yang dibutuhkan buku kertas.",
      },
    },
    {
      title: {
        en: "Honest about security gaps",
        id: "Jujur soal celah keamanan",
      },
      detail: {
        en: "As an early internship build, route guards were client-side and passwords were not yet hashed. I documented these limitations openly rather than shipping a false sense of security - a lesson that shaped how I approach auth in later projects.",
        id: "Sebagai hasil magang awal, guard rute masih client-side dan password belum di-hash. Saya dokumentasikan keterbatasan ini secara terbuka alih-alih memberi rasa aman yang palsu - pelajaran yang membentuk cara saya menangani auth di proyek berikutnya.",
      },
    },
  ],
};
