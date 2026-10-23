import type { Vehicle } from '../types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'atul-rik-petrol',
    slug: 'atul-rik-petrol',
    name: 'Atul Rik Petrol Tuk-Tuk',
    model: 'Rik 392S Petrol Passenger',
    brand: 'Atul Auto',
    category: 'tuk-tuk',
    isCommercial: false,
    priceKes: 390000,
    previousPriceKes: 425500,
    badge: 'Special Offer',
    badgeType: 'offer',
    imageUrl: '/images/atul-rik.jpg',
    gallery: [
      '/images/atul-rik.jpg',
      '/images/atul-gem-paxx.jpg',
      '/images/cargo-tuktuk.jpg'
    ],
    shortDesc: 'The gold standard in urban passenger mobility across the Coast region. Exceptional fuel economy, reinforced steel chassis, and passenger comfort.',
    fullDesc: 'The Atul Rik Petrol Tuk-Tuk is engineered specifically for everyday commercial passenger transit on Kenyan coastal roads. Built with a robust monocoque steel frame, it balances nimble handling through busy town centers like Mtwapa and Mombasa with long-term mechanical reliability.',
    specs: {
      engine: '198.6cc 4-Stroke, Single Cylinder Forced Air Cooled',
      fuelType: 'Petrol (High Fuel Efficiency)',
      seatingCapacity: 'Driver + 3 to 4 Passengers',
      payload: 'Heavy Duty Passenger Suspension',
      warranty: '1 Year / 20,000 KM Dealership Warranty (Terms apply)',
      transmission: '4 Forward + 1 Reverse Manual Transmission',
      brakes: 'Hydraulic Internal Expanding Drum Brakes',
      suspension: 'Helical Spring with Dampers'
    },
    highlights: [
      'August Offer price of KES 390,000 (Saved KES 35,500)',
      'High ground clearance suited for coastal terrain',
      'Roll-up weatherproof side curtains for rainy coastal weather',
      'Ergonomic driver cockpit with digital instrument cluster'
    ],
    financingAvailable: true,
    featured: true
  },
  {
    id: 'atul-gem-paxx',
    slug: 'atul-gem-paxx',
    name: 'Atul GEM Diesel Tuk-Tuk',
    model: 'GEM Diesel Passenger (Logbook Transfer Included)',
    brand: 'Atul Auto',
    category: 'tuk-tuk',
    isCommercial: false,
    priceKes: 485000,
    previousPriceKes: 525500,
    badge: 'Plus Logbook Transfer',
    badgeType: 'offer',
    imageUrl: '/images/atul-gem-paxx.jpg',
    gallery: [
      '/images/atul-gem-paxx.jpg',
      '/images/atul-rik.jpg'
    ],
    shortDesc: 'Deals Moto Moto! Heavy-duty Atul GEM Diesel Tuk-Tuk. Was KES 525,500, now KES 485,000 PLUS Logbook Transfer included.',
    fullDesc: 'The Atul GEM Diesel Tuk-Tuk is the flagship commercial passenger 3-wheeler designed for high customer satisfaction, exceptional diesel fuel economy, and maximum trip revenue. Enjoy our limited Mtwapa offer with logbook transfer included.',
    specs: {
      engine: 'Single Cylinder 4-Stroke High-Torque Diesel Engine',
      fuelType: 'Diesel (High Torque & Low Running Cost)',
      seatingCapacity: 'Spacious Cabin for Driver + Passengers',
      payload: 'Class-leading cabin volume and stability',
      warranty: '1 Year / 20,000 KM Warranty',
      transmission: 'Constant Mesh 4-Speed with Reverse',
      brakes: 'Dual Circuit Hydraulic Drum Brakes',
      suspension: 'Heavy-Duty Trailing Arm with Hydraulic Shocks'
    },
    highlights: [
      'August Offer price of KES 485,000 (Was KES 525,500)',
      'Plus FREE Logbook Transfer included on purchase',
      'Complimentary 1 Set of Cables & 1 Set of Tyres included',
      'Free Fire Extinguisher & 1 Full Tank of Fuel on handover',
      'Financing available with Mogo Finance (from KES 1,132 daily with KES 102K deposit)'
    ],
    financingAvailable: true,
    featured: true
  },
  {
    id: 'kenbo-150-commuter',
    slug: 'kenbo-150-commuter',
    name: 'Kenbo 150 Commuter Motorcycle',
    model: 'Kenbo KB-150 Explorer',
    brand: 'KENBO',
    category: 'motorcycle',
    isCommercial: false,
    priceKes: 145000,
    badge: 'Fuel Efficient',
    badgeType: 'new',
    imageUrl: '/images/kenbo-commuter.jpg',
    gallery: [
      '/images/kenbo-commuter.jpg',
      '/images/delivery-motorcycle.jpg'
    ],
    shortDesc: 'Reliable, powerful 150cc commuter motorcycle built to conquer coastal tarmac and murram roads with minimal fuel consumption.',
    fullDesc: 'As an authorized KENBO dealership in Mtwapa, Burhani General Supplies provides the genuine Kenbo 150 Commuter. Featuring an upgraded dual shock absorber system and reinforced pillion carrier, this motorbike delivers dependable daily performance.',
    specs: {
      engine: '149.5cc Single Cylinder OHC 4-Stroke',
      fuelType: 'Petrol (Up to 45 km/L)',
      seatingCapacity: 'Rider + Pillion Passenger',
      payload: '180 kg Max Safe Operating Load',
      warranty: 'Manufacturer standard engine warranty',
      transmission: '5-Speed Manual Gearbox',
      brakes: 'Front Hydraulic Disc / Rear Drum',
      suspension: 'Telescopic Front Fork / Heavy-Duty Dual Coil Spring'
    },
    highlights: [
      'Alloy wheels with tubeless tyre compatibility',
      'Heavy-duty rear luggage and pillion grab rail',
      'Bright halogen/LED headlamp for night riding safety',
      'Low maintenance cost with readily available spare parts in Mtwapa'
    ],
    financingAvailable: true,
    featured: true
  },
  {
    id: 'delivery-cargo-125',
    slug: 'delivery-cargo-125',
    name: 'Hercules 125 Commercial Delivery Bike',
    model: 'Hercules HD 125 Fleet Special',
    brand: 'Hercules Delivery',
    category: 'motorcycle',
    isCommercial: true,
    priceKes: 138000,
    previousPriceKes: 149000,
    badge: 'Fleet Ready',
    badgeType: 'commercial',
    imageUrl: '/images/delivery-motorcycle.jpg',
    gallery: [
      '/images/delivery-motorcycle.jpg',
      '/images/kenbo-commuter.jpg'
    ],
    shortDesc: 'Purpose-built for dispatch riders, courier fleets, and small retail delivery businesses with heavy-duty cargo rack and side crash bars.',
    fullDesc: 'The Hercules 125 is engineered for courier logistics, e-commerce dispatch, and retail distribution across Mtwapa, Bamburi, and Mombasa Island. Designed with an ultra-durable steel rear cargo platform ready for courier boxes.',
    specs: {
      engine: '124cc 4-Stroke Air-Cooled High-Torque',
      fuelType: 'Petrol',
      seatingCapacity: 'Single Rider with Extended Rear Cargo Deck',
      payload: 'Reinforced 100 kg Cargo Platform Capacity',
      warranty: '6 Months Dealership Engine Warranty',
      transmission: '4-Speed All-Down Gearbox',
      brakes: 'Front Disc & Heavy Rear Drum Brake',
      suspension: 'Dual Heavy Load Shock Absorbers'
    },
    highlights: [
      'Factory-welded steel delivery cargo rack',
      'Engine crash guard cages pre-installed',
      'Fuel-efficient 125cc engine for maximum margin per delivery',
      'Fleet purchase discounts available on request'
    ],
    financingAvailable: true,
    featured: true
  },
  {
    id: 'atul-shakti-cargo',
    slug: 'atul-shakti-cargo',
    name: 'Atul Shakti Cargo 3-Wheeler',
    model: 'Atul Shakti Heavy Commercial Pickup',
    brand: 'Atul Auto',
    category: 'tuk-tuk',
    isCommercial: true,
    priceKes: 520000,
    badge: 'Heavy Commercial',
    badgeType: 'commercial',
    imageUrl: '/images/cargo-tuktuk.jpg',
    gallery: [
      '/images/cargo-tuktuk.jpg',
      '/images/atul-rik.jpg'
    ],
    shortDesc: 'The heavy-duty 3-wheeler cargo hauler. Open steel flatbed box with up to 650kg payload capability for hardware, wholesale supplies, and farming goods.',
    fullDesc: 'The Atul Shakti Cargo transforms commercial transportation for coastal distributors, hardware shops, and general merchants. With its drop-down steel cargo sides and high torque transmission, it handles heavy coastal cargo with ease.',
    specs: {
      engine: 'High-Torque Commercial Single Cylinder Engine',
      fuelType: 'Petrol',
      seatingCapacity: 'Driver + 1 Co-pilot in Enclosed Cab',
      payload: 'Rated 650 kg Commercial Payload',
      warranty: '1 Year Commercial Warranty',
      transmission: 'Heavy Duty 4-Speed Gearbox + Reverse',
      brakes: 'Heavy Hydraulic Drum Brakes all round',
      suspension: 'Multi-Leaf Spring Rear Suspension with Shock Absorbers'
    },
    highlights: [
      'Spacious steel cargo deck with tie-down rails',
      'Reinforced leaf spring suspension for maximum load stability',
      'Enclosed steel driver cabin with wipers and weather shielding',
      'Ideal for hardware merchants, water bottle delivery, and market logistics'
    ],
    financingAvailable: true,
    featured: false
  },
  {
    id: 'kenbo-cruiser-150',
    slug: 'kenbo-cruiser-150',
    name: 'Kenbo Cruiser 150cc Rugged Special',
    model: 'Kenbo Cruiser Trail Edition',
    brand: 'KENBO',
    category: 'motorcycle',
    isCommercial: false,
    priceKes: null, // Request a Quote
    badge: 'Boda Special',
    badgeType: 'popular',
    imageUrl: '/images/kenbo-commuter.jpg',
    gallery: [
      '/images/kenbo-commuter.jpg'
    ],
    shortDesc: 'Engineered specifically for coastal passenger boda-boda operations. Cushioned long saddle, USB mobile phone charger, and robust spoke rims.',
    fullDesc: 'Crafted for daily commercial boda-boda riders who spend 10+ hours on the road. The Kenbo Cruiser 150 Special features extra-thick high-density foam seating, dual USB phone charging socket, and high-tensile spoke rims that absorb coastal potholes.',
    specs: {
      engine: '150cc High Compression 4-Stroke Engine',
      fuelType: 'Petrol',
      seatingCapacity: 'Rider + Pillion',
      payload: 'Reinforced 190 kg Operating Capacity',
      warranty: 'Dealership engine coverage available',
      transmission: '5-Speed Return Shift',
      brakes: 'Front & Rear Heavy-Duty Drum System',
      suspension: 'Long-Travel Hydraulic Front Forks & Dual Rear Shocks'
    },
    highlights: [
      'Integrated handlebar USB fast charger for rider phones',
      'Anti-slip dual rider-passenger textured seat',
      'Large 13L fuel tank for extended inter-town runs without refueling',
      'Affordable routine servicing parts in stock at Mtwapa'
    ],
    financingAvailable: true,
    featured: false
  }
];
