import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { buildWhatsAppLink, DEALERSHIP_WHATSAPP } from '../../utils/whatsapp';

interface ShowcaseHeroProps {
  onOpenEnquiryModal: (vehicleName?: string) => void;
}

interface ProductData {
  id: string;
  categoryCode: string;
  categoryLabel: string;
  titleLine1: string;
  titleLine2: string;
  title: string;
  subtitle: string;
  prevPrice: string;
  price: string;
  badge: string;
  backdropWord: string;
  image: string;
  scriptText: string;
  bullets: Array<{ icon: string; text: React.ReactNode }>;
  hotspots: Array<{ id: string; top: string; left: string; title: string; desc: string }>;
  thumbnails: Array<{ id: number; img: string; label: string }>;
  specs: Record<string, string>;
  features: string[];
}

export const ShowcaseHero: React.FC<ShowcaseHeroProps> = ({ onOpenEnquiryModal }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'GALLERY' | 'FEATURES' | 'SPECIFICATIONS' | 'COMPARE'>('OVERVIEW');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  // 9 Authentic Showroom Vehicles with Transparent PNG Cutouts!
  const products: ProductData[] = [
    {
      id: 'atul-petrol',
      categoryCode: '01',
      categoryLabel: 'TUK-TUKS',
      titleLine1: 'ATUL Rik',
      titleLine2: 'Petrol Tuk-Tuk',
      title: 'Atul petrol',
      subtitle: 'The gold standard in urban passenger mobility across the Coast region. High fuel economy and reinforced steel frame.',
      prevPrice: 'KES 425,500',
      price: 'KES 390,000',
      badge: 'SPECIAL OFFER',
      backdropWord: 'ATUL',
      image: '/products/atul-petrol.png',
      scriptText: 'Built\nfor a moving\nMtwapa',
      bullets: [
        { icon: 'target', text: 'Ideal for passenger transport' },
        { icon: 'shield', text: 'Reliable coastal-grade durability' },
        { icon: 'briefcase', text: 'Low operating & maintenance cost' },
        { icon: 'info', text: <>Ask <strong className="text-slate-900 font-bold">about Mogo daily financing</strong></> }
      ],
      hotspots: [
        { id: 'canopy', top: '24%', left: '42%', title: 'Reinforced Weather Canopy', desc: 'Coastal waterproof passenger roof with roll-down weather shields.' },
        { id: 'cabin', top: '46%', left: '52%', title: 'Comfort 3-Passenger Cabin', desc: 'Ergonomic high-density foam seating with heavy-duty grab handles.' },
        { id: 'engine', top: '56%', left: '36%', title: 'High-Torque Atul Engine & Fork', desc: 'Fuel-efficient 200cc 4-stroke engine with heavy-duty front suspension.' }
      ],
      thumbnails: [
        { id: 0, img: '/products/atul-petrol.png', label: 'Atul petrol' },
        { id: 1, img: '/products/ATUL DIESEL TUKTUK.png', label: 'Atul Diesel' },
        { id: 2, img: '/products/Atul diesel Cargo-Photoroom.png', label: 'Atul Cargo' }
      ],
      specs: {
        'Engine': '198.6cc, 4-Stroke Petrol',
        'Capacity': 'Driver + 3-4 Passengers',
        'Fuel Economy': '~28 km/L',
        'Transmission': '4 Forward + 1 Reverse',
        'Warranty': '1 Year Dealership Cover'
      },
      features: [
        'Monocoque steel frame chassis engineered for coastal roads',
        'High passenger safety rating and roll-up weatherproof side curtains',
        'Readily available spare parts at our Mtwapa showroom counter'
      ]
    },
    {
      id: 'kenbo-100',
      categoryCode: '02',
      categoryLabel: 'MOTORCYCLES',
      titleLine1: 'KENBO 100cc',
      titleLine2: 'Commuter Bike',
      title: 'Kenbo 100cc',
      subtitle: 'Engineered for tough coastal terrain, exceptional fuel economy, and dependable daily commuter mobility.',
      prevPrice: 'KES 145,000',
      price: 'KES 132,000',
      badge: 'TOP ECONOMY',
      backdropWord: 'KENBO',
      image: '/products/Kenbo 100cc.png',
      scriptText: 'Extreme economy\nevery ride\nin Kenya',
      bullets: [
        { icon: 'target', text: '100cc ultra-efficient 4-stroke engine' },
        { icon: 'shield', text: 'Over 65 km/L coastal fuel economy' },
        { icon: 'briefcase', text: 'Dual rear shocks for comfortable travel' },
        { icon: 'info', text: <>Ask <strong className="text-slate-900 font-bold">about daily boda financing</strong></> }
      ],
      hotspots: [
        { id: 'tank', top: '28%', left: '42%', title: 'Long-Range Fuel Tank', desc: 'Covers over 650km on a single full tank across coastal transit routes.' },
        { id: 'engine', top: '52%', left: '46%', title: '100cc Air-Cooled Engine', desc: 'High-economy commuter engine designed for continuous tropical operation.' }
      ],
      thumbnails: [
        { id: 0, img: '/products/Kenbo 100cc.png', label: 'Kenbo 100cc' },
        { id: 1, img: '/products/Kenbo 125cc-Photoroom.png', label: 'Kenbo 125cc' },
        { id: 2, img: '/products/Canda 110 petrol Scooter.png', label: 'Canda 110' }
      ],
      specs: {
        'Engine': '100cc 4-Stroke Air-Cooled',
        'Mileage': '~65 km/L Ultra Economy',
        'Transmission': '4-Speed Manual Gearbox',
        'Braking': 'Front & Rear Heavy-Duty Drum',
        'Daily Plan': 'From KES 300/day via Mogo'
      },
      features: [
        'Lightweight nimble handling through busy coastal centers',
        'Heavy-duty chrome spoked wheels for pothole absorption',
        'Full spare parts backup at our Mtwapa showroom counter'
      ]
    },
    {
      id: 'kenbo-s20',
      categoryCode: '03',
      categoryLabel: 'ELECTRIC EV',
      titleLine1: 'KENBO S-20',
      titleLine2: 'Electric Scooter',
      title: 'S 20 kenbo Electric Scooters',
      subtitle: 'Zero fuel expenses with 100% plug & charge smart electric mobility. Smooth, quiet, and eco-friendly.',
      prevPrice: 'KES 160,000',
      price: 'KES 145,000',
      badge: '100% ELECTRIC',
      backdropWord: 'ELECTRIC',
      image: '/products/S 20 kenbo Electric Scooters .png',
      scriptText: 'Zero fuel cost\npure electric\nfreedom',
      bullets: [
        { icon: 'target', text: 'Zero petrol costs — charge at home' },
        { icon: 'shield', text: 'High capacity rechargeable battery pack' },
        { icon: 'briefcase', text: 'Front luggage basket & rear cargo box' },
        { icon: 'info', text: <>Ask <strong className="text-slate-900 font-bold">about EV battery warranty</strong></> }
      ],
      hotspots: [
        { id: 'motor', top: '55%', left: '50%', title: 'High-Torque Hub Motor', desc: 'Direct drive electric motor with instant acceleration and zero emissions.' },
        { id: 'basket', top: '30%', left: '60%', title: 'Front Cargo Basket', desc: 'Convenient storage basket for packages and everyday essentials.' }
      ],
      thumbnails: [
        { id: 0, img: '/products/S 20 kenbo Electric Scooters .png', label: 'S 20 EV' },
        { id: 1, img: '/products/Kenbo Electric Scooters u20-Photoroom.png', label: 'U20 Sport' },
        { id: 2, img: '/products/Kenbo 100cc.png', label: 'Kenbo 100' }
      ],
      specs: {
        'Power': '100% Pure Electric Motor',
        'Charging': 'Standard 240V Home Wall Socket',
        'Brakes': 'Front Disc & Rear Drum',
        'Top Speed': '45 - 50 km/h Urban Mobility',
        'Running Cost': 'Less than KES 50 per full charge'
      },
      features: [
        'Huge savings compared to daily petrol expenditures',
        'Low maintenance schedule with no oil changes or spark plugs',
        'Authorized dealer service and battery backup in Mtwapa'
      ]
    },
    {
      id: 'kenbo-125',
      categoryCode: '04',
      categoryLabel: 'COMMUTER',
      titleLine1: 'KENBO 125cc',
      titleLine2: 'Commercial Bike',
      title: 'Kenbo 125cc',
      subtitle: 'High-torque 125cc commuter motorcycle built with reinforced diamond frame and extended pillion carrier deck.',
      prevPrice: 'KES 158,000',
      price: 'KES 147,000',
      badge: 'POPULAR BODA',
      backdropWord: 'KENBO',
      image: '/products/Kenbo 125cc-Photoroom.png',
      scriptText: 'Built tough\nfor coastal\ntransit',
      bullets: [
        { icon: 'target', text: '125cc high-compression engine' },
        { icon: 'shield', text: 'Reinforced dual rear suspension' },
        { icon: 'briefcase', text: 'Extended luggage & passenger carrier' },
        { icon: 'info', text: <>Ask <strong className="text-slate-900 font-bold">about boda boda packages</strong></> }
      ],
      hotspots: [
        { id: 'carrier', top: '35%', left: '62%', title: 'Reinforced Boda Carrier', desc: 'Heavy gauge steel carrier rack engineered for heavy payloads.' },
        { id: 'engine', top: '50%', left: '44%', title: '125cc 4-Stroke Engine', desc: 'Smooth performance with minimal maintenance overhead.' }
      ],
      thumbnails: [
        { id: 0, img: '/products/Kenbo 125cc-Photoroom.png', label: 'Kenbo 125cc' },
        { id: 1, img: '/products/Kenbo 100cc.png', label: 'Kenbo 100cc' },
        { id: 2, img: '/products/Canda 110 petrol Scooter.png', label: 'Canda 110' }
      ],
      specs: {
        'Engine': '125cc 4-Stroke Single Cylinder',
        'Transmission': '5-Speed Constant Mesh',
        'Fuel Economy': '~58 km/L',
        'Payload': 'Heavy Duty Commercial Rated',
        'Warranty': 'Dealership Engine Cover'
      },
      features: [
        'Ergonomic dual seat designed for long working hours',
        'Rugged knobby tyres suitable for murram and sandy routes',
        'Immediate collection at our Mtwapa showroom counter'
      ]
    },
    {
      id: 'kenbo-u20',
      categoryCode: '05',
      categoryLabel: 'SPORT EV',
      titleLine1: 'KENBO U20',
      titleLine2: 'Sport Power EV',
      title: 'Kenbo Electric Scooters u20',
      subtitle: 'Sport Power electric scooter with aerodynamic sports windshield, hydraulic disc brakes, and enclosed top cargo box.',
      prevPrice: 'KES 170,000',
      price: 'Cash KES 155,000',
      badge: 'SPORT POWER',
      backdropWord: 'SPORT EV',
      image: '/products/Kenbo Electric Scooters u20-Photoroom.png',
      scriptText: 'High performance\nsport power\nscooter',
      bullets: [
        { icon: 'target', text: 'High output Sport Power electric drive' },
        { icon: 'shield', text: 'Performance front hydraulic disc brake' },
        { icon: 'briefcase', text: 'Enclosed lockable rear cargo box' },
        { icon: 'info', text: <>Ask <strong className="text-slate-900 font-bold">about cash discounts in Mtwapa</strong></> }
      ],
      hotspots: [
        { id: 'disc', top: '70%', left: '60%', title: 'Red Sport Caliper Disc', desc: 'High performance braking with drilled rotor for coastal stopping safety.' },
        { id: 'windshield', top: '20%', left: '58%', title: 'Aerodynamic Sport Fairing', desc: 'Protects rider from coastal winds and improves cruising efficiency.' }
      ],
      thumbnails: [
        { id: 0, img: '/products/Kenbo Electric Scooters u20-Photoroom.png', label: 'U20 Sport' },
        { id: 1, img: '/products/S 20 kenbo Electric Scooters .png', label: 'S 20 EV' },
        { id: 2, img: '/products/Canda 110 petrol Scooter.png', label: 'Canda 110' }
      ],
      specs: {
        'Drive': 'Sport Power Electric Motor',
        'Brakes': 'Front Hydraulic Disc + Rear Drum',
        'Storage': 'Lockable Top Trunk Box Included',
        'Running Cost': 'Ultra low cost per km',
        'Warranty': 'Authorized Dealership Guarantee'
      },
      features: [
        'Modern stealth black exterior with LED daytime running lights',
        'Comfortable cushioned seating with pillion footrests',
        'Clean, silent, and eco-friendly urban commuting'
      ]
    },
    {
      id: 'atul-cargo',
      categoryCode: '06',
      categoryLabel: 'CARGO',
      titleLine1: 'ATUL Diesel',
      titleLine2: 'Cargo Flatbed',
      title: 'Atul diesel Cargo',
      subtitle: 'Heavy-duty 3-wheeler cargo flatbed designed for building materials, hardware, and logistics distribution across Mtwapa.',
      prevPrice: 'KES 560,000',
      price: 'Cash KES 525,000',
      badge: 'HEAVY CARGO',
      backdropWord: 'CARGO',
      image: '/products/Atul diesel Cargo-Photoroom.png',
      scriptText: 'Maximum load\n500KG rated\nflatbed',
      bullets: [
        { icon: 'target', text: 'Heavy commercial payload flatbed' },
        { icon: 'shield', text: 'All-steel drop-side cargo gates' },
        { icon: 'briefcase', text: 'High torque diesel pull for heavy haul' },
        { icon: 'info', text: <>Ask <strong className="text-slate-900 font-bold">about commercial fleet rates</strong></> }
      ],
      hotspots: [
        { id: 'flatbed', top: '38%', left: '60%', title: 'Corrugated Steel Bed', desc: 'High-gauge steel flatbed with tie-down rails for heavy cargo.' },
        { id: 'cabin', top: '28%', left: '40%', title: 'Enclosed Driver Cabin', desc: 'Weather protection for all-day commercial logistics routes.' }
      ],
      thumbnails: [
        { id: 0, img: '/products/Atul diesel Cargo-Photoroom.png', label: 'Atul Cargo' },
        { id: 1, img: '/products/Apsonic 200cc 3 wheeler-Photoroom.png', label: 'Apsonic Trike' },
        { id: 2, img: '/products/ATUL DIESEL TUKTUK.png', label: 'Atul Diesel' }
      ],
      specs: {
        'Engine': 'High-Torque Single Cylinder Diesel',
        'Payload': 'Heavy Commercial Rated',
        'Cargo Bed': 'All-Steel Drop-Side Tray',
        'Transmission': '4 Forward + 1 Reverse Heavy Ratio',
        'Warranty': '1 Year Dealership Warranty'
      },
      features: [
        'Extreme cargo profitability for coastal distribution and trade',
        'Reinforced leaf spring suspension for heavy loads',
        'Immediate delivery from our Mtwapa showroom depot'
      ]
    },
    {
      id: 'apsonic-200',
      categoryCode: '07',
      categoryLabel: 'APSONIC',
      titleLine1: 'APSONIC 200cc',
      titleLine2: 'Cargo 3-Wheeler',
      title: 'Apsonic 200cc 3 wheeler',
      subtitle: '200cc heavy-duty cargo trike with driver weather canopy, drop-side gates, and high pulling power for commercial delivery.',
      prevPrice: 'KES 385,000',
      price: 'Cash 350,000',
      badge: 'CARGO TRIKE',
      backdropWord: 'APSONIC',
      image: '/products/Apsonic 200cc 3 wheeler-Photoroom.png',
      scriptText: 'Heavy hauling\ncommercial\npower',
      bullets: [
        { icon: 'target', text: '200cc high output pulling power' },
        { icon: 'shield', text: 'Protective overhead weather canopy' },
        { icon: 'briefcase', text: 'Reinforced dual front spring forks' },
        { icon: 'info', text: <>Ask <strong className="text-slate-900 font-bold">about cash purchase deals</strong></> }
      ],
      hotspots: [
        { id: 'canopy', top: '15%', left: '35%', title: 'All-Weather Roof', desc: 'Protects the driver against sun and coastal rain.' },
        { id: 'box', top: '40%', left: '60%', title: 'Deep Commercial Cargo Box', desc: 'Generous volume for farm produce, hardware, and goods.' }
      ],
      thumbnails: [
        { id: 0, img: '/products/Apsonic 200cc 3 wheeler-Photoroom.png', label: 'Apsonic Trike' },
        { id: 1, img: '/products/Atul diesel Cargo-Photoroom.png', label: 'Atul Cargo' },
        { id: 2, img: '/products/atul-petrol.png', label: 'Atul Petrol' }
      ],
      specs: {
        'Engine': '200cc High Power Engine',
        'Cargo Box': 'Deep Steel Cargo Body',
        'Roof': 'Full Driver Weather Canopy',
        'Brakes': 'Heavy Hydraulic Commercial System',
        'Warranty': 'Authorized Dealership Cover'
      },
      features: [
        'Powerful low gear ratio for steep gradients and sand',
        'Dual shock front forks with auxiliary springs',
        'Genuine parts and servicing in stock at Mtwapa'
      ]
    },
    {
      id: 'atul-diesel-tuktuk',
      categoryCode: '08',
      categoryLabel: 'DIESEL',
      titleLine1: 'ATUL GEM',
      titleLine2: 'Diesel Tuk-Tuk',
      title: 'ATUL DIESEL TUKTUK',
      subtitle: 'Flagship Atul GEM Diesel passenger tuk-tuk. Outstanding torque, spacious passenger room, and lowest running cost per passenger trip.',
      prevPrice: 'KES 525,500',
      price: 'KES 485,000',
      badge: 'DIESEL PASSENGER',
      backdropWord: 'DIESEL',
      image: '/products/ATUL DIESEL TUKTUK.png',
      scriptText: 'High torque\nmaximum passenger\nrevenue',
      bullets: [
        { icon: 'target', text: 'Class-leading diesel fuel economy' },
        { icon: 'shield', text: 'Spacious seating for 3-4 passengers' },
        { icon: 'briefcase', text: 'Monocoque high-tensile steel frame' },
        { icon: 'info', text: <>Ask <strong className="text-slate-900 font-bold">about daily repayment plans</strong></> }
      ],
      hotspots: [
        { id: 'body', top: '35%', left: '48%', title: 'All-Metal Monocoque Body', desc: 'Enhanced safety and longevity on Kenyan coastal roads.' },
        { id: 'engine', top: '55%', left: '42%', title: 'High-Torque Diesel Engine', desc: 'Unmatched pull under full passenger load with low fuel costs.' }
      ],
      thumbnails: [
        { id: 0, img: '/products/ATUL DIESEL TUKTUK.png', label: 'Atul Diesel' },
        { id: 1, img: '/products/atul-petrol.png', label: 'Atul Petrol' },
        { id: 2, img: '/products/Atul diesel Cargo-Photoroom.png', label: 'Atul Cargo' }
      ],
      specs: {
        'Engine': 'Single Cylinder 4-Stroke Diesel',
        'Passenger Capacity': 'Driver + 3-4 Passengers',
        'Fuel': 'High Torque Diesel',
        'Transmission': '4 Forward + 1 Reverse Manual',
        'Warranty': '1 Year / 20,000 KM Cover'
      },
      features: [
        'High return on investment for passenger transit operators',
        'Roll-down weather curtains and comfortable seats',
        'Authorized Mtwapa dealer counter registration assistance'
      ]
    },
    {
      id: 'canda-scooter',
      categoryCode: '09',
      categoryLabel: 'SCOOTERS',
      titleLine1: 'CANDA 110',
      titleLine2: 'Petrol Scooter',
      title: 'Canda 110 petrol Scooter',
      subtitle: 'Quiet 110cc 4-stroke commuter scooter with semi-automatic transmission and front hydraulic disc brake. Smooth & effortless.',
      prevPrice: 'KES 148,000',
      price: 'Cash KES 135,000',
      badge: 'PETROL SCOOTER',
      backdropWord: 'CANDA',
      image: '/products/Canda 110 petrol Scooter.png',
      scriptText: 'Smooth & easy\neveryday coastal\ncommute',
      bullets: [
        { icon: 'target', text: '110cc smooth and quiet 4-stroke engine' },
        { icon: 'shield', text: 'Semi-automatic transmission (no clutch lever)' },
        { icon: 'briefcase', text: 'Front hydraulic disc brake for safety' },
        { icon: 'info', text: <>Ask <strong className="text-slate-900 font-bold">about Mtwapa counter pickup</strong></> }
      ],
      hotspots: [
        { id: 'disc', top: '70%', left: '45%', title: 'Front Disc Brake', desc: 'Superior stopping power with ventilated disc.' },
        { id: 'seat', top: '35%', left: '55%', title: 'Comfort Dual Saddle', desc: 'Soft long saddle for effortless personal travel.' }
      ],
      thumbnails: [
        { id: 0, img: '/products/Canda 110 petrol Scooter.png', label: 'Canda 110' },
        { id: 1, img: '/products/Kenbo 100cc.png', label: 'Kenbo 100cc' },
        { id: 2, img: '/products/Kenbo Electric Scooters u20-Photoroom.png', label: 'U20 Sport' }
      ],
      specs: {
        'Engine': '110cc 4-Stroke Air-Cooled',
        'Transmission': '4-Speed Semi-Automatic (No Hand Clutch)',
        'Brakes': 'Front Hydraulic Disc, Rear Drum',
        'Fuel Economy': '~60 km/L',
        'Warranty': 'Official Dealership Warranty'
      },
      features: [
        'Effortless twist-and-go ride for beginners and daily riders',
        'Bright front halogen headlamp with clear turn indicators',
        'Compact and light for nimble traffic navigation'
      ]
    }
  ];

  const currentProduct = products[activeCategoryIndex] || products[0];
  const activeDisplayImage = currentProduct.thumbnails[activeThumbIndex]?.img || currentProduct.image;

  const handleSelectProduct = (index: number) => {
    setActiveCategoryIndex(index);
    setActiveThumbIndex(0);
    setActiveHotspot(null);
    setActiveTab('OVERVIEW');
  };

  const handleNextProduct = () => {
    setActiveCategoryIndex((prev) => (prev + 1) % products.length);
    setActiveThumbIndex(0);
    setActiveHotspot(null);
    setActiveTab('OVERVIEW');
  };

  const handlePrevProduct = () => {
    setActiveCategoryIndex((prev) => (prev - 1 + products.length) % products.length);
    setActiveThumbIndex(0);
    setActiveHotspot(null);
    setActiveTab('OVERVIEW');
  };

  const whatsAppMessage = `Hello Burhani General Supplies, I am inquiring about the ${currentProduct.title} (${currentProduct.price}) showcased on your website.`;

  return (
    <div className="bg-white border-b border-slate-200">
      
      {/* ── Main Hero Split: Left White Showcase + Right Black Panel ── */}
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        
        {/* Mobile / Tablet Horizontal Category Ticker */}
        <div className="lg:hidden bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center justify-between gap-2 overflow-x-auto">
          {products.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => handleSelectProduct(idx)}
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
              }`}
            >
              <span className="text-[10px] opacity-60 mr-1.5">{p.categoryCode}</span>
              <span>{p.categoryLabel}</span>
            </button>
          ))}
        </div>

        {/* 1. Desktop Left Vertical Ticker Bar (Exactly like reference mockup, visible on lg and above!) */}
        <div className="hidden lg:flex w-14 xl:w-16 border-r border-slate-200 flex-col justify-between py-4 px-2 text-xs font-bold shrink-0 bg-white">
          <div className="space-y-6">
            {products.map((p, idx) => {
              const isActive = activeCategoryIndex === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelectProduct(idx)}
                  className={`text-left block group transition-all cursor-pointer ${
                    isActive ? 'text-slate-950 scale-102' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  {isActive ? (
                    <div className="w-6 h-0.5 bg-[#0D6EFD] mb-1" />
                  ) : (
                    <div className="w-6 h-0.5 bg-transparent mb-1" />
                  )}
                  <span className={`text-sm font-extrabold block ${isActive ? 'text-slate-950' : 'text-slate-400 group-hover:text-slate-800'}`}>
                    {p.categoryCode}
                  </span>
                  <span className={`text-[8px] tracking-wider uppercase block ${isActive ? 'text-slate-950 font-bold' : 'text-slate-400'}`}>
                    {p.categoryLabel}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-[8px] uppercase tracking-widest text-slate-400 leading-tight pb-2">
            MTWAPA<br />KENYA
          </div>
        </div>

        {/* 2. Main Showcase Stage (Tuned so the full vehicle, blue RIDE letters, and tabs fit in the viewport!) */}
        <div className="flex-1 bg-white p-3 sm:p-5 lg:p-5 flex flex-col justify-between relative border-r border-slate-200 min-h-[500px] lg:min-h-[520px]">
          
          {/* Top Header Row: Title on Left & Price/Buttons on Right */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 relative z-20">
            
            {/* Left: Category Label & Big Title */}
            <div className="space-y-0.5">
              <span className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider block">
                {currentProduct.categoryLabel}
              </span>
              
              <h1 className="font-display text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-slate-950 tracking-tight leading-[0.95]">
                {currentProduct.titleLine1}<br />{currentProduct.titleLine2}
              </h1>
              
              <p className="text-[11px] text-slate-500 max-w-xs pt-0.5 font-medium leading-relaxed line-clamp-2">
                {currentProduct.subtitle}
              </p>
            </div>

            {/* Right: Price & Quick Action Buttons */}
            <div className="flex flex-col items-start sm:items-end text-left sm:text-right space-y-1.5 shrink-0">
              
              <div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <span className="text-xs font-bold text-slate-400 line-through">
                    {currentProduct.prevPrice}
                  </span>
                  <span className="bg-[#E53935] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider">
                    {currentProduct.badge}
                  </span>
                </div>
                <div className="font-display text-xl sm:text-2xl font-extrabold text-slate-950">
                  {currentProduct.price}
                </div>
              </div>

              {/* 4 Feature Bullet Points */}
              <ul className="space-y-0.5 text-[11px] text-slate-600 font-medium hidden sm:block">
                {currentProduct.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-center sm:justify-end gap-1.5">
                    <svg className="w-3 h-3 text-[#0D6EFD] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center sm:justify-end gap-2 pt-0.5">
                <a
                  href={buildWhatsAppLink(whatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-bold text-xs py-1.5 px-3.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs transition-transform hover:-translate-y-0.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-slate-950" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.056-2.203-.568-1.745-.722-2.871-2.493-2.958-2.609-.086-.115-.705-.935-.705-1.783 0-.848.446-1.265.604-1.438.158-.173.346-.216.461-.216.115 0 .23 0 .331.005.106.005.249-.04.39.299.144.346.49 1.196.533 1.282.043.086.072.187.014.302-.058.115-.087.187-.173.288-.086.1-.182.224-.26.3-.086.084-.176.176-.076.348.1.173.444.733.953 1.186.655.583 1.207.763 1.38.85.173.086.273.072.374-.043.101-.115.432-.504.547-.677.115-.173.23-.144.389-.086.158.058 1.008.475 1.181.562.173.086.288.13.331.202.043.072.043.418-.101.823z"/>
                  </svg>
                  <span>Enquire on WhatsApp</span>
                  <span>&rarr;</span>
                </a>

                <button
                  onClick={() => onOpenEnquiryModal(currentProduct.title)}
                  className="inline-flex items-center gap-1.5 group text-xs text-slate-800 hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-full bg-white border border-slate-300 group-hover:border-slate-800 flex items-center justify-center text-xs font-bold shadow-2xs transition-colors shrink-0">
                    &rarr;
                  </span>
                  <span className="text-left leading-tight">
                    <strong className="block text-slate-900 font-bold text-[11px]">Request More</strong>
                    <span className="text-[9px] text-slate-500">Information</span>
                  </span>
                </button>
              </div>

            </div>

          </div>

          {/* Center Stage: Vehicle Visual OR Tab Content (Enlarged RIDE text & vehicle cutout per client request!) */}
          <div className="relative my-1 sm:my-2 flex items-center justify-center h-[260px] sm:h-[300px] lg:h-[340px] xl:h-[370px]">
            
            {activeTab === 'OVERVIEW' && (
              <>
                {/* Giant Electric Blue Monumental Letters */}
                <div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
                  aria-hidden="true"
                >
                  <span className="font-display font-black text-[130px] sm:text-[180px] lg:text-[230px] xl:text-[280px] tracking-tight text-[#0055D4] leading-none opacity-95 scale-y-105">
                    {currentProduct.backdropWord}
                  </span>
                </div>

                {/* The Foreground Cut-Out Vehicle (Significantly enlarged per user request) */}
                <div className="relative z-10 w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[640px] xl:max-w-[700px] flex flex-col items-center justify-center">
                  
                  <img
                    src={activeDisplayImage}
                    alt={currentProduct.title}
                    className="w-full h-auto max-h-[220px] sm:max-h-[260px] lg:max-h-[300px] xl:max-h-[330px] object-contain drop-shadow-2xl transition-all duration-300 transform hover:scale-102"
                  />

                  {/* Realistic Ground Shadow */}
                  <div className="w-[82%] h-4 sm:h-6 bg-black/25 rounded-[100%] blur-md mx-auto -mt-3 sm:-mt-4 pointer-events-none" />

                  {/* 3 Interactive Hotspot Badges on Vehicle */}
                  {currentProduct.hotspots.map((hs) => (
                    <div
                      key={hs.id}
                      className="absolute"
                      style={{ top: hs.top, left: hs.left }}
                    >
                      <button
                        onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                        className={`w-5 h-5 rounded-full bg-white text-[#0D6EFD] shadow-md border border-blue-200 flex items-center justify-center font-bold text-[11px] hover:scale-125 transition-transform cursor-pointer ${
                          activeHotspot === hs.id ? 'ring-2 ring-[#0D6EFD] scale-110' : ''
                        }`}
                        title={hs.title}
                        aria-label={hs.title}
                      >
                        +
                      </button>

                      {activeHotspot === hs.id && (
                        <div className="absolute left-6 top-0 z-30 w-44 p-2 bg-slate-950 text-white rounded-xl shadow-2xl text-[10px] leading-tight animate-fade-in border border-slate-800">
                          <strong className="text-[#FFC107] block font-bold mb-0.5 text-[11px]">
                            {hs.title}
                          </strong>
                          <p className="text-slate-300">{hs.desc}</p>
                        </div>
                      )}
                    </div>
                  ))}

                </div>

                {/* Bottom-Left Script Text: "Built for a moving Mtwapa" */}
                <div className="absolute left-1 sm:left-3 bottom-1 sm:bottom-2 z-15 pointer-events-none select-none">
                  <span className="font-script text-lg sm:text-2xl text-slate-800 leading-tight block transform -rotate-8 font-bold whitespace-pre-line">
                    {currentProduct.scriptText}
                  </span>
                </div>
              </>
            )}

            {/* In-Place Specifications View (Replaces center visual cleanly without pushing bottom layout!) */}
            {activeTab === 'SPECIFICATIONS' && (
              <div className="w-full max-w-xl bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm animate-fade-in z-20">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0D6EFD]" />
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Technical Specs - {currentProduct.title}
                    </h4>
                  </div>
                  <button 
                    onClick={() => setActiveTab('OVERVIEW')}
                    className="text-xs font-bold text-[#0D6EFD] hover:underline cursor-pointer"
                  >
                    ✕ Back to Vehicle
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                  {Object.entries(currentProduct.specs).map(([label, val]) => (
                    <div key={label} className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                      <span className="text-[9px] text-slate-400 uppercase font-semibold block">{label}</span>
                      <strong className="text-slate-900 text-[11px] font-bold block mt-0.5">{val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* In-Place Features View */}
            {activeTab === 'FEATURES' && (
              <div className="w-full max-w-xl bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm animate-fade-in z-20">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0D6EFD]" />
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Key Highlights - {currentProduct.title}
                    </h4>
                  </div>
                  <button 
                    onClick={() => setActiveTab('OVERVIEW')}
                    className="text-xs font-bold text-[#0D6EFD] hover:underline cursor-pointer"
                  >
                    ✕ Back to Vehicle
                  </button>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {currentProduct.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D6EFD] mt-1.5 shrink-0" />
                      <span className="text-[11px] font-medium leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* In-Place Compare View */}
            {activeTab === 'COMPARE' && (
              <div className="w-full max-w-xl bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm animate-fade-in z-20">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0D6EFD]" />
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Model Comparison
                    </h4>
                  </div>
                  <button 
                    onClick={() => setActiveTab('OVERVIEW')}
                    className="text-xs font-bold text-[#0D6EFD] hover:underline cursor-pointer"
                  >
                    ✕ Back to Vehicle
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 shadow-2xs">
                    <strong className="text-blue-950 block font-bold text-xs">ATUL Rik (KES 390,000)</strong>
                    <span className="text-slate-600 text-[11px] block mt-1 leading-relaxed">Agile passenger commuter, best for town traffic & high daily trip turnaround.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <strong className="text-slate-950 block font-bold text-xs">ATUL GEM PAXX (KES 485,000)</strong>
                    <span className="text-slate-600 text-[11px] block mt-1 leading-relaxed">Heavy commercial steel frame, high passenger volume, maximum daily revenue.</span>
                  </div>
                </div>
              </div>
            )}

            {/* In-Place Gallery View */}
            {activeTab === 'GALLERY' && (
              <div className="w-full max-w-xl bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm animate-fade-in z-20">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0D6EFD]" />
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Vehicle Angle Gallery - {currentProduct.title}
                    </h4>
                  </div>
                  <button 
                    onClick={() => setActiveTab('OVERVIEW')}
                    className="text-xs font-bold text-[#0D6EFD] hover:underline cursor-pointer"
                  >
                    ✕ Back to Vehicle
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {products.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => { handleSelectProduct(i); setActiveTab('OVERVIEW'); }}
                      className="bg-white p-1 rounded-xl border border-slate-200 hover:border-[#0D6EFD] transition-all hover:scale-105 cursor-pointer"
                    >
                      <img src={p.image} alt={p.title} className="w-full h-16 object-contain" />
                      <span className="text-[9px] font-bold text-slate-600 block text-center truncate mt-1">{p.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Controls Row: Showroom Models Strip + Sub-Navigation Tabs */}
          <div className="space-y-1.5 pt-1 relative z-20">
            
            {/* Showroom Models Strip */}
            <div className="flex items-center justify-center sm:justify-start gap-1.5 overflow-x-auto py-0.5">
              <button 
                onClick={handlePrevProduct}
                className="w-6 h-6 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0 cursor-pointer shadow-2xs"
                aria-label="Previous view"
              >
                &larr;
              </button>

              {products.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectProduct(idx)}
                  className={`w-11 h-9 sm:w-12 sm:h-10 rounded-md overflow-hidden bg-white p-0.5 transition-all shrink-0 cursor-pointer ${
                    activeCategoryIndex === idx 
                      ? 'border-2 border-[#0D6EFD] shadow-xs scale-105 ring-1 ring-blue-100' 
                      : 'border border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                  title={p.title}
                >
                  <img src={p.image} alt={p.title} className="w-full h-full object-contain" />
                </button>
              ))}

              <button 
                onClick={handleNextProduct}
                className="w-6 h-6 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0 cursor-pointer shadow-2xs"
                aria-label="Next view"
              >
                &rarr;
              </button>
            </div>

            {/* Sub-Navigation Tabs & 01/04 Pager */}
            <div className="pt-1.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-3 sm:gap-5 uppercase tracking-wider text-[10px] sm:text-[11px]">
                {(['OVERVIEW', 'GALLERY', 'FEATURES', 'SPECIFICATIONS', 'COMPARE'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-0.5 relative transition-colors cursor-pointer ${
                      activeTab === tab ? 'text-slate-950 font-extrabold' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#0D6EFD]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-slate-500">
                <span className="font-mono text-xs font-extrabold text-slate-950">
                  0{activeCategoryIndex + 1} / 0{products.length}
                </span>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={handlePrevProduct}
                    className="w-5 h-5 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-100 text-[10px] text-slate-800 cursor-pointer shadow-2xs"
                    aria-label="Previous product"
                  >
                    &larr;
                  </button>
                  <button 
                    onClick={handleNextProduct}
                    className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-slate-800 text-[10px] cursor-pointer shadow-2xs"
                    aria-label="Next product"
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3. Right Black Column: "OUR VEHICLES" (Connects directly underneath the black top header, EXACT same width!) */}
        <div className="w-full lg:w-[320px] xl:w-[350px] 2xl:w-[380px] bg-[#0B111A] text-white p-3 sm:p-4 lg:p-4 flex flex-col justify-between shrink-0">
          
          <div>
            {/* Mobile-Only Header on small screen (< lg) */}
            <div className="lg:hidden flex items-center justify-between pb-3 border-b border-slate-800 mb-2">
              <span className="text-xs font-bold tracking-widest text-slate-200 uppercase font-display">
                OUR VEHICLES
              </span>
              <a
                href="#vehicles"
                className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                VIEW ALL &rarr;
              </a>
            </div>

            {/* Real Showroom Vehicle Items in Right Column (All 9 Real Models) */}
            <div className="max-h-[380px] sm:max-h-[440px] overflow-y-auto space-y-1.5 pr-1 divide-y divide-slate-800/70">
              {products.map((p, idx) => {
                const isSelected = activeCategoryIndex === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelectProduct(idx)}
                    className={`w-full text-left py-2.5 sm:py-3 flex items-center justify-between gap-3 group px-2 rounded-xl transition-all cursor-pointer ${
                      isSelected ? 'bg-white/10 ring-1 ring-[#0D6EFD]' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="w-12 h-10 sm:w-14 sm:h-11 bg-white/5 rounded-lg p-1 flex items-center justify-center shrink-0">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                        {p.categoryLabel}
                      </span>
                      <h4 className="font-bold text-white text-xs sm:text-sm truncate group-hover:text-[#FFC107] transition-colors">
                        {p.title}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] text-[#FFC107] font-bold">
                          {p.price}
                        </span>
                        {p.prevPrice && (
                          <span className="text-[9px] text-slate-400 line-through">
                            {p.prevPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center text-xs shrink-0 transition-colors ${
                      isSelected 
                        ? 'border-[#FFC107] text-[#FFC107] bg-[#FFC107]/10' 
                        : 'border-slate-700 text-slate-400 group-hover:border-[#FFC107] group-hover:text-[#FFC107]'
                    }`}>
                      &rarr;
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Micro Support Line */}
          <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
            <span>Showroom Mtwapa</span>
            <a 
              href={`https://wa.me/${DEALERSHIP_WHATSAPP}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#FFC107] hover:underline font-bold"
            >
              Instant WhatsApp &rarr;
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

