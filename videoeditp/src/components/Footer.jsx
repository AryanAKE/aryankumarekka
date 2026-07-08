import { useState, useEffect } from 'react';

const ArrowUpRightIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const links = [
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'GitHub', url: '#' },
    { name: 'X / Twitter', url: '#' },
    { name: 'Echelon Media', url: '#' },
  ];

  return (
    <footer id="contact" className="bg-[#050505] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl flex flex-col min-h-[400px] justify-between">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-8 pt-8">
          
          {/* Left: Made with love */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-white font-mono font-bold text-lg tracking-tight">Made with love</h3>
              <p className="text-[#888] font-mono text-[13px] mt-2">in Assam, India.</p>
            </div>
            <div className="mt-16 md:mt-auto">
              <p className="text-[#666] font-mono text-[13px]">
                Aryan Kumar Ekka · Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Center: Local Time */}
          <div className="flex flex-col items-center text-center">
            <p className="text-[#666] font-mono text-[11px] uppercase tracking-[0.2em] mb-4">
              Local Time — Assam, India
            </p>
            <div className="font-mono text-[3.5rem] leading-none font-bold tracking-tighter text-white mb-3">
              {formatTime(time)}
            </div>
            <p className="text-[#888] font-mono text-[11px] uppercase tracking-widest font-bold">
              IST (UTC+5:30)
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col justify-start">
            <div className="flex flex-col border border-[#1a1a1a] rounded-lg overflow-hidden bg-black/40">
              {links.map((link, i) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={`flex items-center justify-between px-6 py-4 hover:bg-[#111] transition-colors group ${
                    i !== links.length - 1 ? 'border-b border-[#1a1a1a]' : ''
                  }`}
                >
                  <span className="font-mono text-[13px] text-[#ccc] group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                  <span className="text-[#444] group-hover:text-white transition-colors">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-32 pt-8">
          <p className="text-[#555] font-mono text-[11px]">
            © 2026 Aryan Kumar Ekka. All rights reserved.
          </p>
          <p className="text-[#555] font-mono text-[11px] mt-4 md:mt-0">
            Designed & built by Aryan Kumar Ekka
          </p>
        </div>

      </div>
    </footer>
  );
}
