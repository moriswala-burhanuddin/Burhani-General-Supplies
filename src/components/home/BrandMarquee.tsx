import React from 'react';

interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  logoUrl: string;
  accentColor: string;
}

// Exactly only the 3 official showroom brands from /public/brands
const BRANDS: BrandItem[] = [
  {
    id: 'atul',
    name: 'ATUL AUTO',
    tagline: 'Official Commercial 3-Wheelers & Tuk-Tuks',
    logoUrl: '/brands/ATUL_AUTO-Photoroom.png',
    accentColor: '#D32F2F'
  },
  {
    id: 'kenbo',
    name: 'KENBO MOTORS',
    tagline: 'Commuter Motorcycles & Electric Scooters',
    logoUrl: '/brands/Red Swoosh Emblem with KENBO Wordmark-Photoroom.png',
    accentColor: '#E53935'
  },
  {
    id: 'apsonic',
    name: 'APSONIC',
    tagline: 'Heavy Commercial Cargo 3-Wheelers',
    logoUrl: '/brands/Green APSONIC Shield Emblem.png',
    accentColor: '#1B5E20'
  }
];

export const BrandMarquee: React.FC = () => {
  // Repeat the 3 brands so it forms a seamless continuous moving slider
  const marqueeItems = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="py-6 sm:py-8 bg-white border-y border-slate-100 overflow-hidden relative">
      
      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0D6EFD] animate-pulse" />
          <span className="text-[11px] font-black tracking-wider uppercase text-slate-800 font-sans">
            OFFICIAL DEALERSHIP BRANDS • MTWAPA SHOWROOM
          </span>
        </div>
        <span className="text-xs font-semibold text-slate-400">
          Authorized Sales, OEM Spare Parts &amp; Warranties
        </span>
      </div>

      {/* Infinite Moving Slider Track Container */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left & Right Soft Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Animated Moving Track */}
        <div className="animate-brand-marquee flex items-center gap-6 sm:gap-8 py-2">
          {marqueeItems.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/90 hover:border-slate-400 hover:bg-white hover:shadow-md transition-all duration-300 shrink-0 select-none cursor-pointer group"
            >
              {/* Brand Logo */}
              <div className="w-16 h-12 sm:w-20 sm:h-14 flex items-center justify-center shrink-0">
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter drop-shadow-xs group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-display font-black text-slate-950 tracking-tight leading-tight group-hover:text-[#0D6EFD] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[11px] text-slate-500 font-semibold whitespace-nowrap">
                  {brand.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
