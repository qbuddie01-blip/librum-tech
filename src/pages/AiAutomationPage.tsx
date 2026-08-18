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
      icon: <Network className="w-6 h-6 text-amber-400" />
    },
    {
      layer: 'LAYER 02',
      name: 'Autonomous Multi-Agent AI Core',
      desc: 'Parses complex natural language intents, scores urgency, validates business constraints, and orchestrates multi-agent tasks concurrently without human bottlenecks.',
      icon: <Cpu className="w-6 h-6 text-blue-400" />
    },
    {
      layer: 'LAYER 03',
      name: 'Dynamic Workflow & Routing Matrix',
      desc: 'Dispatches instructions directly to duty staff smartwatches, ERP ledger endpoints, kitchen POS systems, or departmental queues with sub-minute SLAs.',
      icon: <Workflow className="w-6 h-6 text-purple-400" />
    },
    {
      layer: 'LAYER 04',
      name: 'Bi-Directional ERP & Ledger Sync',
      desc: 'Guarantees 100% cryptographic ledger accuracy with automated billing, inventory decrements, and compliance audit trail logging.',
      icon: <Database className="w-6 h-6 text-emerald-400" />
    }
  ];

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-tech-mesh">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE TECHNOLOGY PILLAR</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            INTELLIGENT <span className="gold-gradient-text">AI WORKFLOW AUTOMATION</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Librum re-engineers enterprise operations from the ground up. We build autonomous neural workflows that connect people, systems, and data into seamless operational engines.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onRouteChange('schedule-demo')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{COMPANY_CONFIG.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onRouteChange('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-white font-heading font-semibold text-sm tracking-wider uppercase transition-all cursor-pointer"
            >
              TALK TO AN AI ARCHITECT
            </button>
          </div>
        </div>

        {/* 4-Layer Architecture Stack */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
              The Librum Neural Execution Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalLayers.map((lay, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {lay.layer}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                      {lay.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {lay.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lay.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Latency</span>
                  <span className="text-emerald-400 font-semibold">&lt; 250ms</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Capabilities Breakdown */}
        <div className="rounded-3xl bg-slate-900/80 border border-amber-500/20 p-8 sm:p-12 mb-20">
          <div className="max-w-3xl text-left mb-8">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
              End-to-End Autonomous Operational Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="font-heading text-base font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Multi-Agent Orchestration
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Autonomous AI agents collaborate across departments to fulfill complex, multi-step requests without human bottlenecks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="font-heading text-base font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Legacy ERP Integration
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly into SAP, Oracle, Odoo, Opera PMS, and custom SQL databases via secure cryptographic webhooks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="font-heading text-base font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Human-in-the-Loop Safety
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Configurable threshold gates for high-value financial payouts, medical escalations, and executive sign-offs.
              </p>
            </div>
          </div>
        </div>

        {/* Security & Private Cloud Guarantee */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-blue-950/60 border border-blue-500/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-400/30 text-blue-400 shrink-0">
              <Lock className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-white">
                Enterprise Data Sovereignty & Air-Gapped Deployment
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                Deploy models on private cloud or on-premise infrastructure. Compliant with Nigerian Data Protection Regulation (NDPR) and international security standards.
              </p>
            </div>
          </div>

          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-amber-500/20"
          >
            SCHEDULE TECHNICAL BRIEFING →
          </button>
        </div>

      </div>
    </div>
  );
};
