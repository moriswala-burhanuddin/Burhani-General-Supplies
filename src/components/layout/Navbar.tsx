import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenEnquiryModal?: (vehicleName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiryModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Motorcycles', path: '/vehicles?category=motorcycle' },
    { name: 'Tuk-Tuks', path: '/vehicles?category=tuk-tuk' },
    { name: 'Spare Parts', path: '/spare-parts' },
    { name: 'Financing', path: '/financing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && (location.pathname === path || (path.includes('?') && location.search.includes(path.split('?')[1])))) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-white border-b border-slate-200">
      
      {/* Homepage Split Header: Left White + Right Black (Beside Navbar, continuous to top) */}
      {isHomePage ? (
        <div className="w-full h-full flex items-stretch">
          
          {/* Left White Section */}
          <div className="flex-1 bg-white border-r border-slate-200 flex items-center justify-between px-3 sm:px-6 min-w-0">
            
            {/* Logo & Brand Identity */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 shadow-xs">
                <img 
                  src="/logo-badge.png" 
                  alt="Burhani General Supplies B-G Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base text-slate-950 tracking-tight leading-none font-display">
                  BURHANI
                </span>
                <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase">
                  GENERAL SUPPLIES
                </span>
                <span className="text-[8px] font-semibold text-[#168ACB] tracking-wider uppercase">
                  KENBO MTWAPA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (with whitespace-nowrap so words NEVER wrap!) */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-xs font-semibold text-slate-700 shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-1 flex flex-col items-center transition-colors whitespace-nowrap cursor-pointer ${
                    isActive(link.path)
                      ? 'text-slate-950 font-extrabold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive(link.path) ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D6EFD] mt-0.5" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-0.5" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Action: Search Icon & Yellow Enquire Button */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Link
                to="/vehicles"
                className="p-1.5 text-slate-600 hover:text-slate-950 transition-colors"
                title="Search inventory"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>

              <button
                onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : window.location.href = '/contact'}
                className="bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-bold text-xs py-2 px-4 rounded-full inline-flex items-center gap-1.5 shadow-xs transition-transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>Enquire Now</span>
                <span className="text-sm font-bold">&rarr;</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : null}
                className="bg-[#FFC107] text-slate-950 font-bold text-xs py-1.5 px-3 rounded-full"
              >
                Enquire
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>

          {/* Right Black Header Section (Starts at top beside navbar, exactly matching right panel width) */}
          <div className="hidden lg:flex w-[320px] xl:w-[350px] 2xl:w-[380px] bg-[#0B111A] text-white items-center justify-between px-6 shrink-0 border-b border-slate-800/80">
            <span className="text-xs font-bold tracking-widest text-slate-200 uppercase font-display">
              OUR VEHICLES
            </span>
            <span className="h-px w-10 bg-slate-700" />
            <Link
              to="/vehicles"
              className="text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1 group whitespace-nowrap"
            >
              <span>VIEW ALL</span>
              <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </Link>
          </div>

        </div>
      ) : (
        /* Standard Full-Width White Navbar for other pages */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 shadow-xs">
              <img 
                src="/logo-badge.png" 
                alt="Burhani General Supplies B-G Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-slate-950 tracking-tight leading-none font-display">
                BURHANI
              </span>
              <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                GENERAL SUPPLIES
              </span>
              <span className="text-[9px] font-semibold text-[#168ACB] tracking-wider uppercase">
                KENBO MTWAPA
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-1 flex flex-col items-center transition-colors whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-slate-950 font-extrabold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>{link.name}</span>
                {isActive(link.path) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D6EFD] mt-0.5" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/vehicles"
              className="p-1.5 text-slate-600 hover:text-slate-950 transition-colors"
              title="Search inventory"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>

            <button
              onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : window.location.href = '/contact'}
              className="bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-bold text-xs py-2 px-4 rounded-full inline-flex items-center gap-1.5 shadow-xs transition-transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Enquire Now</span>
              <span className="text-sm font-bold">&rarr;</span>
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : null}
              className="bg-[#FFC107] text-slate-950 font-bold text-xs py-1.5 px-3 rounded-full"
            >
              Enquire
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-semibold ${
                isActive(link.path) ? 'text-blue-600 font-bold' : 'text-slate-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
