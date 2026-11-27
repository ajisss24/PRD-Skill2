# USER EXPERIENCE SPECIFICATION (UX-SPEC)
## Fitur: Ulasan Relevan – Tokopedia
**Versi:** 1.0  
**Referensi:** PRD.md (versi belum ditentukan)  
**Status:** Draft  

---

## 1. UX Overview

### 1.1 UX Objective
Membantu pengguna Tokopedia menemukan dan memahami ulasan produk yang relevan secara lebih cepat dan terstruktur sebelum mengambil keputusan pembelian. Dokumen ini menjadi pedoman struktur halaman, tata letak informasi, navigasi, hierarki konten, dan pengalaman pengguna pada fitur Ulasan Relevan di halaman detail produk.

Pengguna harus dapat:
- Menemukan ulasan berdasarkan aspek tertentu.
- Memahami kelebihan dan kekurangan produk.
- Mengetahui keluhan umum.
- Menemukan ulasan yang disertai foto.
- Menggabungkan filter aspek dan foto.
- Memeriksa ulasan asli sebagai sumber informasi.

### 1.2 UX Design Principles
- **Visibility (Information Clarity):** Informasi ulasan disajikan jelas dan terstruktur agar pengguna tidak perlu membaca seluruh ulasan untuk memahami kondisi produk.
- **Simplicity (Easy Discovery):** Ulasan berdasarkan aspek dapat ditemukan dengan langkah sederhana.
- **Consistency:** Komponen, istilah, tata letak, dan perilaku antarmuka konsisten di seluruh halaman.
- **Feedback and User Control:** Pengguna mengendalikan filter dan mendapatkan respons yang jelas atas setiap pilihan.
- **Progressive Disclosure:** Ringkasan ditampilkan terlebih dahulu; detail pengalaman tetap tersedia pada daftar ulasan asli.
- **Accessibility and Responsive Experience:** Informasi tidak hanya dibedakan berdasarkan warna dan antarmuka mudah digunakan pada desktop, tablet, dan mobile.

---

## 2. User Context

### 2.1 Primary Persona
Pembeli Tokopedia yang membaca ulasan sebelum membeli.
- Membandingkan pengalaman pembeli lain.
- Memperhatikan kualitas dan fungsi produk.
- Mempertimbangkan kelebihan serta kekurangan produk.
- Membutuhkan ulasan yang disertai foto.
- Kesulitan menemukan informasi relevan ketika jumlah ulasan terlalu banyak.

### 2.2 User Goals
| Goal | Expected Experience |
|---|---|
| Menemukan informasi per aspek | Ulasan dapat difilter berdasarkan aspek |
| Memahami kelebihan dan kekurangan | Ringkasan ditampilkan sebelum daftar ulasan |
| Mengetahui keluhan yang sering muncul | Keluhan umum tersaji dalam ringkasan |
| Melihat bukti visual | Ulasan dengan foto dapat ditampilkan tersendiri |
| Memverifikasi informasi | Ulasan asli tetap dapat dibaca sebagai sumber |

### 2.3 Main User Scenario
Skenario ilustratif: seorang pembeli membuka halaman produk **Headphone Wireless Bluetooth** dan ingin mengetahui apakah mikrofonnya layak digunakan untuk panggilan.
Pembeli membaca ringkasan dan menemukan keluhan mengenai mikrofon. Pembeli kemudian memilih aspek **Fungsi** dan mengaktifkan filter **Dengan Foto**.
Sistem menampilkan satu ulasan yang memenuhi kedua kondisi, yaitu ulasan **Dimas**, sehingga pembeli dapat memeriksa pengalaman asli (mock) sebelum mengambil keputusan.

---

## 3. Information Architecture (IA)

### 3.1 Sitemap
```
Product Detail Page
│
├── Product Information
│   ├── Product Image
│   ├── Product Name
│   ├── Product Price
│   ├── Product Rating
│   ├── Total Reviews
│   └── Store Information
│
├── Product Navigation
│   ├── Detail Produk
│   ├── Spesifikasi
│   └── Ulasan
│
└── Review Section
    ├── Review Overview
    │   ├── Average Rating
    │   └── Total Reviews
    └── Ulasan Relevan
        ├── Review Summary
        │   ├── Kelebihan
        │   ├── Kekurangan
        │   └── Keluhan Umum
        ├── Aspect Filter
        │   ├── Semua
        │   ├── Kualitas
        │   ├── Fungsi
        │   ├── Kesesuaian dengan Deskripsi
        │   └── Pengiriman
        ├── Photo Filter
        ├── Review Results
        │   ├── Review Card
        │   ├── Reviewer Information
        │   ├── Review Text
        │   └── Review Photos
        └── Empty State
```

---

## 4. Page Specification
- **PAGE-01:** Informasi Produk (Gambar, nama, harga Rp249.000, rating 4.8, 1.250 ulasan, Audio Store).
- **PAGE-02:** Review Overview dan Ringkasan Ulasan (Rating rata-rata, kartu Kelebihan, Kekurangan, Keluhan Umum).
- **PAGE-03:** Daftar Ulasan (Review card: nama, rating, tanggal, aspek, teks, foto).
- **PAGE-04:** Filter Ulasan (Filter chip: Semua, Kualitas, Fungsi, Kesesuaian dengan Deskripsi, Pengiriman; Toggle: Dengan Foto).
- **PAGE-05:** Preview Foto Ulasan (Modal preview foto ulasan diperbesar dengan tombol tutup).

---

## 5. User Flow
1. **Flow Melihat Ulasan:** Buka Halaman $\rightarrow$ Lihat Informasi Produk $\rightarrow$ Menuju Bagian Ulasan $\rightarrow$ Baca Ringkasan $\rightarrow$ Lihat Daftar Ulasan.
2. **Flow Filter Aspek:** Bagian Ulasan $\rightarrow$ Pilih Aspek $\rightarrow$ Daftar Ulasan Diperbarui.
3. **Flow Filter Foto:** Aktifkan Toggle "Dengan Foto" $\rightarrow$ Hanya Ulasan Berfoto Tampil.
4. **Flow Kombinasi Filter:** Pilih Aspek + Toggle Foto $\rightarrow$ Tampilkan Hasil / Tampilkan Empty State.
5. **Flow Membaca Ringkasan:** Lihat Kelebihan, Kekurangan, Keluhan Umum $\rightarrow$ Periksa Ulasan Asli.

---

## 6. Empty States
- **Hasil Filter Kosong:**
  - Judul: *"Tidak ada ulasan ditemukan."*
  - Penjelasan: *"Coba ubah pilihan aspek atau nonaktifkan filter foto untuk melihat ulasan lainnya."*
  - Aksi: Tombol *"Tampilkan Semua Ulasan"*.

*End of UX-SPEC v1.0*
