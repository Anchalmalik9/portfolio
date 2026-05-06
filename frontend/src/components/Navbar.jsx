import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-500 w-full md:w-auto px-6 py-4 rounded-full ${scrolled ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center gap-12">
          
          <a href="#home" className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white text-sm font-bold">A</span>
            </span>
            Anchal.
          </a>
          
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
                {link.name}
              </a>
            ))}
          </div>

          <a href="#resume" className="hidden md:block px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
            Resume
          </a>

          <button className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
