import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register standard GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const GsapScrollPath = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Only run if elements are available
    if (!pathRef.current || !dotRef.current) return;

    // Use a GSAP context to neatly clean up on unmount
    let ctx = gsap.context(() => {
      // Get the length of the path to animate the stroke drawing
      const pathLength = pathRef.current.getTotalLength();
      
      // Setup initial state: dashed line that is invisible (offset is full length)
      gsap.set(pathRef.current, { 
        strokeDasharray: pathLength, 
        strokeDashoffset: pathLength 
      });

      // Animate the line drawing AND the dot moving along it simultaneously
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement, // track the entire page scroll
          start: "top top", // start when page is at top
          end: "bottom bottom", // end when page reaches bottom
          scrub: 1, // smooth scrubbing (1 second delay for smoothness)
        }
      });

      // 1. Draw the line down
      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none"
      }, 0); // start at beginning of timeline

      // 2. Move the dot along the path
      tl.to(dotRef.current, {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current, // Align dot completely to the path coordinates
          alignOrigin: [0.5, 0.5], // Center of the dot
          autoRotate: true // Rotates the dot if it's not a circle (good for arrows)
        },
        ease: "none"
      }, 0); // start at the same time

    }, containerRef); // scope to container

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
    >
      {/* We use an SVG that matches the full screen height but uses a massive viewBox 
          or specific viewport coordinate maps to ensure it's visible. */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1000 3000" 
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full opacity-50"
      >
        {/* The motion path line. Thick solid color, no glow or brightness effects. */}
        <path
          ref={pathRef}
          d="M 500 0 C 600 500, 200 1000, 500 1500 C 800 2000, 400 2500, 500 3000"
          fill="none"
          stroke="#ef4444" // solid red for extreme visibility/debugging
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* The visible scroll element (a solid circle) following the path. */}
        <circle 
          ref={dotRef}
          r="24" 
          fill="#3b82f6" // solid blue to contrast strongly with red
          stroke="#ffffff"
          strokeWidth="6"
        />
      </svg>
    </div>
  );
};

export default GsapScrollPath;
