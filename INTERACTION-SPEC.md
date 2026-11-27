# INTERACTION SPECIFICATION
**Project:** Ulasan Relevan – Tokopedia  
**Version:** 1.0  
**Status:** Draft  
**References:**
- PRD.md (versi belum ditentukan)
- UX-SPEC.md v1.0
- DESIGN-SYSTEM.md v1.0

---

## 1. Interaction Overview

### 1.1 Objective
Mendefinisikan seluruh perilaku dan respons elemen interaktif pada fitur Ulasan Relevan agar implementasi prototype konsisten, dapat diprediksi, dan mudah digunakan.

### 1.2 Interaction Principles
- **Immediate Feedback:** Setiap tindakan pengguna mendapatkan respons yang dapat dipahami; perubahan filter memperbarui daftar secara langsung.
- **Predictability:** Perilaku komponen dan kombinasi filter harus konsisten.
- **Real Functionality:** Setiap elemen interaktif memiliki fungsi nyata.
- **User Control:** Pengguna dapat mengubah, menonaktifkan, dan mengatur ulang filter.
- **State Consistency:** Status interaksi terlihat jelas dan daftar selalu sesuai dengan filter aktif.
- **Local State:** Interaksi tidak bergantung pada backend; perubahan tampilan menggunakan state lokal dan mock data. Persistensi tidak berlaku.

---

## 2. Global Interaction Behavior

### 2.1 Navigation
Ketika pengguna menggunakan navigasi:
| Action | Expected Behavior |
|---|---|
| Memilih Ulasan | Menampilkan bagian ulasan pada halaman yang sama |
| Memilih Detail Produk atau Spesifikasi | Menampilkan bagian terkait; isi bagian belum ditentukan |
| Memilih foto ulasan | Membuka preview foto |
| Menutup preview | Kembali ke daftar ulasan |

Aturan:
- Kondisi aktif harus memiliki indikator visual.
- Navigasi tidak boleh menghasilkan halaman kosong atau membawa pengguna keluar dari prototype tanpa kebutuhan.
- Perpindahan bagian dan preview mempertahankan pilihan filter.

### 2.2 Global Loading & Error Handling
- Karena prototype menggunakan mock data lokal, loading server tidak diperlukan.
- Skeleton sederhana boleh digunakan saat komponen pertama kali ditampilkan jika diperlukan.
- Gambar gagal dimuat: tampilkan fallback atau placeholder gambar.
- Hasil filter kosong: tampilkan empty state.

---

## 3. Aspect Filter Interaction

### 3.1 Trigger
Pengguna memilih salah satu chip aspek pada bagian Ulasan Relevan.

### 3.2 Interaction Flow
1. Pengguna memilih aspek.
2. Sistem menandai aspek tersebut sebagai aktif.
3. Aspek sebelumnya menjadi tidak aktif.
4. Sistem menyaring ulasan berdasarkan aspek dan status filter foto.
5. Daftar ulasan diperbarui, atau empty state ditampilkan jika tidak ada hasil.

### 3.3 Field Interaction
| Pilihan | Hasil |
|---|---|
| Semua | Seluruh ulasan yang memenuhi filter lainnya |
| Kualitas | Ulasan kategori Kualitas |
| Fungsi | Ulasan kategori Fungsi |
| Kesesuaian dengan Deskripsi | Ulasan kategori Kesesuaian dengan Deskripsi |
| Pengiriman | Ulasan kategori Pengiriman |

### 3.4 Validation Rules
- Hanya satu aspek dapat dipilih dalam satu waktu (single selection).
- Nilai default: Semua.
- Memilih Semua menghilangkan pembatasan aspek.
- Filter aspek dapat dikombinasikan dengan filter foto.

---

## 4. Photo Filter Interaction

### 4.1 Trigger
Pengguna mengaktifkan atau menonaktifkan toggle Dengan Foto.

### 4.2 Behavior
- Status default toggle adalah nonaktif (OFF).
- Ketika diaktifkan, hanya ulasan yang memiliki foto yang ditampilkan.
- Ketika dinonaktifkan, ulasan tanpa foto dapat ditampilkan kembali.
- Daftar ulasan diperbarui langsung.
- Aspek yang dipilih tetap dipertahankan saat toggle berubah.

---

## 5. Reset Filter Interaction
Ketika reset dipilih (misal: tombol *"Tampilkan Semua Ulasan"*):
- Aspek kembali menjadi **Semua**.
- Filter foto kembali **nonaktif**.
- Daftar ulasan menampilkan seluruh mock review (5 ulasan).
- Ringkasan ulasan tetap ditampilkan.

---

## 6. Review List Interaction & Photo Preview
- Review card bersifat informatif dan memuat nama pengguna, rating, tanggal, kategori aspek, teks ulasan, serta foto jika tersedia.
- Klik foto ulasan: foto ditampilkan dalam modal atau lightbox.
- Klik tombol tutup atau tekan tombol `Escape`: preview ditutup dan pengguna kembali ke daftar ulasan.

---

## 7. Combined Filter Interaction (Logika AND)
Filter aspek dan foto harus menggunakan **logika AND**. Ulasan yang tidak memenuhi salah satu kondisi tidak ditampilkan.
Contoh: aspek Fungsi dengan filter foto ON hanya menampilkan ulasan kategori Fungsi yang memiliki foto (1 hasil: Dimas).

---

## 8. Review Summary Interaction
### 8.1 Summary Groups
| Kelompok | Isi |
|---|---|
| Kelebihan | Suara cukup jernih; baterai cukup awet; desain nyaman digunakan |
| Kekurangan | Mikrofon kurang optimal; koneksi terkadang terputus; material kurang kokoh dari ekspektasi |
| Keluhan Umum | Koneksi Bluetooth terkadang terputus; mikrofon kurang jelas saat panggilan |

Ringkasan tidak berubah ketika filter daftar ulasan berubah dan tidak diklaim sebagai analisis AI real-time.

---

## 9. Product Information & Mock Review Data

### 9.1 Product Summary
| Properti | Nilai |
|---|---|
| Nama | Headphone Wireless Bluetooth |
| Harga | Rp249.000 |
| Rating | 4.8 |
| Jumlah Ulasan | 1.250 |
| Toko | Audio Store |

### 9.2 Review Mock Data (5 Ulasan Simulasi)
| Reviewer | Rating | Aspek | Foto | Teks Ulasan |
|---|---|---|---|---|
| **Andi** | 5 | Kualitas | Ya | "Kualitas suara cukup jernih dan nyaman digunakan untuk mendengarkan musik." |
| **Siti** | 4 | Fungsi | Tidak | "Baterai cukup awet, tetapi koneksi terkadang terputus ketika digunakan agak jauh dari perangkat." |
| **Budi** | 3 | Kesesuaian dengan Deskripsi | Ya | "Produk sesuai deskripsi, tetapi material terasa sedikit berbeda dari ekspektasi." |
| **Rina** | 5 | Pengiriman | Tidak | "Barang sampai dengan aman dan dikemas dengan baik." |
| **Dimas** | 3 | Fungsi | Ya | "Mikrofon kurang jelas ketika digunakan untuk panggilan telepon." |

---

## 10. Empty State Interaction
- **Kondisi:** Tidak ada ulasan yang memenuhi kombinasi filter (misal: *Pengiriman + Dengan Foto*).
- **Pesan:** *"Tidak ada ulasan ditemukan. Coba ubah pilihan aspek atau nonaktifkan filter foto untuk melihat ulasan lainnya."*
- **Aksi:** Tombol *"Tampilkan Semua Ulasan"*.

---

## 11. Data Consistency (Filter Implementation Logic)
```javascript
const filteredReviews = reviews.filter((review) => {
  const matchesAspect =
    selectedAspect === "Semua" ||
    review.aspect === selectedAspect;
 
  const matchesPhoto =
    !photoOnly || review.hasPhoto;
 
  return matchesAspect && matchesPhoto;
});
```

*End of INTERACTION-SPEC v1.0*
