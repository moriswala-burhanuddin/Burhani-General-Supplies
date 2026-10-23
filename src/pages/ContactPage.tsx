import React, { useState } from 'react';
import { DEALERSHIP_PHONE, DEALERSHIP_WHATSAPP, buildWhatsAppLink } from '../utils/whatsapp';
import { VEHICLES } from '../data/products';

export const ContactPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('General Dealership Enquiry');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [town, setTown] = useState('Mtwapa');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please enter your full name';
    if (!phone.trim()) {
      errs.phone = 'Please provide your phone or WhatsApp number';
    } else if (phone.trim().length < 9) {
      errs.phone = 'Please enter a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSuccess(true);
  };

  const getWhatsAppMessage = () => {
    return `Hello Burhani General Supplies (KENBO Mtwapa),\n\nI am contacting you through your website:\n- Subject: *${selectedTopic}*\n- Name: ${name}\n- Phone: ${phone}\n- Town: ${town}\n- Details: ${message || 'Please send me details and pricing.'}`;
  };

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Contact Hero Banner matching Hero Visual Language */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl text-white">
          
          {/* Monumental Electric Blue Watermark Typography */}
          <div className="absolute -right-6 -bottom-10 pointer-events-none select-none opacity-20 hidden md:block">
            <span className="text-[120px] lg:text-[160px] font-display font-black tracking-widest text-[#0055D4]">
              CONTACT
            </span>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0055D4]/30 border border-blue-400/40 text-xs font-black tracking-wider text-blue-200 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
              MTWAPA SHOWROOM DESK • INSTANT ASSISTANCE
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-none text-white">
              Contact &amp; Showroom <br className="hidden sm:inline" />
              <span className="text-[#FFC107]">Inquiries &amp; Counter Desk</span>
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-medium leading-relaxed">
              Deals Moto Moto! 🔥 You are just one call away from owning your Tuk-Tuk or Motorbike. Visit our Mtwapa showroom on Mombasa-Malindi Highway, or call and WhatsApp our team directly today. Usipitwe!
            </p>

            {/* Quick Contact Perks */}
            <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white border border-white/15">
                <span className="text-[#FFC107]">✓</span> WhatsApp: 0104480590
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white border border-white/15">
                <span className="text-[#FFC107]">✓</span> Phone: 0737235210
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white border border-white/15">
                <span className="text-[#FFC107]">✓</span> Open Monday – Saturday
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: WhatsApp */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm">
              💬
            </div>
            <h3 className="text-base font-display font-extrabold text-slate-950">Official WhatsApp</h3>
            <p className="text-xs text-slate-500 font-medium">Fastest response for quotes, availability, and video walk-around requests.</p>
            <a
              href={`https://wa.me/${DEALERSHIP_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-extrabold text-[#0D6EFD] hover:underline block pt-1"
            >
              +254 104 480 590 &rarr;
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0D6EFD] flex items-center justify-center font-bold text-sm">
              📞
            </div>
            <h3 className="text-base font-display font-extrabold text-slate-950">Direct Phone Line</h3>
            <p className="text-xs text-slate-500 font-medium">Speak directly with our showroom sales representatives.</p>
            <a
              href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`}
              className="text-xs font-extrabold text-slate-950 hover:text-[#0D6EFD] block pt-1"
            >
              {DEALERSHIP_PHONE} &rarr;
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-sm">
              📍
            </div>
            <h3 className="text-base font-display font-extrabold text-slate-950">Showroom Location</h3>
            <p className="text-xs text-slate-500 font-medium">Mombasa-Malindi Highway, Mtwapa, Kenya.</p>
            <div className="text-xs font-bold text-slate-900 pt-1">
              Serving Mombasa, Mtwapa, Kilifi & Ukunda
            </div>
          </div>

        </div>

        {/* Contact Form & Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0D6EFD] block">
                ONLINE ENQUIRY
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-950 mt-0.5">
                Send a Showroom Message
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Complete this form to request vehicle information or arrange a counter consultation.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-10 text-center space-y-4">
                <span className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">✓</span>
                <h3 className="text-xl font-display font-extrabold text-slate-950">Inquiry Received!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto font-medium">
                  Thank you, {name}. Our Mtwapa sales desk has received your request.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={buildWhatsAppLink(getWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs"
                  >
                    <span>Send via WhatsApp (+254 104 480 590)</span>
                    <span>&rarr;</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Topic / Vehicle */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Enquiry Subject / Vehicle of Interest
                  </label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white"
                  >
                    <option value="General Dealership Enquiry">General Dealership Enquiry</option>
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.name}>{v.name}</option>
                    ))}
                    <option value="Mogo Financing Plan">Mogo Financing Application</option>
                    <option value="Spare Parts Availability">Spare Parts Availability</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Omar Salim"
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-hidden focus:bg-white ${
                        errors.name ? 'border-red-500' : 'border-slate-200 focus:ring-2 focus:ring-[#0D6EFD]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0737 235 210"
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-hidden focus:bg-white ${
                        errors.phone ? 'border-red-500' : 'border-slate-200 focus:ring-2 focus:ring-[#0D6EFD]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Town / Location
                    </label>
                    <select
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white"
                    >
                      <option value="Mtwapa">Mtwapa</option>
                      <option value="Mombasa Town">Mombasa City / Nyali</option>
                      <option value="Kilifi">Kilifi</option>
                      <option value="Ukunda">Ukunda / Diani</option>
                      <option value="Other">Other Region in Kenya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what vehicle or parts you require, preferred delivery date, or questions about financing..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Enquiry</span>
                  <span>&rarr;</span>
                </button>

              </form>
            )}

          </div>

          {/* Right Information & Hours Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0B111A] text-white p-8 rounded-3xl shadow-xl space-y-6 border border-slate-800">
              <span className="text-[10px] font-extrabold text-[#FFC107] uppercase tracking-wider block">
                SHOWROOM SCHEDULE
              </span>

              <h3 className="text-xl font-display font-extrabold text-white">
                Showroom Visiting & Hours
              </h3>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2 leading-relaxed font-medium">
                <div><strong className="text-white">Location:</strong> Mombasa-Malindi Highway, Mtwapa, Kenya</div>
                <div><strong className="text-white">Hours:</strong> Mon – Sat: 8:00 AM – 6:00 PM</div>
                <div className="pt-1 text-[#FFC107] font-bold">
                  * Notice: Please confirm daily opening hours with the showroom desk before visiting.
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={buildWhatsAppLink("Hello Burhani General Supplies, could you please confirm your showroom opening hours today in Mtwapa?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <span>Confirm Hours on WhatsApp</span>
                  <span>&rarr;</span>
                </a>

                <a
                  href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`}
                  className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all border border-white/15"
                >
                  <span>Call: {DEALERSHIP_PHONE}</span>
                </a>
              </div>
            </div>

            {/* Storefront Mini Banner */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xs group relative">
              <img
                src="/images/dealership-building.jpg"
                alt="Burhani Dealership Mtwapa Storefront"
                className="w-full h-44 object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold">Official Dealership Storefront • Mtwapa</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
