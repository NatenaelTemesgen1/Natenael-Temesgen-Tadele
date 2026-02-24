import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_dmtwyzq', 
      'template_co02jo6', 
      form.current!, 
      'PrkToXv9BwBqyb8qk'
    )
    .then(() => {
        setIsSent(true);
        setIsSending(false);
        form.current?.reset();
        setTimeout(() => setIsSent(false), 5000); 
    }, (error) => {
        console.error(error.text);
        setIsSending(false);
        alert("Something went wrong. Please try again.");
    });
  };

  return (
    <section id="contact" className="-mt-190 pt-4 pb-24  bg-slate-900 px-4 relative overflow-hidden">     
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-600/10 blur-[120px] rounded-full z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4"
          >
            Connection
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind or just want to say hi? I'm currently available 
            for new opportunities and digital collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email Me', val: 'natenaeltemesgen1@gmail.com', color: 'text-cyan-400' },
              { icon: Phone, label: 'Call Me', val: '+251 934 075 339', color: 'text-indigo-400' },
              { icon: MapPin, label: 'Location', val: 'Addis Ababa, Ethiopia', color: 'text-pink-500' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#0b0f1a] rounded-4xl border border-white/5 flex items-center gap-6 group hover:border-white/20 transition-all"
              >
                <div className={`p-4 bg-white/5 rounded-2xl ${item.color} group-hover:scale-110 transition-transform shadow-xl`}>
                  <item.icon size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-black text-white uppercase text-xs tracking-widest mb-1">{item.label}</h4>
                  <p className="text-slate-400 text-sm font-medium">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#0b0f1a] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {isSent ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-white space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                  <CheckCircle size={40} className="text-green-400" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-black tracking-tighter">Message Sent!</h3>
                  <p className="text-slate-400 mt-2">I'll get back to you faster than a page load.</p>
                </div>
              </motion.div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Your Name</label>
                  <input 
                    name="user_name" 
                    required 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-700" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Email Address</label>
                  <input 
                    name="user_email" 
                    required 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-700" 
                    placeholder="Enter your email" 
                  />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={5} 
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-700" 
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  disabled={isSending}
                  type="submit" 
                  className="md:col-span-2 relative group overflow-hidden bg-white text-black font-black py-5 rounded-2xl transition-all active:scale-95 disabled:opacity-50"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isSending ? "ENCRYPTING..." : "SEND MESSAGE"}
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
  
export default Contact;