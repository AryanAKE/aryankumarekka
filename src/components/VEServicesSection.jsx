import { Link } from 'react-router-dom';
import { videoCategories } from '../videoCategories';

export default function VEServicesSection() {
  return (
    <section id="services" className="ve-border-b bg-[#f2f2f2]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Editing Categories
          </h2>
          <p className="mt-4 text-sm text-neutral-600">
            Browse our specialized editing services ready for your next project.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videoCategories.map((category) => (
            <Link
              key={category.id}
              to={`/video-editing/category/${category.slug}`}
              className="bg-white rounded-2xl ve-border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer block"
            >
              {/* Top Logo Area */}
              <div className="h-48 w-full bg-[#f0f0f0] flex items-center justify-center p-6 ve-border-b relative overflow-hidden group">
                <span className={`${category.logoFont} text-black transition-transform duration-500 group-hover:scale-105 text-center leading-none`}>
                  {category.name.split(' ')[0]}
                </span>
              </div>

              {/* Bottom Details Area */}
              <div className="p-4 flex flex-col items-center justify-center text-center bg-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black mb-1">
                  {category.name} ({category.slug})
                </span>
                <span className="text-xs font-medium text-neutral-400">
                  {category.price}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
