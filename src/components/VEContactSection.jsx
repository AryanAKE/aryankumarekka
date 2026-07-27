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

export default function VEContactSection() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Echelon Media] Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    );
    window.open(`mailto:aryankumarekka@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white ve-border-t">
      <div className="mx-auto max-w-7xl">

        {/* Section label bar */}
        <div className="ve-border-b flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Contact
          </span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-300">
            Let&apos;s Work Together
          </span>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_480px]">

          {/* Left: form */}
          <div className="px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-[1.05] mb-3">
              Start your<br />next project.
            </h2>
            <p className="text-sm text-neutral-500 font-mono mb-12 max-w-sm">
              Tell me about your vision — I&apos;ll get back to you within 24 hours with a tailored quote.
            </p>

            {submitted ? (
              <div className="ve-border p-8 max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-2 py-1">
                    Sent
                  </span>
                </div>
                <p className="text-sm text-neutral-700 font-mono leading-relaxed">
                  Your message has been opened in your mail client. I&apos;ll be in touch shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', message: '' }); }}
                  className="mt-6 text-[10px] font-bold uppercase tracking-widest underline underline-offset-4 hover:no-underline transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-lg space-y-0">

                {/* Name */}
                <div className={`ve-border-b transition-colors ${focused === 'name' ? 'border-b-black' : ''}`}>
                  <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-400 pt-4 pb-1">
                    Your Name
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Aryan Kumar Ekka"
                    className="w-full bg-transparent pb-3 text-sm font-medium text-black placeholder-neutral-300 outline-none"
                  />
                </div>

                {/* Email */}
                <div className={`ve-border-b transition-colors ${focused === 'email' ? 'border-b-black' : ''}`}>
                  <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-400 pt-4 pb-1">
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
                    placeholder="you@example.com"
                    className="w-full bg-transparent pb-3 text-sm font-medium text-black placeholder-neutral-300 outline-none"
                  />
                </div>

                {/* Service */}
                <div className={`ve-border-b transition-colors ${focused === 'service' ? 'border-b-black' : ''}`}>
                  <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-400 pt-4 pb-1">
                    Service Required
                  </label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    onFocus={() => setFocused('service')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent pb-3 text-sm font-medium text-black outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service…</option>
                    <option value="Cinematic Editing">Cinematic Editing</option>
                    <option value="Vlog Editing">Vlog Editing</option>
                    <option value="Real Estate Tour">Real Estate Tour</option>
                    <option value="Event Highlights">Event Highlights</option>
                    <option value="Podcast Editing">Podcast Editing</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Motion Design">Motion Design</option>
                    <option value="Other">Other / Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div className={`ve-border-b transition-colors ${focused === 'message' ? 'border-b-black' : ''}`}>
                  <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-400 pt-4 pb-1">
                    Project Brief
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    rows={4}
                    placeholder="Describe your project, timeline, and budget…"
                    className="w-full bg-transparent pb-3 text-sm font-medium text-black placeholder-neutral-300 outline-none resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-8">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest transition-all duration-200 hover:gap-5"
                  >
                    Send Enquiry
                    <VEArrowRightIcon size={12} />
                  </button>
                  <p className="mt-4 text-[10px] text-neutral-400 font-mono">
                    Opens your default mail client. No data stored.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-black" />

          {/* Right: info panel */}
          <div className="ve-border-t lg:ve-no-border-t bg-[#f5f5f5] flex flex-col">

            {/* Contact info rows */}
            <div className="flex-1">
              {INFO_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-6 py-5 ${i !== INFO_ROWS.length - 1 ? 've-border-b' : ''}`}
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="text-xs font-semibold text-black hover:underline underline-offset-4 font-mono transition-all"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-black font-mono">{row.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Divider label */}
            <div className="ve-border-t ve-border-b px-6 py-3 bg-black">
              <span className="text-[9px] font-bold uppercase tracking-widest text-white">
                Find me on
              </span>
            </div>

            {/* Social links */}
            <div className="flex-1">
              {SOCIAL_LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex items-center justify-between px-6 py-5 bg-[#f5f5f5] hover:bg-white transition-colors duration-150 ${i !== SOCIAL_LINKS.length - 1 ? 've-border-b' : ''}`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold uppercase tracking-tight text-black">
                      {link.label}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {link.handle}
                    </span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <VEArrowRightIcon size={14} />
                  </span>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="ve-border-t px-6 py-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-black animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 font-mono">
                Currently accepting new clients
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
