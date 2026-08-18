import React from 'react';
import type { PageRoute } from '../types';
import { Sparkles, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Target, Users, Building, Award } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface AboutUsPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onRouteChange }) => {
  const leadershipValues = [
    {
      title: 'Operational Velocity First',
      desc: 'We judge technology solely by its impact on real-world business turnaround, cost efficiency, and error elimination.',
      icon: <Target className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Indigenous Innovation, Global Standards',
      desc: 'Headquartered in Ikoyi, Lagos, our architectures are engineered for the specific nuances of African markets while meeting stringent international security standards.',
      icon: <Building className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Human-Centered Intelligence',
      desc: 'AI should not alienate workers; it should liberate staff from repetitive toil so they can focus on high-value strategy and customer service excellence.',
      icon: <Users className="w-5 h-5 text-purple-400" />
    },
    {
      title: 'Zero Compromise on Data Sovereignty',
      desc: 'We enforce strict cryptographic standards, private model sandboxing, and full NDPR compliance across every pipeline.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-tech-mesh">
      
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR MISSION & LEADERSHIP</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            WE BUILD INTELLIGENT SYSTEMS THAT MAKE{' '}
            <span className="gold-gradient-text">ORGANIZATIONS WORK SMARTER.</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {COMPANY_CONFIG.legalName} is an AI Automation & Digital Transformation enterprise headquartered in Lagos, Nigeria. We re-engineer how organizations operate by replacing manual bottlenecks with connected, intelligent workflows.
          </p>
        </div>

        {/* Story Grid with Executive Profile & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Left Visual Card with Executive Profile (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl group bg-slate-900">
              
              {/* Executive Portrait Image */}
              <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden">
                <img 
                  src="/leadership-profile.jpg" 
                  alt="Librum Technologies Executive Leadership" 
                  className="w-full h-full object-cover object-top filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-amber-500/50 text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider shadow-lg backdrop-blur-md flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>EXECUTIVE LEADERSHIP</span>
                  </span>
                </div>
              </div>
              
              {/* Bottom Executive Profile Info */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-left shadow-2xl">
                <span className="text-sm font-heading font-bold text-white block">
                  {COMPANY_CONFIG.legalName}
                </span>
                <span className="text-[11px] text-amber-400 font-mono block mt-0.5">
                  {COMPANY_CONFIG.primaryPositioning}
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1">
                  <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Ikoyi, Lagos State, Nigeria</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Narrative (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-5">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">
              WHO WE ARE
            </span>

            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Architects of Autonomous, Connected Enterprise Workflows.
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              At Librum Technologies Limited, we recognized a fundamental truth in today's commercial landscape: organizations do not slow down for lack of talent; they slow down because their workflows are fragmented across disjointed software, manual spreadsheets, and disconnected messaging channels.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Whether orchestrating guest requests across a luxury hotel, automating emergency patient triage in clinical facilities, syncing inventory across multi-branch supermarkets, or eliminating bureaucratic delays in corporate approval chains, Librum builds the intelligent neural bridge that ties people, software, and actions together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AI Workflow Engineering</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Enterprise ERP Middleware</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Bespoke Product Architecture</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>World-Class UI/UX Systems</span>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">
              GUIDING PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
              The Values That Drive Our Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {leadershipValues.map((val, vIdx) => (
              <div
                key={vIdx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 w-fit mb-4">
                    {val.icon}
                  </div>
                  <h3 className="font-heading text-base font-bold text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Headquarters Card */}
        <div className="rounded-3xl bg-slate-900/80 border border-amber-500/30 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold mb-2">
            LOCATION & CONTACT
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            Visit Our Innovation Hub in Ikoyi, Lagos
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {COMPANY_CONFIG.address}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-300">
            <span>Email: <strong className="text-amber-400">{COMPANY_CONFIG.email}</strong></span>
            <span>Phone: <strong className="text-amber-400">{COMPANY_CONFIG.phone}</strong></span>
          </div>

          <div className="mt-8">
            <button
              onClick={() => onRouteChange('schedule-demo')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>SCHEDULE AN EXECUTIVE CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
