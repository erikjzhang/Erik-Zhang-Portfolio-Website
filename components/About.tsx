'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Clock4} from 'lucide-react';
import { EXPERIENCE } from '../constants';

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column: Bio */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About <span className="text-[#8D0240]">Me</span></h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Bachelor of Science in Computer Science & Engineering student at <strong className="text-white">The Ohio State University</strong>, minoring in Music.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey involves blending technical rigor with creative problem solving. Currently, I work as a Junior Web Developer at the MMC Digital Lab, maintaining sites and building new features using the modern React stack.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Briefcase size={20} className="text-[#8D0240]" /> Experience
              </h3>
              <div className="border-l-2 border-white/10 ml-2 space-y-8 pl-8 relative">
                {EXPERIENCE.map((job, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline Dot */}
                    <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-[#8D0240] border-4 border-black" />
                    <h4 className="text-white font-medium">{job.role}</h4>
                    <p className="text-sm text-[#b00552] mb-2">{job.company} | {job.period}</p>
                    <p className="text-sm text-gray-500">{job.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Interests Cards */}
          <div className="grid gap-6">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#8D0240]/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#8D0240]/10 flex items-center justify-center mb-4 text-[#8D0240] group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
              <p className="text-gray-400">The Ohio State University</p>
              <p className="text-gray-500 text-sm">B.S. Computer Science & Engineering</p>
              <p className="text-gray-500 text-sm">Minor in Music</p>
              <p className="text-gray-500 text-sm mt-2">2024 - 2028</p>
            </div>

            {/* Activities Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1045A8]/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#1045A8]/10 flex items-center justify-center mb-4 text-[#1045A8] group-hover:scale-110 transition-transform">
                <Clock4 size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Activities</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Humanitarian Engineering Scholars Program</li>
                <li>• OHI/O</li>
                <li>• The Ohio State University Athletic Band</li>
                <li>• Kappa Kappa Psi Eta Chapter</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};