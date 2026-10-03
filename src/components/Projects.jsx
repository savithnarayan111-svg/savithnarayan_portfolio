import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import zawara from '../assets/zawara.png';
import reborn from "../assets/reborn.png"
import crmImg from '../assets/crm.png';
import gymImg from '../assets/gym.png';

const projectsList = [
  {
    title: 'Zawaara E-commerce Platform',
    image: zawara,
    tech: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'React',
      'Razorpay',
      'Cloudinary',
    ],
    description:
      'Developed a full-stack e-commerce platform with product management, customer orders, online payments, order tracking, invoice generation, cloud image storage, and administrative management. Implemented REST APIs and integrated Razorpay for secure online payment processing.',
    github: 'https://github.com',
    demo: 'https://zawara.in',
  },
  {
    title: 'Mr Gym Management System',
    image: crmImg,
    tech: [
      'Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'React', 'Tailwind CSS', 'Cloudinary', 'REST APIs'
    ],
    description:
      'Developed a centralized gym management system for managing members, memberships, branches, attendance, payments, expenses, product sales, workout plans, and administrative operations. Implemented REST APIs, role-based access control, cloud image storage, and a responsive React admin dashboard..',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Reborn Fitness Management System',
    image: reborn,
    tech: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'React', 'Capacitor'],
    description:
      'Developed an admin management system for monitoring and managing fitness business sales data. Implemented a responsive React-based dashboard with Django REST APIs for managing sales information, viewing records, and presenting business data in an organized interface.',
    github: 'https://github.com',
    demo: 'https://rebornfe.netlify.app/',
  },
  {
    title: 'Gym Management System',
    image: gymImg,
    tech: ['React.js', 'Bootstrap', 'Django REST Framework', 'PostgreSQL'],
    description:
      'A centralized portal managing memberships, automated renewal reminders, QR attendance checkpoints, and trainer workout appointment scheduling.',
    github: 'https://github.com',
    demo: 'https://trongym.netlify.app/',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block"
          >
            My Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-indigo-600 rounded-full mx-auto mt-4"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/10 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-white text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-black dark:bg-white border border-indigo-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 border-slate-200/60 dark:border-slate-800/80 pt-4 mt-auto">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                  >
                    <FiGithub />
                    GitHub
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/15 hover:shadow-indigo-500/30 hover:opacity-95 transition-all duration-200"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}