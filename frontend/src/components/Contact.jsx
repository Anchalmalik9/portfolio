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
        setStatus({ type: 'success', text: 'Message successfully sent!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: 'Failed to send. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'Network error. Please try again later.' });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 relative z-20 w-full mb-20">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        
        <div className="text-center mb-16 fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mt-2 tracking-tight">
            Let's Collaborate
          </h2>
        </div>
        
        <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 fade-in-up delay-200 relative overflow-hidden">

          {status.text && (
            <div className={`p-5 mb-8 rounded-2xl border backdrop-blur-md ${status.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'} flex items-center gap-4`}>
              <span className="font-medium">{status.text}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-all shadow-inner"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-all shadow-inner"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
              <textarea 
                id="message"
                name="message" 
                required
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-dark-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-all resize-none shadow-inner"
                placeholder="How can we collaborate?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-5 rounded-2xl shadow-lg transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] disabled:opacity-70 flex justify-center items-center gap-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
