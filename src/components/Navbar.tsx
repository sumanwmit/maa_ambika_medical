import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, Menu, X, Sun, Moon, MessageSquare, 
  Search, Shield, HeartPulse, User, PlusCircle 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenWhatsAppModal: (medicine?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenWhatsAppModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md shadow-2xl border-b border-white/10'
          : 'bg-[#050505] border-b border-white/10'
      }`}
    >
      {/* Top emergency & information ribbon */}
      <div className="bg-[#0B0B0B] text-white/70 text-[10px] sm:text-[11px] py-2 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 truncate">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
            </span>
            <span className="font-semibold uppercase tracking-[0.2em] text-[#C5A059] truncate">
              {BUSINESS_CONFIG.tagline}
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-white/50 tracking-wider">Barni Rd, Masaurhi</span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-white/70">
            <a 
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Phone className="h-3 w-3 text-[#C5A059]" />
              <span className="font-mono text-xs text-white/90">{BUSINESS_CONFIG.whatsappNumber}</span>
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline text-[10px] uppercase tracking-widest text-white/50">Daily 7:30 AM – 10:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Branding */}
          <Link to="/" id="nav-brand-logo" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-sm bg-[#111111] border border-[#C5A059]/40 text-[#C5A059] shadow-md group-hover:border-[#C5A059] transition-all">
              <span className="font-serif font-bold text-base sm:text-lg tracking-wider">MA</span>
              <div className="absolute -bottom-1 -right-1 bg-[#050505] rounded-full p-0.5 border border-[#C5A059]/40">
                <HeartPulse className="h-2.5 w-2.5 text-[#C5A059]" />
              </div>
            </div>
            <div>
              <span className="text-base sm:text-lg font-serif tracking-tight text-white block leading-tight">
                Maa Ambika <span className="text-[#C5A059] italic font-normal">Medical Hall</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 block font-medium mt-0.5">
                Pharmacy & Surgical Store • Masaurhi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-[11px] uppercase tracking-[0.2em] transition-all duration-200 ${
                    isActive
                      ? 'text-white border-b border-[#C5A059] pb-1 font-semibold'
                      : 'text-white/60 hover:text-white hover:border-b hover:border-white/30 pb-1'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs & Tools */}
          <div className="hidden sm:flex items-center gap-3">
            {/* PWA Add to Home Button */}
            <PWAInstallButton variant="header" />

            {/* WhatsApp Order Button */}
            <button
              onClick={() => onOpenWhatsAppModal()}
              id="btn-nav-wa-order"
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black px-4 py-2.5 text-[11px] uppercase tracking-widest font-bold transition shadow-sm active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp Order</span>
            </button>

            {/* Call Now */}
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              id="btn-nav-call"
              className="inline-flex items-center gap-1.5 border border-white/20 hover:border-white/50 text-white/90 hover:text-white px-3.5 py-2.5 text-[11px] uppercase tracking-widest font-bold hover:bg-white/5 transition"
            >
              <Phone className="h-3 w-3 text-[#C5A059]" />
              <span className="hidden xl:inline">Call Store</span>
            </a>

            {/* Theme Toggle (subtle) */}
            <button
              onClick={() => setDarkMode(prev => !prev)}
              id="btn-theme-toggle"
              aria-label="Toggle theme"
              className="p-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition"
            >
              {darkMode ? <Sun className="h-3.5 w-3.5 text-[#C5A059]" /> : <Moon className="h-3.5 w-3.5" />}
            </button>
          </div>

          {/* Mobile Right Controls: Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setDarkMode(prev => !prev)}
              className="p-2 border border-white/10 text-[#C5A059]"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              id="btn-mobile-menu-toggle"
              className="p-2 border border-white/10 text-white hover:bg-white/5 transition"
              aria-label="Open mobile navigation"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="lg:hidden border-t border-white/10 bg-[#0B0B0B] px-5 pt-4 pb-7 space-y-4 shadow-2xl"
        >
          {/* PWA Add to Home Button for Mobile */}
          <div className="pb-2">
            <PWAInstallButton variant="mobile-menu" />
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition ${
                    isActive
                      ? 'text-[#C5A059] border-l-2 border-[#C5A059] bg-white/[0.03] pl-4 font-bold'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.02]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppModal();
              }}
              className="flex w-full items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black py-3 text-xs uppercase tracking-widest font-bold transition cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Order via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="flex w-full items-center justify-center gap-2 border border-white/20 text-white py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white/5 transition"
            >
              <Phone className="h-4 w-4 text-[#C5A059]" />
              <span>Call: {BUSINESS_CONFIG.whatsappNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
