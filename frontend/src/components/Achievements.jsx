const STATIC_ACHIEVEMENTS = [
  { id: 1, title: 'Contributed in Social Services', description: 'Planted 20+ trees in my community and organized awareness campaigns about environmental protection.', date: '2024' }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-20 w-full mb-12">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        {/* Standard Elegant Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mt-2 tracking-tight">
            Key Achievements
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 fade-in-up delay-200">
          {STATIC_ACHIEVEMENTS.map((item, index) => (
            <div key={item.id || index} className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all flex flex-col md:flex-row gap-6 items-start hover:shadow-2xl border border-white/10 hover:border-cyan-500/30 overflow-hidden">
              
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center text-cyan-400 shadow-inner group-hover:scale-110 transition-all duration-300 z-10">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
              
              <div className="flex-1 w-full z-10">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors pr-4">{item.title}</h3>
                  <span className="shrink-0 text-xs font-semibold tracking-wider px-3 py-1 bg-dark-900 border border-white/10 text-slate-300 rounded-full">{item.date}</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-[1rem]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
