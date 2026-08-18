import React, { useState } from 'react';
import type { PageRoute } from '../types';
import { Calculator, ArrowRight, Info } from 'lucide-react';
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

  // Calculation formulas (100% transparent and input-driven)
  const totalWeeklyManualHours = teamSize * manualHoursPerWeek;
  const annualManualHours = totalWeeklyManualHours * 50; // 50 working weeks per year
  const annualHoursSaved = Math.round(annualManualHours * currentInd.efficiencyGain);
  const annualFinancialSavings = Math.round(annualHoursSaved * hourlyRateNgn);

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#050b18] to-[#030712] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>OPERATIONAL IMPACT ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            ESTIMATED <span className="gold-gradient-text">AUTOMATION PROJECTIONS</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Calculate estimated operational hours reclaimed and cost reallocation potential by automating repetitive data entry and routing toil.
          </p>

          <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs font-mono text-amber-300/90 max-w-3xl text-left">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{COMPANY_CONFIG.disclaimers.roiCalculator}</span>
          </div>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/90 border border-amber-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Form (Left Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Industry Selector */}
            <div>
              <label htmlFor="roi-industry-select" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2">
                1. Select Industry Sector
              </label>
              <select
                id="roi-industry-select"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:border-amber-400 focus:outline-none cursor-pointer"
              >
                <option value="hospitality">Hotel & Hospitality Operations</option>
                <option value="healthcare">Hospitals & Healthcare Clinics</option>
                <option value="education">Schools & Educational Academies</option>
                <option value="retail">Retail Stores & Departmental Chains</option>
                <option value="enterprise">Corporate & Enterprise Logistics</option>
                <option value="custom">Custom Proprietary Workflows</option>
              </select>
            </div>

            {/* Slider 1: Team Size */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="roi-team-size" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  2. Operations & Admin Team Size
                </label>
                <span className="text-sm font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                  {teamSize} Staff Members
                </span>
              </div>
              <input
                id="roi-team-size"
                type="range"
                min="5"
                max="250"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>5 staff</span>
                <span>125 staff</span>
                <span>250+ staff</span>
              </div>
            </div>

            {/* Slider 2: Weekly Manual Hours */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="roi-manual-hours" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  3. Weekly Repetitive Hours / Person
                </label>
                <span className="text-sm font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                  {manualHoursPerWeek} Hours / Week
                </span>
              </div>
              <input
                id="roi-manual-hours"
                type="range"
                min="4"
                max="30"
                step="1"
                value={manualHoursPerWeek}
                onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>4 hrs (Light admin)</span>
                <span>16 hrs (Moderate)</span>
                <span>30 hrs (High manual toil)</span>
              </div>
            </div>

            {/* Slider 3: Hourly Cost */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="roi-hourly-rate" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  4. Average Hourly Burden Cost (₦ NGN)
                </label>
                <span className="text-sm font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                  {formatNaira(hourlyRateNgn)} / Hr
                </span>
              </div>
              <input
                id="roi-hourly-rate"
                type="range"
                min="1500"
                max="12000"
                step="500"
                value={hourlyRateNgn}
                onChange={(e) => setHourlyRateNgn(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>₦1,500/hr</span>
                <span>₦6,000/hr</span>
                <span>₦12,000+/hr</span>
              </div>
            </div>

          </div>

          {/* Results Summary Box (Right Col 5) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-slate-950 to-blue-950/80 border border-amber-500/40 p-6 sm:p-7 shadow-2xl flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  ESTIMATED PROJECTIONS
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  ANNUAL BASIS
                </span>
              </div>

              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  Estimated Annual Hours Recovered
                </span>
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                  {annualHoursSaved.toLocaleString()} <span className="text-amber-400 text-lg font-mono font-normal">Hrs/Year</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 mt-1 block">
                  ≈ {Math.round(annualHoursSaved / 8)} full business days saved
                </span>
              </div>

              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  Estimated Operational Cost Impact
                </span>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold gold-gradient-text">
                  {formatNaira(annualFinancialSavings)}
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                  Reallocatable operational capacity per year
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 mb-6 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">
                    Estimated Workflow Acceleration
                  </span>
                  <span className="text-xs font-bold text-white">
                    {currentInd.label}
                  </span>
                </div>
                <span className="text-xl font-heading font-extrabold text-amber-400">
                  {currentInd.turnaroundFactor} Faster
                </span>
              </div>
            </div>

            <button
              onClick={() => onRouteChange('schedule-demo')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>AUDIT YOUR BUSINESS WORKFLOWS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
