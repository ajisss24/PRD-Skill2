export const productData = {
  id: "prod-tws-01",
  name: "SoundPulse ANC Pro Wireless Earbuds - Hi-Res Audio, 36dB Noise Cancellation, IPX5",
  store: {
    name: "AudioTech Official Store",
    isOfficial: true,
    city: "Jakarta Pusat",
    rating: 4.9,
    badge: "Official Store"
  },
  price: 489000,
  originalPrice: 750000,
  discountPercentage: 35,
  rating: 4.8,
  totalReviews: 1248,
  totalSold: 2890,
  satisfactionRate: 98,
  images: [
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80"
  ],
  variants: ["Midnight Black", "Frost White", "Navy Blue"]
};

export const aspectCategories = [
  { id: "Semua", label: "Semua Ulasan", count: 1248 },
  { id: "Kualitas", label: "Kualitas Suara & Fisik", count: 742 },
  { id: "Fungsi", label: "Fungsi & Baterai", count: 580 },
  { id: "Kesesuaian", label: "Kesesuaian Deskripsi", count: 412 },
  { id: "Pengiriman", label: "Pengemasan & Kurir", count: 320 }
];

export const summaryData = {
  pros: [
    {
      id: "pro-1",
      title: "Kualitas Suara Jernih & Bass Solid",
      detail: "Mayoritas pembeli memuji karakter suara vokal yang jernih dan bass yang tidak pecah pada volume tinggi.",
      aspect: "Kualitas",
      sentimentPercentage: 92
    },
    {
      id: "pro-2",
      title: "Daya Tahan Baterai Awet (7+ Jam)",
      detail: "Baterai terbukti tahan lama untuk pemakaian harian bekerja, kuliah daring, hingga berolahraga.",
      aspect: "Fungsi",
      sentimentPercentage: 88
    },
    {
      id: "pro-3",
      title: "Fitting Nyaman & Build Kokoh",
      detail: "Ergonomis, tidak mudah lepas saat bergerak, dan finishing boks doff tidak gampang kotor.",
      aspect: "Kualitas",
      sentimentPercentage: 85
    },
    {
      id: "pro-4",
      title: "Pengemasan Rapi & Pengiriman Kilat",
      detail: "Paket sampai dalam 1-2 hari dengan bubble wrap tebal dan segel resmi utuh.",
      aspect: "Pengiriman",
      sentimentPercentage: 97
    }
  ],
  cons: [
    {
      id: "con-1",
      title: "ANC Kurang Kedap di Keramaian Tinggi",
      detail: "Sebagian pembeli mencatat peredaman suara bising jalan raya atau transportasi umum belum sepenuhnya senyap.",
      aspect: "Fungsi",
      mentionRate: "17% ulasan"
    },
    {
      id: "con-2",
      title: "Kabel Charger Bawaan Pendek (~30 cm)",
      detail: "Panjang kabel USB Type-C bawaan dirasa kurang leluasa saat mencolok ke stopkontak jauh.",
      aspect: "Kesesuaian",
      mentionRate: "14% ulasan"
    }
  ]
};

export const commonComplaints = [
  {
    id: "comp-1",
    topic: "Kabel Charger Bawaan Terlalu Pendek",
    frequency: 18,
    severity: "Ringan",
    impact: "Pengguna harus menaruh boks dekat sumber listrik saat isi daya.",
    tip: "Gunakan kabel USB Type-C ponsel standar yang sudah Anda miliki untuk fleksibilitas.",
    relatedReviewIds: ["rev-04", "rev-08"]
  },
  {
    id: "comp-2",
    topic: "Kekedapan ANC Kurang Maksimal di Outdoor Ramai",
    frequency: 12,
    severity: "Sedang",
    impact: "Suara knalpot atau bising kendaraan jalan raya masih samar terdengar.",
    tip: "Ganti ukuran eartips silikon dengan ukuran L (tersedia di boks) agar segel lubang telinga lebih pas dan kedap.",
    relatedReviewIds: ["rev-03", "rev-09"]
  },
  {
    id: "comp-3",
    topic: "Respon Sensor Sentuh Terkadang Delay Saat Baterai Menipis",
    frequency: 5,
    severity: "Ringan",
    impact: "Play/pause sentuhan earbud membutuhkan jeda 1 detik jika daya di bawah 15%.",
    tip: "Segera masukkan kembali earbud ke dalam charging case saat daya sudah menyentuh 20%.",
    relatedReviewIds: ["rev-07"]
  }
];

export const reviewsList = [
  {
    id: "rev-01",
    userName: "Budi Santoso",
    userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "12 Nov 2026",
    variant: "Midnight Black",
    isVerified: true,
    aspects: ["Kualitas", "Fungsi", "Kesesuaian"],
    content: "Sangat puas dengan suaranya! Bass-nya empuk dan vokal sangat detail. Saya pakai meeting Zoom dari pagi sampai siang baterainya cuma berkurang sekitar 30%. Sesuai banget sama deskripsi toko. Desainnya elegan dan gak berat di telinga.",
    photos: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&auto=format&fit=crop&q=80"
    ],
    photoCaptions: ["Tampilan fisik boks dan earbuds", "Kondisi saat dicas dalam case"],
    likes: 42
  },
  {
    id: "rev-02",
    userName: "Siti Rahmawati",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "10 Nov 2026",
    variant: "Frost White",
    isVerified: true,
    aspects: ["Kesesuaian", "Pengiriman"],
    content: "Warna Frost White-nya cakep banget, persis seperti di foto etalase. Seller ramah, order siang jam 1 langsung dikirim, besok paginya udah nyampe rumah. Packing aman bubble wrap tebal.",
    photos: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&auto=format&fit=crop&q=80"
    ],
    photoCaptions: ["Unit warna putih bersih sesuai deskripsi"],
    likes: 29
  },
  {
    id: "rev-03",
    userName: "Alfarizi Hardiansyah",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    rating: 4,
    date: "08 Nov 2026",
    variant: "Midnight Black",
    isVerified: true,
    aspects: ["Kualitas", "Fungsi"],
    content: "Build quality juara untuk harga 400 ribuan. Kualitas musik sangat memuaskan buat denger lagu akustik maupun rock. Kekurangannya satu: kalau dipakai di pinggir jalan raya yang ramai motor, fitur ANC-nya agak tembus suara knalpot. Tapi di dalam ruangan atau perpustakaan senyap maksimal.",
    photos: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80"
    ],
    photoCaptions: ["Earbud terpasang pas di telinga"],
    likes: 67
  },
  {
    id: "rev-04",
    userName: "Dimas Pratama",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    rating: 4,
    date: "05 Nov 2026",
    variant: "Navy Blue",
    isVerified: true,
    aspects: ["Kesesuaian", "Fungsi"],
    content: "Barang original 100%, terhubung instan ke iPhone & Android tanpa kendala. Catatan kecil buat produsen: tolong kabel charger bawaannya dipanjangin dikit, yang bawaan cuma 30 cm jadi ngecasnya harus dekat stopkontak. Untung bisa pakai kabel HP.",
    photos: [],
    likes: 19
  },
  {
    id: "rev-05",
    userName: "Nadia Putri",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "02 Nov 2026",
    variant: "Frost White",
    isVerified: true,
    aspects: ["Kualitas", "Fungsi", "Pengiriman"],
    content: "Mic buat teleponan jernih banget, lawan bicara gak ngerasa ada gaung atau kresek-kresek. Dipakai lari pagi gak gampang copot karena eartips-nya fleksibel. Mantap pokoknya Tokopedia Official Store!",
    photos: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80"
    ],
    photoCaptions: ["Kelengkapan boks dan buku garansi resmi"],
    likes: 35
  },
  {
    id: "rev-06",
    userName: "Fajar Nugraha",
    userAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "28 Okt 2026",
    variant: "Midnight Black",
    isVerified: true,
    aspects: ["Pengiriman", "Kualitas"],
    content: "Packing kayu/bubble wrap sangat tebal. Kotak produk mulus tanpa penyok sama sekali. Suara bass mantap, soundstage luas.",
    photos: [],
    likes: 12
  },
  {
    id: "rev-07",
    userName: "Bayu Wicaksono",
    userAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80",
    rating: 3,
    date: "25 Okt 2026",
    variant: "Navy Blue",
    isVerified: true,
    aspects: ["Fungsi"],
    content: "Suaranya sebenernya bagus banget, cuma pas baterai case udah tinggal 10-15%, sensor sentuh play pause earbud agak lemot responsnya. Harus dicas dulu baru lancar lagi.",
    photos: [],
    likes: 15
  },
  {
    id: "rev-08",
    userName: "Rizki Maulana",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    rating: 4,
    date: "21 Okt 2026",
    variant: "Frost White",
    isVerified: true,
    aspects: ["Kualitas", "Kesesuaian"],
    content: "Kondisi fisik barang persis dengan display penjual. Case terasa solid dan magnetnya kuat. Kabel charger bawaan memang pendek banget tapi fungsi charging tetap normal.",
    photos: [
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=600&auto=format&fit=crop&q=80"
    ],
    photoCaptions: ["Kabel charger dan magnet charging case"],
    likes: 22
  }
];
