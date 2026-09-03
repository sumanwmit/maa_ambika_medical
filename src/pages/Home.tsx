import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageSquare, Navigation, ShieldCheck, Truck, 
  Clock, Award, HeartHandshake, ArrowRight, Star, 
  HelpCircle, ChevronRight, CheckCircle2, Sparkles, 
  Thermometer, Baby, Activity, Pill, Stethoscope, Mail
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { PWAInstallButton } from '../components/PWAInstallButton';

interface HomeProps {
  onOpenWhatsAppModal: (med?: string) => void;
}

export default function Home({ onOpenWhatsAppModal }: HomeProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => setNewsletterSubmitted(false), 4000);
      setNewsletterEmail('');
    }
  };

  // Top 6 Featured Services Preview
  const featuredServices = [
    {
      icon: Pill,
      title: "Prescription Medicines",
      desc: "100% genuine pharmaceutical drugs from leading brands (Cipla, Sun Pharma, Abbott, Alkem).",
    },
    {
      icon: Baby,
      title: "Baby & Mother Care",
      desc: "Infant nutrition, diapers, gentle baby skincare, baby oils, and maternal supplements.",
    },
    {
      icon: Activity,
      title: "Diabetes & BP Care",
      desc: "Glucometer strips, digital BP monitors, insulin cooling packs, and daily sugar management.",
    },
    {
      icon: Stethoscope,
      title: "Medical & Diagnostic Devices",
      desc: "Certified digital thermometers, nebulizers, pulse oximeters, and surgical supports.",
    },
    {
      icon: HeartHandshake,
      title: "Health & Immunity Supplements",
      desc: "Multivitamins, protein powders, calcium, fish oils, and immunity tonics.",
    },
    {
      icon: Truck,
      title: "WhatsApp Home Delivery & Pickup",
      desc: "Fast doorstep medicine delivery across Masaurhi or instant counter pickup.",
    },
  ];

  // Why choose us points
  const whyChoosePoints = [
    {
      title: "100% Genuine Certified Medicines",
      desc: "Sourced strictly from authorized pharmaceutical distributors with verified batch numbers and expiry tracking."
    },
    {
      title: "Cold-Chain Temperature Storage",
      desc: "Dedicated medical refrigeration for vaccines, insulins, and sensitive antibiotics guaranteeing therapeutic efficacy."
    },
    {
      title: "Experienced Qualified Pharmacists",
      desc: "Professional guidance on dosage, drug interactions, timings, and dietary advice with every prescription."
    },
    {
      title: "Affordable & Fair Pricing",
      desc: "Genuine MRP transparency and maximum community care discounts on chronic illness medications."
    }
  ];

  // Customer Reviews Preview (Real Masaurhi local customer feedback representation)
  const reviewsPreview = [
    {
      name: "Satish Prasad",
      location: "Barni Road, Masaurhi",
      rating: 5,
      comment: "Best medical store in Masaurhi. Got my father's diabetes insulin immediately in refrigerated condition. Very polite and helpful pharmacist.",
      time: "2 weeks ago"
    },
    {
      name: "Sunita Devi",
      location: "Kumahartoli, Masaurhi",
      rating: 5,
      comment: "I sent my doctor's slip on WhatsApp and they had all 4 medicines packed in 10 minutes. Extremely convenient for senior citizens.",
      time: "1 month ago"
    },
    {
      name: "Dr. A. K. Verma",
      location: "Masaurhi",
      rating: 5,
      comment: "Maa Ambika Medical Hall maintains excellent inventory of standard ethical medicines. Highly recommended for genuine products.",
      time: "2 months ago"
    }
  ];

  // FAQ Preview
  const faqPreview = [
    {
      q: "How can I order medicines through WhatsApp?",
      a: "Simply click the 'WhatsApp Order' button, fill in your name and medicine details (or send a clear photo of your prescription), and our pharmacist will confirm stock and dispatch right away."
    },
    {
      q: "Do you deliver to all areas in Masaurhi?",
      a: "Yes! We serve Barni Road, Kumahartoli, Railway Station road, and surrounding Masaurhi locality with fast delivery and counter pickups."
    },
    {
      q: "Are the medicines 100% authentic and stored safely?",
      a: "Absolutely. We are licensed under the Bihar State Pharmacy Council, strictly dispensing verified batch supplies with 24x7 refrigeration for temperature-sensitive drugs."
    }
  ];

  // Health Tips Preview
  const healthTips = [
    {
      title: "Safe Antibiotic Usage Guide",
      category: "Prescription Care",
      desc: "Always complete the full prescribed course of antibiotics, even if you feel better after 2 days, to prevent antimicrobial resistance.",
      readTime: "2 min read"
    },
    {
      title: "Proper Blood Pressure Checking at Home",
      category: "Heart Wellness",
      desc: "Rest for 5 minutes before checking, sit upright with arm supported at heart level, and avoid caffeine 30 minutes beforehand.",
      readTime: "3 min read"
    }
  ];

  return (
    <div id="home-page-container" className="flex flex-col min-h-screen bg-[#050505] text-[#F5F5F5]">
      {/* 1. HERO BANNER */}
      <section 
        id="hero-banner-section" 
        className="relative overflow-hidden bg-[#050505] py-16 sm:py-24 lg:py-28 border-b border-white/10"
      >
        {/* Subtle background golden aura */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#C5A059]/15 blur-3xl"></div>
          <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 rounded-sm bg-[#111111] border border-[#C5A059]/40 px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C5A059]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C5A059]" />
                <span>Masaurhi Licensed Pharmacy • 100% Genuine Certified</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
                Maa Ambika <br className="hidden sm:inline" />
                <span className="text-[#C5A059] italic font-normal">
                  Medical Hall
                </span>
              </h1>

              {/* Required Exact Description */}
              <p className="text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed font-light">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
              </p>

              {/* Three Mandatory Buttons + PWA */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                {/* 1. Call Now */}
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  id="btn-hero-call-now"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#C5A059] text-white hover:text-[#C5A059] uppercase tracking-widest font-bold px-6 py-3.5 text-xs transition hover:bg-white/5 min-h-[48px]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#C5A059]" />
                  <span>Call Now</span>
                </a>

                {/* 2. WhatsApp Order */}
                <button
                  onClick={() => onOpenWhatsAppModal()}
                  id="btn-hero-whatsapp-order"
                  className="inline-flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black uppercase tracking-widest font-bold px-6 py-3.5 text-xs shadow-lg transition min-h-[48px] cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Order</span>
                </button>

                {/* 3. Get Directions */}
                <a
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-hero-get-directions"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white/90 hover:text-white uppercase tracking-widest font-bold px-5 py-3.5 text-xs transition min-h-[48px] hover:bg-white/5"
                >
                  <Navigation className="h-3.5 w-3.5 text-[#C5A059]" />
                  <span>Get Directions</span>
                </a>

                {/* PWA Add to Home */}
                <PWAInstallButton variant="hero" />
              </div>

              {/* Location Tag */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-white/50">
                <span className="font-semibold text-white/70">Store Address:</span>
                <span>Barni Rd, Phase 2, Kumahartoli, Masaurhi, Bihar 804452</span>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#0B0B0B] p-6 sm:p-8 shadow-2xl border border-white/15">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#C5A059] animate-ping"></div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A059]">
                      Store Open Today
                    </span>
                  </div>
                  <span className="text-xs font-mono text-white/50">
                    7:30 AM – 10:30 PM
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3.5 bg-[#111111] border border-white/10">
                    <ShieldCheck className="h-4 w-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Genuine Medicine Guarantee</h4>
                      <p className="text-xs text-white/50 mt-0.5">Every batch verified with barcode tracking & cold-storage protection.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 bg-[#111111] border border-white/10">
                    <Truck className="h-4 w-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Local Masaurhi Delivery</h4>
                      <p className="text-xs text-white/50 mt-0.5">Share prescription on WhatsApp for speedy home drop or pickup.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 bg-[#111111] border border-white/10">
                    <Clock className="h-4 w-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-white">24x7 Emergency Desk</h4>
                      <p className="text-xs text-white/50 mt-0.5">Critical medicine assistance available via emergency call & WhatsApp.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/40">Need stock confirmation?</span>
                  <button 
                    onClick={() => onOpenWhatsAppModal()}
                    className="text-[#C5A059] hover:text-[#e0bc74] font-medium tracking-wide transition cursor-pointer"
                  >
                    Check on WhatsApp →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section id="about-preview-section" className="py-16 bg-[#0B0B0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
                About Maa Ambika Medical Hall
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                Masaurhi’s Trusted Healthcare Partner For Generations
              </h2>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                Located on Barni Road Phase 2, Kumahartoli, Maa Ambika Medical Hall has earned the enduring trust of local families, doctors, and caregivers. We bridge quality healthcare with affordable pricing, maintaining a comprehensive catalog of genuine ethical medicines, surgical disposables, and daily mother-child care.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border border-white/10 p-4 bg-[#111111]">
                  <span className="text-2xl font-serif font-bold text-[#C5A059]">100%</span>
                  <p className="text-xs text-white/50 mt-1">Authentic & Tested Drugs</p>
                </div>
                <div className="border border-white/10 p-4 bg-[#111111]">
                  <span className="text-2xl font-serif font-bold text-white">3,000+</span>
                  <p className="text-xs text-white/50 mt-1">Healthcare Products In Stock</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  id="btn-about-view-more"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#C5A059] hover:text-[#e0bc74] transition"
                >
                  <span>Read Our Full Story & Mission</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Store Highlight */}
            <div className="bg-[#111111] p-8 border border-[#C5A059]/30 text-white shadow-xl">
              <h3 className="text-lg font-serif font-normal text-[#C5A059] mb-3">Our Core Healthcare Commitment</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 font-light">
                "We believe every patient in Masaurhi deserves immediate access to safe, genuine pharmaceuticals without worry of spurious drugs or inflated pricing."
              </p>
              <div className="space-y-3 text-xs border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059]" />
                  <span>Strict adherence to National Pharmacy Standards</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059]" />
                  <span>Licensed pharmacist always on counter duty</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059]" />
                  <span>Direct emergency medicine procurement support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6 PREVIEW) */}
      <section id="featured-services-section" className="py-16 bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
                Healthcare Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1">
                Featured Pharmacy Services
              </h2>
            </div>
            <Link
              to="/services"
              id="btn-services-view-more"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#C5A059] hover:text-[#e0bc74] transition"
            >
              <span>View All Services & Inventory</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  id={`featured-service-card-${idx}`}
                  className="bg-[#0B0B0B] p-6 border border-white/10 hover:border-[#C5A059]/40 transition group"
                >
                  <div className="h-11 w-11 bg-[#111111] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mb-4 group-hover:border-[#C5A059] transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-serif font-normal text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-4 font-light">
                    {service.desc}
                  </p>
                  <button
                    onClick={() => onOpenWhatsAppModal(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-[#e0bc74] font-medium transition cursor-pointer"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MEDICINE STOCK CHECKER PREVIEW (EXCLUSIVE FEATURE) */}
      <section id="stock-checker-preview-section" className="py-16 bg-[#0B0B0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              Live Pharmacy Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1">
              Check Medicine Stock Instantly
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-2 font-light">
              Save time before visiting our Barni Road store. Search live medicine availability, MRP, and place orders directly.
            </p>
          </div>

          <MedicineStockChecker onSelectMedicineForOrder={(med) => onOpenWhatsAppModal(med)} compact={true} />

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C5A059] text-white hover:text-[#C5A059] uppercase tracking-widest font-bold px-6 py-3 text-xs transition hover:bg-white/5"
            >
              <span>Explore Complete Inventory & Full Catalog</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section id="why-choose-us-section" className="py-16 bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              The Maa Ambika Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1">
              Why Masaurhi Residents Trust Us
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-2 font-light">
              Healthcare requires uncompromised precision, genuine trust, and dependable care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((pt, i) => (
              <div
                key={i}
                className="bg-[#0B0B0B] p-6 border border-white/10"
              >
                <div className="h-7 w-7 bg-[#111111] border border-[#C5A059]/40 text-[#C5A059] font-serif font-bold text-xs flex items-center justify-center mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-sm font-serif font-normal text-white mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section id="reviews-preview-section" className="py-16 bg-[#0B0B0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-1 text-[#C5A059] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#C5A059] text-[#C5A059]" />
                ))}
                <span className="text-xs font-mono text-white/70 ml-2">4.9 / 5.0 Rating</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                What Our Customers Say
              </h2>
            </div>
            <a
              href={BUSINESS_CONFIG.socialLinks.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#C5A059] hover:text-[#e0bc74] transition"
            >
              <span>View Verified Google Reviews</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsPreview.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#111111] p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C5A059] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <p className="text-xs text-white/70 italic leading-relaxed mb-4 font-serif font-light">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-medium text-white">{rev.name}</h4>
                    <span className="text-white/40 text-[10px]">{rev.location}</span>
                  </div>
                  <span className="text-[10px] text-white/30">{rev.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section id="faq-preview-section" className="py-16 bg-[#050505] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              Have Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqPreview.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#0B0B0B] p-5 border border-white/10"
              >
                <h3 className="text-sm sm:text-base font-serif text-white flex items-start gap-2.5 font-normal">
                  <HelpCircle className="h-4 w-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-white/60 mt-2 pl-6 leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="text-xs uppercase tracking-wider font-bold text-[#C5A059] hover:text-[#e0bc74] inline-flex items-center gap-1.5 transition"
            >
              <span>Have more questions? Contact our pharmacy team</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section id="health-tips-preview-section" className="py-16 bg-[#0B0B0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
                Community Wellness
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1">
                Health Tips & Guidance
              </h2>
            </div>
            <Link
              to="/about"
              className="text-xs uppercase tracking-wider font-bold text-[#C5A059] hover:text-[#e0bc74] transition"
            >
              Learn about our wellness initiatives →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthTips.map((tip, idx) => (
              <div
                key={idx}
                className="border border-white/10 p-6 bg-[#111111]"
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[#C5A059] text-[10px] uppercase tracking-wider">
                    {tip.category}
                  </span>
                  <span className="text-white/40 text-[10px]">{tip.readTime}</span>
                </div>
                <h3 className="text-base font-serif text-white mb-2 font-normal">
                  {tip.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRIMARY CTA SECTION */}
      <section id="cta-section" className="py-16 bg-[#111111] border-b border-white/10 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif text-white font-normal tracking-tight">
            Need Medicines Quickly in Masaurhi?
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Send your prescription slip on WhatsApp. We verify, pack, and prepare it for instant counter collection or doorstep dispatch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black font-bold uppercase tracking-widest px-8 py-3.5 text-xs transition shadow-xl cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Order via WhatsApp Now</span>
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-bold uppercase tracking-widest px-7 py-3.5 text-xs transition hover:bg-white/5"
            >
              <Phone className="h-3.5 w-3.5 text-[#C5A059]" />
              <span>Call Pharmacist Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER & HEALTH ALERTS */}
      <section id="newsletter-section" className="py-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-10 w-10 bg-[#111111] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mx-auto mb-3">
            <Mail className="h-4 w-4" />
          </div>
          <h3 className="text-lg font-serif font-normal text-white">
            Subscribe to Healthcare Alerts & Stock Updates
          </h3>
          <p className="text-xs text-white/50 max-w-lg mx-auto mt-1 mb-5 font-light">
            Receive notifications on seasonal health advisories, vaccination availability, and monthly prescription discounts.
          </p>

          {newsletterSubmitted ? (
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#C5A059] bg-[#111111] px-4 py-2 border border-[#C5A059]/40 animate-in fade-in">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Thank you! You are subscribed to Maa Ambika healthcare alerts.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full border border-white/15 bg-[#111111] px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#C5A059] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#b5924a] text-black font-bold uppercase tracking-wider px-6 py-2.5 text-xs transition shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
