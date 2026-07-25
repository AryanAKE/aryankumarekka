import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import VEHeader from '../components/VEHeader';
import VEFooter from '../components/VEFooter';
import VideoEditHome from './VideoEditHome';
import VideoEditCategory from './VideoEditCategory';
import '../videoEdit.css';

export default function VideoEditApp() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change within video editing section
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Fade-up animation observer for video editing pages
    const elementsToAnimate = document.querySelectorAll(
      '.ve-page section h1, .ve-page section h2, .ve-page section p:not(.text-xs), .ve-page section .grid > div, .ve-page section a'
    );
    elementsToAnimate.forEach((el) => {
      if (!el.classList.contains('ve-fade-up-element')) {
        el.classList.add('ve-fade-up-element');
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
      document.querySelectorAll('.ve-fade-up-element').forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div id="top" className="ve-page min-h-screen bg-white relative overflow-hidden">
      <VEHeader />
      <Routes>
        <Route path="/" element={<VideoEditHome />} />
        <Route path="/category/:slug" element={<VideoEditCategory />} />
      </Routes>
      <VEFooter />
    </div>
  );
}
