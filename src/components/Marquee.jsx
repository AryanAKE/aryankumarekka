import React, { useEffect, useRef, useState } from 'react';
import './Marquee.css';

const Marquee = ({ text, speed = 'normal', reverse = false, scrollDriven = false }) => {
  const reverseClass = reverse ? 'reverse' : '';
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const items = Array(8).fill(text);

  useEffect(() => {
    if (!scrollDriven) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const multiplier = speed === 'fast' ? 1.5 : speed === 'slow' ? 0.5 : 1;
      const direction = reverse ? 1 : -1;
      const rawOffset = scrollY * multiplier * direction;

      // Wrap around so it loops seamlessly
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 2;
        const wrapped = ((rawOffset % trackWidth) + trackWidth) % trackWidth;
        setOffset(direction * wrapped);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDriven, speed, reverse]);

  const speedClass = !scrollDriven ? (speed === 'fast' ? 'fast' : speed === 'slow' ? 'slow' : '') : '';

  return (
    <div className="marquee-wrapper">
      <div
        ref={trackRef}
        className={`marquee-track ${speedClass} ${reverseClass} ${scrollDriven ? 'scroll-driven' : ''}`}
        style={scrollDriven ? { transform: `translateX(${offset}px)` } : {}}
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
