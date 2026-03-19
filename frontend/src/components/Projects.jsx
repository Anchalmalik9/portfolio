import React from 'react';

const projects = [
  {
    id: 1,
    title: "Enterprise E-Commerce Platform",
    description: "A full-featured modern e-commerce platform built with React, Node.js, and MongoDB. Includes secure payment gateways, user authentication, and an admin dashboard.",
    image: "https://via.placeholder.com/600x400/1e293b/fb923c?text=Project+1",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Collaborative Task Management",
    description: "A collaborative task management tool featuring real-time updates, drag-and-drop boards, and seamless team collaboration features.",
    image: "https://via.placeholder.com/600x400/1e293b/0ea5e9?text=Project+2",
    tags: ["React", "Express", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "AI Image Generator App",
    description: "An AI-powered application that generates stunning images from text prompts using OpenAI's API and a sleek modern UI.",
    image: "https://via.placeholder.com/600x400/1e293b/10b981?text=Project+3",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background abstract element */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Here are a few of my recent works that showcase my skills in full-stack development, UI/UX design, and complex problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-dark-800 border-b border-white/5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={project.liveUrl} className="p-3 bg-primary-500/90 text-white rounded-full hover:bg-primary-600 transition-colors transform hover:scale-110 shadow-lg" title="Live Demo">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                  <a href={project.githubUrl} className="p-3 bg-white/90 text-dark-900 rounded-full hover:bg-white transition-colors transform hover:scale-110 shadow-lg" title="GitHub Code">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-dark-900 border border-white/10 shadow-sm rounded-full text-xs text-accent-300 font-medium">
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
