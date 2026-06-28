import React from 'react';
import './Marquee.css';

const Marquee = ({ text, speed = 'normal', reverse = false }) => {
  const speedClass = speed === 'fast' ? 'fast' : speed === 'slow' ? 'slow' : '';
  const reverseClass = reverse ? 'reverse' : '';
  
  // Duplicate text enough times to fill the screen for a smooth loop
  const items = Array(8).fill(text);

  return (
    <div className="marquee-wrapper">
      <div className={`marquee-track ${speedClass} ${reverseClass}`}>
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
