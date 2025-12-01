'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../constants';
import { cn } from '../lib/utils';

export const Skills = () => {
  const categories = ["All", "Languages", "Frameworks", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-[#8D0240]">Skills</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">A comprehensive list of the technologies and tools I use to bring ideas to life.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === cat 
                  ? "bg-[#8D0240] text-white shadow-[0_0_20px_rgba(141,2,64,0.3)]" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-black/40 border border-white/10 rounded-xl p-6 hover:border-[#8D0240]/50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-medium text-lg">{skill.name}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-white/10 text-gray-400 border border-white/5">{skill.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};