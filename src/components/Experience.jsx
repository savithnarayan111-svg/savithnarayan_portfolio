import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiCalendar, FiMapPin } from 'react-icons/fi';

const responsibilities = [
  "Developing responsive web applications using React.js and Tailwind CSS.",
  "Building robust and secure REST APIs using Django and Django REST Framework.",
  "Developing modern frontend interfaces with complex state management.",
  "Working with database query optimizations and tables in PostgreSQL.",
  "Integrating third-party APIs and managing local and remote server queries.",
  "Collaborating using Git and GitHub version control system workflows.",
  "Debugging, troubleshooting, and testing software applications for bug fixes."
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-indigo-600 rounded-full mx-auto mt-4"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-8 pl-8 space-y-12">

          {/* Timeline Node */}
          <div className="relative">
            {/* Pulsing indicator on the border line */}
            <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-4 ring-indigo-500/20 text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-white animate-ping" />
              <span className="absolute h-2 w-2 rounded-full bg-white" />
            </span>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 rounded-2xl glassmorphism shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Python Full Stack Developer
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                    Tron Digital Academy
                  </p>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 py-1 px-3.5 rounded-full">
                    <FiCalendar className="text-indigo-500" /> 5 Months (Current)
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 py-1 px-3.5 rounded-full">
                    <FiMapPin className="text-indigo-500" /> Kerala, India
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div>
                <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-4">
                  Responsibilities & Handled Areas:
                </h4>
                <ul className="space-y-3">
                  {responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                    >
                      <FiCheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
