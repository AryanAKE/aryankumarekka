import { VEInstagramIcon, VEGithubIcon, VELinkedinIcon, VEBehanceIcon } from './VEIcons';

export default function VEFloatingSocials({ scrollProgress }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-50 pointer-events-none">
      {/* Social Buttons Box */}
      <div className="flex flex-col gap-4 pointer-events-auto bg-black text-white p-3.5 rounded-2xl shadow-xl border border-neutral-900 transition-all duration-300 hover:scale-105">
        <a href="https://instagram.com" className="text-neutral-400 hover:text-white transition-colors" title="Instagram">
          <VEInstagramIcon size={18} />
        </a>
        <a href="https://github.com" className="text-neutral-400 hover:text-white transition-colors" title="GitHub">
          <VEGithubIcon size={18} />
        </a>
        <a href="https://linkedin.com" className="text-neutral-400 hover:text-white transition-colors" title="LinkedIn">
          <VELinkedinIcon size={18} />
        </a>
        <a href="https://behance.net" className="text-neutral-400 hover:text-white transition-colors" title="Behance">
          <VEBehanceIcon size={18} />
        </a>
      </div>

      {/* Scroll Track & Indicator */}
      <div className="relative w-[1px] h-20 bg-neutral-200 flex justify-center pointer-events-auto">
        <div
          className="absolute w-[3px] bg-black rounded-full transition-all duration-75"
          style={{
            height: '20px',
            top: `calc(${scrollProgress}% - ${scrollProgress * 0.20}px)`
          }}
        ></div>
      </div>
    </div>
  );
}
