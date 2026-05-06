import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    // Wait for doors to close (0.8s), show text for a moment, then exit (2.5s total)
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    // The main container. Stays until everything finishes sliding, then vanishes quickly.
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.4, delay: 1.5 } }} 
    >
      {/* Left Door Panel */}
      <motion.div 
        className="absolute top-0 left-0 w-1/2 h-full bg-[#000000] border-r border-[#00FFFF]/20 z-0 pointer-events-auto shadow-[5px_0_30px_rgba(0,255,255,0.05)]"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1], 
          // Animate immediately on load, delay slightly on exit to let text fade
          exit: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 } 
        }} 
      />
      
      {/* Right Door Panel */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-[#000000] border-l border-[#00FFFF]/20 z-0 pointer-events-auto shadow-[-5px_0_30px_rgba(0,255,255,0.05)]"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1], 
          exit: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 } 
        }} 
      />

      {/* Center Top Content - The Name */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }} // Cleanly fades and shifts up before sliding
        transition={{ 
          duration: 0.6, 
          delay: 0.6, // Wait for doors to mostly close before fading in text
          ease: "easeOut",
          exit: { duration: 0.4, delay: 0 } 
        }}
      >
         <h1 className="text-4xl md:text-7xl font-sans font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 text-center mb-2 drop-shadow-sm">
            Anchal Kumari Malik
         </h1>
         <motion.p 
           className="mt-2 text-cyan-500/80 font-mono tracking-[0.3em] text-[10px] md:text-xs uppercase text-center"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.9 }}
         >
           Full Stack Developer
         </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
