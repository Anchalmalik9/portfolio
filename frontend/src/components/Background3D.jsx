import React from 'react';

const Keycap = ({ label, className, animationClass, delay, color }) => (
  <div className={`absolute ${className} ${animationClass} group cursor-pointer`} style={{ transformStyle: 'preserve-3d', animationDelay: delay }}>
    {/* Keycap Body with 3D Depth */}
    <div className="relative w-16 h-16 md:w-24 md:h-24 bg-dark-800 rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.6),-5px_-5px_15px_rgba(255,255,255,0.05)] border-b-4 border-r-4 border-dark-900/80 border-t border-l border-white/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
      
      {/* Keycap Top Surface */}
      <div className="absolute top-1 left-1 w-14 h-12 md:w-20 md:h-16 bg-gradient-to-br from-dark-700 to-dark-900 rounded-lg shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] flex items-center justify-center ml-[2px] mt-[2px]">
        <span className={`font-mono font-extrabold text-lg md:text-2xl drop-shadow-[0_0_8px_currentColor] ${color}`}>
          {label}
        </span>
      </div>
      
    </div>
  </div>
);

const Background3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Minimal grid pattern to ground the keyboard vibe */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 mix-blend-screen"></div>
      
      {/* 3D Container with perspective */}
      <div className="w-full h-full relative" style={{ perspective: '1200px' }}>
        
        {/* Playful Floating Keycaps */}
        
        <Keycap 
          label="Ctrl" 
          className="top-[15%] left-[8%] md:left-[15%] opacity-70" 
          animationClass="animate-float-3d-slow" 
          delay="0s" 
          color="text-primary-400" 
        />

        <Keycap 
          label="/>" 
          className="top-[65%] right-[10%] opacity-80" 
          animationClass="animate-float-3d-fast" 
          delay="-2s" 
          color="text-accent-400" 
        />

        <Keycap 
          label="{" 
          className="bottom-[15%] left-[12%] md:left-[22%] opacity-60" 
          animationClass="animate-float-3d-medium" 
          delay="-5s" 
          color="text-green-400" 
        />

        <Keycap 
          label="}" 
          className="top-[25%] right-[20%] opacity-50 z-20" 
          animationClass="animate-float-3d-slow" 
          delay="-7s" 
          color="text-purple-400" 
        />

        <Keycap 
          label="VITE" 
          className="top-[45%] left-[5%] opacity-40" 
          animationClass="animate-float-3d-medium" 
          delay="-3s" 
          color="text-yellow-400" 
        />

        <Keycap 
          label="Alt" 
          className="bottom-[25%] right-[25%] opacity-40 z-0" 
          animationClass="animate-float-3d-slow" 
          delay="-1s" 
          color="text-pink-400" 
        />

        {/* Center Glow behind hero content to pop the text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-primary-600/10 via-accent-600/10 to-primary-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      </div>
    </div>
  );
};

export default Background3D;
