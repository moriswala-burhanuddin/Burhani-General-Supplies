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

  // 4 Genuine Commercial Vehicles with Transparent PNG Cutouts!
  const products: ProductData[] = [
    {
      id: 'atul-rik',
      categoryCode: '01',
      categoryLabel: 'TUK-TUKS',
      titleLine1: 'ATUL Rik',
      titleLine2: 'Petrol Tuk-Tuk',
      title: 'ATUL Rik Petrol Tuk-Tuk',
      subtitle: 'A reliable and practical choice for everyday mobility and business needs in Mtwapa.',
      prevPrice: 'KES 425,500',
      price: 'KES 390,000',
      badge: 'OFFER',
      backdropWord: 'RIDE',
      image: '/images/atul-rik-Photoroom.png',
      scriptText: 'Built\nfor a moving\nMtwapa',
      bullets: [
        {
          icon: 'target',
          text: 'Ideal for passenger transport'
        },
        {
          icon: 'shield',
          text: 'Reliable and practical'
        },
        {
          icon: 'briefcase',
          text: 'Suitable for business use'
        },
        {
          icon: 'info',
          text: <>Ask <strong className="text-slate-900 font-bold">about available options</strong></>
        }
      ],
      hotspots: [
        {
          id: 'canopy',
          top: '24%',
          left: '42%',
          title: 'Reinforced Weather Canopy',
          desc: 'Coastal-grade waterproof passenger roof with roll-down weather shields.'
        },
        {
          id: 'cabin',
          top: '46%',
          left: '52%',
          title: 'Comfort 3-Passenger Cabin',
          desc: 'Ergonomic high-density foam seating with heavy-duty grab handles.'
        },
        {
          id: 'engine',
          top: '56%',
          left: '36%',
          title: 'High-Torque Atul Engine & Fork',
          desc: 'Fuel-efficient 200cc 4-stroke engine with heavy-duty front suspension.'
        }
      ],
      thumbnails: [
        { id: 0, img: '/images/atul-rik-Photoroom.png', label: '3/4 Front View' },
        { id: 1, img: '/images/atul-gem-paxx-Photoroom.png', label: 'Side Profile' },
        { id: 2, img: '/images/cargo-tuktuk-Photoroom.png', label: 'Cargo Carrier' },
        { id: 3, img: '/images/atul-rik-Photoroom.png', label: 'Front Direct' },
        { id: 4, img: '/images/atul-gem-paxx-Photoroom.png', label: 'Cabin Interior' }
      ],
      specs: {
        'Engine Type': 'Single Cylinder 4-Stroke Petrol',
        'Displacement': '198.6 cc',
        'Transmission': '4 Forward + 1 Reverse',
        'Seating Capacity': 'Driver + 3 Passengers',
        'Fuel Tank': '7.5 Litres (Coastal Economy)',
        'Daily Repayment': 'From KES 750/day via Mogo'
      },
      features: [
        'High passenger safety cage built with high-tensile steel',
        'Excellent coastal fuel economy (~25-28 km/L in city transit)',
        'Readily available OEM spare parts at Mtwapa showroom',
        'Low maintenance schedule with authorized dealer service'
      ]
    },
    {
      id: 'kenbo-150',
      categoryCode: '02',
      categoryLabel: 'MOTORCYCLES',
      titleLine1: 'KENBO 150cc',
      titleLine2: 'Commuter Bike',
      title: 'KENBO 150cc Commuter Motorcycle',
      subtitle: 'Engineered for tough coastal terrain, high fuel economy, and dependable daily boda boda transit.',
      prevPrice: 'KES 165,000',
      price: 'KES 145,000',
      badge: 'OFFER',
      backdropWord: 'RIDE',
      image: '/images/kenbo-commuter-Photoroom.png',
      scriptText: 'Power\nfor every mile\nin Mtwapa',
      bullets: [
        {
          icon: 'target',
          text: '150cc fuel-efficient 4-stroke engine'
        },
        {
          icon: 'shield',
          text: 'Over 60 km/L fuel economy'
        },
        {
          icon: 'briefcase',
          text: 'Dual rear shocks for heavy cargo'
        },
        {
          icon: 'info',
          text: <>Ask <strong className="text-slate-900 font-bold">about boda boda financing</strong></>
        }
      ],
      hotspots: [
        {
          id: 'tank',
          top: '28%',
          left: '42%',
          title: '12L Long-Range Fuel Tank',
          desc: 'Covers over 700km on a single full tank across coastal transit routes.'
        },
        {
          id: 'engine',
          top: '52%',
          left: '46%',
          title: '150cc Air-Cooled Engine',
          desc: 'High-torque commuter engine designed for continuous tropical operation.'
        },
        {
          id: 'carrier',
          top: '36%',
          left: '65%',
          title: 'Reinforced Luggage Rack',
          desc: 'Heavy-duty rear steel rack suitable for cargo delivery and dual passenger luggage.'
        }
      ],
      thumbnails: [
        { id: 0, img: '/images/kenbo-commuter-Photoroom.png', label: '150cc Commuter' },
        { id: 1, img: '/images/delivery-motorcycle-Photoroom.png', label: 'Commercial 125cc' },
        { id: 2, img: '/images/kenbo-commuter-Photoroom.png', label: 'Side Angle' },
        { id: 3, img: '/images/delivery-motorcycle-Photoroom.png', label: 'Cargo Rack' },
        { id: 4, img: '/images/kenbo-commuter-Photoroom.png', label: 'Engine Bay' }
      ],
      specs: {
        'Engine': '149cc, 4-Stroke Air-Cooled',
        'Transmission': '5-Speed Constant Mesh',
        'Fuel Consumption': '~62 km/L',
        'Braking': 'Front Disc, Rear Drum',
        'Daily Repayment': 'From KES 300/day via Mogo'
      },
      features: [
        'Rugged steel diamond frame for coastal road conditions',
        'Bright halogen headlight for night passenger runs',
        'Affordable maintenance and genuine parts in Mtwapa counter',
        '1-Year dealer engine warranty'
      ]
    },
    {
      id: 'cargo-tuktuk',
      categoryCode: '03',
      categoryLabel: 'CARGO TUK-TUKS',
      titleLine1: 'ATUL Cargo',
      titleLine2: 'Flatbed Carrier',
      title: 'ATUL Cargo Flatbed Pickup Tuk-Tuk',
      subtitle: 'Heavy-duty commercial cargo flatbed designed for building materials, hardware, and retail distribution across Mtwapa.',
      prevPrice: 'KES 440,000',
      price: 'KES 410,000',
      badge: 'OFFER',
      backdropWord: 'RIDE',
      image: '/images/cargo-tuktuk-Photoroom.png',
      scriptText: 'Heavy loads\nmaximum profit\nin Mtwapa',
      bullets: [
        {
          icon: 'target',
          text: '500kg heavy-duty payload capacity'
        },
        {
          icon: 'shield',
          text: 'Reinforced dual leaf-spring rear suspension'
        },
        {
          icon: 'briefcase',
          text: 'Drop-down steel cargo tailgate gates'
        },
        {
          icon: 'info',
          text: <>Ask <strong className="text-slate-900 font-bold">about commercial cargo loans</strong></>
        }
      ],
      hotspots: [
        {
          id: 'bed',
          top: '36%',
          left: '58%',
          title: 'Extended Heavy-Duty Cargo Bed',
          desc: 'Spacious all-steel corrugated flatbed with high payload tie-down rails.'
        },
        {
          id: 'springs',
          top: '58%',
          left: '52%',
          title: 'Dual Semi-Elliptic Leaf Springs',
          desc: 'Engineered for sand, cement bags, timber, and rough coastal tracks.'
        },
        {
          id: 'engine-cargo',
          top: '52%',
          left: '36%',
          title: 'High-Torque Cargo Differential',
          desc: 'Low-ratio commercial gearbox for powerful uphill climbing under load.'
        }
      ],
      thumbnails: [
        { id: 0, img: '/images/cargo-tuktuk-Photoroom.png', label: 'Cargo Flatbed 3/4' },
        { id: 1, img: '/images/atul-rik-Photoroom.png', label: 'Passenger Variant' },
        { id: 2, img: '/images/atul-gem-paxx-Photoroom.png', label: 'GEM PAXX Body' },
        { id: 3, img: '/images/cargo-tuktuk-Photoroom.png', label: 'Rear Cargo View' },
        { id: 4, img: '/images/delivery-motorcycle-Photoroom.png', label: 'Delivery Motorcycle' }
      ],
      specs: {
        'Engine': '198.6cc, 4-Stroke High Torque',
        'Payload': '500 KG Commercial Rated',
        'Cargo Bed': 'All-Steel Drop-Side Tray',
        'Transmission': '4 Forward + 1 Reverse Heavy Ratio',
        'Daily Repayment': 'From KES 800/day via Mogo'
      },
      features: [
        'Dedicated flatbed designed specifically for commercial retail and logistics',
        'Reinforced ladder-type steel frame chassis for extreme payloads',
        'Low fuel operating cost delivering fast return on investment',
        'Immediate availability and full spare parts backup in Mtwapa'
      ]
    },
    {
      id: 'atul-gem',
      categoryCode: '04',
      categoryLabel: 'OFFERS',
      titleLine1: 'ATUL GEM',
      titleLine2: 'Diesel Tuk-Tuk',
      title: 'ATUL GEM Diesel Tuk-Tuk',
      subtitle: 'Deals Moto Moto! Heavy-duty Atul GEM Diesel Tuk-Tuk. Was KES 525,500, now KES 485,000 PLUS Free Logbook Transfer included in Mtwapa.',
      prevPrice: 'KES 525,500',
      price: 'KES 485,000',
      badge: 'PLUS LOGBOOK',
      backdropWord: 'RIDE',
      image: '/images/atul-gem-paxx-Photoroom.png',
      scriptText: 'Maximum profit\nevery trip\nin Kilifi',
      bullets: [
        {
          icon: 'target',
          text: 'Plus FREE Logbook Transfer included'
        },
        {
          icon: 'shield',
          text: 'Heavy-duty coastal suspension package'
        },
        {
          icon: 'briefcase',
          text: 'Includes 3 free dealer service vouchers'
        },
        {
          icon: 'info',
          text: <>Ask <strong className="text-slate-900 font-bold">about Mogo daily repayment</strong></>
        }
      ],
      hotspots: [
        {
          id: 'monocoque',
          top: '24%',
          left: '45%',
          title: 'High-Strength Steel Body',
          desc: 'All-metal monocoque structure offering superior durability on unpaved roads.'
        },
        {
          id: 'cabin-paxx',
          top: '46%',
          left: '55%',
          title: 'Extended Passenger Cabin',
          desc: 'Generous headroom and legroom with wide passenger boarding doors.'
        },
        {
          id: 'fork',
          top: '58%',
          left: '38%',
          title: 'Heavy-Duty Trailing Arm Suspension',
          desc: 'Smooth ride over speed bumps and sandy coastal routes.'
        }
      ],
      thumbnails: [
        { id: 0, img: '/images/atul-gem-paxx-Photoroom.png', label: 'GEM PAXX Front' },
        { id: 1, img: '/images/atul-rik-Photoroom.png', label: 'Rik Tuk-Tuk' },
        { id: 2, img: '/images/cargo-tuktuk-Photoroom.png', label: 'Cargo Pickup' },
        { id: 3, img: '/images/atul-gem-paxx-Photoroom.png', label: 'Side Profile' },
        { id: 4, img: '/images/atul-rik-Photoroom.png', label: 'Passenger Seating' }
      ],
      specs: {
        'Engine': '198.6cc, 4-Stroke High Torque',
        'Payload': 'Heavy Commercial Rated',
        'Passenger Capacity': 'Driver + 3-4 Passengers',
        'Fuel Tank': '7.5 Litres',
        'Daily Repayment': 'From KES 850/day via Mogo'
      },
      features: [
        'Highest passenger capacity rating in the Atul commercial line',
        'Heavy-duty differential built for long continuous operational hours',
        'Low fuel operating cost with fast return on vehicle investment',
        'Official registration assistance in Mtwapa and Kilifi County'
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
                <div className="grid grid-cols-5 gap-2">
                  {currentProduct.thumbnails.map((t, i) => (
                    <button
                      key={t.id}
                      onClick={() => { setActiveThumbIndex(i); setActiveTab('OVERVIEW'); }}
                      className="bg-white p-1 rounded-xl border border-slate-200 hover:border-[#0D6EFD] transition-all hover:scale-105 cursor-pointer"
                    >
                      <img src={t.img} alt={t.label} className="w-full h-16 object-contain" />
                      <span className="text-[9px] font-bold text-slate-600 block text-center truncate mt-1">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Controls Row: 5 Thumbnails + Sub-Navigation Tabs */}
          <div className="space-y-1.5 pt-1 relative z-20">
            
            {/* 5 Thumbnails Slider */}
            <div className="flex items-center justify-center sm:justify-start gap-1.5 overflow-x-auto py-0.5">
              <button 
                onClick={() => setActiveThumbIndex((prev) => (prev - 1 + currentProduct.thumbnails.length) % currentProduct.thumbnails.length)}
                className="w-6 h-6 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0 cursor-pointer shadow-2xs"
                aria-label="Previous view"
              >
                &larr;
              </button>

              {currentProduct.thumbnails.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveThumbIndex(idx)}
                  className={`w-11 h-9 sm:w-12 sm:h-10 rounded-md overflow-hidden bg-white p-0.5 transition-all shrink-0 cursor-pointer ${
                    activeThumbIndex === idx 
                      ? 'border-2 border-[#0D6EFD] shadow-xs scale-105 ring-1 ring-blue-100' 
                      : 'border border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={t.img} alt={t.label} className="w-full h-full object-contain" />
                </button>
              ))}

              <button 
                onClick={() => setActiveThumbIndex((prev) => (prev + 1) % currentProduct.thumbnails.length)}
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

            {/* 4 Stacked Interactive Vehicle Items (ALL REAL VEHICLES!) */}
            <div className="divide-y divide-slate-800/70">
              
              {/* 1. ATUL GEM PAXX */}
              <button
                onClick={() => handleSelectProduct(3)}
                className={`w-full text-left py-2.5 sm:py-3 flex items-center justify-between gap-3 group px-2 rounded-xl transition-all cursor-pointer ${
                  activeCategoryIndex === 3 ? 'bg-white/10 ring-1 ring-blue-500' : 'hover:bg-white/5'
                }`}
              >
                <div className="w-12 h-10 sm:w-14 sm:h-11 bg-white/5 rounded-lg p-0.5 flex items-center justify-center shrink-0">
                  <img 
                    src="/images/atul-gem-paxx-Photoroom.png" 
                    alt="Atul GEM PAXX" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                    TUK-TUK
                  </span>
                  <h4 className="font-bold text-white text-xs sm:text-sm truncate group-hover:text-[#FFC107] transition-colors">
                    ATUL GEM Diesel
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[11px] text-[#FFC107] font-bold">
                      KES 485,000
                    </span>
                    <span className="text-[9px] text-slate-400 line-through">
                      525,500
                    </span>
                  </div>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-slate-700 text-slate-400 group-hover:border-[#FFC107] group-hover:text-[#FFC107] flex items-center justify-center text-xs shrink-0 transition-colors">
                  &rarr;
                </div>
              </button>

              {/* 2. KENBO 150cc */}
              <button
                onClick={() => handleSelectProduct(1)}
                className={`w-full text-left py-2.5 sm:py-3 flex items-center justify-between gap-3 group px-2 rounded-xl transition-all cursor-pointer ${
                  activeCategoryIndex === 1 ? 'bg-white/10 ring-1 ring-blue-500' : 'hover:bg-white/5'
                }`}
              >
                <div className="w-12 h-10 sm:w-14 sm:h-11 bg-white/5 rounded-lg p-0.5 flex items-center justify-center shrink-0">
                  <img 
                    src="/images/kenbo-commuter-Photoroom.png" 
                    alt="KENBO 150cc Motorcycle" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                    MOTORCYCLE
                  </span>
                  <h4 className="font-bold text-white text-xs sm:text-sm truncate group-hover:text-[#FFC107] transition-colors">
                    KENBO 150cc
                  </h4>
                  <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                    Request a Quote
                  </span>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-slate-700 text-slate-400 group-hover:border-[#FFC107] group-hover:text-[#FFC107] flex items-center justify-center text-xs shrink-0 transition-colors">
                  &rarr;
                </div>
              </button>

              {/* 3. ATUL Rik Tuk-Tuk */}
              <button
                onClick={() => handleSelectProduct(0)}
                className={`w-full text-left py-2.5 sm:py-3 flex items-center justify-between gap-3 group px-2 rounded-xl transition-all cursor-pointer ${
                  activeCategoryIndex === 0 ? 'bg-white/10 ring-1 ring-blue-500' : 'hover:bg-white/5'
                }`}
              >
                <div className="w-12 h-10 sm:w-14 sm:h-11 bg-white/5 rounded-lg p-0.5 flex items-center justify-center shrink-0">
                  <img 
                    src="/images/atul-rik-Photoroom.png" 
                    alt="ATUL Rik Petrol Tuk-Tuk" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                    TUK-TUK
                  </span>
                  <h4 className="font-bold text-white text-xs sm:text-sm truncate group-hover:text-[#FFC107] transition-colors">
                    ATUL Rik Tuk-Tuk
                  </h4>
                  <span className="text-[11px] text-slate-300 font-semibold block mt-0.5">
                    KES 390,000
                  </span>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-slate-700 text-slate-400 group-hover:border-[#FFC107] group-hover:text-[#FFC107] flex items-center justify-center text-xs shrink-0 transition-colors">
                  &rarr;
                </div>
              </button>

              {/* 4. ATUL Cargo Flatbed (Clean replacement for parts!) */}
              <button
                onClick={() => handleSelectProduct(2)}
                className={`w-full text-left py-2.5 sm:py-3 flex items-center justify-between gap-3 group px-2 rounded-xl transition-all cursor-pointer ${
                  activeCategoryIndex === 2 ? 'bg-white/10 ring-1 ring-blue-500' : 'hover:bg-white/5'
                }`}
              >
                <div className="w-12 h-10 sm:w-14 sm:h-11 bg-white/5 rounded-lg p-0.5 flex items-center justify-center shrink-0">
                  <img 
                    src="/images/cargo-tuktuk-Photoroom.png" 
                    alt="ATUL Cargo Flatbed" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                    CARGO TUK-TUK
                  </span>
                  <h4 className="font-bold text-white text-xs sm:text-sm truncate group-hover:text-[#FFC107] transition-colors">
                    ATUL Cargo Flatbed
                  </h4>
                  <span className="text-[11px] text-slate-300 font-semibold block mt-0.5">
                    KES 410,000
                  </span>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-slate-700 text-slate-400 group-hover:border-[#FFC107] group-hover:text-[#FFC107] flex items-center justify-center text-xs shrink-0 transition-colors">
                  &rarr;
                </div>
              </button>

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

