export type PageRoute = 
  | 'home'
  | 'ai-automation'
  | 'industries'
  | 'solutions'
  | 'design'
  | 'about'
  | 'case-studies'
  | 'schedule-demo'
  | 'contact'
  | '404';

export interface IndustryData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  ctaText: string;
  problem: string;
  automation: string;
  impact: string;
  automations: string[];
  workflowStages: {
    from: string;
    action: string;
    to: string;
  }[];
  keyBenefits: {
    metric: string;
    label: string;
  }[];
}

export interface SimulationStep {
  id: string | number;
  stepNumber?: number;
  label: string;
  actor: string;
  action: string;
  detail: string;
  timeMs: number;
  status?: 'idle' | 'processing' | 'completed';
}

export interface SimulationScenario {
  id: string;
  name: string;
  industry: string;
  iconName: string;
  initialTrigger: string;
  expectedOutcome: string;
  steps: SimulationStep[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  tag: string;
  isConceptBlueprint?: boolean;
  category: 'Verified Case Study' | 'Featured Automation Concept' | 'Featured Solution Concept' | 'Illustrative Automation Scenario' | 'Automation Demonstration';
  problem: string;
  solution: string;
  results: {
    label: string;
    value: string;
    isIllustrative?: boolean;
  }[];
  technologies: string[];
  architectureFlow: string[];
  image: string;
}

export interface TechStackCategory {
  category: string;
  description: string;
  items: {
    name: string;
    role: string;
    icon: string;
  }[];
}

export interface ServiceOffering {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  deliverables: string[];
  impact: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
}

export interface DemoBookingForm {
  name: string;
  organization: string;
  email: string;
  phone: string;
  industry: string;
  preferredDate: string;
  preferredTime: string;
  automationFocus: string;
  teamSize: string;
  additionalNotes?: string;
}

export interface ContactForm {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  serviceRequired: string;
  organizationSize: string;
  automationNeed: string;
  message?: string;
}
