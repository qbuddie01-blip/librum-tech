import type { 
  IndustryData, 
  SimulationScenario, 
  CaseStudy, 
  TechStackCategory, 
  ServiceOffering 
} from '../types';
import { COMPANY_CONFIG } from '../config/constants';

export const HERO_TAGLINE = 'LIBRUM AUTOMATES THE WAY YOUR BUSINESS WORKS.';
export const HERO_SUBTITLE = 'Transform complex business workflows into intelligent, automated systems powered by AI.';

export const POSITIONING_HEADLINE = 'YOUR BUSINESS HAS WORKFLOWS. LIBRUM MAKES THEM INTELLIGENT.';

// 6 Core Problem-Automation-Impact Industry Suites
export const INDUSTRIES: IndustryData[] = [
  {
    id: 'hospitality',
    title: 'Hotel & Hospitality Operations',
    subtitle: 'Guest Request Routing & Property Management Sync',
    description: 'Transform guest touchpoints into organized operational actions. When a guest requests extra amenities or late check-out via WhatsApp or mobile QR, Librum checks room status, routes tasks to duty staff, and updates records without front-desk delays.',
    problem: 'Guests wait on front desk phone queues, housekeeping assignments lag across shifts, and room service billings fail to reconcile with POS.',
    automation: 'Direct WhatsApp guest request triage, instant task routing to duty staff, and live property management system billing synchronization.',
    impact: 'Accelerated request response turnaround, reduced front-desk phone congestion, and dependable billing synchronization across guest outlets.',
    badge: 'Hospitality Architecture',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: 'Fast', label: 'Task Dispatch' },
      { metric: 'Accurate', label: 'Folio Sync' },
      { metric: '24/7', label: 'Multilingual Concierge' }
    ],
    automations: [
      'WhatsApp & QR Guest Room Service Dispatch',
      'Duty Staff Mobile Task Queuing',
      'Automated Housekeeping Status & Turn-Down Sync',
      'Direct Property Management Folio & Ledger Billing',
      'Multilingual VIP Guest Preference Memory'
    ],
    workflowStages: [
      { from: 'Guest WhatsApp / QR', action: 'Natural Language Intent Parsing', to: 'AI Agent' },
      { from: 'AI Agent', action: 'Property Management Status Check', to: 'PMS Database' },
      { from: 'AI Agent', action: 'Proximity Task Push', to: 'Duty Staff Interface' },
      { from: 'Duty Staff Completion', action: 'Real-time Billing Sync', to: 'PMS Ledger' }
    ],
    ctaText: 'EXPLORE HOSPITALITY SOLUTIONS →'
  },
  {
    id: 'healthcare',
    title: 'Hospitals & Healthcare Clinics',
    subtitle: 'Streamlined Triage, Clinical Queue Routing & Lab Sync',
    description: 'Reduce patient intake delays and clinical administrative strain. Librum triages incoming symptoms, schedules specialist appointments, synchronizes patient records with electronic medical records, and delivers test notifications securely to physicians.',
    problem: 'Overcrowded triage desks, manual paper file retrieval, delayed lab result alerts, and missed appointment schedules.',
    automation: 'Instant digital symptom intake, smart specialty routing, automated record retrieval, and critical lab alert routing to physicians.',
    impact: 'Dramatically reduced waiting room congestion, faster emergency prioritization, and well-organized digital health records.',
    badge: 'Clinical Healthcare Suite',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: 'Streamlined', label: 'Patient Intake' },
      { metric: 'Accurate', label: 'Record Matching' },
      { metric: 'Real-time', label: 'Critical Notifications' }
    ],
    automations: [
      'Structured Symptom & Urgency Triage',
      'Specialist Schedule & Calendar Auto-Booking',
      'Electronic Medical Record (EMR) Auto-Fetch',
      'Critical Diagnostic & Lab Result Alerts',
      'Automated Follow-up Reminders'
    ],
    workflowStages: [
      { from: 'Patient Portal / WhatsApp', action: 'Symptom Triage Intake', to: 'Clinical AI' },
      { from: 'Clinical AI', action: 'Triage Urgency Scoring', to: 'Duty Doctor Queue' },
      { from: 'Diagnostic Lab', action: 'Priority Result Flagging', to: 'Specialist Push Notification' },
      { from: 'Consultation', action: 'Encrypted Medical Record Sync', to: 'Hospital EMR' }
    ],
    ctaText: 'EXPLORE HEALTHCARE SOLUTIONS →'
  },
  {
    id: 'education',
    title: 'Schools & Educational Academies',
    subtitle: 'Automated Admissions, Fee Reconciliation & Parent Portals',
    description: 'Free academic leadership and administrators from repetitive paperwork. Librum automates prospective student inquiries, admissions document verification, bank fee reconciliation, and scheduled parent academic progress alerts.',
    problem: 'Manual verification of thousands of admission forms, slow bank transfer fee reconciliation, and disconnected parent communication.',
    automation: 'Automated document processing, bank payment ledger matching, student record updates, and structured parent WhatsApp notifications.',
    impact: 'Streamlined enrollment cycles, reduced reconciliation errors, and clear communication between school leadership and parents.',
    badge: 'Education Academy Suite',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: 'Paperless', label: 'Admissions Workflow' },
      { metric: 'Verified', label: 'Fee Reconciliation' },
      { metric: 'Timely', label: 'Parent Updates' }
    ],
    automations: [
      '24/7 Prospective Student Admissions Inquiries',
      'Document & Transcript Processing',
      'Bank Transfer & Tuition Ledger Reconciliation',
      'Automated Parent WhatsApp Attendance & Grade Alerts',
      'Alumni Portal & Transcript Request Management'
    ],
    workflowStages: [
      { from: 'Parent / Applicant', action: 'Application & Proof of Payment', to: 'Admissions AI' },
      { from: 'Admissions AI', action: 'Bank Verification Query', to: 'Finance Ledger' },
      { from: 'Admissions AI', action: 'Transcript Data Extraction', to: 'Student Database' },
      { from: 'Registry', action: 'Admission Letter Generation', to: 'Parent Notification' }
    ],
    ctaText: 'EXPLORE EDUCATION SOLUTIONS →'
  },
  {
    id: 'retail',
    title: 'Retail Stores & Supermarket Chains',
    subtitle: 'Multi-Branch Inventory Synchronization & Supplier Orders',
    description: 'Reduce stock-outs, inventory shrinkage, and checkout bottlenecks. Librum tracks item depletion across point-of-sale terminals, generates supplier purchase orders when inventory dips below thresholds, and supports delivery logistics.',
    problem: 'Unexpected stockouts on fast-moving goods, delayed manual supplier purchase orders, and mismatched inventory between online and in-store.',
    automation: 'Real-time multi-branch stock tracking, threshold-based purchase order creation, and delivery coordination workflows.',
    impact: 'Fewer stock-outs, better inventory turnover, and efficient order fulfillment across retail locations.',
    badge: 'Retail Commerce Suite',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: 'Reduced', label: 'Stockout Risks' },
      { metric: 'Live', label: 'Multi-Store Sync' },
      { metric: 'Automated', label: 'Supplier PO Trigger' }
    ],
    automations: [
      'Multi-Branch Point-of-Sale Real-Time Sync',
      'Reordering & Supplier Purchase Order Generation',
      'Omnichannel Order Routing & Delivery Coordination',
      'Automated Digital Receipts & Customer Updates',
      'Inventory Discrepancy Anomaly Flagging'
    ],
    workflowStages: [
      { from: 'POS Register Barcode Scan', action: 'Inventory Decrement', to: 'Retail Engine' },
      { from: 'Retail Engine', action: 'Reorder Threshold Evaluation', to: 'Inventory Database' },
      { from: 'Retail Engine', action: 'Purchase Order Generation', to: 'Supplier Interface' },
      { from: 'Supplier Dispatch', action: 'Delivery Notice', to: 'Branch Manager Interface' }
    ],
    ctaText: 'EXPLORE RETAIL SOLUTIONS →'
  },
  {
    id: 'enterprise',
    title: 'Corporate & Enterprise Logistics',
    subtitle: 'Automated Invoicing, Vendor Approvals & Executive Reporting',
    description: 'Improve operational efficiency by automating internal procurement, invoice audit workflows, employee onboarding tasks, and cross-departmental reporting.',
    problem: 'Multi-week invoice approval delays, manual spreadsheets across finance and operations, and disconnected procurement approvals.',
    automation: 'Automated 3-way invoice matching, rule-based managerial approval routing, and live operational status dashboards.',
    impact: 'Faster invoice processing, reduced payment delays, and clear operational visibility for executive leadership.',
    badge: 'Enterprise Corporate Suite',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: 'Fast', label: 'Invoice Cycles' },
      { metric: 'Clear', label: 'Audit Trail' },
      { metric: 'Automated', label: 'Manager Sign-Offs' }
    ],
    automations: [
      'Automated 3-Way Invoice & PO Matching',
      'Executive Approval Escalation Matrix',
      'Vendor Onboarding & Compliance Verification',
      'Cross-Departmental KPI Dashboard Sync',
      'Payroll & Expense Reimbursement Routing'
    ],
    workflowStages: [
      { from: 'Vendor Invoice Ingestion', action: 'Line Item Extraction', to: 'Finance AI' },
      { from: 'Finance AI', action: '3-Way PO & Delivery Match', to: 'ERP Accounts Payable' },
      { from: 'Finance AI', action: 'Manager Authorization Request', to: 'Executive Interface' },
      { from: 'Manager Sign-off', action: 'Payment Schedule Trigger', to: 'Banking Interface' }
    ],
    ctaText: 'EXPLORE ENTERPRISE SOLUTIONS →'
  },
  {
    id: 'custom',
    title: 'Custom Proprietary Workflows',
    subtitle: 'Bespoke AI Architecture for Unique Operational Requirements',
    description: 'Every enterprise has specialized operational processes. We architect bespoke automation workflows that connect proprietary internal software, legacy databases, and custom communication channels.',
    problem: 'Off-the-shelf software fails to accommodate specialized business rules, proprietary operational steps, or unique compliance requirements.',
    automation: 'Custom-engineered event triggers, tailored machine learning classifiers, and secure bespoke API connectors.',
    impact: 'Tailored technology built around your exact commercial logic, with no unnecessary features or workflow disruptions.',
    badge: 'Custom Architecture Suite',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: '100%', label: 'Custom Tailored' },
      { metric: 'Seamless', label: 'Legacy Integration' },
      { metric: 'Direct', label: 'Operational Support' }
    ],
    automations: [
      'Bespoke Business Logic Event Handlers',
      'Proprietary Database Integration Adapters',
      'Multi-Party Approval Chains',
      'Custom Staff & Customer Interfaces',
      'Private Cloud & Dedicated Infrastructure Options'
    ],
    workflowStages: [
      { from: 'Custom Business Trigger', action: 'Proprietary Event Ingestion', to: 'Custom AI Engine' },
      { from: 'Custom AI Engine', action: 'Business Logic Evaluation', to: 'Internal Microservices' },
      { from: 'Custom AI Engine', action: 'Action Dispatch & Notifications', to: 'Field Teams / Clients' },
      { from: 'Pipeline Complete', action: 'Encrypted Audit Logging', to: 'Enterprise Database' }
    ],
    ctaText: 'DISCUSS CUSTOM WORKFLOWS →'
  }
];

// 5 Interactive Simulation Scenarios
export const SIMULATION_SCENARIOS: SimulationScenario[] = [
  {
    id: 'hotel-service',
    name: 'Hospitality Scenario: Guest Request & Late Checkout Workflow',
    industry: 'Hospitality & Hotels',
    iconName: 'Hotel',
    initialTrigger: 'Guest in Suite 402 sends WhatsApp: "Can we get 2 extra pool towels and extend check-out to 2 PM?"',
    steps: [
      {
        id: 's1',
        stepNumber: 1,
        label: 'TRIGGER',
        actor: 'Communication Gateway',
        action: 'Ingests WhatsApp message payload and identifies guest profile.',
        detail: 'Message parsed: Guest Suite 402 identified via reservation phone number.',
        timeMs: 45
      },
      {
        id: 's2',
        stepNumber: 2,
        label: 'AI ANALYSIS',
        actor: 'Workflow Intent Engine',
        action: 'Segments multi-intent request into distinct workflow tickets.',
        detail: 'Intent 1: Amenity Request (2x Pool Towels) | Intent 2: Folio Amendment (Late Checkout 2:00 PM).',
        timeMs: 120
      },
      {
        id: 's3',
        stepNumber: 3,
        label: 'DECISION',
        actor: 'PMS Policy & Availability Check',
        action: 'Queries property management system for Room 402 departure schedule.',
        detail: 'Next guest arrival for Room 402 is 4:30 PM. 2:00 PM late check-out approved based on hotel rules.',
        timeMs: 210
      },
      {
        id: 's4',
        stepNumber: 4,
        label: 'SYSTEM INTEGRATION',
        actor: 'PMS & Duty Queue Router',
        action: 'Updates property management system and routes towel request to housekeeping staff.',
        detail: 'Staff alert dispatched: "Suite 402 - 2x Pool Towels (High Priority). Deliver within 10 mins."',
        timeMs: 310
      },
      {
        id: 's5',
        stepNumber: 5,
        label: 'ACTION',
        actor: 'Guest Messaging Service',
        action: 'Sends automated, polite WhatsApp confirmation to guest.',
        detail: '"Good afternoon Mr. Adeleke. 2 pool towels are on the way to Suite 402, and your checkout is confirmed for 2:00 PM. Enjoy your stay!"',
        timeMs: 430
      }
    ],
    expectedOutcome: 'Illustrative Outcome: Guest request resolved quickly with zero front-desk phone calls, clear staff routing, and updated property management records.'
  },
  {
    id: 'hospital-triage',
    name: 'Healthcare Scenario: Clinic Intake & Priority Lab Alert Workflow',
    industry: 'Healthcare & Clinical',
    iconName: 'Activity',
    initialTrigger: 'Patient checks in via mobile kiosk with severe chest pain and elevated pulse.',
    steps: [
      {
        id: 's1',
        stepNumber: 1,
        label: 'TRIGGER',
        actor: 'Intake Registration Service',
        action: 'Captures vital signs and symptom description from digital kiosk.',
        detail: 'Patient flagged: Blood pressure 165/105, chest pain duration 45 minutes.',
        timeMs: 40
      },
      {
        id: 's2',
        stepNumber: 2,
        label: 'AI ANALYSIS',
        actor: 'Clinical Urgency Evaluator',
        action: 'Evaluates symptom combinations against clinical triage protocols.',
        detail: 'High-acuity triage alert generated. Assigned priority Level 1 (Immediate Attention).',
        timeMs: 110
      },
      {
        id: 's3',
        stepNumber: 3,
        label: 'DECISION',
        actor: 'Bed & Physician Assignment Engine',
        action: 'Checks cardiology duty roster and emergency bay availability.',
        detail: 'Emergency Bay 3 assigned. On-duty physician Dr. Kalu alerted.',
        timeMs: 190
      },
      {
        id: 's4',
        stepNumber: 4,
        label: 'SYSTEM INTEGRATION',
        actor: 'EMR System Sync',
        action: 'Pre-populates patient medical history, allergies, and current triage report.',
        detail: 'Chart opened on Dr. Kalu\'s tablet with relevant cardiac history highlighted.',
        timeMs: 290
      },
      {
        id: 's5',
        stepNumber: 5,
        label: 'ACTION',
        actor: 'Emergency Team Dispatch',
        action: 'Dispatches nurse preparation order and priority ECG order.',
        detail: 'Nurse station notified to transfer patient directly to Bay 3.',
        timeMs: 390
      }
    ],
    expectedOutcome: 'Illustrative Outcome: Emergency triage routed to attending physician in under 1 second with pre-populated health records.'
  },
  {
    id: 'retail-replenish',
    name: 'Retail Scenario: Multi-Branch Inventory Reorder Workflow',
    industry: 'Retail & Supermarkets',
    iconName: 'ShoppingBag',
    initialTrigger: 'Victoria Island branch checkout scans 4 cartons of organic milk, reducing stock to 6 units (Threshold: 10).',
    steps: [
      {
        id: 's1',
        stepNumber: 1,
        label: 'TRIGGER',
        actor: 'POS Register Event Handler',
        action: 'Streams barcode scan sale event to central inventory system.',
        detail: 'SKU #LBR-8821 (Organic Milk 1L) stock updated to 6 units.',
        timeMs: 30
      },
      {
        id: 's2',
        stepNumber: 2,
        label: 'AI ANALYSIS',
        actor: 'Inventory Trend Model',
        action: 'Analyzes weekend sales trends, lead time from central warehouse, and promotional demand.',
        detail: 'Calculates reorder requirement: 50 cartons needed by Saturday 08:00 AM.',
        timeMs: 100
      },
      {
        id: 's3',
        stepNumber: 3,
        label: 'DECISION',
        actor: 'Supplier Allocation Engine',
        action: 'Evaluates supplier contract pricing, available stock, and delivery delivery terms.',
        detail: 'Approved supplier selected with verified delivery schedule.',
        timeMs: 180
      },
      {
        id: 's4',
        stepNumber: 4,
        label: 'SYSTEM INTEGRATION',
        actor: 'Enterprise ERP Bridge',
        action: 'Generates purchase order #PO-2026-441 and logs accounts payable commitment.',
        detail: 'ERP ledger updated; PO dispatched to supplier system.',
        timeMs: 270
      },
      {
        id: 's5',
        stepNumber: 5,
        label: 'ACTION',
        actor: 'Logistics Notification Service',
        action: 'Sends delivery confirmation and receiving schedule to branch inventory manager.',
        detail: 'Store manager app notified: "Milk restock scheduled for Friday 6:00 PM."',
        timeMs: 360
      }
    ],
    expectedOutcome: 'Illustrative Outcome: Automated reorder created without manual counting, preventing stockouts and ensuring smooth store replenishment.'
  },
  {
    id: 'school-admissions',
    name: 'Education Scenario: Admissions & Fee Verification Workflow',
    industry: 'Schools & Academies',
    iconName: 'GraduationCap',
    initialTrigger: 'Parent submits online Grade 10 application and uploads bank transfer payment receipt.',
    steps: [
      {
        id: 's1',
        stepNumber: 1,
        label: 'TRIGGER',
        actor: 'Admissions Portal Ingest',
        action: 'Receives application data and document attachments.',
        detail: 'Applicant: Kemi Adeleke. Grade: 10. Attachment: Bank Transfer Receipt.',
        timeMs: 50
      },
      {
        id: 's2',
        stepNumber: 2,
        label: 'AI ANALYSIS',
        actor: 'Document & Payment Verification Agent',
        action: 'Extracts details from receipt and verifies bank transaction reference with finance ledger.',
        detail: 'Payment verification matched: Application fee confirmed in school ledger.',
        timeMs: 140
      },
      {
        id: 's3',
        stepNumber: 3,
        label: 'DECISION',
        actor: 'Class Capacity Evaluation',
        action: 'Checks Grade 10 classroom seat quota and evaluates entrance scores.',
        detail: 'Criteria met. Space confirmed in Grade 10 Science stream.',
        timeMs: 240
      },
      {
        id: 's4',
        stepNumber: 4,
        label: 'SYSTEM INTEGRATION',
        actor: 'School Information System (SIS)',
        action: 'Generates Student ID and provisions preliminary student profile.',
        detail: 'Student record created in SIS database and linked to parent contact profile.',
        timeMs: 350
      },
      {
        id: 's5',
        stepNumber: 5,
        label: 'ACTION',
        actor: 'Parent Communication Service',
        action: 'Issues official admission letter, payment receipt, and onboarding pack to parent.',
        detail: 'Parent receives WhatsApp notification: "Kemi is registered for Grade 10-A. Student ID: LBR-2026-042."',
        timeMs: 470
      }
    ],
    expectedOutcome: 'Illustrative Outcome: Admissions application and payment verification processed smoothly without manual paper handling.'
  },
  {
    id: 'corporate-invoice',
    name: 'Enterprise Scenario: 3-Way Invoice Match & Manager Approval Workflow',
    industry: 'Corporate & Logistics',
    iconName: 'Cpu',
    initialTrigger: 'Vendor sends server infrastructure invoice via email to accounts payable inbox.',
    steps: [
      {
        id: 's1',
        stepNumber: 1,
        label: 'TRIGGER',
        actor: 'Email Ingestion Service',
        action: 'Extracts invoice attachment, parses sender details, and verifies security credentials.',
        detail: 'Vendor: Cloud Infrastructure Ltd. Invoice Reference: #INV-2026-901.',
        timeMs: 35
      },
      {
        id: 's2',
        stepNumber: 2,
        label: 'AI ANALYSIS',
        actor: 'Document Understanding Engine',
        action: 'Extracts line items, tax breakdowns, and bank payment details.',
        detail: 'Total amount: ₦4,200,000. Tax details extracted and verified.',
        timeMs: 130
      },
      {
        id: 's3',
        stepNumber: 3,
        label: 'DECISION',
        actor: '3-Way Match Verification Engine',
        action: 'Cross-references invoice with Purchase Order #PO-8812 and warehouse receiving log.',
        detail: '100% line-item match confirmed. No pricing or quantity discrepancies.',
        timeMs: 220
      },
      {
        id: 's4',
        stepNumber: 4,
        label: 'SYSTEM INTEGRATION',
        actor: 'Executive Sign-off Routing',
        action: 'Pushes one-click approval prompt to Chief Technology Officer mobile interface.',
        detail: 'CTO approves via secure mobile prompt. Authorization logged.',
        timeMs: 340
      },
      {
        id: 's5',
        stepNumber: 5,
        label: 'ACTION',
        actor: 'ERP Accounts Payable Update',
        action: 'Schedules payment batch in ERP and notifies vendor of approval status.',
        detail: 'Vendor notified of payment schedule. Audit trail archived in financial database.',
        timeMs: 480
      }
    ],
    expectedOutcome: 'Illustrative Outcome: Three-way invoice audit completed quickly without manual spreadsheet cross-checks, preventing duplicate payments.'
  }
];

// Featured Solution Concepts & Illustrative Blueprints
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'hotel-capitol',
    title: 'Hospitality Guest Request & Property Management Blueprint (Concept Architecture)',
    clientType: 'Hospitality & Luxury Hotels',
    category: 'Featured Solution Concept',
    tag: 'ILLUSTRATIVE BLUEPRINT — HOSPITALITY',
    image: '/hotel-capitol.jpg',
    problem: 'Manual telephone dispatch often causes front-desk congestion, room service order delays, and housekeeping turnaround bottlenecks during peak occupancy.',
    solution: 'An integrated workflow connecting WhatsApp Business, property management systems, and duty staff mobile interfaces with fast task dispatch.',
    technologies: ['WhatsApp Business API', 'PMS Connector', 'Staff Mobile Queue Engine', 'Multi-Agent Routing'],
    results: [
      { label: 'Projected Request Turnaround', value: 'Under 2 Mins', isIllustrative: true },
      { label: 'Projected Phone Congestion Cut', value: 'Significant', isIllustrative: true },
      { label: 'Projected Billing Accuracy', value: 'High Accuracy', isIllustrative: true }
    ],
    architectureFlow: [
      'Guest WhatsApp Room Request',
      'AI Intent Classification & Folio Check',
      'PMS Room Status Verification',
      'Staff Mobile Task Push',
      'Real-Time Folio Charge Posting'
    ]
  },
  {
    id: 'healthcare-lagos',
    title: 'Healthcare Emergency Intake & EMR Workflow Blueprint (Concept Architecture)',
    clientType: 'Healthcare & Clinical Services',
    category: 'Featured Solution Concept',
    tag: 'ILLUSTRATIVE BLUEPRINT — HEALTHCARE',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    problem: 'Paper-based intake can cause emergency room bottlenecks, slow patient record retrieval, and delayed critical lab notifications to attending physicians.',
    solution: 'A digital emergency intake pipeline with automated electronic health record matching, triage symptom scoring, and instant physician notifications.',
    technologies: ['EMR HL7/FHIR API', 'Clinical Triage Workflow', 'Priority Notification Engine', 'Encrypted Health Data Vault'],
    results: [
      { label: 'Projected Intake Processing', value: 'Under 3 Mins', isIllustrative: true },
      { label: 'Projected Record Matching', value: 'High Accuracy', isIllustrative: true },
      { label: 'Projected Notification Speed', value: 'Real-time', isIllustrative: true }
    ],
    architectureFlow: [
      'Patient Digital Triage Intake',
      'Clinical Urgency Scoring & Queue Priority',
      'EMR Record Auto-Fetch',
      'Specialist Mobile Notification',
      'Encrypted Consultation Logging'
    ]
  },
  {
    id: 'retail-chain',
    title: 'Multi-Branch Retail Replenishment Blueprint (Concept Architecture)',
    clientType: 'Retail & Multi-Branch Supermarkets',
    category: 'Featured Solution Concept',
    tag: 'ILLUSTRATIVE BLUEPRINT — RETAIL',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80',
    problem: 'Frequent stock-outs on fast-moving goods across multi-store chains due to disconnected point-of-sale registers and slow manual reorders.',
    solution: 'Real-time POS event streaming paired with reorder threshold triggers that automatically generate and dispatch supplier purchase orders.',
    technologies: ['POS Event Streaming', 'Inventory Trend Models', 'Supplier System Bridge', 'Automated PO Dispatcher'],
    results: [
      { label: 'Projected Stockout Reduction', value: 'Substantial', isIllustrative: true },
      { label: 'Projected PO Creation Speed', value: 'Automated', isIllustrative: true },
      { label: 'Projected Inventory Accuracy', value: 'High Accuracy', isIllustrative: true }
    ],
    architectureFlow: [
      'POS Barcode Scan at Register',
      'Central Inventory Stock Decrement',
      'Safety Threshold Evaluation',
      'Supplier Purchase Order Transmission',
      'Receiving Bay Delivery Scheduling'
    ]
  },
  {
    id: 'academy-portal',
    title: 'Private Academy Admissions & Fee Reconciliation Blueprint (Concept Architecture)',
    clientType: 'Education & Private Academies',
    category: 'Featured Solution Concept',
    tag: 'ILLUSTRATIVE BLUEPRINT — EDUCATION',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    problem: 'Admissions teams spending extensive hours reviewing paper applications, verifying bank payment receipts, and manually drafting admission letters.',
    solution: 'An intelligent admissions workflow featuring document processing, bank transaction matching, and structured parent communication broadcasts.',
    technologies: ['Document OCR Parser', 'Banking Verification Webhooks', 'Student Database Sync', 'Parent Messaging Service'],
    results: [
      { label: 'Projected Admin Workload Cut', value: 'Substantial', isIllustrative: true },
      { label: 'Projected Fee Verification', value: 'Reliable Matching', isIllustrative: true },
      { label: 'Projected Admission Turnaround', value: 'Fast Turnaround', isIllustrative: true }
    ],
    architectureFlow: [
      'Parent Online Application Upload',
      'Document Data Extraction',
      'Bank Transfer Reconciliation',
      'Student Profile Provisioning',
      'Admission Letter Notification'
    ]
  }
];

// Tech Stack Categories
export const TECH_CATEGORIES: TechStackCategory[] = [
  {
    category: 'AI Automation & Workflow Engine',
    description: 'Multi-agent frameworks designed for responsive task execution, contextual reasoning, and enterprise accuracy.',
    items: [
      { name: 'Multi-Agent Task Orchestrators', role: 'Concurrent cross-department task execution', icon: 'Cpu' },
      { name: 'Document & OCR Processing', role: 'Digital document and invoice data extraction', icon: 'Eye' },
      { name: 'Demand & Trend Modeling', role: 'Inventory and operational load forecasting', icon: 'TrendingUp' },
      { name: 'Multilingual Conversational Models', role: 'Localized customer and staff interactions', icon: 'Mic' }
    ]
  },
  {
    category: 'Enterprise Integration & Data Connectors',
    description: 'Reliable data connectors designed to integrate with existing ERPs, databases, and modern cloud services smoothly.',
    items: [
      { name: 'Bi-Directional ERP Connectors', role: 'SAP, Oracle, Odoo, Opera PMS live sync', icon: 'Zap' },
      { name: 'Omnichannel Ingestion Gateway', role: 'Fast event ingestion from WhatsApp & internal apps', icon: 'Share2' },
      { name: 'Private & Secure Deployments', role: 'Dedicated on-premise and cloud infrastructure options', icon: 'Lock' },
      { name: 'Human Oversight Gates', role: 'Manager sign-offs for high-value financial actions', icon: 'UserCheck' }
    ]
  },
  {
    category: 'Digital Product & Interface Systems',
    description: 'Clean, accessible frontend architectures crafted for operational staff and executive decision-makers.',
    items: [
      { name: 'React 19 & TypeScript Core', role: 'Fast, type-safe responsive web applications', icon: 'Code' },
      { name: 'Tailwind CSS Design System', role: 'Accessible, clean corporate typography & UI components', icon: 'Sliders' },
      { name: 'Real-Time Workflow Monitoring', role: 'Operational status dashboards and metrics', icon: 'Activity' },
      { name: 'Mobile Staff Interfaces', role: 'Intuitive touch interfaces for mobile and desk teams', icon: 'Smartphone' }
    ]
  }
];

// Supporting Design Offerings
export const DESIGN_SERVICES: ServiceOffering[] = [
  {
    id: 'enterprise-ui-ux',
    title: 'ENTERPRISE UI/UX SYSTEMS',
    tagline: 'Interfaces Engineered for High-Volume Operations',
    description: 'We design bespoke staff interfaces, mobile concierge tools, and executive dashboards that reduce operational strain, prevent human error, and accelerate workflow efficiency.',
    deliverables: ['Atomic Design Systems', 'Figma Interactive Prototypes', 'Mobile & Desktop Interface Layouts', 'Accessibility Compliance Reviews'],
    impact: 'Accelerates employee software onboarding and eliminates interface-induced operational mistakes.',
    icon: 'Layout'
  },
  {
    id: 'corporate-digital-products',
    title: 'CORPORATE DIGITAL PLATFORMS',
    tagline: 'Modern Web Engineering with Clean Aesthetic',
    description: 'For organizations demanding world-class digital prestige, we engineer fast, responsive corporate websites and portals that articulate technical sophistication and brand leadership.',
    deliverables: ['Custom React Web Platforms', 'SEO & Core Web Vitals Optimization', 'Content Management Architectures', 'Interactive Product Visualizers'],
    impact: 'Positions your enterprise as an industry authority and delivers fast page performance across devices.',
    icon: 'Globe'
  },
  {
    id: 'visual-identity-systems',
    title: 'BRAND & IDENTITY ARCHITECTURE',
    tagline: 'Distinctive Visual Strategy for Modern Tech Brands',
    description: 'We develop cohesive brand systems, typography guidelines, vector icon sets, and digital brand collateral that project prestige and technological excellence.',
    deliverables: ['Brand Guidelines & Style Guides', 'Custom Iconography & Visual Assets', 'Executive Presentation Systems', 'Print & Digital Brand Collateral'],
    impact: 'Builds instant institutional credibility with enterprise partners, investors, and clients.',
    icon: 'Palette'
  }
];

// 5-Step Methodology
export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'UNDERSTAND',
    subtitle: 'Process Mapping & Operational Review',
    description: 'Our senior automation architects analyze your existing manual bottlenecks, interview key staff, and map every operational touchpoint.',
    highlights: ['Process Mapping', 'Bottleneck Identification', 'ROI Opportunity Modeling']
  },
  {
    step: '02',
    title: 'DESIGN',
    subtitle: 'System Architecture Blueprint',
    description: 'We design the end-to-end automation pipeline, data security boundaries, interface wireframes, and operational fallback protocols.',
    highlights: ['Architecture Blueprints', 'Staff Interface Layouts', 'Security & Privacy Planning']
  },
  {
    step: '03',
    title: 'CONNECT',
    subtitle: 'Smooth System Integration',
    description: 'We build secure connectors linking your existing ERPs, databases, WhatsApp channels, and staff interfaces smoothly.',
    highlights: ['API & Webhook Connectors', 'Existing Software Integration', 'Smooth Data Migration']
  },
  {
    step: '04',
    title: 'AUTOMATE',
    subtitle: 'Live Workflow Orchestration',
    description: 'The automated system takes over routine routing, document parsing, scheduling, and billing reconciliations smoothly.',
    highlights: ['Workflow Dispatch', 'Responsive Performance', 'Human Oversight Controls']
  },
  {
    step: '05',
    title: 'OPTIMIZE',
    subtitle: 'Monitoring & Operational Support',
    description: 'We monitor live execution status, refine prompts, update business parameters, and support multi-branch expansion.',
    highlights: ['System Monitoring', 'Performance Refinements', 'Multi-Branch Expansion']
  }
];

// Why Choose Librum 6 Pillars
export const WHY_LIBRUM_POINTS = [
  {
    id: 'ai-first',
    title: 'AI-First Architecture',
    description: 'We build native multi-agent automation pipelines designed for complex business operations, not generic chatbots.',
    icon: 'Brain'
  },
  {
    id: 'human-centered',
    title: 'Human-Centered Design',
    description: 'Clean, intuitive interfaces ensure staff and customers adopt systems effortlessly from day one.',
    icon: 'Users'
  },
  {
    id: 'industry-specific',
    title: 'Industry-Specific Logic',
    description: 'Tailored operational suites engineered for Nigerian hospitality, healthcare, retail, and education.',
    icon: 'Building2'
  },
  {
    id: 'integrated-not-disruptive',
    title: 'Smooth Integration',
    description: 'We connect with the software you already use—Opera PMS, SAP, Oracle, Odoo, and WhatsApp.',
    icon: 'Network'
  },
  {
    id: 'scalable-resilient',
    title: 'Scalable & Resilient',
    description: 'Engineered for high concurrency and offline queue resilience during unstable internet connectivity.',
    icon: 'ShieldCheck'
  },
  {
    id: 'results-roi-focused',
    title: 'Results & Value Focused',
    description: 'Every deployment is focused on practical operational impact: time reclaimed, reduced errors, and cost efficiency.',
    icon: 'Target'
  }
];

// Frequently Asked Questions
export const FAQS = [
  {
    question: 'How long does a typical AI automation deployment take?',
    answer: 'A standard industry deployment (such as a hospitality WhatsApp & property management routing workflow or school fee reconciliation) typically takes between 2 to 4 weeks from operational review to live deployment. Custom enterprise ERP workflows with multi-departmental rules typically take 4 to 8 weeks.'
  },
  {
    question: 'Will our existing staff need extensive technical training to use Librum?',
    answer: 'No. Librum is designed around intuitive, human-centered workflows. Staff receive straightforward notifications and task prompts on tools they already use—such as WhatsApp, mobile web apps, or desktop portals.'
  },
  {
    question: 'Do we have to replace our existing PMS, ERP, or accounting software?',
    answer: 'No. Our philosophy is smooth integration. We connect directly into your existing software (Opera PMS, SAP, Oracle, Odoo, QuickBooks, custom SQL databases) via secure webhooks and APIs.'
  },
  {
    question: 'How does Librum ensure the security and privacy of our proprietary business data?',
    answer: 'We implement standard enterprise encryption (TLS in transit and AES at rest), role-based access control, and dedicated private deployment options. Your proprietary business data is never used to train public third-party AI models.'
  },
  {
    question: 'Where is Librum Technologies located?',
    answer: `Librum Technologies Limited is headquartered at ${COMPANY_CONFIG.address}. We serve institutional and commercial clients across Lagos, Nigeria, Africa, and internationally.`
  }
];
