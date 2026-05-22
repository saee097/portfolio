'use client';

import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Supabase', 'REST APIs', 'Authentication'],
    },
    { 
      title: 'Tools & Platforms',
      skills: ['Git & GitHub', 'Postman', 'VS Code', 'Vercel', 'Docker', 'DevTools'],
    },
    {
      title: 'Concepts',
      skills: ['JWT Authentication', 'REST APIs', 'Redux', 'Context API', 'SEO', 'Performance'],
    },
  ]; 
    
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e293b]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-[#3b82f6]">Skills</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#0f172a] rounded-lg p-6 border border-[#3b82f6]/20 hover:border-[#3b82f6]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#3b82f6] mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#60a5fa] rounded-full text-sm font-medium hover:bg-[#3b82f6]/20 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
