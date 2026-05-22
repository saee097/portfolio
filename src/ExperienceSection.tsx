'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-[#3b82f6]">Experience</span>
          </h2>

          <div className="space-y-8">
            {/* EYRATECH Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-[#3b82f6]"
            >
              <div className="absolute -left-3.5 top-0 w-6 h-6 bg-[#3b82f6] rounded-full border-4 border-[#0f172a]" />

              <div className="bg-[#1e293b] rounded-lg p-6 hover:shadow-lg hover:shadow-[#3b82f6]/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Full-Stack Developer</h3>
                    <p className="text-[#60a5fa] font-semibold">EYRATECH</p>
                  </div>
                  <span className="text-[#cbd5e1] text-sm">Present</span>
                </div>

                <p className="text-[#cbd5e1] mb-4">
                  Contributing to building scalable and modern web applications for various clients.
                  Responsible for both frontend and backend development with a focus on performance
                  and user experience.
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-white mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-[#cbd5e1]">
                    <li className="flex items-start">
                      <span className="text-[#3b82f6] mr-3">→</span>
                      <span>Frontend architecture and responsive UI development with React & Next.js</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3b82f6] mr-3">→</span>
                      <span>Backend API development and database integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3b82f6] mr-3">→</span>
                      <span>Application performance optimization and SEO</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3b82f6] mr-3">→</span>
                      <span>Code review and best practices implementation</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-[#0f172a]">
                  <h4 className="font-semibold text-white mb-3">Tech Stack Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#3b82f6]/10 text-[#60a5fa] text-xs rounded-full border border-[#3b82f6]/30"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
