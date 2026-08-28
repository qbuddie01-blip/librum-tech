import React, { useState } from 'react';
import type { PageRoute, DemoBookingForm } from '../types';
import { Calendar, CheckCircle2, Building, Mail, Phone, User, ShieldCheck, RotateCcw } from 'lucide-react';

interface ScheduleDemoPageProps {
  onRouteChange: (route: PageRoute) => void;
  preselectedIndustry?: string;
}

export const ScheduleDemoPage: React.FC<ScheduleDemoPageProps> = ({ onRouteChange, preselectedIndustry }) => {
  const [formData, setFormData] = useState<DemoBookingForm>({
    name: '',
    organization: '',
    email: '',
    phone: '',
    industry: preselectedIndustry || 'hospitality',
    preferredDate: '',
    preferredTime: 'Morning: 09:00 AM – 12:00 PM (WAT)',
    automationFocus: 'Hotel Operations',
    teamSize: '10 - 50 employees',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const industryOptions = [
    { value: 'hospitality', label: 'Hotel & Hospitality Operations' },
    { value: 'healthcare', label: 'Hospitals & Clinical Workflows' },
    { value: 'education', label: 'Schools & Educational Academies' },
    { value: 'retail', label: 'Retail Stores & Supermarkets' },
    { value: 'enterprise', label: 'Corporate & Enterprise Logistics' },
    { value: 'custom', label: 'Custom Proprietary Workflows' },
  ];

  const timeSlots = [
    'Morning: 09:00 AM – 12:00 PM (WAT)',
    'Afternoon: 01:00 PM – 04:00 PM (WAT)',
    'Evening: 04:00 PM – 06:00 PM (WAT)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.organization.trim()) {
      setFormError('Please fill in all required contact and organization details.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormError(null);
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      industry: 'hospitality',
      preferredDate: '',
      preferredTime: 'Morning: 09:00 AM – 12:00 PM (WAT)',
      automationFocus: 'Hotel Operations',
      teamSize: '10 - 50 employees',
      additionalNotes: ''
    });
  };

  return (
    <div className="pt-28 pb-24 bg-white relative overflow-hidden">
      
      {/* Light Ambient Background */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>EXECUTIVE CONSULTATION & DEMO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
            Schedule an <span className="text-blue-600">executive demo</span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Request a tailored demonstration with our senior automation architects. We will analyze your existing workflows and present a live simulated automation architecture for your industry.
          </p>
        </div>

        {/* Confirmation State or Form */}
        {isSubmitted ? (
          <div className="rounded-3xl bg-white border border-emerald-300 p-8 sm:p-12 shadow-sm text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-9 h-9 text-emerald-600" />
            </div>

            <span className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 tracking-wider uppercase mb-3 inline-block font-bold">
              DEMO REQUEST RECEIVED
            </span>

            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950 mt-2">
              Thank you, {formData.name}.
            </h2>
            
            <p className="mt-3 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
              Our enterprise solutions team in Ikoyi, Lagos has received your demonstration inquiry. A solutions architect will review your operational requirements and contact you via email ({formData.email}) and phone ({formData.phone}) to confirm your preferred schedule.
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-[#F5F9FF] border border-blue-100 max-w-md mx-auto text-left text-xs font-mono text-slate-700 space-y-2">
              <div className="flex justify-between border-b border-blue-200/60 pb-1.5">
                <span className="text-slate-500">Organization:</span>
                <span className="text-slate-900 font-bold">{formData.organization}</span>
              </div>
              <div className="flex justify-between border-b border-blue-200/60 pb-1.5">
                <span className="text-slate-500">Industry:</span>
                <span className="text-blue-700 font-bold">{formData.industry.toUpperCase()}</span>
              </div>
              <div className="flex justify-between border-b border-blue-200/60 pb-1.5">
                <span className="text-slate-500">Preferred Window:</span>
                <span className="text-slate-900">{formData.preferredTime}</span>
              </div>
              {formData.preferredDate && (
                <div className="flex justify-between border-b border-blue-200/60 pb-1.5">
                  <span className="text-slate-500">Preferred Date:</span>
                  <span className="text-slate-900">{formData.preferredDate}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-500">Office Location:</span>
                <span className="text-slate-900">Ikoyi, Lagos State</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onRouteChange('home')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs"
              >
                Return to Homepage
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Submit Another Request</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
            
            {formError && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono text-left">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              {/* Row 1: Name & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="demo-name" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="demo-name"
                      type="text"
                      required
                      placeholder="e.g. Oluwaseun Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="demo-organization" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1.5">
                    Company / Organization *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="demo-organization"
                      type="text"
                      required
                      placeholder="e.g. Victoria Bay Hotels & Suites"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="demo-email" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1.5">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="demo-email"
                      type="email"
                      required
                      placeholder="e.g. o.adeleke@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="demo-phone" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1.5">
                    Phone Number (WhatsApp Preferred) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="demo-phone"
                      type="tel"
                      required
                      placeholder="e.g. +234 813 848 8697"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Industry & Organization Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="demo-industry" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1.5">
                    Industry Sector *
                  </label>
                  <select
                    id="demo-industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
                  >
                    {industryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="demo-teamsize" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1.5">
                    Organization Size
                  </label>
                  <select
                    id="demo-teamsize"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
                  >
                    <option value="1 - 10 employees">1 - 10 employees</option>
                    <option value="10 - 50 employees">10 - 50 employees</option>
                    <option value="50 - 250 employees">50 - 250 employees</option>
                    <option value="250+ employees">250+ enterprise employees</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Date & Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="demo-date" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1.5">
                    Preferred Demonstration Date
                  </label>
                  <input
                    id="demo-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="demo-timewindow" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1.5">
                    Preferred Time Window (WAT)
                  </label>
                  <select
                    id="demo-timewindow"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Automation Focus */}
              <div>
                <label htmlFor="demo-notes" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1.5">
                  What workflows would you like to automate?
                </label>
                <textarea
                  id="demo-notes"
                  rows={3}
                  placeholder="Describe your current operational bottlenecks (e.g., guest check-in, patient registration, multi-store supplier reorders, invoice approval chains)..."
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  className="w-full p-4 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA & Confidentiality Protected. We never disclose your proprietary workflows.</span>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-sm uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01]"
                >
                  <span>{isSubmitting ? 'TRANSMITTING INQUIRY...' : 'REQUEST A DEMO →'}</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
