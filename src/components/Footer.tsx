import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, HeartPulse, 
  ExternalLink, ArrowRight, MessageCircle 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';

export default function Footer() {
  // === STEP 11: GLOBAL TRACKING HOOK (MANDATORY) ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') as string);
    }
    if (!cid) return;
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };
    sendInitPayload();
    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: any;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };
    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer id="main-footer" className="bg-[#050505] text-white/70 border-t border-white/10 transition-colors">
      {/* Top Banner: Emergency helpline & Store assurance */}
      <div className="border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="h-10 w-10 rounded-sm bg-[#111111] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shrink-0">
                <HeartPulse className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white">Emergency Healthcare Support in Masaurhi</p>
                <p className="text-xs text-white/50 mt-0.5">Available 7:30 AM – 10:30 PM & 24x7 WhatsApp assistance for vital prescriptions.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black text-[11px] uppercase tracking-widest font-bold px-5 py-2.5 transition"
              >
                <Phone className="h-3 w-3" />
                <span>Call {BUSINESS_CONFIG.whatsappNumber}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumberInternational}?text=${encodeURIComponent("Hello Maa Ambika Medical Hall, I need emergency medicine.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white text-[11px] uppercase tracking-widest font-bold px-5 py-2.5 transition hover:bg-white/5"
              >
                <MessageCircle className="h-3 w-3 text-[#C5A059]" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-sm bg-[#111111] border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] font-serif font-bold text-base shadow-md">
                MA
              </div>
              <div>
                <h3 className="text-base font-serif font-normal text-white leading-snug">
                  {BUSINESS_CONFIG.businessName}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium">Licensed Pharmacy • Masaurhi</p>
              </div>
            </div>

            <p className="text-xs text-white/50 leading-relaxed">
              {BUSINESS_CONFIG.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C5A059]">
              <ShieldCheck className="h-4 w-4" />
              <span className="tracking-wide">100% Genuine Certified Medicines Guaranteed</span>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={BUSINESS_CONFIG.socialLinks.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-sm bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-[#C5A059] hover:border-[#C5A059]/50 transition text-xs font-serif"
                title="Google Business Profile"
              >
                G
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-sm bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-[#C5A059] hover:border-[#C5A059]/50 transition text-xs font-serif"
                title="Facebook"
              >
                FB
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-sm bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-[#C5A059] hover:border-[#C5A059]/50 transition text-xs font-serif"
                title="Instagram"
              >
                IG
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.justdial}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-sm bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-[#C5A059] hover:border-[#C5A059]/50 transition text-xs font-serif"
                title="JustDial"
              >
                JD
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (6 React Router Pages) */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-white/60 hover:text-white transition flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#C5A059] rounded-full"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-white transition flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#C5A059] rounded-full"></span>
                  <span>About Our Store</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-white transition flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#C5A059] rounded-full"></span>
                  <span>Pharmacy Services & Stock</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/60 hover:text-white transition flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#C5A059] rounded-full"></span>
                  <span>Store Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-white transition flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#C5A059] rounded-full"></span>
                  <span>Contact & Directions</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white/60 hover:text-white transition flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#C5A059] rounded-full"></span>
                  <span>Customer / Staff Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Timings */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white mb-4">
              Operating Hours
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Clock className="h-3.5 w-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Monday – Saturday</span>
                  <span className="text-white/50">{BUSINESS_CONFIG.workingHours.weekdays}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-3.5 w-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Sunday</span>
                  <span className="text-white/50">{BUSINESS_CONFIG.workingHours.sunday}</span>
                </div>
              </li>
              <li className="bg-white/[0.02] p-3.5 border border-white/10 mt-2">
                <p className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold mb-1">WhatsApp Ordering</p>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Send prescription images anytime for prompt preparation and dispatch in Masaurhi.
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Google Map */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white mb-4">
              Masaurhi Store Location
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Store Address</span>
                  <p className="text-white/50 leading-relaxed">
                    {BUSINESS_CONFIG.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="text-white/70 hover:text-white transition">
                  {BUSINESS_CONFIG.phoneNumber}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-white/70 hover:text-white transition truncate">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-[#e0bc74] font-medium transition"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>Open in Google Maps / Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Policy Links */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white transition cursor-pointer">Terms & Conditions</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white transition cursor-pointer">Drug & Cosmetics Compliance</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white transition cursor-pointer">Return & Exchange Disclaimer</span>
          </div>

          <p className="text-[11px] text-white/40">
            Certified Masaurhi Pharmacy Retailer. All prescription orders verified prior to dispensing.
          </p>
        </div>

        {/* Copyright and Mandatory WMIT Integration Line */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved.
          </div>

          {/* REQUIRED FOOTER POPUP TRIGGER — PRESERVE EXACTLY */}
          <div className="text-center font-medium">
            <a 
              href="#" 
              className="wmit-popup-trigger text-[#C5A059] hover:text-[#e0bc74] transition underline underline-offset-4 font-serif"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // If external broadcast script hasn't bound yet, allow peaceful fallback
                if (!(window as any).wmitPopupOpen) {
                  e.preventDefault();
                  alert('Maa Ambika Medical Hall web application designed & developed with high reliability.');
                }
              }}
            >
              Developed by WMIT
            </a>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-white/40">
            <span>Secure 256-bit SSL</span>
            <span>•</span>
            <span>Fast PWA Enabled</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
