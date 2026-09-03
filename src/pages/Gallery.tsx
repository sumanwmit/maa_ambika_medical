import React, { useState } from 'react';
import { 
  Image as ImageIcon, ZoomIn, ZoomOut, X, ChevronLeft, 
  ChevronRight, Filter, Sparkles, MessageSquare, ExternalLink 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';

interface GalleryProps {
  onOpenWhatsAppModal: (topic?: string) => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'Front View' | 'Medicine Shelves' | 'Equipment' | 'Baby & Wellness' | 'Store Interior';
  description: string;
  image: string;
}

export default function Gallery({ onOpenWhatsAppModal }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // High quality curated medical & pharmacy imagery representing Maa Ambika Medical Hall
  const galleryItems: GalleryItem[] = [
    {
      id: "G-1",
      title: "Store Exterior & Signboard",
      category: "Front View",
      description: "Convenient storefront entrance located on Barni Road Phase 2, Kumahartoli, Masaurhi.",
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "G-2",
      title: "Organized Prescription Medicine Shelves",
      category: "Medicine Shelves",
      description: "Alphabetically arranged ethical pharmaceutical drugs ensuring instant, accurate retrieval by pharmacists.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "G-3",
      title: "Main Billing & Pharmacist Consultation Counter",
      category: "Store Interior",
      description: "Clean computerized dispensing desk with experienced registered pharmacist always on duty.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "G-4",
      title: "Home Health Diagnostic Devices Showcase",
      category: "Equipment",
      description: "Digital blood pressure monitors, blood glucose meters, nebulizers, and pulse oximeters from top clinical brands.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "G-5",
      title: "Pediatric & Baby Care Section",
      category: "Baby & Wellness",
      description: "Complete infant nutrition, diapers, baby massage oils, hypoallergenic wipes, and baby skincare supplies.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "G-6",
      title: "Cold-Chain Medical Refrigeration Unit",
      category: "Store Interior",
      description: "Continuous 2°C – 8°C temperature monitoring with UPS power backup for insulins, vaccines, and biologics.",
      image: "https://images.unsplash.com/photo-1583912267550-d44d9c9a0c64?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "G-7",
      title: "Surgical Supplies & First Aid Disposables",
      category: "Equipment",
      description: "Sterile dressing bandages, crepe rolls, surgical gloves, antiseptics, and orthopedic braces.",
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "G-8",
      title: "Nutritional Health & Immunity Supplements",
      category: "Baby & Wellness",
      description: "Protein powders, daily multivitamins, calcium supplements, and diabetic nutritional drinks.",
      image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "G-9",
      title: "Daily Over-The-Counter Family Essentials",
      category: "Medicine Shelves",
      description: "Antacids, digestive syrups, pain-relief balms, antiseptic creams, and seasonal cough remedies.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = ['All', 'Front View', 'Medicine Shelves', 'Store Interior', 'Equipment', 'Baby & Wellness'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    setZoomLevel(1);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
      setZoomLevel(1);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
      setZoomLevel(1);
    }
  };

  return (
    <div id="gallery-page-container" className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      {/* Header Banner */}
      <section className="bg-[#0B0B0B] py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#111111] border border-[#C5A059]/40 px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059] mb-4">
            <ImageIcon className="h-3.5 w-3.5 text-[#C5A059]" />
            <span>Store Visual Tour</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight font-normal">
            Maa Ambika Photo Gallery
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Take a visual tour of our clean, well-stocked dispensary on Barni Road, Masaurhi. Transparent hygiene, modern cold-storage, and organized shelving.
          </p>

          {/* Category Filter Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[11px] uppercase tracking-wider font-semibold transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#C5A059] text-black shadow-lg'
                    : 'bg-[#111111] text-white/70 border border-white/10 hover:border-[#C5A059]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(index)}
              className="group relative bg-[#0B0B0B] border border-white/10 hover:border-[#C5A059]/40 transition-all cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#111111]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 bg-[#C5A059] text-black text-[10px] uppercase tracking-widest font-bold px-3 py-1.5">
                    <ZoomIn className="h-3.5 w-3.5" />
                    <span>View Larger</span>
                  </span>
                </div>
                <span className="absolute top-3 left-3 bg-[#050505]/90 border border-white/10 text-[#C5A059] text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
                  {item.category}
                </span>
              </div>

              {/* Caption Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-serif text-white group-hover:text-[#C5A059] transition-colors font-normal">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/50 mt-1.5 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-[#C5A059] uppercase tracking-wider font-semibold">Click to Zoom</span>
                  <span className="text-white/40">Masaurhi, Bihar</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP LIGHTBOX MODAL WITH ZOOM & NEXT/PREV */}
      {selectedPhotoIndex !== null && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in"
          onClick={closeLightbox}
        >
          {/* Controls Bar */}
          <div 
            className="absolute top-4 right-4 flex items-center gap-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
              className="bg-[#111111] border border-white/20 hover:border-[#C5A059] text-white p-2.5 transition cursor-pointer"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            <button
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
              className="bg-[#111111] border border-white/20 hover:border-[#C5A059] text-white p-2.5 transition cursor-pointer"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <button
              onClick={closeLightbox}
              className="bg-[#C5A059] text-black hover:bg-[#b5924a] p-2.5 transition ml-2 cursor-pointer"
              title="Close"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#111111] border border-white/20 hover:border-[#C5A059] text-white p-3 transition z-10 hidden sm:block cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#111111] border border-white/20 hover:border-[#C5A059] text-white p-3 transition z-10 hidden sm:block cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Active Photo Content */}
          <div 
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden border border-white/20 max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={filteredItems[selectedPhotoIndex].image}
                alt={filteredItems[selectedPhotoIndex].title}
                style={{ transform: `scale(${zoomLevel})` }}
                className="max-h-[70vh] w-auto object-contain transition-transform duration-200"
              />
            </div>

            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-[10px] text-[#C5A059] font-semibold uppercase tracking-[0.25em] block">
                {filteredItems[selectedPhotoIndex].category} • Image {selectedPhotoIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="text-lg font-serif mt-1 font-normal">
                {filteredItems[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs text-white/60 mt-1 font-light">
                {filteredItems[selectedPhotoIndex].description}
              </p>

              <div className="mt-3 flex items-center justify-center gap-3">
                <button
                  onClick={() => {
                    closeLightbox();
                    onOpenWhatsAppModal(filteredItems[selectedPhotoIndex].title);
                  }}
                  className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black text-xs uppercase tracking-widest font-bold px-5 py-2.5 transition cursor-pointer"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Inquire about this on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
