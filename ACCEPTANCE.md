# ACCEPTANCE CRITERIA & USABILITY EVALUATION (ACCEPTANCE)
## Matriks Pengujian Penerimaan & Evaluasi SUS
**Fitur:** Ulasan Relevan – Tokopedia  
**Target Metrik:** SUS Score $\ge 70$, Task Completion $\ge 85\%$  

---

## 1. Traceability Matrix Kebutuhan vs Kriteria Penerimaan

| ID Masalah | Kebutuhan Fungsional | ID Kriteria Penerimaan | Skenario Uji Pengguna | Kriteria Kelulusan |
|---|---|---|---|---|
| **P-01** | FR-01, FR-02 | **AC-01, AC-02, AC-03** | Pengguna memilih chip aspek *"Kualitas"* atau *"Fungsi"*. | Daftar ulasan langsung menyaring ulasan sesuai aspek yang dipilih dalam $\le 100\text{ ms}$. |
| **P-02** | FR-03 | **AC-06** | Pengguna membaca ringkasan kelebihan dan kekurangan pada tab Ringkasan. | Poin pros & cons tampil terstruktur dengan persentase sentimen dan rujukan ke ulasan sumber. |
| **P-03** | FR-04 | **AC-07** | Pengguna membuka tab *"Keluhan Sering Muncul"*. | Masalah berulang ditampilkan lengkap dengan frekuensi pembeli, badge keparahan, dan tombol verifikasi ulasan asli. |
| **P-04** | FR-05 | **AC-04, AC-05** | Pengguna mencentang toggle *"Hanya Ulasan dengan Foto"* dan mengklik foto. | Hanya ulasan berfoto yang muncul, dan foto dapat dibuka dalam modal lightbox resolusi penuh. |
| **Umum** | BR-04 | **AC-08** | Pengguna mengaktifkan kombinasi filter yang menghasilkan 0 ulasan. | Muncul tampilan Empty State yang sopan dan terdapat tombol satu-klik untuk mereset filter. |
| **Umum** | NFR-03 | **AC-10** | Pengguna mengganti ukuran layar antara Mobile ($390\text{ px}$) dan Desktop. | Layout responsif menyesuaikan proporsi tanpa ada elemen teks yang terpotong atau rusak. |

---

## 2. Protokol Usability Testing (Worksheet 12)

### Skenario Tugas (Task Scenarios):
1. **Task 1 (Eksplorasi Kelemahan):** "Cari tahu apa kekurangan utama dari produk earbuds ini sebelum Anda memutuskan untuk membelinya."
   - *Jalur Sukses:* Membuka ulasan relevan $\rightarrow$ membaca kartu kekurangan pada ringkasan $\rightarrow$ menemukan info kabel pendek dan ANC di tempat bising.
2. **Task 2 (Filter Aspek Kualitas):** "Tampilkan hanya ulasan-ulasan yang membahas kualitas suara dan fisik barang."
   - *Jalur Sukses:* Mengklik chip "Kualitas" $\rightarrow$ memverifikasi ulasan terfilter.
3. **Task 3 (Inspeksi Fisik Barang Asli):** "Lihat foto fisik asli barang yang diterima oleh pembeli lain dalam ukuran besar."
   - *Jalur Sukses:* Mengaktifkan filter ulasan berfoto $\rightarrow$ mengklik salah satu thumbnail foto $\rightarrow$ melihat modal zoom.
4. **Task 4 (Evaluasi Frekuensi Keluhan):** "Cek apakah keluhan tentang kabel charger dialami oleh banyak pembeli atau hanya satu orang."
   - *Jalur Sukses:* Membuka tab Keluhan Umum $\rightarrow$ melihat frekuensi 18 pembeli.

---

## 3. Kuisioner System Usability Scale (SUS) Standar

Untuk mengukur SM-04 (Skor SUS $\ge 70$), pengujian prototipe menggunakan 10 pertanyaan standar dengan skala Likert 1-5:

1. Saya merasa akan sering menggunakan fitur Ulasan Relevan ini saat berbelanja di Tokopedia.
2. Saya merasa fitur ini terlalu rumit untuk digunakan. *(Reverse code)*
3. Saya merasa fitur ini sangat mudah digunakan.
4. Saya merasa membutuhkan bantuan orang lain atau panduan teknis untuk menggunakan fitur ini. *(Reverse code)*
5. Saya merasa berbagai fungsi dalam fitur ini terintegrasi dengan sangat baik.
6. Saya merasa terdapat banyak inkonsistensi pada fitur ini. *(Reverse code)*
7. Saya merasa kebanyakan orang akan dapat memahami fitur ini dengan sangat cepat.
8. Saya merasa antarmuka fitur ini membingungkan dan canggung. *(Reverse code)*
9. Saya merasa sangat percaya diri menggunakan fitur ini saat mengevaluasi produk.
10. Saya perlu mempelajari banyak hal baru sebelum dapat menguasai fitur ini. *(Reverse code)*

**Rumus Penghitungan Skor SUS:**
$$\text{Skor SUS} = 2.5 \times \left[ \sum (\text{Skor Ganjil} - 1) + \sum (5 - \text{Skor Genap}) \right]$$
Target: Skor $\ge 70$ (Predikat *"Good / Acceptable"*).
