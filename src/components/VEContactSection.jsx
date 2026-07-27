import { useState } from 'react';
import { VEArrowRightIcon } from './VEIcons';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/aryan.ake', value: 'aryan.ake' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/aryankumarekka', value: 'aryankumarekka' },
  { label: 'GitHub',    href: 'https://github.com/AryanAKE', value: 'AryanAKE' },
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

export default function VEContactSection() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const selectService = (service) =>
    setForm((prev) => ({ ...prev, service }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Echelon Media] Project Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service || 'Not specified'}\n\nProject Brief:\n${form.message}`
    );
    window.open(`mailto:aryankumarekka@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white border-t border-neutral-100 py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-20 lg:gap-32">

          {/* Left Column: Context & Connection */}
          <div className="flex flex-col justify-between space-y-16">
            
            {/* Header Text */}
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block">
                / CONNECT
              </span>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-neutral-900 leading-[1.1] font-sans">
                Let&apos;s build a <span className="font-serif italic font-normal text-neutral-700">timeless</span> experience.
              </h2>
              <p className="text-xs text-neutral-500 font-mono leading-relaxed max-w-sm">
                Collaborations are structured around selective creative goals. Use the interactive form to outline your project parameters.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-8 pt-4 border-t border-neutral-100">
              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Direct Enquiry
                </span>
                <a
                  href="mailto:aryankumarekka@gmail.com"
                  className="text-sm font-medium text-neutral-800 hover:text-black transition-colors font-mono select-all underline underline-offset-4"
                >
                  aryankumarekka@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Social Channels
                </span>
                <div className="space-y-3">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between text-xs text-neutral-500 hover:text-black transition-colors pb-1 border-b border-neutral-50 max-w-xs"
                    >
                      <span className="font-medium">{link.label}</span>
                      <span className="font-mono text-[10px] text-neutral-400">{link.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Status dot */}
            <div className="flex items-center gap-3 pt-6 border-t border-neutral-100">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">
                Onboarding: active &amp; open
              </span>
            </div>

          </div>

          {/* Right Column: Clean Sentence-based Form */}
          <div className="lg:pt-2">
            {submitted ? (
              <div className="max-w-md py-16">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50/70 border border-emerald-100 px-3 py-1 rounded">
                  TRANSMISSION ENCRYPTED
                </span>
                <h4 className="text-2xl font-light text-neutral-900 mt-8 mb-3">Enquiry Ready</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-mono">
                  Your native mail utility was opened with the form payload. If it failed to trigger, please dispatch details directly to <a href="mailto:aryankumarekka@gmail.com" className="font-bold text-black underline">aryankumarekka@gmail.com</a>.
                </p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', message: '' }); }}
                  className="mt-8 inline-flex items-center gap-2 border border-neutral-200 hover:border-black px-4 py-2 text-[9px] font-mono uppercase tracking-widest transition-colors"
                >
                  Create New Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12 max-w-3xl">
                
                {/* 01. Info inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {/* Name Input */}
                  <div className="relative">
                    <label className={`absolute left-0 text-[10px] uppercase font-mono tracking-widest transition-all duration-300 ${
                      focused === 'name' || form.name ? '-top-4 text-neutral-400 scale-90' : 'top-2 text-neutral-300 pointer-events-none'
                    }`}>
                      01 / Your Name
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent text-base font-light text-neutral-800 outline-none pt-2 pb-1 border-b border-neutral-100 focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className={`absolute left-0 text-[10px] uppercase font-mono tracking-widest transition-all duration-300 ${
                      focused === 'email' || form.email ? '-top-4 text-neutral-400 scale-90' : 'top-2 text-neutral-300 pointer-events-none'
                    }`}>
                      02 / Your Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent text-base font-light text-neutral-800 outline-none pt-2 pb-1 border-b border-neutral-100 focus:border-neutral-900 transition-colors"
                    />
                  </div>
                </div>

                {/* 02. Service Picker */}
                <div className="space-y-4 pt-4">
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                    03 / Select Creative Category
                  </span>
                  
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((service) => {
                      const isSelected = form.service === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => selectService(service)}
                          className={`px-4 py-2 text-[10px] font-mono tracking-wider transition-all duration-200 border ${
                            isSelected 
                              ? 'bg-neutral-950 border-neutral-950 text-white shadow-sm'
                              : 'bg-white border-neutral-200 text-neutral-400 hover:border-neutral-400 hover:text-neutral-700'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 03. Textarea Details */}
                <div className="relative pt-4">
                  <label className={`absolute left-0 text-[10px] uppercase font-mono tracking-widest transition-all duration-300 ${
                    focused === 'message' || form.message ? '-top-4 text-neutral-400 scale-90' : 'top-2 text-neutral-300 pointer-events-none'
                  }`}>
                    04 / Describe Project Objectives &amp; Style References
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    rows={4}
                    className="w-full bg-transparent text-base font-light text-neutral-800 outline-none pt-4 pb-1 border-b border-neutral-100 focus:border-neutral-900 transition-colors resize-none"
                  />
                </div>

                {/* Submit Trigger */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-between gap-8 bg-neutral-950 hover:bg-black text-white px-8 py-4.5 text-[10px] uppercase font-mono tracking-[0.2em] transition-all duration-300"
                  >
                    <span>Transmit brief</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      <VEArrowRightIcon size={12} />
                    </span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
