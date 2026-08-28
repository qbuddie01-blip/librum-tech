import React, { useState } from 'react';
import type { PageRoute } from '../types';
import { INDUSTRIES } from '../data/websiteData';
import { ArrowRight, CheckCircle2, Building, Activity, ShoppingBag, GraduationCap, Briefcase, Layers } from 'lucide-react';

interface IndustriesPageProps {
  onRouteChange: (route: PageRoute) => void;
  selectedIndustryId?: string;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onRouteChange, selectedIndustryId }) => {
  const [activeFilter, setActiveFilter] = useState<string>(selectedIndustryId || 'all');

  const filteredIndustries = activeFilter === 'all' 
    ? INDUSTRIES 
    : INDUSTRIES.filter(ind => ind.id === activeFilter);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'hospitality': return <Building className="w-5 h-5 text-blue-600" />;
      case 'healthcare': return <Activity className="w-5 h-5 text-rose-600" />;
      case 'retail': return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'education': return <GraduationCap className="w-5 h-5 text-purple-600" />;
      case 'enterprise': return <Briefcase className="w-5 h-5 text-blue-600" />;
      default: return <Layers className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Light Background Top Glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Building className="w-3.5 h-3.5 text-blue-600" />
            <span>INDUSTRY-SPECIFIC AUTOMATION SUITES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-950 tracking-tight">
            Tailored for <span className="text-blue-600">your industry</span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover purpose-engineered multi-agent workflows built specifically for your sector's operational nuances, regulations, and legacy platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {[
            { id: 'all', label: 'All Industries' },
            { id: 'hospitality', label: 'Hotel & Hospitality' },
            { id: 'healthcare', label: 'Hospitals & Clinical' },
            { id: 'education', label: 'Schools & Education' },
            { id: 'retail', label: 'Retail & Supermarkets' },
            { id: 'enterprise', label: 'Corporate Logistics' },
            { id: 'custom', label: 'Custom Workflows' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-2xs hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Industries Detailed Cards List (Clean White Cards) */}
        <div className="space-y-12">
          {filteredIndustries.map((ind, idx) => (
            <div
              key={ind.id}
              className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Visual Banner with Realistic Sector Image (5 cols) */}
                <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px] overflow-hidden bg-slate-100">
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/20" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-heading font-bold text-slate-900 uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                      {getIndustryIcon(ind.id)}
                      <span>{ind.badge}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-center">
                      {ind.keyBenefits.map((kb, kIdx) => (
                        <div key={kIdx}>
                          <span className="text-sm sm:text-base font-heading font-extrabold text-amber-400 block">
                            {kb.metric}
                          </span>
                          <span className="text-[10px] font-mono text-slate-300 block line-clamp-1">
                            {kb.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Content & Automations (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono text-blue-700 font-bold block mb-1">
                      SECTOR 0{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950">
                      {ind.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-blue-600 font-medium mt-1">
                      {ind.subtitle}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Operational Problem vs Librum Automation */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
                        <span className="text-[10px] font-mono uppercase text-rose-700 font-bold block mb-1">
                          Manual Pain Point
                        </span>
                        <p className="text-slate-700 leading-snug">
                          {ind.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100">
                        <span className="text-[10px] font-mono uppercase text-emerald-800 font-bold block mb-1">
                          Librum AI Solution
                        </span>
                        <p className="text-slate-800 leading-snug font-medium">
                          {ind.automation}
                        </p>
                      </div>
                    </div>

                    {/* Key Automations List */}
                    <div className="mt-6 space-y-2 pt-4 border-t border-slate-100">
                      <span className="text-xs font-mono uppercase text-slate-500 font-bold block mb-2">
                        Pre-Engineered Automations:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ind.automations.map((auto, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{auto}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs font-mono text-emerald-700 font-medium">
                      ✓ Ready for 14-Day Pilot Implementation
                    </span>
                    <button
                      onClick={() => onRouteChange('schedule-demo')}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>{ind.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
