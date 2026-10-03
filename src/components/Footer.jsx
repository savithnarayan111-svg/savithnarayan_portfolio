import React from 'react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-[#0b0f19] text-slate-500 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="hero" smooth={true} duration={500} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Home</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">About</Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Skills</Link>
          <Link to="experience" smooth={true} duration={500} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Experience</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Projects</Link>
          <Link to="education" smooth={true} duration={500} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Education</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Contact</Link>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-24 bg-slate-200 dark:bg-slate-800" />

        {/* Copyright */}
        <p className="text-xs text-center">
          &copy; {new Date().getFullYear()} Savith Narayan S. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
