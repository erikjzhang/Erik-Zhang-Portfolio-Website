'use client';

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS, SOCIALS } from '../constants';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-[#8D0240]">Projects</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Highlights from hackathons, coursework, and personal experiments.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#8D0240]/50 transition-all">
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-xs font-bold text-[#8D0240] bg-[#8D0240]/10 px-3 py-1 rounded-full border border-[#8D0240]/20 mb-2 inline-block">
                    {project.event}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a href={project.links.github} className="flex items-center gap-2 text-sm text-white hover:text-[#8D0240] transition-colors">
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View GitHub Button */}
        <div className="mt-12 text-center">
          <a 
            href={SOCIALS.github} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/10"
          >
            <Github size={20} />
            Check out more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};