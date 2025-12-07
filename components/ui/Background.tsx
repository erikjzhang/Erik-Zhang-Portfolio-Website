'use client';

import React, { useEffect, useRef } from 'react';

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevWidthRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set initial width
    prevWidthRef.current = window.innerWidth;

    let animationFrameId: number;
    let particles: any[] = [];
    
    const symbols = [
      '<', '>', '/', '</>', '{}', '[]', '()', ';', '#', 
      '&&', '||', '!=', '==', '=>', '::', '""', '${}', 
      '??', '++', '--', '/**/'
    ];

    // Initialize particles based on screen size
    const initParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 30 : 75; 
      const minDistance = isMobile ? 15 : 7; // percent

      for (let i = 0; i < particleCount; i++) {
        let valid = false;
        let attempts = 0;
        let left = 0;
        let top = 0;

        while (!valid && attempts < 50) {
          left = Math.random() * 100;
          top = Math.random() * 100;
          
          // Clear center zone
          const horizontalZone = isMobile ? (left > 10 && left < 90) : (left > 30 && left < 70);
          const verticalZone = top > 20 && top < 80;
          
          if (horizontalZone && verticalZone) {
             valid = false;
             attempts++;
             continue; 
          }

          valid = true;
          // Check distance collision against existing particles
          for (const p of particles) {
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
          const sizeBase = isMobile ? 14 : 20;
          const sizeVariance = isMobile ? 10 : 30;
          const size = sizeBase + Math.random() * sizeVariance; 
          
          const speed = 0.1 + Math.random() * 0.3; 
          const floatPhase = Math.random() * Math.PI * 2;
          const floatSpeed = 0.5 + Math.random() * 0.5;

          particles.push({
            id: i,
            left, // percent
            top,  // percent
            symbol,
            size,
            speed,
            floatPhase,
            floatSpeed
          });
        }
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      
      const currentWidth = window.innerWidth;
      const widthChanged = currentWidth !== prevWidthRef.current;

      // Update ref
      prevWidthRef.current = currentWidth;

      // Handle High DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // CSS size
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Scale context
      ctx.scale(dpr, dpr);
      
      if (widthChanged || particles.length === 0) {
        initParticles();
      }
    };

    // Main Render Loop
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      // Calculate Global Fade based on scroll
      const fadeStart = 100; 
      const fadeEnd = 600;   
      let globalOpacity = 1;
      
      if (scrollY > fadeStart) {
          const progress = Math.min(1, (scrollY - fadeStart) / (fadeEnd - fadeStart));
          globalOpacity = 1 - (progress * 0.85); 
      }

      // Draw Particles
      particles.forEach(p => {
        // Convert percentages to pixels
        const x = (p.left / 100) * window.innerWidth;
        const yBase = (p.top / 100) * window.innerHeight;
        
        // Animations
        const scrollOffset = scrollY * p.speed;
        const floatX = Math.sin(time * p.floatSpeed + p.floatPhase) * 15;
        const floatY = Math.cos(time * p.floatSpeed + p.floatPhase) * 15;

        const finalX = x + floatX;
        const finalY = yBase - scrollOffset + floatY;

        // Draw Text
        const baseOpacity = isMobile ? 0.15 : 0.2;
        const variableOpacity = isMobile ? 0.15 : 0.3;
        const particleOpacity = (baseOpacity + (Math.sin(p.id) * variableOpacity)) * globalOpacity;
        
        ctx.font = `bold ${p.size}px monospace`;
        ctx.fillStyle = `rgba(209, 77, 126, ${Math.max(0, particleOpacity)})`; // #D14D7E
        ctx.fillText(p.symbol, finalX, finalY);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Initial setup
    initParticles(); // Ensure particles exist before first render
    handleResize();  // Set canvas size
    window.addEventListener('resize', handleResize);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#8D0240]/40 via-black to-black" />
      
      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Fade Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
    </div>
  );
};