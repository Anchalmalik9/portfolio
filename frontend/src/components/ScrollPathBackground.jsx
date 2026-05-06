import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollPathBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  // Create deep parallax movements for background stars and abstract shapes
  const yParallaxFar = useTransform(smoothProgress, [0, 1], ['0%', '-30%']);
  const yParallaxMid = useTransform(smoothProgress, [0, 1], ['0%', '-60%']);
  const yParallaxClose = useTransform(smoothProgress, [0, 1], ['0%', '-120%']);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dark-900">
      
      {/* Parallax Layer 1: Distant glowing fog / nebula */}
      <motion.div 
        className="absolute inset-0 w-full h-[150%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent opacity-60" 
        style={{ y: yParallaxFar }}
      />

      {/* Parallax Layer 2: Geometric wireframes acting as "waypoints" */}
      <motion.div 
        className="absolute inset-0 w-full h-[200%] flex flex-col justify-between items-center opacity-30"
        style={{ y: yParallaxMid }}
      >
        <div className="mt-[20vh] w-64 h-64 border border-primary-500/20 rounded-full blur-sm" />
        <div className="mt-[40vh] w-96 h-96 border border-secondary-500/20 rotate-45 blur-sm" />
        <div className="mt-[50vh] w-48 h-48 border border-accent-500/20 rounded-full blur-md" />
        <div className="mt-[40vh] w-80 h-80 border border-primary-400/20 rotate-12 blur-sm" />
      </motion.div>

      {/* Main Storytelling Path Container */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl mx-auto flex justify-center opacity-80">
        <svg
          viewBox="0 0 400 2000"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />     {/* primary */}
              <stop offset="50%" stopColor="#d946ef" />    {/* secondary */}
              <stop offset="100%" stopColor="#0ea5e9" />   {/* accent */}
            </linearGradient>
            
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Faint faint guide path */}
          <path
            d="M 200 0 C 200 300, 350 400, 350 750 C 350 1100, 50 1200, 50 1550 C 50 1900, 200 1950, 200 2100"
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="3"
            strokeDasharray="15 15"
          />

          {/* The glowing active path that draws as user scrolls */}
          <motion.path
            d="M 200 0 C 200 300, 350 400, 350 750 C 350 1100, 50 1200, 50 1550 C 50 1900, 200 1950, 200 2100"
            fill="transparent"
            stroke="url(#pathGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#glow)"
            style={{
              pathLength: smoothProgress,
              opacity: useTransform(smoothProgress, [0, 0.02], [0, 1]) // Fade in initially
            }}
          />

          {/* The travelling object (A super bright comet/beam) moving along the path */}
          <motion.path
            d="M 200 0 C 200 300, 350 400, 350 750 C 350 1100, 50 1200, 50 1550 C 50 1900, 200 1950, 200 2100"
            fill="transparent"
            stroke="#ffffff"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#glow)"
            style={{
              pathLength: 0.05, // The length of the travelling beam
              pathOffset: useTransform(smoothProgress, [0, 1], [0, 0.95]), // Push it down the path smoothly
              opacity: useTransform(smoothProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]) // fade out completely at the very bottom
            }}
          />
        </svg>
      </div>

      {/* Parallax Layer 3: Foreground fast moving tiny light specs */}
      <motion.div 
        className="absolute inset-x-0 top-0 w-full h-[300%] overflow-hidden opacity-50"
        style={{ y: yParallaxClose }}
      >
        <div className="absolute top-[10%] left-[20%] w-2 h-2 bg-primary-400 rounded-full blur-[2px]" />
        <div className="absolute top-[35%] left-[80%] w-1.5 h-1.5 bg-secondary-400 rounded-full blur-[1px]" />
        <div className="absolute top-[60%] left-[15%] w-3 h-3 bg-accent-400 rounded-full blur-[3px]" />
        <div className="absolute top-[85%] left-[70%] w-2 h-2 bg-primary-300 rounded-full blur-[2px]" />
      </motion.div>

    </div>
  );
};

export default ScrollPathBackground;
