import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { VEHICLES } from '../../data/products';
import { VehicleCard } from '../common/VehicleCard';

interface FeaturedFleetProps {
  onOpenEnquiryModal?: (vehicleName: string) => void;
}

export const FeaturedFleet: React.FC<FeaturedFleetProps> = ({ onOpenEnquiryModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F4F7FB] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#168ACB] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F8C928]" />
              In-Stock Showroom Inventory
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#082B5C] tracking-tight">
              Featured Vehicles
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Inspect our most demanded tuk-tuks and commercial motorbikes. All prices are labelled as illustrative demo prices until confirmed at our Mtwapa dealership.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <Link
              to="/vehicles"
              className="px-5 py-2.5 bg-white hover:bg-slate-50 text-[#082B5C] font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-200 shadow-xs transition-all flex items-center gap-1.5"
            >
              <Filter className="w-3.5 h-3.5 text-[#168ACB]" />
              <span>Filter & Compare All ({VEHICLES.length})</span>
            </Link>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onQuickEnquire={onOpenEnquiryModal}
            />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 italic">
            * All prices shown are illustrative demo values based on coastal dealership market rates and promotional campaigns. Confirm exact on-the-road prices with the sales team.
          </p>
        </div>

      </div>
    </section>
  );
};
