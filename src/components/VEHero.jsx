import { useState } from 'react';

const StackedText = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  const layers = 8;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative font-black text-6xl sm:text-7xl lg:text-[7rem] tracking-tighter uppercase select-none p-12 cursor-default transition-all duration-300 z-10"
    >
      {Array.from({ length: layers }).map((_, index) => {
        const multiplier = hovered ? 6 : 4;
        const offset = index * multiplier;
        return (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 whitespace-nowrap transition-all duration-300 ease-out"
            style={{
              transform: `translate(calc(-50% + ${offset}px), calc(-50% + ${offset}px))`,
              color: '#f5f5f5',
              WebkitTextStroke: '2px #000',
              zIndex: layers - index,
            }}
          >
            {text}
          </span>
        );
      })}
      <span className="invisible whitespace-nowrap">{text}</span>
    </div>
  );
};

export default function VEHero() {
  return (
    <section className="ve-border-t ve-border-b relative bg-white">
      <div className="mx-auto w-full lg:grid lg:grid-cols-[1fr_60px_1fr] lg:min-h-[85vh]">

        {/* Left Side: Text Content */}
        <div className="ve-border-r px-4 py-16 sm:px-6 lg:px-12 lg:py-24 flex flex-col justify-center lg:min-h-[85vh] relative bg-white pb-24">
          <div className="max-w-2xl">
            <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-tight text-black sm:text-6xl lg:text-[4.5rem]">
              Cinematic edits<br />for your next<br />project.
            </h1>
            <p className="mt-8 text-base leading-relaxed text-neutral-600 font-mono">
              Echelon Media is a curated collection of premium video editing services — handpicked, brand-ready, and available to be started today.
            </p>
            <div className="mt-10">
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-105 shadow-xl">
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Center Divider: Vertical Marquee */}
        <div className="hidden lg:flex ve-border-r relative overflow-hidden bg-white">
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 text-2xl font-bold tracking-widest text-black flex flex-col gap-12 ve-animate-marquee-vertical-down w-full items-center"
            style={{ writingMode: 'vertical-rl' }}
          >
            <div className="flex flex-col gap-12 pt-8">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="py-6 whitespace-nowrap opacity-20 font-serif flex items-center gap-6">
                  V. EDIT <span className="text-xl rotate-90">✢</span>
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-12 pt-8">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="py-6 whitespace-nowrap opacity-20 font-serif flex items-center gap-6">
                  V. EDIT <span className="text-xl rotate-90">✢</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative bg-[#f5f5f5] ve-border-t lg:ve-no-border-t flex items-center justify-center p-8 overflow-hidden lg:overflow-visible">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] uppercase font-bold tracking-widest px-2 py-8" style={{ writingMode: 'vertical-rl' }}>
            Echelon Media
          </div>
          <div className="text-center z-10">
            <StackedText text="ARYAN." />
          </div>
        </div>

      </div>
    </section>
  );
}
