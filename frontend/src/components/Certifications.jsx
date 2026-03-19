import React from 'react';

// Using beautiful high-end tech/abstract placeholders until the user provides their real certificate image files.
const certifications = [
  {
    id: 1,
    title: 'Cloud Computing',
    issuer: 'NPTEL Swayam',
    date: 'November 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop', // Server/Tech 
  },
  {
    id: 2,
    title: 'Code Storm-36',
    issuer: 'Microsoft',
    date: 'June 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', // Code Screen
  },
  {
    id: 3,
    title: 'Node.js Application Development',
    issuer: 'Linux Foundation',
    date: 'January 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', // Circuit/Abstract
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-dark-900 border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-primary-400 font-semibold tracking-wider text-sm uppercase">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 fade-in-up delay-200">
          {certifications.map((cert) => (
            <div key={cert.id} className="group relative rounded-3xl overflow-hidden glass-card hover:-translate-y-2 transition-all duration-500 border border-white/10 hover:border-primary-500/40 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.4)] flex flex-col h-full">
              
              {/* Massive Certification Image Area */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-dark-800">
                 {/* Dark overlay so text always pops no matter the image brightness */}
                 <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/10 transition-colors duration-500 z-10"></div>
                 
                 <img 
                   src={cert.image} 
                   alt={cert.title} 
                   className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
                 />

                 {/* Text overlaid directly on the bottom part of the image with a heavy dark gradient */}
                 <div className="absolute bottom-0 left-0 w-full p-6 pt-16 bg-gradient-to-t from-dark-900 via-dark-900/90 to-transparent z-20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors drop-shadow-md">{cert.title}</h3>
                    <p className="text-accent-400 text-sm font-semibold tracking-wide drop-shadow-sm">{cert.issuer}</p>
                 </div>
                 
                 {/* Decorative Top Badge */}
                 <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-pill bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-primary-500/80 transition-colors">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                 </div>
              </div>

              {/* Bottom detail action area */}
              <div className="p-6 bg-dark-900 flex justify-between items-center border-t border-white/5">
                 <span className="text-slate-400 text-xs font-medium tracking-wide bg-dark-800 px-3 py-1.5 rounded-lg border border-white/5">{cert.date}</span>
                 
                 <a href={cert.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary-400 transition-colors group/link">
                   View Credential
                   <svg className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
