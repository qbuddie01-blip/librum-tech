import React from 'react';
import type { PageRoute } from '../types';
import { DesignServicesSection } from '../components/DesignServicesSection';
import { Palette, Smartphone, CheckCircle2 } from 'lucide-react';
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
      desc: 'Clean, legible typography using Plus Jakarta Sans and Inter with WCAG AAA accessibility contrast scores.'
    },
    {
      title: 'Frictionless Mobile Terminals',
      desc: 'Purpose-built touch experiences designed for on-the-move frontline staff, concierges, doctors, and warehouse orderlies.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-white relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Palette className="w-3.5 h-3.5 text-blue-600" />
            <span>DIGITAL EXPERIENCE & INTERFACE STUDIO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-950 tracking-tight">
            UI/UX & digital <span className="text-blue-600">product design</span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We believe that powerful AI automation is only as effective as the human interfaces connecting your people. We craft clean, cinematic digital products that elevate your brand and simplify operational work.
          </p>

          {/* Hero Feature Banner (Clean White Card) */}
          <div className="mt-12 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-blue-700 uppercase tracking-widest font-bold block">
                FLAGSHIP DESIGN CAPABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950">
                Human-Centered Frontline & Executive Terminals
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                From fast-moving hotel concierge smartwatches to hospital trauma intake tablets and multi-branch inventory control dashboards, our design system reduces human error by over 60%.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Atomic Design Tokens</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>WCAG AAA Contrast</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Sub-Second Response</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>React 19 Native Code</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm group bg-slate-100">
                <img 
                  src={uiUxHeroImg} 
                  alt="Librum UI/UX Digital Design Mockup & Design System"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-slate-900/80 p-2.5 rounded-xl backdrop-blur-md border border-slate-700">
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

        {/* Embedded Interactive Design Studio Section */}
        <div className="mt-8">
          <DesignServicesSection onRouteChange={onRouteChange} />
        </div>

        {/* 4 Core Design Principles (Clean White Cards) */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-blue-700 uppercase tracking-widest block font-bold">
              DESIGN PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950 mt-1">
              Engineered for Real Humans at Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {designPrinciples.map((dp, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-blue-700 font-bold block mb-2">
                    PRINCIPLE 0{i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-slate-950 mb-2">
                    {dp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {dp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Standard</span>
                  <span className="text-blue-600 font-semibold">Enterprise Grade</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
