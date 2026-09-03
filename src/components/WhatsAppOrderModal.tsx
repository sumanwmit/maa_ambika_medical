import React, { useState } from 'react';
import { X, Send, PhoneCall, FileText, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicineName = '',
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(initialMedicineName);
  const [prescription, setPrescription] = useState<'Yes' | 'No'>('Yes');
  const [preferredTime, setPreferredTime] = useState('Immediate / ASAP');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Update initial medicine if passed dynamically
  React.useEffect(() => {
    if (initialMedicineName) {
      setMedicineName(initialMedicineName);
    }
  }, [initialMedicineName]);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setErrorMsg('Please enter your Customer Name.');
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!medicineName.trim()) {
      setErrorMsg('Please enter the required medicine name(s).');
      return;
    }
    if (!address.trim()) {
      setErrorMsg('Please enter your delivery or pickup address in Masaurhi.');
      return;
    }

    setErrorMsg('');

    const formattedMessage = 
`Hello ${BUSINESS_CONFIG.businessName},
*Medicine Order Inquiry*
━━━━━━━━━━━━━━━━━━━━
• *Customer Name:* ${customerName.trim()}
• *Phone:* ${mobileNumber.trim()}
• *Email:* ${email.trim() || 'Not specified'}
• *Medicine Required:* ${medicineName.trim()}
• *Delivery Address:* ${address.trim()}
• *Prescription Available:* ${prescription}
• *Preferred Time:* ${preferredTime}
• *Notes/Special Requests:* ${message.trim() || 'None'}
━━━━━━━━━━━━━━━━━━━━
Please confirm stock availability, total amount, and delivery time. Thank you!`;

    const encoded = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumberInternational}?text=${encoded}`;
    
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      id="whatsapp-order-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="whatsapp-order-modal-content"
        className="relative w-full max-w-xl bg-[#0B0B0B] p-6 sm:p-8 shadow-2xl border border-white/15 text-[#F5F5F5] my-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-wa-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/50 hover:text-white transition"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="rounded-sm bg-[#111111] border border-[#C5A059]/40 p-3 text-[#C5A059] shrink-0">
            <Send className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif text-white font-normal tracking-tight">
              Direct WhatsApp Medicine Order
            </h2>
            <p className="text-xs text-white/50 mt-1">
              Direct connection with <span className="text-[#C5A059] font-medium">Maa Ambika Medical Hall</span>. Verified pharmacist handling.
            </p>
          </div>
        </div>

        {errorMsg && (
          <div className="mb-4 flex items-center gap-2 bg-red-950/40 p-3 text-xs font-medium text-red-300 border border-red-800/60">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSendWhatsApp} className="space-y-4 text-sm">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="wa-customer-name" className="block text-[11px] uppercase tracking-wider font-semibold text-white/80 mb-1.5">
                Customer Name <span className="text-[#C5A059]">*</span>
              </label>
              <input
                type="text"
                id="wa-customer-name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                required
                className="w-full border border-white/15 bg-[#111111] px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#C5A059] focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="wa-customer-phone" className="block text-[11px] uppercase tracking-wider font-semibold text-white/80 mb-1.5">
                Mobile / WhatsApp <span className="text-[#C5A059]">*</span>
              </label>
              <input
                type="tel"
                id="wa-customer-phone"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="e.g. 9876543210"
                required
                className="w-full border border-white/15 bg-[#111111] px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#C5A059] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Row 2: Email & Preferred Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="wa-customer-email" className="block text-[11px] uppercase tracking-wider font-semibold text-white/80 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="wa-customer-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. ramesh@gmail.com"
                className="w-full border border-white/15 bg-[#111111] px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#C5A059] focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="wa-delivery-time" className="block text-[11px] uppercase tracking-wider font-semibold text-white/80 mb-1.5">
                Preferred Schedule
              </label>
              <select
                id="wa-delivery-time"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full border border-white/15 bg-[#111111] px-3.5 py-2.5 text-sm text-white focus:border-[#C5A059] focus:outline-none transition"
              >
                <option value="Immediate / ASAP (1-2 Hours)" className="bg-[#111] text-white">Immediate / ASAP (1-2 Hours)</option>
                <option value="Morning (08:00 AM - 11:00 AM)" className="bg-[#111] text-white">Morning (08:00 AM - 11:00 AM)</option>
                <option value="Afternoon (12:00 PM - 03:00 PM)" className="bg-[#111] text-white">Afternoon (12:00 PM - 03:00 PM)</option>
                <option value="Evening (05:00 PM - 08:30 PM)" className="bg-[#111] text-white">Evening (05:00 PM - 08:30 PM)</option>
                <option value="Store Pickup at Barni Road" className="bg-[#111] text-white">Store Pickup at Barni Road Counter</option>
              </select>
            </div>
          </div>

          {/* Medicine Name / Required */}
          <div>
            <label htmlFor="wa-medicine-name" className="block text-[11px] uppercase tracking-wider font-semibold text-white/80 mb-1.5">
              Medicine Names & Quantities <span className="text-[#C5A059]">*</span>
            </label>
            <textarea
              id="wa-medicine-name"
              rows={2}
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="e.g. Dolo 650 (1 strip), Glycomet 500 SR (2 strips), Omron BP Monitor..."
              required
              className="w-full border border-white/15 bg-[#111111] px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#C5A059] focus:outline-none transition"
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label htmlFor="wa-delivery-address" className="block text-[11px] uppercase tracking-wider font-semibold text-white/80 mb-1.5">
              Delivery Address (Masaurhi or nearby) <span className="text-[#C5A059]">*</span>
            </label>
            <input
              type="text"
              id="wa-delivery-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. House No. 24, Near Railway Station, Barni Road, Masaurhi"
              required
              className="w-full border border-white/15 bg-[#111111] px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#C5A059] focus:outline-none transition"
            />
          </div>

          {/* Prescription Radio Selection */}
          <div className="border border-white/10 p-4 bg-[#111111]">
            <span className="block text-[11px] uppercase tracking-wider font-semibold text-white/80 mb-2.5">
              Doctor's Prescription Available?
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-white/90">
                <input
                  type="radio"
                  name="prescription-option"
                  value="Yes"
                  checked={prescription === 'Yes'}
                  onChange={() => setPrescription('Yes')}
                  className="accent-[#C5A059]"
                />
                <span>Yes, I will send photo on WhatsApp</span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-white/90">
                <input
                  type="radio"
                  name="prescription-option"
                  value="No"
                  checked={prescription === 'No'}
                  onChange={() => setPrescription('No')}
                  className="accent-[#C5A059]"
                />
                <span>No (OTC / Daily Health Item)</span>
              </label>
            </div>
            <p className="mt-2.5 text-[10px] text-white/40 leading-relaxed">
              Note: Schedule H / H1 prescription drugs strictly require a valid prescription picture in the WhatsApp chat.
            </p>
          </div>

          {/* Additional Notes */}
          <div>
            <label htmlFor="wa-order-notes" className="block text-[11px] uppercase tracking-wider font-semibold text-white/80 mb-1.5">
              Special Instructions (Optional)
            </label>
            <input
              type="text"
              id="wa-order-notes"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Bring UPI QR scanner or call before arrival"
              className="w-full border border-white/15 bg-[#111111] px-3.5 py-2 text-sm text-white placeholder-white/30 focus:border-[#C5A059] focus:outline-none transition"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              id="btn-send-wa-order"
              className="flex-1 flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black font-bold text-xs uppercase tracking-widest py-3.5 px-4 transition cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              id="btn-call-now-modal"
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 transition hover:bg-white/5"
            >
              <PhoneCall className="h-4 w-4 text-[#C5A059]" />
              <span>Call Store</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
