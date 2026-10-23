import React from 'react';
import { Link } from 'react-router-dom';

export const CategoryCards: React.FC = () => {
  return (
    <section id="categories" className="space-y-6">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <span className="text-xs font-extrabold text-[#0D6EFD] uppercase tracking-wider block">
            FLEET CATEGORIES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-0.5">
            Explore Showroom by Vehicle Type
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Official commercial 3-wheelers, commuter motorbikes, and genuine spare parts in Mtwapa.
          </p>
        </div>

        <Link
          to="/vehicles"
          className="text-xs font-bold text-slate-700 hover:text-[#0D6EFD] transition-colors inline-flex items-center gap-1 group shrink-0"
        >
          <span>View All Models</span>
          <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
        </Link>
      </div>

      {/* 3 Editorial Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: TUK-TUKS & 3-WHEELERS */}
        <Link
          to="/vehicles?category=tuk-tuk"
          className="group relative rounded-3xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/90 p-6 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 block">01</span>
              <span className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider mt-1 block">
                COMMERCIAL 3-WHEELERS
              </span>
              <h3 className="text-2xl font-display font-extrabold text-slate-950 mt-0.5 leading-tight">
                Tuk-Tuks &<br />3-Wheelers
              </h3>
            </div>
            
            <span className="bg-[#E53935] text-white text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
              From KES 390K
            </span>
          </div>

          {/* Transparent Cutout Illustration */}
          <div className="my-3 flex items-center justify-center h-36 relative">
            <img
              src="/images/atul-gem-paxx-Photoroom.png"
              alt="Tuk-Tuks in Mtwapa"
              className="w-full h-full object-contain drop-shadow-lg group-hover:scale-108 transition-transform duration-500"
            />
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-200/80">
            <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
              Atul Rik & GEM PAXX Models
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-950 text-white group-hover:bg-[#FFC107] group-hover:text-slate-950 flex items-center justify-center text-xs font-bold transition-all shadow-2xs">
              &rarr;
            </div>
          </div>
        </Link>

        {/* Card 2: COMMERCIAL MOTORCYCLES */}
        <Link
          to="/vehicles?category=motorcycle"
          className="group relative rounded-3xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/90 p-6 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 block">02</span>
              <span className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider mt-1 block">
                COMMUTER FLEET
              </span>
              <h3 className="text-2xl font-display font-extrabold text-slate-950 mt-0.5 leading-tight">
                Commercial<br />Motorcycles
              </h3>
            </div>
            
            <span className="bg-[#082B5C] text-white text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
              From KES 145K
            </span>
          </div>

          {/* Transparent Cutout Illustration */}
          <div className="my-3 flex items-center justify-center h-36 relative">
            <img
              src="/images/kenbo-commuter-Photoroom.png"
              alt="Motorcycles in Mtwapa"
              className="w-full h-full object-contain drop-shadow-lg group-hover:scale-108 transition-transform duration-500"
            />
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-200/80">
            <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
              KENBO 150cc & Delivery 125cc
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-950 text-white group-hover:bg-[#FFC107] group-hover:text-slate-950 flex items-center justify-center text-xs font-bold transition-all shadow-2xs">
              &rarr;
            </div>
          </div>
        </Link>

        {/* Card 3: CARGO & LOGISTICS 3-WHEELERS */}
        <Link
          to="/vehicles?category=tuk-tuk"
          className="group relative rounded-3xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/90 p-6 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 block">03</span>
              <span className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider mt-1 block">
                HEAVY COMMERCIAL
              </span>
              <h3 className="text-2xl font-display font-extrabold text-slate-950 mt-0.5 leading-tight">
                Cargo Flatbeds<br />& Pickups
              </h3>
            </div>
            
            <span className="bg-[#0055D4] text-white text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
              500KG RATED
            </span>
          </div>

          {/* Transparent Cutout Illustration */}
          <div className="my-3 flex items-center justify-center h-36 relative">
            <img
              src="/images/cargo-tuktuk-Photoroom.png"
              alt="Cargo Tuk-Tuks"
              className="w-full h-full object-contain drop-shadow-lg group-hover:scale-108 transition-transform duration-500"
            />
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-200/80">
            <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
              ATUL Elite Cargo Commercial
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-950 text-white group-hover:bg-[#FFC107] group-hover:text-slate-950 flex items-center justify-center text-xs font-bold transition-all shadow-2xs">
              &rarr;
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
};
