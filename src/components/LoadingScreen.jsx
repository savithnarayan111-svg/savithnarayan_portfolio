import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0f19] text-white"
    >
      <div className="relative flex items-center justify-center">
        {/* Glow Effects */}
        <div className="absolute w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute w-16 h-16 bg-purple-500/30 rounded-full blur-md animate-pulse"></div>

        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-16 h-16 border-4 border-t-indigo-500 border-r-purple-500 border-b-blue-500 border-l-transparent rounded-full"
        />
        <div className="absolute font-bold text-xl text-indigo-400 font-sans tracking-wide">
          S
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400 font-medium">Savith Narayan S</span>
        <p className="mt-1 text-sm font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          PORTFOLIO 2026
        </p>
      </motion.div>
    </motion.div>
  );
}
