# Changelog – Eksperimen B: UX-Driven (PRD + 6 Spesifikasi UX)

Semua riwayat pengembangan, perbaikan UX, dan pembaruan pada repositori [PRD-Skill2](https://github.com/ajisss24/PRD-Skill2.git) dicatat di file ini.

---

## [2.0.0] - 2026-11-27
### Added
- **Paket Dokumentasi 6 Spesifikasi UX Lengkap**:
  - `PRD.md`: Product Requirements Document versi UX 2.0 yang diselaraskan dengan target SUS $\ge 70$.
  - `UX-SPEC.md`: Spesifikasi UX formal (Persona Muhammad Alfarizi, Mental Model, IA, Cognitive Load).
  - `DESIGN-SYS.md`: Tokopedia Design System tokens (warna `#00AA5B`, 8pt grid, tipografi, komponen).
  - `INTERACTION.md`: Spesifikasi interaksi mikro, transisi tab, animasi lightbox, dan feedback sentuh.
  - `ACCEPTANCE.md`: Matriks kriteria penerimaan AC-01 s/d AC-10 dan instrumen kuisioner System Usability Scale (SUS).
  - `AGENTS.md`: Pedoman konstruksi AI Coding Agent berpedoman pada 10 Heuristik Nielsen.
  - `WIREFRAME.md`: Blueprint struktural low-fidelity 5 layar untuk pengisian lembar kerja Worksheet 12.
- **Implementasi Prototipe Web UX-Driven**:
  - Tampilan visual yang presisi mengadopsi standar Tokopedia UNIFY / Zeus Design System.
  - Alur 5 layar terhubung: PDP $\rightarrow$ Ringkasan Pros/Cons $\rightarrow$ Filter Aspek $\rightarrow$ Filter Foto & Lightbox $\rightarrow$ Keluhan Umum & Empty State.
  - Dukungan interaktif **Mode Wireframe Lo-Fi (B&W Grayscale)** dengan box placeholder gambar (`✕`) dan banner penanda wireframe.
  - Dukungan simulasi tampilan Mobile Viewport ($390\text{ px}$) dan Desktop Viewport ($>768\text{ px}$).
  - Konfigurasi otomatis deployment GitHub Pages via GitHub Actions dan branch `gh-pages`.

### Changed
- Peningkatan hierarki visual kartu ringkasan kelebihan dan kekurangan dengan persentase kepuasan dan tautan sitasi ulasan asli (BR-08).
- Optimalisasi transisi status filter aspek dengan feedback responsif $\le 50\text{ ms}$.
- Penyempurnaan empty state dengan pesan empati dan tombol pemulihan satu klik.
