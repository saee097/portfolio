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
    <main className="min-h-screen bg-[#0f172a] text-[#f8fafc]">
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
  );
}
