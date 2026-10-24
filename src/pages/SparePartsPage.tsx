import React from 'react';
import { DEALERSHIP_PHONE, DEALERSHIP_WHATSAPP, buildWhatsAppLink } from '../utils/whatsapp';

interface SparePartsPageProps {
  onOpenEnquiryModal?: (vehicleName?: string, partName?: string) => void;
}

export const SparePartsPage: React.FC<SparePartsPageProps> = () => {
  const whatsAppText = "Hello Burhani General Supplies (KENBO Mtwapa), I would like to inquire about spare parts availability and pricing for my vehicle.";

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Spare Parts Hero Banner matching Hero Visual Language */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl text-white">
          
          {/* Monumental Electric Blue Watermark Typography */}
          <div className="absolute -right-6 -bottom-10 pointer-events-none select-none opacity-20 hidden md:block">
            <span className="text-[120px] lg:text-[160px] font-display font-black tracking-widest text-[#0055D4]">
              PARTS
            </span>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0055D4]/30 border border-blue-400/40 text-xs font-black tracking-wider text-blue-200 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
              GENUINE OEM MTWAPA PARTS DEPOT • 100% FACTORY AUTHENTIC
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-none text-white">
              Genuine Spare Parts <br className="hidden sm:inline" />
              <span className="text-[#FFC107]">&amp; Maintenance Accessories</span>
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-medium leading-relaxed">
              We stock genuine factory-certified replacement parts, cables, brake shoes, chains, filters, and tyres for all Atul Tuk-Tuks and KENBO motorcycles at our Mtwapa showroom counter.
            </p>
          </div>
        </div>

        {/* Clean Blank Catalogue Card with Direct Contact Assistance */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-14 text-center max-w-3xl mx-auto space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 text-[#0055D4] flex items-center justify-center mx-auto text-2xl font-bold shadow-xs">
            ⚙️
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-950 tracking-tight">
              Spare Parts Counter &amp; Direct Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto font-medium leading-relaxed">
              Our digital parts listings are currently being updated. For immediate over-the-counter stock availability, pricing, or workshop orders in Mtwapa, please contact our parts desk directly.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={buildWhatsAppLink(whatsAppText)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-xs transition-transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current text-slate-950" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z"/>
              </svg>
              <span>Parts Desk WhatsApp (0104480590)</span>
              <span>&rarr;</span>
            </a>

            <a
              href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Call Showroom: {DEALERSHIP_PHONE}</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-semibold flex flex-wrap items-center justify-center gap-4">
            <span>📍 Mombasa-Malindi Highway, Mtwapa</span>
            <span>•</span>
            <span>🕒 Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

      </div>
    </div>
  );
};
