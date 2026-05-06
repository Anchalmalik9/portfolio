import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import StarNodeBackground from './components/StarNodeBackground';
import FadeSection from './components/FadeSection';
import EducationTimeline from './components/EducationTimeline';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  // Lock scrolling while the preloader is active, and reset to top
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className="min-h-screen text-slate-200 relative selection:bg-cyan-500/30 selection:text-white bg-dark-900 overflow-hidden">
      
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* 3D Scrolling Star Node Background */}
      <StarNodeBackground />

      <div className={`relative z-10 flex flex-col transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main className="flex flex-col gap-12 sm:gap-20 pb-20">
          <FadeSection delay={0}>
            <Hero />
          </FadeSection>

          <FadeSection delay={0.1}>
            <About />
          </FadeSection>
          
          <FadeSection delay={0.1}>
            <Projects />
          </FadeSection>
          
          <FadeSection delay={0.1}>
            <Skills />
          </FadeSection>
          
          <FadeSection delay={0.1}>
            <EducationTimeline />
          </FadeSection>
          
          <FadeSection delay={0.1}>
            <Certifications />
          </FadeSection>
          
          <FadeSection delay={0.1}>
            <Achievements />
          </FadeSection>
          
          <FadeSection delay={0.1}>
            <Resume />
          </FadeSection>
          
          <FadeSection delay={0.1}>
            <Contact />
          </FadeSection>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
