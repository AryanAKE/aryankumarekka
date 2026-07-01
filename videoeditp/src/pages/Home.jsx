import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ServicesSection from '../components/ServicesSection';
import PortfolioGrid from '../components/PortfolioGrid';
import ProjectModal from '../components/ProjectModal';
import FloatingSocials from '../components/FloatingSocials';
import { useState, useEffect } from 'react';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <FloatingSocials scrollProgress={scrollProgress} />
      <Hero />
      <Marquee />
      <ServicesSection />
      <PortfolioGrid onSelect={setSelectedProject} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
