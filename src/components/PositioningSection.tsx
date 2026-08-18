import React from 'react';
import type { PageRoute } from '../types';
import { 
  Clock, 
  CheckCircle2, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface PositioningSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const PositioningSection: React.FC<PositioningSectionProps> = ({ onRouteChange }) => {
  const transformationPairs = [
    {
      sector: 'Hospitality Operations',
      manualState: 'Guest calls front desk; staff writes note; calls housekeeping room by room; manual invoice entry.',
      automatedState: 'Guest sends WhatsApp message; AI validates PMS folio; dispatches task to housekeeper smartwatch; logs bill automatically.',
      timeGain: 'From 45 mins to < 90 seconds'
    },
    {
      sector: 'Healthcare Triage & Intake',
      manualState: 'Patient waits in crowded lobby; fills paper clipboard; nurse searches archive shelves for physical file.',
      automatedState: 'Patient completes digital intake; AI calculates triage urgency score; retrieves EMR; alerts doctor immediately.',
      timeGain: 'From 35 mins to zero intake wait'
    },
    {
      sector: 'Education Admissions & Fees',
      manualState: 'Parents queue at administrative hall with paper bank tellers; accountant manually reconciles bank statements.',
      automatedState: 'Online portal verifies bank transfer hash via API; OCR validates transcript; automated student profile creation.',
      timeGain: 'From 4 days to instant enrollment'
    },
    {
      sector: 'Retail Multi-Store Inventory',
      manualState: 'Store manager notices stockout on shelf; writes manual paper request; head office delays purchase order by days.',
      automatedState: 'POS register barcode scan updates cloud inventory balance; automated predictive reorder dispatches PO to supplier.',
      timeGain: 'Zero stock-outs, real-time sync'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>OPERATIONAL TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            YOUR BUSINESS HAS WORKFLOWS.<br />
            <span className="gold-gradient-text">LIBRUM MAKES THEM INTELLIGENT.</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Behind every customer interaction, medical intake, student enrollment, or vendor purchase order lies an operational workflow. When workflows are manual, your business slows down. When workflows are automated, your business scales effortlessly.
          </p>
        </div>

        {/* 4 Transformation Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {transformationPairs.map((pair, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {pair.sector}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Workflow 0{idx + 1}
                  </span>
                </div>

                {/* The Manual Way */}
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 mb-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-red-400 font-semibold uppercase mb-1">
                    <Clock className="w-3 h-3" />
                    <span>The Manual Way (Bottleneck)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    {pair.manualState}
                  </p>
                </div>

                {/* The Librum Automated Way */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 mb-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-semibold uppercase mb-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>The Librum Automated Way</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-snug">
                    {pair.automatedState}
                  </p>
                </div>
              </div>

              {/* Turnaround Accelerator Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Velocity Improvement:</span>
                <span className="text-amber-400 font-bold">{pair.timeGain}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Identity Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-blue-950/60 border border-amber-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
              AI ENGINE + ORCHESTRATION + OUTCOMES
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              Stop running your enterprise on manual friction.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Let Librum engineer your autonomous neural infrastructure.
            </p>
          </div>

          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{COMPANY_CONFIG.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
