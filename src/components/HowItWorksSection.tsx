import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/websiteData';
import type { PageRoute } from '../types';
import { Sparkles, ArrowRight, Zap, Shield, Cpu, Network, BarChart3 } from 'lucide-react';

interface HowItWorksSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onRouteChange }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Cpu className="w-5 h-5" />;
      case 1: return <Network className="w-5 h-5" />;
      case 2: return <Zap className="w-5 h-5" />;
      case 3: return <Shield className="w-5 h-5" />;
      case 4: return <BarChart3 className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#030712] border-b border-slate-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>METHODOLOGY & IMPLEMENTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            HOW AI AUTOMATION <span className="gold-gradient-text">WORKS</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Our structured 5-stage transformation methodology ensures zero operational downtime, robust enterprise security, and immediate operational velocity.
          </p>
        </div>

        {/* 5-Step Desktop Process Stream */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between text-left ${
                  isCurrent
                    ? 'bg-slate-900/95 border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-heading font-extrabold text-amber-400/90">
                      {step.step}
                    </span>
                    <span className={`p-2 rounded-xl ${isCurrent ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-amber-400'}`}>
                      {getStepIcon(idx)}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-mono text-amber-300/80 block mb-3">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-slate-800/80">
                  {step.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                      <div className="w-1 h-1 rounded-full bg-amber-400" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-4 h-1 rounded-full transition-all duration-300 ${isCurrent ? 'bg-amber-500' : 'bg-transparent'}`} />
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>START YOUR AUTOMATION JOURNEY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
