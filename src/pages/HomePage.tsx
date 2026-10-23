import React from 'react';
import { ShowcaseHero } from '../components/home/ShowcaseHero';
import { CategoryCards } from '../components/home/CategoryCards';
import { KenboMotorcycleCard } from '../components/home/KenboMotorcycleCard';
import { FinancingBanner } from '../components/home/FinancingBanner';
import { SpecialDealsCard } from '../components/home/SpecialDealsCard';
import { HowItWorksContact } from '../components/home/HowItWorksContact';
import { ReadyToFindBanner } from '../components/home/ReadyToFindBanner';

interface HomePageProps {
  onOpenEnquiryModal: (vehicleName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiryModal }) => {
  return (
    <div className="bg-white space-y-12 pb-16">
      
      {/* 1. Exact Showcase Hero & Branding Section matching Burhani Kenbo Mtwapa Tuk-Tuk Showcase.png */}
      <ShowcaseHero onOpenEnquiryModal={onOpenEnquiryModal} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 2. Three Main Category Cards: MOTORCYCLES, TUK-TUKS, SPARE PARTS */}
        <CategoryCards />

        {/* 3. Middle Feature Row: KENBO 150cc & Flexible Financing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <KenboMotorcycleCard />
          </div>
          <div className="lg:col-span-6">
            <FinancingBanner />
          </div>
        </div>

        {/* 4. Special Deals on Selected Fleet */}
        <div>
          <SpecialDealsCard />
        </div>

        {/* 5. How It Works (3 Steps) & Direct Showroom Desk */}
        <HowItWorksContact />

        {/* 6. Ready To Find Your Next Ride CTA */}
        <ReadyToFindBanner />

      </div>

    </div>
  );
};
