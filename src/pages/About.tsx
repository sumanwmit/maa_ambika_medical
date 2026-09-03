import React from 'react';
import { 
  ShieldCheck, HeartPulse, Award, Clock, Users, 
  MapPin, CheckCircle2, ChevronRight, Phone, MessageSquare, 
  Sparkles, Building2, UserCheck, Stethoscope
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export default function About({ onOpenWhatsAppModal }: AboutProps) {
  const milestones = [
    {
      year: "2015",
      title: "Establishment in Masaurhi",
      desc: "Founded on Barni Road with a focused commitment to provide 100% genuine medicines and authentic healthcare supplies to local families."
    },
    {
      year: "2018",
      title: "Cold-Chain Infrastructure Expansion",
      desc: "Installed medical-grade refrigeration and UPS backup systems for temperature-sensitive insulins, serums, and pediatric vaccines."
    },
    {
      year: "2021",
      title: "Pandemic Emergency Support",
      desc: "Served the community round-the-clock during health emergencies, supplying oxygen concentrators, pulse oximeters, and vital medications."
    },
    {
      year: "2024",
      title: "Digital WhatsApp Prescription & PWA Launch",
      desc: "Introduced digital medicine stock checking, instant WhatsApp ordering, and mobile-friendly doorstep fulfillment for Masaurhi residents."
    }
  ];

  const values = [
    {
      title: "Absolute Authenticity",
      desc: "Zero tolerance for substandard or spurious drugs. Direct procurement from licensed national pharmaceutical manufacturers."
    },
    {
      title: "Compassionate Care",
      desc: "Treating every customer not as a transaction, but as a family member needing clear medical guidance, empathy, and affordability."
    },
    {
      title: "Scientific Integrity",
      desc: "Strict adherence to dosage instructions, expiration protocols, schedule drug regulations, and safe storage hygiene."
    },
    {
      title: "Community Availability",
      desc: "Ensuring rare chronic medications and emergency surgical goods are made available promptly when patients need them most."
    }
  ];

  return (
    <div id="about-page-container" className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      {/* Page Header Banner */}
      <section className="bg-[#0B0B0B] py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-[#111111] border border-[#C5A059]/40 px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059] mb-4">
            <HeartPulse className="h-3.5 w-3.5 text-[#C5A059]" />
            <span>Serving Masaurhi, Bihar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight font-normal">
            About Maa Ambika Medical Hall
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-white/50 max-w-3xl leading-relaxed font-light">
            Your neighborhood pharmacy committed to uncompromising medicinal purity, knowledgeable pharmacist care, and reliable daily health essentials in Masaurhi.
          </p>
        </div>
      </section>

      {/* Business Story & Store Overview */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              Our Journey & Roots
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal">
              Rooted in Masaurhi, Dedicated to Community Health
            </h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
              Maa Ambika Medical Hall was founded with a singular conviction: that no family in Masaurhi and Kumahartoli should ever have to question the authenticity or therapeutic effectiveness of their medicines.
            </p>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
              Conveniently located at <span className="text-white font-medium">922Q+867, Barni Road, Phase 2, Kumahartoli</span>, our store has grown into one of the most reliable pharmaceutical dispensaries in the region. We work closely with reputed healthcare professionals and trusted Indian pharmaceutical giants such as Cipla, Sun Pharma, Dr. Reddy's, Torrent, Abbott, and Alkem.
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-[#111111] border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Licensed Dispensary</h4>
                  <p className="text-[11px] text-white/40 mt-0.5">Compliant with State Drug Control authorities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#111111] border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Computerized Invoicing</h4>
                  <p className="text-[11px] text-white/40 mt-0.5">Transparent GST billing and batch numbers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Store Overview Card */}
          <div className="lg:col-span-5 bg-[#0B0B0B] p-6 sm:p-8 border border-white/15 space-y-5 shadow-2xl">
            <h3 className="text-base font-serif text-white flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#C5A059]" />
              <span>Store Facilities & Overview</span>
            </h3>
            <ul className="space-y-3.5 text-xs text-white/60 font-light">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0"></span>
                <span><strong className="text-white font-normal">Temperature-Controlled Storage:</strong> Dedicated refrigerators maintaining 2°C – 8°C for insulins, vaccines, and biologics.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0"></span>
                <span><strong className="text-white font-normal">Over 3,000+ Active SKUs:</strong> From chronic diabetes and cardiac care to baby diapers, surgical bandages, and vitamins.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0"></span>
                <span><strong className="text-white font-normal">Direct Pharmacist Consult:</strong> Personalized checks on dosage, food restrictions, and refill reminders.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0"></span>
                <span><strong className="text-white font-normal">Rapid WhatsApp Integration:</strong> Prescription verification and counter pickup without long waiting lines.</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-white/10">
              <button
                onClick={onOpenWhatsAppModal}
                className="w-full bg-[#C5A059] hover:bg-[#b5924a] text-black uppercase tracking-widest font-bold py-3 text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Connect with Store Pharmacist</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-16 bg-[#0B0B0B] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-[#111111] p-7 border border-white/10">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059] block mb-2">
                Our Mission
              </span>
              <h3 className="text-lg font-serif font-normal text-white mb-3">
                Reliable Healthcare at Affordable Prices
              </h3>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                To guarantee that every patient in Masaurhi and adjacent rural belts has unfailing access to authentic, quality-assured medicines, medical equipment, and pediatric healthcare products at genuine prices, backed by trustworthy pharmacist consultation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#111111] p-7 border border-white/10">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059] block mb-2">
                Our Vision
              </span>
              <h3 className="text-lg font-serif font-normal text-white mb-3">
                Modern Healthcare Convenience for Every Household
              </h3>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                To evolve as the foremost patient-first pharmacy in the Masaurhi sub-division by blending traditional warmth with modern digital conveniences, including online stock visibility, WhatsApp home delivery, and preventative health monitoring.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-serif text-white font-normal">
                Our Guiding Values
              </h3>
              <p className="text-xs text-white/40 mt-1 font-light">
                The ethical principles that steer every prescription we dispense.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => (
                <div
                  key={i}
                  className="bg-[#111111] p-5 border border-white/10 text-left"
                >
                  <div className="h-7 w-7 bg-[#1c1c1c] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-serif font-bold text-xs mb-3">
                    0{i + 1}
                  </div>
                  <h4 className="text-sm font-serif font-normal text-white mb-1.5">{val.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Owner & Pharmacist Message */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B0B0B] text-white p-8 sm:p-12 border border-[#C5A059]/30 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold text-[#C5A059]">
              <UserCheck className="h-3.5 w-3.5" />
              <span>Message From Store Leadership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
              "Your Health & Trust Are Our Greatest Responsibility"
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed italic font-serif font-light">
              "When a person visits a pharmacy, they or their loved ones are in vulnerability. That is why we never treat medicine as just a product on a shelf. Every bottle of insulin, every pediatric drop, and every cardiac tablet must be stored properly, checked meticulously, and priced honestly. We thank the people of Masaurhi for placing their trust in Maa Ambika Medical Hall."
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs">
              <div>
                <p className="font-medium text-white text-xs uppercase tracking-wider">Pharmacist & Management</p>
                <p className="text-[#C5A059] text-[11px]">Maa Ambika Medical Hall, Masaurhi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline / Journey */}
      <section className="py-16 bg-[#050505] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              Our Milestones
            </span>
            <h3 className="text-2xl font-serif text-white font-normal mt-1">
              Store Journey & Growth
            </h3>
          </div>

          <div className="space-y-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-4 p-5 bg-[#0B0B0B] border border-white/10"
              >
                <div className="bg-[#C5A059] text-black font-serif font-bold text-xs px-3.5 py-1.5 shrink-0 tracking-wider">
                  {m.year}
                </div>
                <div>
                  <h4 className="text-sm font-serif font-normal text-white mb-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
