import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { EnquiryModal } from './components/common/EnquiryModal';

import { HomePage } from './pages/HomePage';
import { VehiclesPage } from './pages/VehiclesPage';
import { VehicleDetailPage } from './pages/VehicleDetailPage';
import { FinancingPage } from './pages/FinancingPage';
import { SparePartsPage } from './pages/SparePartsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVehicle, setModalVehicle] = useState<string | undefined>();
  const [modalPart, setModalPart] = useState<string | undefined>();

  const handleOpenEnquiry = (vehicleName?: string, partName?: string) => {
    setModalVehicle(vehicleName);
    setModalPart(partName);
    setIsModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsModalOpen(false);
    setModalVehicle(undefined);
    setModalPart(undefined);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#111827]">
        {/* Sticky Main Navigation matching mockup */}
        <Navbar onOpenEnquiryModal={handleOpenEnquiry} />

        {/* Main Routed Content with pt-[68px] for fixed navbar */}
        <main className="flex-1 pt-[68px]">
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiryModal={handleOpenEnquiry} />} />
            <Route path="/vehicles" element={<VehiclesPage onOpenEnquiryModal={handleOpenEnquiry} />} />
            <Route path="/vehicles/:slug" element={<VehicleDetailPage />} />
            <Route path="/financing" element={<FinancingPage />} />
            <Route path="/spare-parts" element={<SparePartsPage onOpenEnquiryModal={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenEnquiryModal={handleOpenEnquiry} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Quick WhatsApp Drawer */}
        <FloatingWhatsApp />

        {/* Universal Dealership Enquiry Modal */}
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={handleCloseEnquiry}
          defaultVehicleName={modalVehicle}
          defaultPartName={modalPart}
        />
      </div>
    </Router>
  );
}

export default App;
