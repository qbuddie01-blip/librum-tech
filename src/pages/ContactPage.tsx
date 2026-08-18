import React, { useState } from 'react';
import type { PageRoute, ContactForm } from '../types';
import { FAQS } from '../data/websiteData';
import { COMPANY_CONFIG } from '../config/constants';
import { MapPin, Mail, Phone, Globe, CheckCircle2, ChevronDown, ChevronUp, Terminal } from 'lucide-react';

interface ContactPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onRouteChange }) => {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Hospitality',
    serviceRequired: 'AI Workflow Automation',
    organizationSize: '10 - 50 employees',
    automationNeed: 'Hotel Operations',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const automationOptions = [
    'Hotel Operations',
    'School Operations',
    'Hospital Operations',
    'Retail Operations',
    'Enterprise Workflow',
    'Customer Service',
    'Procurement',
    'HR',
    'Finance',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.company.trim()) {
      setFormError('Please fill in all required contact information.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-tech-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>DIRECT AUTOMATION GATEWAY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
            CONNECT WITH <span className="gold-gradient-text">LIBRUM</span>
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Ready to transform your business operations with autonomous AI workflows? Connect with our senior automation team in Ikoyi, Lagos.
          </p>
        </div>

        {/* Main Grid: Contact Form (7 cols) + Headquarters Card (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Terminal Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-amber-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl text-left">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">librum.secure.inquiry.v2</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">ENCRYPTED 256-BIT</span>
            </div>

            {formError && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono text-left">
                {formError}
              </div>
            )}

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-white">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong className="text-amber-400">{formData.fullName}</strong>. An automation solutions architect from our Ikoyi office will contact you within 24 business hours.
                </p>

                <div className="mt-6 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        company: '',
                        email: '',
                        phone: '',
                        industry: 'Hospitality',
                        serviceRequired: 'AI Workflow Automation',
                        organizationSize: '10 - 50 employees',
                        automationNeed: 'Hotel Operations',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-heading text-xs uppercase cursor-pointer hover:bg-slate-700"
                  >
                    Send Another Inquiry
                  </button>
                  <button
                    onClick={() => onRouteChange('home')}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-heading font-bold text-xs uppercase cursor-pointer hover:bg-amber-400"
                  >
                    Return Home
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-fullname" className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      required
                      placeholder="e.g. Chinelo Okonkwo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                      Company / Organization *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      placeholder="e.g. Victoria Bay Hotels"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                      Corporate Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. c.okonkwo@victoriabay.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="e.g. +234 813 848 8697"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Industry & Service Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-industry" className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                      Industry Sector
                    </label>
                    <select
                      id="contact-industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:border-amber-400 focus:outline-none cursor-pointer"
                    >
                      <option value="Hospitality">Hospitality & Hotel Operations</option>
                      <option value="Healthcare">Healthcare & Hospitals</option>
                      <option value="Education">Schools & Education</option>
                      <option value="Retail">Retail & Departmental Stores</option>
                      <option value="Corporate">Corporate & Enterprise</option>
                      <option value="Custom">Custom Proprietary Sector</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:border-amber-400 focus:outline-none cursor-pointer"
                    >
                      <option value="AI Workflow Automation">AI Workflow Automation</option>
                      <option value="ERP & Digital Transformation">ERP & Digital Transformation</option>
                      <option value="UI/UX & Digital Design">UI/UX & Digital Design</option>
                      <option value="Modern Web Engineering">Modern Web Engineering</option>
                      <option value="AI Assistant Integration">AI Assistant Integration</option>
                    </select>
                  </div>
                </div>

                {/* What would you like to automate? Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-automation-need" className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                      What would you like to automate? *
                    </label>
                    <select
                      id="contact-automation-need"
                      value={formData.automationNeed}
                      onChange={(e) => setFormData({ ...formData, automationNeed: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:border-amber-400 focus:outline-none cursor-pointer"
                    >
                      {automationOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-org-size" className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                      Organization Size
                    </label>
                    <select
                      id="contact-org-size"
                      value={formData.organizationSize}
                      onChange={(e) => setFormData({ ...formData, organizationSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:border-amber-400 focus:outline-none cursor-pointer"
                    >
                      <option value="1 - 10 employees">1 - 10 employees</option>
                      <option value="10 - 50 employees">10 - 50 employees</option>
                      <option value="50 - 250 employees">50 - 250 employees</option>
                      <option value="250+ employees">250+ employees</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                    Message / Project Summary
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Provide details regarding your operational workflows, current systems in place, and project timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'DISPATCHING TO LIBRUM ARCHITECTS...' : 'START YOUR AUTOMATION JOURNEY →'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Headquarters & Quick Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Headquarters Card */}
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <MapPin className="w-4 h-4" />
                <span>OFFICIAL HEADQUARTERS</span>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-white">
                  {COMPANY_CONFIG.legalName}
                </h3>
                <p className="text-xs font-mono text-amber-400/80 mt-0.5">
                  {COMPANY_CONFIG.primaryPositioning}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {COMPANY_CONFIG.address}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-amber-400 transition-colors">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href={`tel:${COMPANY_CONFIG.phoneClean}`} className="hover:text-amber-400 transition-colors">
                    {COMPANY_CONFIG.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href={COMPANY_CONFIG.websiteUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                    {COMPANY_CONFIG.website}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
                <span className="text-white font-semibold block mb-1">Office Hours:</span>
                Monday – Friday: 08:00 AM – 06:00 PM (WAT)<br />
                24/7 Emergency Support for Enterprise SLAs.
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold block">
                  FAST RESPONSE
                </span>
                <span className="text-sm font-heading font-bold text-white">
                  WhatsApp Direct Line
                </span>
              </div>
              <a
                href={COMPANY_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider transition-all"
              >
                Chat on WhatsApp →
              </a>
            </div>

          </div>

        </div>

        {/* Interactive FAQ Section */}
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
              Answers for Enterprise Decision Makers
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
