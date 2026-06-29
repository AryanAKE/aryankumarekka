import React, { useEffect, useState, useRef } from 'react';
import './BatCursor.css';

const BatCursor = () => {
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
        // Calculate angle. +90 because our SVG bat points UP natively.
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
      className={`bat-cursor ${isHovering ? 'is-hovering' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <div 
        className={`bat-icon ${position.isMoving ? 'is-flying' : ''}`}
        style={{
          transform: `rotate(${position.angle}deg)`
        }}
      >
        <svg viewBox="0 0 100 100" width="38" height="38" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFFFFF">
            <!-- Left Wing -->
            <path className="wing wing-left" d="M 46 40 C 20 10, 0 30, 0 40 C 10 50, 20 70, 25 70 C 35 60, 46 55, 46 55 Z" />
            <!-- Right Wing -->
            <path className="wing wing-right" d="M 54 40 C 80 10, 100 30, 100 40 C 90 50, 80 70, 75 70 C 65 60, 54 55, 54 55 Z" />
            
            <!-- Body -->
            <ellipse cx="50" cy="50" rx="8" ry="16" />
            
            <!-- Head -->
            <circle cx="50" cy="30" r="7" />
            
            <!-- Ears -->
            <polygon points="46,28 41,16 49,26" />
            <polygon points="54,28 59,16 51,26" />
            
            <!-- Glowing Red Eyes -->
            <circle cx="47" cy="28" r="1.5" fill="#E23636" />
            <circle cx="53" cy="28" r="1.5" fill="#E23636" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BatCursor;
