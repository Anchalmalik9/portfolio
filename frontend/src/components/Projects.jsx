import React from 'react';

const projects = [
  {
    id: 1,
    title: "Waste Wise",
    description: "Waste Wise is a comprehensive waste management system designed to streamline waste collection, recycling, and disposal processes. It provides a seamless platform for waste management professionals to manage their operations efficiently.",
    image: "/wastewise (1).png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://wastewise-roan.vercel.app//",
    githubUrl: "https://github.com/Anchalmalik9/WASTEWISE"
  },
  {
    id: 2,
    title: "Pay Roll pro",
    description: "Pay Roll Pro is a comprehensive payroll management system designed to streamline payroll processing, tax calculations, and employee compensation management. It provides a seamless platform for businesses to manage their payroll operations efficiently.",
    image: "/payroll.png",
    tags: ["React", "Express", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Efficient page replacement algorithms",
    description: "This project is a web-based simulator for page replacement algorithms. It allows users to simulate and compare the performance of different page replacement algorithms (FIFO, LRU, Optimal) for a given page reference string and number of frames.",
    image: "/Page.png",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://efficientpageeplesment.vercel.app/",
    githubUrl: "https://github.com/Anchalmalik9/Efficient-Page-Replacement-Algorithm-Simulator-ORGINAL"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-visible z-10 w-full">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        <div className="text-center mb-16 fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mt-2 tracking-tight">
            Featured Works
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden group fade-in-up transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] delay-${(index + 1) * 100}`}
            >

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-dark-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={project.liveUrl} className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors transform hover:scale-110 shadow-lg" title="Live Demo">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                  <a href={project.githubUrl} className="p-3 bg-white text-dark-900 rounded-full hover:bg-slate-200 transition-colors transform hover:scale-110 shadow-lg" title="GitHub Code">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-dark-900 border border-white/10 text-xs text-slate-300 font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
