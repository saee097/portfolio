'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroContainer, heroItem } from '@/lib/motion';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#1e293b]"
      aria-label="Introduction"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 variants={heroItem} className="text-5xl sm:text-6xl md:text-7xl font-bold">
            Hi, I&apos;m <span className="text-[#3b82f6]">Saeed Ur Rahman</span>
          </motion.h1>

          <motion.h2 variants={heroItem} className="text-2xl sm:text-3xl md:text-4xl text-[#60a5fa]">
            Full-Stack Web Developer
          </motion.h2>

          <motion.p
            variants={heroItem}
            className="text-lg sm:text-xl text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed"
          >
            I build scalable, modern, and high-performance web applications using React, Next.js,
            TypeScript, and Node.js. Currently building amazing products at EYRATECH.
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-[#0f172a] font-semibold rounded-lg transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
          aria-hidden="true"
        >
          <ChevronDown className="w-6 h-6 mx-auto text-[#3b82f6]" />
        </motion.div>
      </div>
    </section>
  );
}