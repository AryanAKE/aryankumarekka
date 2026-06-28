import { useEffect } from 'react';

export const useIntersectionObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Optional: Unobserve after animating if you only want it to happen once
          // observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.15 });

    // Wait a brief moment to ensure DOM is fully rendered
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);
};
