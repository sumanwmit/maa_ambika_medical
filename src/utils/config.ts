// Centralized Business and PWA Configuration
export const BUSINESS_CONFIG = {
  businessName: "Maa Ambika Medical Hall",
  shortName: "Maa Ambika",
  category: "Pharmacy & Healthcare Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  description: "Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Masaurhi, Bihar.",
  whatsappNumber: "8507135178",
  whatsappNumberInternational: "918507135178",
  phoneNumber: "+91 8507135178",
  phoneRaw: "+918507135178",
  email: "maaambikamedical.masaurhi@gmail.com",
  address: "922Q+867, Barni Rd, Phase 2, Masaurhi, Kumahartoli, Bihar 804452",
  city: "Masaurhi",
  district: "Patna",
  state: "Bihar",
  pincode: "804452",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=922Q%2B867,+Barni+Rd,+Phase+2,+Masaurhi,+Kumahartoli,+Bihar+804452",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14408.825633857508!2d85.0163352!3d25.3524673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2913bf8bf73ab%3A0x6b4efd3a0e698889!2sMasaurhi%2C%20Bihar%20804452!5e0!3m2!1sen!2sin!4v1709452800000!5m2!1sen!2sin",
  workingHours: {
    weekdays: "07:30 AM - 10:30 PM",
    sunday: "08:00 AM - 10:00 PM",
    emergency: "24/7 Emergency Medicine Support via WhatsApp & Phone",
  },
  socialLinks: {
    facebook: "https://facebook.com/maaambikamedical",
    instagram: "https://instagram.com/maaambikamedical",
    googleBusiness: "https://maps.google.com/?q=Maa+Ambika+Medical+Hall+Masaurhi",
    justdial: "https://justdial.com/Masaurhi/Maa-Ambika-Medical-Hall",
  },
  themeColors: {
    primary: "#0369A1", // Medical Blue
    accent: "#0A8F6A",  // Emerald Green
    lightBg: "#F8FAFC",
    darkBg: "#0B132B"
  },
  pwa: {
    enabled: true,
    appName: "Maa Ambika Medical Hall",
    shortName: "Maa Ambika",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone"
  }
};

export const SITE_CONFIG = BUSINESS_CONFIG;
