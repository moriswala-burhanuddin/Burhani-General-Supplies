import React from 'react';
import { ShowcaseHero } from '../components/home/ShowcaseHero';
import { SpecialDealsCard } from '../components/home/SpecialDealsCard';
import { HowItWorksContact } from '../components/home/HowItWorksContact';
import { ReadyToFindBanner } from '../components/home/ReadyToFindBanner';
import { VEHICLES } from '../data/products';
import { VehicleCard } from '../components/common/VehicleCard';

interface HomePageProps {
  onOpenEnquiryModal: (vehicleName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiryModal }) => {
  return (
    <div className="bg-white space-y-12 pb-16">
      
      {/* 1. Exact Showcase Hero Section matching Burhani Kenbo Mtwapa Tuk-Tuk Showcase.png */}
      <ShowcaseHero onOpenEnquiryModal={onOpenEnquiryModal} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 2. Special Commercial Deals on Selected Fleet */}
        <div>
          <SpecialDealsCard />
        </div>

        {/* 3. All Showroom Vehicles & Products Grid (One-Page Catalog with Direct WhatsApp Inquiries) */}
        <section id="vehicles" className="scroll-mt-24 space-y-8">
          
          {/* Section Header */}
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0D6EFD]">
              <span className="w-2 h-2 rounded-full bg-[#0D6EFD]" />
              MTWAPA SHOWROOM FLEET • OFFICIALLY AUTHORIZED
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-950 tracking-tight leading-none">
              Our Complete Showroom Fleet
            </h2>
            
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl font-medium leading-relaxed">
              Explore Atul 3-wheelers, KENBO commuter bikes, and commercial delivery vehicles. Discover official specifications, pricing, and instant WhatsApp inquiries in Mtwapa.
            </p>
          </div>

          {/* 6 Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VEHICLES.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onQuickEnquire={onOpenEnquiryModal}
              />
            ))}
          </div>

          {/* Dealership Guarantee Notice */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 text-center font-medium">
            <strong className="text-slate-700">Official Dealership Notice:</strong> All vehicle listings and prices represent official commercial stock for Burhani General Supplies (KENBO Mtwapa). Final purchase price, availability, and on-the-road registration costs can be confirmed via counter consultation or instant WhatsApp.
          </div>

        </section>

        {/* 4. Contact & Showroom Desk (Anchor #contact) */}
        <section id="contact" className="scroll-mt-24">
          <HowItWorksContact />
        </section>

        {/* 5. Ready To Find Your Next Ride CTA */}
        <div>
          <ReadyToFindBanner />
        </div>

      </div>

    </div>
  );
};
