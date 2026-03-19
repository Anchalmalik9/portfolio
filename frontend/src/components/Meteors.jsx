import React, { useEffect, useState } from 'react';

const Meteors = ({ number = 25 }) => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Generate pre-calculated styles so hydration matched (or run once on mount)
    const newMeteors = new Array(number).fill(true).map(() => ({
      left: Math.floor(Math.random() * 120) - 10 + 'vw', 
      top: Math.floor(Math.random() * 100) - 50 + 'vh',
      animationDelay: (Math.random() * 5).toFixed(2) + 's',
      animationDuration: Math.floor(Math.random() * 6 + 3) + 's',
      width: Math.floor(Math.random() * 150 + 50) + 'px'
    }));
    setMeteors(newMeteors);
  }, [number]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {meteors.map((styleProps, idx) => (
        <span
          key={'meteor' + idx}
          className="absolute h-[1px] shadow-[0_0_5px_1px_rgba(255,255,255,0.2)] animate-meteor"
          style={{
            top: styleProps.top,
            left: styleProps.left,
            animationDelay: styleProps.animationDelay,
            animationDuration: styleProps.animationDuration,
            width: styleProps.width,
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.8))'
          }}
        >
          {/* Meteor Glowing Head */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_15px_3px_rgba(249,115,22,0.8)] right-0"></div>
        </span>
      ))}
    </div>
  );
};

export default Meteors;
