import React, { useState } from 'react';
import type { PageRoute } from '../types';
import { Calculator, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface RoiCalculatorSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onRouteChange }) => {
  const [teamSize, setTeamSize] = useState<number>(25);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(12);
  const [hourlyRateNgn, setHourlyRateNgn] = useState<number>(3500); // ₦3,500/hr
  const [selectedIndustry, setSelectedIndustry] = useState<string>('hospitality');

  // Industry efficiency factors
  const industryMultipliers: Record<string, { label: string; efficiencyGain: number; turnaroundFactor: string }> = {
    hospitality: { label: 'Hotel & Hospitality', efficiencyGain: 0.65, turnaroundFactor: '3.8x' },
    healthcare: { label: 'Hospitals & Healthcare', efficiencyGain: 0.70, turnaroundFactor: '4.2x' },
    education: { label: 'Schools & Education', efficiencyGain: 0.60, turnaroundFactor: '3.5x' },
    retail: { label: 'Retail & Stores', efficiencyGain: 0.75, turnaroundFactor: '4.5x' },
    enterprise: { label: 'Corporate & Enterprise', efficiencyGain: 0.68, turnaroundFactor: '4.0x' },
    custom: { label: 'Custom Workflows', efficiencyGain: 0.65, turnaroundFactor: '3.6x' },
  };

  const currentInd = industryMultipliers[selectedIndustry] || industryMultipliers.hospitality;

  // Calculation formulas
  const totalWeeklyManualHours = teamSize * manualHoursPerWeek;
  const annualManualHours = totalWeeklyManualHours * 50; // 50 working weeks per year
  const annualHoursSaved = Math.round(annualManualHours * currentInd.efficiencyGain);
  const annualFinancialSavings = Math.round(annualHoursSaved * hourlyRateNgn);

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>OPERATIONAL IMPACT ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
            Estimated <span className="text-blue-600">automation projections</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Calculate estimated operational hours reclaimed and cost reallocation potential by automating repetitive data entry and routing toil.
          </p>

          <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-3xl text-left">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{COMPANY_CONFIG.disclaimers.roiCalculator}</span>
          </div>
        </div>

        {/* 2-Column Calculator Container (Clean White Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 text-left space-y-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-slate-950 border-b border-slate-100 pb-3 flex items-center gap-2">
              <span>Input Your Operational Metrics</span>
            </h3>

            {/* Industry Selection */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                Industry Sector
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(industryMultipliers).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedIndustry(key)}
                    className={`px-3 py-2 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer border text-left ${
                      selectedIndustry === key
                        ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {data.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Team Size Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  Operational Team Size (Staff)
                </label>
                <span className="text-sm font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                  {teamSize} Staff Members
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>5 Staff</span>
                <span>125 Staff</span>
                <span>250+ Staff</span>
              </div>
            </div>

            {/* Manual Hours / Week */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  Manual Routine Hours Per Staff / Week
                </label>
                <span className="text-sm font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                  {manualHoursPerWeek} Hours / Week
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="30"
                step="1"
                value={manualHoursPerWeek}
                onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>4 Hours</span>
                <span>15 Hours</span>
                <span>30 Hours</span>
              </div>
            </div>

            {/* Hourly Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  Estimated Average Cost Per Staff Hour (₦)
                </label>
                <span className="text-sm font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                  {formatNaira(hourlyRateNgn)} / Hr
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="15000"
                step="500"
                value={hourlyRateNgn}
                onChange={(e) => setHourlyRateNgn(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>₦1,500</span>
                <span>₦8,000</span>
                <span>₦15,000+</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Projections (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#F5F9FF] border border-blue-200/80 p-6 sm:p-8 flex flex-col justify-between text-left shadow-sm">
            <div>
              <div className="flex items-center justify-between border-b border-blue-100 pb-3 mb-6">
                <span className="text-xs font-mono uppercase text-blue-700 font-bold">
                  Illustrative Projections
                </span>
                <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                  {currentInd.turnaroundFactor} Turnaround
                </span>
              </div>

              {/* Stat 1: Annual Hours Saved */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-4 shadow-xs">
                <span className="text-xs font-mono text-slate-500 block uppercase">
                  Estimated Annual Hours Saved
                </span>
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-950 mt-1">
                  {annualHoursSaved.toLocaleString()} <span className="text-sm font-sans font-medium text-slate-600">Hours / Year</span>
                </div>
              </div>

              {/* Stat 2: Operational Value Reclaimed */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 mb-4 shadow-xs">
                <span className="text-xs font-mono text-emerald-800 block uppercase font-bold">
                  Estimated Operational Value Reallocated
                </span>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-950 mt-1">
                  {formatNaira(annualFinancialSavings)}
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Sub-second routine data-entry automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Zero staff layoffs: focus staff on high-value operations</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-blue-100 mt-6">
              <button
                onClick={() => onRouteChange('schedule-demo')}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:scale-[1.02]"
              >
                <span>REQUEST DETAILED ROI AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
