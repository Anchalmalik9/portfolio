import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-12 relative overflow-visible z-10 w-full">

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-6xl">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">

          {/* Left Side: Typography and Bio */}
          <div className="lg:col-span-7 flex flex-col">

            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 fade-in-up w-max">
              <span className="text-cyan-400 font-medium text-sm tracking-wide">
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-sans text-white leading-[1.1] mb-6 tracking-tight fade-in-up delay-100">
              Anchal Kumari Malik <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pb-2 inline-block">Full Stack Developer.</span>
            </h1>

            <div className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed fade-in-up delay-200 font-light">
              <p>
                I am <strong className="text-white font-medium">Anchal Kumari Malik</strong>, a passionate software engineer crafting fluid, high-performance web applications that merge intuitive front-end design with robust back-end architecture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 fade-in-up delay-300">
              <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] rounded-2xl text-center transition-all duration-300 font-semibold shadow-lg">
                Explore My Work
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl transition-all text-center font-semibold">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image Box */}
          <div className="lg:col-span-5 relative fade-in-up delay-200 flex justify-center lg:justify-end mt-12 lg:mt-0 lg:pl-10">

            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-2 shadow-2xl group overflow-hidden">

              <div className="w-full h-full bg-dark-900 overflow-hidden relative rounded-[1.5rem]">
                <img
                  src="/my-image.jpeg"
                  alt="Anchal Kumari Malik"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none rounded-[1.5rem]"></div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
