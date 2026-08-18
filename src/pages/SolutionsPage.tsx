import React from 'react';
import type { PageRoute } from '../types';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';

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

        {/* Integration Architecture Wall */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-blue-950/80 border border-amber-500/25 p-8 sm:p-12 text-center">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold mb-2">
            ZERO-DISRUPTION PHILOSOPHY
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            We Connect With What You Already Use
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our integration middleware speaks native protocols with SAP, Oracle NetSuite, Opera PMS, Microsoft Dynamics 365, Odoo, QuickBooks, POS registers, and SQL databases.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['SAP ERP', 'Oracle NetSuite', 'Opera PMS', 'Microsoft Dynamics 365', 'Odoo Enterprise', 'Salesforce CRM', 'QuickBooks Enterprise', 'Custom PostgreSQL / MySQL'].map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-200">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => onRouteChange('schedule-demo')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all cursor-pointer"
            >
              SCHEDULE AN INTEGRATION AUDIT →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
