import { useState, useEffect } from 'react';

const STATIC_SKILLS = [
  // Frontend
  { id: 1, category: 'Frontend', name: 'React.js', level: 90, icon: 'react/react-original.svg' },
  { id: 2, category: 'Frontend', name: 'Tailwind CSS', level: 85, icon: 'tailwindcss/tailwindcss-original.svg' },
  { id: 3, category: 'Frontend', name: 'JavaScript', level: 88, icon: 'javascript/javascript-original.svg' },
  { id: 4, category: 'Frontend', name: 'TypeScript', level: 80, icon: 'typescript/typescript-original.svg' },
  { id: 5, category: 'Frontend', name: 'Next.js', level: 75, icon: 'nextjs/nextjs-original.svg' },
  
  // Backend
  { id: 6, category: 'Backend', name: 'Node.js', level: 85, icon: 'nodejs/nodejs-original.svg' },
  { id: 7, category: 'Backend', name: 'Express.js', level: 85, icon: 'express/express-original.svg' },
  { id: 8, category: 'Backend', name: 'Python', level: 80, icon: 'python/python-original.svg' },
  { id: 9, category: 'Backend', name: 'Java', level: 75, icon: 'java/java-original.svg' },
  { id: 10, category: 'Backend', name: 'C++', level: 70, icon: 'cplusplus/cplusplus-original.svg' },
  { id: 11, category: 'Backend', name: 'Go', level: 60, icon: 'go/go-original.svg' },

  // Database
  { id: 12, category: 'Database', name: 'MongoDB', level: 80, icon: 'mongodb/mongodb-original.svg' },
  { id: 13, category: 'Database', name: 'PostgreSQL', level: 75, icon: 'postgresql/postgresql-original.svg' },
  { id: 14, category: 'Database', name: 'MySQL', level: 75, icon: 'mysql/mysql-original.svg' },
  
  // Tools
  { id: 15, category: 'Tools', name: 'Git', level: 85, icon: 'git/git-original.svg' },
  { id: 16, category: 'Tools', name: 'Docker', level: 70, icon: 'docker/docker-original.svg' },
  { id: 17, category: 'Tools', name: 'AWS', level: 65, icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg' },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensuring the rich UI always gets rendered regardless of backend
    setTimeout(() => {
        setSkills(STATIC_SKILLS);
        setLoading(false);
    }, 500);
  }, []);

  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="py-24 relative border-t border-white/5 z-20">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-accent-400 font-semibold tracking-wider text-sm uppercase">Technical Arsenal</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Expertise</span>
          </h2>
        </div>
        
        {loading ? (
          <div className="flex justify-center h-48 items-center"><div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 fade-in-up delay-200">
            {categories.map((category) => (
              <div key={category} className="glass-card rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-primary-400 shadow-inner group-hover:text-accent-400 transition-colors">
                     {category === 'Frontend' ? (
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                     ) : category === 'Backend' ? (
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                     ) : category === 'Database' ? (
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                     ) : (
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                     )}
                  </div>
                  {category}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10 w-full">
                  {skills.filter(s => s.category === category).map(skill => (
                    <div key={skill.id} className="group/skill flex flex-col items-center justify-center backdrop-blur-sm bg-dark-900/30 p-5 rounded-2xl border border-white/5 hover:bg-dark-900/60 hover:border-primary-500/30 hover:-translate-y-1.5 transition-all cursor-pointer">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-2.5 mb-4 shadow-[0_8px_20px_rgba(0,0,0,0.4)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300">
                        <img 
                          src={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/" + skill.icon} 
                          alt={skill.name} 
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => { e.target.style.display = 'none'; }} 
                        />
                      </div>
                      <span className="font-bold text-slate-200 group-hover:text-white transition-colors text-sm sm:text-base text-center mb-2">{skill.name}</span>
                      <span className="text-primary-400 text-xs font-extrabold tracking-wider bg-primary-500/10 px-3 py-1 rounded-lg border border-primary-500/20">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
