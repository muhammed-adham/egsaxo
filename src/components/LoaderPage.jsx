import React, { useState, useEffect, useRef } from 'react';
import './LoaderPage.css';

const LoaderPage = () => {
  const [percentage, setPercentage] = useState(0);
  const loaderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev < 100) {
          const increment = Math.random() * 3;
          return Math.min(prev + increment, 100);
        } else {
          // Reset for continuous demo
          setTimeout(() => setPercentage(0), 1000);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!loaderRef.current) return;
      
      const rect = loaderRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * 0.01;
      const deltaY = (e.clientY - centerY) * 0.01;
      
      loaderRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    if (!loaderRef.current) return;
    
    loaderRef.current.style.transform = 'scale(0.95)';
    setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.transform = 'scale(1)';
      }
    }, 150);
  };

  return (
    <div className="loader-body">
      <div className="loader-container">
        <div 
          ref={loaderRef}
          className="loader"
          onClick={handleClick}
        >
          <div className="inner-loader">
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="percentage">{Math.floor(percentage)}%</div>
          </div>
        </div>
        <div className="loading-text">LOADING</div>
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderPage;