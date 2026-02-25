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
        // FIXED: Using 'error' to satisfy TypeScript/ESLint
        console.error("EmailJS Error:", error);
        setIsSending(false);
        alert("Something went wrong. Please try again.");
    });
  };

  return (
<section id="contact" className="pt-12 pb-24 md:pb-32 bg-slate-900 px-4 relative overflow-hidden">      <div className="absolute top-0 right-0 w-72 h-72 md:w-125 md:h-125 bg-indigo-600/10 blur-[80px] md:blur-[120px] rounded-full z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20 text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[10px] md:text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4">
            Connection
          </motion.p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            {[
              { icon: Mail, label: 'Email Me', val: 'natenaeltemesgen1@gmail.com', color: 'text-cyan-400' },
              { icon: Phone, label: 'Call Me', val: '+251 934 075 339', color: 'text-indigo-400' },
              { icon: MapPin, label: 'Location', val: 'Addis Ababa, Ethiopia', color: 'text-pink-500' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-6 md:p-8 bg-[#0b0f1a] rounded-3xl md:rounded-4xl border border-white/5 flex items-center gap-4 md:gap-6 group transition-all"
              >
                <div className={`p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-black text-white uppercase text-[10px] tracking-widest mb-1">{item.label}</h4>
                  <p className="text-slate-400 text-xs md:text-sm font-medium">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="lg:col-span-2 bg-[#0b0f1a] p-6 md:p-12 rounded-4xl md:rounded-[3rem] border border-white/5 shadow-2xl">
            {isSent ? (
               <div className="text-center py-12 text-white">
                 <CheckCircle size={40} className="text-green-400 mx-auto mb-4" />
                 <h3 className="text-2xl font-black">Message Sent!</h3>
               </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <input name="user_name" required className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your Name" />
                <input name="user_email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Email" />
                <textarea name="message" required rows={4} className="md:col-span-2 w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-pink-500 resize-none" placeholder="Message"></textarea>
                
                <button 
                  type="submit" 
                  disabled={isSending} 
                  className="md:col-span-2 group relative overflow-hidden bg-white text-black font-black py-4 md:py-5 rounded-xl md:rounded-2xl transition-all active:scale-95 disabled:opacity-50 uppercase tracking-widest text-xs md:text-sm"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isSending ? "Sending..." : "Send Message"}
                    {/* FIXED: Using 'Send' icon here */}
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
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