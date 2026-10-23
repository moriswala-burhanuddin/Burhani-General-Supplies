import React from 'react';
import { DEALERSHIP_PHONE, DEALERSHIP_WHATSAPP, buildWhatsAppLink } from '../../utils/whatsapp';

export const HowItWorksContact: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Choose a Vehicle',
      desc: 'Select a motorcycle or tuk-tuk you are interested in from our showroom inventory.'
    },
    {
      num: '2',
      title: 'Contact Our Team',
      desc: 'Get in touch via WhatsApp (+254 104 480 590) or our quick showroom enquiry form.'
    },
    {
      num: '3',
      title: 'Discuss Options',
      desc: 'Our Mtwapa team will guide you on purchase options and available daily financing plans.'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      {/* Left: How It Works (6 cols) */}
      <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 uppercase tracking-tight">
              How It Works
            </h3>
            <span className="text-xl font-bold text-slate-400">&rarr;</span>
          </div>

          <div className="space-y-6">
            {steps.map((st) => (
              <div key={st.num} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {st.num}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{st.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Get in Touch (6 cols) */}
      <div className="lg:col-span-6 bg-[#0E1726] text-white rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col justify-between space-y-6">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
                Get in Touch<br />With Our Team
              </h3>
              <p className="text-xs text-slate-400 mt-2 max-w-sm leading-relaxed">
                Have a question about a vehicle, spare part or financing? Our team in Mtwapa is here to help.
              </p>
            </div>

            <a
              href={`https://wa.me/${DEALERSHIP_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-circle bg-[#F8C928] text-slate-950 shrink-0"
              title="Chat on WhatsApp"
            >
              <span>&rarr;</span>
            </a>
          </div>

          {/* Contact Details List matching mockup */}
          <div className="mt-8 space-y-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Call Us</span>
                <a href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`} className="font-bold text-white hover:underline">
                  +254 104 480 590
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Alternative Number</span>
                <a href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`} className="font-bold text-white hover:underline">
                  +254 737 325 210
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-emerald-400">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">WhatsApp</span>
                <a href={`https://wa.me/${DEALERSHIP_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 hover:underline">
                  +254 104 480 590
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#F8C928]">
                <svg className="w-4 h-4 text-[#F8C928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Location</span>
                <span className="font-bold text-white">Mtwapa, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span>Dealers in Motorbikes, Tuktuks & Spares</span>
          <span className="font-script text-base text-[#F8C928]">KENBO Mtwapa</span>
        </div>
      </div>

    </div>
  );
};
