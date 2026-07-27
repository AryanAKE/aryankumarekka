import { useState } from 'react';
import { VEArrowRightIcon } from './VEIcons';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/aryan.ake', value: '@aryan.ake' },
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
  'Other',
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
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service || 'Not selected'}\n\nProject Brief:\n${form.message}`
    );
    window.open(`mailto:aryankumarekka@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white border-t border-neutral-100 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 lg:gap-24">

          {/* Left Panel: Info & Socials */}
          <div className="flex flex-col justify-between space-y-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                / Contact
              </span>
              <h2 className="text-3xl font-light tracking-tight text-neutral-900 mt-4 leading-snug">
                Let&apos;s create something together.
              </h2>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-6">
              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                  Email directly
                </span>
                <a
                  href="mailto:aryankumarekka@gmail.com"
                  className="text-sm text-neutral-800 hover:text-black transition-colors font-mono select-all"
                >
                  aryankumarekka@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                  Social Channels
                </span>
                <div className="space-y-2">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-black transition-colors"
                    >
                      <span className="font-medium">{link.label}</span>
                      <span className="text-neutral-300 font-mono">—</span>
                      <span className="font-mono text-[11px]">{link.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability status */}
            <div className="flex items-center gap-2 pt-4">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">
                Available for select freelance roles
              </span>
            </div>
          </div>

          {/* Right Panel: Clean Form */}
          <div>
            {submitted ? (
              <div className="max-w-md py-12">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1">
                  Enquiry Dispatched
                </span>
                <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">Message Prepared</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-mono">
                  Your local mail client was activated to route this message. If it did not open, please send details to <a href="mailto:aryankumarekka@gmail.com" className="underline font-bold text-black">aryankumarekka@gmail.com</a>.
                </p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', message: '' }); }}
                  className="mt-8 text-xs font-medium uppercase tracking-wider underline underline-offset-4 hover:no-underline transition-all"
                >
                  Reset form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12 max-w-2xl">
                
                {/* Inputs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="relative border-b border-neutral-100 py-2">
                    <label className={`absolute left-0 text-[10px] uppercase font-mono tracking-widest transition-all duration-200 ${
                      focused === 'name' || form.name ? '-top-3 text-neutral-400' : 'top-2 text-neutral-300 pointer-events-none'
                    }`}>
                      Your name
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent text-sm font-light text-neutral-800 outline-none pt-2"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative border-b border-neutral-100 py-2">
                    <label className={`absolute left-0 text-[10px] uppercase font-mono tracking-widest transition-all duration-200 ${
                      focused === 'email' || form.email ? '-top-3 text-neutral-400' : 'top-2 text-neutral-300 pointer-events-none'
                    }`}>
                      Your email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent text-sm font-light text-neutral-800 outline-none pt-2"
                    />
                  </div>
                </div>

                {/* Service Selector (Miniature clean list) */}
                <div className="space-y-4">
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                    Project Type
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICES.map((service) => {
                      const isSelected = form.service === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => selectService(service)}
                          className={`px-3 py-1.5 text-[10px] font-mono tracking-wide transition-all duration-150 rounded-full border ${
                            isSelected 
                              ? 'bg-neutral-900 border-neutral-900 text-white'
                              : 'bg-white border-neutral-100 text-neutral-400 hover:border-neutral-300 hover:text-neutral-700'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Brief */}
                <div className="relative border-b border-neutral-100 py-2">
                  <label className={`absolute left-0 text-[10px] uppercase font-mono tracking-widest transition-all duration-200 ${
                    focused === 'message' || form.message ? '-top-3 text-neutral-400' : 'top-2 text-neutral-300 pointer-events-none'
                  }`}>
                    Project details
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    rows={3}
                    className="w-full bg-transparent text-sm font-light text-neutral-800 outline-none pt-2 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3.5 text-[10px] uppercase font-mono tracking-widest transition-colors duration-150 hover:bg-black"
                  >
                    <span>Send message</span>
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                      <VEArrowRightIcon size={10} />
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
