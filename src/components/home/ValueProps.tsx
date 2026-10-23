import React from 'react';
import { Layers, FileText, PhoneCall, CreditCard, ShieldCheck } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: 'Multiple Vehicle Categories',
      description: 'From 3-wheeler passenger tuk-tuks to 150cc commuter motorbikes and reinforced delivery haulers, we carry solutions tailored to coastal transit.'
    },
    {
      icon: FileText,
      title: 'Clear Product & Pricing Info',
      description: 'Straightforward information on engine specifications, payload capacities, and transparent pricing without hidden surprises.'
    },
    {
      icon: PhoneCall,
      title: 'Direct Dealership Enquiries',
      description: 'Speak directly with our Mtwapa sales and technical desk via WhatsApp or phone for immediate vehicle availability and quotes.'
    },
    {
      icon: CreditCard,
      title: 'Financing Info on Request',
      description: 'Learn about flexible daily and monthly repayment plans through accredited financing partners like Mogo Finance for eligible buyers.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#168ACB] mb-2">
            <ShieldCheck className="w-4 h-4" />
            Dealership Commitment
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#082B5C] tracking-tight">
            Why Choose Burhani General Supplies?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Dedicated to empowering boda-boda operators, tuk-tuk drivers, and transport entrepreneurs across the Kenyan coast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-[#F4F7FB] p-8 rounded-3xl border border-slate-200/80 hover:border-[#168ACB]/50 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#168ACB] group-hover:bg-[#082B5C] group-hover:text-white transition-colors flex items-center justify-center shadow-xs mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#082B5C] mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-bold text-[#168ACB] flex items-center gap-1">
                  <span>Standard of Service</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
