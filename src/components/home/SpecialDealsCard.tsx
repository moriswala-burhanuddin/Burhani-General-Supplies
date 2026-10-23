import React from 'react';
import { Link } from 'react-router-dom';
import { DEALERSHIP_WHATSAPP } from '../../utils/whatsapp';

export const SpecialDealsCard: React.FC = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 group">
      
      {/* Left Text Content */}
      <div className="lg:w-1/2 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
          <span className="text-[10px] font-extrabold text-[#E53935] uppercase tracking-wider">
            LIMITED TIME MTWAPA OFFERS
          </span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 tracking-tight leading-tight">
          Special Commercial Packages<br />On Selected Fleet
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
          Every vehicle purchased at Burhani General Supplies Mtwapa includes our authorized dealer support package.
        </p>

        {/* 3 Package Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
            <span className="text-[#0D6EFD] font-bold text-sm block">01</span>
            <strong className="text-slate-900 text-xs font-bold block mt-0.5">Free Registration</strong>
            <span className="text-[10px] text-slate-500">Mtwapa & Kilifi county</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
            <span className="text-[#0D6EFD] font-bold text-sm block">02</span>
            <strong className="text-slate-900 text-xs font-bold block mt-0.5">3 Free Services</strong>
            <span className="text-[10px] text-slate-500">Official dealer counter</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
            <span className="text-[#0D6EFD] font-bold text-sm block">03</span>
            <strong className="text-slate-900 text-xs font-bold block mt-0.5">Genuine Warranty</strong>
            <span className="text-[10px] text-slate-500">1-Year engine protection</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={`https://wa.me/${DEALERSHIP_WHATSAPP}?text=Hello%20Burhani,%20I%20am%20interested%20in%20your%20current%20special%20offers%20package.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 rounded-full text-xs font-bold shadow-xs inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
          >
            <span>Claim Offer on WhatsApp</span>
            <span>&rarr;</span>
          </a>

          <Link
            to="/vehicles?category=all&offers=true"
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full text-xs font-bold transition-colors"
          >
            View All Offers
          </Link>
        </div>
      </div>

      {/* Right Visual of Tuk-Tuk and Bike Cutouts */}
      <div className="lg:w-1/2 flex items-center justify-center relative min-h-[220px] sm:min-h-[260px]">
        <div className="relative w-full max-w-md flex items-center justify-center">
          {/* Tuk-Tuk */}
          <img
            src="/images/atul-rik-Photoroom.png"
            alt="Atul Rik Special Deal"
            className="w-3/4 object-contain drop-shadow-xl z-10 transform -rotate-1 group-hover:scale-103 transition-transform duration-500"
          />
          {/* Motorcycle behind */}
          <img
            src="/images/kenbo-commuter-Photoroom.png"
            alt="KENBO Motorcycle"
            className="w-1/2 object-contain drop-shadow-lg absolute -right-2 top-0 opacity-85 z-0"
          />
          <div className="w-3/4 h-4 bg-black/20 rounded-[100%] blur-sm mx-auto absolute bottom-0 pointer-events-none" />
        </div>
      </div>

    </div>
  );
};
