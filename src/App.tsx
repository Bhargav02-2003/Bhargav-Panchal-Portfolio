import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 selection:bg-purple-600/30 selection:text-purple-200">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <Hero
          onViewWorkClick={() => scrollToSection('projects')}
          onDownloadCvClick={() => setIsCvModalOpen(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume / CV Modal */}
      <ResumeModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
