import React, { useState, useMemo } from 'react';
import { SPARE_PARTS } from '../data/parts';
import { formatKes, getPartEnquiryLink } from '../utils/whatsapp';

interface SparePartsPageProps {
  onOpenEnquiryModal: (vehicleName?: string, partName?: string) => void;
}

export const SparePartsPage: React.FC<SparePartsPageProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [customPartName, setCustomPartName] = useState('');
  const [customVehicleModel, setCustomVehicleModel] = useState('');
  const [customPhone, setCustomPhone] = useState('');
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const categories = ['All', 'Braking', 'Transmission', 'Engine', 'Tyres & Cables', 'Electrical', 'Suspension'];

  const filteredParts = useMemo(() => {
    return SPARE_PARTS.filter((part) => {
      if (selectedCategory !== 'All' && part.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = part.name.toLowerCase().includes(q);
        const matchesCompat = part.compatibleWith.toLowerCase().includes(q);
        const matchesSku = part.sku.toLowerCase().includes(q);
        return matchesName || matchesCompat || matchesSku;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleCustomRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPartName.trim() || !customPhone.trim()) return;
    setCustomSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Spare Parts Hero Banner matching Hero Visual Language */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl text-white">
          
          {/* Monumental Electric Blue Watermark Typography */}
          <div className="absolute -right-6 -bottom-10 pointer-events-none select-none opacity-20 hidden md:block">
            <span className="text-[120px] lg:text-[160px] font-display font-black tracking-widest text-[#0055D4]">
              PARTS
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0055D4]/30 border border-blue-400/40 text-xs font-black tracking-wider text-blue-200 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
                GENUINE OEM MTWAPA PARTS DEPOT • 100% FACTORY AUTHENTIC
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-none text-white">
                Genuine Spare Parts <br className="hidden sm:inline" />
                <span className="text-[#FFC107]">&amp; Maintenance Spares</span>
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-medium leading-relaxed">
                Protect your daily business revenue with 100% factory-original Atul Tuk-Tuk and KENBO motorbike spares. From brake shoes and heavy-duty 428D chains to oil filters and tyres, everything is tested for harsh coastal humidity and heavy roads.
              </p>

              {/* Quick Perks */}
              <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-bold">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white border border-white/15">
                  <span className="text-[#FFC107]">✓</span> Atul 392cc Genuine Spares
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white border border-white/15">
                  <span className="text-[#FFC107]">✓</span> KENBO 150cc Factory Parts
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white border border-white/15">
                  <span className="text-[#FFC107]">✓</span> Over-The-Counter Mtwapa Pickup
                </span>
              </div>
            </div>

            {/* Right Quick Contact Card (4 cols) */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 backdrop-blur-xs">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFC107]">
                PARTS COUNTER DESK
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Counter Hours</span>
                  <span className="font-bold text-white">Mon–Sat: 8 AM–6 PM</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Location</span>
                  <span className="font-bold text-white">Mtwapa Showroom</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Parts WhatsApp</span>
                  <span className="font-bold text-[#FFC107]">0104480590</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-300">Fitting Support</span>
                  <span className="font-bold text-emerald-400">Available on Site</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search */}
            <div className="md:col-span-6 relative">
              <svg className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search spare parts (e.g. Brake Shoe, 428D Chain, Cable)..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white transition-all"
              />
            </div>

            {/* Category Pills */}
            <div className="md:col-span-6 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Showing {filteredParts.length} authentic parts listings</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#0D6EFD] hover:underline cursor-pointer"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredParts.map((part) => (
            <div
              key={part.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-50 p-2 mb-4 flex items-center justify-center">
                  <img
                    src={part.imageUrl}
                    alt={part.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-slate-950/90 text-white text-[9px] font-extrabold uppercase tracking-wider rounded-md">
                    {part.category}
                  </span>
                </div>

                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  SKU: {part.sku}
                </div>

                <h3 className="text-sm font-display font-bold text-slate-950 mt-1 line-clamp-2 leading-snug">
                  {part.name}
                </h3>

                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed font-medium">
                  {part.description}
                </p>

                <div className="mt-3 p-2 bg-slate-50 rounded-xl text-[11px] text-slate-700 font-medium border border-slate-100">
                  <strong className="text-slate-900 font-bold">Fits:</strong> {part.compatibleWith}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase font-semibold block">Counter Price</span>
                    <span className="text-base font-display font-black text-slate-950">
                      {formatKes(part.priceKes)}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80">
                    In Stock
                  </span>
                </div>

                <a
                  href={getPartEnquiryLink(part.name, part.compatibleWith)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs hover:-translate-y-0.5"
                >
                  <span>Enquire on WhatsApp</span>
                  <span>&rarr;</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Can't Find Part? Inquiry Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider block">
                CUSTOM SPARES PROCUREMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">
                Looking for a Specific Part or Engine Component?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                If your required component is not listed in this catalogue, send our Mtwapa workshop desk the part name and your vehicle model. We check physical warehouse availability and confirm dispatch.
              </p>
            </div>

            <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              {customSubmitted ? (
                <div className="text-center py-6 space-y-2">
                  <span className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-base font-bold">✓</span>
                  <div className="text-sm font-bold text-slate-950">Parts Request Sent</div>
                  <p className="text-xs text-slate-600">Our technicians will verify stock for "{customPartName}".</p>
                </div>
              ) : (
                <form onSubmit={handleCustomRequest} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={customPartName}
                    onChange={(e) => setCustomPartName(e.target.value)}
                    placeholder="Part Name or Description (e.g., Carburetor, Piston Ring)..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD]"
                  />
                  <input
                    type="text"
                    value={customVehicleModel}
                    onChange={(e) => setCustomVehicleModel(e.target.value)}
                    placeholder="Vehicle Model & Year (e.g., Atul Rik 2024 / Kenbo 150)..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD]"
                  />
                  <input
                    type="tel"
                    required
                    value={customPhone}
                    onChange={(e) => setCustomPhone(e.target.value)}
                    placeholder="Your WhatsApp / Phone Number *"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    Check Parts Availability &rarr;
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Compatibility Disclaimer Notice */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-medium">
          <strong className="text-slate-900">Parts Compatibility Notice:</strong> Availability, exact vehicle model compatibility, and pricing must always be confirmed directly with our Mtwapa workshop technicians before purchase or counter collection.
        </div>

      </div>
    </div>
  );
};
