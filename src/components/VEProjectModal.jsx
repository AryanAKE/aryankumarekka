import { useEffect } from 'react';
import { VEXIcon, VEPlayIcon, VEExternalLinkIcon } from './VEIcons';

export default function VEProjectModal({ project, onClose }) {
  if (!project) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative h-full w-full max-w-lg overflow-y-auto border-l border-black bg-white shadow-2xl ve-no-scrollbar">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black bg-white px-6 py-4">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            Project Details
          </span>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center border border-black transition-colors hover:bg-black hover:text-white">
            <VEXIcon size={16} />
          </button>
        </div>

        <div className="border-b border-black bg-neutral-100">
          <div className="flex aspect-video items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-neutral-400">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-300">
                <VEPlayIcon size={28} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-black">
                Preview Media
              </span>
              <span className="mt-2 inline-block bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Coming Soon
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block border border-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">
              {project.category}
            </span>
            <span className="text-xs text-neutral-400">{project.year}</span>
          </div>

          <h2 className="mb-1 text-2xl font-extrabold tracking-tight text-black">
            {project.title}
          </h2>
          <p className="mb-6 text-xs font-medium uppercase tracking-wide text-neutral-500">
            Client: {project.client}
          </p>

          <div className="space-y-4 text-sm leading-relaxed text-neutral-700">
            <p>{project.description}</p>
            <p>
              <span className="font-semibold text-black">Technical Stack:</span>{' '}
              {project.stack}
            </p>
          </div>

          <div className="mt-8">
            <button className="flex w-full items-center justify-center gap-2 border border-black bg-black px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black">
              <VEExternalLinkIcon size={14} />
              View Live Project
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-0 border border-black">
            <div className="border-r border-b border-black px-4 py-3">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">Category</span>
              <span className="text-xs font-semibold text-black">{project.categorySlug}</span>
            </div>
            <div className="border-b border-black px-4 py-3">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">Year</span>
              <span className="text-xs font-semibold text-black">{project.year}</span>
            </div>
            <div className="border-r border-black px-4 py-3">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">Client</span>
              <span className="text-xs font-semibold text-black">{project.client}</span>
            </div>
            <div className="px-4 py-3">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">Status</span>
              <span className="text-xs font-semibold text-black">Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
