import React, { useEffect, useState, useRef } from 'react';
import './SpidermanCursor.css';

const SpidermanCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100, angle: 0, isMoving: false });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const lastAngle = useRef(0);

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
      
      const target = e.target;
      const computedStyle = window.getComputedStyle(target);
      const isClickable = computedStyle.cursor === 'pointer' || 
                          target.tagName.toLowerCase() === 'a' || 
                          target.tagName.toLowerCase() === 'button';
      setIsHovering(isClickable);
    };

    const updatePosition = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      let angle = lastAngle.current;
      let isMoving = false;

      if (distance > 0.5) {
        // Calculate angle. +90 because our SVG spider points UP natively.
        angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        lastAngle.current = angle;
        isMoving = true;
      }

      // Smooth trailing physics
      currentX += dx * 0.18;
      currentY += dy * 0.18;

      setPosition({ x: currentX, y: currentY, angle, isMoving });
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
      className={`spider-cursor ${isHovering ? 'is-hovering' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <div 
        className={`spider-icon ${position.isMoving ? 'is-crawling' : ''}`}
        style={{
          transform: `rotate(${position.angle}deg)`
        }}
      >
        <svg viewBox="0 0 100 100" width="34" height="34" xmlns="http://www.w3.org/2000/svg">
          {/* Black widow style top-down spider */}
          <g fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Legs - Left */}
            <path className="leg leg-l1" d="M40 35 Q15 15 10 25" fill="none" />
            <path className="leg leg-l2" d="M38 45 Q10 40 5 55" fill="none" />
            <path className="leg leg-l3" d="M38 55 Q10 70 15 85" fill="none" />
            <path className="leg leg-l4" d="M40 65 Q25 95 30 100" fill="none" />
            
            {/* Legs - Right */}
            <path className="leg leg-r1" d="M60 35 Q85 15 90 25" fill="none" />
            <path className="leg leg-r2" d="M62 45 Q90 40 95 55" fill="none" />
            <path className="leg leg-r3" d="M62 55 Q90 70 85 85" fill="none" />
            <path className="leg leg-r4" d="M60 65 Q75 95 70 100" fill="none" />

            {/* Abdomen */}
            <ellipse cx="50" cy="65" rx="16" ry="24" stroke="none" />
            
            {/* Cephalothorax (Head/Torso) */}
            <circle cx="50" cy="35" r="12" stroke="none" />
          </g>
          {/* Subtle red hourglass marking on back */}
          <path d="M46 58 L54 58 L46 72 L54 72 Z" fill="#E23636" stroke="none" />
        </svg>
      </div>
    </div>
  );
};

export default SpidermanCursor;
