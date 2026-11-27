# DESIGN SYSTEM SPECIFICATION (DESIGN-SYS)
## Tokopedia UI Token & Component Library (Zeus / UNIFY Foundation)
**Proyek:** Fitur Ulasan Relevan – Tokopedia  
**Versi:** 2.0  

---

## 1. Color Palette Tokens

| Token Name | Hex Code | Deskripsi & Aturan Penggunaan |
|---|---|---|
| `--color-primary-main` | `#00AA5B` | Hijau Utama Tokopedia. Digunakan untuk CTA primer, chip aktif, dan aksen brand. |
| `--color-primary-hover` | `#038848` | Hijau gelap untuk hover state dan header bar navigasi. |
| `--color-primary-surface` | `#E8F5E9` | Hijau sangat muda untuk latar belakang chip aktif, badge official store, dan highlight. |
| `--color-neutral-900` | `#212121` | Teks utama, judul produk, nama pembeli (kontras tinggi WCAG AAA). |
| `--color-neutral-600` | `#6D7588` | Teks sekunder, deskripsi, tanggal ulasan, label placeholder. |
| `--color-neutral-300` | `#E4E7E9` | Garis batas (border), divider, separator kartu. |
| `--color-neutral-100` | `#F5F5F7` | Latar belakang canvas abu-abu lembut khas aplikasi Tokopedia. |
| `--color-accent-orange` | `#FF5722` | Label diskon, status mendesak (*urgent*), badge keluhan sedang. |
| `--color-accent-yellow` | `#FFAB00` | Bintang rating ulasan produk. |

---

## 2. Typography Scale

Menggunakan font keluarga `Open Sans` dan fallback `system-ui, -apple-system, sans-serif`:

| Skala Tipografi | Ukuran (px) | Weight | Line Height | Contoh Penggunaan |
|---|---|---|---|---|
| `Heading-XL` | 20px / 1.25rem | 800 (Extrabold) | 28px | Harga utama produk |
| `Heading-LG` | 16px / 1.00rem | 700 (Bold) | 24px | Judul produk, Judul Modal |
| `Heading-MD` | 14px / 0.875rem | 700 (Bold) | 20px | Subjudul section, Judul Pros/Cons |
| `Body-Regular` | 12px / 0.75rem | 400 (Regular) | 18px | Isi ulasan pembeli, detail deskripsi |
| `Body-Bold` | 12px / 0.75rem | 600 (Semibold) | 18px | Nama reviewer, Tombol CTA |
| `Caption` | 10px / 0.625rem | 600 (Semibold) | 14px | Badge aspek, tanggal, persentase |

---

## 3. Spacing & Elevation System (8pt Grid)

- **Spacing Tokens:**
  - `space-1`: 4px (padding badge mikro)
  - `space-2`: 8px (jarak antar tag/chip)
  - `space-3`: 12px (padding internal kartu ulasan)
  - `space-4`: 16px (padding horizontal container utama)
  - `space-6`: 24px (jarak antar section besar)
- **Elevation Tokens:**
  - `elevation-card`: `0 1px 3px rgba(0, 0, 0, 0.06)` (Border tipis `#E4E7E9` + subtle shadow)
  - `elevation-modal`: `0 20px 25px -5px rgba(0, 0, 0, 0.25)` (Backdrop blur `rgba(0,0,0,0.75)`)
  - `elevation-sticky`: `0 -2px 10px rgba(0, 0, 0, 0.05)` (Bottom sticky buy bar)

---

## 4. Component Anatomy

### 4.1 Filter Chip (Aspek Ulasan)
- **Default State:** Background `#F5F5F7`, border transparent, teks `#6D7588`, pill counter `#E4E7E9`.
- **Hover State:** Background `#E4E7E9`.
- **Active State:** Background `#00AA5B`, teks putih, font-weight 700, pill counter putih semi-transparan (`rgba(255,255,255,0.2)`).

### 4.2 Pros & Cons Synthesis Cards (FR-03)
- **Pros Card:** Border `#A7F3D0` (Emerald-200), latar `#ECFDF5`, icon checkmark hijau, badge persentase sentimen.
- **Cons Card:** Border `#FDE68A` (Amber-200), latar `#FFFBEB`, icon alert kuning/oranye, badge frekuensi keluhan.

### 4.3 Photo Lightbox Modal (FR-05)
- Header gelap dengan tombol dismiss `✕` yang mudah dijangkau.
- Area display gambar berlatar hitam pekat (`#000000`) dengan mode `object-contain`.
- Area keterangan ulasan di bagian bawah berlatar putih dengan font legible dan kutipan pembeli asli.

### 4.4 Wireframe Mode Tokens (Low-Fidelity Grayscale)
- Palet warna: Murni `#000000`, `#FFFFFF`, dan shades of `#6B7280` / `#E5E7EB`.
- Komponen gambar: Box blueprint bergaris putus-putus (`border-dashed border-gray-400`) dengan icon silang `✕`.
