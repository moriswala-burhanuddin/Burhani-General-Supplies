import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VEHICLES } from '../../data/products';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export const FeaturedVehicleSpotlight: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const featuredList = VEHICLES.slice(0, 4);
  const vehicle = featuredList[currentIdx] || featuredList[0];

  const nextVehicle = () => {
    setCurrentIdx((prev) => (prev + 1) % featuredList.length);
  };

  const prevVehicle = () => {
    setCurrentIdx((prev) => (prev - 1 + featuredList.length) % featuredList.length);
  };

  const whatsAppText = `Hello Burhani General Supplies, I am inquiring about the ${vehicle.name} featured on your website.`;

  return (
    <div className="bg-[#FAF8F5] rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
      
      {/* Top Header Row with Pager */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200/80 mb-6">
        <span className="text-xs font-display tracking-widest text-slate-500 uppercase font-bold">
          FEATURED VEHICLE
        </span>
        <div className="flex items-center gap-3 text-xs font-mono font-semibold text-slate-500">
          <span>0{currentIdx + 1}/0{featuredList.length}</span>
          <div className="flex items-center gap-1">
            <button
              onClick={prevVehicle}
              className="p-1 hover:text-slate-900 transition-colors"
              aria-label="Previous Vehicle"
            >
              &larr;
            </button>
            <button
              onClick={nextVehicle}
              className="p-1 hover:text-slate-900 transition-colors"
              aria-label="Next Vehicle"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Details & Right Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Info (6 cols) */}
        <div className="lg:col-span-6 space-y-5">
          
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 uppercase tracking-tight leading-tight">
            {vehicle.name}
          </h3>

          {/* Badges */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full border border-slate-300 text-[11px] font-semibold text-slate-700">
              {vehicle.category === 'tuk-tuk' ? 'Tuk-Tuk' : 'Motorcycle'}
            </span>
            {vehicle.badge && (
              <span className="px-3 py-0.5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold">
                {vehicle.badge}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-2xl sm:text-3xl font-bold text-[#DC2626]">
              {vehicle.priceKes ? `KES ${vehicle.priceKes.toLocaleString()}` : 'Request a Quote'}
            </span>
            {vehicle.previousPriceKes && (
              <span className="text-sm font-semibold text-slate-400 line-through">
                KES {vehicle.previousPriceKes.toLocaleString()}
              </span>
            )}
          </div>

          {/* Feature Bullets with Black Dots */}
          <ul className="space-y-2 text-xs font-medium text-slate-700">
            {vehicle.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={buildWhatsAppLink(whatsAppText)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-yellow text-xs font-bold shadow-sm"
            >
              <span>Enquire on WhatsApp</span>
              <span>&rarr;</span>
            </a>

            <Link
              to={`/vehicles/${vehicle.slug}`}
              className="btn-pill-outline text-xs"
            >
              Request More Information
            </Link>
          </div>

        </div>

        {/* Right Image & Thumbnails (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full aspect-4/3 flex items-center justify-center">
            <img
              src={vehicle.imageUrl}
              alt={vehicle.name}
              className="w-full h-full object-contain max-h-[300px] drop-shadow-xl"
            />
          </div>

          {/* 4 Small Thumbnails below vehicle */}
          <div className="mt-4 flex items-center justify-center gap-3">
            {featuredList.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setCurrentIdx(i)}
                className={`w-14 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                  currentIdx === i ? 'border-[#0D6EFD] ring-2 ring-blue-200' : 'border-slate-200 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
