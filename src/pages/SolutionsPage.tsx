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
      desc: 'Seamlessly synchronizes SAP, Oracle, Odoo, and custom enterprise resource planning platforms with day-to-day operational workflows without manual spreadsheet exports.',
      features: ['Automated Ledger Entries', 'Bi-directional Invoice Reconciliation', 'Real-Time Inventory Depletion', 'Custom Data Transformation Adapters']
    },
    {
      title: 'AI Assistants & Concierge Systems',
      desc: 'Enterprise-grade conversational agents supporting English, French, Yoruba, Hausa, and Igbo. Capable of handling customer queries, booking appointments, and routing requests.',
      features: ['WhatsApp Business Integration', 'Multi-Channel Ingestion', 'Knowledge Base Retrieval', 'Direct Staff Escalation']
    },
    {
      title: 'Intelligent Document & OCR Processing',
      desc: 'Converts unstructured physical invoices, receipts, school transcripts, and legal contracts into structured, validated digital data efficiently.',
      features: ['High-Accuracy Document Extraction', 'Verification Workflows', 'Discrepancy Detection', 'Direct Database Writing']
    },
    {
      title: 'Custom Operational Connectors',
      desc: 'Bespoke event-driven microservices engineered for high-volume business environments, designed to operate reliably even during unstable network conditions.',
      features: ['Offline-First Queue Sync', 'Private & On-Premises Options', 'Real-Time System Updates', 'Dedicated Technical Support']
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-white relative overflow-hidden">
      
      {/* Light Background Accent */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-950 tracking-tight">
            Enterprise <span className="text-blue-600">solutions</span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Scalable AI automation systems engineered to connect your legacy systems, streamline cross-departmental operations, and deliver measurable business efficiency.
          </p>
        </div>

        {/* 4 Core Solutions Grid (Clean White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {enterpriseSolutions.map((sol, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <span className="text-xs font-mono text-blue-700 font-bold block mb-2">
                  SOLUTION 0{idx + 1}
                </span>
                <h3 className="text-2xl font-heading font-bold text-slate-950 mb-3">
                  {sol.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {sol.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <span className="text-xs font-mono uppercase text-slate-500 font-bold block mb-1">
                    Key Features:
                  </span>
                  {sol.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Enterprise Ready</span>
                <button
                  onClick={() => onRouteChange('schedule-demo')}
                  className="text-xs font-heading font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Solution Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Approach Card (Clean Light Blue Container) */}
        <div className="rounded-3xl bg-[#F5F9FF] border border-blue-200/80 p-8 sm:p-14 text-center shadow-sm">
          <div className="max-w-3xl mx-auto">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-heading font-semibold text-blue-800 uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>SEAMLESS INTEGRATION APPROACH</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
              We connect with what you already use
            </h2>

            {/* Subheadline */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Our integration connectors support standard enterprise protocols across SAP, Oracle NetSuite, Opera PMS, Microsoft Dynamics 365, Odoo, QuickBooks, POS registers, and SQL databases.
            </p>

            {/* Platform Badges (Clean White Capsules) */}
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {[
                { name: 'SAP ERP', icon: <Database className="w-3 h-3 text-blue-600" /> },
                { name: 'Oracle NetSuite', icon: <Cpu className="w-3 h-3 text-purple-600" /> },
                { name: 'Opera PMS', icon: <Zap className="w-3 h-3 text-amber-600" /> },
                { name: 'Microsoft Dynamics 365', icon: <Database className="w-3 h-3 text-blue-600" /> },
                { name: 'Odoo Enterprise', icon: <Cpu className="w-3 h-3 text-purple-600" /> },
                { name: 'Salesforce CRM', icon: <Zap className="w-3 h-3 text-blue-600" /> },
                { name: 'QuickBooks Enterprise', icon: <Database className="w-3 h-3 text-emerald-600" /> },
                { name: 'Custom PostgreSQL / MySQL', icon: <Cpu className="w-3 h-3 text-slate-700" /> }
              ].map((item, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-800 shadow-xs flex items-center gap-2 hover:border-blue-300 transition-colors"
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
                className="px-9 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
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
