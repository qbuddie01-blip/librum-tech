import React from 'react';
import type { PageRoute } from '../types';
import { ArrowRight, Phone, Mail, Sparkles, Shield, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface FinalCtaSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onRouteChange }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#050b18] to-[#020617] border-t border-slate-800">
      {/* Dynamic Cosmic Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START YOUR DIGITAL TRANSFORMATION</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
          READY TO AUTOMATE<br />
          <span className="gold-gradient-text">YOUR BUSINESS?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Book a strategy session with our senior automation architects. We'll analyze your current operations and build a tailored automation blueprint for your organization.
        </p>

        {/* Primary and Secondary Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-sm uppercase tracking-wider shadow-2xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>{COMPANY_CONFIG.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-400 text-white font-heading font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-800"
          >
            <span>{COMPANY_CONFIG.secondaryCta}</span>
          </button>
        </div>

        {/* Quick Contact & Guarantees Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
          <a href={`tel:${COMPANY_CONFIG.phoneClean}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{COMPANY_CONFIG.phone}</span>
          </a>

          <a href={`mailto:${COMPANY_CONFIG.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Mail className="w-4 h-4 text-amber-400" />
            <span>{COMPANY_CONFIG.email}</span>
          </a>

          <div className="flex items-center gap-2 text-slate-400">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>NDPR & Enterprise Security Compliant</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>24-Hour Response SLA</span>
          </div>
        </div>

      </div>
    </section>
  );
};
