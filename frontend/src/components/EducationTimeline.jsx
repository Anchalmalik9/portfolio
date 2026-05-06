import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    id: 1,
    degree: "B.Tech \u2013 Computer Science & Engineering",
    institution: "Lovely Professional University, Jalandhar",
    year: "Aug 2023 - Present",
    score: "CGPA: 7.05",
    details: "Specialising in full-stack development, data structures algorithms.",
  },
  {
    id: 2,
    degree: "Intermediate (12th Grade)",
    institution: "Army Public School, Meerut Cantt., Utter Preadesh",
    year: "2020 - 2022",
    score: "78%",
    details: "Completed higher secondary education with Physics, Chemistry, and Mathematics as core subjects.",
  },
  {
    id: 3,
    degree: "Matriculation (10th Grade)",
    institution: "Army Public School, Meerut Cantt., Utter Preadesh",
    year: "2019 - 2020",
    score: "90%",
    details: "Completed secondary education with strong performance across all subjects.",
  }
];

const EducationTimeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the vertical Cyan line growing down
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center", // Start growing when timeline reaches center
            end: "bottom center", // Finish growing when timeline bottom reaches center
            scrub: 1, // Smooth link to scroll
          }
        }
      );

      // Animate each timeline entry fading in
      itemsRef.current.forEach((el, index) => {
        gsap.fromTo(el, 
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // Fade in when card is 80% down the viewport
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" className="relative w-full py-24 flex flex-col justify-center text-slate-200">
      <div className="max-w-5xl mx-auto w-full px-6 md:px-12" ref={containerRef}>
        
        {/* Standard Elegant Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mt-2 tracking-tight">
            Academic Timeline
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full flex">
          
          {/* Faint Background Track Line */}
          <div className="absolute top-0 bottom-0 left-[120px] md:left-[200px] w-[2px] bg-white/5" />
          
          {/* Animated Neon Cyan Line */}
          <div
            ref={lineRef}
            className="absolute top-0 left-[120px] md:left-[200px] w-[2px] bg-[#00FFFF] origin-top shadow-[0_0_15px_#00FFFF]"
            style={{ bottom: 0 }}
          />

          {/* Timeline Items */}
          <div className="w-full flex flex-col space-y-20">
            {educationData.map((item, index) => (
              <div 
                key={item.id}
                ref={el => itemsRef.current[index] = el}
                className="relative flex items-start w-full z-10"
              >
                {/* Left Side: Date & Score */}
                <div className="w-[100px] md:w-[170px] text-right pr-6 flex flex-col justify-start mt-1">
                  <span className="text-cyan-400 text-sm md:text-base font-semibold font-mono whitespace-nowrap">
                    {item.year}
                  </span>
                  <span className="text-purple-400 font-bold font-mono mt-1 whitespace-nowrap text-sm md:text-base">
                    {item.score}
                  </span>
                </div>

                {/* Node Ring on the timeline */}
                <div className="absolute left-[113px] md:left-[193px] w-[16px] h-[16px] rounded-full bg-dark-900 border-[3px] border-[#00FFFF] shadow-[0_0_10px_#00FFFF] top-2" />

                {/* Right Side: Content */}
                <div className="flex-1 pl-10 md:pl-16">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                    {item.degree}
                  </h3>
                  <h4 className="text-cyan-500 font-medium mb-4 text-sm md:text-base">
                    {item.institution}
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-2xl">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
