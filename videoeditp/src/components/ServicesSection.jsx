import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-black bg-[#f2f2f2]">
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
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.slug}`}
              className="bg-white rounded-2xl border border-black overflow-hidden flex flex-col shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer block"
            >
              {/* Top Logo Area */}
              <div className="h-48 w-full bg-[#ebebeb] flex items-center justify-center p-6 border-b border-black relative overflow-hidden group">
                <span className={`${category.logoFont} text-black transition-transform duration-500 group-hover:scale-105 text-center leading-none`}>
                  {category.name.split(' ')[0]}
                </span>
              </div>
              
              {/* Bottom Details Area */}
              <div className="p-4 flex flex-col items-center justify-center text-center bg-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black mb-1">
                  {category.name} ({category.slug})
                </span>
                <span className="text-xs font-medium text-neutral-500">
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
