import { FilmIcon, CodeIcon, PaletteIcon } from './Icons';
import { marqueeItems } from '../data/projects';

export default function Marquee() {
  return (
    <section className="overflow-hidden border-b border-black bg-black py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-white">
            {i % 3 === 0 && <FilmIcon size={14} />}
            {i % 3 === 1 && <CodeIcon size={14} />}
            {i % 3 === 2 && <PaletteIcon size={14} />}
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
