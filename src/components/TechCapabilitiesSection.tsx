import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/websiteData';
import { Cpu, Zap, Sliders, Code, Eye, TrendingUp, Mic, Share2, Lock, UserCheck, Activity, Smartphone, Network } from 'lucide-react';

export const TechCapabilitiesSection: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const getTechIcon = (icon: string) => {
    switch (icon) {
      case 'Cpu': return <Cpu className="w-4 h-4 text-blue-600" />;
      case 'Eye': return <Eye className="w-4 h-4 text-purple-600" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case 'Mic': return <Mic className="w-4 h-4 text-purple-600" />;
      case 'Zap': return <Zap className="w-4 h-4 text-amber-600" />;
      case 'Share2': return <Share2 className="w-4 h-4 text-blue-600" />;
      case 'Lock': return <Lock className="w-4 h-4 text-emerald-600" />;
      case 'UserCheck': return <UserCheck className="w-4 h-4 text-amber-600" />;
      case 'Code': return <Code className="w-4 h-4 text-blue-600" />;
      case 'Sliders': return <Sliders className="w-4 h-4 text-purple-600" />;
      case 'Activity': return <Activity className="w-4 h-4 text-rose-600" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-blue-600" />;
      default: return <Cpu className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Network className="w-3.5 h-3.5 text-blue-600" />
            <span>ENTERPRISE TECHNOLOGY MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
            Engineered for <span className="text-blue-600">operational outcomes</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We assemble resilient, low-latency technology stacks designed to solve complex business problems and power mission-critical corporate operations without failure.
          </p>
        </div>

        {/* Dynamic Connected Grid of Categories (Clean White Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {TECH_CATEGORIES.map((cat, cIdx) => (
            <div
              key={cIdx}
              className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-blue-300 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <h3 className="font-heading text-lg font-bold text-slate-950">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-mono text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    STACK 0{cIdx + 1}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {cat.items.map((item, sIdx) => {
                    const isHovered = hoveredItem === item.name;
                    return (
                      <div
                        key={sIdx}
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                          isHovered
                            ? 'bg-blue-50/80 border-blue-300 shadow-xs'
                            : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="p-1.5 rounded-lg bg-white shadow-xs">
                              {getTechIcon(item.icon)}
                            </span>
                            <span className="font-heading text-xs font-bold text-slate-900">
                              {item.name}
                            </span>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1 leading-snug pl-9">
                          {item.role}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
