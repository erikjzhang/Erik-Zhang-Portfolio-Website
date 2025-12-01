'use client';

import React, { useState, useEffect, useRef } from 'react';

export const Background = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [particles, setParticles] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Add state for floating animation frame
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Floating animation loop
    let animationFrameId: number;
    const animate = () => {
      setTime((prev) => prev + 0.01); // Increment time for sine wave calculation
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const symbols = [
      '<', '>', '/', '</>', '{}', '[]', '()', ';', '#', 
      '&&', '||', '!=', '==', '=>', '::', '""', '${}', 
      '??', '++', '--', '/**/'
    ];
    
    const generatedParticles: any[] = [];
    const particleCount = 75; 
    const minDistance = 7; 

    for (let i = 0; i < particleCount; i++) {
      let valid = false;
      let attempts = 0;
      let left = 0;
      let top = 0;

      while (!valid && attempts < 50) {
        left = Math.random() * 100;
        top = Math.random() * 100;
        
        // Simple check to keep center area somewhat clear for Hero text
        // (Assuming hero text is roughly in the middle 40% of screen vertically and horizontally)
        const inCenterZone = left > 30 && left < 70 && top > 30 && top < 70;
        
        if (inCenterZone) {
           valid = false;
           attempts++;
           continue; 
        }

        valid = true;
        for (const p of generatedParticles) {
          const dx = left - p.left;
          const dy = top - p.top;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < minDistance) {
            valid = false;
            break;
          }
        }
        attempts++;
      }

      if (valid || attempts >= 50) {
        const symbol = symbols[i % symbols.length];
        const size = 20 + Math.random() * 30; 
        const speed = 0.1 + Math.random() * 0.3; 
        
        // Random phase for floating animation so they don't all move in sync
        const floatPhase = Math.random() * Math.PI * 2;
        const floatSpeed = 0.5 + Math.random() * 0.5;

        generatedParticles.push({
          id: i,
          left,
          top,
          symbol,
          size,
          speed,
          floatPhase,
          floatSpeed
        });
      }
    }

    setParticles(generatedParticles);
  }, []);

  // Opacity Calculation:
  // Starts at 1.0 (fully visible based on individual particle opacity)
  // Fades down as users scroll. 
  // At scrollY = 300 (start of scroll), it begins fading rapidly.
  // By scrollY = 800 (About section), it settles at a low opacity (e.g., 0.15)
  const fadeStart = 100; // Start fading after 100px scroll
  const fadeEnd = 600;   // Fully faded by 600px scroll
  
  // Calculate a multiplier between 1 and 0.15
  let opacityMultiplier = 1;
  if (offsetY > fadeStart) {
      const progress = Math.min(1, (offsetY - fadeStart) / (fadeEnd - fadeStart));
      opacityMultiplier = 1 - (progress * 0.85); // Fades down to 0.15 (1 - 0.85)
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#8D0240]/40 via-black to-black" />
      
      {particles.map((p) => {
        const transformY = offsetY * p.speed;
        
        const floatX = Math.sin(time * p.floatSpeed + p.floatPhase) * 15; 
        const floatY = Math.cos(time * p.floatSpeed + p.floatPhase) * 15; 

        return (
          <div
            key={p.id}
            className="absolute text-[#D14D7E] font-mono font-bold select-none"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              fontSize: `${p.size}px`,
              transform: `translateY(-${transformY}px) translate3d(${floatX}px, ${floatY}px, 0)`, 
              opacity: (0.2 + (Math.sin(p.id) * 0.3)) * opacityMultiplier, 
              transition: 'opacity 0.2s ease-out, transform 0.1s linear', 
              willChange: 'transform, opacity'
            }}
          >
            {p.symbol}
          </div>
        );
      })}
      
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
    </div>
  );
};