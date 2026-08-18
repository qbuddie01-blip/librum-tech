import React from 'react';
import type { PageRoute } from '../types';
import { DesignServicesSection } from '../components/DesignServicesSection';
import { Palette, ArrowRight } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300 mb-4">
            <Palette className="w-3.5 h-3.5" />
            <span>DIGITAL EXPERIENCE STUDIO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
            UI/UX & DIGITAL <span className="blue-gradient-text">DESIGN</span>
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We believe that powerful AI automation is only as effective as the human interfaces connecting your people. We craft clean, cinematic digital products that elevate your brand and simplify operational work.
          </p>
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
