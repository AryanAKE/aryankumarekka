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

      {/* Coming Soon Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="border-4 border-black border-dashed py-32 px-4 flex flex-col items-center justify-center bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-300">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase mb-6 text-center">
            Coming Soon
          </h2>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto font-medium text-center">
            We are currently curating our best {category.name.toLowerCase()} projects. Our showcase will be available shortly.
          </p>
          <div className="mt-10">
            <Link to="/" className="inline-flex items-center justify-center border border-black bg-black px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-transform hover:-translate-y-1 hover:shadow-lg">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
