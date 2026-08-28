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

const VALID_ROUTES: PageRoute[] = [
  'home',
  'ai-automation',
  'industries',
  'solutions',
  'design',
  'about',
  'case-studies',
  'schedule-demo',
  'contact',
  '404'
];

const getRouteFromUrl = (): PageRoute => {
  // 1. Primary check: clean browser pathname (e.g. /ai-automation or /)
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '').trim();
  
  if (!pathname || pathname === 'home' || pathname === 'index.html') {
    // Check if a legacy hash was passed (e.g. /#ai-automation) and normalize to clean URL
    const hash = window.location.hash.replace(/^#\/?/, '').trim();
    if (hash && VALID_ROUTES.includes(hash as PageRoute)) {
      try {
        window.history.replaceState({ route: hash }, '', `/${hash}`);
      } catch {
        // Fallback if history state restricted
      }
      return hash as PageRoute;
    }
    return 'home';
  }
  
  if (VALID_ROUTES.includes(pathname as PageRoute)) {
    return pathname as PageRoute;
  }
  
  // 2. Secondary fallback for hash navigation
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  if (hash && VALID_ROUTES.includes(hash as PageRoute)) {
    try {
      window.history.replaceState({ route: hash }, '', `/${hash}`);
    } catch {
      // Fallback
    }
    return hash as PageRoute;
  }

  return '404';
};

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getRouteFromUrl);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      const route = getRouteFromUrl();
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    const targetPath = route === 'home' ? '/' : `/${route}`;
    if (window.location.pathname !== targetPath) {
      try {
        window.history.pushState({ route }, '', targetPath);
      } catch {
        // Fallback for non-standard environments
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectIndustry = (industryId: string) => {
    setSelectedIndustryId(industryId);
    handleRouteChange('schedule-demo');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 flex flex-col justify-between selection:bg-amber-500/20 selection:text-amber-900">
      
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
            className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50 shadow-lg transition-all cursor-pointer hover:scale-110"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={() => handleRouteChange('schedule-demo')}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-slate-950" />
          <span>Demo</span>
        </button>
      </div>

    </div>
  );
};

export default App;
