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
    <section className="py-24 relative overflow-hidden bg-[#020617] border-b border-slate-800/80">
      
      {/* ── BACKGROUND LAYER: dd1 AI WORKFLOW MATRIX WITH SEAMLESS BLEND ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <img 
          src="/dd1.jpg" 
          alt="Librum Intelligent Enterprise Workflow Matrix"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-115 saturate-110"
          loading="lazy"
        />
        {/* Seamless Dark Cosmic Blending Overlays for 100% Readability across Web, Tablet & Mobile */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-slate-950/65 to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-transparent to-[#020617]/95" />
        
        {/* Ambient Synaptic Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/15 rounded-full blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-xs font-mono text-amber-300 mb-4 shadow-xl backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>OPERATIONAL TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            YOUR BUSINESS HAS WORKFLOWS.<br />
            <span className="gold-gradient-text drop-shadow-[0_0_35px_rgba(245,158,11,0.3)]">
              LIBRUM MAKES THEM INTELLIGENT.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Behind every customer interaction, medical intake, student enrollment, or vendor purchase order lies an operational workflow. When workflows are manual, your business slows down. When workflows are automated, your business scales effortlessly.
          </p>
        </div>

        {/* 4 Transformation Comparison Cards (Responsive Grid: 1 col on mobile, 2 cols on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {transformationPairs.map((pair, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between text-left group shadow-2xl backdrop-blur-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {pair.sector}
                  </h3>
                  <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Workflow 0{idx + 1}
                  </span>
                </div>

                {/* The Manual Way */}
                <div className="p-3.5 rounded-2xl bg-red-950/30 border border-red-500/30 mb-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-red-400 font-bold uppercase mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>The Manual Way (Bottleneck)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pair.manualState}
                  </p>
                </div>

                {/* The Librum Automated Way */}
                <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 mb-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-bold uppercase mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>The Librum Automated Way</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">
                    {pair.automatedState}
                  </p>
                </div>
              </div>

              {/* Turnaround Accelerator Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Velocity Gain:</span>
                <span className="text-amber-400 font-bold">{pair.timeGain}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Identity Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-blue-950/80 border border-amber-500/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-2xl backdrop-blur-2xl">
          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>AI ENGINE + ORCHESTRATION + OUTCOMES</span>
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
            className="shrink-0 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>{COMPANY_CONFIG.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
