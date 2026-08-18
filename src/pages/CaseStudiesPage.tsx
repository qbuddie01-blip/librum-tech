import React from 'react';
import type { PageRoute } from '../types';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { Building2, ArrowRight } from 'lucide-react';

interface CaseStudiesPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onRouteChange }) => {
  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-tech-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>OPERATIONAL CONCEPTS & BLUEPRINTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
            AUTOMATION <span className="gold-gradient-text">BLUEPRINTS</span>
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore our architectural blueprints designed to solve complex operational challenges across luxury hospitality, corporate finance, retail supply chains, and modern academies.
          </p>
        </div>

        {/* Core Case Studies Component */}
        <CaseStudiesSection onRouteChange={onRouteChange} />

        {/* Custom Architecture Proposal CTA */}
        <div className="mt-16 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-amber-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Ready to Design a Custom Architecture Blueprint for Your Organization?
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto leading-relaxed">
              Our enterprise solution architects will map your current manual bottlenecks and deliver a phased automation blueprint with projected ROI modeling.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => onRouteChange('schedule-demo')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 transition-all cursor-pointer inline-flex items-center gap-2"
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
