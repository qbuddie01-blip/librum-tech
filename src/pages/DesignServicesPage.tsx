import React from 'react';
import type { PageRoute } from '../types';
import { DesignServicesSection } from '../components/DesignServicesSection';
import { Palette, ArrowRight, Smartphone, CheckCircle2 } from 'lucide-react';
import uiUxHeroImg from '../assets/ui-ux-design-hero.jpg';

interface DesignServicesPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const DesignServicesPage: React.FC<DesignServicesPageProps> = ({ onRouteChange }) => {
  const designPrinciples = [
    {
      title: 'Cognitive Velocity',
      desc: 'Interfaces designed to minimize operational fatigue and reduce human error rates in fast-paced commercial environments.'
    },
    {
      title: 'Design System Scalability',
      desc: 'Modular, atomic component architectures that ensure seamless brand and UI consistency across multi-platform screens.'
    },
    {
      title: 'High-Impact Typography & Contrast',
      desc: 'Clean, legible typography using Space Grotesk and Plus Jakarta Sans with WCAG AAA accessibility contrast scores.'
    },
    {
      title: 'Frictionless Mobile Terminals',
      desc: 'Purpose-built touch experiences designed for on-the-move frontline staff, concierges, doctors, and warehouse orderlies.'
    }
  ];

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-tech-mesh">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300 mb-4">
            <Palette className="w-3.5 h-3.5" />
            <span>DIGITAL EXPERIENCE & INTERFACE STUDIO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
            UI/UX & DIGITAL <span className="blue-gradient-text">DESIGN</span>
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We believe that powerful AI automation is only as effective as the human interfaces connecting your people. We craft clean, cinematic digital products that elevate your brand and simplify operational work.
          </p>

          {/* Hero Feature Banner with 3D UI/UX Mockup */}
          <div className="mt-12 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block">
                FLAGSHIP DESIGN CAPABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Human-Centered Frontline & Executive Terminals
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                From fast-moving hotel concierge smartwatches to hospital trauma intake tablets and multi-branch inventory control dashboards, our design system reduces human error by over 60%.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Atomic Design Tokens</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>WCAG AAA Contrast</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Sub-Second Response</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>React 19 Native Code</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                <img 
                  src={uiUxHeroImg} 
                  alt="Librum UI/UX Digital Design Mockup & Design System"
                  className="w-full h-64 sm:h-72 object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-slate-950/80 p-2.5 rounded-xl backdrop-blur-md border border-slate-800">
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Librum Design System v2.4</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">100% Mobile Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Services Explorer */}
        <DesignServicesSection onRouteChange={onRouteChange} />

        {/* Design Philosophy & Principles */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">
              THE LIBRUM DESIGN STANDARD
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
              Engineering Human-Machine Harmony
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {designPrinciples.map((prin, pIdx) => (
              <div
                key={pIdx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-lg"
              >
                <span className="text-xs font-mono text-blue-400 font-bold block mb-2">
                  0{pIdx + 1}
                </span>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {prin.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {prin.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>START A DESIGN & AUTOMATION SPRINT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
