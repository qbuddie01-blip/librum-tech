import React, { useState } from 'react';
import { DESIGN_SERVICES } from '../data/websiteData';
import type { PageRoute } from '../types';
import { Layout, Globe, Palette, Layers, CheckCircle2, ArrowRight, Sparkles, Smartphone, Eye } from 'lucide-react';
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
    <section id="design-services-section" className="py-24 relative overflow-hidden bg-tech-mesh border-b border-slate-800">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600/30 to-amber-500/20 border-blue-400 text-white shadow-xl shadow-blue-500/10 scale-105'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {getServiceIcon(srv.icon)}
                <span>{srv.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Card (2-Col Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Details & Deliverables (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl text-left space-y-6">
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-1">
                Capability 0{DESIGN_SERVICES.findIndex(s => s.id === activeTab) + 1} // Active
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
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-200 flex items-start gap-2.5 shadow-inner">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong>Operational Outcome:</strong> {selectedService.impact}
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onRouteChange('schedule-demo')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
              >
                <span>CONSULT OUR DESIGN ARCHITECTS</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Presentation with 3D UI/UX Hero Image (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl bg-slate-950 border border-slate-800/90 shadow-2xl relative overflow-hidden group hover:border-amber-500/40 transition-all duration-500">
              
              {/* UI/UX Hero Image Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img 
                  src={uiUxHeroImg} 
                  alt="Librum UI/UX Digital Design Mockup & Design System"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
                
                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 border border-amber-500/40 text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                    <Smartphone className="w-3 h-3 text-amber-400" />
                    <span>OPERATIONAL UI/UX ENGINE</span>
                  </span>
                </div>

                {/* Top Right Live Preview */}
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 font-semibold flex items-center gap-1 backdrop-blur-md">
                    <Eye className="w-3 h-3" />
                    <span>Figma & React Live</span>
                  </span>
                </div>

                {/* Bottom Floating Stats Strip */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center backdrop-blur-md shadow-lg">
                    <span className="text-[9px] font-mono text-slate-400 block">Typography</span>
                    <span className="text-xs font-heading font-bold text-white">Space Grotesk</span>
                  </div>
                  
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center backdrop-blur-md shadow-lg">
                    <span className="text-[9px] font-mono text-slate-400 block">Color System</span>
                    <span className="text-xs font-heading font-bold text-amber-400">Cosmic Navy / Gold</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center backdrop-blur-md shadow-lg">
                    <span className="text-[9px] font-mono text-slate-400 block">Accessibility</span>
                    <span className="text-xs font-heading font-bold text-emerald-400">100/100 AAA</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Strip */}
              <div className="p-3.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>Atomic Design Tokens</span>
                </span>
                <span className="text-slate-300 font-semibold">100% Mobile Optimized</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
