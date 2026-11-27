# DESIGN SYSTEM
**Project:** Ulasan Relevan – Tokopedia  
**Version:** 1.0  
**Status:** Draft  
**Reference:** PRD.md (versi belum ditentukan), UX-SPEC.md v1.0  

---

## 1. Design Direction

### 1.1 Design Concept
**Modern Marketplace: Clean, Trustworthy, dan Information-Focused.**  
Karakteristik desain:
- Antarmuka bersih dan minimalis.
- Hierarki visual yang jelas dan mengutamakan keterbacaan.
- Spacing konsisten.
- Latar netral dengan hijau sebagai identitas utama.
- Card untuk mengelompokkan informasi.
- Interaksi sederhana dan mudah dikenali.
- Responsif pada desktop, tablet, dan mobile.

### 1.2 Design Principles
- **Clarity:** Informasi ulasan harus mudah dibaca.
- **Consistency:** Seluruh bagian menggunakan aturan visual yang sama.
- **Simplicity:** Hindari elemen dekoratif yang tidak diperlukan.
- **Accessibility:** Pastikan kontras warna dan keterbacaan memadai.
- **Scalability:** Komponen harus dapat digunakan kembali.

---

## 2. Color System

### 2.1 Primary Colors
| Token | Hex | Usage |
|---|---|---|
| Primary | `#03AC0E` | Tombol utama, identitas visual, elemen aktif |
| Primary Dark | `#008A0A` | Hover dan active state |
| Primary Light | `#E8F8E9` | Background elemen aktif atau terpilih |
| Primary Soft | `#F3FBF3` | Background area pendukung |

### 2.2 Neutral Colors
| Token | Hex | Usage |
|---|---|---|
| Background | `#F5F6F8` | Background halaman |
| Surface | `#FFFFFF` | Card dan panel |
| Border | `#E5E7EB` | Garis pembatas |
| Text Primary | `#212121` | Judul dan teks utama |
| Text Secondary | `#6D7588` | Deskripsi dan informasi tambahan |
| Text Muted | `#9AA0A6` | Metadata |

### 2.3 Semantic Colors
| Token | Hex | Usage |
|---|---|---|
| Success | `#16A34A` | Informasi positif |
| Warning | `#F59E0B` | Peringatan |
| Danger | `#DC2626` | Informasi negatif |
| Info | `#2563EB` | Informasi umum |

### 2.4 Rating and Filter State Colors
| Status | Color | Background |
|---|---|---|
| Bintang aktif | `#F59E0B` | Tidak berlaku |
| Bintang tidak aktif | `#D1D5DB` | Tidak berlaku |
| Filter terpilih | `#008A0A` (teks), `#03AC0E` (border) | `#E8F8E9` |
| Filter tidak terpilih | `#212121` (teks), `#E5E7EB` (border) | `#FFFFFF` |

*Warna tidak boleh menjadi satu-satunya penanda status. Warna rating tidak boleh digunakan untuk menunjukkan status filter.*

---

## 3. Typography System

### 3.1 Font Family
- **Primary Font:** Inter
- **Fallback:** `system-ui`, `sans-serif`

### 3.2 Typography Scale
| Token | Size | Weight | Usage |
|---|---|---|---|
| Display | 32px | 700 | Sorotan angka, misalnya rating rata-rata |
| H1 | 28px | 700 | Page title |
| H2 | 22px | 700 | Section heading |
| H3 | 18px | 600 | Card heading |
| Body Large | 16px | 400 | Main content |
| Body | 14px | 400 | Default text |
| Body Small | 13px | 400 | Secondary text |
| Caption | 12px | 400 | Metadata |
| Button | 14px | 600 | Button text |

**Line height:**
- Heading: 1.2–1.4
- Body: 1.5
- Caption: 1.4

---

## 4. Spacing System
Gunakan kelipatan 4px.
| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Small inline gap |
| `space-2` | 8px | Compact spacing |
| `space-3` | 12px | Component spacing |
| `space-4` | 16px | Standard padding dan jarak antarkartu minimal |
| `space-5` | 20px | Section spacing |
| `space-6` | 24px | Card spacing |
| `space-8` | 32px | Large section spacing |
| `space-10` | 40px | Page separation |
| `space-12` | 48px | Major layout spacing |

---

## 5. Layout System

### 5.1 Main Layout
- **Desktop:**
  - Sidebar: tidak berlaku.
  - Grid fleksibel; informasi produk dapat dua kolom dan ringkasan tiga kolom.
  - Page padding: 32px.
  - Content maximum width: 1440px, berada di tengah pada layar lebar.
- **Tablet:**
  - Grid dapat berubah menjadi dua kolom.
  - Page padding: 24px.
- **Mobile:**
  - Single-column layout.
  - Page padding: 16px.
  - Primary actions selebar penuh.

### 5.2 Responsive Breakpoints
| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | Single column |
| Tablet | 640–1023px | Adaptive layout |
| Desktop | ≥ 1024px | Multi-column layout |
| Wide Desktop | ≥ 1440px | Maximum content width |

---

## 6. Component Design Specifications

### 6.1 Buttons
- **Types:**
  - Primary Button: background Primary (`#03AC0E`), teks putih.
  - Secondary Button: background putih, border Border (`#E5E7EB`), teks Text Primary (`#212121`).
  - Disabled Button: warna netral dan tidak menerima interaksi.
  - Icon Button: untuk aksi seperti menutup preview.
- **Specifications:**
  - Default height: 40px.
  - Horizontal padding: 16px.
  - Border radius: 8px.
  - Font size: 14px.
  - Font weight: 600.
  - Transition: 150ms.

### 6.2 Filter Controls
- **Types:**
  - Filter Chip (filter aspek).
  - Toggle (Dengan Foto).
- **Specifications Filter Chip:**
  - Default: background putih, border abu-abu, teks gelap.
  - Selected: background Primary Light (`#E8F8E9`), border Primary (`#03AC0E`), teks Primary Dark (`#008A0A`), font weight 600.
  - Hover: background netral atau Primary Light.
  - Border radius: 8px.
- **Specifications Toggle:**
  - Memiliki label yang jelas ("Dengan Foto").
  - Aktif menggunakan warna Primary (`#03AC0E`); nonaktif menggunakan warna netral.

### 6.3 Cards
- **Specifications:**
  - Background: `#FFFFFF`.
  - Border: 1px solid `#E5E7EB`.
  - Border radius: 12px.
  - Padding: 20px.
  - Shadow: subtle.
  - Card spacing: 16px.
- **Types:**
  - Product Information Card: foto, nama, harga, rating, jumlah ulasan, dan nama toko.
  - Review Summary Card: Kelebihan, Kekurangan, dan Keluhan Umum dengan heading jelas, bullet list, ikon pendukung, tanpa paragraf panjang.
  - Review Card: identitas reviewer, rating, tanggal, badge aspek, isi ulasan, dan foto opsional berukuran responsif.

### 6.4 Aspect Badge
- **Specifications:**
  - Border radius: 999px.
  - Padding: 4px 10px.
  - Font size: 12px.
  - Font weight: 500.
  - Background netral dengan teks yang tetap terbaca.
- **Variants:**
  - Kualitas
  - Fungsi
  - Kesesuaian dengan Deskripsi
  - Pengiriman

### 6.5 Modal
- Background: white.
- Border radius: 12px.
- Maximum width: 480px.
- Padding: 24px.
- Overlay: dark translucent background.
- Usage: Preview foto ulasan, dengan tombol tutup.

---

## 7. Review Component

### 7.1 Review Section
- Review overview (rating rata-rata dan total ulasan).
- Tiga kartu ringkasan (Kelebihan, Kekurangan, Keluhan Umum).
- Filter chip aspek.
- Toggle Dengan Foto.
- Daftar review card.

### 7.2 Empty State
- Ikon atau ilustrasi sederhana.
- Judul: **Tidak ada ulasan ditemukan.**
- Deskripsi: *"Coba ubah pilihan aspek atau nonaktifkan filter foto untuk melihat ulasan lainnya."*
- Tombol: **Tampilkan Semua Ulasan**

---

## 8. Iconography (Lucide Icons)
- Standard size: 20px. Small: 16px. Large: 24px.
- Rating: `Star`
- Photo filter: `Image`
- Kelebihan: `CircleCheck`
- Kekurangan: `CircleMinus`
- Keluhan Umum: `CircleAlert`
- Close preview: `X`

---

## 9. Design Tokens
```json
{
  "color": {
    "primary": "#03AC0E",
    "primaryDark": "#008A0A",
    "primaryLight": "#E8F8E9",
    "primarySoft": "#F3FBF3",
    "background": "#F5F6F8",
    "surface": "#FFFFFF",
    "border": "#E5E7EB",
    "textPrimary": "#212121",
    "textSecondary": "#6D7588",
    "textMuted": "#9AA0A6",
    "success": "#16A34A",
    "warning": "#F59E0B",
    "danger": "#DC2626",
    "info": "#2563EB"
  },
  "radius": {
    "sm": "8px",
    "md": "12px",
    "full": "999px"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  }
}
```

*End of DESIGN-SYSTEM v1.0*
