import { useState } from 'react';
import { VEArrowRightIcon } from './VEIcons';

const SOCIAL_LINKS = [
  { label: 'Instagram',     href: 'https://instagram.com/aryan.ake', handle: '@aryan.ake' },
  { label: 'LinkedIn',      href: 'https://linkedin.com/in/aryankumarekka', handle: 'aryankumarekka' },
  { label: 'GitHub',        href: 'https://github.com/AryanAKE', handle: '@AryanAKE' },
  { label: 'X / Twitter',   href: 'https://x.com/aryanake', handle: '@aryanake' },
];

const INFO_ROWS = [
  { label: 'Email',      value: 'aryankumarekka@gmail.com', href: 'mailto:aryankumarekka@gmail.com' },
  { label: 'Based in',   value: 'Assam, India', href: null },
  { label: 'Available',  value: 'Open to projects', href: null },
  { label: 'Response',   value: 'Within 24 hours', href: null },
];

const SERVICES = [
  'Cinematic Editing',
  'Vlog Editing',
  'Real Estate Tour',
  'Event Highlights',
  'Podcast Editing',
  'Brand Identity',
  'Motion Design',
  'Other / Custom',
];

const BUDGETS = [
  '< $250',
  '$250 - $500',
  '$500 - $1,000',
  '$1,000+',
];

export default function VEContactSection() {
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const selectService = (service) =>
    setForm((prev) => ({ ...prev, service }));

  const selectBudget = (budget) =>
    setForm((prev) => ({ ...prev, budget }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.service) {
      alert('Please select a service option');
      return;
    }
    const subject = encodeURIComponent(`[Echelon Media] Project Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nBudget: ${form.budget || 'Not specified'}\n\nProject Brief:\n${form.message}`
    );
    window.open(`mailto:aryankumarekka@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white ve-border-t">
      <div className="mx-auto max-w-7xl">

        {/* Header Label Bar */}
        <div className="ve-border-b flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Enquiry Portal
          </span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-400 font-mono">
            EST. REPLY: &lt; 24H
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_420px]">

          {/* Left Panel: The Interactive Form */}
          <div className="px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
            
            {/* Elegant Header Area */}
            <div className="mb-16">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black uppercase leading-none select-none">
                Start a<br />
                <span 
                  style={{
                    color: '#f5f5f5',
                    WebkitTextStroke: '1.5px #000',
                  }}
                  className="font-black"
                >
                  project
                </span>
              </h2>
              <p className="mt-6 text-sm text-neutral-500 font-mono max-w-md">
                Complete the brief below to initialize project onboarding. I will evaluate the requirements and contact you with proposal details.
              </p>
            </div>

            {submitted ? (
              <div className="ve-border p-8 max-w-md bg-neutral-50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-2 py-0.5 font-mono">
                    DISPATCHED
                  </span>
                </div>
                <h4 className="text-lg font-bold text-black uppercase tracking-tight mb-2">Thank you, {form.name}</h4>
                <p className="text-xs text-neutral-600 font-mono leading-relaxed">
                  Your mail client has been opened to finalize the transmission. If it did not launch automatically, please send your project outline directly to <a href="mailto:aryankumarekka@gmail.com" className="underline font-bold text-black">aryankumarekka@gmail.com</a>.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', budget: '', message: '' }); }}
                  className="mt-8 inline-flex items-center gap-2 border border-black px-4 py-2 text-[9px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">

                {/* 01. Identification Block */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold font-mono bg-black text-white px-1.5 py-0.5">01</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Identity Details</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className={`ve-border-b transition-all duration-300 pb-2 ${focused === 'name' ? 'border-b-black pl-2' : 'border-b-neutral-200'}`}>
                      <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="e.g. John Doe"
                        className="w-full bg-transparent text-sm font-medium text-black placeholder-neutral-300 outline-none"
                      />
                    </div>

                    {/* Email Input */}
                    <div className={`ve-border-b transition-all duration-300 pb-2 ${focused === 'email' ? 'border-b-black pl-2' : 'border-b-neutral-200'}`}>
                      <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="e.g. john@example.com"
                        className="w-full bg-transparent text-sm font-medium text-black placeholder-neutral-300 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* 02. Service Selection Pills */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold font-mono bg-black text-white px-1.5 py-0.5">02</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Select Service</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {SERVICES.map((service) => {
                      const isSelected = form.service === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => selectService(service)}
                          className={`px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                            isSelected 
                              ? 'bg-black text-white border border-black shadow-sm'
                              : 'bg-white text-neutral-500 border border-neutral-200 hover:border-black hover:text-black'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 03. Budget Selection Pills */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold font-mono bg-black text-white px-1.5 py-0.5">03</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Estimated Budget</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {BUDGETS.map((budget) => {
                      const isSelected = form.budget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => selectBudget(budget)}
                          className={`px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                            isSelected 
                              ? 'bg-black text-white border border-black'
                              : 'bg-white text-neutral-500 border border-neutral-200 hover:border-black hover:text-black'
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 04. Message Brief */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold font-mono bg-black text-white px-1.5 py-0.5">04</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Project Brief</span>
                  </div>

                  <div className={`ve-border-b transition-all duration-300 pb-2 ${focused === 'message' ? 'border-b-black pl-2' : 'border-b-neutral-200'}`}>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows={4}
                      placeholder="Outline details, style references, timelines, and other specifics..."
                      className="w-full bg-transparent text-sm font-medium text-black placeholder-neutral-300 outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="group flex items-center justify-between gap-6 bg-black text-white px-8 py-5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:bg-neutral-800"
                  >
                    <span>Submit Project Brief</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      <VEArrowRightIcon size={12} />
                    </span>
                  </button>
                  <p className="mt-4 text-[9px] text-neutral-400 font-mono">
                    Submitting activates default email client pipeline. No database transmission occurred.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Solid Brutalist Divider Line */}
          <div className="hidden lg:block bg-black" />

          {/* Right Panel: Information Matrix */}
          <div className="bg-[#fcfcfc] ve-border-t lg:ve-no-border-t flex flex-col justify-between">
            
            {/* Meta Rows */}
            <div>
              <div className="ve-border-b px-6 py-4 bg-black">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white font-mono">
                  MATRIX DETAILS
                </span>
              </div>
              
              <div className="divide-y divide-neutral-100">
                {INFO_ROWS.map((row) => (
                  <div key={row.label} className="px-6 py-6 flex flex-col gap-1.5 hover:bg-neutral-50 transition-colors">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                      {row.label}
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="text-xs font-semibold text-black hover:underline underline-offset-4 font-mono select-all"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-black font-mono">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Matrix */}
            <div>
              <div className="ve-border-t ve-border-b px-6 py-4 bg-black">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white font-mono">
                  COMMUNICATION CHANNELS
                </span>
              </div>

              <div className="divide-y divide-neutral-100">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between px-6 py-5 bg-white hover:bg-neutral-50 transition-colors duration-150"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-bold uppercase tracking-tight text-neutral-800">
                        {link.label}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {link.handle}
                      </span>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <VEArrowRightIcon size={12} />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer status bar */}
            <div className="ve-border-t px-6 py-5 flex items-center justify-between bg-neutral-50">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 font-mono">
                  AVAILABILITY: SECURED
                </span>
              </div>
              <span className="text-[9px] text-neutral-300 font-mono">
                v2.0
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
