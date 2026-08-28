import React from 'react';
import type { PageRoute } from '../types';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { Building2, ArrowRight } from 'lucide-react';

interface CaseStudiesPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onRouteChange }) => {
  return (
    <div className="pt-28 pb-24 bg-white relative overflow-hidden">
      
      {/* Ambient Top Light Gradient */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>OPERATIONAL CONCEPTS & BLUEPRINTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-950 tracking-tight">
            Automation <span className="text-blue-600">blueprints</span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Explore our architectural blueprints designed to solve complex operational challenges across luxury hospitality, corporate finance, retail supply chains, and modern academies.
          </p>
        </div>

        {/* Core Case Studies Component with Header Hidden */}
        <CaseStudiesSection onRouteChange={onRouteChange} hideHeader={true} />

        {/* Custom Architecture Proposal CTA (Clean Light Blue Container) */}
        <div className="mt-16 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F5F9FF] border border-blue-200 max-w-4xl mx-auto shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950">
              Ready to design a custom architecture blueprint for your organization?
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
              Our enterprise solution architects will map your current manual bottlenecks and deliver a phased automation blueprint with projected ROI modeling.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => onRouteChange('schedule-demo')}
                className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>REQUEST CUSTOM ARCHITECTURAL PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
