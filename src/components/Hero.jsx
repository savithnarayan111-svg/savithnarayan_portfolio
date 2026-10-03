import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import og from '../assets/og.png';
import SAVITH_NARAYAN_CV from "../assets/SAVITH_NARAYAN_CV.pdf"

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Python Full Stack Developer',
        'React Developer',
        'Django Developer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-[#0b0f19] transition-colors duration-300"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 md:bottom-32 md:right-32 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full filter blur-3xl animate-blob [animation-delay:2s]"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full filter blur-3xl animate-blob [animation-delay:4s]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Greeting Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-6">
              Hello, I'm
            </span>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
              Savith Narayan S
            </h1>

            {/* Typing Subtitle */}
            <div className="text-xl sm:text-2xl font-bold mb-6 text-slate-700 dark:text-slate-200 flex items-center h-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
                <span ref={el}></span>
              </span>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-8 leading-relaxed">
              A passionate Python Full Stack Developer dedicated to crafting scalable, reliable web applications. Committed to clean code, interactive frontends, and robust backend APIs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-center"
              >
                Contact Me
              </Link>
              <a
                href={SAVITH_NARAYAN_CV}
                download="SAVITH_NARAYAN_CV.pdf"
                className="px-8 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-white border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
              >
                Download Resume
              </a>
            </div>

            {/* Quick Socials */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/savith-narayan-s-943b2b31a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="mailto:savithnarayans111@gmail.com"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Email Savith"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              {/* Spinning / Glowing Gradient Ring behind Avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 animate-spin [animation-duration:12s] opacity-75 blur-[2px] group-hover:scale-105 transition-transform duration-300"></div>

              {/* Inner container */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden bg-slate-100 dark:bg-[#151c2c] p-2 flex items-center justify-center">
                <img
                  src={og}
                  alt="Savith Narayan S Profile"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
