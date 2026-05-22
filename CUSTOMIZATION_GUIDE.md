# Portfolio Customization Guide

This guide will help you customize your portfolio with your own content, projects, and styling.

## Quick Start

1. **Install Dependencies**
```bash
cd portfolio
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📝 Customizing Content

### 1. Update Hero Section
File: `src/HeroSection.tsx`

Replace the placeholder text with your information:
```typescript
<motion.h1>Hi, I'm <span>Your Name</span></motion.h1>
<motion.h2>Your Job Title</motion.h2>
<motion.p>Your professional introduction...</motion.p>
```

### 2. Update About Section
File: `src/AboutSection.tsx`

- Replace the "About Me" text with your story
- Update your current role and company
- Modify the interests list

### 3. Update Skills
File: `src/SkillsSection.tsx`

Modify the `skillCategories` array:
```typescript
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  // Add more categories...
];
```

### 4. Update Experience
File: `src/ExperienceSection.tsx`

Update your work experience:
- Company name
- Job title
- Timeline
- Key responsibilities
- Technologies used

### 5. Add Your Projects
File: `src/ProjectsSection.tsx`

Edit the `projects` array:
```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description...',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['Feature 1', 'Feature 2'],
    image: 'project-id',
  },
  // Add more projects...
];
```

### 6. Update Services
File: `src/ServicesSection.tsx`

Modify the `services` array to match your offerings:
```typescript
const services = [
  {
    title: 'Your Service',
    description: 'What you offer...',
    icon: '🎨',
    features: ['Feature 1', 'Feature 2'],
  },
  // Add more services...
];
```

### 7. Update Contact Information
File: `src/ContactSection.tsx`

Update the `contactInfo` array:
```typescript
const contactInfo = [
  { 
    icon: '📧', 
    label: 'Email', 
    value: 'your@email.com', 
    link: 'mailto:your@email.com' 
  },
  // Add more contact methods...
];
```

## 🎨 Customizing Colors

### Update Global Colors
File: `src/app/globals.css`

Change the CSS variables:
```css
:root {
  --background: #0f172a;      /* Main background */
  --foreground: #f8fafc;      /* Text color */
  --primary: #3b82f6;         /* Primary blue */
  --accent: #60a5fa;          /* Accent blue */
  --card: #1e293b;            /* Card background */
}
```

### Update Tailwind Config
File: `tailwind.config.ts`

Extend theme colors:
```typescript
theme: {
  extend: {
    colors: {
      background: '#0f172a',
      primary: '#3b82f6',
      // Add your colors...
    },
  },
},
```

## 🖼️ Adding Project Images/Icons

For the projects section, you can add real images:

1. Place images in `public/` directory
2. Update `ProjectsSection.tsx` to include image paths
3. Add actual image display in the project cards

## 📱 Testing Responsive Design

Test on different screen sizes:
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px and up

Use browser DevTools (F12) to test responsive design.

## 🔗 Adding Links

### Update Navigation Links
File: `src/Navigation.tsx`

Navigation uses smooth scroll to section IDs:
```typescript
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // Links match section IDs
];
```

### Update Social Links
File: `src/Footer.tsx`

Replace social media links:
```typescript
<a href="https://github.com/yourname" target="_blank">
  GitHub
</a>
```

## 📧 Contact Form Setup

The contact form is currently a UI template. To make it functional:

1. **Option 1**: Use FormSubmit.co (Free)
   - Update form `action` attribute to FormSubmit endpoint

2. **Option 2**: Use Formspree
   - Get API key from formspree.io
   - Update form submission handler

3. **Option 3**: Use your backend API
   - Create API endpoint
   - Update form submission in `src/ContactSection.tsx`

Example with FormSubmit:
```typescript
const response = await fetch('https://formsubmit.co/your@email.com', {
  method: 'POST',
  body: new FormData(form),
});
```

## 🚀 Performance Tips

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images before uploading

2. **Lazy Loading**
   - Components already use `whileInView` for animations
   - Reduces initial load time

3. **Code Splitting**
   - Next.js handles this automatically
   - Keep components modular

4. **SEO**
   - Update metadata in `src/app/layout.tsx`
   - Add og tags for social sharing

## 🌐 Deployment to Vercel

1. Push code to GitHub
2. Connect to Vercel dashboard
3. Configure environment variables (if needed)
4. Deploy

```bash
npm run build
```

## 📚 File Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ServicesSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## ✅ Customization Checklist

- [ ] Update hero section with your name and title
- [ ] Update about section with your story
- [ ] Add your skills
- [ ] Update work experience
- [ ] Add your 4-6 projects
- [ ] Update services offered
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Test form submission
- [ ] Deploy to Vercel
- [ ] Test on production URL
- [ ] Share portfolio with others!

## 🆘 Troubleshooting

**Issue**: Component not importing correctly
- Solution: Check file names and paths in src/ directory
- Ensure files end with `.tsx`

**Issue**: Styles not applying
- Solution: Check if class names are spelled correctly
- Verify Tailwind CSS is building properly

**Issue**: Form not submitting
- Solution: Implement form service (FormSubmit, Formspree, etc.)
- Check console for errors

**Issue**: Animations not working
- Solution: Ensure Framer Motion is installed (`npm install framer-motion`)

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Support

If you need help, refer to:
1. This guide
2. PORTFOLIO_SETUP.md
3. Official documentation links above

---

**Happy customizing! 🚀**
