import React from 'react';
import { Link } from 'react-router-dom';

export const AboutDealershipCard: React.FC = () => {
  return (
    <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12">
      
      {/* Left: Building Photo (5 cols) */}
      <div className="md:col-span-5 relative min-h-[260px] overflow-hidden">
        <img
          src="/images/dealership-building.jpg"
          alt="Burhani General Supplies Dealership in Mtwapa Kenya"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#082B5C] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
          Mtwapa Showroom
        </div>
      </div>

      {/* Right: Content (7 cols) */}
      <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 uppercase tracking-tight">
            Why Choose<br />Burhani General Supplies?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
            A one-stop destination for motorcycles, tuk-tuks, spare parts and financing guidance in Mtwapa and the surrounding areas.
          </p>

          {/* 4 Feature Items */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 text-center text-xs">
            <div className="space-y-1.5">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-slate-200 text-slate-800 flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div className="font-bold text-slate-900 text-[11px] leading-tight">Wide Range of Vehicles</div>
            </div>

            <div className="space-y-1.5">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-slate-200 text-slate-800 flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="font-bold text-slate-900 text-[11px] leading-tight">Quality Spare Parts</div>
            </div>

            <div className="space-y-1.5">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-slate-200 text-slate-800 flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="font-bold text-slate-900 text-[11px] leading-tight">Financing Information</div>
            </div>

            <div className="space-y-1.5">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-slate-200 text-slate-800 flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="font-bold text-slate-900 text-[11px] leading-tight">Direct Enquiry Support</div>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <Link
            to="/about"
            className="btn-pill-yellow text-xs font-bold shadow-sm"
          >
            <span>Learn More</span>
            <span>&rarr;</span>
          </Link>

          <span className="font-script text-xl sm:text-2xl text-slate-500 transform -rotate-6">
            Mtwapa, Kenya
          </span>
        </div>
      </div>

    </div>
  );
};
