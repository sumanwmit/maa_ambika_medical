import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy loading the 6 mandatory pages as required by STEP 6
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));

// Page loading spinner
const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center bg-[#050505]">
    <div className="flex flex-col items-center gap-4">
      <div className="h-10 w-10 rounded-full border-2 border-[#C5A059] border-t-transparent animate-spin"></div>
      <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#C5A059]">
        Maa Ambika Medical Hall
      </p>
    </div>
  </div>
);

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Default to true for Sophisticated Dark theme
    return localStorage.getItem('maa_ambika_theme') !== 'light';
  });

  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedMedicineForOrder, setSelectedMedicineForOrder] = useState<string>('');

  // Handle Dark mode toggle
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('maa_ambika_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('maa_ambika_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenWhatsAppModal = (medName?: string) => {
    setSelectedMedicineForOrder(medName || '');
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
    setSelectedMedicineForOrder('');
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-colors duration-200 ${darkMode ? 'dark bg-[#050505] text-[#F5F5F5]' : 'bg-[#0a0a0a] text-[#F5F5F5]'}`}>
        {/* Sticky Header Navigation */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenWhatsAppModal={handleOpenWhatsAppModal}
        />

        {/* 6 Lazy-loaded Independent React Router Pages */}
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              <Route path="/about" element={<About onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} />
              <Route path="/services" element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              <Route path="/gallery" element={<Gallery onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              <Route path="/contact" element={<Contact onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} />
              <Route path="/login" element={<Login />} />
              {/* Fallback route to Home */}
              <Route path="*" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Floating Actions: WhatsApp, Call, Back To Top */}
        <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

        {/* Global WhatsApp Order Modal */}
        <WhatsAppOrderModal
          isOpen={isWhatsAppModalOpen}
          onClose={handleCloseWhatsAppModal}
          initialMedicineName={selectedMedicineForOrder}
        />

        {/* Mandatory Global Tracking & Footer */}
        <Footer />
      </div>
    </Router>
  );
}
