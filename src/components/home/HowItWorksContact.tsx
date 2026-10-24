import React, { useState } from 'react';
import { DEALERSHIP_PHONE, DEALERSHIP_WHATSAPP } from '../../utils/whatsapp';
import { VEHICLES } from '../../data/products';

export const HowItWorksContact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('Atul petrol');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const text = `Hello Burhani General Supplies (KENBO Mtwapa),%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Inquiring About:* ${encodeURIComponent(selectedVehicle)}${message.trim() ? `%0A*Message:* ${encodeURIComponent(message)}` : ''}%0A%0APlease provide current availability and pricing.`;

    window.open(`https://wa.me/${DEALERSHIP_WHATSAPP}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      {/* Left: Interactive Showroom Contact Form (7 cols) */}
      <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm flex flex-col justify-between">
        <div>
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#0D6EFD]" />
                DIRECT SALES DESK • MTWAPA
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950 uppercase tracking-tight">
                Send Direct Enquiry
              </h3>
            </div>
            <span className="text-2xl font-black text-slate-300 hidden sm:inline">&rarr;</span>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4 bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xl font-black">
                ✓
              </div>
              <h4 className="text-lg font-display font-extrabold text-slate-950">
                Enquiry Prepared!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. Your inquiry for <strong>{selectedVehicle}</strong> has been directed to our Mtwapa showroom WhatsApp desk (+254 104 480 590).
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                  setMessage('');
                }}
                className="mt-2 text-xs font-bold text-[#0D6EFD] underline cursor-pointer"
              >
                Send another enquiry &rarr;
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 block">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Mwangi"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white transition-all"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 block">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0712 345 678"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Vehicle Selection Dropdown */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 block">
                  Select Vehicle or Service <span className="text-rose-500">*</span>
                </label>
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white transition-all cursor-pointer"
                >
                  <optgroup label="Showroom Fleet (All 9 Models)">
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name} ({v.pricePrefix ? `${v.pricePrefix} ` : ''}KES {v.priceKes?.toLocaleString() || 'Quote'})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Other Inquiries">
                    <option value="Genuine Spare Parts Inquiries">Genuine Spare Parts Counter</option>
                    <option value="Daily Fleet Financing (Mogo/Dealer)">Daily Financing Consultation</option>
                    <option value="Workshop & Servicing Assistance">Workshop Maintenance & Servicing</option>
                  </optgroup>
                </select>
              </div>

              {/* Message Note */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 block">
                  Additional Note / Question <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about payment plans, delivery to Kilifi/Mombasa, or logbook transfer..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-xs transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current text-slate-950" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z"/>
                </svg>
                <span>Send Enquiry to Showroom Desk</span>
                <span>&rarr;</span>
              </button>

            </form>
          )}

        </div>

        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
          <span>✓ Instant WhatsApp confirmation</span>
          <span>⚡ Counter response within 15 mins</span>
        </div>

      </div>

      {/* Right: Direct Dealership Contact Desk (5 cols) */}
      <div className="lg:col-span-5 bg-[#0B111A] text-white rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col justify-between space-y-6">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] font-extrabold uppercase tracking-wider text-[#FFC107] mb-2">
                MTWAPA SHOWROOM DESK
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-white leading-tight">
                Get in Touch<br />With Our Team
              </h3>
              <p className="text-xs text-slate-400 mt-2 max-w-sm leading-relaxed">
                Walk into our Mtwapa showroom or contact our authorized sales &amp; parts specialists directly.
              </p>
            </div>

            <a
              href={`https://wa.me/${DEALERSHIP_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#FFC107] text-slate-950 flex items-center justify-center font-bold text-sm shrink-0 hover:scale-105 transition-transform"
              title="Chat on WhatsApp"
            >
              <span>&rarr;</span>
            </a>
          </div>

          {/* Contact Details List */}
          <div className="mt-8 space-y-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 shrink-0">
                <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Primary Sales Line</span>
                <a href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`} className="font-extrabold text-white hover:text-[#FFC107] transition-colors">
                  +254 104 480 590
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 shrink-0">
                <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Alternative Line</span>
                <a href="tel:+254737325210" className="font-extrabold text-white hover:text-[#FFC107] transition-colors">
                  +254 737 325 210
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Official WhatsApp Desk</span>
                <a href={`https://wa.me/${DEALERSHIP_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="font-extrabold text-emerald-400 hover:underline">
                  +254 104 480 590
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FFC107] shrink-0">
                <svg className="w-4 h-4 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Physical Showroom</span>
                <span className="font-extrabold text-white">Mombasa - Malindi Highway, Mtwapa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          <span className="font-bold text-[#FFC107]">BURHANI MTWAPA</span>
        </div>
      </div>

    </div>
  );
};
