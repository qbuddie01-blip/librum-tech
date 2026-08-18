import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import type { PageRoute } from '../types';
import { COMPANY_CONFIG } from '../config/constants';
import { MapPin, Mail, Phone, Globe, Clock } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  const [lagosTime, setLagosTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: COMPANY_CONFIG.timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
        setLagosTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
      } catch {
        setLagosTime('WAT (UTC+1)');
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLinkClick = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020617] border-t border-slate-800/80 text-slate-400 overflow-hidden">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80 text-left">
          
          {/* Col 1: Brand & Positioning (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="footer" onClick={() => handleLinkClick('home')} />
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              {COMPANY_CONFIG.legalName} engineers intelligent AI workflow automation systems and enterprise digital transformation architectures for commercial and institutional leaders.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 max-w-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Lagos HQ Time: <strong className="text-white">{lagosTime || 'WAT (UTC+1)'}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>AI Automation Gateway Active (99.99% Cloud SLA)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              AI Solutions
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button onClick={() => handleLinkClick('ai-automation')} className="hover:text-white transition-colors cursor-pointer text-left">
                  AI Workflow Engine
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Hospitality Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Clinical Healthcare
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Retail Auto-Stock
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-white transition-colors cursor-pointer text-left">
                  School Admissions
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('solutions')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Enterprise ERP Sync
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Design (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Librum
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('design')} className="hover:text-white transition-colors cursor-pointer text-left">
                  UI/UX & Digital Design
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('case-studies')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Featured Concepts
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('schedule-demo')} className="text-amber-400 font-semibold hover:underline transition-all cursor-pointer text-left">
                  Request a Demo →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Headquarters & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-amber-400 transition-colors font-mono">
                  {COMPANY_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneClean}`} className="hover:text-amber-400 transition-colors font-mono">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={COMPANY_CONFIG.websiteUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors font-mono">
                  {COMPANY_CONFIG.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_CONFIG.legalName}. All rights reserved. Registered in Nigeria.
          </div>

          <div className="text-center md:text-right max-w-xl text-[10px] text-slate-400">
            * Disclaimer: Case study metrics and savings calculator figures represent illustrative benchmarks and projected modeling based on user assumptions.
          </div>
        </div>

      </div>
    </footer>
  );
};
