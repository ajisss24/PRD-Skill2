# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Fitur: Ulasan Relevan – Tokopedia (Versi UX-Driven)
**Versi:** 2.0 (UX-Enhanced)  
**Platform:** Tokopedia Mobile & Web  
**Jenis Produk:** Fitur evaluasi ulasan produk berbasis kecerdasan sintesis dan pengelompokan aspek  
**Status:** Approved for Implementation  

---

## 1. Product Overview

### 1.1 Background
Tokopedia menyediakan fitur ulasan produk yang memungkinkan pengguna melihat pengalaman pembeli lain sebelum melakukan pembelian. Namun, volume ulasan yang masif (sering kali mencapai ribuan pada produk populer) memicu fenomena *information overload* dan *decision fatigue*.

Pengguna terbebani membaca ratusan ulasan satu per satu untuk menggali aspek penting seperti kualitas material, performa fungsi, keaslian/kesesuaian deskripsi, hingga keamanan pengiriman. Banyak informasi berharga tertimbun di balik ulasan template singkat ("barang bagus", "mantap") atau ulasan yang hanya mengomentari kurir pengiriman.

Selain itu, pembeli membutuhkan ulasan yang menyertakan foto autentik untuk memverifikasi wujud fisik asli produk di tangan konsumen nyata. Kondisi ini memperpanjang *user journey* evaluasi produk dan memicu keraguan (*buyer's remorse*). Oleh karena itu, fitur **Ulasan Relevan** dirancang untuk menstrukturkan ulasan, merangkum poin esensial (kelebihan & kekurangan), dan mempermudah penemuan foto produk asli.

### 1.2 Product Vision
Mewujudkan pengalaman evaluasi produk yang transparan, terstruktur, cepat, dan terpercaya di Tokopedia, memberdayakan calon pembeli untuk mengambil keputusan transaksi dengan penuh keyakinan (*high confidence, zero cognitive overload*).

### 1.3 Target User & Persona
Target pengguna adalah calon pembeli e-commerce yang mengandalkan ulasan sebelum checkout, diwakili oleh persona:
- **Nama:** Muhammad Alfarizi Hardiansyah
- **Usia:** 21 tahun
- **Pekerjaan:** Mahasiswa
- **Karakteristik:** Teliti, melek teknologi, memiliki anggaran terbatas, sangat mempertimbangkan ulasan negatif dan foto asli sebelum membeli gadget/elektronik.

---

## 2. User Problems & Problem Statement

### 2.1 Daftar Permasalahan Pengguna
| ID | Permasalahan Utama | Dampak UX terhadap Pengguna |
|---|---|---|
| **P-01** | Pengguna kesulitan menyaring ulasan berdasarkan aspek spesifik produk (misal: hanya ingin mengecek ketahanan baterai atau kualitas suara). | Beban kognitif tinggi karena harus membaca banyak ulasan yang tidak relevan. |
| **P-02** | Rangkuman kelebihan dan kekurangan produk tidak tersedia secara instan; tersebar di ribuan ulasan acak. | Pengguna membutuhkan waktu riset lebih lama dan rawan membatalkan niat beli (*abandonment*). |
| **P-03** | Pengguna sulit membedakan apakah keluhan tertentu adalah cacat manufaktur umum atau sekadar insiden tunggal pembeli tertentu. | Menimbulkan ketidakpastian risiko yang menghambat penyelesaian transaksi. |
| **P-04** | Pengguna kesulitan menemukan ulasan yang melampirkan foto autentik produk. | Pengguna ragu apakah produk yang diterima sama persis dengan foto promosi penjual (*expectation gap*). |

### 2.2 Problem Statement
*"Calon pembeli Tokopedia memerlukan metode yang ringkas, terstruktur, dan objektif dalam mengevaluasi ribuan ulasan produk, agar dapat memverifikasi kualitas fisik, fungsi, kelemahan, serta keabsahan produk secara cepat tanpa mengalami kelelahan informasi."*

---

## 3. Product Goals & Success Metrics

### 3.1 Product Goals
1. Mengurangi waktu rata-rata evaluasi ulasan produk (*Time on Task*) hingga minimal 50%.
2. Meningkatkan *Task Completion Rate* dalam menemukan kelemahan dan foto asli produk hingga $\ge 85\%$.
3. Menghadirkan antarmuka evaluasi ulasan yang human-centered dan memenuhi skor *System Usability Scale (SUS)* $\ge 70$.

### 3.2 Success Metrics
| ID | Indikator Keberhasilan | Target |
|---|---|---|
| **SM-01** | Keberhasilan menemukan ulasan aspek tertentu | $\ge 85\%$ pengguna uji berhasil dalam $\le 20$ detik |
| **SM-02** | Keberhasilan menemukan ulasan berfoto | $\ge 90\%$ pengguna uji berhasil dalam $\le 10$ detik |
| **SM-03** | Pemahaman kelebihan & kekurangan via ringkasan | $\ge 85\%$ pengguna uji dapat menyebutkan poin utama secara tepat |
| **SM-04** | Skor Kemudahan Penggunaan (System Usability Scale) | Skor SUS $\ge 70$ (Grade B+ / Good) |

---

## 4. Functional Requirements (FR)

| ID | Nama Fitur | Deskripsi dan Perilaku Antarmuka | Prioritas |
|---|---|---|---|
| **FR-01** | Filter Aspek Ulasan | Kontrol filter chip horizontal (Kualitas, Fungsi, Kesesuaian, Pengiriman). Mendukung *active state*, visual counter, dan reset instan. | Must Have |
| **FR-02** | Pengelompokan Ulasan | Pengelompokan dinamis daftar ulasan sesuai aspek yang dipilih dengan tetap menampilkan konteks ulasan asli. | Must Have |
| **FR-03** | Ringkasan Kelebihan & Kekurangan | Visual card berpasangan (Pros & Cons) yang memuat poin ringkasan objektif, persentase sentimen, dan tautan ke ulasan sumber. | Must Have |
| **FR-04** | Identifikasi Keluhan Umum | Komponen agregasi topik keluhan berulang lengkap dengan indikator keparahan (*severity*), frekuensi pembeli, dan tips mitigasi. | Should Have |
| **FR-05** | Filter Ulasan dengan Foto & Modal Lightbox | Toggle filter khusus ulasan berfoto dan galeri modal lightbox untuk inspeksi detail foto produk asli. | Must Have |

---

## 5. Non-Functional Requirements (NFR)
- **NFR-01 (Performance):** Respons interaksi filter $\le 100\text{ ms}$ tanpa page reload.
- **NFR-02 (Usability & Accessibility):** Memenuhi rasio kontras warna WCAG 2.1 AA ($\ge 4.5:1$) dan ukuran target sentuh minimal $44 \times 44\text{ px}$.
- **NFR-03 (Responsive Layout):** Konsistensi tata letak pada viewport smartphone ($390\text{ px}$) dan desktop ($>768\text{ px}$).
- **NFR-04 (Traceability & Trust):** Setiap ringkasan harus memiliki rujukan langsung (*citation*) ke ulasan asli pembeli (BR-08).

---

## 6. Business Rules (BR)
- **BR-01:** Filter aspek menyaring ulasan sesuai metadata tag aspek tanpa menghilangkan integritas data ulasan.
- **BR-02:** Pengguna dapat mengombinasikan filter aspek dan filter foto secara bersamaan (kombinasi multi-filter).
- **BR-03:** Jika filter menghasilkan 0 ulasan, sistem wajib menyajikan *Empty State* yang informatif disertai tombol *Reset Filter* (BR-04, AC-08).
- **BR-04:** Ulasan asli tidak boleh disembunyikan secara permanen; ringkasan berperan sebagai lapisan sintesis di atas data faktual ulasan pembeli (BR-08).

---
*Dokumen ini merupakan bagian dari Spesifikasi UX Lengkap Eksperimen B (Worksheet 12).*
