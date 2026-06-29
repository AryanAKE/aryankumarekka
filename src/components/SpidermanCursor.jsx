import React, { useEffect, useState } from 'react';
import './SpidermanCursor.css';

const SpidermanCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let animationFrameId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setIsActive(true);
      
      // Check if hovering over clickable element
      const target = e.target;
      const computedStyle = window.getComputedStyle(target);
      const isClickable = computedStyle.cursor === 'pointer' || 
                          target.tagName.toLowerCase() === 'a' || 
                          target.tagName.toLowerCase() === 'button';
      setIsHovering(isClickable);
    };

    const updatePosition = () => {
      // Spring easing for smooth trailing effect
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      setPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', onMouseMove);
    updatePosition();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isActive) return null;

  return (
    <div 
      className={`spiderman-cursor ${isHovering ? 'is-hovering' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      {/* Web line going straight up to the top of the viewport */}
      <div 
        className="spider-web-line" 
        style={{ 
          height: `${Math.max(0, position.y)}px`, 
          top: `-${Math.max(0, position.y)}px` 
        }} 
      />
      
      {/* Spiderman Icon */}
      <div className="spiderman-icon">
        <svg viewBox="0 0 100 100" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
          {/* Head shape */}
          <path d="M50 5 C 20 5, 10 35, 10 55 C 10 85, 35 95, 50 95 C 65 95, 90 85, 90 55 C 90 35, 80 5, 50 5 Z" fill="#E23636" />
          
          {/* Web patterns */}
          <g stroke="#7A1D1D" strokeWidth="1.5" fill="none" opacity="0.6">
            <path d="M50 5 L50 95 M10 55 L90 55 M22 25 L78 82 M22 82 L78 25 M32 12 L68 90 M32 90 L68 12" />
            <path d="M 50 25 Q 30 25 15 40 M 50 25 Q 70 25 85 40" />
            <path d="M 50 40 Q 30 40 10 55 M 50 40 Q 70 40 90 55" />
            <path d="M 50 75 Q 30 75 15 65 M 50 75 Q 70 75 85 65" />
          </g>

          {/* Left Eye */}
          <path d="M 46 72 Q 25 75 14 55 Q 30 45 46 50 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" strokeLinejoin="round" />
          {/* Right Eye */}
          <path d="M 54 72 Q 75 75 86 55 Q 70 45 54 50 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default SpidermanCursor;
