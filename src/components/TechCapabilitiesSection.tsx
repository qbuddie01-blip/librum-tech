import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/websiteData';
import { Cpu, Zap, Sliders, Shield, Code, Eye, TrendingUp, Mic, Share2, Lock, UserCheck, Activity, Smartphone, Network } from 'lucide-react';

export const TechCapabilitiesSection: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const getTechIcon = (icon: string) => {
    switch (icon) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Mic': return <Mic className="w-5 h-5 text-purple-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-cyan-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-emerald-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-amber-400" />;
      case 'Code': return <Code className="w-5 h-5 text-blue-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-purple-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#030712] border-b border-slate-800">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>ENTERPRISE TECHNOLOGY MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            ENGINEERED FOR <span className="gold-gradient-text">OPERATIONAL OUTCOMES</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We assemble resilient, low-latency technology stacks designed to solve complex business problems and power mission-critical corporate operations without failure.
          </p>
        </div>

        {/* Dynamic Connected Grid of Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {TECH_CATEGORIES.map((cat, cIdx) => (
            <div
              key={cIdx}
              className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-6 sm:p-7 shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-mono text-amber-400 font-bold">
                    STACK 0{cIdx + 1}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6 text-left">
                  {cat.description}
                </p>

                {/* Tech Node Cards */}
                <div className="space-y-3">
                  {cat.items.map((item, iIdx) => {
                    const isHovered = hoveredItem === item.name;
                    return (
                      <div
                        key={iIdx}
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`p-3 rounded-xl border transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                          isHovered
                            ? 'bg-slate-800/80 border-amber-500/50 shadow-md shadow-amber-500/10'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                          {getTechIcon(item.icon)}
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <span className="text-xs font-heading font-bold text-white block truncate">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 block truncate">
                            {item.role}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Deployment Tag */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Deployment</span>
                <span className="text-amber-400 font-semibold">Cloud / On-Prem / Hybrid</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Security & Protocol Banner */}
        <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 flex flex-wrap items-center justify-around gap-6 text-center text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>256-Bit TLS End-to-End Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Sub-Second Queue Dispatch Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-400" />
            <span>NDPR & International Data Compliance</span>
          </div>
        </div>

      </div>
    </section>
  );
};
