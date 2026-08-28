import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/websiteData';
import type { PageRoute } from '../types';
import { Sparkles, ArrowRight, Zap, Shield, Cpu, Network, BarChart3, CheckCircle2 } from 'lucide-react';

interface HowItWorksSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onRouteChange }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Cpu className="w-5 h-5 text-blue-600" />;
      case 1: return <Network className="w-5 h-5 text-purple-600" />;
      case 2: return <Zap className="w-5 h-5 text-amber-600" />;
      case 3: return <Shield className="w-5 h-5 text-emerald-600" />;
      case 4: return <BarChart3 className="w-5 h-5 text-blue-600" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-24 bg-[#F0FDF4] border-b border-emerald-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-xs font-heading font-semibold text-emerald-800 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>STRUCTURED IMPLEMENTATION METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
            How AI automation <span className="text-emerald-700">works</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our structured 5-stage transformation methodology ensures zero operational downtime, robust enterprise security, and immediate operational velocity.
          </p>
        </div>

        {/* 5-Step Process Stream (Clean White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`relative p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between text-left ${
                  isCurrent
                    ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-400 scale-[1.02]'
                    : 'bg-white/80 border-emerald-100 hover:border-emerald-300 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                      isCurrent 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}>
                      Stage {step.step}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-50">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-950 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-700 font-semibold">
                  Focus: {step.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodology Guarantee Footer */}
        <div className="rounded-3xl bg-white border border-emerald-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-xs">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-emerald-700 font-bold">
              Guaranteed Deployment SLA
            </span>
            <h4 className="text-lg font-heading font-bold text-slate-950">
              Pilot deployment live in under 14 business days.
            </h4>
          </div>
          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>START WITH STAGE 01</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
