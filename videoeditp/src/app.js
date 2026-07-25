const { useState, useEffect, useRef } = React;

// ─── Icon Components ─────────────────────────────────────────
const PlayIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const ArrowRightIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const XIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ExternalLinkIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const FilmIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>
);

const PaletteIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.811-.57-1.086-.325-.237-.538-.57-.538-.95 0-.475.38-.857.857-.857h1.713c2.475 0 4.475-2 4.475-4.475 0-1.8-1.05-3.35-2.575-4.075C16.9 8.15 15.95 7.125 15.95 5.85c0-1.025.625-1.925 1.525-2.375C15.9 2.55 14.05 2 12 2z" />
  </svg>
);

const CodeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const StarIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const BehanceIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 10h-5v-3.5h5a1.75 1.75 0 0 1 0 3.5z" />
    <path d="M9 17.5h-5v-4h5a2 2 0 0 1 0 4z" />
    <path d="M16 17.5a3.5 3.5 0 0 0 3.5-3.5h-7a3.5 3.5 0 0 0 3.5 3.5z" />
    <line x1="13.5" y1="9" x2="18.5" y2="9" />
  </svg>
);

// ─── Data ──────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'Neon Horizon Reel',
    category: 'Cinematic Editing',
    categorySlug: 'Video Editing',
    year: '2026',
    description: 'A high-octane cinematic reel crafted for a Dubai-based automotive brand. The edit leverages aggressive speed ramping, custom LUT color grading, and sound-designed transitions to evoke velocity and luxury. Delivered in 4K HDR for multi-platform distribution.',
    stack: 'DaVinci Resolve, After Effects, Premiere Pro',
    client: 'Velocity Motors',
    color: 'bg-neutral-100'
  },
  {
    id: 2,
    title: 'Aether Brand System',
    category: 'Brand Identity',
    categorySlug: 'Graphic Design',
    year: '2026',
    description: 'Complete visual identity system for a sustainable tech startup. Scope included logo design, typographic hierarchy, color theory documentation, and a scalable brand guideline deck spanning 80+ pages. The identity balances organic warmth with digital precision.',
    stack: 'Illustrator, Figma, InDesign',
    client: 'Aether Labs',
    color: 'bg-neutral-50'
  },
  {
    id: 3,
    title: 'Monolith Dashboard',
    category: 'Web Development',
    categorySlug: 'Full-Stack',
    year: '2025',
    description: 'A real-time analytics dashboard handling 2M+ daily events. Built with a focus on performance, the interface features sub-50ms interactions, server-side rendering, and a fully accessible component library. The design language is intentionally stark — data first, chrome second.',
    stack: 'Next.js, TypeScript, PostgreSQL, Tailwind',
    client: 'Monolith Data',
    color: 'bg-white'
  },
  {
    id: 4,
    title: 'Velvet Noir Campaign',
    category: 'Cinematic Editing',
    categorySlug: 'Video Editing',
    year: '2025',
    description: 'Fashion editorial campaign cut for a Parisian label\'s autumn/winter drop. The narrative pacing was meticulously timed to an original score. Extensive use of film grain overlays, letterboxing, and analog damage effects to achieve a timeless cinematic texture.',
    stack: 'Premiere Pro, DaVinci Resolve, Cinema 4D',
    client: 'Maison Velvet',
    color: 'bg-neutral-100'
  },
  {
    id: 5,
    title: 'Kinetic Type Series',
    category: 'Motion Design',
    categorySlug: 'Graphic Design',
    year: '2025',
    description: 'A three-part motion design series exploring the relationship between typography and physics. Each piece uses procedural animation to make letterforms behave like physical objects — colliding, stretching, and dissolving under simulated forces.',
    stack: 'After Effects, Cinema 4D, Octane',
    client: 'Self-Initiated',
    color: 'bg-neutral-50'
  },
  {
    id: 6,
    title: 'Vertex E-Commerce',
    category: 'Web Development',
    categorySlug: 'Full-Stack',
    year: '2025',
    description: 'Headless e-commerce platform with a custom checkout flow, real-time inventory sync, and a design system built from atomic principles. The site scores 100/100 on Lighthouse and maintains sub-second load times across all core web vitals.',
    stack: 'React, Node.js, Stripe, GraphQL',
    client: 'Vertex Supply Co.',
    color: 'bg-white'
  },
  {
    id: 7,
    title: 'Echoes Documentary',
    category: 'Cinematic Editing',
    categorySlug: 'Video Editing',
    year: '2024',
    description: 'Long-form documentary edit for a streaming platform. The 45-minute piece required balancing archival restoration with modern interview footage. Color-matched across three different camera sources and delivered with 5.1 surround mixing.',
    stack: 'Premiere Pro, DaVinci Resolve, Pro Tools',
    client: 'StreamEast',
    color: 'bg-neutral-100'
  },
  {
    id: 8,
    title: 'Prism UI Kit',
    category: 'Design System',
    categorySlug: 'Graphic Design',
    year: '2024',
    description: 'Open-source UI kit and Figma plugin containing 400+ components, 60+ icons, and a full token-based theming architecture. Adopted by 3,000+ designers and developers within the first month of release.',
    stack: 'Figma, Storybook, React',
    client: 'Open Source',
    color: 'bg-neutral-50'
  }
];

const marqueeItems = [
  'Cinematic Editing',
  'React Native',
  'Full-Stack',
  'Brand Identity',
  'Motion Design',
  'DaVinci Resolve',
  'TypeScript',
  'UI/UX',
  'Premiere Pro',
  'Next.js',
  'After Effects',
  'PostgreSQL'
];

// ─── Components ──────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Categories', href: '#services' },
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
          <a href="#top" className="text-sm font-bold tracking-tight uppercase sm:text-base">
            A.K.E.
          </a>
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

const StackedText = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  const layers = 6;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter uppercase select-none p-12 cursor-default transition-all duration-300 animate-marquee-hover-trigger"
    >
      {Array.from({ length: layers }).map((_, index) => {
        const baseOffset = layers - 1 - index;
        const multiplier = hovered ? 12 : 6;
        const offset = baseOffset * multiplier;
        const isFront = index === layers - 1;
        return (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 whitespace-nowrap transition-all duration-300 ease-out"
            style={{
              transform: `translate(calc(-50% + ${offset}px), calc(-50% + ${offset}px))`,
              color: '#fff',
              WebkitTextStroke: isFront ? '2px #000' : '1.5px #000',
              zIndex: index,
            }}
          >
            {text}
          </span>
        );
      })}
      {/* Spacer to give container height/width */}
      <span className="invisible whitespace-nowrap">{text}</span>
    </div>
  );
};

function Hero() {
  return (
    <section className="border-b border-black relative">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:min-h-[85vh]">
        {/* Left Side: Text Content */}
        <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 flex flex-col justify-center lg:min-h-[85vh] relative pb-32">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-neutral-500">
              Creative direction • editing • development
            </p>
            <h1 className="mt-8 text-5xl font-light leading-[1.15] tracking-tight text-black sm:text-6xl lg:text-7xl">
              Let's explore my creative work and connect to build something unique together.
            </h1>
          </div>

          {/* Scroll Down at extreme bottom left corner */}
          <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 lg:left-8 lg:bottom-8 z-20">
            <a href="#portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">
              Scroll Down
              <ArrowRightIcon size={16} className="rotate-90" />
            </a>
          </div>
        </div>

        {/* Right Side & Vertical Line Divider */}
        <div className="relative border-t border-black bg-neutral-50 grid-bg lg:border-l lg:border-t-0 flex items-center justify-center p-8 overflow-hidden lg:overflow-visible">

          {/* Technical Design Accents */}
          <div className="absolute top-4 left-4 text-[9px] text-neutral-400 font-mono">[X: 104, Y: 89]</div>
          <div className="absolute top-4 right-4 text-[9px] text-neutral-400 font-mono">[SYS: OK]</div>
          <div className="absolute bottom-4 left-4 text-[9px] text-neutral-400 font-mono">[GRID: 40px]</div>
          <div className="absolute bottom-4 right-4 text-[9px] text-neutral-400 font-mono">[A.K.E. © 2026]</div>

          {/* Crosshair accents in corners */}
          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-neutral-300"></div>
          <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-neutral-300"></div>
          <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-neutral-300"></div>
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-neutral-300"></div>

          {/* Vertical Scrolling Marquee left of the border */}
          <div className="absolute right-full mr-2 top-0 bottom-0 w-[40px] overflow-hidden hidden lg:block pointer-events-none z-10">
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2 text-xl font-extrabold tracking-widest text-black flex flex-col gap-12 animate-marquee-vertical-down"
              style={{ writingMode: 'vertical-rl' }}
            >
              <div className="flex flex-col gap-12">
                {[...Array(12)].map((_, i) => (
                  <span key={i} className="py-6 whitespace-nowrap bg-white">aryankumarekka.dev</span>
                ))}
              </div>
              <div className="flex flex-col gap-12">
                {[...Array(12)].map((_, i) => (
                  <span key={i} className="py-6 whitespace-nowrap bg-white">aryankumarekka.dev</span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center z-10">
            <StackedText text="ARYAN." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="overflow-hidden border-b border-black bg-black py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-white">
            {i % 3 === 0 && <FilmIcon size={14} />}
            {i % 3 === 1 && <CodeIcon size={14} />}
            {i % 3 === 2 && <PaletteIcon size={14} />}
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: 'Cinematic Editing',
      description: 'High-impact edits shaped for campaigns, reels, and narrative storytelling with strong pacing and polish.',
      icon: <FilmIcon size={18} />
    },
    {
      title: 'Brand Identity',
      description: 'Visual systems and design collateral that help brands feel consistent, premium, and memorable.',
      icon: <PaletteIcon size={18} />
    },
    {
      title: 'Full-Stack Builds',
      description: 'Fast, conversion-focused websites and product experiences built with clean UI and dependable performance.',
      icon: <CodeIcon size={18} />
    }
  ];

  return (
    <section id="services" className="border-b border-black bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">Services</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Built for brands that want momentum, polish, and clarity.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
            From campaign edits to product launches, each engagement is shaped around storytelling, performance, and a refined visual language.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="border border-black bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center border border-black bg-neutral-100">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-black">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioGrid({ onSelect }) {
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

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative h-full w-full max-w-lg overflow-y-auto border-l border-black bg-white shadow-2xl no-scrollbar">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black bg-white px-6 py-4">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            Project Details
          </span>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center border border-black transition-colors hover:bg-black hover:text-white">
            <XIcon size={16} />
          </button>
        </div>

        <div className="border-b border-black bg-neutral-100">
          <div className="flex aspect-video items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-neutral-400">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-300">
                <PlayIcon size={28} />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest">
                Preview Media
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
              <ExternalLinkIcon size={14} />
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

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll reach out at ${email}`);
    setEmail('');
  };

  return (
    <footer id="contact" className="border-t border-black bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
          Friends don't let friends have average brands.
        </h2>
      </div>

      <div className="border-t border-black">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-black">
                Contact me for your next project
              </h3>
              <p className="text-xs leading-relaxed text-neutral-500">
                Drop your email and I'll get back within 24 hours. No spam, just craft.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-black px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-0 md:w-64"
              />
              <button
                type="submit"
                className="border border-l-0 border-black bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
            © 2026 Aryan Kumar Ekka. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Instagram', 'Behance', 'GitHub', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 transition-colors hover:text-black">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Dynamic fade-up animation observer
    const elementsToAnimate = document.querySelectorAll('section h1, section h2, section p:not(.text-xs), section .grid > div, section a');
    elementsToAnimate.forEach(el => {
      if (!el.classList.contains('fade-up-element')) {
        el.classList.add('fade-up-element');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll('.fade-up-element').forEach((el) => observer.observe(el));
    }, 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-white relative overflow-hidden">
      {/* Right side floating social bar & scroll progress */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-50 pointer-events-none">
        {/* Social Buttons Box (Black and small) */}
        <div className="flex flex-col gap-4 pointer-events-auto bg-black text-white p-3.5 rounded-2xl shadow-xl border border-neutral-900 transition-all duration-300 hover:scale-105">
          <a href="https://instagram.com" className="text-neutral-400 hover:text-white transition-colors" title="Instagram">
            <InstagramIcon size={18} />
          </a>
          <a href="https://github.com" className="text-neutral-400 hover:text-white transition-colors" title="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://linkedin.com" className="text-neutral-400 hover:text-white transition-colors" title="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="https://behance.net" className="text-neutral-400 hover:text-white transition-colors" title="Behance">
            <BehanceIcon size={18} />
          </a>
        </div>

        {/* Scroll Track & Indicator */}
        <div className="relative w-[1px] h-20 bg-neutral-200 flex justify-center pointer-events-auto">
          <div
            className="absolute w-[3px] bg-black rounded-full transition-all duration-75"
            style={{
              height: '20px',
              top: `calc(${scrollProgress}% - ${scrollProgress * 0.20}px)`
            }}
          ></div>
        </div>
      </div>

      <Header />
      <Hero />
      <Marquee />
      <ServicesSection />
      <PortfolioGrid onSelect={setSelectedProject} />
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
