import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/websiteData';
import type { PageRoute } from '../types';
import { Building2, ArrowRight, Info, ChevronRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface CaseStudiesSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onRouteChange }) => {
  const [selectedStudyId, setSelectedStudyId] = useState<string>(CASE_STUDIES[0].id);

  const activeStudy = CASE_STUDIES.find(cs => cs.id === selectedStudyId) || CASE_STUDIES[0];

  return (
    <section id="case-studies-section" className="py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>ARCHITECTURAL CONCEPTS & BLUEPRINTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
            Featured <span className="text-blue-600">automation blueprints</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Examine how our engineered multi-agent workflows solve deep operational challenges across hospitality, corporate finance, retail supply chains, and modern education.
          </p>

          <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-3xl text-left">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{COMPANY_CONFIG.disclaimers.caseStudies}</span>
          </div>
        </div>

        {/* Tab Selector (Clean White Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10">
          {CASE_STUDIES.map((study) => {
            const isSelected = selectedStudyId === study.id;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedStudyId(study.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/80 border-blue-500 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
                    {study.clientType}
                  </span>
                  <h4 className="font-heading text-sm font-bold text-slate-950 line-clamp-1">
                    {study.title.split('—')[0]}
                  </h4>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[11px] font-mono">{study.tag}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Blueprint Presentation (Clean White Card) */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden text-left">
          
          {/* Top Hero Photo Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
            <img 
              src={activeStudy.image} 
              alt={activeStudy.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div>
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 font-heading text-xs font-bold tracking-wider uppercase inline-block mb-2 shadow-xs">
                  {activeStudy.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  {activeStudy.title}
                </h3>
              </div>

              <span className="text-xs font-mono text-white bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-700 shrink-0">
                Sector: {activeStudy.clientType}
              </span>
            </div>
          </div>

          {/* Blueprint Details */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Problem vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-100">
                <span className="text-xs font-mono uppercase text-rose-700 font-bold block mb-2">
                  [OPERATIONAL BOTTLENECK]
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeStudy.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-100">
                <span className="text-xs font-mono uppercase text-emerald-800 font-bold block mb-2">
                  [LIBRUM AUTOMATION ARCHITECTURE]
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {activeStudy.solution}
                </p>
              </div>
            </div>

            {/* Architecture Flow */}
            <div>
              <span className="text-xs font-mono uppercase text-blue-700 font-bold block mb-3">
                INTELLIGENT WORKFLOW SEQUENCE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {activeStudy.architectureFlow.map((flow, fIdx) => (
                  <div key={fIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-blue-700 font-bold block mb-1">
                      Step 0{fIdx + 1}
                    </span>
                    <span className="text-xs text-slate-700 leading-snug">
                      {flow}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustrative Results Metrics */}
            <div className="p-6 rounded-2xl bg-[#F5F9FF] border border-blue-100">
              <div className="flex items-center justify-between border-b border-blue-200 pb-2 mb-4">
                <span className="text-xs font-mono text-blue-800 uppercase tracking-wider font-bold">
                  Projected Operational Impact (Illustrative Benchmarks)
                </span>
                <span className="text-[10px] font-mono text-blue-600 bg-blue-100 px-2 py-0.5 rounded font-semibold uppercase">
                  BENCHMARK
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeStudy.results.map((res, rIdx) => (
                  <div key={rIdx} className="text-left">
                    <span className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950 block">
                      {res.value}
                    </span>
                    <span className="text-xs font-mono text-slate-600 mt-1 block">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack used */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 font-semibold">Integrated Stack:</span>
                {activeStudy.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onRouteChange('schedule-demo')}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>REQUEST CUSTOM PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
