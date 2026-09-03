import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Filter, Sparkles, PhoneCall } from 'lucide-react';
import medicineInventory from '../data/medicineStock.json';
import { BUSINESS_CONFIG } from '../utils/config';

interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock' | string;
  dosage: string;
}

interface MedicineStockCheckerProps {
  onSelectMedicineForOrder?: (medicineName: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onSelectMedicineForOrder,
  compact = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Available' | 'Limited Stock' | 'Out of Stock'>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories extracted from data
  const categories = useMemo(() => {
    const set = new Set<string>();
    medicineInventory.forEach(item => set.add(item.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filtered medicines
  const filteredMedicines = useMemo(() => {
    return (medicineInventory as MedicineItem[]).filter(med => {
      const matchesSearch = 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === 'All' || med.status === statusFilter;
      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchTerm, statusFilter, selectedCategory]);

  const handleOrderClick = (med: MedicineItem) => {
    if (onSelectMedicineForOrder) {
      onSelectMedicineForOrder(`${med.name} (${med.brand})`);
    } else {
      const msg = encodeURIComponent(
        `Hello ${BUSINESS_CONFIG.businessName}, I would like to check availability and order: ${med.name} (${med.brand}, MRP: ₹${med.mrp}). Please confirm.`
      );
      window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappNumberInternational}?text=${msg}`, '_blank');
    }
  };

  const handleRequestUnlisted = () => {
    const query = searchTerm.trim() ? searchTerm.trim() : 'custom medicine';
    const msg = encodeURIComponent(
      `Hello ${BUSINESS_CONFIG.businessName}, I am searching for "${query}". Is this medicine available at your store or can you arrange it?`
    );
    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappNumberInternational}?text=${msg}`, '_blank');
  };

  return (
    <div 
      id="medicine-stock-checker-root" 
      className="w-full bg-[#0B0B0B] border border-white/10 shadow-2xl p-5 sm:p-7 text-[#F5F5F5]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#111111] border border-[#C5A059]/30 text-[#C5A059] text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">
            <Sparkles className="h-3 w-3" />
            <span>Store Inventory Catalog</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal tracking-tight">
            Search Medicine Availability
          </h3>
          <p className="text-xs text-white/50 mt-1">
            Check current stock at <span className="text-[#C5A059] font-medium">Maa Ambika Medical Hall, Barni Road</span> or dispatch directly on WhatsApp.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-2.5 text-xs">
          <div className="bg-[#111111] px-3.5 py-2 border border-white/10 text-center min-w-[75px]">
            <span className="block text-base font-serif font-bold text-[#C5A059]">
              {medicineInventory.filter(m => m.status === 'Available').length}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/40">In Stock</span>
          </div>
          <div className="bg-[#111111] px-3.5 py-2 border border-white/10 text-center min-w-[75px]">
            <span className="block text-base font-serif font-bold text-amber-400">
              {medicineInventory.filter(m => m.status === 'Limited Stock').length}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/40">Limited</span>
          </div>
          <div className="bg-[#111111] px-3.5 py-2 border border-white/10 text-center min-w-[75px]">
            <span className="block text-base font-serif font-bold text-white/80">
              {medicineInventory.length}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/40">Total</span>
          </div>
        </div>
      </div>

      {/* Search Bar & Filters */}
      <div className="mt-5 space-y-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <input
            type="text"
            id="medicine-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by medicine name, brand (e.g. Dolo, Azithral, Omron, Insulin)..."
            className="w-full border border-white/15 bg-[#111111] pl-10 pr-24 py-3 text-xs text-white placeholder-white/30 focus:border-[#C5A059] focus:outline-none transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-16 top-1/2 -translate-y-1/2 text-[11px] text-white/40 hover:text-white px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => {}}
            id="btn-medicine-search"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C5A059] hover:bg-[#b5924a] text-black px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-bold transition cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] uppercase tracking-wider text-white/40 mr-1 flex items-center gap-1">
              <Filter className="h-3 w-3" /> Filter:
            </span>
            {(['All', 'Available', 'Limited Stock', 'Out of Stock'] as const).map(status => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 text-[11px] uppercase tracking-wider font-medium transition cursor-pointer ${
                  statusFilter === status
                    ? 'bg-[#C5A059] text-black font-bold'
                    : 'bg-[#111111] border border-white/10 text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Category Dropdown */}
          {!compact && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-white/40 uppercase tracking-wider text-[11px]">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-white/15 bg-[#111111] text-white/90 px-3 py-1 text-xs focus:border-[#C5A059] focus:outline-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat} className="bg-[#111] text-white">{cat}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Results List / Grid */}
      <div className="mt-5">
        {filteredMedicines.length === 0 ? (
          <div className="border border-dashed border-white/15 p-8 text-center bg-[#111111]/40">
            <AlertTriangle className="h-8 w-8 text-[#C5A059] mx-auto mb-2" />
            <h4 className="text-base font-serif text-white">
              No matching item in catalog
            </h4>
            <p className="text-xs text-white/50 max-w-md mx-auto mt-1 mb-4">
              We stock over 3,000+ pharmaceutical items in Masaurhi. Contact our pharmacist directly on WhatsApp to verify availability.
            </p>
            <button
              onClick={handleRequestUnlisted}
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black text-xs uppercase tracking-widest font-bold px-5 py-2.5 transition cursor-pointer"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Ask Pharmacist on WhatsApp</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredMedicines.slice(0, compact ? 6 : 16).map(med => (
              <div
                key={med.id}
                id={`medicine-card-${med.id}`}
                className="group relative border border-white/10 bg-[#111111] p-4.5 hover:border-[#C5A059]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C5A059]">
                        {med.brand}
                      </span>
                      <h4 className="text-sm font-serif font-normal text-white group-hover:text-[#C5A059] transition-colors mt-0.5">
                        {med.name}
                      </h4>
                    </div>

                    {/* Status Badge */}
                    <div className="shrink-0">
                      {med.status === 'Available' && (
                        <span className="inline-flex items-center gap-1 border border-[#C5A059]/40 bg-[#C5A059]/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-[#C5A059]">
                          <CheckCircle2 className="h-3 w-3 text-[#C5A059]" />
                          <span>Available</span>
                        </span>
                      )}
                      {med.status === 'Limited Stock' && (
                        <span className="inline-flex items-center gap-1 border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-amber-300">
                          <AlertTriangle className="h-3 w-3 text-amber-400" />
                          <span>Limited</span>
                        </span>
                      )}
                      {med.status === 'Out of Stock' && (
                        <span className="inline-flex items-center gap-1 border border-white/20 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-white/50">
                          <XCircle className="h-3 w-3 text-white/40" />
                          <span>Out of Stock</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-white/40 line-clamp-1 mb-2">
                    {med.category} • {med.dosage}
                  </p>
                </div>

                <div className="mt-2 pt-2.5 border-t border-white/10 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block">MRP</span>
                    <span className="text-sm font-serif font-bold text-white">
                      ₹{med.mrp.toFixed(2)}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block">Expiry</span>
                    <span className="text-xs font-mono text-white/60">
                      {med.expiry}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOrderClick(med)}
                    id={`btn-order-med-${med.id}`}
                    disabled={med.status === 'Out of Stock'}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold transition cursor-pointer ${
                      med.status === 'Out of Stock'
                        ? 'border border-white/10 text-white/30 cursor-not-allowed'
                        : 'bg-[#C5A059] hover:bg-[#b5924a] text-black'
                    }`}
                  >
                    <ShoppingBag className="h-3 w-3" />
                    <span>{med.status === 'Out of Stock' ? 'Notify' : 'Order'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Notice */}
      <div className="mt-4 pt-3 border-t border-white/10 text-center text-xs text-white/40">
        Prices reflect manufacturer MRP. For chronic prescription discounts or cold-chain storage confirmation, message us directly on WhatsApp.
      </div>
    </div>
  );
};
