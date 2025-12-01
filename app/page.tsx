'use client';

import React, { useEffect } from 'react';
import { Navbar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Background } from '../components/ui/Background';

export default function Portfolio() {
  // Scroll to top on refresh/load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Use setTimeout to ensure it runs after browser's native scroll restoration
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
      
      // Optional: Tell browser not to restore scroll position
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    }
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#8D0240]/30">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}