import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { SPARE_PARTS } from '../../data/parts';
import { getPartEnquiryLink } from '../../utils/whatsapp';

interface SparePartsTeaserProps {
  onOpenPartEnquiry?: (partName: string) => void;
}

export const SparePartsTeaser: React.FC<SparePartsTeaserProps> = ({ onOpenPartEnquiry }) => {
  const previewParts = SPARE_PARTS.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#168ACB]">
              <Wrench className="w-4 h-4" />
              Genuine Maintenance
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#082B5C] tracking-tight">
              Keep Your Ride Running with Genuine Spares
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Don’t risk your vehicle downtime with counterfeit components. We supply authentic brake shoes, heavy-duty chains, cables, filters, and tyres engineered to withstand harsh coastal heat and humidity.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#082B5C]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Original parts for Atul Rik, GEM PAXX & Cargo</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#082B5C]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authorized KENBO motorcycle maintenance consumables</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#082B5C]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bulk discount packages for boda-boda sacco operators</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/spare-parts"
                className="px-6 py-3.5 bg-[#082B5C] hover:bg-[#168ACB] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>View Full Spare Parts Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column Product Grid (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {previewParts.map((part) => (
                <div
                  key={part.id}
                  className="bg-[#F4F7FB] p-4 rounded-2xl border border-slate-200 hover:border-[#168ACB]/50 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200">{part.category}</span>
                      <span className="text-emerald-700">In Stock</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-[#082B5C] line-clamp-2">
                      {part.name}
                    </h4>

                    <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      Fits: {part.compatibleWith}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Demo Price</span>
                      <span className="text-sm font-black text-[#082B5C]">
                        {part.priceKes ? `KES ${part.priceKes.toLocaleString()}` : 'Inquire'}
                      </span>
                    </div>

                    <a
                      href={getPartEnquiryLink(part.name, part.compatibleWith)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white rounded-lg transition-colors border border-emerald-200/60"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
