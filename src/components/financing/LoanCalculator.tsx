import React, { useState } from 'react';
import { VEHICLES } from '../../data/products';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export const LoanCalculator: React.FC = () => {
  const financingVehicles = VEHICLES.filter((v) => v.priceKes !== null);
  const [selectedSlug, setSelectedSlug] = useState('atul-gem-paxx');
  const [tenureMonths, setTenureMonths] = useState<12 | 18 | 24>(18);

  const selectedVehicle = financingVehicles.find((v) => v.slug === selectedSlug) || financingVehicles[0];
  const vehiclePrice = selectedVehicle.priceKes || 485000;

  // Cutout map
  const cutoutMap: Record<string, string> = {
    'atul-rik-petrol': '/images/atul-rik-Photoroom.png',
    'atul-gem-paxx': '/images/atul-gem-paxx-Photoroom.png',
    'kenbo-150-commuter': '/images/kenbo-commuter-Photoroom.png',
    'delivery-cargo-125': '/images/delivery-motorcycle-Photoroom.png',
    'atul-shakti-cargo': '/images/cargo-tuktuk-Photoroom.png',
    'kenbo-cruiser-150': '/images/kenbo-commuter-Photoroom.png'
  };

  // Deposit defaults
  const defaultDeposit = selectedVehicle.slug === 'atul-gem-paxx' ? 102000 : Math.round(vehiclePrice * 0.25);
  const [depositAmount, setDepositAmount] = useState<number>(defaultDeposit);

  const minDeposit = Math.round(vehiclePrice * 0.20);
  const maxDeposit = Math.round(vehiclePrice * 0.60);

  const financedBalance = Math.max(0, vehiclePrice - depositAmount);

  // Daily repayment formula
  const factor = tenureMonths === 12 ? 0.00435 : tenureMonths === 18 ? 0.00342 : 0.00295;
  const calculatedDaily = Math.round(financedBalance * factor);
  const calculatedMonthly = Math.round(calculatedDaily * 30);

  const handleVehicleChange = (slug: string) => {
    setSelectedSlug(slug);
    const v = financingVehicles.find((item) => item.slug === slug);
    if (v && v.priceKes) {
      const newDep = v.slug === 'atul-gem-paxx' ? 102000 : Math.round(v.priceKes * 0.25);
      setDepositAmount(newDep);
    }
  };

  const getWhatsAppFinancingText = () => {
    return `Hello Burhani General Supplies (KENBO Mtwapa),\n\nI used your online financing calculator for the *${selectedVehicle.name}*:\n- Cash Price: KES ${vehiclePrice.toLocaleString()}\n- My Proposed Deposit: KES ${depositAmount.toLocaleString()}\n- Tenure: ${tenureMonths} Months\n- Estimated Daily Payment: KES ${calculatedDaily.toLocaleString()}/day\n\nPlease let me know the eligibility criteria with Mogo Finance and documents needed in Mtwapa.`;
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
      
      {/* Header */}
      <div className="bg-[#0B111A] text-white p-6 sm:p-8 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#0055D4] text-[#FFC107] flex items-center justify-center font-black text-xl shadow-xs">
              %
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0D6EFD]">
                MOGO ASSET FINANCE &amp; DEALERSHIP PARTNER
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Interactive Payment &amp; Deposit Estimator
              </h3>
            </div>
          </div>

          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFC107] border border-white/15 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
            <span>★</span>
            <span>Live Mtwapa Terms</span>
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Vehicle Selector */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2.5">
              1. Choose Vehicle Model
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {financingVehicles.map((v) => {
                const img = cutoutMap[v.id] || v.imageUrl;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => handleVehicleChange(v.slug)}
                    className={`p-3 rounded-2xl text-left border transition-all flex items-center gap-3 cursor-pointer ${
                      selectedSlug === v.slug
                        ? 'border-[#0055D4] bg-blue-50/60 ring-2 ring-blue-200 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="w-12 h-12 bg-slate-50 rounded-xl p-1 shrink-0 flex items-center justify-center">
                      <img src={img} alt={v.name} className="w-full h-full object-contain drop-shadow-xs" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-slate-950 truncate">{v.name}</div>
                      <div className="text-[11px] text-[#0055D4] font-extrabold">
                        KES {v.priceKes?.toLocaleString()}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Deposit Slider */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                2. Down Payment (Deposit)
              </label>
              <div className="text-base font-display font-black text-slate-950">
                KES {depositAmount.toLocaleString()}
                <span className="text-xs text-[#0055D4] font-bold ml-1.5">
                  ({Math.round((depositAmount / vehiclePrice) * 100)}%)
                </span>
              </div>
            </div>

            <input
              type="range"
              min={minDeposit}
              max={maxDeposit}
              step={5000}
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0055D4]"
            />

            <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-semibold">
              <span>Min 20%: KES {minDeposit.toLocaleString()}</span>
              <span>Max 60%: KES {maxDeposit.toLocaleString()}</span>
            </div>
          </div>

          {/* Loan Tenure Selector */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2.5">
              3. Select Repayment Tenure
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { months: 12, label: '12 Months', note: 'Fastest Payoff' },
                { months: 18, label: '18 Months', note: 'Most Popular' },
                { months: 24, label: '24 Months', note: 'Lowest Daily' }
              ].map((t) => (
                <button
                  key={t.months}
                  type="button"
                  onClick={() => setTenureMonths(t.months as 12 | 18 | 24)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    tenureMonths === t.months
                      ? 'border-[#0B111A] bg-[#0B111A] text-white shadow-md'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-black font-display">{t.label}</div>
                  <div className={`text-[10px] mt-0.5 font-bold ${tenureMonths === t.months ? 'text-[#FFC107]' : 'text-slate-500'}`}>
                    {t.note}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Summary Card (5 cols) */}
        <div className="lg:col-span-5 bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col justify-between space-y-6">
          
          <div>
            <div className="text-[10px] font-black uppercase tracking-wider text-[#0055D4]">
              DAILY CASH FLOW BREAKDOWN
            </div>
            <div className="mt-1 text-base font-display font-black text-slate-950">
              {selectedVehicle.name}
            </div>

            {/* Daily Highlight Card */}
            <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">
                Estimated Daily Installment
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-display font-black text-slate-950">
                  KES {calculatedDaily.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-slate-500">/ day</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium pt-1">
                Repaid seamlessly via M-Pesa Paybill from daily passenger transit fares.
              </p>
            </div>

            {/* Breakdown List */}
            <div className="mt-4 space-y-2 text-xs divide-y divide-slate-200/80">
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 font-medium">Vehicle Total Price:</span>
                <span className="font-bold text-slate-900">KES {vehiclePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 font-medium">Deposit Deducted:</span>
                <span className="font-bold text-emerald-700">- KES {depositAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 font-medium">Financed Balance:</span>
                <span className="font-bold text-slate-900">KES {financedBalance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 font-medium">Approx. Monthly Sum:</span>
                <span className="font-black text-[#0055D4]">~ KES {calculatedMonthly.toLocaleString()}/mo</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <a
              href={buildWhatsAppLink(getWhatsAppFinancingText())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#FFC107] hover:bg-[#FDB813] text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-sm transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply via Dealership WhatsApp</span>
              <span>&rarr;</span>
            </a>

            <div className="p-3 rounded-xl bg-white border border-slate-200 text-[10px] text-slate-500 leading-relaxed font-medium">
              <strong className="text-slate-800">Pre-Approval Notice:</strong> Financing eligibility, interest rate, and daily schedule are determined by Mogo Finance upon ID, KRA PIN, and M-Pesa statement review in Mtwapa.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
