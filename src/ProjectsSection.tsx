'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e293b]"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-[#3b82f6]">Projects</span>
          </h2>
          <p className="text-center text-[#cbd5e1] mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={staggerItem}
                className="bg-[#0f172a] rounded-lg overflow-hidden border border-[#3b82f6]/20 hover:border-[#3b82f6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/10 group"
              >
                {/* Project Header */}
                <div
                  className="h-40 bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center border-b border-[#3b82f6]/20 group-hover:from-[#3b82f6]/30 group-hover:to-[#60a5fa]/30 transition-all duration-300"
                  aria-hidden="true"
                >
                  <div className="text-[#3b82f6] text-4xl font-bold opacity-20 group-hover:opacity-40 transition-all duration-300">
                    {project.image.substring(0, 2).toUpperCase()}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#60a5fa] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#cbd5e1] text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#60a5fa] mb-2">Features:</h4>
                    <ul className="text-xs text-[#cbd5e1] space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-[#3b82f6] mr-2" aria-hidden="true">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="px-2 py-1 bg-[#3b82f6]/10 text-[#60a5fa] text-xs rounded border border-[#3b82f6]/30 list-none"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-6 py-4 bg-[#1e293b]/50 border-t border-[#3b82f6]/20">
                  <button
                    type="button"
                    className="w-full py-2 text-[#60a5fa] hover:text-[#3b82f6] font-semibold transition-colors text-sm"
                    aria-label={`View project: ${project.title}`}
                  >
                    View Project →
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
