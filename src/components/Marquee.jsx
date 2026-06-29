import React, { useEffect, useRef } from 'react';
import './Marquee.css';

const Marquee = ({ text, speed = 'normal', reverse = false, scrollDriven = false }) => {
  const reverseClass = reverse ? 'reverse' : '';
  const trackRef = useRef(null);
  
  useEffect(() => {
    let animationId;
    let timeOffset = 0;
    
    const baseSpeed = speed === 'fast' ? 1.5 : speed === 'slow' ? 0.5 : 1;
    const direction = reverse ? 1 : -1;

    const loop = () => {
      // Auto-scroll continuously
      timeOffset += baseSpeed;
      
      // Add scroll-responsive physics if requested
      let scrollOffset = 0;
      if (scrollDriven) {
        scrollOffset = window.scrollY * 0.4;
      }
      
      const totalMovement = timeOffset + scrollOffset;
      const rawOffset = totalMovement * direction;

      if (trackRef.current) {
        // The track width is half of the total scrollWidth because we duplicated the items
        const trackWidth = trackRef.current.scrollWidth / 2;
        let wrapped = rawOffset % trackWidth;
        
        // Ensure it stays negative to translate left correctly
        if (wrapped > 0) wrapped -= trackWidth;
        
        trackRef.current.style.transform = `translate3d(${wrapped}px, 0, 0)`;
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, [scrollDriven, speed, reverse]);

  // Create enough items to easily double the width of any screen
  const items = Array(12).fill(text);

  return (
    <div className="marquee-wrapper">
      <div
        ref={trackRef}
        className={`marquee-track ${reverseClass}`}
        style={{ animation: 'none' }} /* We override the CSS animation with our smooth JS loop */
      >
        {items.map((item, index) => (
          <span key={index} className="marquee-text-item">
            {item}&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
