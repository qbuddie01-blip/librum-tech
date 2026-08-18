import React, { useState } from 'react';
import type { PageRoute } from '../types';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Hotel, 
  Activity, 
  ShoppingBag, 
  GraduationCap,
  Sparkles,
  Zap,
  Cpu
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
    <section className="relative min-h-[96vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#040919] to-[#020617] pt-28 pb-20">
      
      {/* ── BACKGROUND LAYER: STUNNING AI ROBOT HEAD WITH SEAMLESS COSMIC BLEND ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        {/* Cinematic AI Robot Head Image */}
        <div className="absolute top-0 right-0 lg:right-[-5%] w-[800px] sm:w-[1000px] lg:w-[1250px] h-full max-h-[900px] opacity-35 sm:opacity-45 lg:opacity-55 mix-blend-screen transition-opacity duration-1000 animate-float">
          <img 
            src="/ai-robot-head.jpg" 
            alt="Librum AI Cybernetic Neural Core"
            className="w-full h-full object-contain object-top filter brightness-110 contrast-125 saturate-110 drop-shadow-[0_0_80px_rgba(245,158,11,0.2)]"
            loading="eager"
          />
        </div>

        {/* Ambient Radial Lighting & Neural Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-amber-500/15 rounded-full blur-[160px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-400/10 rounded-full blur-[140px] animate-float-reverse" />

        {/* Grid Mesh & Cosmic Vignette */}
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent" />
      </div>

      {/* ── HERO FOREGROUND CONTENTS (ANIMATED) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Header & Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Animated Strategic Positioning Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs font-mono text-amber-300 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-amber-400 transition-all duration-300">
            {/* Shimmer Light Sweep Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent transition-transform duration-1000" />
            
            <div className="relative flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
              <span className="font-semibold tracking-wider uppercase">
                {COMPANY_CONFIG.primaryPositioning}
              </span>
            </div>
          </div>

          {/* Core Approved Headline with Glowing Gradient */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-lg">
            LIBRUM AUTOMATES THE WAY YOUR{' '}
            <span className="gold-gradient-text drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">
              BUSINESS WORKS.
            </span>
          </h1>

          {/* Core Approved Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            Transform complex business workflows into intelligent, automated systems powered by AI.
          </p>

          {/* Primary & Secondary Action CTAs with Interactive Glowing Rings */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Primary Action Button */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse-glow" />
              <button
                onClick={() => onRouteChange('schedule-demo')}
                className="relative w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-sm uppercase tracking-wider shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{COMPANY_CONFIG.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Secondary Action Button with Hologram Play Trigger */}
            <button
              onClick={onOpenSimulation}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-400/80 text-white font-heading font-semibold text-sm uppercase tracking-wider shadow-xl hover:bg-slate-800/90 transition-all flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-xl group hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]"
            >
              <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 text-amber-400 fill-amber-400 ml-0.5" />
              </div>
              <span>WATCH SIMULATED PIPELINE</span>
            </button>
          </div>

        </div>

        {/* ── HERO INTERACTIVE VISUALIZATION: ANIMATED WORKFLOW ORCHESTRATION MODEL ── */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-slate-900/90 border border-amber-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl overflow-hidden hover:border-amber-500/50 transition-colors duration-500">
            
            {/* Top Scanning Line Animation */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-shimmer" />

            {/* Visualizer Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-6 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-emerald-400/40 animate-ping absolute" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative" />
                </div>
                <span className="text-xs font-mono font-bold uppercase text-slate-200 tracking-wider flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                  <span>Live Neural Orchestration Pipeline</span>
                </span>
              </div>

              {/* Workflow Sector Selector Tabs */}
              <div className="flex flex-wrap gap-1.5 bg-slate-950/90 p-1.5 rounded-xl border border-slate-800 shadow-inner">
                {(['hospitality', 'healthcare', 'retail', 'education'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveWorkflowTab(tab)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeWorkflowTab === tab
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-105'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* 5-Step Connected Flow Stream (Animated Pipeline) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
              
              {/* Step 1: Customer Request */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 text-left hover:-translate-y-0.5">
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
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 text-left relative overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.1)] hover:-translate-y-0.5 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-8 h-8 bg-amber-400/10 rounded-full blur-sm" />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-amber-300 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>02. REASONING</span>
                  </span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                </div>
                <span className="text-[11px] font-mono text-amber-400/90 block uppercase">Policy Validation</span>
                <p className="text-xs font-medium text-amber-100 mt-1 leading-snug">
                  {currentWorkflow.aiAction}
                </p>
              </div>

              {/* Step 3: Workflow Orchestration */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 text-left hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-blue-400">03. DISPATCH</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">&lt; 100ms</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Queue Routing</span>
                <p className="text-xs font-medium text-white mt-1 leading-snug">
                  {currentWorkflow.orchestration}
                </p>
              </div>

              {/* Step 4: Business Systems */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 text-left hover:-translate-y-0.5">
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
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-left shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:-translate-y-0.5 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-400">05. OUTCOME</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 block uppercase">Zero-Toil Finish</span>
                <p className="text-xs font-medium text-emerald-200 mt-1 leading-snug">
                  {currentWorkflow.outcome}
                </p>
              </div>

            </div>

            {/* Bottom SLA & Sector Telemetry Bar */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 text-center sm:text-left relative z-10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Sector Suite: <strong className="text-white">{currentWorkflow.industry}</strong></span>
              </span>
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span>End-to-End Execution SLA: &lt; 500ms</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
