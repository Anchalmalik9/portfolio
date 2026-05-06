import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-20 w-full mb-12">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white tracking-tight text-center">
            About Me
          </h2>
          <div className="w-16 h-1 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>

        {/* Grid Layout matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 fade-in-up delay-200">
          
          {/* Left Column (Quick Facts & Hobbies) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Quick Facts Card */}
            <div className="bg-dark-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Quick Facts</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <div>
                    <strong className="text-white block text-sm">Location</strong>
                    <span className="text-slate-400 text-sm">Meerut Cantt., Uttar Pradesh</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6"></path></svg>
                  <div>
                    <strong className="text-white block text-sm">Education</strong>
                    <span className="text-slate-400 text-sm">B.Tech in Computer Science</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  <div>
                    <strong className="text-white block text-sm">Focus</strong>
                    <span className="text-slate-400 text-sm">Full Stack Development</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* When I'm Not Coding Card */}
            <div className="bg-dark-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">When I'm Not Coding</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-slate-300 text-sm">
                  <svg className="w-5 h-5 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                  Watching Movies
                </li>
                <li className="flex items-center gap-4 text-slate-300 text-sm">
                  <svg className="w-5 h-5 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  Music
                </li>
                <li className="flex items-center gap-4 text-slate-300 text-sm">
                  <svg className="w-5 h-5 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  Exploring Open Source
                </li>
              </ul>
            </div>
            
          </div>

          {/* Right Column (My Journey & My Approach) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* My Journey Card */}
            <div className="bg-dark-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-xl h-full">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">My Journey</h3>
              <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                Hello! I'm Anchal Kumari Malik, a Computer Science Engineering student passionate about turning complex concepts into practical, robust web solutions. My technical foundation began with core data structures and Java, before naturally evolving into a specialized focus on modern Full-Stack Development using the MERN stack. 
                <br /><br />
                I enjoy building well-structured projects that blend logical backend systems with fluid, elegantly designed user interfaces. My short-term goal is to launch my career in a Software Engineering role where I can drive immediate impact, contribute to vast systems, and continuously expand my architectural knowledge.
              </p>
            </div>

            {/* My Approach Card */}
            <div className="bg-dark-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-xl h-full">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">My Approach</h3>
              <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                I believe in building meaningful technology that solves real-world problems cleanly and efficiently. Whether structuring relational databases, optimizing API routes, or designing responsive front-end components, I prioritize strong fundamentals, high-quality code structure, and continuous learning.
                <br /><br />
                I am deeply dedicated to maintaining consistency and refining my logical thinking with every project I undertake. Ultimately, my long-term vision is to become a leading tech architect who builds impactful, data-driven, and highly scalable solutions for the modern web.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
