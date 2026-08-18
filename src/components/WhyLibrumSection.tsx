import React from 'react';
import { WHY_LIBRUM_POINTS } from '../data/websiteData';
import { Brain, Users, Building2, Network, ShieldCheck, Target, Sparkles } from 'lucide-react';

export const WhyLibrumSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Brain': return <Brain className="w-6 h-6 text-amber-400" />;
      case 'Users': return <Users className="w-6 h-6 text-blue-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-amber-400" />;
      case 'Network': return <Network className="w-6 h-6 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Target': return <Target className="w-6 h-6 text-rose-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#030712] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE LIBRUM ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            WHY ORGANIZATIONS <span className="gold-gradient-text">CHOOSE LIBRUM</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We don't just build isolated scripts. We re-engineer how African and international enterprises function, unlocking operational velocity, eliminating manual error, and accelerating profitability.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_LIBRUM_POINTS.map((point) => (
            <div
              key={point.id}
              className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit mb-5 group-hover:border-amber-500/40 transition-colors">
                  {getIcon(point.icon)}
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-400/80 uppercase tracking-widest">
                  Enterprise Standard
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
