import React from 'react';
import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export const ReadyToFindBanner: React.FC = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-[#0A0D14] text-white p-8 sm:p-14 border border-slate-800 shadow-xl flex flex-col justify-center min-h-[260px]">
      
      {/* Background Graphic */}
      <img
        src="/images/kenbo-commuter.jpg"
        alt="Find your next ride"
        className="absolute inset-0 w-full h-full object-cover object-right opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-xl space-y-3">
        <h3 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight leading-none text-white">
          READY TO FIND<br />YOUR NEXT RIDE?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
          Tell us what you are looking for, and our team can help you explore available options in Mtwapa.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-3">
          <a
            href={buildWhatsAppLink("Hello Burhani General Supplies, I want to find my next ride in Mtwapa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-yellow text-xs font-bold shadow-md"
          >
            <span>WHATSAPP US</span>
          </a>

          <Link
            to="/vehicles"
            className="btn-pill-outline text-xs text-white border-white/30 hover:border-white"
          >
            <span>VIEW ALL VEHICLES</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>

    </div>
  );
};
