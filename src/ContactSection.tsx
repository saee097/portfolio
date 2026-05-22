'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { ChangeEvent, FormEvent, ReactNode } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface ContactInfo {
  icon: ReactNode;
  label: string;
  value: string;
  link: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Simulate form submission
      // Replace with your backend/API integration

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error(error);

      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail size={30} />,
      label: 'Email',
      value: 'saeed@example.com',
      link: 'mailto:saeed@example.com',
    },
    {
      icon: <FaLinkedin size={30} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/saeed',
      link: 'https://linkedin.com/in/saeed',
    },
    {
      icon: <FaGithub size={30} />,
      label: 'GitHub',
      value: 'github.com/saeed',
      link: 'https://github.com/saeed',
    },
    {
      icon: <MessageCircle size={30} />,
      label: 'WhatsApp',
      value: '+92 3XX XXXXXXX',
      link: 'https://wa.me/923001234567',
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#1e293b] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-[#3b82f6]">Touch</span>
            </h2>

            <p className="text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let&apos;s connect and discuss how I can
              help bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Contact Information
                </h3>

                <p className="text-[#94a3b8] leading-relaxed">
                  Feel free to reach out through any platform below. I&apos;m
                  always open to discussing new opportunities, creative ideas,
                  or collaborations.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="group flex items-start gap-4 rounded-xl border border-[#3b82f6]/10 bg-[#0f172a] p-5 hover:border-[#3b82f6]/30 hover:bg-[#111c31] transition-all duration-300"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors">
                      {info.icon}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-[#60a5fa] transition-colors">
                        {info.label}
                      </h4>

                      <p className="text-[#cbd5e1] break-all">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-[#3b82f6]/20 bg-[#0f172a] p-8 shadow-2xl"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-[#3b82f6]/30 bg-[#1e293b] px-4 py-3 text-white placeholder-[#64748b] outline-none transition-all duration-300 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-[#3b82f6]/30 bg-[#1e293b] px-4 py-3 text-white placeholder-[#64748b] outline-none transition-all duration-300 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project discussion"
                  className="w-full rounded-lg border border-[#3b82f6]/30 bg-[#1e293b] px-4 py-3 text-white placeholder-[#64748b] outline-none transition-all duration-300 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-[#3b82f6]/30 bg-[#1e293b] px-4 py-3 text-white placeholder-[#64748b] outline-none transition-all duration-300 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
                />
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-400">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                  ✗ Failed to send message. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-[#3b82f6] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}