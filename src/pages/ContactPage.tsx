import React, { useState } from 'react';
import type { PageRoute, ContactForm } from '../types';
import { FAQS } from '../data/websiteData';
import { COMPANY_CONFIG } from '../config/constants';
import { MapPin, Mail, Phone, Globe, CheckCircle2, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

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
    }, 800);
  };

  return (
    <div className="pt-28 pb-24 bg-white relative overflow-hidden">
      
      {/* Light Ambient Background */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>DIRECT AUTOMATION GATEWAY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-950 tracking-tight">
            Connect with <span className="text-blue-600">Librum</span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your business operations with intelligent AI workflows? Connect with our senior automation team in Ikoyi, Lagos.
          </p>
        </div>

        {/* Main Grid: Contact Form (7 cols) + Headquarters Card (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Form (7 cols with Clean White Card) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm text-left">
            
            {/* Header Strip */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-700">Direct Enterprise Inquiry</span>
              </div>
              <span className="text-[10px] font-mono text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded-full">CONFIDENTIAL INQUIRY</span>
            </div>

            {formError && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono text-left">
                {formError}
              </div>
            )}

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-slate-950">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. An automation solutions architect from our Ikoyi office will contact you within 24 business hours.
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
                    className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-heading font-semibold text-xs uppercase cursor-pointer hover:bg-slate-200"
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
                    <label htmlFor="contact-fullname" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      required
                      placeholder="e.g. Chinelo Okonkwo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1">
                      Company / Organization *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      placeholder="e.g. Victoria Bay Hotels"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1">
                      Corporate Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. c.okonkwo@victoriabay.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="e.g. +234 813 848 8697"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Industry & Service Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-industry" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1">
                      Industry Sector
                    </label>
                    <select
                      id="contact-industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
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
                    <label htmlFor="contact-service" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1">
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
                    >
                      <option value="AI Workflow Automation">AI Workflow Automation</option>
                      <option value="ERP & Digital Transformation">ERP & Digital Transformation</option>
                      <option value="UI/UX & Digital Design">UI/UX & Digital Design</option>
                      <option value="Modern Web Engineering">Modern Web Engineering</option>
                      <option value="AI Assistant Integration">AI Assistant Integration</option>
                    </select>
                  </div>
                </div>

                {/* What would you like to automate? */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-automation-need" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1">
                      What would you like to automate? *
                    </label>
                    <select
                      id="contact-automation-need"
                      value={formData.automationNeed}
                      onChange={(e) => setFormData({ ...formData, automationNeed: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
                    >
                      {automationOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-org-size" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1">
                      Organization Size
                    </label>
                    <select
                      id="contact-org-size"
                      value={formData.organizationSize}
                      onChange={(e) => setFormData({ ...formData, organizationSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
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
                  <label htmlFor="contact-message" className="text-xs font-mono uppercase text-slate-700 font-bold block mb-1">
                    Message / Project Summary
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Provide details regarding your operational workflows, current systems in place, and project timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 font-sans text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-sm uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01]"
                  >
                    <span>{isSubmitting ? 'DISPATCHING TO LIBRUM ARCHITECTS...' : 'START YOUR AUTOMATION JOURNEY →'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Headquarters & Quick Info (5 cols with Clean Light Blue Card) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Headquarters Card */}
            <div className="p-8 rounded-3xl bg-[#F5F9FF] border border-blue-200/80 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-bold">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>OFFICIAL HEADQUARTERS</span>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-slate-950">
                  {COMPANY_CONFIG.legalName}
                </h3>
                <p className="text-xs font-mono text-blue-600 font-semibold mt-0.5">
                  {COMPANY_CONFIG.primaryPositioning}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {COMPANY_CONFIG.address}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-blue-200/60 text-xs font-mono text-slate-700">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-blue-700 transition-colors font-medium">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href={`tel:${COMPANY_CONFIG.phoneClean}`} className="hover:text-blue-700 transition-colors font-medium">
                    {COMPANY_CONFIG.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href={COMPANY_CONFIG.websiteUrl} target="_blank" rel="noreferrer" className="hover:text-blue-700 transition-colors font-medium">
                    {COMPANY_CONFIG.website}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600">
                <span className="text-slate-900 font-semibold block mb-1">Office Hours:</span>
                Monday – Friday: 08:00 AM – 06:00 PM (WAT)<br />
                Dedicated Support for Enterprise Operations.
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-emerald-800 uppercase font-bold block">
                  FAST RESPONSE
                </span>
                <span className="text-sm font-heading font-bold text-slate-950">
                  WhatsApp Direct Line
                </span>
              </div>
              <a
                href={COMPANY_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                Chat on WhatsApp →
              </a>
            </div>

          </div>

        </div>

        {/* Interactive FAQ Section (Clean White Cards) */}
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-blue-700 uppercase tracking-widest block font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950 mt-1">
              Answers for Enterprise Decision Makers
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-slate-950">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
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
