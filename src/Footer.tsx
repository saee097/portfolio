'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactChannels, footerQuickLinks, siteConfig } from '@/data/portfolio';

const socialByLabel = {
  GitHub: contactChannels.find((c) => c.label === 'GitHub')!,
  LinkedIn: contactChannels.find((c) => c.label === 'LinkedIn')!,
  Email: contactChannels.find((c) => c.label === 'Email')!,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0f172a] border-t border-[#3b82f6]/20 py-12 px-4 sm:px-6 lg:px-8"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-[#3b82f6] mb-4">{siteConfig.name}</h3>
              <p className="text-[#cbd5e1]">
                Full-Stack Web Developer creating modern, scalable, and performant web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#cbd5e1]">
                {footerQuickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-[#3b82f6] transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href={socialByLabel.GitHub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-10 h-10 bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 border border-[#3b82f6]/30 rounded-full flex items-center justify-center text-[#3b82f6] hover:text-[#60a5fa] transition-all"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={socialByLabel.LinkedIn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-10 h-10 bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 border border-[#3b82f6]/30 rounded-full flex items-center justify-center text-[#3b82f6] hover:text-[#60a5fa] transition-all"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={socialByLabel.Email.link}
                  aria-label="Send email"
                  className="w-10 h-10 bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 border border-[#3b82f6]/30 rounded-full flex items-center justify-center text-[#3b82f6] hover:text-[#60a5fa] transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#3b82f6]/20" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-[#cbd5e1] text-sm">
            <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-[#3b82f6] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#3b82f6] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
