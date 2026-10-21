import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EngineeringHighlights } from './components/EngineeringHighlights';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-200">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Technical Skills */}
        <Skills />

        {/* 4. Professional Experience */}
        <Experience />

        {/* 5. Featured Engineering Case Studies */}
        <Projects />

        {/* 6. Engineering Approach */}
        <EngineeringHighlights />

        {/* 7. Resume */}
        <Resume />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
