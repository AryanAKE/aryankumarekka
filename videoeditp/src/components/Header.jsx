import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: isHome ? '#portfolio' : '/' },
    { label: 'Services', href: isHome ? '#services' : '/' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="border-b border-black">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-sm font-bold tracking-tight uppercase sm:text-base">
            A.K.E.
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium uppercase tracking-wide text-neutral-600 transition-colors hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
          </div>
        </div>
      </div>
    </header>
  );
}
