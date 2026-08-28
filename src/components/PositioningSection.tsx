import React from 'react';
import type { PageRoute } from '../types';
import { Clock, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface PositioningSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const PositioningSection: React.FC<PositioningSectionProps> = ({ onRouteChange }) => {
  const transformationPairs = [
    {
      sector: 'Hotel & Hospitality Operations',
      manualState: 'Guest calls front desk; staff writes paper note; calls housekeeping room-by-room; manual ledger entry.',
      automatedState: 'Guest sends WhatsApp message; AI validates PMS folio; dispatches task to staff smartwatch; logs charge automatically.',
      timeGain: 'From 45 mins to < 90 seconds'
    },
    {
      sector: 'Healthcare Triage & Patient Intake',
      manualState: 'Patient waits in crowded lobby; fills paper clipboard; nurse searches archive shelves for physical paper file.',
      automatedState: 'Patient completes digital intake; AI calculates triage urgency score; retrieves EMR; alerts doctor immediately.',
      timeGain: 'From 35 mins to instant intake'
    },
    {
      sector: 'Education Admissions & Fee Reconciliation',
      manualState: 'Parents queue at administrative hall with paper bank tellers; accountant manually reconciles bank statements.',
      automatedState: 'Online portal verifies bank transfer hash via API; OCR validates transcript; automated student profile creation.',
      timeGain: 'From 4 days to instant enrollment'
    },
    {
      sector: 'Retail Multi-Store Inventory',
      manualState: 'Store manager notices stockout on shelf; writes manual paper request; head office delays purchase order by days.',
      automatedState: 'POS register barcode scan updates cloud inventory balance; automated predictive reorder dispatches PO to supplier.',
      timeGain: 'Zero stockouts, real-time sync'
    }
  ];

  return (
    <section className="py-24 bg-[#F5F9FF] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>OPERATIONAL TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight leading-tight">
            Your business has workflows.<br />
            <span className="text-blue-600">We make them intelligent.</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Behind every customer interaction, patient triage, student enrollment, or vendor purchase order lies an operational workflow. When workflows are automated, your business scales effortlessly.
          </p>
        </div>

        {/* 4 Transformation Comparison Cards (Clean White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {transformationPairs.map((pair, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {pair.sector}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                    Workflow 0{idx + 1}
                  </span>
                </div>

                {/* The Manual Way */}
                <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 mb-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-rose-700 font-bold uppercase mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>The Manual Way (Bottleneck)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {pair.manualState}
                  </p>
                </div>

                {/* The Librum Automated Way */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-100 mb-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 font-bold uppercase mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>The Librum Automated Way</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {pair.automatedState}
                  </p>
                </div>
              </div>

              {/* Turnaround Accelerator Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Turnaround Improvement:</span>
                <span className="text-blue-600 font-bold">{pair.timeGain}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Identity Banner (Clean White Card) */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>AI Engine + Orchestration + Outcomes</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-950">
              Eliminate operational bottlenecks across your teams.
            </h3>
            <p className="text-sm text-slate-600">
              Let Librum engineer your connected, autonomous digital infrastructure.
            </p>
          </div>

          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
          >
            <span>{COMPANY_CONFIG.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
