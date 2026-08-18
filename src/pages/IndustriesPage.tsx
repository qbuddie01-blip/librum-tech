import React, { useState } from 'react';
import { INDUSTRIES } from '../data/websiteData';
import type { PageRoute } from '../types';
import { Building, CheckCircle2 } from 'lucide-react';

interface IndustriesPageProps {
  onRouteChange: (route: PageRoute) => void;
  selectedIndustryId?: string;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onRouteChange, selectedIndustryId }) => {
  const [filter, setFilter] = useState<string>(selectedIndustryId || 'all');

  const filteredIndustries = filter === 'all' 
    ? INDUSTRIES 
    : INDUSTRIES.filter(ind => ind.id === filter);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-tech-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>SECTOR-SPECIFIC INTELLIGENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
            INDUSTRY <span className="gold-gradient-text">AUTOMATION SUITES</span>
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Engineered specifically around the operational nuances, regulatory frameworks, and staffing workflows of modern African and international enterprises.
          </p>
        </div>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Sectors ({INDUSTRIES.length})
          </button>
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setFilter(ind.id)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === ind.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {ind.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Detailed Industry Cards List */}
        <div className="space-y-12">
          {filteredIndustries.map((ind, idx) => (
            <div
              key={ind.id}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
            >
              {/* Left Column: Image & Badges (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/90 border border-amber-500/40 text-amber-300 font-mono text-[10px] font-bold uppercase">
                      {ind.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800">
                    {ind.keyBenefits.map((kb, k) => (
                      <div key={k} className="text-center">
                        <span className="text-xs sm:text-sm font-heading font-extrabold text-amber-400 block">
                          {kb.metric}
                        </span>
                        <span className="text-[8px] font-mono text-slate-400 leading-none block">
                          {kb.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Specs & Workflows (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">
                    SECTOR SUITE 0{idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
                    {ind.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                    {ind.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {ind.description}
                </p>

                {/* Problem / Automation / Impact Framework */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 py-1">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-[10px] font-mono text-red-400 font-bold block mb-0.5 uppercase">Problem:</span>
                    <p className="text-slate-300 leading-snug text-[11px]">{ind.problem}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs">
                    <span className="text-[10px] font-mono text-amber-400 font-bold block mb-0.5 uppercase">Automation:</span>
                    <p className="text-slate-200 leading-snug text-[11px]">{ind.automation}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-0.5 uppercase">Impact:</span>
                    <p className="text-emerald-200 leading-snug text-[11px]">{ind.impact}</p>
                  </div>
                </div>

                {/* Automations Checklist */}
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-2">
                    Key Autonomous Workflows:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ind.automations.map((auto, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{auto}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pipeline Flow Conduit */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest block mb-2 font-bold">
                    Workflow Pipeline:
                  </span>
                  <div className="space-y-1.5">
                    {ind.workflowStages.map((wf, wIdx) => (
                      <div key={wIdx} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5 flex-wrap">
                        <span className="text-amber-400 font-bold">[{wf.from}]</span>
                        <span className="text-slate-500">→</span>
                        <span>{wf.action}</span>
                        <span className="text-slate-500">→</span>
                        <span className="text-blue-400 font-bold">[{wf.to}]</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onRouteChange('schedule-demo')}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
                  >
                    <span>{ind.ctaText}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
