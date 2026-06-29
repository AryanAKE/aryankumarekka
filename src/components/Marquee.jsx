import React from 'react';
import './Marquee.css';

const Marquee = ({ text, speed = 'normal', reverse = false, style = {} }) => {
  const speedClass = speed === 'fast' ? 'fast' : speed === 'slow' ? 'slow' : '';
  const reverseClass = reverse ? 'reverse' : '';
  
  // Duplicate text enough times to fill the screen for a smooth loop
  const items = Array(8).fill(text);

  const multiplier = style['--marquee-speed-multiplier'] || 1;
  const baseDuration = speed === 'fast' ? 8 : speed === 'slow' ? 18 : 12;
  const dynamicDuration = Math.max(baseDuration / multiplier, 2);

  return (
    <div className="marquee-wrapper">
      <div
        className={`marquee-track ${reverseClass}`}
        style={{ animationDuration: `${dynamicDuration}s` }}
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
