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
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-500 w-full md:w-auto px-6 py-4 rounded-3xl ${scrolled ? 'glass-card border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-dark-900/60' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center gap-12">
          
          <a href="#home" className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
              <span className="text-white text-sm">A</span>
            </span>
            Anchal.
          </a>
          
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
                {link.name}
              </a>
            ))}
          </div>

          <a href="#resume" className="hidden md:block px-5 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all">
            Resume
          </a>

          <button className="md:hidden text-slate-300 hover:text-white p-2 glass-card rounded-lg border-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
