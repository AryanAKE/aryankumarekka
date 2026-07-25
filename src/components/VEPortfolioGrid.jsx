import { videoProjects } from '../videoProjects';
import { VEFilmIcon, VEPaletteIcon, VECodeIcon, VEStarIcon, VEArrowRightIcon } from './VEIcons';

/* ── Category accent colours ───────────────────────────────────────── */
const categoryColors = {
  'Cinematic Editing': '#000000',
  'Brand Identity':    '#2563eb',
  'Web Development':   '#059669',
  'Motion Design':     '#d97706',
  'Design System':     '#7c3aed',
};

/* ── Icon resolver ──────────────────────────────────────────────────── */
function CategoryIcon({ slug }) {
  const p = { size: 18 };
  if (slug === 'Video Editing')  return <VEFilmIcon    {...p} />;
  if (slug === 'Graphic Design') return <VEPaletteIcon {...p} />;
  if (slug === 'Full-Stack')     return <VECodeIcon    {...p} />;
  if (slug === 'Motion Design')  return <VEStarIcon    {...p} />;
  if (slug === 'Design System')  return <VEStarIcon    {...p} />;
  return <VEFilmIcon {...p} />;
}

export default function VEPortfolioGrid({ onSelect }) {
  return (
    <section id="portfolio" className="ve-border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section header ─────────────────────────────────────────── */}
        <div className="ve-border-b flex items-center justify-between py-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Selected Work
          </h2>
          <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-300">
            {videoProjects.length} Projects
          </span>
        </div>

        {/* ── Project rows ───────────────────────────────────────────── */}
        {videoProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelect(project)}
            style={{ width: '100%', textAlign: 'left' }}
            className="group ve-border-b flex w-full items-center gap-5 bg-white py-5 transition-colors duration-200 hover:bg-neutral-50"
          >
            {/* Icon box */}
            <div className="flex-shrink-0">
              <div
                className="flex h-11 w-11 items-center justify-center ve-border transition-all duration-300"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'black';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = 'black';
                }}
              >
                <CategoryIcon slug={project.categorySlug} />
              </div>
            </div>

            {/* Project info */}
            <div className="flex min-w-0 flex-1 items-center justify-between gap-6">
              {/* Left: title + client */}
              <div className="flex min-w-0 items-center gap-3">
                <span className="text-sm font-bold uppercase tracking-tight text-black">
                  {project.title}
                </span>
                <span className="hidden flex-shrink-0 text-xs text-neutral-300 sm:inline">—</span>
                <span className="hidden truncate text-xs font-medium uppercase tracking-wide text-neutral-400 sm:block">
                  {project.client}
                </span>
              </div>

              {/* Right: category + year */}
              <div className="flex flex-shrink-0 items-center gap-4">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: categoryColors[project.category] ?? '#525252' }}
                >
                  {project.category}
                </span>
                <span className="w-9 text-right text-[10px] text-neutral-300">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Arrow — fades in on row hover */}
            <div className="flex-shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <VEArrowRightIcon size={14} />
            </div>
          </button>
        ))}

      </div>
    </section>
  );
}
