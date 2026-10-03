import React from 'react';
import { motion as motionDiv } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiPostgresql, SiMysql, SiPostman } from 'react-icons/si';
import { FiServer, FiCode } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 92, icon: <FaHtml5 className="text-[#e34f26] w-5 h-5" /> },
      { name: 'CSS3', level: 88, icon: <FaCss3Alt className="text-[#1572b6] w-5 h-5" /> },
      { name: 'JavaScript', level: 82, icon: <FaJs className="text-[#f7df1e] bg-black p-0.5 rounded w-5 h-5" /> },
      { name: 'React.js', level: 85, icon: <FaReact className="text-[#61dafb] w-5 h-5 animate-pulse-slow" /> },
      { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="text-[#06b6d4] w-5 h-5" /> },
      { name: 'Bootstrap', level: 75, icon: <FaBootstrap className="text-[#7952b3] w-5 h-5" /> },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Python', level: 86, icon: <FaPython className="text-[#3776ab] w-5 h-5" /> },
      { name: 'Django', level: 82, icon: <SiDjango className="text-[#092e20] dark:text-[#44b78b] w-5 h-5" /> },
      { name: 'Django REST Framework', level: 80, icon: <FiServer className="text-[#a30000] dark:text-[#ff4a4a] w-5 h-5" /> },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 78, icon: <SiPostgresql className="text-[#4169e1] w-5 h-5" /> },
      { name: 'MySQL', level: 80, icon: <SiMysql className="text-[#00758f] w-5 h-5" /> },
    ]
  },
  {
    title: 'Tools & Workspace',
    skills: [
      { name: 'Git', level: 85, icon: <FaGitAlt className="text-[#f05032] w-5 h-5" /> },
      { name: 'GitHub', level: 88, icon: <FaGithub className="text-slate-800 dark:text-slate-200 w-5 h-5" /> },
      { name: 'Postman', level: 80, icon: <SiPostman className="text-[#ff6c37] w-5 h-5" /> },
      { name: 'VS Code', level: 90, icon: <FiCode className="text-[#007acc] w-5 h-5" /> },
      { name: 'Docker', level: 70, icon: <FaDocker className="text-[#2496ed] w-5 h-5" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-[#111827] text-slate-800 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <motionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block"
          >
            Skills & Expertise
          </motionDiv>
          <motionDiv
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-indigo-600 rounded-full mx-auto mt-4"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motionDiv
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    {/* Skill Info */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="group-hover:scale-110 transition-transform duration-200">{skill.icon}</span>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motionDiv
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: skillIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motionDiv>
          ))}
        </div>

      </div>
    </section>
  );
}
