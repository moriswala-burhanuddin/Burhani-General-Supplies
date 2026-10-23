import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export const HeroSection: React.FC<{ onOpenQuoteModal?: () => void }> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 0, num: '01', name: 'Motorcycles', link: '/vehicles?category=motorcycle' },
    { id: 1, num: '02', name: 'Tuk-Tuks', link: '/vehicles?category=tuk-tuk' },
    { id: 2, num: '03', name: 'Spare Parts', link: '/spare-parts' },
    { id: 3, num: '04', name: 'Financing', link: '/financing' }
  ];

  return (
    <section className="relative bg-[#F8F6F0] overflow-hidden border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (6 cols): Editorial Typography */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            
            <div className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
              MTWAPA / KENYA
            </div>

            {/* Editorial Bold Headline */}
            <div className="font-display font-extrabold leading-[0.9] text-slate-950 uppercase select-none tracking-tight">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                BUILT
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#0D6EFD]">
                <span>TO KEEP</span>
                <span className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-slate-950 text-white inline-flex items-center justify-center text-base sm:text-lg lg:text-xl font-bold shrink-0">
                  &rarr;
                </span>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                MTWAPA
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                MOVING
              </div>
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed font-medium">
              Motorcycles, Tuk-Tuks, spare parts and financing support - all in one place at Burhani General Supplies.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/vehicles"
                className="btn-pill-yellow text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm"
              >
                <span>Explore Vehicles</span>
                <span>&rarr;</span>
              </Link>

              <a
                href={buildWhatsAppLink("Hello Burhani General Supplies, I would like to get a quote for a vehicle in Mtwapa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-outline text-xs sm:text-sm"
              >
                <svg className="w-4 h-4 fill-current text-slate-700" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
                <span>Get a Quote</span>
              </a>
            </div>

          </div>

          {/* Right Column (6 cols): Tuk-Tuk on Blue Geometric Backdrop */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Blue Geometric Angle Banner */}
            <div 
              className="relative w-full max-w-md lg:max-w-lg aspect-4/3 bg-gradient-to-tr from-[#0D6EFD] to-[#0052CC] rounded-3xl overflow-hidden p-5 sm:p-6 shadow-xl"
              style={{
                clipPath: 'polygon(0% 0%, 100% 3%, 100% 97%, 0% 100%)'
              }}
            >
              {/* Top Right White Typography Overlay */}
              <div className="absolute top-4 sm:top-5 right-5 sm:right-6 text-right font-display text-white text-[11px] sm:text-xs tracking-widest uppercase leading-tight font-extrabold opacity-90">
                RELIABLE RIDES<br />
                REAL SUPPORT<br />
                FOR A STRONGER<br />
                TOMORROW.
              </div>

              {/* Handwritten Script (Mtwapa Kenya) */}
              <div className="absolute right-5 sm:right-6 top-24 sm:top-28 text-right">
                <span className="font-script text-2xl sm:text-3xl text-[#F8C928] leading-none block transform -rotate-6">
                  Mtwapa Kenya
                </span>
                <span className="inline-block w-12 sm:w-16 h-0.5 bg-[#F8C928] transform -rotate-3" />
              </div>

              {/* Yellow Tuk-Tuk Cutout */}
              <img
                src="/images/atul-rik.jpg"
                alt="Atul Rik Tuk-Tuk at Burhani General Supplies Mtwapa"
                className="relative z-10 w-full h-auto max-h-[250px] sm:max-h-[300px] object-contain mt-8 sm:mt-10 drop-shadow-2xl hover:scale-102 transition-transform duration-500"
              />
            </div>

          </div>

        </div>

        {/* Bottom Ticker / Category Indicator Bar */}
        <div className="mt-8 pt-5 border-t border-slate-300/80 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-700">
          
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.link}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-1 relative transition-colors ${
                  activeTab === tab.id ? 'text-slate-950 font-bold' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span className="font-mono text-[10px] text-slate-400">{tab.num}</span>
                <span>{tab.name}</span>
                {activeTab === tab.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#0D6EFD]" />
                )}
              </Link>
            ))}
          </div>

          {/* Floating Down Circle Indicator */}
          <a
            href="#categories"
            className="w-10 h-10 rounded-full bg-white text-[#0D6EFD] border border-slate-200 shadow-sm flex items-center justify-center font-bold text-base hover:bg-slate-50 transition-colors"
            title="Scroll Down"
          >
            &darr;
          </a>

        </div>

      </div>
    </section>
  );
};
