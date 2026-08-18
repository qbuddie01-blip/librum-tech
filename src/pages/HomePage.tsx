import React from 'react';
import type { PageRoute } from '../types';
import { HeroSection } from '../components/HeroSection';
import { PositioningSection } from '../components/PositioningSection';
import { AiAutomationCoreSection } from '../components/AiAutomationCoreSection';
import { IndustrySection } from '../components/IndustrySection';
import { LiveAutomationSimulator } from '../components/LiveAutomationSimulator';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { RoiCalculatorSection } from '../components/RoiCalculatorSection';
import { AutomationArchitectureSection } from '../components/AutomationArchitectureSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { DesignServicesSection } from '../components/DesignServicesSection';
import { WhyLibrumSection } from '../components/WhyLibrumSection';
import { FinalCtaSection } from '../components/FinalCtaSection';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
  onSelectIndustry?: (industryId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange, onSelectIndustry }) => {
  return (
    <div className="w-full">
      {/* 01 — HERO SECTION */}
      <HeroSection 
        onRouteChange={onRouteChange} 
        onOpenSimulation={() => {
          const el = document.getElementById('live-simulation-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 02 — POSITIONING: YOUR BUSINESS HAS WORKFLOWS. LIBRUM MAKES THEM INTELLIGENT. */}
      <PositioningSection 
        onRouteChange={onRouteChange}
      />

      {/* 03 — AI AUTOMATION CORE (The Neural Engine) */}
      <AiAutomationCoreSection 
        onRouteChange={onRouteChange}
      />

      {/* 04 — WHAT CAN LIBRUM AUTOMATE? (Industry Automation Suites) */}
      <IndustrySection 
        onRouteChange={onRouteChange} 
        onSelectIndustry={onSelectIndustry}
      />

      {/* 05 — INTERACTIVE AI AUTOMATION SIMULATOR (Demonstration environment) */}
      <LiveAutomationSimulator 
        onScheduleDemo={() => onRouteChange('schedule-demo')} 
      />

      {/* 06 — HOW AI AUTOMATION WORKS (Understand → Design → Connect → Automate → Optimize) */}
      <HowItWorksSection 
        onRouteChange={onRouteChange} 
      />

      {/* 07 — ESTIMATED AUTOMATION PROJECTIONS (ROI Estimator) */}
      <RoiCalculatorSection 
        onRouteChange={onRouteChange} 
      />

      {/* 08 — AUTOMATION ARCHITECTURE (AI → Workflow → Systems → Departments → Actions) */}
      <AutomationArchitectureSection 
        onRouteChange={onRouteChange}
      />

      {/* 09 — FEATURED AUTOMATION CONCEPTS & BLUEPRINTS */}
      <CaseStudiesSection 
        onRouteChange={onRouteChange} 
      />

      {/* 10 — SUPPORTING DIGITAL DESIGN CAPABILITIES (UI/UX & Design) */}
      <DesignServicesSection 
        onRouteChange={onRouteChange} 
      />

      {/* 11 — WHY LIBRUM (Enterprise Pillars) */}
      <WhyLibrumSection />

      {/* 12 — FINAL CTA: READY TO AUTOMATE YOUR BUSINESS? */}
      <FinalCtaSection 
        onRouteChange={onRouteChange}
      />
    </div>
  );
};
