import { useState, useEffect } from 'react';
import VEHero from '../components/VEHero';
import VEMarquee from '../components/VEMarquee';
import VEServicesSection from '../components/VEServicesSection';
import VEPortfolioGrid from '../components/VEPortfolioGrid';
import VEContactSection from '../components/VEContactSection';
import VEProjectModal from '../components/VEProjectModal';
import VEFloatingSocials from '../components/VEFloatingSocials';

export default function VideoEditHome() {
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
      <VEFloatingSocials scrollProgress={scrollProgress} />
      <VEHero />
      <VEMarquee />
      <VEServicesSection />
      <VEPortfolioGrid onSelect={setSelectedProject} />
      <VEContactSection />
      <VEProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
