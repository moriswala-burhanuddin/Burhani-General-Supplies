import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Tag, ShieldCheck, Flame } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export const PromoBanner: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-linear-to-r from-[#082B5C] via-[#0D3B7A] to-[#168ACB] p-8 sm:p-12 shadow-2xl border border-white/10 text-white">
          
          {/* Subtle Graphic background accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8C928]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#49C4E8]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Content (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E83B35] text-white text-xs font-black uppercase tracking-wider shadow-md">
                <Flame className="w-4 h-4 text-amber-300" />
                Limited Promotional Campaign
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Special Offers on Selected Rides
              </h2>

              <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
                Explore our current deals and speak to our Mtwapa team about available purchase options, complimentary accessory packages, and deposit assistance.
              </p>

              {/* Bonus Perks list based on Atul GEM PAXX screenshot */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
                  <div className="font-bold text-[#F8C928]">1 Year Warranty</div>
                  <div className="text-[10px] text-slate-300">20,000 KM Coverage</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
                  <div className="font-bold text-[#F8C928]">Free Accessories</div>
                  <div className="text-[10px] text-slate-300">Tyre & Cable Set</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
                  <div className="font-bold text-[#F8C928]">3 Free Services</div>
                  <div className="text-[10px] text-slate-300">Certified Technicians</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
                  <div className="font-bold text-[#F8C928]">Full Fuel Tank</div>
                  <div className="text-[10px] text-slate-300">Ready to Drive Away</div>
                </div>
              </div>

            </div>

            {/* CTAs (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <Link
                to="/vehicles?category=all&offers=true"
                className="w-full sm:w-auto px-6 py-4 bg-[#F8C928] hover:bg-[#E6AC00] text-[#082B5C] font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-102 active:scale-95"
              >
                <Tag className="w-4 h-4 text-[#082B5C]" />
                <span>Explore Current Offers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={buildWhatsAppLink("Hello Burhani General Supplies, please confirm the active promotional discounts available this week at KENBO Mtwapa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider rounded-2xl border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Ask on WhatsApp</span>
              </a>

              <span className="text-[10px] text-slate-300 text-center lg:text-right">
                * Offer terms valid while promotional stocks last.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
