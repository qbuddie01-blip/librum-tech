import React from 'react';
import type { PageRoute } from '../types';
import { ArrowRight, Phone, Mail, Sparkles, Shield, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';
import finalCtaBgImg from '../assets/final-cta-bg.jpg';

interface FinalCtaSectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onRouteChange }) => {
  return (
    <section id="final-cta-section" className="py-24 relative overflow-hidden bg-[#0A192F] text-white">
      
      {/* Background AI Touch Artwork with Deep Navy Ambient Blend */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <img 
          src={finalCtaBgImg} 
          alt="" 
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-40 mix-blend-screen scale-105 pointer-events-none"
          loading="lazy"
        />
        {/* Deep Navy Vignette & Edge Masks for Seamless Blending and Zero Edge Artifacts */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/60 to-[#0A192F] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-transparent to-[#0A192F] pointer-events-none" />
      </div>

      {/* Subtle Navy Gradient Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-heading font-semibold text-amber-400 mb-6 shadow-sm backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>START YOUR DIGITAL TRANSFORMATION</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Ready to automate<br />
          <span className="text-amber-400">your business workflows?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-sans">
          Book an executive consultation with our senior automation architects. We'll analyze your current processes and build a tailored automation blueprint for your organization.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onRouteChange('schedule-demo')}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>{COMPANY_CONFIG.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onRouteChange('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-white font-heading font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-800 backdrop-blur-xs"
          >
            <span>TALK TO AN ARCHITECT</span>
          </button>
        </div>

        {/* Contact Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-300">
          <a 
            href={`mailto:${COMPANY_CONFIG.email}`} 
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>{COMPANY_CONFIG.email}</span>
          </a>

          <a 
            href={`tel:${COMPANY_CONFIG.phoneClean}`} 
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{COMPANY_CONFIG.phone}</span>
          </a>

          <span className="flex items-center gap-2 text-slate-300">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Lagos HQ • Ikoyi</span>
          </span>

          <span className="flex items-center gap-2 text-slate-300">
            <Shield className="w-4 h-4 text-blue-400" />
            <span>Enterprise Data Security</span>
          </span>
        </div>

      </div>
    </section>
  );
};
