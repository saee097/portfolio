'use client';

import { motion } from 'framer-motion';
import { Palette, Settings, Rocket, Link as LinkIcon, Zap, Database } from 'lucide-react';
import { ReactNode } from 'react';

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
}
export default function ServicesSection() {
  const services: Service[] = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, modern, and accessible user interfaces with React and Next.js.',
      icon: <Palette className="w-10 h-10" />,
      features: ['Responsive Design', 'Component Architecture', 'Performance Optimization', 'Accessibility'],
    },
    {
      title: 'Backend Development',
      description: 'Creating robust, scalable APIs and server-side applications with Node.js and Express.',
      icon: <Settings className="w-10 h-10" />,
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'API Security'],
    },
    {
      title: 'Full-Stack Applications',
      description: 'End-to-end development of complete web applications from frontend to backend.',
      icon: <Rocket className="w-10 h-10" />,
      features: ['Full Architecture', 'Deployment', 'DevOps', 'Maintenance'],
    },
    {
      title: 'API Integration',
      description: 'Seamless integration of third-party APIs and services into your applications.',
      icon: <LinkIcon className="w-10 h-10" />,
      features: ['API Integration', 'Data Mapping', 'Error Handling', 'Testing'],
    },
    {
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, SEO, and overall user experience.',
      icon: <Zap className="w-10 h-10" />,
      features: ['Code Splitting', 'Image Optimization', 'SEO Optimization', 'Load Time Reduction'],
    },
    {
      title: 'Database Solutions',
      description: 'Design and implementation of efficient database schemas and data management.',
      icon: <Database className="w-10 h-10" />,
      features: ['Schema Design', 'Query Optimization', 'Data Modeling', 'Backup & Recovery'],
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
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Services I <span className="text-[#3b82f6]">Offer</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#1e293b] rounded-lg p-6 border border-[#3b82f6]/20 hover:border-[#3b82f6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/10"
              >
                <div className="text-4xl mb-4 text-[#3b82f6]">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-[#cbd5e1] mb-4">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <span className="text-[#3b82f6] mr-2 text-sm">✓</span>
                      <span className="text-[#cbd5e1] text-sm">{feature}</span>
                    </div>
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
