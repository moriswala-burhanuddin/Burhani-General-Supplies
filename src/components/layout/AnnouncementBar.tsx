import React from 'react';
import { Link } from 'react-router-dom';
import { DEALERSHIP_PHONE } from '../../utils/whatsapp';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#041835] text-slate-100 text-xs py-2 px-4 border-b border-[#082B5C]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#F8C928] text-[#082B5C] font-extrabold text-[10px] px-2 py-0.5 uppercase tracking-wider rounded-none font-heading">
            NOTICE
          </span>
          <span className="text-slate-300 font-medium">
            Burhani General Supplies (KENBO Mtwapa): Commercial 3-Wheelers, Motorbikes & Genuine Spares.
          </span>
        </div>

        <div className="flex items-center gap-5 text-xs font-semibold">
          <Link
            to="/vehicles?category=all&offers=true"
            className="text-[#F8C928] hover:underline uppercase tracking-wider font-heading"
          >
            Current Dealer Offers
          </Link>
          <span className="text-slate-600">|</span>
          <a
            href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`}
            className="text-slate-200 hover:text-white transition-colors"
          >
            Direct Line: <span className="font-bold text-white">{DEALERSHIP_PHONE}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
