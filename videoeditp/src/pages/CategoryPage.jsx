import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { ArrowRightIcon } from '../components/Icons';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Category not found</h1>
        <Link to="/" className="mt-4 underline underline-offset-4">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Category Hero */}
      <section className="border-b border-black bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black mb-8 transition-colors">
            <ArrowRightIcon size={16} className="rotate-180" />
            Back to Categories
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">
                Service Category
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black">
                {category.name}
              </h1>
            </div>
            <div className="pb-2">
              <p className="text-sm leading-relaxed text-neutral-600 mb-6">
                Premium, high-performance {category.name.toLowerCase()} tailored for modern brands. Our process focuses on storytelling, pacing, and visual perfection.
              </p>
              <div className="inline-flex items-center justify-center border border-black bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {category.price}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-black pb-4 mb-8">
          <h2 className="text-xl font-bold tracking-tight text-black">
            Selected Works
          </h2>
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            4 Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="aspect-video w-full bg-neutral-200 border border-black relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                <span className="text-neutral-400 font-mono text-xs uppercase tracking-widest">[Project Media]</span>
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-black group-hover:underline underline-offset-4">
                    {category.name.split(' ')[0]} Project {item}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">Client Name</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  2026
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-105 shadow-xl">
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
}
