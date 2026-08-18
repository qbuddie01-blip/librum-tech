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
    <section id="case-studies-section" className="py-24 relative overflow-hidden bg-tech-mesh border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL CONCEPTS & BLUEPRINTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            FEATURED <span className="gold-gradient-text">AUTOMATION CONCEPTS</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Examine how our engineered multi-agent workflows solve deep operational challenges across hospitality, corporate finance, retail supply chains, and modern education.
          </p>

          <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400 max-w-3xl text-left">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{COMPANY_CONFIG.disclaimers.caseStudies}</span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10">
          {CASE_STUDIES.map((study) => {
            const isSelected = selectedStudyId === study.id;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedStudyId(study.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-amber-500/80 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                    {study.clientType}
                  </span>
                  <h4 className="font-heading text-sm font-bold text-white line-clamp-1">
                    {study.title.split('—')[0]}
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-slate-500 mt-3 flex items-center gap-1">
                  <span>View Blueprint</span>
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Blueprint Showcase Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/90 border border-amber-500/25 overflow-hidden shadow-2xl backdrop-blur-2xl">
          
          {/* Header Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden group">
            <img 
              src={activeStudy.image} 
              alt={activeStudy.title} 
              className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 font-mono text-[10px] font-semibold tracking-wider uppercase inline-block mb-2">
                  {activeStudy.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  {activeStudy.title}
                </h3>
              </div>

              <span className="text-xs font-mono text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700 shrink-0">
                Sector: {activeStudy.clientType}
              </span>
            </div>
          </div>

          {/* Blueprint Details Grid */}
          <div className="p-6 sm:p-10 space-y-8 text-left">
            
            {/* Problem vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20">
                <span className="text-xs font-mono uppercase text-red-400 font-bold block mb-2">
                  [OPERATIONAL BOTTLENECK]
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeStudy.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold block mb-2">
                  [LIBRUM AUTOMATION ARCHITECTURE]
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeStudy.solution}
                </p>
              </div>
            </div>

            {/* Architecture Flow */}
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 font-bold block mb-3">
                INTELLIGENT WORKFLOW SEQUENCE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {activeStudy.architectureFlow.map((flow, fIdx) => (
                  <div key={fIdx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-left">
                    <span className="text-[10px] font-mono text-amber-400 font-bold block mb-1">
                      Step 0{fIdx + 1}
                    </span>
                    <span className="text-xs text-slate-200 leading-snug">
                      {flow}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustrative Results Metrics */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 to-blue-950/80 border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Projected Operational Impact (Illustrative Benchmarks)
                </span>
                <span className="text-[10px] font-mono text-amber-400 uppercase">
                  ILLUSTRATIVE BENCHMARK
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeStudy.results.map((res, rIdx) => (
                  <div key={rIdx} className="text-left">
                    <span className="text-2xl sm:text-3xl font-heading font-extrabold text-amber-400 block">
                      {res.value}
                    </span>
                    <span className="text-xs font-mono text-slate-300 mt-1 block">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack used */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Integrated Stack:</span>
                {activeStudy.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onRouteChange('schedule-demo')}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
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
