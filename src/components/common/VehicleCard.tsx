import React from 'react';
import { Link } from 'react-router-dom';
import type { Vehicle } from '../../types';
import { formatKes, getVehicleEnquiryLink } from '../../utils/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
  onQuickEnquire?: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const priceDisplay = formatKes(vehicle.priceKes);
  const previousPriceDisplay = vehicle.previousPriceKes ? formatKes(vehicle.previousPriceKes) : null;
  const savings = (vehicle.previousPriceKes && vehicle.priceKes)
    ? vehicle.previousPriceKes - vehicle.priceKes
    : null;

  // Prefer clean cutout image if available
  const cutoutMap: Record<string, string> = {
    'atul-rik-petrol': '/images/atul-rik-Photoroom.png',
    'atul-gem-paxx': '/images/atul-gem-paxx-Photoroom.png',
    'kenbo-150-commuter': '/images/kenbo-commuter-Photoroom.png',
    'delivery-cargo-125': '/images/delivery-motorcycle-Photoroom.png',
    'atul-shakti-cargo': '/images/cargo-tuktuk-Photoroom.png',
    'kenbo-cruiser-150': '/images/kenbo-commuter-Photoroom.png'
  };

  const displayImage = cutoutMap[vehicle.id] || vehicle.imageUrl;

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image Stage */}
      <div className="relative aspect-4/3 overflow-hidden bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4 border-b border-slate-100">
        
        {/* Subtle Brand Watermark behind cutout */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-6xl sm:text-7xl font-display font-black tracking-widest text-blue-600/[0.07] uppercase">
            {vehicle.brand === 'Atul Auto' ? 'ATUL' : 'KENBO'}
          </span>
        </div>

        <img
          src={displayImage}
          alt={vehicle.name}
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_16px_18px_rgba(0,0,0,0.18)] group-hover:scale-106 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Pill Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
          <span className="px-2.5 py-0.5 bg-[#0B111A] text-white text-[9px] font-extrabold uppercase tracking-wider rounded-full shadow-xs">
            {vehicle.category === 'tuk-tuk' ? '3-Wheeler Tuk-Tuk' : 'Motorcycle'}
          </span>
        </div>

        {/* Offer / Badge Top Right */}
        {vehicle.badge && (
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2.5 py-0.5 bg-[#FFC107] text-slate-950 font-extrabold text-[10px] uppercase tracking-wider rounded-full shadow-xs">
              {vehicle.badge}
            </span>
          </div>
        )}

        {/* Savings Ribbon */}
        {savings && (
          <div className="absolute bottom-3 left-3 z-20">
            <span className="px-2 py-0.5 bg-[#E53935] text-white font-extrabold text-[10px] uppercase rounded-full shadow-xs">
              Save KES {savings.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
            <span className="text-[#0D6EFD]">{vehicle.brand}</span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80 font-bold">
              Showroom In Stock
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-950 tracking-tight leading-snug group-hover:text-[#0D6EFD] transition-colors">
            <Link to={`/vehicles/${vehicle.slug}`}>
              {vehicle.name}
            </Link>
          </h3>

          <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">
            {vehicle.shortDesc}
          </p>

          {/* Quick Specs Snippets */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-semibold">
            <span>{vehicle.specs.fuelType?.split(' ')[0]}</span>
            <span>•</span>
            <span>{vehicle.specs.seatingCapacity?.split(',')[0]}</span>
            <span>•</span>
            <span className="text-[#0D6EFD] font-bold">{vehicle.financingAvailable ? 'Mogo Financing' : 'Cash'}</span>
          </div>
        </div>

        {/* Pricing Block & Actions */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">
                Official Price
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-display font-black text-slate-950">
                  {priceDisplay}
                </span>
                {previousPriceDisplay && (
                  <span className="text-xs text-slate-400 line-through font-semibold">
                    {previousPriceDisplay}
                  </span>
                )}
              </div>
            </div>

            {vehicle.financingAvailable && (
              <span className="text-[10px] text-slate-500 font-semibold">
                Daily plans avail.
              </span>
            )}
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              to={`/vehicles/${vehicle.slug}`}
              className="py-2 px-3 text-center rounded-full border border-slate-200 hover:border-slate-900 text-slate-800 hover:text-slate-950 font-bold text-xs transition-colors"
            >
              Details &rarr;
            </Link>

            <a
              href={getVehicleEnquiryLink(vehicle.name, priceDisplay)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 text-center rounded-full bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-extrabold text-xs shadow-xs transition-transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-1"
            >
              <span>WhatsApp</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
