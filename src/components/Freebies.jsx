import React, { useEffect, useRef } from 'react';
import Marquee from './Marquee';
import { freebies } from '../data';
import './Freebies.css';

const Freebies = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    let animationId;
    
    const updateCards = () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.freebie-card');
      const windowHeight = window.innerHeight;
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        
        // Progress goes from 0 (card enters bottom of screen) to 1 (card reaches middle of screen)
        const elementTop = rect.top;
        const triggerPoint = windowHeight * 0.9; 
        const finishPoint = windowHeight * 0.65;
        
        // Base progress
        let rawProgress = (triggerPoint - elementTop) / (triggerPoint - finishPoint);
        
        // Stagger the animation on desktop so they don't all flip at the exact same time
        const isDesktop = window.innerWidth > 767;
        const staggerOffset = isDesktop ? (index * 0.15) : 0; 
        
        let progress = Math.max(0, Math.min(1, rawProgress - staggerOffset));
        
        // Easing function (easeOutCubic) to make the scrub feel smooth and snappy
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const y = 80 * (1 - easeProgress);
        const rotate = 25 * (1 - easeProgress);
        const opacity = easeProgress;

        card.style.opacity = opacity;
        // The perspective gives it a 3D flip effect as it comes in
        card.style.transform = `perspective(1000px) translateY(${y}px) rotateX(${rotate}deg)`;
      });
      
      animationId = requestAnimationFrame(updateCards);
    };

    animationId = requestAnimationFrame(updateCards);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="section-freebies" id="freebies">
      <div className="freebies-marquee">
        <Marquee text="GIGS AND HOBBIES" scrollDriven />
      </div>

      <div className="freebies-heading-row">
        <h2 className="freebies-heading">Gigs & Hobbies</h2>
        <div className="freebies-subtitle">WHAT I DO & WHAT I LOVE ↗</div>
      </div>

      <div className="freebies-grid" ref={gridRef}>
        {freebies.map((freebie) => (
          <a
            key={freebie.id}
            href={freebie.link}
            target={freebie.link !== '#' ? '_blank' : '_self'}
            rel="noreferrer"
            className={`freebie-card ${freebie.color}`}
          >
            <div className="freebie-card-number">{freebie.number}</div>
            <div className="freebie-card-emoji">{freebie.emoji}</div>
            <div className="freebie-card-title">{freebie.title}</div>
            <div className="freebie-card-subtitle">{freebie.subtitle}</div>
            <div className="freebie-card-arrow">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Freebies;
