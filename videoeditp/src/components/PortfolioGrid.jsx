import { projects } from '../data/projects';
import { FilmIcon, PaletteIcon, CodeIcon, StarIcon, ArrowRightIcon } from './Icons';

export default function PortfolioGrid({ onSelect }) {
  return (
    <section id="portfolio" className="border-b border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-black py-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            Selected Work
          </h2>
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {projects.length} Projects
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelect(project)}
            className={`group relative flex w-full flex-col items-start gap-4 border-b border-black py-6 text-left transition-colors hover:bg-neutral-50 sm:flex-row sm:items-center sm:gap-0 sm:py-5 ${project.color}`}
          >
            <div className="flex-shrink-0 sm:mr-6">
              <div className="flex h-16 w-24 items-center justify-center border border-black bg-white sm:h-12 sm:w-16">
                {project.categorySlug === 'Video Editing' && <FilmIcon size={20} />}
                {project.categorySlug === 'Graphic Design' && <PaletteIcon size={20} />}
                {project.categorySlug === 'Full-Stack' && <CodeIcon size={20} />}
                {project.categorySlug === 'Motion Design' && <StarIcon size={20} />}
                {project.categorySlug === 'Design System' && <StarIcon size={20} />}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <span className="text-sm font-bold uppercase tracking-tight text-black group-hover:underline">
                  {project.title}
                </span>
                <span className="hidden text-xs text-neutral-400 sm:inline">—</span>
                <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  {project.client}
                </span>
              </div>

              <div className="mt-1 flex items-center gap-3 sm:mt-0">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-600">
                  {project.category}
                </span>
                <span className="text-xs text-neutral-300">{project.year}</span>
              </div>
            </div>

            <div className="ml-6 hidden opacity-0 transition-opacity group-hover:opacity-100 sm:flex">
              <ArrowRightIcon size={16} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
