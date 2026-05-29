'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/portfolio';
import { fadeInUp } from '@/lib/motion';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-[#3b82f6]">Experience</span>
          </h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-[#3b82f6]"
            >
              <div
                className="absolute -left-3.5 top-0 w-6 h-6 bg-[#3b82f6] rounded-full border-4 border-[#0f172a]"
                aria-hidden="true"
              />

              <article className="bg-[#1e293b] rounded-lg p-6 hover:shadow-lg hover:shadow-[#3b82f6]/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
                    <p className="text-[#60a5fa] font-semibold">{experience.company}</p>
                  </div>
                  <time className="text-[#cbd5e1] text-sm">{experience.period}</time>
                </div>

                <p className="text-[#cbd5e1] mb-4">{experience.summary}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-white mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-[#cbd5e1]">
                    {experience.responsibilities.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-[#3b82f6] mr-3" aria-hidden="true">
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-[#0f172a]">
                  <h4 className="font-semibold text-white mb-3">Tech Stack Used:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 bg-[#3b82f6]/10 text-[#60a5fa] text-xs rounded-full border border-[#3b82f6]/30 list-none"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
