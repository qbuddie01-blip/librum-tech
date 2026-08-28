import React, { useState } from 'react';
import { DESIGN_SERVICES } from '../data/websiteData';
import type { PageRoute } from '../types';
import { Layout, Globe, Palette, Layers, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import uiUxHeroImg from '../assets/ui-ux-design-hero.jpg';

interface DesignServicesSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const DesignServicesSection: React.FC<DesignServicesSectionProps> = ({ onRouteChange }) => {
  const [activeTab, setActiveTab] = useState<string>(DESIGN_SERVICES[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'Globe': return <Globe className="w-4 h-4" />;
      case 'Palette': return <Palette className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  const selectedService = DESIGN_SERVICES.find(s => s.id === activeTab) || DESIGN_SERVICES[0];

  return (
    <section id="design-services-section" className="py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>SUPPORTING DIGITAL DESIGN CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
            UI/UX & digital <span className="text-blue-600">interface studio</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Intelligent automation requires intuitive interfaces. Alongside our AI automation core, we craft human-centered digital experiences, mobile staff terminals, and executive dashboards.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-4xl mx-auto">
          {DESIGN_SERVICES.map((srv) => {
            const isSelected = activeTab === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {getServiceIcon(srv.icon)}
                <span>{srv.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Card (2-Col Layout with Clean White Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Details & Deliverables (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-left space-y-6">
            <div>
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-1">
                Capability 0{DESIGN_SERVICES.findIndex(s => s.id === activeTab) + 1} // Active
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950">
                {selectedService.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-slate-500 mt-1">
                {selectedService.tagline}
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedService.description}
            </p>

            {/* Deliverables */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase text-slate-700 font-bold block">
                Key Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Box */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-blue-900 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong>Operational Outcome:</strong> {selectedService.impact}
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onRouteChange('schedule-demo')}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>CONSULT OUR DESIGN ARCHITECTS</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Presentation (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                <img 
                  src={uiUxHeroImg} 
                  alt="Librum UI/UX Digital Design Mockup & Design System"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-slate-900/80 p-2.5 rounded-xl backdrop-blur-md border border-slate-700">
                  <span className="font-bold text-amber-400">Design System v2.4</span>
                  <span className="text-emerald-400 font-semibold">100% Mobile Ready</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
