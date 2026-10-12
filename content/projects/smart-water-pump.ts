import type { Project } from "./types";

export const smartWaterPump: Project = {
  slug: "smart-water-pump",
  name: "Smart Water Pump",
  category: "mobile",
  year: "2026",
  tags: ["Expo", "React Native", "Firebase", "ESP32", "IoT", "PZEM"],
  hotTags: ["Expo", "Firebase", "ESP32"],
  gallery: [
    {
      src: "/images/projects/smart-water-pump/01.png",
      alt: "Smart Water Pump dashboard - screenshot coming soon",
    },
    {
      src: "/images/projects/smart-water-pump/02.png",
      alt: "Smart Water Pump control screen - screenshot coming soon",
    },
  ],
  links: {
    repo: "https://github.com/trezaluginap/smart-pump",
  },
  tagline: {
    en: "IoT control for a home water pump: live electrical monitoring, tank level, and automatic load shifting.",
    id: "Kontrol IoT untuk pompa air rumah: monitoring kelistrikan live, level tandon, dan load shifting otomatis.",
  },
  role: {
    en: "Mobile app + IoT integration (solo)",
    id: "Aplikasi mobile + integrasi IoT (solo)",
  },
  type: {
    en: "Mobile app + embedded",
    id: "Aplikasi mobile + embedded",
  },
  problem: {
    en: "A home water pump is usually left to chance, and that creates two common failures. If someone forgets to switch it off, the tank overflows and both water and electricity are wasted. If the pump runs at the same time as other heavy appliances, the combined load trips the breaker and the whole house goes dark. On top of that, the owner has no idea how much the pump actually costs to run each month.",
    id: "Pompa air rumah biasanya dibiarkan apa adanya, dan itu menimbulkan dua masalah umum. Kalau lupa dimatikan, tandon meluap dan air serta listrik terbuang. Kalau pompa menyala bersamaan dengan alat berdaya besar lain, total bebannya menjatuhkan MCB dan seluruh rumah padam. Ditambah lagi, pemilik tidak tahu berapa biaya listrik pompa per bulan.",
  },
  why: {
    en: "I wanted to build an IoT system that does more than display numbers. The app had to actively prevent both failure modes: pause the pump automatically when household load is too high, and lock it off entirely if the power sensor fails. Then wrap that in an interface that is genuinely easy to use, with guided onboarding, live tank visualization, and honest energy analytics so the owner can see the cost in rupiah.",
    id: "Saya ingin membangun sistem IoT yang lebih dari sekadar menampilkan angka. Aplikasinya harus aktif mencegah kedua masalah tadi: menjeda pompa otomatis saat beban rumah terlalu tinggi, dan mengunci pompa sepenuhnya jika sensor daya rusak. Lalu dibungkus antarmuka yang benar-benar mudah dipakai, dengan tur terpandu, visualisasi tandon live, dan analitik energi yang jujur sehingga pemilik bisa melihat biayanya dalam rupiah.",
  },
  features: {
    en: [
      "Live electrical monitoring - voltage, current, and power (PZEM sensor)",
      "Tank level visualization with color states (critical, low, normal, full)",
      "AUTO / MANUAL pump control with an automatic safety lock",
      "Smart load shifting - pump pauses when household load exceeds a set limit",
      "Energy analytics - daily kWh, estimated rupiah cost, runtime, and 7/30-day averages",
      "Push notification when the tank hits a critical level, plus a guided onboarding tour",
    ],
    id: [
      "Monitoring kelistrikan live - tegangan, arus, dan daya (sensor PZEM)",
      "Visualisasi level tandon dengan warna status (kritis, rendah, normal, penuh)",
      "Kontrol pompa AUTO / MANUAL dengan kunci keamanan otomatis",
      "Smart load shifting - pompa dijeda saat beban rumah melewati batas",
      "Analitik energi - kWh harian, estimasi biaya rupiah, runtime, dan rata-rata 7/30 hari",
      "Notifikasi saat tandon mencapai level kritis, plus tur onboarding terpandu",
    ],
  },
  stack: [
    {
      tech: "Expo / React Native",
      reason: {
        en: "One codebase for Android and iOS, with direct access to native notifications and gesture handling without writing native modules.",
        id: "Satu codebase untuk Android dan iOS, dengan akses langsung ke notifikasi native dan gesture tanpa menulis native module.",
      },
    },
    {
      tech: "Firebase Realtime Database",
      reason: {
        en: "The ESP32 can write sensor data straight to Firebase over HTTPS, so there is no custom backend to host or maintain. The app subscribes to the same paths and updates instantly.",
        id: "ESP32 bisa menulis data sensor langsung ke Firebase via HTTPS, jadi tidak ada backend custom yang perlu di-hosting atau dirawat. Aplikasi berlangganan path yang sama dan ter-update instan.",
      },
    },
    {
      tech: "ESP32 + PZEM-004T + ultrasonic sensor",
      reason: {
        en: "The ESP32 polls sensors every 250ms and drives the relay. PZEM-004T measures real power, while an ultrasonic sensor reads the tank level.",
        id: "ESP32 melakukan polling sensor tiap 250ms dan mengendalikan relay. PZEM-004T mengukur daya nyata, sementara sensor ultrasonik membaca level tandon.",
      },
    },
    {
      tech: "expo-notifications",
      reason: {
        en: "Critical-level alerts fire locally on the device, so there is no need for a push server or extra infrastructure.",
        id: "Alert level kritis muncul lokal di perangkat, jadi tidak perlu push server atau infrastruktur tambahan.",
      },
    },
    {
      tech: "react-native-svg",
      reason: {
        en: "The energy and cost curves are drawn with SVG paths, which keeps the charts lightweight and fully custom instead of pulling in a heavy charting library.",
        id: "Kurva energi dan biaya digambar dengan path SVG, menjaga chart tetap ringan dan sepenuhnya custom tanpa menarik library charting yang berat.",
      },
    },
  ],
  architecture: {
    en: "The ESP32 polls its sensors every 250ms, writes readings to Firebase Realtime Database, and drives the pump relay from a command path. The Expo app subscribes to those paths and reflects state in real time. Energy is calculated on the client: the app integrates power over time only while the relay is active, discards abnormal spikes, and syncs the accumulated kWh back to Firebase every 5 seconds. A daily reset rolls the total into a capped 365-day history used for the 7 and 30-day averages.",
    id: "ESP32 melakukan polling sensor tiap 250ms, menulis pembacaan ke Firebase Realtime Database, dan mengendalikan relay pompa dari sebuah command path. Aplikasi Expo berlangganan path tersebut dan merefleksikan status secara real-time. Energi dihitung di sisi klien: aplikasi mengintegrasikan daya terhadap waktu hanya saat relay aktif, membuang spike abnormal, dan menyinkronkan akumulasi kWh kembali ke Firebase tiap 5 detik. Reset harian menggulirkan total ke riwayat maksimal 365 hari yang dipakai untuk rata-rata 7 dan 30 hari.",
  },
  challenges: [
    {
      title: {
        en: "Fixing a mode-toggle race condition",
        id: "Memperbaiki race condition saat ganti mode",
      },
      detail: {
        en: "The first version wrote both the mode and the pump command at once, so the pump would bounce because the sensor state lagged about three seconds behind. I changed it to write only the mode and added a short 300ms lock, matched to the ESP32's 250ms polling cycle, so the UI and hardware stay in sync.",
        id: "Versi pertama menulis mode dan command pompa sekaligus, sehingga pompa jadi mental karena state sensor tertinggal sekitar tiga detik. Saya ubah agar hanya menulis mode dan menambahkan lock singkat 300ms, disesuaikan dengan siklus polling 250ms ESP32, supaya UI dan hardware tetap sinkron.",
      },
    },
    {
      title: {
        en: "Estimating kWh without a real meter",
        id: "Mengestimasi kWh tanpa meter asli",
      },
      detail: {
        en: "There is no energy meter, so the app integrates power over time itself. To keep it accurate it only counts while the relay is on, averages consecutive readings, and filters out spikes over 500W that would otherwise inflate the total.",
        id: "Tidak ada meter energi, jadi aplikasi mengintegrasikan daya terhadap waktu sendiri. Agar akurat, perhitungan hanya jalan saat relay aktif, merata-ratakan pembacaan berurutan, dan memfilter spike di atas 500W yang bisa menggelembungkan total.",
      },
    },
    {
      title: {
        en: "Making automation safe, not annoying",
        id: "Membuat otomasi aman, bukan mengganggu",
      },
      detail: {
        en: "Load shifting should not flip the pump on and off. It only applies in AUTO mode, respects a configurable restart delay, and always yields to MANUAL control, except when the power sensor reports an error.",
        id: "Load shifting tidak boleh menyalakan dan mematikan pompa berulang-ulang. Fitur ini hanya berlaku di mode AUTO, menghormati delay restart yang bisa diatur, dan selalu kalah dari kontrol MANUAL, kecuali saat sensor daya melaporkan error.",
      },
    },
    {
      title: {
        en: "Failing safe when the sensor breaks",
        id: "Gagal dengan aman saat sensor rusak",
      },
      detail: {
        en: "If the PZEM sensor reports an error, the app locks the pump off and holds the tank reading rather than showing a misleading value. Safety wins over availability.",
        id: "Jika sensor PZEM melaporkan error, aplikasi mengunci pompa mati dan menahan bacaan tandon alih-alih menampilkan angka menyesatkan. Keamanan menang atas ketersediaan.",
      },
    },
  ],
};
