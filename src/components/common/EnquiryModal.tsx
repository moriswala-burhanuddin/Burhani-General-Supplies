import React, { useState, useEffect } from 'react';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { VEHICLES } from '../../data/products';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVehicleName?: string;
  defaultPartName?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultVehicleName = '',
  defaultPartName = ''
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState(defaultVehicleName);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Mtwapa');
  const [financingInterest, setFinancingInterest] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (defaultVehicleName) setSelectedVehicle(defaultVehicleName);
    if (isOpen) setIsSubmitted(false);
  }, [defaultVehicleName, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!customerName.trim()) newErrors.customerName = 'Please enter your full name';
    if (!phone.trim()) {
      newErrors.phone = 'Please provide your phone or WhatsApp number';
    } else if (phone.trim().length < 9) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const getGeneratedWhatsAppText = () => {
    const item = selectedVehicle || defaultPartName || 'General Vehicle Inquiry';
    return `Hello Burhani General Supplies,\n\nI am submitting a showroom enquiry:\n- Item: *${item}*\n- Name: ${customerName}\n- Phone: ${phone}\n- Preferred Branch/Area: ${location}\n- Interested in Financing: ${financingInterest ? 'YES (Mogo Finance)' : 'No / Cash'}\n- Message: ${message || 'Please send me current pricing and availability.'}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0A0D14] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white">Showroom Enquiry</h3>
            <p className="text-xs text-[#F8C928]">Burhani General Supplies | KENBO Mtwapa</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white transition-colors text-lg font-bold"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">
                &check;
              </div>
              <h4 className="text-2xl font-display font-bold text-slate-900 uppercase">Enquiry Recorded!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{customerName}</strong>. Your enquiry details have been recorded for this demo.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
                <div><span className="font-semibold text-slate-500">Vehicle / Part:</span> {selectedVehicle || defaultPartName || 'General Inquiry'}</div>
                <div><span className="font-semibold text-slate-500">Contact Phone:</span> {phone}</div>
                <div><span className="font-semibold text-slate-500">Location:</span> {location}</div>
                <div><span className="font-semibold text-slate-500">Financing Interest:</span> {financingInterest ? 'Requested' : 'Cash purchase'}</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={buildWhatsAppLink(getGeneratedWhatsAppText())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-yellow text-xs font-bold justify-center"
                >
                  Forward to Dealership WhatsApp (+254 104 480 590) &rarr;
                </a>
                <button
                  onClick={onClose}
                  className="btn-pill-outline text-xs justify-center"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Vehicle / Topic Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Vehicle or Product of Interest
                </label>
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
                >
                  <option value="">General Dealership Enquiry</option>
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name} {v.priceKes ? `(KES ${v.priceKes.toLocaleString()})` : ''}
                    </option>
                  ))}
                  {defaultPartName && <option value={defaultPartName}>{defaultPartName} (Spare Part)</option>}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Hassan Omar"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs focus:outline-hidden focus:bg-white ${
                      errors.customerName ? 'border-red-500' : 'border-slate-300 focus:ring-2 focus:ring-blue-600'
                    }`}
                  />
                  {errors.customerName && <p className="text-[11px] text-red-500 mt-1">{errors.customerName}</p>}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0737 235 210"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs focus:outline-hidden focus:bg-white ${
                      errors.phone ? 'border-red-500' : 'border-slate-300 focus:ring-2 focus:ring-blue-600'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Location in Kenya
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  >
                    <option value="Mtwapa">Mtwapa (Dealership Base)</option>
                    <option value="Mombasa Town">Mombasa City / Nyali / Bamburi</option>
                    <option value="Kilifi">Kilifi Town & Environs</option>
                    <option value="Ukunda">Ukunda / Diani</option>
                    <option value="Malindi">Malindi</option>
                    <option value="Other">Other Region in Kenya</option>
                  </select>
                </div>

                {/* Optional Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Financing Interest Checkbox */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 cursor-pointer" onClick={() => setFinancingInterest(!financingInterest)}>
                <input
                  type="checkbox"
                  id="financing_box"
                  checked={financingInterest}
                  onChange={(e) => setFinancingInterest(e.target.checked)}
                  className="mt-0.5"
                />
                <label htmlFor="financing_box" className="text-xs text-slate-700 cursor-pointer">
                  <span className="font-bold text-slate-900">I am interested in flexible payment plans / Mogo Finance options.</span>
                  <div className="text-[11px] text-slate-500">Check this to receive deposit and daily installment calculations.</div>
                </label>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Questions / Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you are looking for (e.g. delivery timeline, color, purchase terms)..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="btn-pill-dark text-xs flex-1 justify-center py-3"
                >
                  Submit Showroom Enquiry &rarr;
                </button>

                <a
                  href={buildWhatsAppLink(getGeneratedWhatsAppText())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-yellow text-xs justify-center py-3"
                >
                  Direct WhatsApp
                </a>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
