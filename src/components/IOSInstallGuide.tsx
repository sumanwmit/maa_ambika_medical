import React from 'react';
import { X, Share, PlusSquare, ArrowDown, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      id="ios-pwa-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="ios-pwa-modal-card"
        className="relative w-full max-w-md bg-[#0B0B0B] p-6 shadow-2xl border border-white/15 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="btn-close-ios-guide"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-white/40 hover:bg-[#111111] hover:text-white transition cursor-pointer"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-[#111111] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center font-serif font-bold text-sm tracking-wider">
            MA
          </div>
          <div>
            <h3 className="text-base font-serif font-normal leading-tight">{BUSINESS_CONFIG.businessName}</h3>
            <p className="text-[10px] text-[#C5A059] uppercase tracking-widest font-semibold flex items-center gap-1 mt-0.5">
              <Sparkles className="h-3 w-3" /> Install as Mobile Web App
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-xs">
          <div className="flex items-start gap-3 bg-[#111111] p-3.5 border border-white/10">
            <div className="mt-0.5 bg-[#050505] p-2 text-[#C5A059] border border-[#C5A059]/30">
              <Share className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider text-[11px] text-white">Step 1: Open Share Menu</p>
              <p className="text-white/50 mt-0.5 font-light">
                Tap the <strong className="text-white font-normal">Share</strong> button at the bottom of Safari (or the top on iPad).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#111111] p-3.5 border border-white/10">
            <div className="mt-0.5 bg-[#050505] p-2 text-[#C5A059] border border-[#C5A059]/30">
              <PlusSquare className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider text-[11px] text-white">Step 2: Add to Home Screen</p>
              <p className="text-white/50 mt-0.5 font-light">
                Scroll down the options list and select <strong className="text-white font-normal">"Add to Home Screen"</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#111111] p-3.5 border border-white/10">
            <div className="mt-0.5 bg-[#050505] p-2 text-[#C5A059] border border-[#C5A059]/30">
              <ArrowDown className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider text-[11px] text-white">Step 3: Tap "Add"</p>
              <p className="text-white/50 mt-0.5 font-light">
                Confirm by tapping <strong className="text-white font-normal">Add</strong> in the top right corner. The app icon will appear on your Home Screen!
              </p>
            </div>
          </div>
        </div>

        <button
          id="btn-dismiss-ios-guide"
          onClick={onClose}
          className="mt-6 w-full bg-[#C5A059] hover:bg-[#b5924a] py-3 text-xs font-bold uppercase tracking-widest text-black active:scale-[0.98] transition cursor-pointer shadow-lg"
        >
          Got it, Close
        </button>
      </div>
    </div>
  );
};
