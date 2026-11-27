# AI AGENT SPECIFICATION & CONTEXT (AGENTS)
## Pedoman Konstruksi AI Coding Agent untuk Antarmuka UX-Driven
**Proyek:** Fitur Ulasan Relevan – Tokopedia (Eksperimen B)  
**Tujuan:** Memberikan instruksi dan batasan komprehensif bagi AI Agent dalam mengonstruksi kode antarmuka yang human-centered, presisi secara UX, dan sesuai dengan 5 dokumen spesifikasi lainnya.  

---

## 1. Peran & Batasan AI Agent
Agen bertindak sebagai **Lead UX Engineer & Frontend Architect** yang membangun implementasi prototipe web berdasarkan dokumen PRD, UX-SPEC, DESIGN-SYS, INTERACTION, dan ACCEPTANCE.

Agen dilarang:
- Membuat komponen tanpa tujuan UX yang jelas.
- Mengabaikan kondisi kosong (*Empty State*) atau kondisi batas (*Edge Cases*).
- Menghilangkan tautan ke data asli (*Traceability*) saat menyajikan ringkasan.
- Mengabaikan standar kontras warna dan ukuran target klik mobile ($44\text{ px}$).

---

## 2. Prinsip Heuristik Nielsen yang Wajib Dipenuhi

1. **Visibility of System Status (Heuristik #1):**
   - Tampilkan indikator filter aktif yang jelas (highlight chip dan jumlah hasil ulasan yang cocok).
   - Tampilkan efek transisi / loading halus saat berpindah antar filter ulasan.
2. **Match Between System and Real World (Heuristik #2):**
   - Menggunakan istilah bahasa Indonesia yang akrab bagi pembeli Tokopedia: *"Ulasan Pembeli"*, *"Terverifikasi"*, *"Kualitas Suara"*, *"Kesesuaian Deskripsi"*.
3. **User Control and Freedom (Heuristik #3):**
   - Tombol *"Reset Filter"* instan dan tombol tutup modal `✕` yang mudah diakses.
   - Dukungan beralih antara Mode Prototipe Hi-Fi dan Mode Wireframe Lo-Fi kapan saja.
4. **Consistency and Standards (Heuristik #4):**
   - Mengikuti Tokopedia Design System (warna hijau `#00AA5B`, radius sudut rounded-xl, font Open Sans / sans-serif).
5. **Recognition Rather than Recall (Heuristik #6):**
   - Semua opsi filter disajikan di depan mata dalam bentuk chip horizontal, bukan menu tersembunyi.
6. **Aesthetic and Minimalist Design (Heuristik #8):**
   - Jangan membebani layar dengan teks panjang yang padat; kelompokkan ke dalam kartu-kartu ringkas yang mudah dipindai (*scannable layout*).

---

## 3. Checklist Kualitas Kode UX
- [x] Mendukung simulasi perangkat Mobile ($390\text{ px}$) dan Desktop secara responsif.
- [x] Menyediakan toggle Wireframe Grayscale murni (hitam putih) untuk kebutuhan screenshot laporan Worksheet 12.
- [x] Terdapat 5 layar/state yang saling terhubung dalam satu alur yang utuh.
- [x] Semua tombol dan chip memiliki *hover*, *active*, dan *touch feedback*.
