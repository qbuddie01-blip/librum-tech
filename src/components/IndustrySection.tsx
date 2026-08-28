import React, { useState } from 'react';
import { INDUSTRIES } from '../data/websiteData';
import type { IndustryData, PageRoute } from '../types';
import { CheckCircle2, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

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
    <section id="industries-section" className="py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>CROSS-SECTOR DEPLOYMENTS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
            What can Librum <span className="text-blue-600">automate?</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Every enterprise operates through interconnected human and digital workflows. 
            Librum transforms manual operational bottlenecks into autonomous, connected systems purpose-engineered for your sector.
          </p>
        </div>

        {/* Industry Cards Grid (Clean White Cards with Soft Shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind: IndustryData) => {
            const isExpanded = expandedIndustry === ind.id;

            return (
              <div
                key={ind.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between overflow-hidden"
              >
                {/* Top Image Banner */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 font-heading text-xs font-bold tracking-wider uppercase shadow-xs">
                      {ind.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-600 font-medium mt-1 mb-4">
                      {ind.subtitle}
                    </p>

                    {/* Problem / Automation / Impact Framework */}
                    <div className="space-y-2.5 mb-6">
                      <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 text-xs">
                        <span className="text-[10px] font-mono uppercase text-rose-700 font-bold block mb-0.5">
                          Problem:
                        </span>
                        <p className="text-slate-700 leading-snug">
                          {ind.problem}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs">
                        <span className="text-[10px] font-mono uppercase text-blue-700 font-bold block mb-0.5">
                          Automation:
                        </span>
                        <p className="text-slate-800 leading-snug">
                          {ind.automation}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-100 text-xs">
                        <span className="text-[10px] font-mono uppercase text-emerald-800 font-bold block mb-0.5">
                          Impact:
                        </span>
                        <p className="text-emerald-900 font-medium leading-snug">
                          {ind.impact}
                        </p>
                      </div>
                    </div>

                    {/* Key Automations Preview */}
                    <div className="space-y-1.5 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                        Core Autonomous Workflows:
                      </span>
                      {ind.automations.slice(0, 3).map((auto, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{auto}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Pipeline Details */}
                  {isExpanded && (
                    <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 animate-fadeIn text-left">
                      <span className="text-[11px] font-mono text-blue-700 uppercase tracking-wider block mb-2 font-bold">
                        Intelligent Workflow Architecture:
                      </span>
                      <div className="space-y-2">
                        {ind.workflowStages.map((stg, sIdx) => (
                          <div key={sIdx} className="text-xs font-mono text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200">
                            <span className="text-amber-700 font-bold">[{stg.from}]</span> → {stg.action} → <span className="text-blue-700 font-bold">[{stg.to}]</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Row */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => toggleExpand(ind.id)}
                      className="text-xs font-heading font-semibold text-slate-600 hover:text-blue-600 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Pipeline' : 'View Pipeline'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => handleCtaClick(ind.id)}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-xs hover:scale-105 cursor-pointer"
                    >
                      <span>{ind.ctaText}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Workflows Callout (Clean White Card) */}
        <div className="mt-16 rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-heading font-bold text-slate-950">
              Have a custom business workflow or industry?
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              From logistics pipelines to legal document verification and multi-branch supply chains, Librum builds custom multi-agent automation systems tailored to your unique operational rules.
            </p>
          </div>
          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer hover:scale-[1.02]"
          >
            BUILD YOUR AUTOMATION →
          </button>
        </div>

      </div>
    </section>
  );
};
