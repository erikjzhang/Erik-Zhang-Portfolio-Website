'use client';

import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10 relative z-10 text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Erik Zhang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};