import React from 'react';
import { LoanCalculator } from '../components/financing/LoanCalculator';
import { buildWhatsAppLink, DEALERSHIP_PHONE } from '../utils/whatsapp';

export const FinancingPage: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Vehicle & Plan Selection',
      desc: 'Choose your desired Atul Tuk-Tuk or KENBO motorcycle from our showroom and estimate your comfortable deposit and daily repayment.'
    },
    {
      step: '02',
      title: 'Documentation Review',
      desc: 'Submit your Kenyan National ID, KRA PIN, and 6 months of M-Pesa statements for fast eligibility verification in Mtwapa.'
    },
    {
      step: '03',
      title: 'Deposit & Handover',
      desc: 'Upon approval by our financing partner (e.g. Mogo Finance), pay your initial deposit and drive away with your registered vehicle, warranty, and free servicing.'
    }
  ];

  const requirements = [
    'Original Kenyan National Identity Card (ID)',
    'Active KRA PIN Certificate',
    '6 Months M-Pesa statement or Bank statement showing regular income',
    'Two reliable personal guarantors or Next-of-Kin contacts',
    'Down payment / Deposit starting from ~20% of vehicle price',
    'Proof of coastal residency or business operations (Mtwapa, Mombasa, Kilifi)'
  ];

  const faqs = [
    {
      q: 'How do daily repayment plans work for tuk-tuks?',
      a: 'Through financing partners like Mogo Finance, transport operators can pay daily installments (e.g. from KES 750 – 850/day) directly via M-Pesa Paybill from their daily passenger fares.'
    },
    {
      q: 'Can boda-boda operators with cash income qualify?',
      a: 'Yes. Financing partners evaluate M-Pesa statement transaction velocity, making it accessible even for self-employed riders and transport operators without formal payslips.'
    },
    {
      q: 'What is included in the vehicle handover package?',
      a: 'Vehicles financed through authorized dealership promotions include 1 Year / 20,000 KM warranty, complimentary cables/tyre sets, fire extinguisher, initial servicing, and official registration assistance.'
    }
  ];

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Financing Hero Banner matching Hero Visual Language */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl text-white">
          
          {/* Monumental Electric Blue Watermark Typography */}
          <div className="absolute -right-6 -bottom-10 pointer-events-none select-none opacity-20 hidden md:block">
            <span className="text-[120px] lg:text-[160px] font-display font-black tracking-widest text-[#0055D4]">
              FINANCE
            </span>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0055D4]/30 border border-blue-400/40 text-xs font-black tracking-wider text-blue-200 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
              OFFICIAL MOGO &amp; DEALERSHIP FINANCING PARTNER
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight">
              Drive Today. Pay in <br />
              <span className="text-[#FFC107]">Flexible Daily Installments.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              We collaborate with premier vehicle asset financiers including <strong>Mogo Finance</strong> to help entrepreneurs, saccos, and boda-boda operators acquire brand new tuk-tuks and motorbikes with realistic deposits and daily payments.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold">
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
                <span className="text-[#FFC107]">✓</span> Tuk-Tuks from KES 750/Day
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
                <span className="text-[#FFC107]">✓</span> Motorbikes from KES 300/Day
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
                <span className="text-[#FFC107]">✓</span> 1-Day Pre-Approval via WhatsApp
              </span>
            </div>
          </div>
        </div>

        {/* Section: Interactive Calculator */}
        <div>
          <div className="mb-6">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0D6EFD] block">
              STEP 1: ESTIMATE PAYMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 mt-0.5">
              Financing Estimation Tool
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Adjust vehicle model, deposit, and repayment tenure to preview daily cash flow requirements.
            </p>
          </div>

          <LoanCalculator />
        </div>

        {/* Section: 3-Step Process */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-2xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0D6EFD] block">
              TRANSPARENT WALKTHROUGH
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 mt-0.5">
              How to Enquire & Apply
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Simple 3-step walkthrough to get your tuk-tuk or motorbike on the road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black text-[#0D6EFD] font-mono mb-2">
                    {st.step}
                  </div>
                  <h3 className="text-base font-display font-extrabold text-slate-950 mb-1.5">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Required Documents & Application Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Checklist (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
            <div>
              <span className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider block">
                CHECKLIST
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-950 mt-0.5">
                Documentation Required
              </h3>
              <p className="text-xs text-slate-500 font-medium">Prepare these when visiting the Mtwapa showroom</p>
            </div>

            <div className="space-y-3">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-[#0D6EFD] mt-1.5 shrink-0" />
                  <span className="font-semibold leading-relaxed">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Consultation CTA (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B111A] text-white p-8 rounded-3xl shadow-xl space-y-6 border border-slate-800">
            <div>
              <span className="text-[10px] font-extrabold text-[#FFC107] uppercase tracking-wider block">
                MTWAPA FINANCING DESK
              </span>
              <h3 className="text-xl font-display font-extrabold text-white mt-1">
                Speak to our Financing Advisor
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-medium">
                Need guidance on deposit structuring, M-Pesa statement formatting, or guarantor criteria? Our Mtwapa financing desk is ready to assist.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={buildWhatsAppLink("Hello Burhani General Supplies, I would like to schedule a financing consultation for an Atul Tuk-Tuk.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
              >
                <span>WhatsApp Financing Desk</span>
                <span>&rarr;</span>
              </a>

              <a
                href={`tel:${DEALERSHIP_PHONE.replace(/\s+/g, '')}`}
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 border border-white/15"
              >
                <span>Call Showroom: {DEALERSHIP_PHONE}</span>
              </a>
            </div>

            <p className="text-[10px] text-slate-400 text-center font-medium">
              Available Monday to Saturday during regular showroom hours in Mtwapa.
            </p>
          </div>

        </div>

        {/* FAQs */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
          <div>
            <span className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider block">
              QUESTIONS & ANSWERS
            </span>
            <h3 className="text-xl font-display font-extrabold text-slate-950 mt-0.5">
              Frequently Asked Financing Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h4 className="text-xs font-bold text-slate-950 leading-snug">{faq.q}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Legal Disclaimer Banner */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
          <strong className="block text-amber-950 font-bold mb-1">Important Financing Notice & Disclaimer:</strong>
          Financing availability, eligibility, deposit requirements and repayment terms are subject to confirmation by the dealership and the relevant financing provider (such as Mogo Finance). All figures shown on this website are illustrative calculations and do not constitute a guaranteed credit offer or legally binding contract.
        </div>

      </div>
    </div>
  );
};
