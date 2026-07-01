import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll reach out at ${email}`);
    setEmail('');
  };

  return (
    <footer id="contact" className="border-t border-black bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
          Friends don't let friends have average brands.
        </h2>
      </div>

      <div className="border-t border-black">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-black">
                Contact me for your next project
              </h3>
              <p className="text-xs leading-relaxed text-neutral-500">
                Drop your email and I'll get back within 24 hours. No spam, just craft.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-black px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-0 md:w-64"
              />
              <button
                type="submit"
                className="border border-l-0 border-black bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
            © 2026 Aryan Kumar Ekka. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Instagram', 'Behance', 'GitHub', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 transition-colors hover:text-black">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
