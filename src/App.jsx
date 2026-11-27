import React, { useState, useEffect } from 'react';
import {
  productData,
  aspectCategories,
  reviewSummary,
  mockReviews
} from './data/reviewsData';
import {
  Star,
  Search,
  ShoppingCart,
  Bell,
  ChevronLeft,
  ChevronRight,
  Filter,
  Image as ImageIcon,
  CircleCheck,
  CircleMinus,
  CircleAlert,
  X,
  Share2,
  Heart,
  RotateCcw,
  Smartphone,
  Monitor,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export default function App() {
  // Navigation & Screen States
  // Screen IDs: 1: 'pdp', 2: 'reviews_summary', 3: 'aspect_filter', 4: 'photo_filter', 5: 'complaints_empty'
  const [currentScreen, setCurrentScreen] = useState('pdp');
  
  // Interactive Filter States (Sesuai INTERACTION-SPEC.md Bab 3 & 4)
  const [selectedAspect, setSelectedAspect] = useState('Semua');
  const [photoOnly, setPhotoOnly] = useState(false);
  const [selectedPhotoPreview, setSelectedPhotoPreview] = useState(null);
  const [activeTab, setActiveTab] = useState('ulasan'); // 'detail' | 'spesifikasi' | 'ulasan'
  const [viewMode, setViewMode] = useState('mobile'); // 'mobile' | 'desktop'
  const [mode, setMode] = useState('prototype'); // 'prototype' | 'wireframe'

  // Keyboard accessibility: Escape key closes photo preview (AC-023)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedPhotoPreview) {
        setSelectedPhotoPreview(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoPreview]);

  // Combined Filter Logic: Sesuai INTERACTION-SPEC.md Bab 7 & 13 (Logika AND)
  const filteredReviews = mockReviews.filter((review) => {
    const matchesAspect =
      selectedAspect === 'Semua' || review.aspect === selectedAspect;
    const matchesPhoto = !photoOnly || review.hasPhoto;
    return matchesAspect && matchesPhoto;
  });

  // Reset Filter Function: Sesuai INTERACTION-SPEC.md Bab 5 & AC-013
  const handleResetFilters = () => {
    setSelectedAspect('Semua');
    setPhotoOnly(false);
  };

  // Helper navigasi alur 5 layar
  const navigateTo = (screenId, aspect = null, photo = null) => {
    setCurrentScreen(screenId);
    if (aspect !== null) setSelectedAspect(aspect);
    if (photo !== null) setPhotoOnly(photo);
    setActiveTab('ulasan');
  };

  return (
    <div
      className={`min-h-screen ${
        mode === 'wireframe' ? 'bg-gray-200' : 'bg-[#F5F6F8]'
      } text-[#212121] flex flex-col items-center transition-colors duration-200`}
    >
      {/* Top Header Control Panel (Alur Prototipe & Verifikasi Worksheet 12) */}
      <header
        className={`w-full ${
          mode === 'wireframe'
            ? 'bg-gray-900 border-b border-gray-700'
            : 'bg-[#008A0A]'
        } text-white py-2 px-4 shadow-md sticky top-0 z-50 transition-colors duration-200`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              {mode === 'wireframe' ? 'Mode Wireframe' : 'Eksperimen B: UX-Driven'}
            </span>
            <span className="font-semibold hidden sm:inline">
              {mode === 'wireframe'
                ? 'Blueprint Struktur & Tata Letak Low-Fidelity'
                : 'Worksheet 12 UX – Fitur Ulasan Relevan Tokopedia'}
            </span>
          </div>

          {/* Quick Flow Jumpers (5 Screens Checklist Sesuai Worksheet 12) */}
          <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-full">
            <span className="text-white/80 mr-1 font-medium hidden lg:inline">Alur Layar:</span>
            <button
              onClick={() => navigateTo('pdp', 'Semua', false)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                currentScreen === 'pdp'
                  ? 'bg-white text-gray-900 font-bold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              1. Detail Produk
            </button>
            <button
              onClick={() => navigateTo('reviews_summary', 'Semua', false)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                currentScreen === 'reviews_summary'
                  ? 'bg-white text-gray-900 font-bold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              2. Ringkasan Ulasan
            </button>
            <button
              onClick={() => navigateTo('aspect_filter', 'Kualitas', false)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                currentScreen === 'aspect_filter'
                  ? 'bg-white text-gray-900 font-bold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              3. Filter Aspek
            </button>
            <button
              onClick={() => navigateTo('photo_filter', 'Semua', true)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                currentScreen === 'photo_filter'
                  ? 'bg-white text-gray-900 font-bold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              4. Filter Foto & Modal
            </button>
            <button
              onClick={() => navigateTo('complaints_empty', 'Pengiriman', true)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                currentScreen === 'complaints_empty'
                  ? 'bg-white text-gray-900 font-bold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              5. Keluhan & Empty State
            </button>
          </div>

          {/* Switcher Mode: Hi-Fi Prototype vs Lo-Fi Wireframe */}
          <div className="flex items-center gap-1 bg-black/30 p-0.5 rounded-lg border border-white/20">
            <button
              onClick={() => setMode('prototype')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition flex items-center gap-1 ${
                mode === 'prototype'
                  ? 'bg-white text-[#008A0A] shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>✨ Prototipe Hi-Fi</span>
            </button>
            <button
              onClick={() => setMode('wireframe')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition flex items-center gap-1 ${
                mode === 'wireframe'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
              title="Tampilkan Wireframe Hitam Putih / Grayscale"
            >
              <span>📐 Wireframe Lo-Fi (B&W)</span>
            </button>
          </div>

          {/* Device Viewport Toggle (AC-015: Desktop & Mobile) */}
          <div className="flex items-center gap-1 bg-black/20 p-0.5 rounded-lg">
            <button
              onClick={() => setViewMode('mobile')}
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition ${
                viewMode === 'mobile' ? 'bg-white text-gray-900 font-bold' : 'text-white/80'
              }`}
              title="Tampilan Smartphone (390px)"
            >
              <Smartphone className="w-3.5 h-3.5" /> Mobile
            </button>
            <button
              onClick={() => setViewMode('desktop')}
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition ${
                viewMode === 'desktop' ? 'bg-white text-gray-900 font-bold' : 'text-white/80'
              }`}
              title="Tampilan Desktop Penuh"
            >
              <Monitor className="w-3.5 h-3.5" /> Desktop
            </button>
          </div>
        </div>
      </header>

      {/* Main Container / Simulated Device Frame */}
      <main className="w-full flex justify-center py-4 px-2 sm:px-4">
        <div
          className={`bg-white shadow-2xl transition-all duration-300 overflow-hidden flex flex-col ${
            viewMode === 'mobile'
              ? 'w-full max-w-[430px] rounded-[36px] border-[8px] border-gray-800 min-h-[844px]'
              : 'w-full max-w-4xl rounded-2xl border border-[#E5E7EB] min-h-[800px]'
          }`}
          style={
            mode === 'wireframe'
              ? {
                  filter: 'grayscale(100%) contrast(110%)',
                  WebkitFilter: 'grayscale(100%) contrast(110%)'
                }
              : {}
          }
        >
          {/* Wireframe Banner on Top of Device */}
          {mode === 'wireframe' && (
            <div className="bg-gray-900 text-white text-[10px] font-mono py-1 px-3 text-center uppercase tracking-widest border-b border-gray-700 flex items-center justify-center gap-2 select-none">
              <span>📐 LOW-FIDELITY WIREFRAME (GRAYSCALE STRUKTUR & INFORMASI)</span>
            </div>
          )}

          {/* Tokopedia App Bar Header (Sesuai DESIGN-SYSTEM.md Primary #03AC0E) */}
          <div className="bg-[#03AC0E] text-white px-4 py-3 flex items-center justify-between gap-3 sticky top-0 z-40">
            {currentScreen !== 'pdp' ? (
              <button
                onClick={() => setCurrentScreen('pdp')}
                className="p-1 rounded-full hover:bg-white/20 transition flex items-center gap-1 text-sm font-medium"
              >
                <ChevronLeft className="w-6 h-6" />
                <span className="hidden sm:inline">Kembali</span>
              </button>
            ) : (
              <div className="font-extrabold text-lg tracking-tight">tokopedia</div>
            )}

            {/* Search Bar */}
            <div className="flex-1 relative">
              <input
                type="text"
                readOnly
                value="Headphone Wireless Bluetooth"
                className="w-full bg-white text-gray-800 text-xs sm:text-sm pl-8 pr-3 py-1.5 rounded-lg border-none focus:outline-none placeholder-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2" />
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-2">
              <button className="relative p-1 hover:bg-white/20 rounded-full transition">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="relative p-1 hover:bg-white/20 rounded-full transition">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-bold px-1 rounded-full">
                  1
                </span>
              </button>
            </div>
          </div>

          {/* Subheader Navigasi Produk (Sesuai UX-SPEC.md Bab 3.2: Detail Produk, Spesifikasi, Ulasan) */}
          <div className="bg-white border-b border-[#E5E7EB] px-4 flex gap-6 text-xs font-semibold">
            <button
              onClick={() => setCurrentScreen('pdp')}
              className={`py-2.5 border-b-2 transition ${
                currentScreen === 'pdp'
                  ? 'border-[#03AC0E] text-[#008A0A]'
                  : 'border-transparent text-[#6D7588] hover:text-[#212121]'
              }`}
            >
              Detail Produk
            </button>
            <button
              onClick={() => navigateTo('reviews_summary')}
              className={`py-2.5 border-b-2 transition ${
                currentScreen !== 'pdp'
                  ? 'border-[#03AC0E] text-[#008A0A]'
                  : 'border-transparent text-[#6D7588] hover:text-[#212121]'
              }`}
            >
              Ulasan ({productData.totalReviews})
            </button>
          </div>

          {/* CONTENT ROUTING */}
          <div className="flex-1 overflow-y-auto">
            {/* ======================================================== */}
            {/* LAYAR 1: INFORMASI PRODUK (PAGE-01 & AC-001)             */}
            {/* ======================================================== */}
            {currentScreen === 'pdp' && (
              <div className="pb-24">
                {/* Product Image Showcase */}
                <div className="relative bg-gray-100 aspect-square sm:aspect-[4/3] flex items-center justify-center overflow-hidden">
                  {mode === 'wireframe' ? (
                    <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-600 font-mono p-4 text-center select-none">
                      <div className="w-16 h-16 border-2 border-gray-400 flex items-center justify-center text-xl font-bold mb-2">
                        ✕
                      </div>
                      <span className="font-bold text-xs">[ WIREFRAME: FOTO PRODUK ]</span>
                      <span className="text-[10px] text-gray-500 mt-0.5">
                        Headphone Wireless Bluetooth • Placeholder
                      </span>
                    </div>
                  ) : (
                    <img
                      src={productData.images[0]}
                      alt={productData.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] px-2.5 py-1 rounded-full">
                    1 / {productData.images.length} Foto
                  </div>
                </div>

                {/* Product Information Card (AC-001) */}
                <div className="p-4 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#E8F8E9] text-[#008A0A] text-[10px] font-bold px-2 py-0.5 rounded">
                      Official Store
                    </span>
                    <span className="text-[12px] text-[#6D7588]">
                      Toko: <strong className="text-[#212121]">{productData.seller}</strong> ({productData.city})
                    </span>
                  </div>

                  <h1 className="text-base sm:text-lg font-bold text-[#212121] leading-snug">
                    {productData.name}
                  </h1>

                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#03AC0E]">
                      Rp{productData.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  {/* Rating & Review Counter (AC-001) */}
                  <div className="mt-2 flex items-center gap-2 text-xs text-[#6D7588]">
                    <div className="flex items-center gap-1 font-bold text-[#212121]">
                      <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      <span>{productData.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{productData.totalReviews} Ulasan</span>
                  </div>
                </div>

                {/* Section Review Teaser (AC-002) */}
                <div className="p-4 bg-[#F3FBF3] border-y border-[#E8F8E9] my-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#03AC0E] flex items-center justify-center text-white shadow">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="bg-[#03AC0E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                        Fitur Ulasan Relevan
                      </span>
                      <h2 className="text-sm font-bold text-[#212121]">
                        Ulasan Relevan & Ringkasan
                      </h2>
                    </div>
                  </div>
                  <p className="text-xs text-[#6D7588] mt-2">
                    Temukan ulasan berdasarkan aspek (Kualitas, Fungsi, Kesesuaian, Pengiriman) dan ringkasan kelebihan/kekurangan produk.
                  </p>

                  <button
                    onClick={() => navigateTo('reviews_summary')}
                    className="w-full mt-3 bg-[#03AC0E] hover:bg-[#008A0A] text-white py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition"
                  >
                    <span>Lihat Ulasan Relevan ({mockReviews.length} Ulasan Terverifikasi)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Sticky Action Button */}
                <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-[#E5E7EB] p-3 flex items-center gap-2 z-40">
                  <button className="flex-1 border border-[#03AC0E] text-[#03AC0E] py-2 rounded-lg text-xs font-bold hover:bg-[#E8F8E9]">
                    + Keranjang
                  </button>
                  <button className="flex-1 bg-[#03AC0E] text-white py-2 rounded-lg text-xs font-bold hover:bg-[#008A0A]">
                    Beli Langsung
                  </button>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* LAYAR 2-5: SECTION ULASAN RELEVAN (PAGE-02 s/d PAGE-05)  */}
            {/* ======================================================== */}
            {currentScreen !== 'pdp' && (
              <div className="p-4 space-y-4 pb-20">
                {/* 1. Review Overview (Rating Rata-Rata & Total Ulasan - AC-001, AC-002) */}
                <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-xs flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#212121]">
                      Ulasan Pembeli
                    </h3>
                    <p className="text-xs text-[#6D7588]">
                      Berdasarkan {productData.totalReviews} ulasan keseluruhan
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-[#212121]">
                      {productData.rating}
                    </span>
                    <div className="flex text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Review Summary Cards (AC-009 & DESIGN-SYSTEM.md Bab 6.3) */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-[#212121] uppercase tracking-wider">
                    Ringkasan Ulasan (Kelebihan, Kekurangan, & Keluhan Umum)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Kartu Kelebihan */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#E5E7EB] shadow-xs">
                      <div className="flex items-center gap-1.5 mb-2 text-[#16A34A] font-bold text-xs">
                        <CircleCheck className="w-4 h-4" />
                        <span>Kelebihan</span>
                      </div>
                      <ul className="text-xs text-[#212121] space-y-1.5 list-disc list-inside">
                        {reviewSummary.kelebihan.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kartu Kekurangan */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#E5E7EB] shadow-xs">
                      <div className="flex items-center gap-1.5 mb-2 text-[#DC2626] font-bold text-xs">
                        <CircleMinus className="w-4 h-4" />
                        <span>Kekurangan</span>
                      </div>
                      <ul className="text-xs text-[#212121] space-y-1.5 list-disc list-inside">
                        {reviewSummary.kekurangan.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kartu Keluhan Umum */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#E5E7EB] shadow-xs">
                      <div className="flex items-center gap-1.5 mb-2 text-[#F59E0B] font-bold text-xs">
                        <CircleAlert className="w-4 h-4" />
                        <span>Keluhan Umum</span>
                      </div>
                      <ul className="text-xs text-[#212121] space-y-1.5 list-disc list-inside">
                        {reviewSummary.keluhanUmum.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. Filter Controls: Aspect Filter Chip & Photo Toggle (AC-003 s/d AC-008) */}
                <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#212121] flex items-center gap-1.5">
                      <Filter className="w-4 h-4 text-[#03AC0E]" />
                      Filter Aspek Produk:
                    </span>

                    {(selectedAspect !== 'Semua' || photoOnly) && (
                      <button
                        onClick={handleResetFilters}
                        className="text-xs text-[#DC2626] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Reset Filter (AC-013)
                      </button>
                    )}
                  </div>

                  {/* Aspect Filter Chips (DESIGN-SYSTEM.md Bab 6.2) */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                    {aspectCategories.map((aspect) => {
                      const isSelected = selectedAspect === aspect;
                      return (
                        <button
                          key={aspect}
                          onClick={() => {
                            setSelectedAspect(aspect);
                            setCurrentScreen('aspect_filter');
                          }}
                          className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                            isSelected
                              ? 'bg-[#E8F8E9] border-[#03AC0E] text-[#008A0A] font-semibold'
                              : 'bg-white border-[#E5E7EB] text-[#212121] hover:bg-[#F5F6F8]'
                          }`}
                        >
                          {aspect}
                        </button>
                      );
                    })}
                  </div>

                  {/* Toggle Dengan Foto (AC-006, AC-007) */}
                  <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={photoOnly}
                        onChange={(e) => {
                          setPhotoOnly(e.target.checked);
                          setCurrentScreen(e.target.checked ? 'photo_filter' : 'aspect_filter');
                        }}
                        className="w-4 h-4 text-[#03AC0E] rounded border-[#E5E7EB] focus:ring-[#03AC0E] accent-[#03AC0E]"
                      />
                      <span className="text-xs font-semibold text-[#212121] flex items-center gap-1">
                        <ImageIcon className="w-3.5 h-3.5 text-[#03AC0E]" />
                        Dengan Foto
                      </span>
                    </label>

                    <span className="text-[11px] text-[#6D7588]">
                      Hasil: <strong>{filteredReviews.length}</strong> ulasan
                    </span>
                  </div>
                </div>

                {/* 4. Review List / Empty State (AC-010, AC-012, AC-025) */}
                <div className="space-y-3">
                  {filteredReviews.length === 0 ? (
                    /* Empty State Sesuai DESIGN-SYSTEM.md Bab 7.2 & AC-012 */
                    <div className="bg-white rounded-xl p-8 text-center border border-[#E5E7EB]">
                      <div className="w-12 h-12 bg-[#F5F6F8] rounded-full flex items-center justify-center mx-auto mb-3 text-[#9AA0A6]">
                        <Search className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-bold text-[#212121] mb-1">
                        Tidak ada ulasan ditemukan.
                      </h4>
                      <p className="text-xs text-[#6D7588] max-w-xs mx-auto mb-4">
                        Coba ubah pilihan aspek atau nonaktifkan filter foto untuk melihat ulasan lainnya.
                      </p>
                      <button
                        onClick={handleResetFilters}
                        className="bg-[#03AC0E] hover:bg-[#008A0A] text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
                      >
                        Tampilkan Semua Ulasan
                      </button>
                    </div>
                  ) : (
                    /* Review Cards (AC-010) */
                    filteredReviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="bg-white rounded-xl p-4 border border-[#E5E7EB] shadow-xs space-y-2"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            {mode === 'wireframe' ? (
                              <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-400 flex items-center justify-center text-[10px] font-mono text-gray-700 font-bold shrink-0">
                                USR
                              </div>
                            ) : (
                              <img
                                src={rev.avatar}
                                alt={rev.reviewer}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            )}
                            <div>
                              <strong className="text-xs font-bold text-[#212121] block">
                                {rev.reviewer}
                              </strong>
                              <span className="text-[11px] text-[#9AA0A6]">
                                {rev.date}
                              </span>
                            </div>
                          </div>

                          <div className="flex text-[#F59E0B]">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                            ))}
                          </div>
                        </div>

                        {/* Aspect Badge (DESIGN-SYSTEM.md Bab 6.4) */}
                        <div>
                          <span className="inline-block bg-[#F5F6F8] text-[#212121] text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-[#E5E7EB]">
                            Aspek: {rev.aspect}
                          </span>
                        </div>

                        {/* Review Content */}
                        <p className="text-xs text-[#212121] leading-relaxed">
                          {rev.content}
                        </p>

                        {/* Review Photo Preview (AC-011) */}
                        {rev.hasPhoto && rev.photoUrl && (
                          <div className="pt-1">
                            <div
                              onClick={() => setSelectedPhotoPreview(rev)}
                              className="w-20 h-20 rounded-lg overflow-hidden border border-[#E5E7EB] cursor-pointer relative group"
                            >
                              {mode === 'wireframe' ? (
                                <div className="w-full h-full bg-gray-100 border border-dashed border-gray-400 flex flex-col items-center justify-center text-[10px] font-mono text-gray-600">
                                  <span>✕</span>
                                  <span>Foto</span>
                                </div>
                              ) : (
                                <img
                                  src={rev.photoUrl}
                                  alt="Foto Ulasan"
                                  className="w-full h-full object-cover group-hover:scale-105 transition"
                                />
                              )}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                                <ExternalLink className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ======================================================== */}
      {/* MODAL PREVIEW FOTO (PAGE-05, AC-011, & AC-023 ESCAPE KEY)  */}
      {/* ======================================================== */}
      {selectedPhotoPreview && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-[480px] w-full overflow-hidden shadow-2xl animate-in fade-in duration-150">
            <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
              <span className="text-xs font-bold text-[#212121]">
                Foto Ulasan dari {selectedPhotoPreview.reviewer}
              </span>
              <button
                onClick={() => setSelectedPhotoPreview(null)}
                className="p-1 rounded hover:bg-gray-100 text-[#6D7588]"
                title="Tutup (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-black flex items-center justify-center max-h-[360px] overflow-hidden">
              {mode === 'wireframe' ? (
                <div className="w-full h-64 bg-gray-800 border-2 border-dashed border-gray-600 flex flex-col items-center justify-center text-gray-400 font-mono text-center p-4">
                  <span className="text-3xl font-bold mb-2">✕</span>
                  <span className="text-sm">[ PREVIEW FOTO RESOLUSI PENUH ]</span>
                  <span className="text-xs text-gray-500 mt-1">Wireframe Image Placeholder</span>
                </div>
              ) : (
                <img
                  src={selectedPhotoPreview.photoUrl}
                  alt={selectedPhotoPreview.photoCaption || 'Foto ulasan'}
                  className="max-h-[360px] w-auto object-contain"
                />
              )}
            </div>

            <div className="p-4 text-xs space-y-2">
              <p className="text-[#6D7588] italic">
                "{selectedPhotoPreview.content}"
              </p>
              <button
                onClick={() => setSelectedPhotoPreview(null)}
                className="w-full bg-[#212121] text-white py-2 rounded-lg font-semibold hover:bg-black transition"
              >
                Tutup Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <footer className="w-full text-center py-4 text-xs text-[#6D7588]">
        <p>
          Prototipe Akademik Ulasan Relevan Tokopedia – Eksperimen B (PRD Only + UX Skill).
        </p>
        <p className="text-[11px] text-[#9AA0A6] mt-0.5">
          Implementasi resmi berdasarkan 5 dokumen spesifikasi UX Skill & PRD.
        </p>
      </footer>
    </div>
  );
}
