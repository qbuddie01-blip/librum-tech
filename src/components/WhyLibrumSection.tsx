import React from 'react';
import { WHY_LIBRUM_POINTS } from '../data/websiteData';
import { Brain, Users, Building2, Network, ShieldCheck, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyLibrumSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Brain': return <Brain className="w-5 h-5 text-blue-600" />;
      case 'Users': return <Users className="w-5 h-5 text-purple-600" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-amber-600" />;
      case 'Network': return <Network className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Target': return <Target className="w-5 h-5 text-rose-600" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-24 bg-[#F0FDF4] border-b border-emerald-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-heading font-semibold text-emerald-800 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>THE LIBRUM ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
            Why organizations <span className="text-emerald-700">choose Librum</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We don't just build isolated scripts. We re-engineer how African and international enterprises function, unlocking operational velocity, eliminating manual error, and accelerating profitability.
          </p>
        </div>

        {/* 6 Clean White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_LIBRUM_POINTS.map((point) => (
            <div
              key={point.id}
              className="p-8 rounded-3xl bg-white border border-emerald-100/80 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between text-left group"
            >
              <div>
                <div className="p-3 rounded-2xl bg-emerald-50 w-fit mb-5 group-hover:bg-emerald-100 transition-colors">
                  {getIcon(point.icon)}
                </div>

                <h3 className="text-lg font-heading font-bold text-slate-950 mb-2 group-hover:text-emerald-700 transition-colors">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-700 font-semibold uppercase tracking-wider">
                  Enterprise Standard
                </span>
                <span className="text-xs text-slate-400">0{point.id}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
