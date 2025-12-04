'use client';

import React, { useRef, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { SOCIALS } from '../constants';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // New state for success UI

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_f645kaw',    // NEXT_PUBLIC_EMAILJS_SERVICE_ID     
          'template_mawbmlm',   // NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
          formRef.current,
          '0nDpH-Xqrtt2SyQwx'   // NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSuccess(true); // Show success UI
            setIsSending(false);
            if (formRef.current) formRef.current.reset();
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message. Please try again.");
            setIsSending(false);
          }
        );
    }
  };

  return (
    <section id="contact" className="py-24 bg-linear-to-b from-black to-[#8D0240]/20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In <span className="text-[#8D0240]">Touch</span></h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just connecting. 
              Feel free to reach out via email or LinkedIn.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#8D0240]/10 text-[#8D0240]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href={SOCIALS.email} className="text-gray-400 hover:text-white transition-colors">erikjzhang@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#1045A8]/10 text-[#1045A8]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Locations</h4>
                  <p className="text-gray-400">Columbus, OH | Long Island, NY</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-white font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a href={SOCIALS.github} className="p-3 rounded-full bg-white/5 hover:bg-[#8D0240] hover:text-white text-gray-400 transition-all">
                  <Github size={20} />
                </a>
                <a href={SOCIALS.linkedin} className="p-3 rounded-full bg-white/5 hover:bg-[#1045A8] hover:text-white text-gray-400 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Dynamic Form / Success Message Area */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden min-h-[480px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                // Success View
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center flex flex-col items-center justify-center h-full space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 max-w-xs mx-auto">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/10 mt-4 group"
                  >
                    Send Another Message
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ) : (
                // Form View
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="user_name" className="text-sm font-medium text-gray-300">Name</label>
                      <input 
                        type="text" 
                        name="user_name" 
                        id="user_name" 
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8D0240] transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="user_email" className="text-sm font-medium text-gray-300">Email</label>
                      <input 
                        type="email" 
                        name="user_email" 
                        id="user_email" 
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8D0240] transition-colors"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                      <textarea 
                        name="message" 
                        id="message" 
                        required
                        rows={4}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8D0240] transition-colors resize-none"
                        placeholder="Hello, I'd like to talk about..."
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 rounded-lg bg-linear-to-r from-[#8D0240] to-[#1045A8] text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <>
                          <Loader2 size={18} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </div>
    </section>
  );
};