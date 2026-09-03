import React, { useState } from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'header' | 'mobile-menu' | 'hero' | 'floating';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ 
  className = '',
  variant = 'header' 
}) => {
  const { isInstallable, isInstalled, isStandalone, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installedNotice, setInstalledNotice] = useState(false);

  // If already running in standalone app mode, hide install button
  if (isStandalone || isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstalledNotice(true);
        setTimeout(() => setInstalledNotice(false), 4000);
      }
    } else {
      // Fallback for browsers that don't emit beforeinstallprompt right away or desktop
      setShowIOSGuide(true);
    }
  };

  if (installedNotice) {
    return (
      <div 
        id="pwa-installed-badge"
        className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#C5A059] bg-[#111111] border border-[#C5A059]/40 animate-in fade-in"
      >
        <CheckCircle className="h-3 w-3 text-[#C5A059]" />
        <span>App Installed!</span>
      </div>
    );
  }

  // Base styling depending on variant
  if (variant === 'mobile-menu') {
    return (
      <>
        <button
          id="btn-pwa-install-mobile"
          onClick={handleInstallClick}
          className={`flex w-full items-center justify-center gap-2.5 bg-[#C5A059] hover:bg-[#b5924a] px-4 py-3 text-xs font-bold uppercase tracking-widest text-black shadow-lg active:scale-[0.98] transition cursor-pointer ${className}`}
          aria-label="Add Maa Ambika Medical Hall to Home Screen"
        >
          <Smartphone className="h-4 w-4" />
          <span>Add to Home</span>
        </button>
        <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
      </>
    );
  }

  if (variant === 'hero') {
    return (
      <>
        <button
          id="btn-pwa-install-hero"
          onClick={handleInstallClick}
          className={`inline-flex items-center justify-center gap-2 bg-[#111111] border border-white/20 hover:border-[#C5A059]/50 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-white shadow-sm transition active:scale-[0.98] min-h-[44px] cursor-pointer ${className}`}
          aria-label="Install Maa Ambika App"
        >
          <Smartphone className="h-3.5 w-3.5 text-[#C5A059]" />
          <span>Add to Home</span>
        </button>
        <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
      </>
    );
  }

  // Default header button
  return (
    <>
      <button
        id="btn-pwa-install-nav"
        onClick={handleInstallClick}
        className={`inline-flex items-center justify-center gap-1.5 bg-[#111111] border border-white/20 hover:border-[#C5A059]/50 text-white hover:text-[#C5A059] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider transition-all duration-200 min-h-[36px] cursor-pointer ${className}`}
        aria-label="Add App to Home Screen"
        title="Install Maa Ambika Medical App"
      >
        <Smartphone className="h-3.5 w-3.5 text-[#C5A059]" />
        <span className="whitespace-nowrap">Add to Home</span>
      </button>
      <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
    </>
  );
};
