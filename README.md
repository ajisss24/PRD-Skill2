# Prototipe Tokopedia: Fitur Ulasan Relevan (Eksperimen B - UX-Driven: PRD + 6 Spesifikasi UX)

> **Mata Kuliah:** Rekayasa Interaksi (UX) – Kelas C  
> **Tugas:** Worksheet 12 – Wireframe and Prototype (Merancang Tampilan dan Prototipe)  
> **Metode Pengembangan:** Eksperimen B (UX-Driven: Konstruksi Terpandu dengan Konteks Lengkap)  
> **Repository GitHub:** [https://github.com/ajisss24/PRD-Skill2.git](https://github.com/ajisss24/PRD-Skill2.git)  
> **Live Demo Publik:** [https://ajisss24.github.io/PRD-Skill2/](https://ajisss24.github.io/PRD-Skill2/)  

---

## 🌟 Tentang Eksperimen B (UX-Driven)
Berbeda dengan Eksperimen A (Baseline) yang hanya berpatokan pada PRD terbatas, **Eksperimen B** dibangun menggunakan pendekatan **UX-Driven menyeluruh** yang dipandu oleh **6 Dokumen Spesifikasi UX Lengkap**:

| No | Dokumen Spesifikasi | Fokus & Peran UX | Tautan Berkas |
|---|---|---|---|
| 1 | **`PRD.md`** | Persyaratan produk v2.0 yang diselaraskan dengan metrik UX | [Lihat PRD.md](./PRD.md) |
| 2 | **`UX-SPEC.md`** | Analisis Persona (Alfarizi), Mental Model, IA, dan Cognitive Load | [Lihat UX-SPEC.md](./UX-SPEC.md) |
| 3 | **`DESIGN-SYS.md`** | Tokopedia Design System (Tokopedia Green `#00AA5B`, 8pt Grid, Tokens) | [Lihat DESIGN-SYS.md](./DESIGN-SYS.md) |
| 4 | **`INTERACTION.md`** | Interaksi mikro, animasi transisi, feedback sentuh, & state model | [Lihat INTERACTION.md](./INTERACTION.md) |
| 5 | **`ACCEPTANCE.md`** | Matriks pengujian penerimaan AC-01 s/d AC-10 & protokol uji SUS ($\ge 70$) | [Lihat ACCEPTANCE.md](./ACCEPTANCE.md) |
| 6 | **`AGENTS.md`** | Panduan konstruksi sistem agen AI berbasis 10 Heuristik Nielsen | [Lihat AGENTS.md](./AGENTS.md) |

---

## 📱 Alur Interaksi 5 Layar Terhubung (Worksheet 12)
Aplikasi prototipe ini mencakup minimal 5 layar yang terintegrasi secara mulus:

1. **Layar 1 – Product Detail Page (PDP) Tokopedia:**
   - Showcase produk *SoundPulse ANC Pro*, rating 4.8 bintang (1.248 ulasan), dan varian interaktif.
   - Banner prominen *Ulasan Relevan* dengan CTA langsung menuju evaluasi ulasan terstruktur.
2. **Layar 2 – Ringkasan Cerdas Pros/Cons (FR-03):**
   - Sintesis ulasan positif (Pros: Suara, Baterai, Kenyamanan, Pengiriman) dan ulasan yang perlu diperhatikan (Cons: ANC keramaian, kabel charger).
   - Menampilkan persentase kepuasan serta rujukan ulasan sumber (*traceability*).
3. **Layar 3 – Filter Aspek Ulasan Dinamis (FR-01, FR-02):**
   - Filter chip horizontal (*Kualitas, Fungsi, Kesesuaian, Pengiriman*) dengan feedback visual instan dan tombol reset filter.
4. **Layar 4 – Filter Ulasan Berfoto & Modal Lightbox (FR-05):**
   - Menyaring hanya ulasan yang memiliki foto barang asli dari pembeli.
   - Klik thumbnail membuka pop-up modal lightbox zoom untuk verifikasi kondisi fisik.
5. **Layar 5 – Keluhan Umum (FR-04) & Penanganan Empty State (AC-08):**
   - Identifikasi masalah berulang dengan badge keparahan dan tips solusi resmi.
   - Fitur simulasi *Empty State* ketika kombinasi filter menghasilkan nol ulasan, dilengkapi tombol *Error Recovery*.

---

## 📐 Fitur Mode Wireframe Lo-Fi (Hitam Putih / Grayscale)
Pada bagian atas navigasi prototipe, tersedia tombol **`📐 Wireframe Lo-Fi (B&W)`**:
- Mengubah seluruh antarmuka ke palet grayscale hitam-putih murni tanpa warna brand.
- Mengganti seluruh media foto dengan kotak placeholder blueprint bergaris putus-putus (`✕`).
- Sangat praktis untuk di-*screenshot* dan dilampirkan pada laporan tugas **Worksheet 12**.
- Dokumentasi struktur lengkap tersedia di file [WIREFRAME.md](./WIREFRAME.md).

---

## 🛠️ Cara Menjalankan Secara Lokal

```bash
# 1. Clone repository
git clone https://github.com/ajisss24/PRD-Skill2.git

# 2. Masuk ke folder proyek
cd PRD-Skill2

# 3. Pasang dependensi
npm install

# 4. Jalankan server lokal
npm run dev
```

Buka peramban di `http://localhost:5173`.
