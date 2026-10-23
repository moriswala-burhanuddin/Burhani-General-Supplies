export type VehicleCategory = 'all' | 'tuk-tuk' | 'motorcycle' | 'commercial';

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  model: string;
  brand: string;
  category: 'tuk-tuk' | 'motorcycle';
  isCommercial?: boolean;
  priceKes: number | null; // null means "Request a Quote"
  previousPriceKes?: number;
  badge?: string;
  badgeType?: 'offer' | 'popular' | 'commercial' | 'new';
  imageUrl: string;
  gallery?: string[];
  shortDesc: string;
  fullDesc: string;
  specs: {
    engine?: string;
    fuelType?: string;
    seatingCapacity?: string;
    payload?: string;
    warranty?: string;
    transmission?: string;
    brakes?: string;
    suspension?: string;
  };
  highlights: string[];
  financingAvailable: boolean;
  featured?: boolean;
}

export interface SparePart {
  id: string;
  name: string;
  category: 'Engine' | 'Braking' | 'Transmission' | 'Electrical' | 'Tyres & Cables' | 'Suspension';
  compatibleWith: string;
  priceKes: number | null;
  sku: string;
  inStock: boolean;
  imageUrl: string;
  description: string;
}

export interface EnquiryData {
  vehicleId?: string;
  vehicleName?: string;
  partName?: string;
  customerName: string;
  phoneNumber: string;
  email?: string;
  location?: string;
  financingInterest?: boolean;
  message?: string;
}

// Runtime metadata export
export const APP_INFO = {
  name: 'Burhani General Supplies',
  descriptor: 'KENBO Mtwapa',
  town: 'Mtwapa, Kenya'
};
