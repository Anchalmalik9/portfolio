import React, { useState, useEffect } from 'react';

const KEYBOARD_ROWS = [
  [
    { id: 'Backquote', label: '~' }, { id: 'Digit1', label: '1' }, { id: 'Digit2', label: '2' }, { id: 'Digit3', label: '3' }, 
    { id: 'Digit4', label: '4' }, { id: 'Digit5', label: '5' }, { id: 'Digit6', label: '6' }, { id: 'Digit7', label: '7' }, 
    { id: 'Digit8', label: '8' }, { id: 'Digit9', label: '9' }, { id: 'Digit0', label: '0' }, { id: 'Minus', label: '-' }, 
    { id: 'Equal', label: '=' }, { id: 'Backspace', label: 'Del', width: 'w-20' }
  ],
  [
    { id: 'Tab', label: 'Tab', width: 'w-18' }, { id: 'KeyQ', label: 'Q' }, { id: 'KeyW', label: 'W' }, { id: 'KeyE', label: 'E' }, 
    { id: 'KeyR', label: 'R' }, { id: 'KeyT', label: 'T' }, { id: 'KeyY', label: 'Y' }, { id: 'KeyU', label: 'U' }, 
    { id: 'KeyI', label: 'I' }, { id: 'KeyO', label: 'O' }, { id: 'KeyP', label: 'P' }, { id: 'BracketLeft', label: '[' }, 
    { id: 'BracketRight', label: ']' }, { id: 'Backslash', label: '\\', width: 'w-16' }
  ],
  [
    { id: 'CapsLock', label: 'Caps', width: 'w-22' }, { id: 'KeyA', label: 'A' }, { id: 'KeyS', label: 'S' }, { id: 'KeyD', label: 'D' }, 
    { id: 'KeyF', label: 'F' }, { id: 'KeyG', label: 'G' }, { id: 'KeyH', label: 'H' }, { id: 'KeyJ', label: 'J' }, 
    { id: 'KeyK', label: 'K' }, { id: 'KeyL', label: 'L' }, { id: 'Semicolon', label: ';' }, { id: 'Quote', label: '\'' }, 
    { id: 'Enter', label: 'Enter', width: 'w-24' }
  ],
  [
    { id: 'ShiftLeft', label: 'Shift', width: 'w-28' }, { id: 'KeyZ', label: 'Z' }, { id: 'KeyX', label: 'X' }, { id: 'KeyC', label: 'C' }, 
    { id: 'KeyV', label: 'V' }, { id: 'KeyB', label: 'B' }, { id: 'KeyN', label: 'N' }, { id: 'KeyM', label: 'M' }, 
    { id: 'Comma', label: ',' }, { id: 'Period', label: '.' }, { id: 'Slash', label: '/' }, { id: 'ShiftRight', label: 'Shift', width: 'w-28' }
  ],
  [
    { id: 'ControlLeft', label: 'Ctrl', width: 'w-16' }, { id: 'MetaLeft', label: 'Win', width: 'w-16' }, { id: 'AltLeft', label: 'Alt', width: 'w-16' }, 
    { id: 'Space', label: '', width: 'w-72' }, 
    { id: 'AltRight', label: 'Alt', width: 'w-16' }, { id: 'MetaRight', label: 'Win', width: 'w-16' }, { id: 'ControlRight', label: 'Ctrl', width: 'w-16' }
  ]
];

const InteractiveKeyboard = () => {
  const [activeKeys, setActiveKeys] = useState(new Set());

  useEffect(() => {
    const handleKeyDown = (e) => {
      setActiveKeys((prev) => {
        const newSet = new Set(prev);
        newSet.add(e.code);
        return newSet;
      });
    };

    const handleKeyUp = (e) => {
      setActiveKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(e.code);
        return newSet;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] pointer-events-none z-0 flex flex-col items-center justify-center">
      
      {/* Glow behind everything */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-primary-600/10 via-accent-600/10 to-primary-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      {/* Unified 3D Desk Environment */}
      <div 
        className="relative z-10 w-full h-full flex flex-col items-center justify-center" 
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >
        
        {/* Desk Plate Surface container */}
        <div 
          className="relative flex flex-col items-center transition-transform duration-1000 ease-out"
          style={{ 
             transformStyle: 'preserve-3d',
             transform: 'translateY(150px) rotateX(60deg) rotateZ(-20deg) scale(0.65)',
          }}
        >
          
          {/* Desk Wire (Connecting Monitor & Keyboard) */}
          <div className="absolute -top-[120px] md:-top-[220px] left-[60%] w-[6px] h-[160px] md:h-[260px] bg-gradient-to-b from-dark-800 via-accent-500/50 to-primary-500 shadow-[0_0_15px_rgba(14,165,233,0.5)] rounded-full z-0" style={{ transform: 'rotateZ(15deg) translateZ(5px)' }}></div>
          <div className="absolute -top-[100px] md:-top-[180px] left-[35%] w-[4px] h-[140px] md:h-[220px] bg-gradient-to-b from-dark-800 via-primary-500/50 to-dark-800 shadow-[0_0_10px_rgba(249,115,22,0.4)] rounded-full z-0" style={{ transform: 'rotateZ(-10deg) translateZ(2px)' }}></div>

          {/* Desktop Monitor standing up on the desk */}
          <div 
            className="absolute -top-[300px] md:-top-[550px] left-[50%] -translate-x-1/2 origin-bottom transition-all z-20"
            style={{ 
               transform: 'rotateX(-75deg) rotateZ(0deg)', // stands perfectly upright relative to the desk plane
               transformStyle: 'preserve-3d'
            }}
          >
             <div 
               className="relative w-[300px] h-[200px] md:w-[700px] md:h-[450px] bg-dark-900 border-[12px] md:border-[20px] border-dark-800 rounded-2xl shadow-[0_40px_60px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(249,115,22,0.1)] flex flex-col justify-start items-center"
             >
               {/* Editor Header */}
               <div className="w-full h-8 md:h-12 bg-dark-800 flex items-center px-4 border-b border-dark-700/50 gap-2 overflow-hidden">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs md:text-sm text-slate-400 font-mono ml-4 truncate">Anchal's Workspace - VS Code</span>
               </div>
               
               {/* Mock Code Content */}
                <div className="w-full h-full p-4 flex flex-col gap-3 md:gap-4 opacity-70 bg-[#1e1e1e] font-mono text-[10px] md:text-[15px] leading-relaxed text-slate-300">
                   <div className="flex gap-2">
                      <span className="text-pink-400">import</span> 
                      <span className="text-accent-400">React</span> 
                      <span className="text-pink-400">from</span> 
                      <span className="text-green-300">'react'</span><span className="text-slate-400">;</span>
                   </div>
                   <div className="flex gap-2 mt-2 md:mt-4">
                      <span className="text-blue-400">const</span> 
                      <span className="text-yellow-200">Developer</span> 
                      <span className="text-blue-400">=</span> 
                      <span className="text-slate-400">()</span> 
                      <span className="text-blue-400">{'=>'}</span> 
                      <span className="text-slate-400">{'{'}</span>
                   </div>
                   <div className="flex gap-2 pl-4">
                      <span className="text-pink-400">return</span> 
                      <span className="text-slate-400">(</span>
                   </div>
                   <div className="flex gap-2 pl-8">
                      <span className="text-slate-400">{'<'}</span><span className="text-blue-300">code</span><span className="text-slate-400">{'>'}</span>
                   </div>
                   <div className="flex gap-2 pl-12 font-bold text-white tracking-widest text-shadow-glow">
                      Building Digital Realities...
                   </div>
                   <div className="flex gap-2 pl-8">
                      <span className="text-slate-400">{'</'}</span><span className="text-blue-300">code</span><span className="text-slate-400">{'>'}</span>
                   </div>
                   <div className="flex gap-2 pl-4">
                      <span className="text-slate-400">);</span>
                   </div>
                   <div className="flex gap-2">
                      <span className="text-slate-400">{'}'};</span>
                   </div>
                   
                   {/* Pulsing cursor cursor */}
                   <div className="w-2 h-4 md:w-3 md:h-5 bg-white animate-ping mt-2"></div>
                </div>
                
                {/* Monitor glare effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
             </div>

             {/* Monitor Stand attached to desk */}
             <div className="absolute top-full left-1/2 -translate-x-1/2 w-16 h-10 md:w-24 md:h-16 bg-gradient-to-b from-dark-800 to-dark-900 border-x border-dark-700/30"></div>
             
             {/* Monitor Base touching the floor plate */}
             <div className="absolute top-[calc(100%+2.5rem)] md:top-[calc(100%+4rem)] left-1/2 -translate-x-1/2 w-48 h-32 md:w-80 md:h-48 bg-dark-700 rounded-t-xl shadow-[0_20px_20px_rgba(0,0,0,0.8)] border-t border-white/5" style={{ transformOrigin: 'top', transform: 'rotateX(75deg)' }}></div>
          </div>

          {/* Keyboard lying flat on the desk, translated beautifully */}
          <div className="bg-dark-900/60 backdrop-blur-xl p-4 md:p-8 rounded-3xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.9),inset_0_2px_15px_rgba(255,255,255,0.1)] relative z-30 transition-transform">
            <div className="flex flex-col gap-2 md:gap-3">
              {KEYBOARD_ROWS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-2 justify-center">
                  {row.map((key) => {
                    const isActive = activeKeys.has(key.id);
                    const wClass = key.width || 'w-10 md:w-14';
                    
                    return (
                      <div 
                        key={key.id}
                        className={`relative ${wClass} h-10 md:h-14 rounded-lg transition-all duration-75 ease-out border-b-4 border-r-4 ${
                          isActive 
                            ? 'translate-y-2 border-b-0 border-r-0 bg-primary-500/40 shadow-[0_0_25px_rgba(249,115,22,0.8)] border-dark-900' 
                            : 'bg-dark-800 shadow-[6px_6px_15px_rgba(0,0,0,0.7)] border-dark-900/90'
                        }`}
                      >
                        {/* Key Surface */}
                        <div 
                          className={`absolute top-0 left-0 w-full h-full rounded-md flex items-center justify-center transition-colors duration-75 ${
                            isActive 
                              ? 'bg-primary-500/60 text-white shadow-[inset_0_0_20px_rgba(249,115,22,0.9)]' 
                              : 'bg-gradient-to-br from-dark-700 to-dark-900 text-slate-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]'
                          }`}
                          style={{ transform: isActive ? 'scale(0.96)' : 'scale(1)', transformOrigin: 'top left', width: 'calc(100% - 2px)', height: 'calc(100% - 2px)', marginLeft: '1px', marginTop: '1px' }}
                        >
                          <span className={`font-mono font-bold text-[10px] md:text-sm ${isActive ? 'drop-shadow-[0_0_8px_currentColor] text-white' : ''}`}>
                            {key.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            
            {/* Soft glowing base under the keyboard */}
            <div className="absolute -inset-4 bg-primary-500/5 rounded-[40px] blur-2xl -z-10"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default InteractiveKeyboard;
