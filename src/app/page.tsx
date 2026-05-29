import Navigation from '@/Navigation';
import HeroSection from '@/HeroSection';
import AboutSection from '@/AboutSection';
import SkillsSection from '@/SkillsSection';
import ExperienceSection from '@/ExperienceSection';
import ProjectsSection from '@/ProjectsSection';
import ServicesSection from '@/ServicesSection';
import ContactSection from '@/ContactSection';
import Footer from '@/Footer';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <main
        id="main-content"
        className="min-h-screen bg-[#0f172a] text-[#f8fafc]"
        tabIndex={-1}
      >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
    </>
  );
}
