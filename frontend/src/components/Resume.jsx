const Resume = () => {
  return (
    <section id="resume" className="py-32 bg-dark-900 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="fade-in-up">
          <span className="text-primary-400 font-semibold tracking-wider text-sm uppercase">Curriculum Vitae</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight mb-8">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Resume</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 mb-12 text-lg lg:text-xl font-light leading-relaxed">
            Dive deeper into my professional trajectory, project history, and educational background. Download my comprehensive resume to see the full picture.
          </p>
        </div>
        
        <div className="flex justify-center fade-in-up delay-200">
          <div className="relative group perspective-1000">
            {/* Glowing aura behind button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-lg opacity-30 group-hover:opacity-70 transition duration-500"></div>
            
            <a 
              href="/resume.pdf" 
              download="Anchal_Resume.pdf"
              className="relative flex items-center gap-4 px-10 py-5 bg-dark-900 border border-white/10 hover:border-primary-500/50 text-white rounded-full font-bold transition-all transform hover:scale-[1.02] shadow-2xl glass-card z-10 overflow-hidden"
            >
              {/* Shine effect across button */}
              <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-45 -translate-x-full group-hover:animate-[shine_1.5s_ease-out_infinite]"></div>
              
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </div>
              <span className="text-lg tracking-wide">Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
