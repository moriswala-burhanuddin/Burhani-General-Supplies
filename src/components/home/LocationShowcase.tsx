import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DEALERSHIP_PHONE, DEALERSHIP_WHATSAPP, buildWhatsAppLink } from '../../utils/whatsapp';

export const LocationShowcase: React.FC = () => {
  const coverageTowns = [
    { name: 'Mtwapa', role: 'Main Showroom & Spares Depot' },
    { name: 'Mombasa', role: 'Island, Nyali, Bamburi & Changamwe' },
    { name: 'Kilifi', role: 'Township & North Coast Transit' },
    { name: 'Ukunda', role: 'Diani & South Coast Transport' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#082B5C] text-white relative overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#168ACB]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#49C4E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-[#168ACB]/50 text-xs font-bold text-[#49C4E8]">
              <MapPin className="w-3.5 h-3.5 text-[#F8C928]" />
              Coastal Kenya Footprint
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Ready to Find Your Next Ride?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Tell us what you are looking for, and our team can help you explore available purchase options, book a showroom inspection in Mtwapa, or evaluate financing eligibility.
            </p>

            {/* Coverage Towns */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {coverageTowns.map((town, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="text-xs font-extrabold text-[#F8C928]">{town.name}</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">{town.role}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={buildWhatsAppLink("Hello Burhani General Supplies, I want to inquire about visiting your Mtwapa showroom to inspect your vehicles.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us (+254 104 480 590)</span>
              </a>

              <Link
                to="/vehicles"
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-2xl border border-white/20 transition-all flex items-center gap-2"
              >
                <span>View All Vehicles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column Showroom Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-100 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#082B5C] flex items-center justify-center font-black text-xl">
                  BG
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-[#082B5C]">
                    Burhani General Supplies
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">KENBO MTWAPA SHOWROOM</p>
                </div>
              </div>

              <div className="space-y-3 text-xs border-y border-slate-100 py-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#168ACB] shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Mtwapa, Coast Region, Kenya<br />
                    <span className="text-[11px] text-slate-500">Contact showroom desk for exact turnoff directions.</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#168ACB] shrink-0" />
                  <a href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`} className="font-bold text-[#082B5C] hover:underline">
                    {DEALERSHIP_PHONE}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a href={`https://wa.me/${DEALERSHIP_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">
                    +254 104 480 590 (Sales WhatsApp)
                  </a>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 leading-snug">
                <strong>Opening Hours:</strong> Confirm daily operating hours with the dealership prior to traveling from Mombasa or Kilifi.
              </div>

              <Link
                to="/contact"
                className="w-full py-3 bg-[#082B5C] hover:bg-[#168ACB] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors block text-center"
              >
                Book a Visit / Consultation
              </Link>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
