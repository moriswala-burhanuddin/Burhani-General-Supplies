import React from 'react';
import { Link } from 'react-router-dom';
import { DEALERSHIP_WHATSAPP } from '../../utils/whatsapp';

export const KenboMotorcycleCard: React.FC = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-[#0B111A] text-white border border-slate-800 shadow-xl p-6 sm:p-8 flex flex-col justify-between min-h-[380px] group">
      
      {/* Top Header Row */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-slate-400 block">02</span>
          <span className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider mt-1 block">
            OFFICIAL COMMUTER BIKE
          </span>
          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1 leading-tight tracking-tight">
            KENBO 150cc<br />Motorcycle
          </h3>
        </div>

        <div className="text-right">
          <span className="bg-[#FFC107] text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs">
            KES 145,000
          </span>
          <span className="text-[10px] text-slate-400 block mt-1">or KES 300/day</span>
        </div>
      </div>

      {/* Center Transparent Motorcycle Cutout Illustration */}
      <div className="relative z-10 my-4 flex items-center justify-center h-44 sm:h-48">
        <img
          src="/images/kenbo-commuter-Photoroom.png"
          alt="KENBO 150cc Motorcycle in Mtwapa"
          className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-106 transition-transform duration-500"
        />
        {/* Subtle ground shadow */}
        <div className="absolute -bottom-1 w-3/4 h-3 bg-black/40 rounded-[100%] blur-sm pointer-events-none" />
      </div>

      {/* Bottom Features & Action */}
      <div className="relative z-10 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D6EFD]" />
            62 km/L Economy
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D6EFD]" />
            12L Tank
          </span>
          <span>•</span>
          <span>5-Speed</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${DEALERSHIP_WHATSAPP}?text=Hello%20Burhani,%20I%20am%20inquiring%20about%20the%20KENBO%20150cc%20Motorcycle.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold transition-colors"
          >
            WhatsApp
          </a>
          <Link
            to="/vehicles/kenbo-150-commuter"
            className="px-4 py-1.5 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 rounded-full text-xs font-bold shadow-xs inline-flex items-center gap-1 transition-transform hover:-translate-y-0.5"
          >
            <span>Quote</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>

    </div>
  );
};
