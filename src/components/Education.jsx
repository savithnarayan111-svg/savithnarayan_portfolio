import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCalendar } from 'react-icons/fi';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-50 dark:bg-[#111827] text-slate-800 dark:text-slate-100 transition-colors duration-300"
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
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-indigo-600 rounded-full mx-auto mt-4"
          />
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative p-8 rounded-2xl glassmorphism shadow-md overflow-hidden"
        >
          {/* Background overlay design details */}
          <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-xl"></div>

          <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
            {/* Icon representation */}
            <div className="p-4 rounded-2xl bg-indigo-500/15 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-inner">
              <FiBookOpen className="w-8 h-8" />
            </div>

            {/* Core Details */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Bachelor of Computer Science(Bsc CS)
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">
                    Undergraduate University Degree
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/10 whitespace-nowrap self-start md:self-auto">
                  <FiCalendar /> Completed
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed mb-6">
                {/* Acquired comprehensive training in core computer science subjects. Developed strong conceptual skills in object-oriented programming (OOP), relational database management systems (RDBMS), data structures, operating systems, and full-stack web application development paradigms. */}
                Acquired a strong academic foundation in computer science through a Bachelor's degree, with knowledge of object-oriented programming (OOP), data structures, database management systems (DBMS), operating systems, computer networks, and software development principles. Developed analytical and problem-solving skills through academic projects and practical assignments.
              </p>

              {/* Key takeaways */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200/50 dark:border-slate-800/80 pt-6">
                <div className="flex items-start gap-2">
                  <FiAward className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider">Key Focus</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {/* Software engineering fundamentals & backend architectures */}
                      Programming, OOP, DBMS, Data Structures, and Operating Systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FiAward className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider">Practical Skills</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {/* Responsive frontends, relational design, & algorithm analysis */}
                      Programming, SQL, Problem Solving, Database Design, and Basic Web Development.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
