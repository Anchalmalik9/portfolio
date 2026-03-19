import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Meteors from './components/Meteors';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen text-slate-200 relative selection:bg-primary-500/30 selection:text-white bg-dark-900 overflow-hidden">
      
      {/* Base Dark Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pointer-events-none"></div>

      {/* Meteor Shower Effect */}
      <Meteors number={35} />

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Certifications />
          <Achievements />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
