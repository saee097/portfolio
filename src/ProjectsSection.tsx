'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Full-Stack SaaS Dashboard',
      description:
        'A comprehensive SaaS dashboard with authentication, real-time analytics, and interactive charts. Built with Next.js and Supabase for seamless real-time updates.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
      features: ['User Authentication', 'Real-time Analytics', 'Charts & Data Visualization', 'Responsive Design'],
      image: 'saas-dashboard',
    },
    {   
      title: 'E-Commerce Store',
      description:
        'Full-featured e-commerce platform with product catalog, shopping cart, and integrated payment processing. Built with React and Node.js backend.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      features: ['Product Catalog', 'Shopping Cart', 'Payment Integration', 'Admin Panel'],
      image: 'ecommerce-store',
    },
    {
       title: 'AI Web Application',
      description:
        'An intelligent web application leveraging OpenAI API for generating content, answering queries, and creative tasks. User-friendly interface with authentication.',
      tech: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS', 'Authentication'],
      features: ['AI Chat', 'Prompt System', 'User Accounts', 'Usage Analytics'],
      image: 'ai-webapp',
    },     
    {
      title: 'Portfolio CMS',
      description:
        'Dynamic portfolio management system with a powerful CMS backend. Enables portfolio owners to create, edit, and manage their showcase content effortlessly.',
      tech: ['Next.js', 'Supabase', 'Sanity CMS', 'TypeScript', 'SEO Optimization'],
      features: ['Dynamic Blog', 'SEO-Ready', 'CMS Dashboard', 'Image Optimization'],
      image: 'portfolio-cms',
    },
    {
      title: 'Real-Time Collaboration Tool',
      description:
        'A real-time collaboration platform for teams to work together on projects with live updates, comments, and version control.',
      tech: ['React', 'Node.js', 'WebSockets', 'MongoDB', 'Redis'],
      features: ['Real-time Sync', 'User Collaboration', 'Version History', 'Comments System'],
      image: 'collab-tool',
    },
    {
      title: 'Performance Monitoring Dashboard',
      description:
        'Advanced monitoring dashboard for tracking application performance metrics, errors, and user behavior with detailed analytics and reporting.',
      tech: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL', 'Express'],
      features: ['Performance Metrics', 'Error Tracking', 'User Analytics', 'Real-time Alerts'],
      image: 'monitoring-dashboard',
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e293b]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-[#3b82f6]">Projects</span>
          </h2>
          <p className="text-center text-[#cbd5e1] mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#0f172a] rounded-lg overflow-hidden border border-[#3b82f6]/20 hover:border-[#3b82f6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/10 group"
              >
                {/* Project Header */}
                <div className="h-40 bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center border-b border-[#3b82f6]/20 group-hover:from-[#3b82f6]/30 group-hover:to-[#60a5fa]/30 transition-all duration-300">
                  <div className="text-[#3b82f6] text-4xl font-bold opacity-20 group-hover:opacity-40 transition-all duration-300">
                    {project.image.substring(0, 2).toUpperCase()}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#60a5fa] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#cbd5e1] text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#60a5fa] mb-2">Features:</h4>
                    <ul className="text-xs text-[#cbd5e1] space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#3b82f6] mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#3b82f6]/10 text-[#60a5fa] text-xs rounded border border-[#3b82f6]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 py-4 bg-[#1e293b]/50 border-t border-[#3b82f6]/20">
                  <button className="w-full py-2 text-[#60a5fa] hover:text-[#3b82f6] font-semibold transition-colors text-sm">
                    View Project →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
