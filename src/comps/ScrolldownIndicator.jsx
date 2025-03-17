import React, { useEffect, useRef } from 'react';

const ScrollDownIndicator = () => {
  const indicatorRef = useRef(null);
  const lightningRef = useRef(null);
  
  useEffect(() => {
    const indicator = indicatorRef.current;
    const lightning = lightningRef.current;
    
    // Pulse animation for the indicator
    const pulseAnimation = () => {
      let opacity = 1;
      let direction = -0.01;
      
      const animate = () => {
        opacity += direction;
        
        if (opacity <= 0.4) {
          direction = 0.01;
        } else if (opacity >= 1) {
          direction = -0.01;
        }
        
        if (indicator) {
          indicator.style.opacity = opacity;
        }
        
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    };
    
    pulseAnimation();
    
    // Lightning effect animation
    const createLightning = () => {
      if (!lightning) return;
      
      const flash = () => {
        // Hide lightning initially
        lightning.style.opacity = '0';
        
        setTimeout(() => {
          // Show lightning for a brief moment
          lightning.style.opacity = Math.random() * 0.5 + 0.5;
          
          setTimeout(() => {
            // Hide lightning after flash
            lightning.style.opacity = '0';
            
            // Schedule next flash
            setTimeout(flash, Math.random() * 2000 + 500);
          }, 100);
        }, 50);
      };
      
      flash();
    };
    
    createLightning();
    
    // Scroll functionality
    const handleClick = () => {
      const heroHeight = window.innerHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: 'smooth'
      });
    };
    
    if (indicator) {
      indicator.addEventListener('click', handleClick);
    }
    
    return () => {
      if (indicator) {
        indicator.removeEventListener('click', handleClick);
      }
    };
  }, []);
  
  return (
    <div 
      ref={indicatorRef}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
      style={{
        zIndex: 10,
        transition: 'opacity 0.3s ease'
      }}
      aria-label="Scroll down to explore"
    >
      <div className="scrollicon text-white text-sm mb-2 font-light tracking-widest">EXPLORE</div>
      <div className="scrollicon flex flex-col items-center relative">
        {/* Mouse outline */}
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1 relative">
          {/* Mouse wheel dot */}
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-1"></div>
          
          {/* Lightning effect container */}
          <div 
            ref={lightningRef}
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0,
              transition: 'opacity 0.05s ease'
            }}
          >
            {/* Lightning bolts around the mouse */}
            <svg className="absolute top-0 left-0" width="30" height="36" viewBox="0 0 30 36" fill="none">
              <path d="M4 5 L-2 12 L3 10 L-1 18" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
              <path d="M26 5 L32 12 L27 10 L31 18" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
              <path d="M4 20 L-2 27 L3 25 L-1 33" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
              <path d="M26 20 L32 27 L27 25 L31 33" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
            </svg>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full" style={{
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8), 0 0 20px 6px rgba(100, 100, 255, 0.5)',
              zIndex: -1
            }}></div>
          </div>
        </div>
      </div>

      {/* Downward-pointing chevrons */}
      <div className="downarrow mt-2 flex flex-col items-center">
        <svg width="20" height="10" viewBox="0 0 20 10" className="animate-pulse">
          <path d="M1 1L10 8L19 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <svg width="16" height="8" viewBox="0 0 16 8" className="mt-1 animate-pulse" style={{ animationDelay: '0.2s' }}>
          <path d="M1 1L8 6L15 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

export default ScrollDownIndicator;