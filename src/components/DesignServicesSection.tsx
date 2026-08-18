import React, { useState } from 'react';
import { DESIGN_SERVICES } from '../data/websiteData';
import type { PageRoute } from '../types';
import { Layout, Globe, Palette, Layers, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

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
    <section id="design-services-section" className="py-24 relative overflow-hidden bg-tech-mesh border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SUPPORTING DIGITAL DESIGN CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            UI/UX & DIGITAL <span className="blue-gradient-text">DESIGN EXCELLENCE</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Intelligent automation requires intuitive interfaces. Alongside our AI automation core, we craft human-centered digital experiences, mobile staff terminals, and executive mission-control dashboards.
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
                    ? 'bg-blue-600/20 border-blue-400 text-white shadow-lg shadow-blue-500/10'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {getServiceIcon(srv.icon)}
                <span>{srv.title.replace('ENTERPRISE ', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 text-left space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                LIBRUM DIGITAL DESIGN STUDIO
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                {selectedService.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                {selectedService.tagline}
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.description}
            </p>

            {/* Deliverables */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                Key Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Box */}
            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-200 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong>Operational Outcome:</strong> {selectedService.impact}
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onRouteChange('schedule-demo')}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer hover:border-amber-400"
              >
                <span>CONSULT OUR DESIGN ARCHITECTS</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  librum.design.system.v2
                </span>
              </div>

              <div className="space-y-3">
                <div className="h-28 rounded-xl bg-gradient-to-r from-blue-900/30 to-amber-900/20 border border-slate-800 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-amber-400 uppercase">Operational Interface</span>
                    <span className="text-[10px] font-mono text-slate-400">100% Responsive</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-amber-400/40 rounded-full w-3/4" />
                    <div className="h-2 bg-blue-400/30 rounded-full w-1/2" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-left">
                    <span className="text-[9px] font-mono text-slate-400 block">Typography</span>
                    <span className="text-xs font-heading font-bold text-white">Space Grotesk</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-left">
                    <span className="text-[9px] font-mono text-slate-400 block">Color System</span>
                    <span className="text-xs font-heading font-bold text-amber-400">Gold & Cosmic Navy</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-left text-[11px] font-mono text-slate-300 flex items-center justify-between">
                  <span>Accessibility Score</span>
                  <span className="text-emerald-400 font-bold">100 / 100 WCAG AAA</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
