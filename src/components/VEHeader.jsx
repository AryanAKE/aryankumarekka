import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function VEHeader() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/video-editing' || location.pathname === '/video-editing/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    if (!isHome) return;
    e.preventDefault();
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', targetId: 'home', href: '/video-editing' },
    { label: 'Work', targetId: 'portfolio', href: '/video-editing#portfolio' },
    { label: 'Categories', targetId: 'services', href: '/video-editing#services' },
    { label: 'Contact', targetId: 'contact', href: '/video-editing#contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="ve-border-b">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/video-editing" className="text-sm font-bold tracking-tight uppercase sm:text-base">
            A.K.E.
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.targetId)}
                className="text-xs font-medium uppercase tracking-wide text-neutral-600 transition-colors hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-[10px] font-bold uppercase tracking-widest text-black ve-border px-4 py-2 hover:bg-black hover:text-white transition-colors"
            >
              &larr; MAIN PORTFOLIO
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
