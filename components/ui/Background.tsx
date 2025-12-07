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
    
    // Detect mobile to adjust density and size
    const isMobile = window.innerWidth < 768;

    const generatedParticles: any[] = [];
    // Reduce count significantly for mobile to prevent clutter
    const particleCount = isMobile ? 30 : 75; 
    const minDistance = isMobile ? 15 : 7; 

    for (let i = 0; i < particleCount; i++) {
      let valid = false;
      let attempts = 0;
      let left = 0;
      let top = 0;

      while (!valid && attempts < 50) {
        left = Math.random() * 100;
        top = Math.random() * 100;
        
        // Clear zone logic
        // On mobile, the content is narrower, so we widen the clear zone horizontally
        // but perhaps shorten it vertically or adjust based on layout.
        // Horizontal: 10-90% clear on mobile vs 30-70% on desktop? 
        // Actually, text is usually full width on mobile. Let's keep the center clear.
        const horizontalZone = isMobile ? (left > 10 && left < 90) : (left > 30 && left < 70);
        const verticalZone = top > 20 && top < 80;
        
        if (horizontalZone && verticalZone) {
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
        // Smaller symbols on mobile
        const sizeBase = isMobile ? 14 : 20;
        const sizeVariance = isMobile ? 10 : 30;
        const size = sizeBase + Math.random() * sizeVariance; 
        
        const speed = 0.1 + Math.random() * 0.3; 
        
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

  // Opacity Calculation
  const fadeStart = 100; 
  const fadeEnd = 600;   
  
  let opacityMultiplier = 1;
  if (offsetY > fadeStart) {
      const progress = Math.min(1, (offsetY - fadeStart) / (fadeEnd - fadeStart));
      opacityMultiplier = 1 - (progress * 0.85); 
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

        // Lower base opacity for mobile to improve text readability
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const baseOpacity = isMobile ? 0.15 : 0.2;
        const variableOpacity = isMobile ? 0.15 : 0.3;

        return (
          <div
            key={p.id}
            className="absolute text-[#D14D7E] font-mono font-bold select-none"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              fontSize: `${p.size}px`,
              transform: `translateY(-${transformY}px) translate3d(${floatX}px, ${floatY}px, 0)`, 
              opacity: (baseOpacity + (Math.sin(p.id) * variableOpacity)) * opacityMultiplier, 
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