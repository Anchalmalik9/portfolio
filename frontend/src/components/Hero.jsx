const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-12 relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 mt-8">
        
        {/* Left Content - Text Intro */}
        <div className="flex-1 text-center lg:text-left">
          
          <div className="inline-block px-4 py-2 glass-pill rounded-full mb-8 fade-in-up">
            <span className="text-slate-300 font-semibold tracking-wide text-xs sm:text-sm flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-500"></span>
              </span>
              AVAILABLE FOR HIRE
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 tracking-tight fade-in-up delay-100 drop-shadow-lg">
            Building <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 pb-2 inline-block">Digital</span> Realities.
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed fade-in-up delay-200">
            I'm <strong className="text-white font-bold text-2xl tracking-wide">Anchal Kumari Malik</strong>, a full-stack engineer who crafts fluid, high-performance web applications bridging elegant <span className="text-primary-400">front-end design</span> with robust <span className="text-accent-400">back-end architecture</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start fade-in-up delay-300">
            <a href="#projects" className="relative group px-8 py-4 bg-white text-dark-900 hover:text-white rounded-xl font-bold transition-all overflow-hidden text-center shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </a>
            <a href="#contact" className="px-8 py-4 glass-card rounded-xl font-semibold text-white hover:bg-white/10 transition-colors text-center border-white/20">
              Let's Connect
            </a>
          </div>
        </div>
        
        {/* Right Content - Single Profile Photo */}
        <div className="flex-1 w-full max-w-sm lg:max-w-md relative fade-in-up delay-200 flex items-center justify-center lg:justify-end lg:pr-12 mt-12 lg:mt-0">
          <div className="relative w-72 h-72 lg:w-[350px] lg:h-[350px] rounded-full p-2 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 shadow-[0_0_50px_rgba(249,115,22,0.3)] hover:scale-[1.02] transition-transform duration-500">
             <div className="w-full h-full rounded-full bg-dark-900 overflow-hidden border-4 border-dark-900 relative">
                {/* User Profile Image */}
                <img src="/my-image.jpeg" alt="Anchal Kumari Malik" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                
                {/* Inner overlay shadow for depth */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none"></div>
             </div>
             
             {/* Small floating tech badge */}
             <div className="absolute bottom-4 right-0 md:-right-4 bg-dark-800 p-4 rounded-2xl border border-white/10 shadow-xl glass-card flex items-center justify-center animate-bounce duration-1000">
                <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
             </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
