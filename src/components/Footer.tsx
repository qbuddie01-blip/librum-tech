import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import type { PageRoute } from '../types';
import { COMPANY_CONFIG } from '../config/constants';
import { MapPin, Mail, Phone, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';

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
    <footer className="relative bg-[#0a192f] border-t border-slate-800 text-slate-400 overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800 text-left">
          
          {/* Col 1: Brand & Positioning (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="footer" onClick={() => handleLinkClick('home')} />
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              {COMPANY_CONFIG.legalName} designs and deploys intelligent workflow automation and enterprise digital transformation systems for modern organizations.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 max-w-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Lagos HQ Time: <strong className="text-white">{lagosTime || 'WAT (UTC+1)'}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>NDPR & Enterprise Security Compliant</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleLinkClick('ai-automation')} className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>AI Workflow Automation</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('solutions')} className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>Enterprise Process Middleware</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('design')} className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>UI/UX & Digital Product Design</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('case-studies')} className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>Automation Blueprints</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>About Our Leadership</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Industry Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Hotel & Hospitality
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Hospitals & Clinical
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Schools & Academies
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Retail & Supermarkets
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Corporate Enterprise
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Innovation Hub
            </h4>
            <div className="space-y-2 text-xs leading-relaxed text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneClean}`} className="text-slate-300 hover:text-white transition-colors">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_CONFIG.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handleLinkClick('contact')} className="hover:text-amber-400 transition-colors cursor-pointer">
              Privacy & Data Policy
            </button>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-amber-400 transition-colors cursor-pointer">
              NDPR Compliance
            </button>
            <button onClick={() => handleLinkClick('schedule-demo')} className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer font-bold flex items-center gap-1">
              <span>Book Strategy Session</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
