import React from 'react';
import { Link } from 'react-router-dom';
import { DEALERSHIP_WHATSAPP } from '../../utils/whatsapp';

export const FinancingBanner: React.FC = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0055D4] to-[#082B5C] text-white p-6 sm:p-8 shadow-xl flex flex-col justify-between min-h-[380px] border border-blue-400/30 group">
      
      {/* Top Header Row */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-blue-200 block">03</span>
          <span className="text-[10px] font-extrabold text-blue-200 uppercase tracking-wider mt-1 block">
            MOGO & DEALER FINANCING
          </span>
          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1 leading-tight tracking-tight">
            Flexible Daily<br />Payment Plans
          </h3>
        </div>

        <div className="text-right">
          <span className="bg-white text-[#0055D4] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs">
            From KES 300/Day
          </span>
          <span className="text-[10px] text-blue-200 block mt-1">20% Down Payment</span>
        </div>
      </div>

      {/* Middle Key Metrics Box */}
      <div className="relative z-10 my-4 grid grid-cols-2 gap-3 bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15">
        <div>
          <span className="text-[10px] text-blue-200 uppercase font-semibold block">Tuk-Tuk Daily Rate</span>
          <strong className="text-white text-base sm:text-lg font-extrabold block mt-0.5">KES 750 – 850</strong>
          <span className="text-[10px] text-blue-100">Atul Rik & GEM PAXX</span>
        </div>
        <div>
          <span className="text-[10px] text-blue-200 uppercase font-semibold block">Motorcycle Daily Rate</span>
          <strong className="text-white text-base sm:text-lg font-extrabold block mt-0.5">KES 300 – 350</strong>
          <span className="text-[10px] text-blue-100">KENBO 150cc Commuter</span>
        </div>
      </div>

      {/* Bottom Features & Action */}
      <div className="relative z-10 pt-3 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-[11px] text-blue-100 font-medium">
          <span>✓ Same-day pre-approval • MPESA daily remittances</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${DEALERSHIP_WHATSAPP}?text=Hello%20Burhani,%20I%20would%20like%20to%20calculate%20a%20daily%20financing%20plan%20for%20a%20vehicle.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 rounded-full text-xs font-bold shadow-xs inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
          >
            <span>Calculate Plan</span>
            <span>&rarr;</span>
          </a>
          <Link
            to="/financing"
            className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold transition-colors"
          >
            Details
          </Link>
        </div>
      </div>

    </div>
  );
};
