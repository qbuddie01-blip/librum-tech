import React from 'react';
import type { PageRoute } from '../types';
import { Cpu, Workflow, Database, Network, ShieldCheck, UserCheck, ArrowRight, Zap } from 'lucide-react';

interface AiAutomationCoreSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AiAutomationCoreSection: React.FC<AiAutomationCoreSectionProps> = ({ onRouteChange }) => {
  const corePillars = [
    {
      title: 'Multi-Agent Orchestration',
      description: 'Autonomous specialized AI agents collaborate across departments to resolve complex, multi-step requests without human queue delays.',
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      badge: 'Agent Swarms'
    },
    {
      title: 'ERP & PMS Bi-Directional Sync',
      description: 'Native zero-downtime integration with Opera PMS, SAP, Oracle NetSuite, Odoo, and custom SQL ledgers for instant cryptographic record updates.',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      badge: 'Ledger Accuracy'
    },
    {
      title: 'Omnichannel Ingestion',
      description: 'Ingests structured and unstructured triggers across WhatsApp Business API, webhooks, ERP events, IoT sensors, and mobile terminals in real time.',
      icon: <Network className="w-5 h-5 text-purple-400" />,
      badge: 'Omnichannel'
    },
    {
      title: 'Real-Time Queue Routing',
      description: 'Intelligently analyzes operational policies and dispatches instructions directly to duty staff smartwatches and department terminals with sub-second SLAs.',
      icon: <Workflow className="w-5 h-5 text-cyan-400" />,
      badge: '< 100ms Dispatch'
    },
    {
      title: 'Human-in-the-Loop Safeguards',
      description: 'Configurable automated approval gates for high-value financial payouts, critical clinical alerts, and executive sign-offs.',
      icon: <UserCheck className="w-5 h-5 text-emerald-400" />,
      badge: 'Policy Control'
    },
    {
      title: 'Private & Air-Gapped Cloud',
      description: 'Strict Nigerian Data Protection Regulation (NDPR) compliance with private on-premise or sovereign cloud model sandboxing.',
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
      badge: 'NDPR Compliant'
    }
  ];

  return (
    <section id="ai-core-section" className="py-24 relative overflow-hidden bg-tech-mesh border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>THE NEURAL ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            THE LIBRUM <span className="gold-gradient-text">AI AUTOMATION CORE</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Engineered as an autonomous enterprise nervous system. Our multi-agent intelligence layer connects your frontline customer requests directly to core business systems and duty teams.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Architecture Layer</span>
                <span className="text-amber-400 font-semibold">0{idx + 1} // Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Anchor */}
        <div className="flex justify-center">
          <button
            onClick={() => onRouteChange('ai-automation')}
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer hover:bg-slate-800"
          >
            <span>EXPLORE FULL ARCHITECTURAL STACK</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
