import React, { useState } from 'react';
import {
  productData,
  aspectCategories,
  summaryData,
  commonComplaints,
  reviewsList
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
  ThumbsUp,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  X,
  Share2,
  Heart,
  RotateCcw,
  Sparkles,
  Smartphone,
  Monitor,
  ExternalLink,
  MessageSquare,
  ArrowRight,
  Check
} from 'lucide-react';

export default function App() {
  // Navigation & Screen States
  // Screen IDs: 1: 'pdp', 2: 'reviews_summary', 3: 'aspect_filter', 4: 'photo_filter', 5: 'complaints_empty'
  const [currentScreen, setCurrentScreen] = useState('pdp');
  
  // Interactive Filters
  const [selectedAspect, setSelectedAspect] = useState('Semua');
  const [onlyPhotos, setOnlyPhotos] = useState(false);
  const [selectedPhotoModal, setSelectedPhotoModal] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0]);
  const [activeTab, setActiveTab] = useState('ulasan'); // 'ulasan' | 'ringkasan' | 'keluhan'
  const [showEmptySimulation, setShowEmptySimulation] = useState(false);
  const [viewMode, setViewMode] = useState('mobile'); // 'mobile' | 'desktop'
  const [mode, setMode] = useState('prototype'); // 'prototype' | 'wireframe'
  const [isFavorite, setIsFavorite] = useState(false);
  const [highlightedReviewId, setHighlightedReviewId] = useState(null);

  // Likes Counter
  const [helpfulCounts, setHelpfulCounts] = useState(
    reviewsList.reduce((acc, r) => ({ ...acc, [r.id]: r.likes }), {})
  );
  const [hasLiked, setHasLiked] = useState({});

  const handleLike = (id) => {
    if (hasLiked[id]) {
      setHelpfulCounts((prev) => ({ ...prev, [id]: prev[id] - 1 }));
      setHasLiked((prev) => ({ ...prev, [id]: false }));
    } else {
      setHelpfulCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      setHasLiked((prev) => ({ ...prev, [id]: true }));
    }
  };

  // Filter Logic
  const getFilteredReviews = () => {
    if (showEmptySimulation) return [];

    return reviewsList.filter((rev) => {
      const aspectMatch =
        selectedAspect === 'Semua' || rev.aspects.includes(selectedAspect);
      const photoMatch = !onlyPhotos || (rev.photos && rev.photos.length > 0);
      return aspectMatch && photoMatch;
    });
  };

  const filteredReviews = getFilteredReviews();

  // Navigation Helper
  const navigateTo = (screenId, aspect = null, photo = null, empty = false) => {
    setCurrentScreen(screenId);
    setShowEmptySimulation(empty);
    setHighlightedReviewId(null);
    if (aspect !== null) setSelectedAspect(aspect);
    if (photo !== null) setOnlyPhotos(photo);
    if (screenId === 'complaints_empty') {
      setActiveTab('keluhan');
    } else if (screenId === 'reviews_summary') {
      setActiveTab('ringkasan');
    } else {
      setActiveTab('ulasan');
    }
  };

  const jumpToReview = (aspect, reviewId = null) => {
    setSelectedAspect(aspect);
    setShowEmptySimulation(false);
    setActiveTab('ulasan');
    setCurrentScreen('aspect_filter');
    if (reviewId) {
      setHighlightedReviewId(reviewId);
    }
  };

  const resetAllFilters = () => {
    setSelectedAspect('Semua');
    setOnlyPhotos(false);
    setShowEmptySimulation(false);
    setHighlightedReviewId(null);
  };

  return (
    <div
      className={`min-h-screen ${
        mode === 'wireframe' ? 'bg-gray-200' : 'bg-[#F0F3F7]'
      } text-[#212121] flex flex-col items-center transition-colors duration-200`}
    >
      {/* Top Banner Control Panel (Alur Prototipe & Verifikasi Worksheet 12) */}
      <header
        className={`w-full ${
          mode === 'wireframe'
            ? 'bg-gray-900 border-b border-gray-700'
            : 'bg-[#038848]'
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

          {/* Quick Flow Jumpers (5 Screens Checklist) */}
          <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-full">
            <span className="text-white/80 mr-1 font-medium hidden lg:inline">Alur Layar:</span>
            <button
              onClick={() => navigateTo('pdp', 'Semua', false, false)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                currentScreen === 'pdp'
                  ? 'bg-white text-gray-900 font-bold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              1. Detail Produk
            </button>
            <button
              onClick={() => navigateTo('reviews_summary', 'Semua', false, false)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                currentScreen === 'reviews_summary'
                  ? 'bg-white text-gray-900 font-bold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              2. Ulasan & Pros/Cons
            </button>
            <button
              onClick={() => navigateTo('aspect_filter', 'Kualitas', false, false)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                currentScreen === 'aspect_filter'
                  ? 'bg-white text-gray-900 font-bold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              3. Filter Aspek
            </button>
            <button
              onClick={() => navigateTo('photo_filter', 'Semua', true, false)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                currentScreen === 'photo_filter'
                  ? 'bg-white text-gray-900 font-bold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              4. Filter Foto & Modal
            </button>
            <button
              onClick={() => navigateTo('complaints_empty', 'Semua', false, false)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                currentScreen === 'complaints_empty'
                  ? 'bg-white text-gray-900 font-bold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              5. Keluhan & Empty State
            </button>
          </div>

          {/* Mode Switcher: Hi-Fi Prototype vs Lo-Fi Wireframe */}
          <div className="flex items-center gap-1 bg-black/30 p-0.5 rounded-lg border border-white/20">
            <button
              onClick={() => setMode('prototype')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition flex items-center gap-1 ${
                mode === 'prototype'
                  ? 'bg-white text-[#038848] shadow-sm'
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

          {/* Device Viewport Toggle (NFR-03 & AC-10) */}
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
              : 'w-full max-w-4xl rounded-2xl border border-gray-200 min-h-[800px]'
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

          {/* Tokopedia Mobile App Bar Header */}
          <div className="bg-[#00AA5B] text-white px-4 py-3 flex items-center justify-between gap-3 sticky top-0 z-40">
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

            {/* Simulated Search Bar */}
            <div className="flex-1 relative">
              <input
                type="text"
                readOnly
                value="TWS ANC Hi-Res Bluetooth"
                className="w-full bg-white text-gray-800 text-xs sm:text-sm pl-8 pr-3 py-1.5 rounded-lg border-none focus:outline-none placeholder-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2" />
            </div>

            {/* Header Action Icons */}
            <div className="flex items-center gap-2">
              <button className="relative p-1 hover:bg-white/20 rounded-full transition">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="relative p-1 hover:bg-white/20 rounded-full transition">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-bold px-1 rounded-full">
                  3
                </span>
              </button>
            </div>
          </div>

          {/* Subheader: User Delivery Location */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-1.5 text-[11px] text-gray-600 flex items-center justify-between">
            <div className="flex items-center gap-1 truncate">
              <span>Dikirim ke:</span>
              <strong className="text-gray-900 truncate">
                Kost Mahasiswa Alfarizi, Jakarta Selatan
              </strong>
            </div>
            <span className="text-[#00AA5B] font-semibold cursor-pointer">Ubah</span>
          </div>

          {/* CONTENT ROUTING ACCORDING TO 5 SCREENS */}
          <div className="flex-1 overflow-y-auto">
            {/* ======================================================== */}
            {/* LAYAR 1: PRODUCT DETAIL PAGE (PDP)                       */}
            {/* ======================================================== */}
            {currentScreen === 'pdp' && (
              <div className="pb-24">
                {/* Product Images Showcase */}
                <div className="relative bg-gray-100 aspect-square sm:aspect-[4/3] flex items-center justify-center overflow-hidden">
                  {mode === 'wireframe' ? (
                    <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-600 font-mono p-4 text-center select-none">
                      <div className="w-16 h-16 border-2 border-gray-400 flex items-center justify-center text-xl font-bold mb-2">
                        ✕
                      </div>
                      <span className="font-bold text-xs">[ WIREFRAME: FOTO PRODUK UTAMA ]</span>
                      <span className="text-[10px] text-gray-500 mt-0.5">
                        Dimensi 1:1 Aspect Ratio • Placeholder
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
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`p-2 rounded-full shadow transition ${
                        isFavorite
                          ? 'bg-red-50 text-red-500'
                          : 'bg-white/90 hover:bg-white text-gray-700'
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
                      />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full shadow hover:bg-white text-gray-700">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Title & Pricing */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#E8F5E9] text-[#00AA5B] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Official Store
                    </span>
                    <span className="text-[11px] text-gray-500">
                      {productData.store.city}
                    </span>
                  </div>
                  <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                    {productData.name}
                  </h1>

                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#00AA5B]">
                      Rp {productData.price.toLocaleString('id-ID')}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      Rp {productData.originalPrice.toLocaleString('id-ID')}
                    </span>
                    <span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                      {productData.discountPercentage}%
                    </span>
                  </div>

                  {/* Rating Summary Snippet */}
                  <div className="mt-3 flex items-center gap-3 text-xs text-gray-600">
                    <div className="flex items-center gap-1 font-bold text-gray-900">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{productData.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{productData.totalSold.toLocaleString('id-ID')} terjual</span>
                    <span>•</span>
                    <span className="text-[#00AA5B] font-medium">
                      {productData.satisfactionRate}% pembeli puas
                    </span>
                  </div>
                </div>

                {/* Variant Selection */}
                <div className="p-4 border-b border-gray-100">
                  <span className="text-xs font-semibold text-gray-700 block mb-2">
                    Pilih Varian Warna: <strong className="text-gray-900">{selectedVariant}</strong>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {productData.variants.map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVariant(v)}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition ${
                          selectedVariant === v
                            ? 'border-[#00AA5B] bg-[#E8F5E9] text-[#00AA5B] font-bold'
                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ======================================================== */}
                {/* PROMINENT SECTION: FITUR ULASAN RELEVAN (ENTRY POINT)   */}
                {/* ======================================================== */}
                <div className="p-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-white border-y border-emerald-200 my-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#00AA5B] flex items-center justify-center text-white shadow">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="bg-[#00AA5B] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                          Fitur Baru
                        </span>
                        <h2 className="text-sm font-bold text-gray-900">
                          Ulasan Relevan Tokopedia
                        </h2>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Evaluasi kualitas, fungsi, dan foto produk dalam sekejap tanpa harus membaca ratusan ulasan satu per satu!
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-3 text-[11px]">
                    <div className="bg-white/80 p-2 rounded-lg border border-emerald-100 flex items-center gap-1.5 text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00AA5B] shrink-0" />
                      <span>Ringkasan Kelebihan & Kekurangan</span>
                    </div>
                    <div className="bg-white/80 p-2 rounded-lg border border-emerald-100 flex items-center gap-1.5 text-gray-700">
                      <Filter className="w-3.5 h-3.5 text-[#00AA5B] shrink-0" />
                      <span>Filter Aspek & Ulasan Berfoto</span>
                    </div>
                  </div>

                  {/* Primary CTA to Open Full Relevant Reviews */}
                  <button
                    onClick={() => navigateTo('reviews_summary', 'Semua', false, false)}
                    className="w-full mt-3.5 bg-[#00AA5B] hover:bg-[#038848] text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition active:scale-[0.99]"
                  >
                    <span>Buka Ulasan Relevan & Rangkuman</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Standard Review Preview */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-sm text-gray-900">
                      Ulasan Pembeli ({productData.totalReviews})
                    </h3>
                    <button
                      onClick={() => navigateTo('reviews_summary')}
                      className="text-xs text-[#00AA5B] font-bold"
                    >
                      Lihat Semua
                    </button>
                  </div>

                  {/* Mini Rating Breakdown */}
                  <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl mb-4">
                    <div className="text-center">
                      <span className="text-2xl font-black text-gray-900">
                        {productData.rating}
                      </span>
                      <div className="flex justify-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-500">
                        {productData.totalReviews} ulasan
                      </span>
                    </div>
                    <div className="flex-1 text-xs text-gray-600 border-l border-gray-200 pl-4 space-y-1">
                      <div className="flex items-center gap-1 text-[11px]">
                        <span>★ 5</span>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[85%] h-full bg-[#00AA5B]"></div>
                        </div>
                        <span className="text-[10px] text-gray-400">85%</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px]">
                        <span>★ 4</span>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[10%] h-full bg-[#00AA5B]"></div>
                        </div>
                        <span className="text-[10px] text-gray-400">10%</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px]">
                        <span>★ 3</span>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[3%] h-full bg-[#00AA5B]"></div>
                        </div>
                        <span className="text-[10px] text-gray-400">3%</span>
                      </div>
                    </div>
                  </div>

                  {/* Sample Review */}
                  <div className="border border-gray-200 rounded-xl p-3 bg-white">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <img
                          src={reviewsList[0].userAvatar}
                          alt={reviewsList[0].userName}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-xs font-bold text-gray-900">
                          {reviewsList[0].userName}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-400">
                        {reviewsList[0].date}
                      </span>
                    </div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(reviewsList[0].rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-700 line-clamp-2">
                      {reviewsList[0].content}
                    </p>
                  </div>
                </div>

                {/* Sticky Bottom Bar on PDP */}
                <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-200 p-3 flex items-center gap-2 z-40">
                  <button className="flex-1 border border-[#00AA5B] text-[#00AA5B] py-2 rounded-xl text-xs font-bold hover:bg-emerald-50">
                    + Keranjang
                  </button>
                  <button className="flex-1 bg-[#00AA5B] text-white py-2 rounded-xl text-xs font-bold hover:bg-[#038848]">
                    Beli Langsung
                  </button>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* LAYAR 2 s/d 5: VIEW EVALUASI ULASAN RELEVAN LENGKAP     */}
            {/* ======================================================== */}
            {currentScreen !== 'pdp' && (
              <div className="pb-16">
                {/* Breadcrumb & Navigation Bar */}
                <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <span
                      onClick={() => setCurrentScreen('pdp')}
                      className="cursor-pointer hover:underline text-gray-500"
                    >
                      Produk
                    </span>
                    <span>/</span>
                    <strong className="text-gray-900 font-semibold">
                      Ulasan Relevan
                    </strong>
                  </div>

                  <span className="bg-[#E8F5E9] text-[#00AA5B] font-bold text-[10px] px-2 py-0.5 rounded-full">
                    {productData.rating} ★ ({productData.totalReviews} ulasan)
                  </span>
                </div>

                {/* Sub-Tabs: Ulasan Asli, Ringkasan AI, Keluhan Umum */}
                <div className="bg-white px-4 pt-2 border-b border-gray-200 flex gap-4 text-xs font-semibold">
                  <button
                    onClick={() => {
                      setActiveTab('ulasan');
                      setCurrentScreen('aspect_filter');
                    }}
                    className={`pb-2.5 border-b-2 transition flex items-center gap-1.5 ${
                      activeTab === 'ulasan'
                        ? 'border-[#00AA5B] text-[#00AA5B]'
                        : 'border-transparent text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Daftar Ulasan</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('ringkasan');
                      setCurrentScreen('reviews_summary');
                    }}
                    className={`pb-2.5 border-b-2 transition flex items-center gap-1.5 ${
                      activeTab === 'ringkasan'
                        ? 'border-[#00AA5B] text-[#00AA5B]'
                        : 'border-transparent text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ringkasan Kelebihan & Kekurangan</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('keluhan');
                      setCurrentScreen('complaints_empty');
                    }}
                    className={`pb-2.5 border-b-2 transition flex items-center gap-1.5 ${
                      activeTab === 'keluhan'
                        ? 'border-[#00AA5B] text-[#00AA5B]'
                        : 'border-transparent text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span>Keluhan Umum ({commonComplaints.length})</span>
                  </button>
                </div>

                {/* ======================================================== */}
                {/* SECTION FR-03: RINGKASAN KELEBIHAN & KEKURANGAN          */}
                {/* (Tampil di Layar 2 / tab Ringkasan)                      */}
                {/* ======================================================== */}
                {(activeTab === 'ringkasan' || currentScreen === 'reviews_summary') && (
                  <div className="p-4 bg-emerald-50/40 border-b border-emerald-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#00AA5B]" />
                        <h3 className="font-bold text-xs sm:text-sm text-gray-900">
                          Ringkasan Cerdas Ulasan (FR-03)
                        </h3>
                      </div>
                      <span className="text-[10px] text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200">
                        Otomatis dari 1.248 ulasan
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* Kartu Kelebihan (Pros) */}
                      <div className="bg-white rounded-xl p-3 border border-emerald-200 shadow-sm">
                        <div className="flex items-center gap-1.5 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00AA5B]" />
                          <h4 className="text-xs font-bold text-[#00AA5B] uppercase tracking-wide">
                            Kelebihan Utama Produk ({summaryData.pros.length})
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {summaryData.pros.map((pro) => (
                            <div
                              key={pro.id}
                              className="bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100/80 text-xs"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <strong className="text-gray-900 font-semibold">
                                  {pro.title}
                                </strong>
                                <span className="bg-[#00AA5B] text-white text-[10px] font-bold px-1.5 py-0.2 rounded">
                                  {pro.sentimentPercentage}% Puas
                                </span>
                              </div>
                              <p className="text-gray-600 text-[11px] leading-relaxed">
                                {pro.detail}
                              </p>
                              <div className="mt-1 flex items-center justify-between">
                                <span className="text-[10px] text-[#00AA5B] font-medium bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                                  Aspek: {pro.aspect}
                                </span>
                                <button
                                  onClick={() => jumpToReview(pro.aspect)}
                                  className="text-[10px] text-[#00AA5B] hover:underline font-bold flex items-center gap-0.5"
                                >
                                  <span>Lihat ulasan sumber</span>
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Kartu Kekurangan (Cons) */}
                      <div className="bg-white rounded-xl p-3 border border-amber-200 shadow-sm">
                        <div className="flex items-center gap-1.5 mb-2">
                          <AlertTriangle className="w-4 h-4 text-amber-500" />
                          <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                            Hal yang Perlu Dipertimbangkan ({summaryData.cons.length})
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {summaryData.cons.map((con) => (
                            <div
                              key={con.id}
                              className="bg-amber-50/60 p-2.5 rounded-lg border border-amber-100 text-xs"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <strong className="text-gray-900 font-semibold">
                                  {con.title}
                                </strong>
                                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.2 rounded">
                                  {con.mentionRate}
                                </span>
                              </div>
                              <p className="text-gray-600 text-[11px] leading-relaxed">
                                {con.detail}
                              </p>
                              <div className="mt-1 flex items-center justify-between">
                                <span className="text-[10px] text-amber-700 font-medium bg-white px-1.5 py-0.5 rounded border border-amber-200">
                                  Aspek: {con.aspect}
                                </span>
                                <button
                                  onClick={() => jumpToReview(con.aspect)}
                                  className="text-[10px] text-amber-700 hover:underline font-bold flex items-center gap-0.5"
                                >
                                  <span>Lihat ulasan sumber</span>
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ======================================================== */}
                {/* SECTION FR-04: IDENTIFIKASI KELUHAN UMUM                 */}
                {/* (Tampil di Layar 5 / tab Keluhan)                       */}
                {/* ======================================================== */}
                {(activeTab === 'keluhan' || currentScreen === 'complaints_empty') && (
                  <div className="p-4 bg-amber-50/30 border-b border-amber-100">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-xs sm:text-sm text-gray-900 flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-amber-500" />
                          <span>Identifikasi Keluhan Berulang (FR-04)</span>
                        </h3>
                        <p className="text-[11px] text-gray-500">
                          Pola masalah yang dilaporkan pembeli agar Anda dapat menilai risiko sebelum membeli.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {commonComplaints.map((comp) => (
                        <div
                          key={comp.id}
                          className="bg-white p-3 rounded-xl border border-amber-200 shadow-sm"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                                {comp.severity}
                              </span>
                              <h4 className="text-xs sm:text-sm font-bold text-gray-900 mt-1">
                                {comp.topic}
                              </h4>
                            </div>
                            <span className="bg-red-50 text-red-600 font-extrabold text-[11px] px-2 py-0.5 rounded-full border border-red-200">
                              {comp.frequency} Pembeli
                            </span>
                          </div>

                          <div className="mt-2 text-[11px] text-gray-600 space-y-1">
                            <p>
                              <strong>Dampak:</strong> {comp.impact}
                            </p>
                            <p className="bg-blue-50 text-blue-800 p-2 rounded-lg border border-blue-100">
                              <strong>💡 Solusi / Tips Tokopedia:</strong> {comp.tip}
                            </p>
                          </div>

                          <button
                            onClick={() => jumpToReview('Semua', comp.relatedReviewIds[0])}
                            className="mt-2 text-xs font-bold text-[#00AA5B] hover:underline flex items-center gap-1"
                          >
                            <span>Periksa ulasan asli pembeli terkait (BR-08)</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Simulation Button for Testing Empty State (AC-08) */}
                    <div className="mt-4 p-3 bg-white rounded-xl border border-dashed border-gray-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-gray-800 block">
                            Uji Kondisi Sistem (AC-08):
                          </span>
                          <span className="text-[11px] text-gray-500">
                            Simulasikan kondisi filter yang tidak memiliki hasil ulasan.
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            setShowEmptySimulation(!showEmptySimulation);
                            setActiveTab('ulasan');
                          }}
                          className={`text-xs px-3 py-1.5 rounded-lg font-bold transition ${
                            showEmptySimulation
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                        >
                          {showEmptySimulation ? 'Matikan Simulasi' : 'Uji Filter Kosong'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ======================================================== */}
                {/* SECTION FR-01 & FR-05: FILTER BAR ASPEK & FILTER FOTO   */}
                {/* ======================================================== */}
                <div className="p-4 bg-white border-b border-gray-100 sticky top-12 z-30 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-700 flex items-center gap-1">
                      <Filter className="w-3.5 h-3.5 text-[#00AA5B]" />
                      Filter Aspek Produk (FR-01, FR-02):
                    </span>

                    {(selectedAspect !== 'Semua' || onlyPhotos || showEmptySimulation) && (
                      <button
                        onClick={resetAllFilters}
                        className="text-[11px] text-red-500 hover:underline flex items-center gap-1 font-semibold"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Reset Filter
                      </button>
                    )}
                  </div>

                  {/* Horizontal Aspect Filter Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                    {aspectCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedAspect(cat.id);
                          setShowEmptySimulation(false);
                          setCurrentScreen('aspect_filter');
                        }}
                        className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition flex items-center gap-1.5 ${
                          selectedAspect === cat.id && !showEmptySimulation
                            ? 'bg-[#00AA5B] text-white font-bold shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            selectedAspect === cat.id && !showEmptySimulation
                              ? 'bg-white/20 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Filter Ulasan dengan Foto Toggle (FR-05) */}
                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        const nextPhotoState = !onlyPhotos;
                        setOnlyPhotos(nextPhotoState);
                        setShowEmptySimulation(false);
                        setCurrentScreen(nextPhotoState ? 'photo_filter' : 'aspect_filter');
                      }}
                      className={`text-xs px-3 py-1.5 rounded-xl border flex items-center gap-2 font-medium transition ${
                        onlyPhotos
                          ? 'border-[#00AA5B] bg-[#E8F5E9] text-[#00AA5B] font-bold'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <ImageIcon className="w-4 h-4 text-[#00AA5B]" />
                      <span>Hanya Ulasan dengan Foto</span>
                      {onlyPhotos && <CheckCircle2 className="w-3.5 h-3.5 text-[#00AA5B]" />}
                    </button>

                    <span className="text-[11px] text-gray-500">
                      Menampilkan: <strong>{filteredReviews.length}</strong> ulasan
                    </span>
                  </div>
                </div>

                {/* ======================================================== */}
                {/* SECTION: DAFTAR ULASAN ASLI ATAU EMPTY STATE             */}
                {/* ======================================================== */}
                <div className="p-4 space-y-3">
                  {/* Kondisi Empty State (AC-08 & BR-04) */}
                  {filteredReviews.length === 0 ? (
                    <div className="bg-white rounded-2xl p-8 text-center border border-dashed border-gray-300 my-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
                        <Search className="w-8 h-8" />
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">
                        Ulasan Tidak Ditemukan (AC-08)
                      </h4>
                      <p className="text-xs text-gray-500 max-w-xs mx-auto mb-4 leading-relaxed">
                        Tidak ada ulasan yang sesuai dengan kombinasi filter aspek "
                        <strong className="text-gray-700">{selectedAspect}</strong>"
                        {onlyPhotos && ' dan opsi ulasan berfoto'}.
                      </p>
                      <button
                        onClick={resetAllFilters}
                        className="bg-[#00AA5B] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#038848] transition"
                      >
                        Hapus Filter & Tampilkan Semua
                      </button>
                    </div>
                  ) : (
                    /* Daftar Ulasan Asli (BR-08) */
                    filteredReviews.map((rev) => (
                      <div
                        key={rev.id}
                        id={rev.id}
                        className={`bg-white rounded-xl p-3.5 border transition ${
                          highlightedReviewId === rev.id
                            ? 'border-[#00AA5B] ring-2 ring-emerald-200 bg-emerald-50/20'
                            : 'border-gray-200 shadow-2xs hover:border-gray-300'
                        }`}
                      >
                        {/* Reviewer Header */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            {mode === 'wireframe' ? (
                              <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-400 flex items-center justify-center text-[10px] font-mono text-gray-700 font-bold shrink-0">
                                USR
                              </div>
                            ) : (
                              <img
                                src={rev.userAvatar}
                                alt={rev.userName}
                                className="w-8 h-8 rounded-full object-cover border border-gray-200"
                              />
                            )}
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-gray-900">
                                  {rev.userName}
                                </span>
                                {rev.isVerified && (
                                  <span className="text-[10px] text-[#00AA5B] bg-emerald-50 px-1 rounded flex items-center gap-0.5">
                                    <ShieldCheck className="w-3 h-3" /> Terverifikasi
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-gray-400">
                                {rev.date} • Varian: {rev.variant}
                              </span>
                            </div>
                          </div>

                          <div className="flex text-yellow-400">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                            ))}
                          </div>
                        </div>

                        {/* Aspek Chips on Review */}
                        <div className="flex flex-wrap gap-1 mb-2">
                          {rev.aspects.map((asp) => (
                            <span
                              key={asp}
                              className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                                selectedAspect === asp
                                  ? 'bg-[#00AA5B] text-white font-bold'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              Aspek: {asp}
                            </span>
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-xs text-gray-800 leading-relaxed mb-3">
                          {rev.content}
                        </p>

                        {/* Review Photos Grid (FR-05) */}
                        {rev.photos && rev.photos.length > 0 && (
                          <div className="mb-3">
                            <span className="text-[10px] text-gray-500 font-semibold mb-1 block">
                              Foto dari Pembeli (Klik untuk memperbesar):
                            </span>
                            <div className="flex gap-2">
                              {rev.photos.map((photoUrl, pIdx) => (
                                <div
                                  key={pIdx}
                                  onClick={() =>
                                    setSelectedPhotoModal({
                                      url: photoUrl,
                                      caption: rev.photoCaptions?.[pIdx] || 'Foto ulasan pembeli',
                                      user: rev.userName,
                                      content: rev.content
                                    })
                                  }
                                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-gray-200 cursor-pointer relative group"
                                >
                                  {mode === 'wireframe' ? (
                                    <div className="w-full h-full bg-gray-100 border border-dashed border-gray-400 flex flex-col items-center justify-center text-[10px] font-mono text-gray-600">
                                      <span className="text-xs">✕</span>
                                      <span>Foto {pIdx + 1}</span>
                                    </div>
                                  ) : (
                                    <img
                                      src={photoUrl}
                                      alt="Foto ulasan"
                                      className="w-full h-full object-cover group-hover:scale-105 transition"
                                    />
                                  )}
                                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                                    <ExternalLink className="w-4 h-4" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Helpful / Thumbs Up Button */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-500">
                          <button
                            onClick={() => handleLike(rev.id)}
                            className={`flex items-center gap-1.5 px-2 py-1 rounded transition text-[11px] ${
                              hasLiked[rev.id]
                                ? 'text-[#00AA5B] font-bold bg-emerald-50'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                            <span>Membantu ({helpfulCounts[rev.id]})</span>
                          </button>

                          <button className="text-[11px] text-gray-400 hover:text-gray-600">
                            Laporkan
                          </button>
                        </div>
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
      {/* MODAL LIGHTBOX FOTO PEMBELI (FR-05 & AC-04)               */}
      {/* ======================================================== */}
      {selectedPhotoModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in duration-200">
            <div className="bg-gray-900 text-white p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#00AA5B]" />
                <span className="text-xs font-bold truncate">
                  Foto Pembeli: {selectedPhotoModal.user}
                </span>
              </div>
              <button
                onClick={() => setSelectedPhotoModal(null)}
                className="p-1 rounded-full hover:bg-white/20 text-gray-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-black flex items-center justify-center max-h-[380px] overflow-hidden">
              {mode === 'wireframe' ? (
                <div className="w-full h-64 bg-gray-900 border-2 border-dashed border-gray-600 flex flex-col items-center justify-center text-gray-400 font-mono text-center p-4">
                  <span className="text-3xl font-bold mb-2">✕</span>
                  <span className="text-sm">[ PREVIEW FOTO RESOLUSI PENUH ]</span>
                  <span className="text-xs text-gray-500 mt-1">Wireframe Image Placeholder</span>
                </div>
              ) : (
                <img
                  src={selectedPhotoModal.url}
                  alt={selectedPhotoModal.caption}
                  className="max-h-[380px] w-auto object-contain"
                />
              )}
            </div>

            <div className="p-4 bg-white text-xs">
              <div className="mb-2">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                  Keterangan Foto
                </span>
                <p className="font-semibold text-gray-900">
                  {selectedPhotoModal.caption}
                </p>
              </div>
              <p className="text-gray-600 italic bg-gray-50 p-2.5 rounded-lg border border-gray-200 text-[11px]">
                "{selectedPhotoModal.content}"
              </p>
              <button
                onClick={() => setSelectedPhotoModal(null)}
                className="w-full mt-3 bg-gray-900 text-white py-2 rounded-xl font-bold text-xs hover:bg-gray-800"
              >
                Tutup Foto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Sticky Footer Information */}
      <footer className="w-full text-center py-4 text-xs text-gray-500">
        <p>
          Prototipe Evaluasi Interaksi Tokopedia – Fitur Ulasan Relevan (Eksperimen B: UX-Driven).
        </p>
        <p className="text-[11px] text-gray-400 mt-0.5">
          Disusun untuk Tugas Praktikum Worksheet 12 Rekayasa Interaksi C.
        </p>
      </footer>
    </div>
  );
}
