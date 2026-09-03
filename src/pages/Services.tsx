import React, { useState } from 'react';
import { 
  Pill, Activity, Stethoscope, Baby, HeartPulse, 
  Sparkles, ShieldCheck, Truck, MessageSquare, Search, 
  CheckCircle2, AlertCircle, ShoppingBag, PhoneCall
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenWhatsAppModal: (medicine?: string) => void;
}

export default function Services({ onOpenWhatsAppModal }: ServicesProps) {
  const [activeCategoryTab, setActiveCategoryTab] = useState('All');

  // Comprehensive Category-wise Services
  const serviceCategories = [
    {
      id: "prescription",
      name: "Prescription Medicines",
      badge: "Doctor Verified",
      icon: Pill,
      headline: "Ethical & Chronic Prescription Formulations",
      desc: "Comprehensive pharmaceutical inventory for acute infections, cardiology, endocrinology, neurology, gastroenterology, and respiratory care. Batch verified and temperature-guarded.",
      items: [
        "Cardiovascular & Blood Pressure (Telmisartan, Amlodipine, Atenolol)",
        "Diabetes Oral Hypoglycemics & Human Insulins (Metformin, Glimepiride)",
        "Broad-Spectrum Antibiotics (Amoxicillin, Azithromycin, Cefixime)",
        "Gastric & Proton Pump Inhibitors (Pantoprazole, Rabeprazole)",
        "Respiratory Inhalers & Anti-Allergics (Budesonide, Levocetirizine)"
      ],
      ctaText: "Upload Prescription on WhatsApp"
    },
    {
      id: "otc",
      name: "OTC Medicines & First Aid",
      badge: "Daily Essentials",
      icon: HeartPulse,
      headline: "Over-The-Counter Family Relief",
      desc: "Immediate symptomatic relief for routine health conditions including fevers, headaches, seasonal allergies, acid reflux, and minor cuts or burns.",
      items: [
        "Antipyretics & Pain Relief (Paracetamol, Ibuprofen, Diclofenac)",
        "Cough Syrups, Lozenges & Nasal Sprays (Dextromethorphan, Otrivin)",
        "Antacids & Digestives (Digene, Gelusil, Eno)",
        "Antiseptics, Bandages & Gauze (Betadine, Savlon, Band-Aid)",
        "Electrolyte Rehydration Powders (Electral, ORS packs)"
      ],
      ctaText: "Order OTC Essentials"
    },
    {
      id: "devices",
      name: "Health Devices & Medical Equipment",
      badge: "Clinical Precision",
      icon: Stethoscope,
      headline: "Home Diagnostic & Monitoring Devices",
      desc: "Top-brand medical apparatus for monitoring vitals accurately at home, assisting recovery and chronic condition management.",
      items: [
        "Digital Blood Pressure Monitors (Omron, Dr. Morepen)",
        "Blood Glucose Meters & Test Strips (Accu-Chek, OneTouch)",
        "Nebulizers & Vaporizers for asthma and pediatric breathing",
        "Digital Clinical & Infrared Thermometers",
        "Pulse Oximeters & Respirometers",
        "Surgical Supports, Orthopedic Belts & Cervical Collars"
      ],
      ctaText: "Inquire Equipment Stock"
    },
    {
      id: "baby",
      name: "Baby Care & Mother Health",
      badge: "Pure & Gentle",
      icon: Baby,
      headline: "Pediatric Care & Maternal Nutrition",
      desc: "Specially formulated baby care essentials, infant formulas, hypoallergenic skincare, and postpartum recovery supplements.",
      items: [
        "Infant Milk Formulas & Cereals (Lactogen, Nan Pro, Cerelac)",
        "Baby Diapers, Pants & Sensitive Skin Wipes (Pampers, MamyPoko)",
        "Pediatric Drops & Paracetamol Suspension (Prescription/OTC)",
        "Baby Massage Oils, Lotions & Shampoos (Himalaya, Sebamed)",
        "Prenatal & Postnatal Multivitamins, Calcium & Folic Acid"
      ],
      ctaText: "Order Baby Products"
    },
    {
      id: "supplements",
      name: "Supplements & Nutritional Care",
      badge: "Vitality & Strength",
      icon: Activity,
      headline: "Immunity Boosters & Nutritional Supplements",
      desc: "Scientifically formulated dietary additions for joint mobility, immune response, bone density, and stamina replenishment.",
      items: [
        "Multivitamins & Zinc Formulations (Becosules Z, Zincovit)",
        "Calcium + Vitamin D3 Tablets (Shelcal, Calcirol)",
        "Protein Powders & Diabetic Nutrition Supplements (Ensure, Protinex)",
        "Omega-3 Fish Oils & Antioxidants",
        "Ayurvedic Tonics & Immunity Kadhas (Chyawanprash, Ashwagandha)"
      ],
      ctaText: "Order Supplements"
    },
    {
      id: "homecare",
      name: "Home Care & Elderly Assistance",
      badge: "Care at Home",
      icon: ShieldCheck,
      headline: "Senior Citizen Support & Personal Care",
      desc: "Dignified home healthcare and hygiene products designed to make living and recovering at home comfortable and safe.",
      items: [
        "Adult Diapers, Underpads & Incontinence Liners (Friends, KareIn)",
        "Walking Sticks, Quadripods & Commode Chairs",
        "Bed Sore Prevention Air Mattresses & Cushions",
        "Surgical Gloves, Face Masks & Alcohol Sanitizers",
        "Dressing Kits, Micropore Tapes & Sterile Cotton"
      ],
      ctaText: "Order Home Care Items"
    }
  ];

  return (
    <div id="services-page-container" className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      {/* Header Banner */}
      <section className="bg-[#0B0B0B] py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#111111] border border-[#C5A059]/40 px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059] mb-4">
              <Pill className="h-3.5 w-3.5 text-[#C5A059]" />
              <span>Full-Spectrum Pharmaceutical Care</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight font-normal">
              Pharmacy Services & Product Catalog
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-white/50 leading-relaxed font-light">
              Maa Ambika Medical Hall maintains exhaustive stocks of genuine medicines, clinical equipment, baby care, and daily wellness items in Masaurhi, Bihar.
            </p>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Live Medicine Stock Checker */}
      <section id="exclusive-stock-checker-section" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
            Exclusive Feature
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1">
            Searchable Medicine Availability Checker
          </h2>
          <p className="text-xs text-white/50 mt-1 font-light">
            Check real-time stock status (Available, Limited Stock, Out of Stock), pricing, and expiry dates across our inventory.
          </p>
        </div>

        <MedicineStockChecker onSelectMedicineForOrder={(med) => onOpenWhatsAppModal(med)} compact={false} />
      </section>

      {/* Complete Category-Wise Services */}
      <section className="py-16 bg-[#0B0B0B] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              Departmental Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1">
              Category-Wise Healthcare Services
            </h2>
            <p className="text-xs text-white/40 mt-2 font-light">
              Browse our specialized pharmaceutical sections. Each category is managed with strict quality checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  id={`service-card-${cat.id}`}
                  className="border border-white/10 bg-[#111111] p-6 flex flex-col justify-between hover:border-[#C5A059]/40 transition group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 bg-[#1a1a1a] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A059] bg-[#1a1a1a] px-2.5 py-1 border border-[#C5A059]/30">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-serif text-white mb-2 font-normal">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-white/50 mb-4 leading-relaxed font-light">
                      {cat.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/10 mb-6">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A059] block mb-1">
                        Common Products & Formulations:
                      </span>
                      {cat.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-white/60 font-light">
                          <CheckCircle2 className="h-3 w-3 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dedicated Service CTA */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={() => onOpenWhatsAppModal(cat.name)}
                      className="w-full flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black font-bold uppercase tracking-widest py-2.5 text-xs transition active:scale-[0.98] cursor-pointer"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>{cat.ctaText}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doorstep Delivery & Prescription Assistance Notice */}
      <section className="py-14 bg-[#050505] border-t border-white/10 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B0B0B] border border-[#C5A059]/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
                Have a Handwritten Doctor's Prescription?
              </h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-xl mt-2 font-light">
                Take a clean picture of your prescription with your phone camera and click WhatsApp order. Our licensed pharmacist will decode it, check dosages, and confirm availability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="w-full sm:w-auto bg-[#C5A059] text-black uppercase tracking-widest font-bold px-6 py-3 text-xs hover:bg-[#b5924a] transition cursor-pointer"
              >
                Send Prescription Photo
              </button>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="w-full sm:w-auto bg-[#111111] border border-white/20 text-white uppercase tracking-widest font-medium px-5 py-3 text-xs hover:border-[#C5A059]/50 transition text-center"
              >
                Call: {BUSINESS_CONFIG.whatsappNumber}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
