import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus({ type: 'success', text: 'Message successfully beamed to my inbox! 🚀' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: 'Failed to send. Please try again later.' });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'Network error. The server seems to be sleeping.' });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 bg-dark-900 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 fade-in-up">
          <span className="text-primary-400 font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Connect</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-14 fade-in-up delay-200 relative overflow-hidden">
          {/* Decorative glowing orb inside form */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent-500/20 blur-[80px] rounded-full pointer-events-none"></div>

          {status.text && (
            <div className={`p-5 mb-8 rounded-2xl border backdrop-blur-md ${status.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'} flex items-center gap-4`}>
              {status.type === 'success' ? (
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              ) : (
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              )}
              <span className="font-medium">{status.text}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-sm font-semibold text-slate-300 ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all shadow-inner"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-semibold text-slate-300 ml-1">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all shadow-inner"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="text-sm font-semibold text-slate-300 ml-1">Message</label>
              <textarea 
                id="message"
                name="message" 
                required
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-dark-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all resize-none shadow-inner"
                placeholder="How can we collaborate?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full group relative overflow-hidden bg-white text-dark-900 font-bold py-5 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] disabled:opacity-70 flex justify-center items-center gap-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></span>
              
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                {isSubmitting ? (
                  <div className="w-6 h-6 border-3 border-dark-900 group-hover:border-white border-t-transparent group-hover:border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
