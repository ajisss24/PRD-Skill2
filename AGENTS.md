# AGENTS.md
## AI Coding Agent Instructions
**Project:** Ulasan Relevan – Tokopedia  
**Version:** 1.0  
**Project Type:** Interactive Web Prototype  
**Purpose:** Project-wide instructions for AI coding agents.  

---

## 1. Project Context
Anda bertindak sebagai AI Software Engineer (AI Coding Agent) yang bertanggung jawab mengimplementasikan prototype **Ulasan Relevan – Tokopedia**.

Prototype ini mendemonstrasikan:
- Pengelompokan ulasan berdasarkan aspek produk.
- Ringkasan ulasan yang berisi kelebihan dan kekurangan.
- Identifikasi keluhan umum.
- Filter ulasan yang memiliki foto.
- Kombinasi filter aspek dan foto (logika AND).
- Akses terhadap ulasan asli (mock) sebagai sumber informasi.

---

## 2. Mandatory Documentation
Sebelum melakukan perubahan kode, baca dan pahami seluruh dokumen berikut:
1. `PRD.md` — kebutuhan produk, ruang lingkup, dan persyaratan fungsional.
2. `UX-SPEC.md` — struktur informasi, halaman, alur pengguna, dan pengalaman pengguna.
3. `DESIGN-SYSTEM.md` — warna, tipografi, layout, komponen, dan aturan visual.
4. `INTERACTION-SPEC.md` — perilaku interaksi, filter, status, dan empty state.
5. `ACCEPTANCE-CRITERIA.md` — kriteria penerimaan dan persyaratan pengujian.

---

## 3. Mock Data Specification
### Data Produk:
```typescript
const product = {
  name: "Headphone Wireless Bluetooth",
  price: 249000,
  rating: 4.8,
  totalReviews: 1250,
  seller: "Audio Store"
};
```

### Data Ulasan Simulasi (5 Mock Reviews):
| Reviewer | Rating | Aspect | Has Photo | Review Text |
|---|---|---|---|---|
| **Andi** | 5 | Kualitas | true | "Kualitas suara cukup jernih dan nyaman digunakan untuk mendengarkan musik." |
| **Siti** | 4 | Fungsi | false | "Baterai cukup awet, tetapi koneksi terkadang terputus ketika digunakan agak jauh dari perangkat." |
| **Budi** | 3 | Kesesuaian dengan Deskripsi | true | "Produk sesuai deskripsi, tetapi material terasa sedikit berbeda dari ekspektasi." |
| **Rina** | 5 | Pengiriman | false | "Barang sampai dengan aman dan dikemas dengan baik." |
| **Dimas** | 3 | Fungsi | true | "Mikrofon kurang jelas ketika digunakan untuk panggilan telepon." |

### Validasi Filter Aspek & Foto:
- Semua: 5 ulasan
- Kualitas: 1 ulasan
- Fungsi: 2 ulasan
- Kesesuaian dengan Deskripsi: 1 ulasan
- Pengiriman: 1 ulasan
- Semua + Foto: 3 ulasan (Andi, Budi, Dimas)
- Fungsi + Foto: 1 ulasan (Dimas)
- Kualitas + Foto: 1 ulasan (Andi)
- Pengiriman + Foto: 0 ulasan $\rightarrow$ **Empty State**

---

## 4. Feature Implementation Rules
### Combined Filter
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

*End of AGENTS.md v1.0*
