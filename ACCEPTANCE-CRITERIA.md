# ACCEPTANCE CRITERIA
**Project:** Ulasan Relevan – Tokopedia  
**Version:** 1.0  
**Status:** Draft  
**References:**
- PRD.md (versi belum ditentukan)
- UX-SPEC.md v1.0
- DESIGN-SYSTEM.md v1.0
- INTERACTION-SPEC.md v1.0

---

## 1. Purpose
Dokumen ini mendefinisikan kriteria penerimaan untuk fitur Ulasan Relevan – Tokopedia.
Tujuannya adalah memastikan bahwa prototype:
- Memenuhi kebutuhan pengguna yang didefinisikan dalam PRD.
- Mengimplementasikan alur dan struktur UX sesuai UX-SPEC.
- Menggunakan komponen visual sesuai DESIGN-SYSTEM.
- Memiliki perilaku interaksi sesuai INTERACTION-SPEC.
- Berfungsi secara konsisten dan dapat diuji langsung.

Pengujian tidak mencakup integrasi backend, database, API Tokopedia, atau analisis AI.

---

## 2. Acceptance Criteria Convention
Setiap kriteria memiliki:
- **ID:** Identitas kriteria.
- **Requirement:** Kondisi yang harus dipenuhi.
- **Expected Result:** Hasil yang diharapkan.
- **Priority:** Tingkat kepentingan.
- **Verification:** Cara memverifikasi.

### Priority
| Priority | Description |
|---|---|
| Must Have | Wajib terpenuhi agar fitur dapat diterima |
| Should Have | Penting, tetapi tidak menghalangi fungsi utama |
| Could Have | Peningkatan kualitas jika waktu memungkinkan |

### Verification Method
- **Manual Test:** Pengujian langsung oleh pengguna atau penguji.
- **Automated Test:** Pengujian menggunakan skrip.
- **Visual Inspection:** Pemeriksaan tampilan dan konsistensi desain.
- **Integration Test:** Pemeriksaan integrasi antarkomponen atau layanan.

---

## 3. Functional Acceptance Criteria

### 3.1 Product Information and Review Section
#### AC-001 — Product Information
**Priority:** Must Have | **Verification:** Manual Test, Visual Inspection  
Given pengguna membuka halaman prototype,  
When halaman selesai ditampilkan,  
Then sistem harus:
- Menampilkan informasi produk.
- Menampilkan nama dan harga produk.
- Menampilkan rating dan jumlah ulasan.
- Menampilkan informasi toko.

#### AC-002 — Review Section
**Priority:** Must Have | **Verification:** Manual Test  
Given pengguna berada pada halaman produk,  
When pengguna menuju bagian ulasan,  
Then sistem harus:
- Menyediakan bagian ulasan yang dapat ditemukan.
- Menampilkan ringkasan ulasan.
- Menampilkan daftar ulasan.

---

## 4. Aspect Filter Acceptance Criteria
#### AC-003 — Aspect Filter
**Priority:** Must Have | **Verification:** Manual Test, Automated Test  
Given daftar ulasan telah ditampilkan,  
When pengguna memilih salah satu aspek,  
Then sistem harus:
- Menandai aspek terpilih dengan visual state aktif.
- Memperbarui daftar ulasan.
- Hanya menampilkan ulasan dengan aspek yang sesuai.

#### AC-004 — Change Aspect
**Priority:** Must Have | **Verification:** Manual Test  
Given pengguna telah memilih suatu aspek,  
When pengguna memilih aspek lain,  
Then sistem harus:
- Menonaktifkan aspek sebelumnya.
- Mengaktifkan aspek baru.
- Menyesuaikan daftar ulasan dengan aspek terbaru.

#### AC-005 — All Reviews
**Priority:** Must Have | **Verification:** Manual Test, Automated Test  
Given pengguna sedang menggunakan filter aspek,  
When pengguna memilih Semua,  
Then sistem harus menghapus filter aspek dan menampilkan seluruh ulasan yang memenuhi filter lainnya.

---

## 5. Photo and Combined Filter Acceptance Criteria
#### AC-006 — Photo Filter
**Priority:** Must Have | **Verification:** Manual Test, Automated Test  
Given daftar ulasan tersedia,  
When pengguna mengaktifkan filter Dengan Foto,  
Then status filter harus menjadi aktif dan hanya ulasan yang memiliki foto yang ditampilkan.

#### AC-007 — Disable Photo Filter
**Priority:** Must Have | **Verification:** Manual Test  
Given filter foto sedang aktif,  
When pengguna menonaktifkannya,  
Then sistem harus:
- Mengembalikan status filter menjadi nonaktif.
- Memungkinkan ulasan tanpa foto tampil kembali.
- Mempertahankan filter aspek yang dipilih sebelumnya.

#### AC-008 — Combined Filter
**Priority:** Must Have | **Verification:** Manual Test, Automated Test  
Given pengguna memilih aspek dan mengaktifkan filter foto,  
When kedua filter diterapkan,  
Then sistem harus menggunakan logika AND dan hanya menampilkan ulasan yang memenuhi kedua kondisi.

### Test Data Validation
Gunakan lima data ulasan simulasi berikut. Data ini bukan keseluruhan 1.250 ulasan yang tertera pada informasi produk.

| Reviewer | Aspek | Memiliki Foto |
|---|---|---|
| Andi | Kualitas | Ya |
| Siti | Fungsi | Tidak |
| Budi | Kesesuaian dengan Deskripsi | Ya |
| Rina | Pengiriman | Tidak |
| Dimas | Fungsi | Ya |

**Ekspektasi jumlah hasil:**
| Pengujian | Jumlah Hasil |
|---|---|
| Semua | 5 |
| Kualitas | 1 |
| Fungsi | 2 |
| Kesesuaian dengan Deskripsi | 1 |
| Pengiriman | 1 |
| Semua + Foto | 3 |
| Fungsi + Foto | 1 |
| Kualitas + Foto | 1 |
| Pengiriman + Foto | 0 |

---

## 6. Review Summary Acceptance Criteria
#### AC-009 — Review Summary
**Priority:** Must Have | **Verification:** Manual Test, Visual Inspection  
Given pengguna membuka bagian Ulasan Relevan,  
When ringkasan ditampilkan,  
Then sistem harus:
- Menampilkan kelebihan, kekurangan, dan keluhan umum.
- Menampilkan isi yang konsisten dengan mock data.
- Tidak mengklaim ringkasan sebagai hasil analisis AI real-time.
- Tidak mengubah ringkasan ketika filter daftar berubah.

---

## 7. Review List Acceptance Criteria
#### AC-010 — Review Card
**Priority:** Must Have | **Verification:** Manual Test, Visual Inspection  
Given daftar ulasan memiliki hasil,  
When review card ditampilkan,  
Then sistem harus:
- Menampilkan nama reviewer, rating, dan tanggal.
- Menampilkan aspek dan teks ulasan.
- Menampilkan foto jika tersedia.

#### AC-011 — Review Photo Preview
**Priority:** Must Have | **Verification:** Manual Test  
Given review card memiliki foto,  
When pengguna memilih foto,  
Then sistem harus:
- Memperbesar atau membuka foto dalam preview.
- Memungkinkan pengguna menutup preview.
- Mengembalikan pengguna ke daftar ulasan.

---

## 8. Empty State and Reset Acceptance Criteria
#### AC-012 — Empty State
**Priority:** Must Have | **Verification:** Manual Test, Visual Inspection  
Given tidak terdapat ulasan yang sesuai dengan filter aktif,  
When filter diterapkan,  
Then sistem harus:
- Tidak menampilkan data yang tidak sesuai.
- Menampilkan empty state.
- Memberikan petunjuk dan tindakan untuk mengubah filter.

#### AC-013 — Reset Filter
**Priority:** Must Have | **Verification:** Manual Test, Automated Test  
Given pengguna telah menerapkan satu atau lebih filter,  
When pengguna memilih tindakan reset,  
Then sistem harus:
- Mengembalikan filter aspek ke Semua.
- Menonaktifkan filter foto.
- Menampilkan seluruh ulasan mock data.

---

## 9. User Experience Acceptance Criteria
#### AC-014 — Filter Feedback
**Priority:** Must Have | **Verification:** Manual Test, Visual Inspection  
Given pengguna berada pada bagian Ulasan Relevan,  
When pengguna mengubah filter,  
Then sistem harus memperbarui daftar tanpa memuat ulang halaman dan memperlihatkan filter yang aktif.

#### AC-015 — Responsive Layout
**Priority:** Must Have | **Verification:** Visual Inspection, Manual Test  
Given aplikasi diakses menggunakan desktop, tablet, atau mobile,  
When halaman ditampilkan,  
Then sistem harus:
- Desktop: konten tidak terpotong dan tata letak proporsional.
- Tablet: komponen menyesuaikan lebar tanpa bertumpuk secara tidak wajar.
- Mobile: konten satu kolom, filter dapat digunakan, dan tombol mudah disentuh.
- Tidak ada horizontal overflow pada halaman utama.

#### AC-016 — No Fake Functionality
**Priority:** Must Have | **Verification:** Manual Test  
Kriteria:
- Tidak ada tombol yang terlihat aktif tetapi tidak berfungsi.
- Tidak ada status transaksi palsu.
- Tidak ada simulasi login yang tidak dibutuhkan.
- Tidak ada klaim integrasi Tokopedia.

---

## 10. Design System Acceptance Criteria
#### AC-017 — Color Consistency
**Priority:** Must Have | **Verification:** Visual Inspection  
Semua komponen harus menggunakan warna yang konsisten dengan DESIGN-SYSTEM.md.

#### AC-018 — Typography and Spacing Consistency
**Priority:** Should Have | **Verification:** Visual Inspection  
Seluruh bagian harus menggunakan tipografi, hierarki teks, dan spacing yang telah ditentukan.

#### AC-019 — Component Consistency
**Priority:** Must Have | **Verification:** Visual Inspection  
Button, chip, toggle, card, badge, modal, dan komponen lain harus memiliki gaya, radius, dan border yang konsisten.

#### AC-020 — Filter State Indicator
**Priority:** Must Have | **Verification:** Visual Inspection  
Filter aktif dan nonaktif harus dapat dibedakan secara konsisten dan tidak hanya melalui warna.

---

## 11. Non-Functional Acceptance Criteria
#### AC-021 — Performance
**Priority:** Should Have | **Verification:** Performance Test  
Kriteria:
- Halaman utama ditargetkan tampil dalam waktu maksimal 3 detik pada kondisi pengujian yang wajar.
- Interaksi utama memberikan respons tanpa jeda yang mengganggu.

#### AC-022 — Local Mock Data
**Priority:** Must Have | **Verification:** Manual Test, Integration Test  
Kriteria:
- Prototype menggunakan data lokal.
- Data produk dan ulasan konsisten.
- Filter bekerja terhadap data yang tersedia.
- Tidak memerlukan koneksi ke API Tokopedia.

#### AC-023 — Accessibility
**Priority:** Should Have | **Verification:** Accessibility Test, Manual Test  
Kriteria:
- Teks dapat dibaca dan kontras memadai.
- Kontrol memiliki label yang jelas.
- Seluruh fungsi utama dapat dioperasikan dengan keyboard.
- Fokus keyboard terlihat.
- Preview foto dapat ditutup dengan tombol Escape.

---

## 12. Edge Case Acceptance Criteria
#### AC-024 — Repeated Filter Changes
**Priority:** Must Have | **Verification:** Manual Test, Automated Test  
Given daftar ulasan ditampilkan,  
When pengguna mengganti filter berulang kali,  
Then sistem tidak boleh menghasilkan error, hasil duplikat, atau state filter yang saling bertentangan.

#### AC-025 — Combination Without Results
**Priority:** Must Have | **Verification:** Manual Test, Automated Test  
Given pengguna memilih aspek Pengiriman,  
When pengguna mengaktifkan filter Dengan Foto,  
Then jumlah hasil harus 0 dan empty state ditampilkan.

#### AC-026 — Image Unavailable
**Priority:** Should Have | **Verification:** Manual Test  
Given sebuah gambar tidak tersedia atau gagal dimuat,  
When halaman ditampilkan,  
Then sistem harus menampilkan placeholder tanpa merusak layout.

---

## 13. Release Acceptance
Prototype dapat dinyatakan memenuhi versi 1.0 apabila:
- Seluruh kriteria Must Have telah lulus pengujian.
- Tidak terdapat bug kritis yang menghalangi fungsi utama.
- Filter aspek dan foto berjalan dengan benar.
- Kombinasi filter menghasilkan data yang sesuai.
- Empty state dan reset bekerja.
- Tampilan responsif dan konsisten dengan design system.
- Seluruh komponen utama sesuai PRD dan dokumen spesifikasi.

---

## 14. Test Execution Report
### Test Scenarios
| ID | Skenario | Hasil yang Diharapkan | Criteria ID | Status |
|---|---|---|---|---|
| TS-01 | Membuka halaman | Informasi produk dan ulasan tampil | AC-001, AC-002 | Pass |
| TS-02 | Memilih Kualitas | Hanya ulasan Kualitas tampil | AC-003 | Pass |
| TS-03 | Memilih Fungsi | Hanya ulasan Fungsi tampil | AC-003, AC-004 | Pass |
| TS-04 | Memilih Semua | Seluruh ulasan tampil | AC-005 | Pass |
| TS-05 | Mengaktifkan Dengan Foto | Hanya ulasan dengan foto tampil | AC-006 | Pass |
| TS-06 | Menonaktifkan Dengan Foto | Ulasan tanpa foto dapat tampil kembali | AC-007 | Pass |
| TS-07 | Memilih Fungsi + Foto | Hanya ulasan Fungsi dengan foto tampil | AC-008 | Pass |
| TS-08 | Memilih kombinasi tanpa hasil | Empty state tampil | AC-012, AC-025 | Pass |
| TS-09 | Melakukan reset | Seluruh filter kembali ke kondisi awal | AC-013 | Pass |
| TS-10 | Membuka foto ulasan | Foto dapat diperbesar | AC-011 | Pass |
| TS-11 | Menutup foto | Kembali ke daftar ulasan | AC-011 | Pass |
| TS-12 | Membuka di mobile | Layout menyesuaikan layar | AC-015 | Pass |

*End of ACCEPTANCE-CRITERIA v1.0*
