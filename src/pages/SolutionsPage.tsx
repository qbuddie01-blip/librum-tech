import React from 'react';
import type { PageRoute } from '../types';
import { Layers, CheckCircle2, ArrowRight, Sparkles, Cpu, Zap, Database } from 'lucide-react';

interface SolutionsPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onRouteChange }) => {
  const enterpriseSolutions = [
    {
      title: 'ERP & Business Process Automation',
      desc: 'Seamlessly synchronizes SAP, Oracle, Odoo, and custom enterprise resource planning platforms with operational frontline workflows without manual spreadsheet exports.',
      features: ['Automated Ledger Entries', 'Bi-directional Invoice Reconciliation', 'Real-Time Inventory Depletion', 'Custom Data Transformation Adapters']
    },
    {
      title: 'Multimodal AI Assistants & Concierges',
      desc: 'Enterprise-grade conversational agents supporting English, French, Yoruba, Hausa, and Igbo. Capable of handling customer queries, booking appointments, and executing transactions.',
      features: ['WhatsApp Business Cloud Integration', 'Voice & IVR Automated Triage', 'Contextual Knowledge Base Retrieval (RAG)', 'Instant Human-Agent Escalation']
    },
    {
      title: 'Intelligent Document & OCR Pipelines',
      desc: 'Converts unstructured physical invoices, hospital lab receipts, school transcripts, and legal contracts into structured, validated JSON data in milliseconds.',
      features: ['99.7% OCR Accuracy', 'Cryptographic Signature Verification', 'Fraud & Anomaly Detection', 'Direct Database Writing']
    },
    {
      title: 'Custom Operational Middleware',
      desc: 'Bespoke event-driven microservices engineered for high-concurrency African business environments, designed to operate reliably even during unstable network conditions.',
      features: ['Offline-First Queue Sync', 'Air-Gapped On-Premises Option', 'Sub-Second WebSocket Telemetry', 'Enterprise 99.99% SLA Support']
    }
  ];

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-tech-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
            ENTERPRISE <span className="gold-gradient-text">SOLUTIONS</span>
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Scalable, high-availability AI systems engineered to connect your legacy systems, streamline cross-departmental operations, and deliver measurable business efficiency.
          </p>
        </div>

        {/* 4 Core Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {enterpriseSolutions.map((sol, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between text-left"
            >
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold block mb-2">
                  SOLUTION 0{idx + 1}
                </span>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  {sol.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {sol.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-800">
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-1">
                    Key Features:
                  </span>
                  {sol.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Enterprise Ready</span>
                <button
                  onClick={() => onRouteChange('schedule-demo')}
                  className="text-xs font-heading font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Solution Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── ZERO-DISRUPTION PHILOSOPHY CARD WITH HUMAN-AI TOUCH BACKGROUND & FUTURISTIC EFFECTS ── */}
        <div className="relative rounded-3xl border-2 border-amber-500/40 hover:border-amber-400/80 p-8 sm:p-14 text-center overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.18)] transition-all duration-500 group">
          
          {/* Background Image: Human Fingertip Touching AI Robot Fingertip */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img 
              src="/human-ai-touch.jpg" 
              alt="Human-Machine Neural Symbiosis" 
              className="w-full h-full object-cover object-center filter brightness-90 contrast-110 saturate-110 group-hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
            {/* Deep Glassmorphic Dark Blending Overlays for 100% Readability */}
            <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[6px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-slate-950/70 to-[#020617]/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-transparent to-[#020617]/90" />
          </div>

          {/* Futuristic Border Shimmer & Corner Accents */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-shimmer pointer-events-none z-10" />
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-400 pointer-events-none z-10" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-400 pointer-events-none z-10" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-400 pointer-events-none z-10" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-400 pointer-events-none z-10" />

          {/* Ambient Synaptic Glow Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse-glow" />

          {/* Card Foreground Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-amber-500/40 text-xs font-mono text-amber-300 uppercase tracking-widest font-bold mb-4 shadow-xl backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ZERO-DISRUPTION PHILOSOPHY</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight drop-shadow-md">
              We Connect With What You Already Use
            </h2>

            {/* Subheadline */}
            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow">
              Our integration middleware speaks native protocols with SAP, Oracle NetSuite, Opera PMS, Microsoft Dynamics 365, Odoo, QuickBooks, POS registers, and SQL databases.
            </p>

            {/* Platform Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {[
                { name: 'SAP ERP', icon: <Database className="w-3 h-3 text-amber-400" /> },
                { name: 'Oracle NetSuite', icon: <Cpu className="w-3 h-3 text-blue-400" /> },
                { name: 'Opera PMS', icon: <Zap className="w-3 h-3 text-amber-400" /> },
                { name: 'Microsoft Dynamics 365', icon: <Database className="w-3 h-3 text-cyan-400" /> },
                { name: 'Odoo Enterprise', icon: <Cpu className="w-3 h-3 text-purple-400" /> },
                { name: 'Salesforce CRM', icon: <Zap className="w-3 h-3 text-blue-400" /> },
                { name: 'QuickBooks Enterprise', icon: <Database className="w-3 h-3 text-emerald-400" /> },
                { name: 'Custom PostgreSQL / MySQL', icon: <Cpu className="w-3 h-3 text-amber-400" /> }
              ].map((item, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-xl bg-slate-950/90 border border-slate-700/90 text-xs font-mono text-slate-100 shadow-lg backdrop-blur-md flex items-center gap-2 hover:border-amber-400/60 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="mt-10">
              <button
                onClick={() => onRouteChange('schedule-demo')}
                className="px-9 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2 border border-amber-300/40"
              >
                <span>SCHEDULE AN INTEGRATION AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
