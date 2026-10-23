import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VEHICLES } from '../data/products';
import { VehicleCard } from '../components/common/VehicleCard';

interface VehiclesPageProps {
  onOpenEnquiryModal: (vehicleName?: string) => void;
}

export const VehiclesPage: React.FC<VehiclesPageProps> = ({ onOpenEnquiryModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL parameters
  const initialCategory = searchParams.get('category') || 'all';
  const initialOffersOnly = searchParams.get('offers') === 'true';
  const initialFilter = searchParams.get('filter') || '';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [offersOnly, setOffersOnly] = useState<boolean>(initialOffersOnly);
  const [commercialOnly, setCommercialOnly] = useState<boolean>(initialFilter === 'commercial');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
    if (searchParams.get('offers') === 'true') setOffersOnly(true);
    if (searchParams.get('filter') === 'commercial') setCommercialOnly(true);
  }, [searchParams]);

  // Filter logic
  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((vehicle) => {
      // Category filter
      if (selectedCategory !== 'all' && vehicle.category !== selectedCategory) {
        return false;
      }

      // Offers only
      if (offersOnly && !vehicle.previousPriceKes && vehicle.badgeType !== 'offer') {
        return false;
      }

      // Commercial only
      if (commercialOnly && !vehicle.isCommercial) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = vehicle.name.toLowerCase().includes(q);
        const matchesBrand = vehicle.brand.toLowerCase().includes(q);
        const matchesModel = vehicle.model.toLowerCase().includes(q);
        const matchesDesc = vehicle.shortDesc.toLowerCase().includes(q);
        return matchesName || matchesBrand || matchesModel || matchesDesc;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        const priceA = a.priceKes ?? 9999999;
        const priceB = b.priceKes ?? 9999999;
        return priceA - priceB;
      }
      if (sortBy === 'price-desc') {
        const priceA = a.priceKes ?? -1;
        const priceB = b.priceKes ?? -1;
        return priceB - priceA;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0; // default order
    });
  }, [selectedCategory, offersOnly, commercialOnly, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setOffersOnly(false);
    setCommercialOnly(false);
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Editorial Inventory Hero Banner matching Hero Visual Language */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl text-white">
          
          {/* Monumental Electric Blue Watermark Typography */}
          <div className="absolute -right-8 -bottom-10 pointer-events-none select-none opacity-20 hidden md:block">
            <span className="text-[120px] lg:text-[160px] font-display font-black tracking-widest text-[#0055D4]">
              FLEET
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0055D4]/30 border border-blue-400/40 text-xs font-black tracking-wider text-blue-200 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
                MTWAPA SHOWROOM FLEET • OFFICIALLY AUTHORIZED
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-none text-white">
                Vehicle Inventory <br className="hidden sm:inline" />
                <span className="text-[#FFC107]">&amp; Showroom Catalogue</span>
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-medium leading-relaxed">
                Explore brand-new Atul 3-wheelers and genuine KENBO commuter and cargo motorcycles. Built for coastal roads, backed by official dealership warranty, genuine spare parts, and flexible Mogo daily financing.
              </p>

              {/* Quick Perks */}
              <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-bold">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white border border-white/15">
                  <span className="text-[#FFC107]">✓</span> Tuk-Tuks from KES 390,000
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white border border-white/15">
                  <span className="text-[#FFC107]">✓</span> KENBO Bikes from KES 145,000
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white border border-white/15">
                  <span className="text-[#FFC107]">✓</span> Mogo Daily Repayment Options
                </span>
              </div>
            </div>

            {/* Right Quick Stats / Cutout (4 cols) */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 backdrop-blur-xs">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFC107]">
                DEALERSHIP DIRECTORY
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Showroom Location</span>
                  <span className="font-bold text-white">Mtwapa, Malindi Rd</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Authorized Brands</span>
                  <span className="font-bold text-[#FFC107]">Atul Auto &amp; KENBO</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Registration Status</span>
                  <span className="font-bold text-emerald-400">Same-Day Assistance</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-300">Inquiry Response</span>
                  <span className="font-bold text-white">&lt; 15 Mins on WhatsApp</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter and Search Bar Card */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm mb-8 space-y-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Search Input (5 cols) */}
            <div className="lg:col-span-5 relative">
              <svg className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, brands, specs (e.g. Atul Rik, Kenbo, Cargo)..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills (5 cols) */}
            <div className="lg:col-span-5 flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Fleet' },
                { id: 'tuk-tuk', label: 'Tuk-Tuks' },
                { id: 'motorcycle', label: 'Motorcycles' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}

              <button
                onClick={() => setCommercialOnly(!commercialOnly)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  commercialOnly
                    ? 'bg-[#0D6EFD] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                Commercial Only
              </button>
            </div>

            {/* Sort Dropdown (2 cols) */}
            <div className="lg:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-3 px-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-bold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-[#0D6EFD] focus:bg-white cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

          </div>

          {/* Quick Filter Badges / Active Controls */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-700">
                <input
                  type="checkbox"
                  checked={offersOnly}
                  onChange={(e) => setOffersOnly(e.target.checked)}
                  className="w-4 h-4 text-[#0D6EFD] rounded-sm focus:ring-[#0D6EFD]"
                />
                <span className="flex items-center gap-1.5 text-[#E53935] font-extrabold">
                  <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
                  Special Offers & Discounts Only
                </span>
              </label>
            </div>

            <div className="flex items-center gap-4 text-slate-500">
              <span className="font-medium text-xs">
                Showing <strong className="text-slate-950 font-bold">{filteredVehicles.length}</strong> vehicles in catalog
              </span>
              
              {(selectedCategory !== 'all' || offersOnly || commercialOnly || searchQuery || sortBy !== 'featured') && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-[#0D6EFD] hover:underline font-bold cursor-pointer"
                >
                  <span>↺</span>
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Results Grid or Empty State */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onQuickEnquire={onOpenEnquiryModal}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/90 shadow-sm max-w-xl mx-auto my-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-2xl font-bold">
              ?
            </div>
            <h3 className="text-xl font-display font-extrabold text-slate-950">No Vehicles Matched Your Search</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium leading-relaxed">
              We couldn't find any vehicle matching "{searchQuery}". Try searching for Atul, Kenbo, or reset your active filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Disclaimer Notice */}
        <div className="mt-16 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 text-center font-medium">
          <strong className="text-slate-700">Official Dealership Notice:</strong> All vehicle listings and prices represent official commercial stock for Burhani General Supplies (KENBO Mtwapa). Final purchase price, availability, and on-the-road registration costs can be confirmed via counter consultation or instant WhatsApp.
        </div>

      </div>
    </div>
  );
};
