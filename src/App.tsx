import React, { useState, useEffect } from 'react';
import type { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SeoHead } from './components/SeoHead';
import { HomePage } from './pages/HomePage';
import { AiAutomationPage } from './pages/AiAutomationPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { DesignServicesPage } from './pages/DesignServicesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ScheduleDemoPage } from './pages/ScheduleDemoPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ArrowUp, Calendar } from 'lucide-react';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectIndustry = (industryId: string) => {
    setSelectedIndustryId(industryId);
    setCurrentRoute('schedule-demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Dynamic SEO Head and Structured Data */}
      <SeoHead currentRoute={currentRoute} />

      {/* Sticky Top Navigation */}
      <Navbar 
        currentRoute={currentRoute} 
        onRouteChange={handleRouteChange} 
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1 w-full" id="main-content">
        {currentRoute === 'home' && (
          <HomePage 
            onRouteChange={handleRouteChange} 
            onSelectIndustry={handleSelectIndustry}
          />
        )}

        {currentRoute === 'ai-automation' && (
          <AiAutomationPage 
            onRouteChange={handleRouteChange} 
          />
        )}

        {currentRoute === 'industries' && (
          <IndustriesPage 
            onRouteChange={handleRouteChange} 
            selectedIndustryId={selectedIndustryId}
          />
        )}

        {currentRoute === 'solutions' && (
          <SolutionsPage 
            onRouteChange={handleRouteChange} 
          />
        )}

        {currentRoute === 'design' && (
          <DesignServicesPage 
            onRouteChange={handleRouteChange} 
          />
        )}

        {currentRoute === 'about' && (
          <AboutUsPage 
            onRouteChange={handleRouteChange} 
          />
        )}

        {currentRoute === 'case-studies' && (
          <CaseStudiesPage 
            onRouteChange={handleRouteChange} 
          />
        )}

        {currentRoute === 'schedule-demo' && (
          <ScheduleDemoPage 
            onRouteChange={handleRouteChange} 
            preselectedIndustry={selectedIndustryId}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage 
            onRouteChange={handleRouteChange} 
          />
        )}

        {currentRoute === '404' && (
          <NotFoundPage 
            onRouteChange={handleRouteChange} 
          />
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer onRouteChange={handleRouteChange} />

      {/* Floating Quick Action Hub */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900/90 border border-slate-700 text-amber-400 hover:text-white hover:bg-slate-800 shadow-xl backdrop-blur-md transition-all cursor-pointer hover:scale-110 focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={() => handleRouteChange('schedule-demo')}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer border border-amber-300/40 focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <Calendar className="w-4 h-4 text-slate-950" />
          <span>Demo</span>
        </button>
      </div>

    </div>
  );
};

export default App;
