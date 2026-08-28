import React from 'react';
import type { PageRoute } from '../types';
import { Cpu, Workflow, Database, Network, ShieldCheck, UserCheck, ArrowRight, Sparkles } from 'lucide-react';

interface AiAutomationCoreSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AiAutomationCoreSection: React.FC<AiAutomationCoreSectionProps> = ({ onRouteChange }) => {
  const corePillars = [
    {
      title: 'Multi-Agent Coordination',
      description: 'Specialized AI agents collaborate across departments to handle multi-step requests without manual routing friction.',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      badge: 'Multi-Agent'
    },
    {
      title: 'ERP & PMS Bi-Directional Sync',
      description: 'Smooth integration with Opera PMS, SAP, Oracle NetSuite, Odoo, and custom SQL ledgers for reliable record updates.',
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      badge: 'Ledger Accuracy'
    },
    {
      title: 'Omnichannel Ingestion',
      description: 'Ingests structured and unstructured triggers across WhatsApp Business API, webhooks, ERP events, and mobile applications in real time.',
      icon: <Network className="w-5 h-5 text-purple-600" />,
      badge: 'Omnichannel'
    },
    {
      title: 'Real-Time Queue Routing',
      description: 'Analyzes business rules and routes instructions directly to duty staff mobile interfaces and department queues promptly.',
      icon: <Workflow className="w-5 h-5 text-amber-600" />,
      badge: 'Prompt Dispatch'
    },
    {
      title: 'Human-in-the-Loop Safeguards',
      description: 'Configurable automated approval gates for high-value financial transactions, critical clinical alerts, and executive sign-offs.',
      icon: <UserCheck className="w-5 h-5 text-blue-600" />,
      badge: 'Policy Control'
    },
    {
      title: 'Private & Secure Cloud',
      description: 'Private on-premise or dedicated cloud model sandboxing built around strict enterprise data privacy standards.',
      icon: <ShieldCheck className="w-5 h-5 text-rose-600" />,
      badge: 'Data Privacy'
    }
  ];

  return (
    <section id="ai-core-section" className="py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AI AUTOMATION CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight leading-tight">
            The Librum <span className="text-blue-600">AI Automation Core</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Engineered to streamline business operations. Our AI automation layer connects customer and staff requests directly to your core business systems and teams.
          </p>
        </div>

        {/* 6 Core Pillars Grid (Clean White Cards with Soft Shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full font-medium border border-blue-100">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Architecture Layer</span>
                <span className="text-blue-600 font-semibold">0{idx + 1} // Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Anchor */}
        <div className="flex justify-center">
          <button
            onClick={() => onRouteChange('ai-automation')}
            className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:scale-[1.02]"
          >
            <span>EXPLORE FULL ARCHITECTURAL STACK</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
