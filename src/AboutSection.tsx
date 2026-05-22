'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-[#3b82f6]">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-[#cbd5e1]">
              <p className="text-lg leading-relaxed">
                I&apos;m a passionate Full-Stack Web Developer with experience in building scalable and
                performant web applications. My journey in web development started with a curiosity to
                understand how things work on the internet.
              </p>

              <p className="text-lg leading-relaxed">
                Currently, I&apos;m working as a Full-Stack Developer at EYRATECH, where I contribute to
                building innovative solutions for various clients. I love tackling complex problems and
                turning them into elegant, user-friendly applications.
              </p>

              <p className="text-lg leading-relaxed">
                My expertise spans across frontend architecture, backend API development, database
                integration, and performance optimization. I&apos;m always eager to learn new technologies
                and best practices to stay ahead in this rapidly evolving field.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-white mb-4">What I Enjoy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#3b82f6] mr-3">✓</span>
                    <span>Building responsive, accessible user interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3b82f6] mr-3">✓</span>
                    <span>Designing robust APIs and backend systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3b82f6] mr-3">✓</span>
                    <span>Optimizing application performance and SEO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3b82f6] mr-3">✓</span>
                    <span>Collaborating with teams and sharing knowledge</span>
                  </li>
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#3b82f6]/10 to-[#60a5fa]/10 rounded-lg p-8 border border-[#3b82f6]/20"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Years of Experience</h3>
                  <p className="text-[#60a5fa]">Building web applications with modern tech stack</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Current Role</h3>
                  <p className="text-[#60a5fa]">Full-Stack Developer at EYRATECH</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Focus Area</h3>
                  <p className="text-[#60a5fa]">Full-Stack Development & Performance Optimization</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
