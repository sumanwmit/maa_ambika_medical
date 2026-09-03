import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, ShoppingBag } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="floating-actions-container" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="btn-back-to-top"
          className="h-10 w-10 rounded-sm bg-[#0B0B0B] text-white/80 shadow-xl border border-white/15 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059]/50 hover:bg-white/[0.04] transition-all transform hover:-translate-y-0.5 active:scale-95 animate-in fade-in cursor-pointer"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="h-4 w-4 text-[#C5A059]" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
        id="btn-floating-call"
        className="h-11 w-11 rounded-sm bg-[#0B0B0B] border border-white/20 hover:border-[#C5A059] text-[#C5A059] shadow-xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 relative group"
        aria-label="Call Maa Ambika Medical Hall"
        title="Call Now"
      >
        <Phone className="h-4 w-4 animate-pulse" />
        <span className="sr-only">Call Store</span>
        {/* Tooltip for desktop */}
        <span className="absolute right-14 whitespace-nowrap bg-[#0B0B0B] border border-white/15 text-white text-[11px] uppercase tracking-wider px-3 py-1.5 opacity-0 group-hover:opacity-100 transition pointer-events-none shadow-xl">
          Call: {BUSINESS_CONFIG.whatsappNumber}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsAppModal}
        id="btn-floating-whatsapp"
        className="relative h-12 w-12 sm:h-13 sm:w-13 rounded-sm bg-[#C5A059] hover:bg-[#b5924a] text-black shadow-2xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer group"
        aria-label="WhatsApp Medicine Order"
        title="Order via WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-black text-[9px] font-bold text-[#C5A059] items-center justify-center border border-[#C5A059]">1</span>
        </span>
        <MessageCircle className="h-6 w-6" />

        <span className="absolute right-15 whitespace-nowrap bg-[#0B0B0B] border border-[#C5A059]/40 text-white text-xs font-semibold px-3 py-1.5 opacity-0 group-hover:opacity-100 transition pointer-events-none shadow-xl">
          <span className="text-[#C5A059] font-serif">WhatsApp</span> Medicine Order
        </span>
      </button>
    </div>
  );
};
