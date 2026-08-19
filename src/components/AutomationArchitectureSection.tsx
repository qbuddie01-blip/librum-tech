import React from 'react';
import type { PageRoute } from '../types';
import { 
  ArrowRight, 
  Cpu, 
  Workflow, 
  Database, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface AutomationArchitectureSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AutomationArchitectureSection: React.FC<AutomationArchitectureSectionProps> = ({ onRouteChange }) => {
  const pipelineTiers = [
    {
      step: 'STAGE 01',
      title: 'AI Decision Engine',
      subtitle: 'Intent Parsing & Validation',
      desc: 'Ingests multi-channel requests, evaluates operational policies, and scores urgency in real-time.',
      icon: <Cpu className="w-5 h-5 text-amber-400" />
    },
    {
      step: 'STAGE 02',
      title: 'Workflow Orchestration',
      subtitle: 'Multi-Agent State Machine',
      desc: 'Coordinates parallel sub-tasks across departments without human queue delays.',
      icon: <Workflow className="w-5 h-5 text-blue-400" />
    },
    {
      step: 'STAGE 03',
      title: 'Core Business Systems',
      subtitle: 'PMS, ERP & Database Sync',
      desc: 'Direct bi-directional integration with Opera PMS, SAP, Oracle NetSuite, and custom SQL ledgers.',
      icon: <Database className="w-5 h-5 text-emerald-400" />
    },
    {
      step: 'STAGE 04',
      title: 'Duty Staff & Departments',
      subtitle: 'Smartwatch & Terminal Alerts',
      desc: 'Pushes priority tasks directly to on-duty staff wearables and mobile station screens.',
      icon: <Users className="w-5 h-5 text-purple-400" />
    },
    {
      step: 'STAGE 05',
      title: 'Automated Action & Closure',
      subtitle: 'Zero-Toil Resolution',
      desc: 'Fulfills requests, updates ledgers, generates audit receipts, and notifies stakeholders instantly.',
      icon: <CheckCircle2 className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#020617] border-b border-slate-800">
      
      {/* ── BACKGROUND LAYER: mack AI PCB NEURAL BRAIN WITH SEAMLESS COSMIC BLEND ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <img 
          src="/mack.jpg" 
          alt="Librum Neural Circuit Architecture"
          className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-120 saturate-110"
          loading="lazy"
        />
        {/* Seamless Dark Cosmic Blending Overlays for 100% Readability Across Mobile, Tablet & Desktop */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-slate-950/65 to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-transparent to-[#020617]/95" />
        
        {/* Ambient Neural Core Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/15 rounded-full blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-xs font-mono text-amber-300 mb-4 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            HOW LIBRUM CONNECTS YOUR <span className="gold-gradient-text drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">ENTIRE ENTERPRISE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow">
            AI is not an isolated chatbot. It is the central nervous system connecting your customers, business systems, duty departments, and operational actions into a unified autonomous pipeline.
          </p>
        </div>

        {/* 5-Stage Orchestration Stream (Responsive Grid: 1 col on mobile, 2 cols on tablet, 5 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-16 relative">
          {pipelineTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-slate-900/90 border border-slate-800/90 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between text-left group shadow-2xl backdrop-blur-xl hover:-translate-y-1 ${
                idx === 4 ? 'sm:col-span-2 md:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {tier.step}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                    {tier.icon}
                  </div>
                </div>

                <h3 className="font-heading text-base font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {tier.title}
                </h3>
                <span className="text-xs font-mono text-slate-400 block mb-3">
                  {tier.subtitle}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Latency SLA</span>
                <span className="text-emerald-400 font-semibold">&lt; 100ms</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Guarantee Panel */}
        <div className="rounded-3xl bg-slate-900/90 border border-amber-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-white">
                Zero Operational Downtime Integration
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                We deploy alongside your active production systems with parallel shadow routing before flipping to live automation.
              </p>
            </div>
          </div>

          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="shrink-0 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>{COMPANY_CONFIG.secondaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
