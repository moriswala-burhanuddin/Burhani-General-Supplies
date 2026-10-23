import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { VEHICLES } from '../data/products';
import { formatKes, buildWhatsAppLink, DEALERSHIP_PHONE } from '../utils/whatsapp';
import { VehicleCard } from '../components/common/VehicleCard';

export const VehicleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = VEHICLES.find((v) => v.slug === slug);

  // Prefer clean cutout image if available
  const cutoutMap: Record<string, string> = {
    'atul-rik-petrol': '/images/atul-rik-Photoroom.png',
    'atul-gem-paxx': '/images/atul-gem-paxx-Photoroom.png',
    'kenbo-150-commuter': '/images/kenbo-commuter-Photoroom.png',
    'delivery-cargo-125': '/images/delivery-motorcycle-Photoroom.png',
    'atul-shakti-cargo': '/images/cargo-tuktuk-Photoroom.png',
    'kenbo-cruiser-150': '/images/kenbo-commuter-Photoroom.png'
  };

  const defaultImage = vehicle ? (cutoutMap[vehicle.id] || vehicle.imageUrl) : '';

  // Gallery state
  const gallery = vehicle?.gallery?.length ? vehicle.gallery : (vehicle ? [defaultImage] : []);
  const [activeImage, setActiveImage] = useState(defaultImage);

  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Mtwapa');
  const [financing, setFinancing] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!vehicle) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-white">
        <h2 className="text-2xl font-display font-extrabold text-slate-950">Vehicle Not Found</h2>
        <p className="text-sm text-slate-500 mt-2 font-medium">The requested model is not currently in our showroom catalogue.</p>
        <Link
          to="/vehicles"
          className="mt-6 px-6 py-3 bg-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-colors"
        >
          &larr; Back to Vehicle Catalogue
        </Link>
      </div>
    );
  }

  const relatedVehicles = VEHICLES.filter((v) => v.id !== vehicle.id).slice(0, 3);
  const priceDisplay = formatKes(vehicle.priceKes);
  const previousPriceDisplay = vehicle.previousPriceKes ? formatKes(vehicle.previousPriceKes) : null;
  const savings = (vehicle.previousPriceKes && vehicle.priceKes)
    ? vehicle.previousPriceKes - vehicle.priceKes
    : null;

  const whatsAppText = `Hello Burhani General Supplies, I am interested in the ${vehicle.name} (${priceDisplay}). Could you please confirm current price, availability and purchase options in Mtwapa?`;

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400 font-semibold flex-wrap">
          <Link to="/" className="hover:text-[#0D6EFD] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/vehicles" className="hover:text-[#0D6EFD] transition-colors">Vehicles</Link>
          <span>/</span>
          <span className="text-slate-950 font-bold">{vehicle.name}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/vehicles"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-950 transition-colors uppercase tracking-wider"
          >
            <span>&larr;</span>
            <span>Back to All Vehicles</span>
          </Link>
        </div>

        {/* Main Grid: Gallery & Right Buy Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Gallery & Details (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Gallery Showcase Stage */}
            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 flex items-center justify-center p-6 border border-slate-100">
                
                {/* Monumental Electric Blue Watermark Letters matching Hero */}
                <div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
                  aria-hidden="true"
                >
                  <span className="font-display font-black text-[100px] sm:text-[150px] lg:text-[190px] tracking-tight text-[#0055D4] leading-none opacity-90 scale-y-105">
                    {vehicle.category === 'tuk-tuk' ? 'RIDE' : 'KENBO'}
                  </span>
                </div>

                {/* Foreground Cut-out Vehicle */}
                <div className="relative z-10 w-full max-w-[500px] flex flex-col items-center justify-center">
                  <img
                    src={activeImage || defaultImage}
                    alt={vehicle.name}
                    className="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain drop-shadow-[0_22px_24px_rgba(0,0,0,0.22)] transition-all duration-300 transform hover:scale-102"
                  />
                  {/* Ground Shadow */}
                  <div className="w-[80%] h-4 bg-black/25 rounded-[100%] blur-md mx-auto -mt-2 pointer-events-none" />
                </div>

                {/* Badges on Stage */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
                  <span className="px-3 py-1 bg-[#0B111A] text-white font-black text-[10px] uppercase tracking-wider rounded-full shadow-xs">
                    {vehicle.category === 'tuk-tuk' ? '3-Wheeler Tuk-Tuk' : 'Motorcycle'}
                  </span>
                  {vehicle.badge && (
                    <span className="px-3 py-1 bg-[#FFC107] text-slate-950 font-black text-xs uppercase tracking-wider rounded-full shadow-xs">
                      {vehicle.badge}
                    </span>
                  )}
                </div>

                {/* Savings ribbon if discounted */}
                {savings && (
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-[#E53935] text-white font-black text-xs uppercase rounded-full shadow-xs">
                      Save KES {savings.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-slate-50 p-1 cursor-pointer ${
                        activeImage === img ? 'border-[#0D6EFD] ring-2 ring-blue-100 shadow-xs' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Overview & Key Highlights */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
              <div>
                <span className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider block mb-1">
                  VEHICLE OVERVIEW
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-950 tracking-tight">
                  {vehicle.name}
                </h2>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {vehicle.fullDesc}
              </p>

              {/* Dealership Package & Highlights */}
              <div>
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
                  Dealership Package & Equipment Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <span className="w-2 h-2 rounded-full bg-[#0D6EFD] mt-1.5 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800 leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider block">
                    ENGINE & CHASSIS
                  </span>
                  <h2 className="text-xl font-display font-extrabold text-slate-950 tracking-tight mt-0.5">
                    Technical Specifications
                  </h2>
                </div>
                <span className="text-[11px] font-extrabold text-[#0D6EFD] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
                  OEM Factory Verified
                </span>
              </div>

              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                {vehicle.specs.engine && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Engine Configuration</span>
                    <strong className="text-slate-950 font-bold text-right">{vehicle.specs.engine}</strong>
                  </div>
                )}
                {vehicle.specs.fuelType && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Fuel Type & System</span>
                    <strong className="text-slate-950 font-bold text-right">{vehicle.specs.fuelType}</strong>
                  </div>
                )}
                {vehicle.specs.seatingCapacity && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Seating Capacity</span>
                    <strong className="text-slate-950 font-bold text-right">{vehicle.specs.seatingCapacity}</strong>
                  </div>
                )}
                {vehicle.specs.payload && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Payload / Load Rating</span>
                    <strong className="text-slate-950 font-bold text-right">{vehicle.specs.payload}</strong>
                  </div>
                )}
                {vehicle.specs.transmission && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Transmission</span>
                    <strong className="text-slate-950 font-bold text-right">{vehicle.specs.transmission}</strong>
                  </div>
                )}
                {vehicle.specs.brakes && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Braking System</span>
                    <strong className="text-slate-950 font-bold text-right">{vehicle.specs.brakes}</strong>
                  </div>
                )}
                {vehicle.specs.suspension && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Suspension Architecture</span>
                    <strong className="text-slate-950 font-bold text-right">{vehicle.specs.suspension}</strong>
                  </div>
                )}
                {vehicle.specs.warranty && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Dealership Warranty</span>
                    <strong className="text-emerald-700 font-bold text-right">{vehicle.specs.warranty}</strong>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Pricing, CTAs & Enquiry Form (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Purchase & Quote Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-lg space-y-6">
              
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  <span className="text-[#0D6EFD] font-extrabold">{vehicle.brand}</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80 font-bold text-[10px]">
                    Showroom In Stock
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight leading-snug">
                  {vehicle.name}
                </h1>
                <p className="text-xs text-slate-500 mt-1 font-semibold">{vehicle.model}</p>
              </div>

              {/* Pricing Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Official Showroom Price
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-display font-black text-slate-950">
                    {priceDisplay}
                  </span>
                  {previousPriceDisplay && (
                    <span className="text-sm font-bold text-slate-400 line-through">
                      {previousPriceDisplay}
                    </span>
                  )}
                </div>

                {savings && (
                  <div className="mt-2 text-xs font-extrabold text-[#E53935] bg-red-50 p-2 rounded-xl border border-red-200/80 inline-flex items-center gap-1.5">
                    <span>★</span>
                    <span>Save KES {savings.toLocaleString()} off list price</span>
                  </div>
                )}
              </div>

              {/* Financing Link Callout */}
              {vehicle.financingAvailable && (
                <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="font-extrabold text-slate-950">Flexible Mogo Financing</div>
                    <div className="text-[11px] text-slate-600 font-medium">Daily repayments from KES 750/day with 20% deposit.</div>
                  </div>
                  <Link
                    to="/financing"
                    className="px-3.5 py-1.5 bg-[#0055D4] hover:bg-blue-700 text-white font-bold text-[11px] rounded-lg shrink-0 transition-colors shadow-2xs"
                  >
                    Details &rarr;
                  </Link>
                </div>
              )}

              {/* Primary Direct WhatsApp Button */}
              <a
                href={buildWhatsAppLink(whatsAppText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current text-slate-950" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.056-2.203-.568-1.745-.722-2.871-2.493-2.958-2.609-.086-.115-.705-.935-.705-1.783 0-.848.446-1.265.604-1.438.158-.173.346-.216.461-.216.115 0 .23 0 .331.005.106.005.249-.04.39.299.144.346.49 1.196.533 1.282.043.086.072.187.014.302-.058.115-.087.187-.173.288-.086.1-.182.224-.26.3-.086.084-.176.176-.076.348.1.173.444.733.953 1.186.655.583 1.207.763 1.38.85.173.086.273.072.374-.043.101-.115.432-.504.547-.677.115-.173.23-.144.389-.086.158.058 1.008.475 1.181.562.173.086.288.13.331.202.043.072.043.418-.101.823z"/>
                </svg>
                <span>Enquire on WhatsApp (+254 104 480 590)</span>
              </a>

              {/* Direct Call Button */}
              <a
                href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`}
                className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                <span>Call Showroom: {DEALERSHIP_PHONE}</span>
              </a>

              {/* Dedicated Embedded Inquiry Form */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-xs font-extrabold text-slate-950 uppercase tracking-wider mb-3">
                  Request Callback / Official Quote
                </h3>

                {formSubmitted ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-sm font-bold">✓</span>
                    <div className="text-xs font-bold text-emerald-900">Enquiry Recorded!</div>
                    <p className="text-[11px] text-emerald-700">
                      Our Mtwapa sales desk has received your request for {vehicle.name}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitEnquiry} className="space-y-3">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white"
                    />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone or WhatsApp Number *"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white"
                    />
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white"
                    >
                      <option value="Mtwapa">Mtwapa (Dealership Showroom)</option>
                      <option value="Mombasa">Mombasa / Nyali / Bamburi</option>
                      <option value="Kilifi">Kilifi Town</option>
                      <option value="Ukunda">Ukunda / Diani</option>
                    </select>

                    <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer pt-1 font-medium">
                      <input
                        type="checkbox"
                        checked={financing}
                        onChange={(e) => setFinancing(e.target.checked)}
                        className="rounded-sm text-[#0D6EFD]"
                      />
                      <span>Inquire about Mogo daily payment plans</span>
                    </label>

                    <button
                      type="submit"
                      className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Submit Inquiry</span>
                      <span>&rarr;</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Related Vehicles Section */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0D6EFD] block">
                COMPARE FLEET
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 mt-0.5">
                Other Vehicles in Our Mtwapa Fleet
              </h2>
            </div>
            <Link
              to="/vehicles"
              className="text-xs font-bold text-slate-900 hover:text-[#0D6EFD] uppercase tracking-wider"
            >
              View Full Fleet &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedVehicles.map((rel) => (
              <VehicleCard key={rel.id} vehicle={rel} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
