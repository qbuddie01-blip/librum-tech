import React, { useState } from 'react';
import { INDUSTRIES } from '../data/websiteData';
import type { IndustryData, PageRoute } from '../types';
import { 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';

interface IndustrySectionProps {
  onRouteChange: (route: PageRoute) => void;
  onSelectIndustry?: (industryId: string) => void;
}

export const IndustrySection: React.FC<IndustrySectionProps> = ({ onRouteChange, onSelectIndustry }) => {
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedIndustry(expandedIndustry === id ? null : id);
  };

  const handleCtaClick = (industryId: string) => {
    if (onSelectIndustry) {
      onSelectIndustry(industryId);
    }
    onRouteChange('schedule-demo');
  };

  return (
    <section id="industries-section" className="py-24 relative overflow-hidden bg-tech-mesh">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CROSS-SECTOR DEPLOYMENTS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            WHAT CAN LIBRUM <span className="gold-gradient-text">AUTOMATE?</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Every enterprise operates through interconnected human and digital workflows. 
            Librum transforms manual operational bottlenecks into autonomous, connected systems purpose-engineered for your sector.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind: IndustryData) => {
            const isExpanded = expandedIndustry === ind.id;

            return (
              <div
                key={ind.id}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#050b18]/95 border border-slate-800/80 hover:border-amber-500/60 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Image Banner */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#050b18]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-mono text-[10px] font-semibold tracking-wider uppercase shadow-md">
                      {ind.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-amber-400 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs font-mono text-amber-400/80 mt-1 mb-4">
                      {ind.subtitle}
                    </p>

                    {/* Problem / Automation / Impact Framework */}
                    <div className="space-y-3 mb-6">
                      <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                        <span className="text-[10px] font-mono uppercase text-red-400 font-bold block mb-0.5">
                          Problem:
                        </span>
                        <p className="text-slate-300 leading-snug">
                          {ind.problem}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs">
                        <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-0.5">
                          Automation:
                        </span>
                        <p className="text-slate-200 leading-snug">
                          {ind.automation}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs">
                        <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block mb-0.5">
                          Impact:
                        </span>
                        <p className="text-emerald-200 leading-snug">
                          {ind.impact}
                        </p>
                      </div>
                    </div>

                    {/* Key Automations Preview */}
                    <div className="space-y-1.5 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        Core Autonomous Workflows:
                      </span>
                      {ind.automations.slice(0, 3).map((auto, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{auto}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Pipeline Details */}
                  {isExpanded && (
                    <div className="mb-6 p-3.5 rounded-xl bg-slate-950/90 border border-amber-500/20 animate-fadeIn text-left">
                      <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest block mb-2 font-bold">
                        Intelligent Workflow Architecture:
                      </span>
                      <div className="space-y-2">
                        {ind.workflowStages.map((stg, sIdx) => (
                          <div key={sIdx} className="text-[11px] font-mono text-slate-300 bg-slate-900/80 p-2 rounded border border-slate-800">
                            <span className="text-amber-400 font-bold">[{stg.from}]</span> → {stg.action} → <span className="text-blue-400 font-bold">[{stg.to}]</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Row */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => toggleExpand(ind.id)}
                      className="text-xs font-mono text-slate-400 hover:text-amber-400 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Pipeline' : 'View Pipeline'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => handleCtaClick(ind.id)}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-amber-500/15 group-hover:scale-105 cursor-pointer"
                    >
                      <span>{ind.ctaText}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Workflows Callout */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/80 to-slate-900 border border-amber-500/30 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-heading font-bold text-white">
              Have a Proprietary Business Architecture?
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              From logistics pipelines to legal document compliance and agricultural supply chains, Librum builds custom multi-agent automation systems tailored to your unique operational rules.
            </p>
          </div>
          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 transition-all cursor-pointer"
          >
            BUILD YOUR AUTOMATION →
          </button>
        </div>

      </div>
    </section>
  );
};
