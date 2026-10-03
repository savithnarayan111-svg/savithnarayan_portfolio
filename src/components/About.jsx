import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCompass, FiAward } from 'react-icons/fi';

export default function About() {
  const cards = [
    {
      icon: <FiBriefcase className="w-6 h-6 text-blue-500" />,
      title: "Python Full Stack Developer",
      desc: "Full Stack Developer at Tron Digital"
    },
    {
      icon: <FiAward className="w-6 h-6 text-indigo-500" />,
      title: "Experience",
      desc: "2 months of intensive hands-on project experience"
    },
    {
      icon: <FiCompass className="w-6 h-6 text-purple-500" />,
      title: "Focus Areas",
      desc: "React frontends, Django REST backends, Postgres databases"
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-indigo-600 rounded-full mx-auto mt-4"
          />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Detailed Paragraphs (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Who I Am
            </h3>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a dedicated, details-driven <span className="font-semibold text-indigo-600 dark:text-indigo-400">Python Full Stack Developer</span> from Kerala, India. Currently working as a Python Full Stack Developer at <span className="font-semibold text-indigo-600 dark:text-indigo-400">Tron Digital Academy</span>, I have built solid foundations in engineering scalable web solutions during my 2 months of training.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              My core capability lies in marrying responsive, beautiful frontend architectures (using React.js and Tailwind CSS) with structured backend business logic (using Django and Django REST Framework), all supported by robust PostgreSQL and MySQL database designs.
            </p>

            <div className="p-6 rounded-2xl glassmorphism border-l-4 border-l-indigo-600 shadow-md">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <FiCompass className="text-indigo-500" /> Career Objective
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "To secure a challenging position as a Python Full Stack Developer where I can apply my development skills, learn cutting-edge modern workflows, and contribute to building high-performance, user-centric software solutions that make a positive impact."
              </p>
            </div>
          </motion.div>

          {/* Cards Display Column (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 lg:mb-4">
              Key Highlights
            </h3>

            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm shadow-sm"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center shadow-inner">
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
