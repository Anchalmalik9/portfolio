import { useState, useEffect } from 'react';

const STATIC_SKILLS = [
  // Frontend
  { id: 1, category: 'Frontend', name: 'React.js', level: 90 },
  { id: 2, category: 'Frontend', name: 'Tailwind CSS', level: 85 },
  { id: 3, category: 'Frontend', name: 'JavaScript', level: 88 },
  { id: 4, category: 'Frontend', name: 'TypeScript', level: 80 },
  { id: 5, category: 'Frontend', name: 'Next.js', level: 75 },
  
  // Backend
  { id: 6, category: 'Backend', name: 'Node.js', level: 85 },
  { id: 7, category: 'Backend', name: 'Express.js', level: 85 },
  { id: 8, category: 'Backend', name: 'Python', level: 80 },
  { id: 9, category: 'Backend', name: 'Java', level: 75 },
  { id: 10, category: 'Backend', name: 'C++', level: 70 },
  { id: 11, category: 'Backend', name: 'Go', level: 60 },

  // Database
  { id: 12, category: 'Database', name: 'MongoDB', level: 80 },
  { id: 13, category: 'Database', name: 'PostgreSQL', level: 75 },
  { id: 14, category: 'Database', name: 'MySQL', level: 75 },
  
  // Tools
  { id: 15, category: 'Tools', name: 'Git', level: 85 },
  { id: 16, category: 'Tools', name: 'Docker', level: 70 },
  { id: 17, category: 'Tools', name: 'AWS', level: 65 },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setSkills(STATIC_SKILLS);
        setLoading(false);
    }, 500);
  }, []);

  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="py-24 relative z-20 w-full">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        <div className="text-center mb-16 fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mt-2 tracking-tight">
            Technical Arsenal
          </h2>
        </div>
        
        {loading ? (
          <div className="flex justify-center h-48 items-center"><div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 fade-in-up delay-200">
            {categories.map((category) => (
              <div key={category} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-colors duration-300">

                <h3 className="text-2xl font-bold font-sans text-white mb-6">
                  {category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {skills.filter(s => s.category === category).map(skill => (
                    <div key={skill.id} className="group/skill flex items-center gap-2 bg-dark-900 border border-white/10 px-4 py-2 rounded-full hover:border-cyan-400/50 transition-colors">
                      <span className="font-medium text-slate-200 group-hover/skill:text-cyan-400 transition-colors text-sm">
                        {skill.name}
                      </span>
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
