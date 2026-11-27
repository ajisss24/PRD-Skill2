// Data Produk sesuai spesifikasi resmi DESIGN-SYSTEM.md & AGENTS.md
export const productData = {
  name: "Headphone Wireless Bluetooth",
  price: 249000,
  rating: 4.8,
  totalReviews: 1250,
  seller: "Audio Store",
  isOfficial: true,
  city: "Jakarta Pusat",
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"
  ]
};

// 5 Pilihan Aspek sesuai INTERACTION-SPEC.md & AGENTS.md
export const aspectCategories = [
  "Semua",
  "Kualitas",
  "Fungsi",
  "Kesesuaian dengan Deskripsi",
  "Pengiriman"
];

// Ringkasan Ulasan sesuai INTERACTION-SPEC.md Bab 8
export const reviewSummary = {
  kelebihan: [
    "Suara cukup jernih",
    "Baterai cukup awet",
    "Desain nyaman digunakan"
  ],
  kekurangan: [
    "Mikrofon kurang optimal",
    "Koneksi terkadang terputus",
    "Material kurang kokoh dari ekspektasi"
  ],
  keluhanUmum: [
    "Koneksi Bluetooth terkadang terputus",
    "Mikrofon kurang jelas saat panggilan"
  ]
};

// 5 Data Ulasan Simulasi sesuai ACCEPTANCE-CRITERIA.md Bab 5 & AGENTS.md Bab 5
export const mockReviews = [
  {
    id: "rev-andi",
    reviewer: "Andi",
    rating: 5,
    date: "12 Nov 2026",
    aspect: "Kualitas",
    hasPhoto: true,
    content: "Kualitas suara cukup jernih dan nyaman digunakan untuk mendengarkan musik.",
    photoUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    photoCaption: "Foto fisik Headphone Wireless Bluetooth diterima dalam kondisi baik.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "rev-siti",
    reviewer: "Siti",
    rating: 4,
    date: "10 Nov 2026",
    aspect: "Fungsi",
    hasPhoto: false,
    content: "Baterai cukup awet, tetapi koneksi terkadang terputus ketika digunakan agak jauh dari perangkat.",
    photoUrl: null,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "rev-budi",
    reviewer: "Budi",
    rating: 3,
    date: "08 Nov 2026",
    aspect: "Kesesuaian dengan Deskripsi",
    hasPhoto: true,
    content: "Produk sesuai deskripsi, tetapi material terasa sedikit berbeda dari ekspektasi.",
    photoUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
    photoCaption: "Tampilan material bando dan bantalan earcup.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "rev-rina",
    reviewer: "Rina",
    rating: 5,
    date: "05 Nov 2026",
    aspect: "Pengiriman",
    hasPhoto: false,
    content: "Barang sampai dengan aman dan dikemas dengan baik.",
    photoUrl: null,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "rev-dimas",
    reviewer: "Dimas",
    rating: 3,
    date: "02 Nov 2026",
    aspect: "Fungsi",
    hasPhoto: true,
    content: "Mikrofon kurang jelas ketika digunakan untuk panggilan telepon.",
    photoUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
    photoCaption: "Kondisi unit headphone saat diuji panggilan suara.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
  }
];
