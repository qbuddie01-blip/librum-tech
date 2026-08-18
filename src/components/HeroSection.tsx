import React, { useState } from 'react';
import type { PageRoute } from '../types';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Hotel, 
  Activity, 
  ShoppingBag, 
  GraduationCap
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface HeroSectionProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenSimulation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRouteChange, onOpenSimulation }) => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'hospitality' | 'healthcare' | 'retail' | 'education'>('hospitality');

  const workflowExamples = {
    hospitality: {
      industry: 'Hospitality & Hotels',
      icon: <Hotel className="w-4 h-4 text-amber-400" />,
      trigger: 'Guest requests room upgrade via WhatsApp',
      aiAction: 'AI verifies PMS availability & VIP rate',
      orchestration: 'Dispatches keycard to duty concierge terminal',
      outcome: 'PMS ledger updated & guest confirmed in 380ms'
    },
    healthcare: {
      industry: 'Clinical Healthcare',
      icon: <Activity className="w-4 h-4 text-rose-400" />,
      trigger: 'Patient checks in with urgent triage symptoms',
      aiAction: 'AI calculates clinical severity score',
      orchestration: 'Pre-assigns trauma bed & auto-fetches EMR history',
      outcome: 'Attending doctor alerted with pre-populated order'
    },
    retail: {
      industry: 'Retail & Supermarkets',
      icon: <ShoppingBag className="w-4 h-4 text-emerald-400" />,
      trigger: 'POS checkout dips SKU inventory below threshold',
      aiAction: 'AI evaluates weekend sales velocity model',
      orchestration: 'Dispatches signed B2B purchase order to supplier',
      outcome: 'Supplier warehouse auto-schedules refrigerated truck'
    },
    education: {
      industry: 'Education & Academies',
      icon: <GraduationCap className="w-4 h-4 text-blue-400" />,
      trigger: 'Parent uploads bank payment confirmation',
      aiAction: 'AI verifies bank hash via automated API query',
      orchestration: 'Generates student ID & provisions SIS account',
      outcome: 'Admission letter & receipt broadcast to parent WhatsApp'
    }
  };

  const currentWorkflow = workflowExamples[activeWorkflowTab];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#050c1e] to-[#020617] pt-24 pb-20">
      {/* Dynamic Cosmic Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Official Positioning Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-xs font-mono text-amber-300 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-semibold tracking-wider uppercase">
              {COMPANY_CONFIG.primaryPositioning}
            </span>
          </div>

          {/* Core Approved Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
            LIBRUM AUTOMATES THE WAY YOUR{' '}
            <span className="gold-gradient-text">BUSINESS WORKS.</span>
          </h1>

          {/* Core Approved Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            Transform complex business workflows into intelligent, automated systems powered by AI.
          </p>

          {/* Primary & Secondary Conversion Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onRouteChange('schedule-demo')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-sm uppercase tracking-wider shadow-2xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <span>{COMPANY_CONFIG.primaryCta}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={onOpenSimulation}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-400 text-white font-heading font-semibold text-sm uppercase tracking-wider shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>WATCH SIMULATED PIPELINE</span>
            </button>
          </div>

        </div>

        {/* Hero Interactive Visualization: Workflow Orchestration Model */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-amber-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            
            {/* Visualizer Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase text-slate-300 tracking-wider">
                  Live Neural Orchestration Pipeline
                </span>
              </div>

              {/* Workflow Sector Selector Tabs */}
              <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                {(['hospitality', 'healthcare', 'retail', 'education'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveWorkflowTab(tab)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      activeWorkflowTab === tab
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* 5-Step Connected Flow Stream */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              
              {/* Step 1: Customer Request */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-amber-400">01. INGEST</span>
                  {currentWorkflow.icon}
                </div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Customer Trigger</span>
                <p className="text-xs font-medium text-white mt-1 leading-snug">
                  {currentWorkflow.trigger}
                </p>
              </div>

              {/* Step 2: AI Engine */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-amber-300">02. AI REASONING</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                </div>
                <span className="text-[11px] font-mono text-amber-400/90 block uppercase">Policy Validation</span>
                <p className="text-xs font-medium text-amber-100 mt-1 leading-snug">
                  {currentWorkflow.aiAction}
                </p>
              </div>

              {/* Step 3: Workflow Orchestration */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-blue-400">03. DISPATCH</span>
                  <span className="text-[10px] font-mono text-emerald-400">&lt; 100ms</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Queue Routing</span>
                <p className="text-xs font-medium text-white mt-1 leading-snug">
                  {currentWorkflow.orchestration}
                </p>
              </div>

              {/* Step 4: Business Systems */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-purple-400">04. SYSTEM SYNC</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">ERP / PMS Ledger</span>
                <p className="text-xs font-medium text-white mt-1 leading-snug">
                  100% Cryptographic Ledger & Audit Logging
                </p>
              </div>

              {/* Step 5: Automated Outcome */}
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-400">05. OUTCOME</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 block uppercase">Zero-Toil Finish</span>
                <p className="text-xs font-medium text-emerald-200 mt-1 leading-snug">
                  {currentWorkflow.outcome}
                </p>
              </div>

            </div>

            {/* Bottom SLA Bar */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 text-center sm:text-left">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Sector Suite: <strong className="text-white">{currentWorkflow.industry}</strong></span>
              </span>
              <span className="text-amber-400">
                End-to-End Execution SLA: &lt; 500ms
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
