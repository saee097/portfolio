'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navItems } from '@/data/portfolio';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-[#0f172a]/90 backdrop-blur-md z-50 border-b border-[#1e293b]"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="text-xl font-bold text-[#3b82f6]" aria-label="Saeed Ur Rahman — Home">
            SR
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8" role="menubar" aria-label="Section links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                role="menuitem"
                className="text-sm hover:text-[#3b82f6] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[#3b82f6] block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-[#3b82f6] block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[#3b82f6] block"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="mobile-nav-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
          hidden={!isOpen}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-[#1e293b]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm hover:text-[#3b82f6] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
