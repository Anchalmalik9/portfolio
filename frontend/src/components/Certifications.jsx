import React from 'react';

const certifications = [
  { id: 1, title: 'Cloud Computing', issuer: 'NPTEL Swayam', date: 'November 2025', link: '/Cloud Computing (1).pdf', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Code Storm-36', issuer: 'Microsoft', date: 'June 2025', link: '/Microsoft.pdf', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'CTF by Thapar University', issuer: 'Thapar University', date: 'April 2024', link: '/Thapar.pdf', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-20 w-full mb-12">

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        <div className="text-center mb-16 fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mt-2 tracking-tight">
            My Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 fade-in-up delay-200">
          {certifications.map((cert) => (
            <div key={cert.id} className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl">
              
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-dark-900">
                 <img 
                   src={cert.image} 
                   alt={cert.title} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                 />
                 <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/10 transition-colors duration-500 z-10"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                 <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">{cert.issuer}</span>
                 <h3 className="text-xl font-bold font-sans text-white mb-6">{cert.title}</h3>
                 
                 <div className="mt-auto flex justify-between items-center">
                   <span className="text-slate-400 text-sm font-medium bg-dark-900 px-3 py-1 rounded-full">{cert.date}</span>
                   <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors group/link">
                     Verify
                     <svg className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </a>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
