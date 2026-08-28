import React from 'react';
import type { PageRoute } from '../types';
import { 
  Cpu, 
  Workflow, 
  Database, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Lock
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface AiAutomationPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AiAutomationPage: React.FC<AiAutomationPageProps> = ({ onRouteChange }) => {
  const architecturalLayers = [
    {
      layer: 'LAYER 01',
      name: 'Omnichannel Ingestion Gateway',
      desc: 'Ingests structured and unstructured data from WhatsApp Business API, webhooks, ERP events, IoT sensors, customer emails, and mobile terminals in real time.',
      icon: <Network className="w-5 h-5 text-blue-600" />
    },
    {
      layer: 'LAYER 02',
      name: 'Autonomous Multi-Agent AI Core',
      desc: 'Parses complex natural language intents, scores urgency, validates business constraints, and orchestrates multi-agent tasks concurrently without human bottlenecks.',
      icon: <Cpu className="w-5 h-5 text-purple-600" />
    },
    {
      layer: 'LAYER 03',
      name: 'Dynamic Workflow & Routing Matrix',
      desc: 'Dispatches instructions directly to duty staff smartwatches, ERP ledger endpoints, kitchen POS systems, or departmental queues with sub-minute SLAs.',
      icon: <Workflow className="w-5 h-5 text-amber-600" />
    },
    {
      layer: 'LAYER 04',
      name: 'Bi-Directional ERP & Ledger Sync',
      desc: 'Guarantees 100% cryptographic ledger accuracy with automated billing, inventory decrements, and compliance audit trail logging.',
      icon: <Database className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-white relative overflow-hidden">
      
      {/* Light Ambient Background */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>CORE TECHNOLOGY PILLAR</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-950 tracking-tight leading-tight">
            Intelligent <span className="text-blue-600">AI workflow automation</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Librum re-engineers enterprise operations from the ground up. We build autonomous neural workflows that connect people, systems, and data into seamless operational engines.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onRouteChange('schedule-demo')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-sm tracking-wider uppercase shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
            >
              <span>{COMPANY_CONFIG.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onRouteChange('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-heading font-semibold text-sm tracking-wider uppercase transition-all cursor-pointer hover:bg-slate-50 shadow-xs"
            >
              TALK TO AN AI ARCHITECT
            </button>
          </div>
        </div>

        {/* 4-Layer Architecture Stack (Clean White Cards) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-blue-700 uppercase tracking-widest block font-bold">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950 mt-1">
              The Librum Neural Execution Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalLayers.map((lay, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      {lay.layer}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                      {lay.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {lay.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lay.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Latency</span>
                  <span className="text-emerald-700 font-semibold">&lt; 250ms</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Capabilities Breakdown */}
        <div className="rounded-3xl bg-[#F5F9FF] border border-blue-200/80 p-8 sm:p-12 mb-20 shadow-xs">
          <div className="max-w-3xl text-left mb-8">
            <span className="text-xs font-mono text-blue-700 uppercase tracking-widest block font-bold">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950 mt-1">
              End-to-End Autonomous Operational Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h4 className="font-heading text-base font-bold text-slate-950 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Multi-Agent Orchestration
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Autonomous AI agents collaborate across departments to fulfill complex, multi-step requests without human bottlenecks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h4 className="font-heading text-base font-bold text-slate-950 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Legacy ERP Integration
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect directly into SAP, Oracle, Odoo, Opera PMS, and custom SQL databases via secure cryptographic webhooks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h4 className="font-heading text-base font-bold text-slate-950 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Human-in-the-Loop Safety
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Configurable threshold gates for high-value financial payouts, medical escalations, and executive sign-offs.
              </p>
            </div>
          </div>
        </div>

        {/* Security & Private Cloud Guarantee */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-slate-950">
                Enterprise Data Sovereignty & Air-Gapped Deployment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                Deploy models on private cloud or on-premise infrastructure. Compliant with Nigerian Data Protection Regulation (NDPR) and international security standards.
              </p>
            </div>
          </div>

          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs hover:scale-[1.02]"
          >
            SCHEDULE TECHNICAL BRIEFING →
          </button>
        </div>

      </div>
    </div>
  );
};
