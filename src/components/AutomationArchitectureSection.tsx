import React from 'react';
import type { PageRoute } from '../types';
import { 
  ArrowRight, 
  Cpu, 
  Workflow, 
  Database, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';

interface AutomationArchitectureSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AutomationArchitectureSection: React.FC<AutomationArchitectureSectionProps> = ({ onRouteChange }) => {
  const pipelineTiers = [
    {
      step: 'STAGE 01',
      title: 'AI Decision Engine',
      subtitle: 'Intent Parsing & Validation',
      desc: 'Ingests multi-channel requests, evaluates operational policies, and prioritizes urgency in real-time.',
      icon: <Cpu className="w-5 h-5 text-blue-600" />
    },
    {
      step: 'STAGE 02',
      title: 'Workflow Orchestration',
      subtitle: 'Multi-Step Execution',
      desc: 'Coordinates parallel sub-tasks across departments without human queue delays.',
      icon: <Workflow className="w-5 h-5 text-purple-600" />
    },
    {
      step: 'STAGE 03',
      title: 'Core Business Systems',
      subtitle: 'PMS, ERP & Database Sync',
      desc: 'Direct bi-directional integration with property management systems, ERPs, and custom SQL ledgers.',
      icon: <Database className="w-5 h-5 text-emerald-600" />
    },
    {
      step: 'STAGE 04',
      title: 'Duty Staff & Departments',
      subtitle: 'Mobile & Desktop Interfaces',
      desc: 'Pushes priority tasks directly to on-duty staff mobile devices, tablets, and desktop station screens.',
      icon: <Users className="w-5 h-5 text-amber-600" />
    },
    {
      step: 'STAGE 05',
      title: 'Automated Action & Closure',
      subtitle: 'Reliable Resolution',
      desc: 'Fulfills requests, updates ledgers, generates audit records, and notifies stakeholders promptly.',
      icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section className="py-24 bg-[#F5F9FF] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>ENTERPRISE AUTOMATION ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
            How connected <span className="text-blue-600">automation works</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From the initial customer trigger to automated execution and ERP synchronization, every layer is designed for responsive, dependable execution.
          </p>
        </div>

        {/* 5-Tier Architecture Pipeline Grid (Clean White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
          {pipelineTiers.map((tier, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    {tier.step}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                    {tier.icon}
                  </div>
                </div>

                <h3 className="font-heading text-base font-bold text-slate-950 mb-1 group-hover:text-blue-600 transition-colors">
                  {tier.title}
                </h3>
                <p className="text-[11px] font-mono text-blue-600 font-medium mb-3">
                  {tier.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Performance</span>
                <span className="text-emerald-700 font-semibold">Fast & Responsive</span>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Information Card (Clean White Card) */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Smooth Integration & Secure Deployment Options</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-950">
              Integrate with your existing ERP, PMS & database infrastructure.
            </h3>
            <p className="text-sm text-slate-600">
              No need to replace software your teams already know. Librum connects as an intelligent coordination layer on top.
            </p>
          </div>

          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
          >
            <span>SCHEDULE ARCHITECTURE REVIEW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
