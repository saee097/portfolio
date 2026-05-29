export const siteConfig = {
  name: 'Saeed Ur Rahman',
  role: 'Full-Stack Web Developer',
  company: 'EYRATECH',
  email: 'saeedsaeed7745@gmail.com',
} as const;

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
] as const;

export const contactChannels = [
  {
    label: 'Email',
    value: 'saeedsaeed7745@gmail.com',
    link: 'mailto:saeedsaeed7745@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/saeed-ur-rahman-a3a13a37b',
    link: 'linkedin.com/in/saeed-ur-rahman-a3a13a37b',
  },
  {
    label: 'GitHub',
    value: 'https://github.com/saee097',
    link: 'https://github.com/saee097',
  },
  {
    label: 'WhatsApp',
    value: '+92 317 8964091',
    link: '+92 317 8964091',
  },
] as const;

export const footerQuickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
] as const;

export const skillCategories = [
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
] as const;

export const experience = {
  role: 'Full-Stack Developer',
  company: 'EYRATECH',
  period: 'Present',
  summary:
    'Contributing to building scalable and modern web applications for various clients. Responsible for both frontend and backend development with a focus on performance and user experience.',
  responsibilities: [
    'Frontend architecture and responsive UI development with React & Next.js',
    'Backend API development and database integration',
    'Application performance optimization and SEO',
    'Code review and best practices implementation',
  ],
  techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
} as const;

export const projects = [
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
] as const;
