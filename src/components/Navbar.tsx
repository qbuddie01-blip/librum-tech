import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import type { PageRoute } from '../types';
import { Menu, X, Calendar, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
    ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 shadow-sm' 
    : 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3.5';

  const menuToggleIcon = mobileMenuOpen ? (
    <X className="w-6 h-6 text-slate-900" />
  ) : (
    <Menu className="w-6 h-6 text-slate-900" />
  );

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo 
            variant="full" 
            onClick={() => handleNavClick('home')} 
          />

          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-heading tracking-wide transition-all duration-200 relative group cursor-pointer ${
                    isActive 
                      ? 'text-blue-600 font-bold bg-blue-50/90' 
                      : 'text-slate-700 hover:text-blue-600 font-medium hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    {item.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    )}
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('schedule-demo')}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>SCHEDULE A DEMO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('schedule-demo')}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-heading text-[11px] font-bold tracking-wider uppercase cursor-pointer"
            >
              DEMO
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuToggleIcon}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white border-t border-slate-200 z-40 overflow-y-auto px-5 py-6 flex flex-col justify-between shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="space-y-1.5">
            <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-blue-600 flex items-center gap-1.5 border-b border-slate-100 pb-3 mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Navigation Menu</span>
            </div>

            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-heading text-sm tracking-wide transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 font-bold border border-blue-100' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.highlight && (
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                    {item.label}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-100 mt-6 space-y-3">
            <button
              onClick={() => handleNavClick('schedule-demo')}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>SCHEDULE AN EXECUTIVE CONSULTATION</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
