import React from 'react';
import type { PageRoute } from '../types';
import { ArrowRight, Phone, Mail, Sparkles, Shield, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';
import back10Img from '../assets/back-10.jpg';

interface FinalCtaSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onRouteChange }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800">
      
      {/* ── BACKGROUND LAYER: back-10 DIGITAL NEURAL INTELLIGENCE SILHOUETTE WITH SEAMLESS COSMIC BLEND ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <img 
          src={back10Img} 
          alt="Librum Neural AI Transformation Core"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-120 saturate-110 opacity-70 sm:opacity-80"
          loading="lazy"
        />
        {/* Seamless Dark Cosmic Blending Overlays for 100% Readability Across Mobile, Tablet & Desktop */}
        <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-slate-950/50 to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-transparent to-[#020617]/90" />
        
        {/* Ambient Neural Core Glow Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-amber-500/15 rounded-full blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-4 right-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-amber-500/40 text-xs font-mono text-amber-300 mb-6 shadow-2xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>START YOUR DIGITAL TRANSFORMATION</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
          READY TO AUTOMATE<br />
          <span className="gold-gradient-text drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">YOUR BUSINESS?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
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
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-400 text-white font-heading font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-800 backdrop-blur-md shadow-xl"
          >
            <span>{COMPANY_CONFIG.secondaryCta}</span>
          </button>
        </div>

        {/* Quick Contact & Guarantees Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-slate-300">
          <a href={`tel:${COMPANY_CONFIG.phoneClean}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{COMPANY_CONFIG.phone}</span>
          </a>

          <a href={`mailto:${COMPANY_CONFIG.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Mail className="w-4 h-4 text-amber-400" />
            <span>{COMPANY_CONFIG.email}</span>
          </a>

          <div className="flex items-center gap-2 text-slate-300">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>NDPR & Enterprise Security Compliant</span>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>24-Hour Response SLA</span>
          </div>
        </div>

      </div>
    </section>
  );
};
