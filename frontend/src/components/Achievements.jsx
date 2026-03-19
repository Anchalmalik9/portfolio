import { useState, useEffect } from 'react';

const STATIC_ACHIEVEMENTS = [
  { id: 1, title: 'Hackathon Winner', description: 'Secured 1st place out of 50 teams at the university hackathon by building a real-time smart contact system mapping tool.', date: '2024' },
  { id: 2, title: 'Full Stack Bootcamp Honors', description: 'Graduated with highest honors from an intensive 500-hour full-stack web development bootcamp, submitting an outstanding MERN stack capstone project.', date: '2025' },
  { id: 3, title: 'Open Source Contributor', description: 'Merged 15+ pull requests into popular React open-source libraries, significantly improving accessibility and component performance.', date: '2025' }
];

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/achievements')
      .then(res => res.json())
      .then(data => {
        setAchievements(data && data.length > 0 ? data : STATIC_ACHIEVEMENTS);
        setLoading(false);
      })
      .catch(err => {
        setAchievements(STATIC_ACHIEVEMENTS);
        setLoading(false);
      });
  }, []);

  return (
    <section id="achievements" className="py-24 bg-dark-900 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-primary-400 font-semibold tracking-wider text-sm uppercase">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">Achievements</span>
          </h2>
        </div>
        
        {loading ? (
          <div className="flex justify-center h-48 items-center"><div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div></div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6 fade-in-up delay-200">
            {achievements.map((item, index) => (
              <div key={item.id || index} className="group relative glass-card rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-all flex flex-col md:flex-row gap-6 items-start hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] border border-white/5 hover:border-primary-500/30 overflow-hidden">
                <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-primary-500 to-accent-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                
                <div className="shrink-0 w-14 h-14 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-primary-400 shadow-inner group-hover:scale-110 group-hover:text-accent-400 transition-all duration-300 z-10">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                </div>
                
                <div className="flex-1 w-full z-10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-400 transition-colors pr-4">{item.title}</h3>
                    <span className="shrink-0 text-xs font-bold tracking-wider px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-lg">{item.date}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-[1rem]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
