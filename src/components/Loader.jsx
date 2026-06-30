import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fast increment for the loader
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Random increment between 1 and 15
        const next = prev + Math.floor(Math.random() * 15) + 1;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
          }, 400); // Small pause at 100% before sliding up
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Prevent scrolling while loader is active
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      // Remove overflow hidden after animation completes
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 800);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoaded]);

  return (
    <div className={`loader-container ${isLoaded ? 'slide-up' : ''}`}>
      <div className="loader-content">
        <div className="loader-counter">
          {progress}%
        </div>
        <div className="loader-progress-bar">
          <div 
            className="loader-progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
