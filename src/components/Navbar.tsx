import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import type { PageRoute } from '../types';
import { Menu, X, Calendar, ArrowUpRight, ChevronRight, Phone, Mail, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems: { label: string; route: PageRoute; highlight?: boolean }[] = [
    { label: 'HOME', route: 'home' },
    { label: 'AI AUTOMATION', route: 'ai-automation', highlight: true },
    { label: 'INDUSTRIES', route: 'industries' },
    { label: 'SOLUTIONS', route: 'solutions' },
    { label: 'UI/UX & DESIGN', route: 'design' },
    { label: 'ABOUT US', route: 'about' },
    { label: 'CASE STUDIES', route: 'case-studies' },
    { label: 'CONTACT', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerClass = isScrolled 
    ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 py-3 shadow-2xl shadow-black/60' 
    : 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/40 py-4';

  const menuToggleIcon = mobileMenuOpen ? (
    <X className="w-6 h-6" />
  ) : (
    <Menu className="w-6 h-6" />
  );

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo 
            variant="compact" 
            onClick={() => handleNavClick('home')} 
          />

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={isActive ? 'px-3 py-1.5 rounded-lg text-xs xl:text-sm font-heading font-semibold tracking-wider transition-all duration-200 relative group cursor-pointer text-amber-400 bg-amber-500/10' : 'px-3 py-1.5 rounded-lg text-xs xl:text-sm font-heading font-medium tracking-wider transition-all duration-200 relative group cursor-pointer text-slate-300 hover:text-white hover:bg-slate-900/60'}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    {item.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    )}
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('schedule-demo')}
              className="relative group overflow-hidden rounded-xl p-px font-heading text-xs uppercase tracking-wider font-semibold cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative flex items-center gap-2 px-4 py-2.5 rounded-[11px] bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all">
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>SCHEDULE A DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('schedule-demo')}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-heading text-[11px] font-bold tracking-wider uppercase cursor-pointer"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {menuToggleIcon}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-slate-950 backdrop-blur-2xl border-t border-slate-800 z-40 overflow-y-auto px-5 py-6 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="space-y-2">
            <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-3 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Navigation Menu</span>
            </div>

            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={isActive ? 'w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-heading text-sm tracking-wider transition-all cursor-pointer bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30' : 'w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-heading text-sm tracking-wider transition-all cursor-pointer text-slate-300 hover:bg-slate-900 hover:text-white'}
                >
                  <span className="flex items-center gap-2">
                    {item.highlight && (
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    )}
                    {item.label}
                  </span>
                  <ChevronRight className={isActive ? 'w-4 h-4 text-amber-400' : 'w-4 h-4 text-slate-600'} />
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800 mt-6 space-y-4">
            <button
              onClick={() => handleNavClick('ai-automation')}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/20 cursor-pointer"
            >
              <span>AUTOMATE YOUR BUSINESS</span>
            </button>

            <button
              onClick={() => handleNavClick('schedule-demo')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-heading font-semibold text-xs tracking-wider uppercase hover:border-amber-500/40 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>SCHEDULE A DEMO</span>
            </button>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5 font-mono">
              <a href={'tel:' + COMPANY_CONFIG.phoneClean} className="flex items-center gap-2 hover:text-amber-400">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                {COMPANY_CONFIG.phone}
              </a>
              <a href={'mailto:' + COMPANY_CONFIG.email} className="flex items-center gap-2 hover:text-amber-400">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                {COMPANY_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
