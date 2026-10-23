import React from 'react';
import { DEALERSHIP_PHONE, DEALERSHIP_WHATSAPP, buildWhatsAppLink } from '../utils/whatsapp';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Showcase Banner */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl text-white">
          
          {/* Monumental Electric Blue Watermark Typography */}
          <div className="absolute -right-6 -bottom-10 pointer-events-none select-none opacity-20 hidden md:block">
            <span className="text-[120px] lg:text-[160px] font-display font-black tracking-widest text-[#0055D4]">
              MTWAPA
            </span>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0055D4]/30 border border-blue-400/40 text-xs font-black tracking-wider text-blue-200 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
              OFFICIAL KENBO &amp; ATUL SHOWROOM • MTWAPA
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight">
              Burhani General Supplies <br />
              <span className="text-[#FFC107] font-black">(KENBO MTWAPA)</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Quality rides, top service! Dealers in Motorbikes, Tuktuks, Spares and Accessories. Serving Mtwapa, Mombasa, Kilifi, and Ukunda with genuine inventory and flexible Mogo daily financing.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold">
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
                <span className="text-[#FFC107]">✓</span> Official Atul Auto 3-Wheelers
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
                <span className="text-[#FFC107]">✓</span> Genuine KENBO Commuter Bikes
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
                <span className="text-[#FFC107]">✓</span> Dedicated Parts Counter &amp; Workshop
              </span>
            </div>
          </div>
        </div>

        {/* Storefront Image & Dealership Core Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0D6EFD] block">
              OUR MISSION & FOOTPRINT
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-950 tracking-tight leading-tight">
              Empowering Coastal Transport & Business Mobility
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              In the Coast region of Kenya, motorcycles and 3-wheeler tuk-tuks represent the lifeblood of urban transport and micro-enterprise. From daily commuter runs between Mtwapa, Bamburi, and Mombasa Island, to cargo transit for local hardware and fresh produce merchants, reliable vehicles are indispensable.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              At Burhani General Supplies, our showroom in Mtwapa provides clients with transparent access to verified models—primarily <strong>Atul Auto</strong> 3-wheelers (such as the Atul Rik Petrol and Atul GEM PAXX) and genuine <strong>KENBO</strong> motorbikes, supported by readily available spare parts.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0D6EFD] shrink-0" />
                <span className="font-bold text-slate-900">Atul Passenger & Cargo Tuk-Tuks</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0D6EFD] shrink-0" />
                <span className="font-bold text-slate-900">KENBO Commuter Motorbikes</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0D6EFD] shrink-0" />
                <span className="font-bold text-slate-900">Genuine Spare Parts Warehouse</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0D6EFD] shrink-0" />
                <span className="font-bold text-slate-900">Mogo Asset Financing Desk</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Real Storefront Photo */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
              <img
                src="/images/dealership-building.jpg"
                alt="Burhani Dealership Building in Mtwapa"
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-[#082B5C] text-white px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider">
                Official Showroom • Mtwapa
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
              <h3 className="text-base font-display font-extrabold text-slate-950">
                Customer Service Philosophy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Customer trust is the heart of our operations. We provide transparent vehicle specifications, realistic pricing without hidden costs, and dedicated post-purchase mechanical support.
              </p>
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700 font-medium italic">
                “Quality rides, top service! Dealers in Motorbikes, Tuktuks, Spares and Accessories.”
                <span className="block mt-1 font-bold text-slate-900 not-italic">— Burhani General Supplies</span>
              </div>
            </div>
          </div>

        </div>

        {/* Location Section */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0D6EFD] block">
                SHOWROOM LOCATION
              </span>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">
                Based in Mtwapa, Serving Coastal Kenya
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Our main dealership presence is located along the <strong>Mombasa-Malindi Highway in Mtwapa, Kilifi County</strong>, positioned conveniently for customers across Mombasa North Coast, Kilifi, Bamburi, Nyali, and extending south towards Ukunda.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700 font-medium">
                <div><strong className="text-slate-900">Primary Town:</strong> Mtwapa, Kilifi County, Kenya</div>
                <div><strong className="text-slate-900">Regional Coverage:</strong> Mombasa, Mtwapa, Bamburi, Kilifi & Ukunda</div>
                <div><strong className="text-slate-900">Showroom Hours:</strong> Monday – Saturday, 8:00 AM – 6:00 PM</div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0B111A] text-white p-6 sm:p-8 rounded-3xl space-y-4 border border-slate-800">
              <h4 className="text-base font-display font-bold text-white">Contact the Dealership Directly</h4>
              <p className="text-xs text-slate-300 font-medium">
                Speak with our team to arrange an in-person vehicle inspection or counter collection in Mtwapa.
              </p>
              
              <div className="space-y-2.5 pt-2 text-xs">
                <a
                  href={`https://wa.me/${DEALERSHIP_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 rounded-xl flex items-center justify-center gap-2 font-extrabold transition-all shadow-xs"
                >
                  <span>Chat on WhatsApp (+254 104 480 590)</span>
                  <span>&rarr;</span>
                </a>

                <a
                  href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`}
                  className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors border border-white/15"
                >
                  <span>Call Showroom: {DEALERSHIP_PHONE}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
