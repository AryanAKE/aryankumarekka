import { VEFilmIcon, VECodeIcon, VEPaletteIcon } from './VEIcons';
import { videoMarqueeItems } from '../videoProjects';

export default function VEMarquee() {
  return (
    <section className="overflow-hidden border-b border-black bg-black py-4">
      <div className="flex ve-animate-marquee whitespace-nowrap">
        {[...videoMarqueeItems, ...videoMarqueeItems, ...videoMarqueeItems, ...videoMarqueeItems].map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-white">
            {i % 3 === 0 && <VEFilmIcon size={14} />}
            {i % 3 === 1 && <VECodeIcon size={14} />}
            {i % 3 === 2 && <VEPaletteIcon size={14} />}
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
