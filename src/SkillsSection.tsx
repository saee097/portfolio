'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e293b]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-[#3b82f6]">Skills</span>
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={staggerItem}
                className="bg-[#0f172a] rounded-lg p-6 border border-[#3b82f6]/20 hover:border-[#3b82f6]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#3b82f6] mb-6">{category.title}</h3>
                <ul className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="list-none">
                      <motion.span
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="inline-block px-4 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#60a5fa] rounded-full text-sm font-medium hover:bg-[#3b82f6]/20 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
