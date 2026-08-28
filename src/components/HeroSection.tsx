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
  Cpu, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

interface HeroSectionProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenSimulation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRouteChange, onOpenSimulation }) => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'hospitality' | 'healthcare' | 'retail' | 'education'>('hospitality');

  const workflowExamples = {
    hospitality: {
      industry: 'Hotel & Hospitality',
      icon: <Hotel className="w-4 h-4 text-blue-600" />,
      trigger: 'Guest requests room upgrade via WhatsApp',
      aiAction: 'AI verifies PMS availability and VIP rate policy',
      orchestration: 'Dispatches task directly to duty staff terminal',
      outcome: 'PMS ledger updated & guest confirmed in seconds'
    },
    healthcare: {
      industry: 'Clinical Healthcare',
      icon: <Activity className="w-4 h-4 text-rose-600" />,
      trigger: 'Patient checks in with urgent triage symptoms',
      aiAction: 'AI calculates clinical urgency score & retrieves history',
      orchestration: 'Pre-assigns bed and alerts attending doctor',
      outcome: 'Doctor notified with pre-populated chart instantly'
    },
    retail: {
      industry: 'Retail & Supermarkets',
      icon: <ShoppingBag className="w-4 h-4 text-emerald-600" />,
      trigger: 'POS checkout dips SKU inventory below threshold',
      aiAction: 'AI evaluates sales velocity & supplier lead times',
      orchestration: 'Generates and dispatches signed B2B purchase order',
      outcome: 'Supplier auto-schedules delivery replenishment'
    },
    education: {
      industry: 'Schools & Academies',
      icon: <GraduationCap className="w-4 h-4 text-purple-600" />,
      trigger: 'Parent uploads school tuition payment proof',
      aiAction: 'AI validates bank transfer hash via financial API',
      orchestration: 'Provisions student portal profile & marks ledger',
      outcome: 'Official receipt & admission sent to parent mobile'
    }
  };

  const currentWorkflow = workflowExamples[activeWorkflowTab];

  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden border-b border-slate-100">
      
      {/* Delicate Clean Ambient Light Gradient */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header & Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Strategic Positioning Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-heading font-semibold text-blue-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AI AUTOMATION & DIGITAL TRANSFORMATION</span>
          </div>

          {/* Clean Human-Centric Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.12]">
            Smarter workflows.{' '}
            <span className="text-blue-600">Better business operations.</span>
          </h1>

          {/* Professional Clear Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Librum Technologies helps organizations automate repetitive processes, connect fragmented business systems, and improve how teams work using practical AI automation.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => onRouteChange('ai-automation')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>EXPLORE AI AUTOMATION</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={() => onRouteChange('schedule-demo')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-heading font-semibold text-sm uppercase tracking-wider shadow-xs hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>SCHEDULE A DEMO</span>
            </button>

            <button
              onClick={onOpenSimulation}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-blue-600 hover:text-blue-700 font-heading font-semibold text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:bg-blue-50/60"
            >
              <Play className="w-3.5 h-3.5 fill-blue-600" />
              <span>Watch Live Simulation</span>
            </button>
          </div>

          {/* Trust Guarantees Strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero Disruption to Existing ERP/PMS</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>NDPR & Enterprise Security Compliant</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Sub-Second Response SLAs</span>
            </span>
          </div>

        </div>

        {/* ── HERO INTERACTIVE PIPELINE VISUALIZATION (CLEAN WHITE CARD) ── */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 shadow-xl shadow-slate-200/40 relative">
            
            {/* Visualizer Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-heading font-bold uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span>How Librum Connects Your Workflow</span>
                </span>
              </div>

              {/* Workflow Sector Selector Tabs */}
              <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl w-full sm:w-auto justify-between sm:justify-start">
                {(['hospitality', 'healthcare', 'retail', 'education'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveWorkflowTab(tab)}
                    className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-heading capitalize font-semibold transition-all duration-200 cursor-pointer text-center ${
                      activeWorkflowTab === tab
                        ? 'bg-white text-blue-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* 5-Step Connected Flow Stream */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-left">
              
              {/* Step 1: Ingest */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">01. Request</span>
                  {currentWorkflow.icon}
                </div>
                <span className="text-xs font-heading font-bold text-slate-900 block">Customer Ingest</span>
                <p className="text-xs text-slate-600 mt-1 leading-snug">
                  {currentWorkflow.trigger}
                </p>
              </div>

              {/* Step 2: Reasoning */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-blue-700 uppercase">02. Reasoning</span>
                  <Zap className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <span className="text-xs font-heading font-bold text-blue-950 block">AI Policy Check</span>
                <p className="text-xs text-blue-900/80 mt-1 leading-snug">
                  {currentWorkflow.aiAction}
                </p>
              </div>

              {/* Step 3: Dispatch */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">03. Dispatch</span>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">&lt; 100ms</span>
                </div>
                <span className="text-xs font-heading font-bold text-slate-900 block">Task Routing</span>
                <p className="text-xs text-slate-600 mt-1 leading-snug">
                  {currentWorkflow.orchestration}
                </p>
              </div>

              {/* Step 4: System Sync */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">04. Ledger</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <span className="text-xs font-heading font-bold text-slate-900 block">ERP / Database</span>
                <p className="text-xs text-slate-600 mt-1 leading-snug">
                  Instant bi-directional ledger and audit sync
                </p>
              </div>

              {/* Step 5: Outcome */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 sm:col-span-2 md:col-span-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">05. Complete</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs font-heading font-bold text-emerald-950 block">Resolution</span>
                <p className="text-xs text-emerald-900/90 mt-1 leading-snug font-medium">
                  {currentWorkflow.outcome}
                </p>
              </div>

            </div>

            {/* Bottom Sector Telemetry Bar */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Sector Example: <strong className="text-slate-900">{currentWorkflow.industry}</strong></span>
              </span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Execution Speed: Sub-second end-to-end</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
