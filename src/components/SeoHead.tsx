import React, { useEffect } from 'react';
import type { PageRoute } from '../types';
import { COMPANY_CONFIG } from '../config/constants';

interface SeoHeadProps {
  currentRoute: PageRoute;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ currentRoute }) => {
  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      'home': `${COMPANY_CONFIG.shortName} | AI Automation & Digital Transformation`,
      'ai-automation': `Intelligent AI Automation Systems | ${COMPANY_CONFIG.shortName}`,
      'industries': `Industry Automation Solutions | Hospitality, Healthcare, Retail | ${COMPANY_CONFIG.shortName}`,
      'solutions': `Enterprise Solutions & ERP Integration | ${COMPANY_CONFIG.shortName}`,
      'design': `UI/UX & Digital Product Design Studio | ${COMPANY_CONFIG.shortName}`,
      'about': `About Us & Leadership | ${COMPANY_CONFIG.shortName}`,
      'case-studies': `Featured Automation Concepts & Blueprints | ${COMPANY_CONFIG.shortName}`,
      'schedule-demo': `Request a Live Automation Demo | ${COMPANY_CONFIG.shortName}`,
      'contact': `Contact Us | Ikoyi, Lagos Headquarters | ${COMPANY_CONFIG.shortName}`,
      '404': `404 - Page Not Found | ${COMPANY_CONFIG.shortName}`,
    };

    const descriptions: Record<PageRoute, string> = {
      'home': 'Librum Technologies transforms complex business workflows into intelligent, automated systems powered by AI for hotels, healthcare, retail, and enterprises.',
      'ai-automation': 'Explore the 4-layer Librum neural architecture: Omnichannel Ingestion, Multi-Agent AI Core, Workflow Routing Matrix, and Bi-Directional ERP Sync.',
      'industries': 'Sector-specific AI automation suites engineered for hospitality, healthcare, education, retail, and corporate enterprise operations.',
      'solutions': 'Zero-disruption enterprise process automation connecting seamlessly with Opera PMS, SAP, Oracle NetSuite, Odoo, and custom databases.',
      'design': 'World-class digital product design, high-volume operational interfaces, mobile staff terminals, and accessible design systems.',
      'about': 'Headquartered in Ikoyi, Lagos, Librum Technologies engineers autonomous workflows and digital transformation for African and global leaders.',
      'case-studies': 'Examine our architectural concepts and illustrative benchmark blueprints across hospitality, retail supply chains, and clinical healthcare.',
      'schedule-demo': 'Request an executive consultation and tailored live simulation demonstration with our senior automation solution architects.',
      'contact': 'Connect directly with Librum Technologies Limited at our Ikoyi, Lagos headquarters or dispatch an encrypted inquiry online.',
      '404': 'The requested operational route or page was not found on the Librum Technologies network.',
    };

    document.title = titles[currentRoute] || titles.home;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[currentRoute] || descriptions.home);
    }

    let scriptTag = document.getElementById('librum-schema-structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'librum-schema-structured-data';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': COMPANY_CONFIG.legalName,
      'alternateName': COMPANY_CONFIG.shortName,
      'url': COMPANY_CONFIG.websiteUrl,
      'logo': `${COMPANY_CONFIG.websiteUrl}/librum-logo.png`,
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': COMPANY_CONFIG.phone,
        'contactType': 'customer service',
        'email': COMPANY_CONFIG.email,
        'areaServed': ['NG', 'Africa', 'Global'],
        'availableLanguage': ['English', 'Yoruba', 'Igbo', 'Hausa', 'French']
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '65, Normal Williams Street, Off Awolowo Way',
        'addressLocality': 'Ikoyi',
        'addressRegion': 'Lagos State',
        'postalCode': '101233',
        'addressCountry': 'NG'
      },
      'sameAs': [
        COMPANY_CONFIG.socialLinks.linkedin,
        COMPANY_CONFIG.socialLinks.twitter,
        COMPANY_CONFIG.socialLinks.whatsapp
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [currentRoute]);

  return null;
};
