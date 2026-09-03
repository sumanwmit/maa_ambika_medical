import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, 
  Navigation, Send, CheckCircle2, AlertCircle, HelpCircle, 
  ExternalLink, ShieldCheck 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';

interface ContactProps {
  onOpenWhatsAppModal: () => void;
}

export default function Contact({ onOpenWhatsAppModal }: ContactProps) {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('Medicine Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim() || !formMessage.trim()) {
      setError('Please fill in your name, contact phone number, and message.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Also offer direct WhatsApp redirect
    const text = encodeURIComponent(
      `Hello ${BUSINESS_CONFIG.businessName}, Contact Inquiry from Website:\n• Name: ${formName.trim()}\n• Phone: ${formPhone.trim()}\n• Subject: ${formSubject}\n• Message: ${formMessage.trim()}`
    );
    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappNumberInternational}?text=${text}`, '_blank');
  };

  return (
    <div id="contact-page-container" className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      {/* Header Banner */}
      <section className="bg-[#0B0B0B] py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-[#111111] border border-[#C5A059]/40 px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059] mb-4">
            <MapPin className="h-3.5 w-3.5 text-[#C5A059]" />
            <span>Visit Or Contact Our Masaurhi Counter</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight font-normal">
            Contact Maa Ambika Medical Hall
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-white/50 max-w-3xl leading-relaxed font-light">
            Reach our pharmacists on Barni Road Phase 2, Masaurhi for genuine medicines, clinical equipment, emergency prescription verification, or doorstep delivery.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Business Info & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Buttons (Call, WhatsApp, Directions) */}
            <div className="bg-[#0B0B0B] p-6 border border-white/10 space-y-3 shadow-xl">
              <h3 className="text-sm font-serif uppercase tracking-widest text-white mb-2">
                Immediate Assistance
              </h3>

              {/* 1. Call Button */}
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                id="btn-contact-call"
                className="flex items-center justify-center gap-2.5 w-full bg-[#111111] border border-white/20 hover:border-[#C5A059]/50 text-white font-medium py-3 px-4 text-xs uppercase tracking-wider transition"
              >
                <Phone className="h-3.5 w-3.5 text-[#C5A059]" />
                <span>Call: {BUSINESS_CONFIG.whatsappNumber}</span>
              </a>

              {/* 2. WhatsApp Button */}
              <button
                onClick={onOpenWhatsAppModal}
                id="btn-contact-whatsapp"
                className="flex items-center justify-center gap-2.5 w-full bg-[#C5A059] hover:bg-[#b5924a] text-black font-bold uppercase tracking-widest py-3 px-4 text-xs transition cursor-pointer shadow-lg"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Open WhatsApp Order Form</span>
              </button>

              {/* 3. Directions Button */}
              <a
                href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-contact-directions"
                className="flex items-center justify-center gap-2.5 w-full bg-[#111111] border border-white/20 hover:border-[#C5A059]/50 text-white font-medium py-3 px-4 text-xs uppercase tracking-wider transition"
              >
                <Navigation className="h-3.5 w-3.5 text-[#C5A059]" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

            {/* Business Contact Details Card */}
            <div className="bg-[#0B0B0B] p-6 sm:p-7 border border-white/10 space-y-5 shadow-xl">
              <h3 className="text-base font-serif text-white border-b border-white/10 pb-3 font-normal">
                Store Information
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-[#111111] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Store Address</h4>
                    <p className="text-white/60 mt-0.5 leading-relaxed font-light">
                      {BUSINESS_CONFIG.address}
                    </p>
                    <span className="text-[11px] text-white/40 block mt-1">Landmark: Near Masaurhi Railway Station road / Kumahartoli Chowk</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-[#111111] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Store Timings</h4>
                    <p className="text-white/60 mt-0.5 font-light">
                      Monday – Saturday: <strong className="text-white font-normal">{BUSINESS_CONFIG.workingHours.weekdays}</strong>
                    </p>
                    <p className="text-white/60 font-light">
                      Sunday: <strong className="text-white font-normal">{BUSINESS_CONFIG.workingHours.sunday}</strong>
                    </p>
                    <p className="text-[#C5A059] text-[11px] mt-1 font-medium">
                      {BUSINESS_CONFIG.workingHours.emergency}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-[#111111] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Direct Phone / WhatsApp</h4>
                    <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="text-white/60 hover:text-[#C5A059] transition block mt-0.5">
                      {BUSINESS_CONFIG.phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-[#111111] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Email Address</h4>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-white/60 hover:text-[#C5A059] transition break-all mt-0.5 block">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form & Google Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact / Prescription Inquiry Form */}
            <div className="bg-[#0B0B0B] p-6 sm:p-8 border border-white/10 shadow-xl">
              <h3 className="text-lg font-serif text-white mb-1 font-normal">
                Send an Inquiry or Prescription Note
              </h3>
              <p className="text-xs text-white/50 mb-6 font-light">
                Fill out the details below. Our staff responds swiftly during working hours.
              </p>

              {error && (
                <div className="mb-5 flex items-center gap-2 bg-[#1c1212] p-3 text-xs text-red-300 border border-red-800/60">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              {submitted ? (
                <div className="bg-[#111111] border border-[#C5A059]/40 p-6 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="h-10 w-10 text-[#C5A059] mx-auto" />
                  <h4 className="text-base font-serif text-white">Message Transmitted!</h4>
                  <p className="text-xs text-white/60 max-w-md mx-auto font-light">
                    Your inquiry has been queued for our Masaurhi store pharmacist. We have also opened your WhatsApp chat with the pre-formatted summary.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-form-name" className="block text-[11px] uppercase tracking-wider font-semibold text-white/70 mb-1">
                        Full Name <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-form-name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        required
                        className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059] transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-form-phone" className="block text-[11px] uppercase tracking-wider font-semibold text-white/70 mb-1">
                        Phone / WhatsApp <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-form-phone"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        required
                        className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-form-subject" className="block text-[11px] uppercase tracking-wider font-semibold text-white/70 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      id="contact-form-subject"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059] transition"
                    >
                      <option value="Medicine Stock Availability" className="bg-[#111111] text-white">Medicine Stock Availability</option>
                      <option value="Prescription Delivery in Masaurhi" className="bg-[#111111] text-white">Prescription Delivery in Masaurhi</option>
                      <option value="Medical Equipment & BP Monitor Inquiry" className="bg-[#111111] text-white">Medical Equipment & BP Monitor Inquiry</option>
                      <option value="Baby Care Products" className="bg-[#111111] text-white">Baby Care Products</option>
                      <option value="General Health Advice" className="bg-[#111111] text-white">General Health Advice</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-form-message" className="block text-[11px] uppercase tracking-wider font-semibold text-white/70 mb-1">
                      Message / Medicines Needed <span className="text-[#C5A059]">*</span>
                    </label>
                    <textarea
                      id="contact-form-message"
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Write your medicine names, dosage, or question here..."
                      required
                      className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059] transition"
                    />
                  </div>

                  <button
                    type="submit"
                    id="btn-submit-contact-form"
                    className="w-full flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black font-bold uppercase tracking-widest py-3 text-xs shadow-lg active:scale-[0.98] transition cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Submit & Open WhatsApp Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="bg-[#0B0B0B] border border-white/10 p-2 shadow-xl">
              <div className="p-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#C5A059]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-white">Store Map Location (Masaurhi, Bihar)</span>
                </div>
                <a
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C5A059] hover:underline font-semibold flex items-center gap-1 uppercase tracking-wider text-[10px]"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="w-full h-72 sm:h-80 bg-[#111111] relative">
                <iframe
                  title="Maa Ambika Medical Hall Location Map"
                  src={BUSINESS_CONFIG.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
