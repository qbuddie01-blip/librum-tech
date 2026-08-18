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
    subtitle: 'Autonomous Guest Request, Room Routing & PMS Sync',
    description: 'Transform guest touchpoints into instant operational dispatches. When a guest requests extra towels, champagne, or late check-out via WhatsApp or QR, Librum verifies PMS folio status, dispatches tasks to housekeeping smartwatches, and logs charges with zero front-desk delays.',
    problem: 'Guests wait on front desk phone queues, housekeeping assignments lag across shifts, and room service billings fail to reconcile with POS.',
    automation: 'Autonomous WhatsApp guest request triage, instant task routing to duty housekeeping, and live bi-directional Opera PMS billing synchronization.',
    impact: 'Accelerated request response turnaround, reduced front-desk phone congestion, and guaranteed billing accuracy across all guest outlets.',
    badge: 'Hospitality Architecture',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: '< 60s', label: 'Task Dispatch SLA' },
      { metric: '100%', label: 'PMS Folio Accuracy' },
      { metric: '24/7', label: 'Multilingual Concierge' }
    ],
    automations: [
      'WhatsApp & QR Guest Room Service Dispatch',
      'Duty Staff Smartwatch Task Queuing',
      'Automated Housekeeping Status & Turn-Down Sync',
      'Direct Opera PMS Folio & Ledger Billing',
      'Multilingual VIP Guest Preference Memory'
    ],
    workflowStages: [
      { from: 'Guest WhatsApp / QR', action: 'Natural Language Intent Parsing', to: 'AI Agent' },
      { from: 'AI Agent', action: 'PMS Folio Status Verification', to: 'PMS Database' },
      { from: 'AI Agent', action: 'Proximity Task Push', to: 'Duty Staff Smartwatch' },
      { from: 'Duty Staff Completion', action: 'Real-time Billing Sync', to: 'Opera PMS Ledger' }
    ],
    ctaText: 'AUTOMATE HOSPITALITY →'
  },
  {
    id: 'healthcare',
    title: 'Hospitals & Healthcare Clinics',
    subtitle: 'Zero-Wait Triage, Clinical Queue Routing & Lab Sync',
    description: 'Eliminate patient intake delays and medical administrative fatigue. Librum triages incoming symptoms, schedules specialist appointments, synchronizes patient records with EMRs, and dispatches lab test results securely to doctors.',
    problem: 'Overcrowded triage desks, manual paper file retrieval, delayed lab result alerts, and missed appointment schedules.',
    automation: 'Instant digital symptom intake, smart specialty routing, automated EMR file retrieval, and instant critical lab panic alerts to physicians.',
    impact: 'Dramatically reduced waiting room congestion, faster emergency response prioritization, and seamless compliance-grade patient data records.',
    badge: 'Clinical Healthcare Suite',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: '0 Mins', label: 'Intake Wait Time' },
      { metric: '100%', label: 'EMR File Match' },
      { metric: 'Instant', label: 'Critical Alert Dispatch' }
    ],
    automations: [
      'Automated Symptom & Urgency Triage',
      'Specialist Schedule & Calendar Auto-Booking',
      'Electronic Medical Record (EMR) Auto-Fetch',
      'Critical Diagnostic & Lab Result Panic Alerts',
      'Automated Medication Refill Reminders'
    ],
    workflowStages: [
      { from: 'Patient Portal / WhatsApp', action: 'Symptom Triage Intake', to: 'Clinical AI' },
      { from: 'Clinical AI', action: 'Triage Urgency Scoring', to: 'Duty Doctor Queue' },
      { from: 'Diagnostic Lab', action: 'Panic Value Flagging', to: 'Specialist SMS/Push' },
      { from: 'Consultation', action: 'Encrypted Medical Record Sync', to: 'Hospital EMR' }
    ],
    ctaText: 'AUTOMATE HEALTHCARE →'
  },
  {
    id: 'education',
    title: 'Schools & Educational Academies',
    subtitle: 'Automated Admissions, Fee Reconciliation & Parent Portals',
    description: 'Free academic leadership and administrators from bureaucratic paperwork. Librum automates prospective student inquiries, admissions document verification, bank fee reconciliation, and personalized parent academic progress alerts.',
    problem: 'Manual verification of thousands of admission forms, slow bank transfer fee reconciliation, and disconnected parent communication.',
    automation: 'Automated document OCR verification, instant bank payment ledger matching, student grade tracking, and scheduled parent WhatsApp broadcasts.',
    impact: 'Zero-friction enrollment cycles, elimination of unverified bank tellers, and highly engaged parent-teacher community transparency.',
    badge: 'Education Academy Suite',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: '90%', label: 'Admin Overhead Cut' },
      { metric: '100%', label: 'Fee Reconciliation' },
      { metric: 'Instant', label: 'Admission Status' }
    ],
    automations: [
      '24/7 Prospective Student Admissions Triage',
      'Automated Document OCR & Transcript Verification',
      'Instant Bank Transfer & Tuition Reconciliation',
      'Automated Parent WhatsApp Attendance & Grade Alerts',
      'Alumni Portal & Transcript Request Processing'
    ],
    workflowStages: [
      { from: 'Parent / Applicant', action: 'Application & Proof of Payment', to: 'Admissions AI' },
      { from: 'Admissions AI', action: 'Automated Bank API Query', to: 'Finance Ledger' },
      { from: 'Admissions AI', action: 'OCR Transcript Validation', to: 'Student Database' },
      { from: 'Registry', action: 'Admission Letter Auto-Generation', to: 'Parent Email/SMS' }
    ],
    ctaText: 'AUTOMATE EDUCATION →'
  },
  {
    id: 'retail',
    title: 'Retail Stores & Supermarket Chains',
    subtitle: 'Real-Time Multi-Branch Inventory Sync & Supplier Reorders',
    description: 'Eliminate stock-outs, inventory shrinkage, and manual checkout delays. Librum dynamically tracks SKU depletion across point-of-sale terminals, auto-generates supplier purchase orders, and handles omnichannel customer delivery dispatches.',
    problem: 'Unexpected stockouts on fast-moving goods, delayed manual supplier purchase orders, and mismatched inventory between online and in-store.',
    automation: 'Real-time multi-branch stock depletion tracking, automated threshold-based purchase order generation, and delivery rider dispatch integration.',
    impact: 'Zero stock-out revenue losses, optimized warehouse capital turnover, and instant customer fulfillment across all branches.',
    badge: 'Retail Commerce Suite',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: 'Zero', label: 'Stockout Blindspots' },
      { metric: 'Real-time', label: 'Multi-Store Sync' },
      { metric: 'Auto', label: 'Supplier PO Trigger' }
    ],
    automations: [
      'Multi-Branch Point-of-Sale Real-Time Sync',
      'Predictive Reordering & Supplier PO Generation',
      'Omnichannel Order Routing & Last-Mile Dispatch',
      'Automated Customer Receipt & WhatsApp Loyalty',
      'Inventory Discrepancy & Shrinkage Anomaly Flagging'
    ],
    workflowStages: [
      { from: 'POS Register Barcode Scan', action: 'Instant Inventory Decrement', to: 'Retail AI' },
      { from: 'Retail AI', action: 'Reorder Threshold Check', to: 'Inventory Database' },
      { from: 'Retail AI', action: 'Cryptographic Purchase Order', to: 'Approved Supplier ERP' },
      { from: 'Supplier Dispatch', action: 'Warehouse Delivery Alert', to: 'Branch Manager App' }
    ],
    ctaText: 'AUTOMATE RETAIL →'
  },
  {
    id: 'enterprise',
    title: 'Corporate & Enterprise Logistics',
    subtitle: 'Autonomous Invoicing, Vendor Approvals & Executive Dashboards',
    description: 'Accelerate corporate velocity by automating complex internal procurement, invoice audit workflows, HR employee onboarding, and executive cross-departmental reporting.',
    problem: 'Multi-week invoice approval bottlenecks, manual spreadsheet data aggregation for board meetings, and high compliance auditing overhead.',
    automation: 'Rule-based multi-tier invoice approval routing, automated vendor KYC validation, and real-time executive BI dashboard synchronization.',
    impact: '70%+ faster approval lifecycles, elimination of duplicate invoices, and instant executive operational visibility.',
    badge: 'Corporate ERP Suite',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: '75%', label: 'Faster Approvals' },
      { metric: '100%', label: 'Audit Trail Trail' },
      { metric: 'Real-time', label: 'BI Analytics' }
    ],
    automations: [
      'Intelligent Multi-Level Vendor Invoice Approval',
      'Cross-Departmental ERP Data Synchronization',
      'Automated HR Employee Onboarding & Compliance',
      'Live Executive BI Mission-Control Dashboards',
      'Contract Milestone Tracking & Automated Alerts'
    ],
    workflowStages: [
      { from: 'Vendor Invoice Email', action: 'OCR Parsing & PO Match', to: 'Finance AI' },
      { from: 'Finance AI', action: 'Three-Way Match Verification', to: 'ERP Accounts Payable' },
      { from: 'Finance AI', action: 'Smart Approval Push', to: 'CFO / Director Smartwatch' },
      { from: 'Sign-Off', action: 'Scheduled Bank Disbursement', to: 'Banking Gateway' }
    ],
    ctaText: 'AUTOMATE ENTERPRISE →'
  },
  {
    id: 'custom',
    title: 'Custom Business Workflows',
    subtitle: 'Bespoke AI Orchestration Engineered to Your Exact Rules',
    description: 'Every enterprise has unique operational DNA. Librum designs, builds, and deploys tailor-made multi-agent AI pipelines for logistics fleets, legal document processing, real estate portfolios, and fintech settlement systems.',
    problem: 'Proprietary business models forced to fit into rigid, generic off-the-shelf software that fails to meet exact workflow nuances.',
    automation: 'Custom-coded event-driven agent architectures, dedicated data connectors, and tailor-made mobile employee interfaces.',
    impact: 'Full operational customization, proprietary competitive advantage, and complete data ownership.',
    badge: 'Tailored Solution',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      { metric: '100%', label: 'Custom Fit' },
      { metric: 'Air-Gapped', label: 'Security Option' },
      { metric: 'Dedicated', label: 'SLA Support' }
    ],
    automations: [
      'Proprietary Multi-Agent Workflow Engineering',
      'Custom Database & Legacy System Bridges',
      'Specialized Industry Document Parsers',
      'Automated Compliance & Risk Surveillance',
      'Custom Web & Mobile Staff Terminal Dashboards'
    ],
    workflowStages: [
      { from: 'Custom Business Trigger', action: 'Proprietary Event Ingestion', to: 'Custom AI Engine' },
      { from: 'Custom AI Engine', action: 'Business Logic Evaluation', to: 'Internal Microservices' },
      { from: 'Custom AI Engine', action: 'Action Dispatch & Notifications', to: 'Field Teams / Clients' },
      { from: 'Pipeline Complete', action: 'Encrypted Audit Logging', to: 'Enterprise Data Lake' }
    ],
    ctaText: 'BUILD CUSTOM WORKFLOW →'
  }
];

// 5 Interactive Simulation Scenarios
export const SIMULATION_SCENARIOS: SimulationScenario[] = [
  {
    id: 'hotel-service',
    name: 'Hospitality: VIP Guest Extra Towels & Late Checkout Request',
    industry: 'Hospitality & Hotels',
    iconName: 'Hotel',
    initialTrigger: 'Guest in Suite 402 sends WhatsApp: "Can we get 2 extra pool towels and extend check-out to 2 PM?"',
    steps: [
      {
        id: 's1',
        stepNumber: 1,
        label: 'TRIGGER',
        actor: 'Omnichannel Ingestion Gateway',
        action: 'Ingests WhatsApp webhook payload & decrypts message.',
        detail: 'Message parsed: Guest Suite 402 identified via registered reservation phone number.',
        timeMs: 45
      },
      {
        id: 's2',
        stepNumber: 2,
        label: 'AI ANALYSIS',
        actor: 'Multi-Agent Intent Engine',
        action: 'Segments multi-intent request into two distinct workflow tickets.',
        detail: 'Intent 1: Amenity Request (2x Pool Towels) | Intent 2: Folio Amendment (Late Checkout 2:00 PM).',
        timeMs: 120
      },
      {
        id: 's3',
        stepNumber: 3,
        label: 'DECISION',
        actor: 'PMS Availability & Policy Validator',
        action: 'Queries Opera PMS API for Room 402 departure schedule and housekeeping capacity.',
        detail: 'Next guest arrival for Room 402 is 4:30 PM. 2:00 PM late check-out approved without fee surcharge.',
        timeMs: 210
      },
      {
        id: 's4',
        stepNumber: 4,
        label: 'SYSTEM INTEGRATION',
        actor: 'Opera PMS & Duty Queue Router',
        action: 'Updates PMS check-out time and pushes towel request to 4th-Floor Housekeeper smartwatch.',
        detail: 'Staff terminal alert: "Suite 402 - 2x Pool Towels (High Priority). Deliver within 8 mins."',
        timeMs: 310
      },
      {
        id: 's5',
        stepNumber: 5,
        label: 'ACTION',
        actor: 'Customer Communication Gateway',
        action: 'Sends automated, personalized WhatsApp confirmation to guest.',
        detail: '"Good afternoon Mr. Adeleke. 2 pool towels are on the way to Suite 402, and your checkout is confirmed for 2:00 PM. Enjoy your stay!"',
        timeMs: 430
      }
    ],
    expectedOutcome: 'Guest request resolved in 430ms with zero front-desk phone calls, zero staff friction, and 100% PMS accuracy.'
  },
  {
    id: 'hospital-triage',
    name: 'Healthcare: Emergency Clinic Patient Intake & Panic Lab Alert',
    industry: 'Healthcare & Clinical',
    iconName: 'Activity',
    initialTrigger: 'Patient scans triage QR code with symptoms of acute chest discomfort and shortness of breath.',
    steps: [
      {
        id: 's1',
        stepNumber: 1,
        label: 'TRIGGER',
        actor: 'Triage Intake Scanner',
        action: 'Receives digital symptom report and pulse oximeter reading (89% SpO2).',
        detail: 'Vitals data categorized as Category 1 (Immediate Clinical Escalation).',
        timeMs: 30
      },
      {
        id: 's2',
        stepNumber: 2,
        label: 'AI ANALYSIS',
        actor: 'Clinical Triage AI',
        action: 'Evaluates acute cardiac risk markers against emergency clinical protocols.',
        detail: 'Flags high cardiac risk index. Overrides standard waiting room scheduling queue.',
        timeMs: 95
      },
      {
        id: 's3',
        stepNumber: 3,
        label: 'DECISION',
        actor: 'Duty Specialist Router',
        action: 'Assigns Trauma Bay 03 and routes priority alert to on-duty Cardiologist.',
        detail: 'Direct alert sent to ER nurse station monitor and Doctor on-call mobile device.',
        timeMs: 180
      },
      {
        id: 's4',
        stepNumber: 4,
        label: 'SYSTEM INTEGRATION',
        actor: 'Hospital EMR & Lab Gateway',
        action: 'Auto-generates emergency stat ECG order and creates emergency EMR admission record.',
        detail: 'Pre-authorizes emergency protocol under Nigerian National Health Insurance Scheme guidelines.',
        timeMs: 280
      },
      {
        id: 's5',
        stepNumber: 5,
        label: 'ACTION',
        actor: 'Trauma Station Dispatch',
        action: 'Guides patient directly to Bay 03 via digital terminal while nursing team mobilizes.',
        detail: 'Emergency team prepared at bedside within 60 seconds of intake submission.',
        timeMs: 390
      }
    ],
    expectedOutcome: 'Zero intake wait time. Critical cardiac patient routed to emergency trauma bay with pre-populated medical orders in under 400ms.'
  },
  {
    id: 'retail-stock',
    name: 'Retail: Multi-Store Auto-Replenishment & Supplier Reorder',
    industry: 'Retail & Supermarkets',
    iconName: 'ShoppingBag',
    initialTrigger: 'Victoria Island supermarket branch sells 48th carton of premium dairy, dropping stock below safety threshold.',
    steps: [
      {
        id: 's1',
        stepNumber: 1,
        label: 'TRIGGER',
        actor: 'POS Ledger Webhook',
        action: 'Ingests barcode checkout event and updates central database inventory balance.',
        detail: 'SKU #4892-DAIRY inventory balance reaches 4 units (reorder safety buffer: 10 units).',
        timeMs: 40
      },
      {
        id: 's2',
        stepNumber: 2,
        label: 'AI ANALYSIS',
        actor: 'Predictive Demand Engine',
        action: 'Analyzes weekend sales velocity, lead time from Ikeja warehouse, and promotional demand.',
        detail: 'Calculates optimal reorder batch: 120 cartons required to prevent weekend stockout.',
        timeMs: 110
      },
      {
        id: 's3',
        stepNumber: 3,
        label: 'DECISION',
        actor: 'Procurement Policy Validator',
        action: 'Validates primary supplier SLA, agreed wholesale pricing, and available credit limit.',
        detail: 'Approved supplier selected with guaranteed 4-hour temperature-controlled delivery.',
        timeMs: 220
      },
      {
        id: 's4',
        stepNumber: 4,
        label: 'SYSTEM INTEGRATION',
        actor: 'Supplier B2B ERP Connector',
        action: 'Transmits cryptographically signed Purchase Order #PO-88492 into supplier order system.',
        detail: 'Supplier warehouse inventory reserved and automated pick-list generated.',
        timeMs: 340
      },
      {
        id: 's5',
        stepNumber: 5,
        label: 'ACTION',
        actor: 'Store Logistics Manager Alert',
        action: 'Notifies Victoria Island store receiving dock of scheduled delivery ETA (03:30 PM).',
        detail: 'Receiving dock pre-assigned refrigerated bay for seamless offloading.',
        timeMs: 460
      }
    ],
    expectedOutcome: 'Autonomous supply chain replenishment executed in 460ms with zero manual inventory audits and zero stock-out downtime.'
  },
  {
    id: 'school-admissions',
    name: 'Education: Parent Fee Payment & Automated Student Enrollment',
    industry: 'Education & Academies',
    iconName: 'GraduationCap',
    initialTrigger: 'Parent submits student application form and uploads bank transfer payment receipt of ₦850,000.',
    steps: [
      {
        id: 's1',
        stepNumber: 1,
        label: 'TRIGGER',
        actor: 'Admissions Webhook',
        action: 'Receives online registration payload and attached payment confirmation PDF.',
        detail: 'Applicant: Kemi Adeleke (Grade 10 Admission - 2026/2027 Academic Session).',
        timeMs: 50
      },
      {
        id: 's2',
        stepNumber: 2,
        label: 'AI ANALYSIS',
        actor: 'OCR & Financial Verification Agent',
        action: 'Performs OCR on bank receipt and cross-references bank transaction hash via Banking API.',
        detail: '100% cryptographic payment verification confirmed: ₦850,000 settled into school treasury account.',
        timeMs: 140
      },
      {
        id: 's3',
        stepNumber: 3,
        label: 'DECISION',
        actor: 'Class Capacity & Prerequisite Engine',
        action: 'Checks Grade 10 classroom seat quota and evaluates entrance examination score (88%).',
        detail: 'Prerequisites met. Space confirmed in Grade 10 Science stream (Class 10-A).',
        timeMs: 240
      },
      {
        id: 's4',
        stepNumber: 4,
        label: 'SYSTEM INTEGRATION',
        actor: 'School Information System (SIS)',
        action: 'Generates official Student ID, provisions school email, and assigns digital locker credentials.',
        detail: 'Student record created in SIS database and linked to parent contact profile.',
        timeMs: 350
      },
      {
        id: 's5',
        stepNumber: 5,
        label: 'ACTION',
        actor: 'Parent Portal & WhatsApp Gateway',
        action: 'Issues official admission letter, payment receipt, and onboarding pack to parent.',
        detail: 'Parent receives WhatsApp: "Congratulations! Kemi is officially enrolled in Grade 10-A. Student ID: LBR-2026-042."',
        timeMs: 470
      }
    ],
    expectedOutcome: 'Admissions and fee verification completed in 470ms. 100% paperless, zero treasury leakage, instant parent satisfaction.'
  },
  {
    id: 'corporate-invoice',
    name: 'Enterprise: 3-Way Invoice Match & Executive Approval Routing',
    industry: 'Corporate & Logistics',
    iconName: 'Cpu',
    initialTrigger: 'Vendor sends ₦4.2M cloud server invoice via email to accounts payable inbox.',
    steps: [
      {
        id: 's1',
        stepNumber: 1,
        label: 'TRIGGER',
        actor: 'Email Processing Pipeline',
        action: 'Extracts invoice attachment, parses sender domain, and verifies DKIM security signature.',
        detail: 'Vendor: Cloud Infrastructure Ltd. Invoice Reference: #INV-2026-901.',
        timeMs: 35
      },
      {
        id: 's2',
        stepNumber: 2,
        label: 'AI ANALYSIS',
        actor: 'Document Understanding AI',
        action: 'Extracts line items, tax breakdowns, withholding taxes (WHT), and bank account details.',
        detail: 'Total amount: ₦4,200,000. WHT: ₦210,000 (5%). Net Payable: ₦3,990,000.',
        timeMs: 130
      },
      {
        id: 's3',
        stepNumber: 3,
        label: 'DECISION',
        actor: '3-Way Match Verification Engine',
        action: 'Queries ERP to match Invoice against Approved PO #PO-4091 and Service Delivery Receipt.',
        detail: '100% Match: PO amount, deliverable approval, and line-item pricing verified.',
        timeMs: 250
      },
      {
        id: 's4',
        stepNumber: 4,
        label: 'SYSTEM INTEGRATION',
        actor: 'Corporate ERP & Ledger Sync',
        action: 'Creates draft payment voucher in SAP and prepares transaction payload for bank authorization.',
        detail: 'Pushes one-touch authorization prompt to CFO mobile terminal.',
        timeMs: 360
      },
      {
        id: 's5',
        stepNumber: 5,
        label: 'ACTION',
        actor: 'Executive Authorization Gateway',
        action: 'CFO approves via fingerprint on secure mobile app; vendor receives automated settlement schedule notice.',
        detail: 'Vendor notified of payment disbursement date. Full compliance audit trail archived.',
        timeMs: 480
      }
    ],
    expectedOutcome: 'Three-way invoice audit completed in 480ms without manual spreadsheet checks, preventing duplicate payments and manual errors.'
  }
];

// Featured Automation Concepts & Blueprints
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'hotel-capitol',
    title: 'Hotel Capitol Luxury PMS & Guest Automation Blueprint',
    clientType: 'Hospitality & Luxury Hotels',
    category: 'Featured Automation Concept',
    tag: 'FEATURED AUTOMATION ARCHITECTURE — HOSPITALITY',
    image: '/hotel-capitol.jpg',
    problem: 'Manual telephone dispatch caused front-desk congestion, room service order mixups, and 45-minute average housekeeping turnaround delays during peak occupancy.',
    solution: 'Engineered a unified neural workflow connecting WhatsApp Business Cloud, Opera PMS, and duty staff smartwatch terminals with sub-minute automated queue dispatch.',
    technologies: ['WhatsApp Business API', 'Opera PMS Connector', 'Smartwatch Queue Engine', 'Multi-Agent Triage'],
    results: [
      { label: 'Projected Request Turnaround', value: '< 90s', isIllustrative: true },
      { label: 'Projected Front-Desk Phone Reduction', value: '-72%', isIllustrative: true },
      { label: 'Illustrative Folio Accuracy', value: '100%', isIllustrative: true }
    ],
    architectureFlow: [
      'Guest WhatsApp Room Request',
      'AI Intent Classification & Folio Validation',
      'PMS Room Status Verification',
      'Housekeeper Smartwatch Task Push',
      'Real-Time Folio Charge Posting'
    ]
  },
  {
    id: 'healthcare-lagos',
    title: 'Metropolitan Hospital Emergency & EMR Workflow Architecture',
    clientType: 'Healthcare & Clinical Services',
    category: 'Featured Automation Concept',
    tag: 'FEATURED AUTOMATION ARCHITECTURE — HEALTHCARE',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    problem: 'Paper-based intake caused severe emergency room bottlenecks, slow patient file retrieval, and delayed critical lab panic value notifications to attending physicians.',
    solution: 'Designed an emergency intake pipeline with automated EMR matching, digital symptom triage scoring, and instant panic value push alerts to specialists.',
    technologies: ['EMR HL7/FHIR API', 'Clinical Triage AI', 'Panic Alert SMS/Push', 'NDPR Encrypted Data Vault'],
    results: [
      { label: 'Projected Triage Processing Time', value: '< 2 Mins', isIllustrative: true },
      { label: 'Projected Medical Record Match', value: '99.9%', isIllustrative: true },
      { label: 'Illustrative Alert Latency', value: '< 15s', isIllustrative: true }
    ],
    architectureFlow: [
      'Patient Digital Triage Intake',
      'Clinical Risk Scoring & Queue Escalation',
      'EMR Record Auto-Fetch',
      'Specialist Push Notification',
      'Encrypted Consultation Logging'
    ]
  },
  {
    id: 'retail-chain',
    title: 'Apex Supermarkets Multi-Branch Replenishment Blueprint',
    clientType: 'Retail & Multi-Branch Supermarkets',
    category: 'Featured Automation Concept',
    tag: 'FEATURED AUTOMATION ARCHITECTURE — RETAIL',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80',
    problem: 'Frequent stock-outs on high-velocity SKUs across 12 store branches due to disconnected POS registers and slow manual supplier purchase orders.',
    solution: 'Deployed real-time POS event streaming with predictive reorder threshold triggers that auto-generate and dispatch supplier purchase orders.',
    technologies: ['POS Event Streamer', 'Predictive Demand Model', 'Supplier ERP Bridge', 'Automated PO Dispatcher'],
    results: [
      { label: 'Projected Stockout Reduction', value: '-85%', isIllustrative: true },
      { label: 'Projected PO Processing Time', value: '< 1 Min', isIllustrative: true },
      { label: 'Illustrative Reorder Accuracy', value: '99.8%', isIllustrative: true }
    ],
    architectureFlow: [
      'POS Barcode Scan at Register',
      'Central Cloud Stock Decrement',
      'Safety Buffer Threshold Evaluation',
      'Automated Supplier PO Transmission',
      'Receiving Bay Delivery Scheduling'
    ]
  },
  {
    id: 'academy-portal',
    title: 'Corona Prestige Academy Automated Admissions Architecture',
    clientType: 'Education & Private Academies',
    category: 'Featured Automation Concept',
    tag: 'FEATURED AUTOMATION ARCHITECTURE — EDUCATION',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    problem: 'Admissions staff spent 300+ manual hours reviewing paper applications, verifying bank payment tellers, and manually issuing admission letters.',
    solution: 'Created an intelligent admissions engine featuring OCR document verification, bank transaction API matching, and instant parent onboarding broadcasts.',
    technologies: ['OCR Document Parser', 'Banking API Webhooks', 'SIS Student Database', 'Parent WhatsApp Gateway'],
    results: [
      { label: 'Projected Admin Overhead Cut', value: '-90%', isIllustrative: true },
      { label: 'Projected Payment Verification', value: '100%', isIllustrative: true },
      { label: 'Illustrative Admission Speed', value: 'Instant', isIllustrative: true }
    ],
    architectureFlow: [
      'Parent Online Application Upload',
      'OCR Transcript & ID Verification',
      'Bank Transfer Hash Reconciliation',
      'Student ID & SIS Account Provisioning',
      'Admission Letter Auto-Dispatch'
    ]
  }
];

// Tech Stack Categories
export const TECH_CATEGORIES: TechStackCategory[] = [
  {
    category: 'AI & Neural Orchestration Stack',
    description: 'Autonomous multi-agent orchestration frameworks optimized for low latency, contextual reasoning, and zero hallucination risk.',
    items: [
      { name: 'Multi-Agent Swarm Orchestrators', role: 'Concurrent cross-department task execution', icon: 'Cpu' },
      { name: 'Multimodal Vision & OCR Engines', role: 'Real-time document and invoice parsing', icon: 'Eye' },
      { name: 'Predictive Demand Models', role: 'Inventory and operational load forecasting', icon: 'TrendingUp' },
      { name: 'Multilingual NLP (Yoruba, Igbo, Hausa)', role: 'Localized conversational AI interactions', icon: 'Mic' }
    ]
  },
  {
    category: 'Enterprise Integration & Data Pipeline',
    description: 'Robust cryptographic data connectors designed to integrate with legacy ERPs and modern cloud APIs with zero downtime.',
    items: [
      { name: 'Bi-Directional ERP Connectors', role: 'SAP, Oracle, Odoo, Opera PMS live sync', icon: 'Zap' },
      { name: 'Omnichannel Webhook Mesh', role: 'Sub-second event ingestion from WhatsApp & IoT', icon: 'Share2' },
      { name: 'Private Air-Gapped Sandboxing', role: 'NDPR-compliant local data sovereignty', icon: 'Lock' },
      { name: 'Human-in-the-Loop Threshold Gates', role: 'Executive safety sign-offs for high-value actions', icon: 'UserCheck' }
    ]
  },
  {
    category: 'Digital Product & Interface Systems',
    description: 'Clean, accessible frontend architectures crafted for high-stress operational staff and executive decision-makers.',
    items: [
      { name: 'React 19 & TypeScript Core', role: 'Ultra-fast, type-safe responsive web applications', icon: 'Code' },
      { name: 'Tailwind CSS Custom Design System', role: 'Space Grotesk typography & cosmic dark aesthetic', icon: 'Sliders' },
      { name: 'Real-Time WebSocket Telemetry', role: 'Live mission-control dashboards and metrics', icon: 'Activity' },
      { name: 'Responsive Mobile Staff Terminals', role: 'Native-feel touch interfaces for on-the-move staff', icon: 'Smartphone' }
    ]
  }
];

// Supporting Design Offerings
export const DESIGN_SERVICES: ServiceOffering[] = [
  {
    id: 'enterprise-ui-ux',
    title: 'ENTERPRISE UI/UX SYSTEMS',
    tagline: 'Interfaces Engineered for High-Volume Operations',
    description: 'We design bespoke staff terminals, mobile concierge interfaces, and executive command centers that reduce operational fatigue, prevent human error, and accelerate workflow velocity.',
    deliverables: ['Atomic Design Systems', 'Figma Interactive Prototypes', 'Mobile Terminal Layouts', 'WCAG AAA Accessibility Audit'],
    impact: 'Accelerates employee software onboarding by 60% and eliminates interface-induced operational mistakes.',
    icon: 'Layout'
  },
  {
    id: 'corporate-digital-products',
    title: 'CORPORATE DIGITAL PLATFORMS',
    tagline: 'Modern Web Engineering with Cinematic Aesthetic',
    description: 'For organizations demanding world-class digital prestige, we engineer fast, responsive corporate websites and portals that articulate luxury, technical sophistication, and brand leadership.',
    deliverables: ['Custom React / Vite Web Platforms', 'SEO & Core Web Vitals Optimization', 'Dynamic CMS Architectures', 'Interactive Product Visualizers'],
    impact: 'Positions your enterprise as an industry authority and delivers sub-second page performance across Africa.',
    icon: 'Globe'
  },
  {
    id: 'visual-identity-systems',
    title: 'BRAND & IDENTITY ARCHITECTURE',
    tagline: 'Distinctive Visual Strategy for Modern Tech Brands',
    description: 'We develop cohesive brand systems, typography guidelines, vector icon sets, and digital brand collateral that project prestige and technological mastery.',
    deliverables: ['Brand Guidelines & Style Guides', 'Custom Iconography & 3D Assets', 'Executive Presentation Systems', 'Print & Physical Brand Collateral'],
    impact: 'Builds instant institutional credibility with enterprise partners, investors, and high-net-worth clients.',
    icon: 'Palette'
  }
];

// 5-Step Methodology
export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'UNDERSTAND',
    subtitle: 'Process Shadowing & Operational Audit',
    description: 'Our senior automation architects analyze your existing manual bottlenecks, interview key staff, and map every operational touchpoint.',
    highlights: ['Process Shadowing', 'Bottleneck Identification', 'ROI Opportunity Modeling']
  },
  {
    step: '02',
    title: 'DESIGN',
    subtitle: 'System Architecture Blueprint',
    description: 'We design the end-to-end multi-agent AI pipeline, data security boundaries, interface prototypes, and failure recovery protocols.',
    highlights: ['Architecture Blueprints', 'UI/UX Staff Wireframes', 'Security & NDPR Audit']
  },
  {
    step: '03',
    title: 'CONNECT',
    subtitle: 'Zero-Downtime Integration',
    description: 'We build secure cryptographic connectors linking your existing ERPs, databases, WhatsApp channels, and staff smartwatches.',
    highlights: ['API & Webhook Connectors', 'Legacy ERP Sync', 'Zero-Downtime Migration']
  },
  {
    step: '04',
    title: 'AUTOMATE',
    subtitle: 'Real-Time Orchestration Live',
    description: 'The autonomous AI engine takes over routine routing, document parsing, scheduling, and billing reconciliations seamlessly.',
    highlights: ['Multi-Agent Dispatch', 'Sub-Minute SLAs', 'Human Safety Overrides']
  },
  {
    step: '05',
    title: 'OPTIMIZE',
    subtitle: 'Continuous Telemetry & Scaling',
    description: 'We monitor live execution telemetry, refine prompt responses, update model parameters, and expand automation to new branches.',
    highlights: ['24/7 Telemetry Monitoring', 'Model Retraining', 'Multi-Branch Scaling']
  }
];

// Why Choose Librum 6 Pillars
export const WHY_LIBRUM_POINTS = [
  {
    id: 'ai-first',
    title: 'AI-First Architecture',
    description: 'We build native autonomous multi-agent pipelines, not surface-level chat widgets or isolated scripts.',
    icon: 'Brain'
  },
  {
    id: 'human-centered',
    title: 'Human-Centered Design',
    description: 'Exceptional digital product design ensures staff and customers adopt systems effortlessly from day one.',
    icon: 'Users'
  },
  {
    id: 'industry-specific',
    title: 'Industry-Specific Logic',
    description: 'Pre-engineered operational suites tailored for Nigerian hospitality, healthcare, retail, and education.',
    icon: 'Building2'
  },
  {
    id: 'integrated-not-disruptive',
    title: 'Integrated, Not Disruptive',
    description: 'We connect with the software you already use—Opera PMS, SAP, Oracle, Odoo, and WhatsApp.',
    icon: 'Network'
  },
  {
    id: 'scalable-resilient',
    title: 'Scalable & Resilient',
    description: 'Engineered for high concurrency and offline-first queue resilience during fluctuating connectivity.',
    icon: 'ShieldCheck'
  },
  {
    id: 'results-roi-focused',
    title: 'Results & ROI Focused',
    description: 'Every deployment is tied to measurable metrics: hours reclaimed, error reduction, and operational velocity.',
    icon: 'Target'
  }
];

// Frequently Asked Questions
export const FAQS = [
  {
    question: 'How long does a typical AI automation deployment take?',
    answer: 'A standard industry deployment (e.g., Hospitality WhatsApp + PMS dispatch or School Fee Reconciliation) takes between 2 to 4 weeks from process audit to live production. Custom enterprise ERP workflows with multi-departmental rules typically take 4 to 8 weeks.'
  },
  {
    question: 'Will our existing staff need extensive technical training to use Librum?',
    answer: 'No. Librum is designed around human-centered workflows. Staff receive straightforward notifications and task prompts on tools they already know—such as WhatsApp, mobile web terminals, or smartwatches. Most teams master the interface in less than 30 minutes.'
  },
  {
    question: 'Do we have to replace our existing PMS, ERP, or accounting software?',
    answer: 'Absolutely not. Our philosophy is zero-disruption integration. We connect directly into your existing software (Opera PMS, SAP, Oracle, Odoo, QuickBooks, custom SQL databases) via secure webhooks and APIs.'
  },
  {
    question: 'How does Librum ensure the security and privacy of our proprietary business data?',
    answer: 'We enforce 256-bit TLS encryption in transit and AES-256 at rest. We provide private sandboxed models and on-premise air-gapped deployment options to ensure complete Nigerian Data Protection Regulation (NDPR) compliance. Your data is never used to train public foundational models.'
  },
  {
    question: 'Where is Librum Technologies located?',
    answer: `Librum Technologies Limited is headquartered at ${COMPANY_CONFIG.address}. We serve institutional and commercial clients across Lagos, Nigeria, Africa, and internationally.`
  }
];
