import React from 'react';
import type { PageRoute } from '../types';
import { Sparkles, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Target, Users, Building, Award } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';
import leadershipImg from '../assets/leadership-profile.jpg';

interface AboutUsPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onRouteChange }) => {
  const leadershipValues = [
    {
      title: 'Operational Impact First',
      desc: 'We judge technology solely by its impact on real-world business turnaround, cost efficiency, and error reduction.',
      icon: <Target className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Indigenous Innovation, Global Standards',
      desc: 'Headquartered in Ikoyi, Lagos, our architectures are engineered for the operational nuances of African markets while meeting stringent international security standards.',
      icon: <Building className="w-5 h-5 text-purple-600" />
    },
    {
      title: 'Human-Centered Intelligence',
      desc: 'AI should not alienate workers; it should liberate staff from repetitive toil so they can focus on high-value strategy and customer service excellence.',
      icon: <Users className="w-5 h-5 text-amber-600" />
    },
    {
      title: 'Enterprise Data Privacy & Security',
      desc: 'We enforce standard encryption protocols, dedicated private model sandboxing, and strict privacy principles across every integration.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-white relative overflow-hidden">
      
      {/* Light Ambient Background */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>OUR MISSION & LEADERSHIP</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-950 tracking-tight leading-tight">
            We build intelligent systems that make{' '}
            <span className="text-blue-600">organizations work smarter.</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {COMPANY_CONFIG.legalName} is an AI Automation & Digital Transformation enterprise headquartered in Lagos, Nigeria. We re-engineer how organizations operate by replacing manual bottlenecks with connected, intelligent workflows.
          </p>
        </div>

        {/* Story Grid with Executive Profile & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Left Visual Card with Executive Profile (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm group bg-slate-100">
              
              {/* Executive Portrait Image */}
              <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden">
                <img 
                  src={leadershipImg} 
                  alt="Librum Technologies Executive Leadership" 
                  className="w-full h-full object-cover object-top filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 text-xs font-heading text-slate-900 font-bold uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>EXECUTIVE LEADERSHIP</span>
                  </span>
                </div>
              </div>
              
              {/* Bottom Executive Profile Info */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-left shadow-md">
                <span className="text-sm font-heading font-bold text-slate-950 block">
                  {COMPANY_CONFIG.legalName}
                </span>
                <span className="text-xs text-blue-600 font-mono font-medium block mt-0.5">
                  {COMPANY_CONFIG.primaryPositioning}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Ikoyi, Lagos State, Nigeria</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Narrative (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-5">
            <span className="text-xs font-mono text-blue-700 uppercase tracking-widest block font-bold">
              WHO WE ARE
            </span>

            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950">
              Architects of Connected Enterprise Workflows.
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              At Librum Technologies Limited, we recognized a fundamental truth in today's commercial landscape: organizations do not slow down for lack of talent; they slow down because their workflows are fragmented across disjointed software, manual spreadsheets, and disconnected messaging channels.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether organizing guest requests across a luxury hotel, streamlining patient intake in clinical facilities, syncing inventory across multi-branch supermarkets, or eliminating delays in corporate approval chains, Librum builds the connected bridge that ties people, software, and actions together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>AI Workflow Engineering</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Enterprise ERP Integration</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Bespoke Product Architecture</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Modern UI/UX Systems</span>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Grid (Clean White Cards) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-blue-700 uppercase tracking-widest block font-bold">
              GUIDING PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950 mt-1">
              The Values That Drive Our Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {leadershipValues.map((val, vIdx) => (
              <div
                key={vIdx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-2xl bg-slate-50 w-fit mb-4">
                    {val.icon}
                  </div>
                  <h3 className="font-heading text-base font-bold text-slate-950 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Headquarters Card (Clean Light Blue Container) */}
        <div className="rounded-3xl bg-[#F5F9FF] border border-blue-200 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xs">
          <span className="text-xs font-mono text-blue-700 uppercase tracking-widest block font-bold mb-2">
            LOCATION & CONTACT
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950">
            Visit Our Innovation Hub in Ikoyi, Lagos
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            {COMPANY_CONFIG.address}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-700">
            <span>Email: <strong className="text-blue-700">{COMPANY_CONFIG.email}</strong></span>
            <span>Phone: <strong className="text-blue-700">{COMPANY_CONFIG.phone}</strong></span>
          </div>

          <div className="mt-8">
            <button
              onClick={() => onRouteChange('schedule-demo')}
              className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
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
