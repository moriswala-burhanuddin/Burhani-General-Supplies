import React from 'react';
import { Link } from 'react-router-dom';
import { DEALERSHIP_PHONE, DEALERSHIP_WHATSAPP, buildWhatsAppLink } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-800 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Brand Banner Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E5E2D9]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center shrink-0 shadow-xs">
              <img 
                src="/logo-badge.png" 
                alt="Burhani General Supplies B-G Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl text-slate-950 tracking-tight leading-none block">
                BURHANI GENERAL SUPPLIES
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1 block">
                KENBO MTWAPA | AUTHORIZED DEALERSHIP
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppLink("Hello Burhani General Supplies, I would like to enquire about vehicles and spares at your Mtwapa showroom.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-yellow text-xs font-bold shadow-xs hover:shadow-sm"
            >
              <span>Chat on WhatsApp</span>
              <span>&rarr;</span>
            </a>

            <a
              href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`}
              className="btn-pill-outline text-xs font-semibold"
            >
              <span>Call Showroom</span>
            </a>
          </div>
        </div>

        {/* 4 Editorial Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          
          {/* Column 1: About Dealership */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-sm text-slate-950 uppercase tracking-wider">
              About Showroom
            </h4>
            <p className="text-slate-600 leading-relaxed font-medium">
              Burhani General Supplies is the authorized dealership for Atul Rik and GEM passenger tuk-tuks, KENBO commuter motorbikes, and genuine spare parts in Mtwapa, Kilifi County.
            </p>
            <div className="pt-1 text-[11px] font-bold text-[#0D6EFD]">
              Serving Mtwapa, Mombasa, Kilifi & Ukunda
            </div>
          </div>

          {/* Column 2: Vehicles & Inventory */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-sm text-slate-950 uppercase tracking-wider">
              Vehicles & Fleet
            </h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <Link to="/vehicles?category=tuk-tuk" className="hover:text-slate-950 transition-colors">
                  Atul Rik Petrol Tuk-Tuk
                </Link>
              </li>
              <li>
                <Link to="/vehicles?category=tuk-tuk" className="hover:text-slate-950 transition-colors">
                  Atul GEM PAXX Commercial
                </Link>
              </li>
              <li>
                <Link to="/vehicles?category=motorcycle" className="hover:text-slate-950 transition-colors">
                  KENBO 150cc Commuter Bike
                </Link>
              </li>
              <li>
                <Link to="/vehicles?category=motorcycle" className="hover:text-slate-950 transition-colors">
                  Commercial Delivery Motorcycles
                </Link>
              </li>
              <li>
                <Link to="/vehicles" className="text-[#0D6EFD] font-bold hover:underline">
                  Browse All 4 Showroom Models &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Showroom & Hours */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-sm text-slate-950 uppercase tracking-wider">
              Showroom & Hours
            </h4>
            <div className="space-y-2 text-slate-600 font-medium">
              <p>
                <strong className="text-slate-900 block font-bold">Location:</strong>
                Mombasa - Malindi Highway, Mtwapa, Kenya
              </p>
              <p>
                <strong className="text-slate-900 block font-bold">Working Hours:</strong>
                Mon - Sat: 8:00 AM - 6:00 PM<br />
                Sunday: Closed (WhatsApp open)
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-sm text-slate-950 uppercase tracking-wider">
              Direct Inquiries
            </h4>
            <div className="space-y-2 text-slate-600 font-medium">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Primary Sales</span>
                <a href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`} className="font-bold text-slate-950 hover:text-[#0D6EFD]">
                  {DEALERSHIP_PHONE}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Alternative Line</span>
                <a href="tel:+254737325210" className="font-bold text-slate-950 hover:text-[#0D6EFD]">
                  +254 737 325 210
                </a>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">WhatsApp Line</span>
                <a href={`https://wa.me/${DEALERSHIP_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">
                  +254 104 480 590
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer Row */}
        <div className="pt-6 border-t border-[#E5E2D9] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Burhani General Supplies (KENBO Mtwapa). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/financing" className="hover:text-slate-900 transition-colors">Mogo Financing</Link>
            <Link to="/spare-parts" className="hover:text-slate-900 transition-colors">Genuine Spares</Link>
            <Link to="/about" className="hover:text-slate-900 transition-colors">Showroom Info</Link>
            <Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
