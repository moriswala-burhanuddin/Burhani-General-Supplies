import React, { useState } from 'react';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: 'Check Atul Rik Tuk-Tuk Price', text: 'Hello Burhani General Supplies, what is the best deal on the Atul Rik Petrol Tuk-Tuk?' },
    { label: 'Ask About GEM PAXX Financing', text: 'Hello, please share the Mogo Finance terms and deposit for Atul GEM PAXX.' },
    { label: 'Inquire on Kenbo Motorcycle', text: 'Hello, are Kenbo 150cc motorcycles in stock at your Mtwapa showroom?' },
    { label: 'Order Spare Parts', text: 'Hello Burhani Supplies, I want to check availability for spare parts.' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
          <div className="bg-[#0A0D14] text-white p-4 flex items-center justify-between border-b border-white/10">
            <div>
              <div className="text-sm font-bold font-display uppercase tracking-wide">Burhani General Supplies</div>
              <div className="text-[11px] text-[#F8C928]">KENBO Mtwapa WhatsApp Desk</div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 text-sm font-bold"
            >
              &times;
            </button>
          </div>

          <div className="p-3 bg-slate-50 text-xs text-slate-600 border-b border-slate-200">
            How can our sales desk assist you in Mtwapa?
          </div>

          <div className="p-3 space-y-1.5">
            {quickMessages.map((item, idx) => (
              <a
                key={idx}
                href={buildWhatsAppLink(item.text)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-left text-xs font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50 p-2.5 rounded-xl border border-slate-200 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-slate-400 font-bold">&rarr;</span>
              </a>
            ))}
          </div>

          <div className="p-3 bg-white border-t border-slate-200">
            <a
              href={buildWhatsAppLink("Hello Burhani General Supplies, I would like to chat with your sales representative.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              Start Custom WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-pill-yellow shadow-xl hover:shadow-2xl flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950"
        aria-label="Contact Dealership on WhatsApp"
      >
        <svg className="w-5 h-5 fill-current text-slate-950" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z"/>
        </svg>
        <span>WhatsApp</span>
      </button>

    </div>
  );
};
