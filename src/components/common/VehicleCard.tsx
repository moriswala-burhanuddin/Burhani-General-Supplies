import React from 'react';
import { Link } from 'react-router-dom';
import type { Vehicle } from '../../types';
import { formatKes, getVehicleEnquiryLink } from '../../utils/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
  onQuickEnquire?: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const priceDisplay = vehicle.priceKes
    ? `${vehicle.pricePrefix ? `${vehicle.pricePrefix} ` : ''}KES ${vehicle.priceKes.toLocaleString()}`
    : 'Request a Quote';
  const previousPriceDisplay = vehicle.previousPriceKes ? formatKes(vehicle.previousPriceKes) : null;
  const savings = (vehicle.previousPriceKes && vehicle.priceKes)
    ? vehicle.previousPriceKes - vehicle.priceKes
    : null;

  const displayImage = vehicle.imageUrl;

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image Stage with Taller Studio Frame for Cutouts */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/70 flex items-center justify-center p-4 border-b border-slate-100">
        
        {/* Subtle Brand Watermark behind cutout */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-5xl sm:text-6xl font-display font-black tracking-widest text-slate-900/[0.04] uppercase">
            {vehicle.brand.toUpperCase()}
          </span>
        </div>

        <img
          src={displayImage}
          alt={vehicle.name}
          className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_14px_16px_rgba(0,0,0,0.14)] group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Pill Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
          <span className="px-2.5 py-0.5 bg-[#0B111A] text-white text-[9px] font-extrabold uppercase tracking-wider rounded-full shadow-xs">
            {vehicle.category === 'tuk-tuk' ? '3-Wheeler' : vehicle.name.toLowerCase().includes('scooter') ? 'Scooter' : 'Motorcycle'}
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
            <a
              href={getVehicleEnquiryLink(vehicle.name, priceDisplay)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {vehicle.name}
            </a>
          </h3>

          {/* DONT ADD DESC: Description paragraph removed completely per user instruction */}

          {/* Quick Specs Snippets */}
          {vehicle.specs && (
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-semibold">
              <span>{vehicle.specs.fuelType?.split(' ')[0] || 'Official'}</span>
              <span>•</span>
              <span>{vehicle.specs.seatingCapacity?.split(',')[0] || 'Coast Spec'}</span>
              <span>•</span>
              <span className="text-[#0D6EFD] font-bold">{vehicle.financingAvailable ? 'Mogo Financing' : 'Cash'}</span>
            </div>
          )}
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

          {/* Direct WhatsApp Enquiry CTA */}
          <div className="pt-1">
            <a
              href={getVehicleEnquiryLink(vehicle.name, priceDisplay)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 text-center rounded-2xl bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-black text-xs uppercase tracking-wider shadow-xs transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current text-slate-950" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z"/>
              </svg>
              <span>Enquire on WhatsApp</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
