const Resume = () => {
  return (
    <section id="resume" className="py-24 relative z-20 w-full mb-12">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl text-center">
        
        {/* Standard Elegant Header */}
        <div className="mb-16 fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Curriculum Vitae</span>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mt-2 tracking-tight">
            My Resume
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 mt-6 text-lg font-light leading-relaxed">
            Dive deeper into my professional trajectory, project history, and educational background. Download my comprehensive resume to see the full picture.
          </p>
        </div>
        
        <div className="flex justify-center fade-in-up delay-200">
           <a 
              href="/resume.pdf" 
              download="Anchal_Resume.pdf"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg py-5 px-10 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-[1.02]"
            >
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              <span>Download PDF</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
