import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};

const inputBase =
  'w-full rounded-2xl px-6 py-4 outline-none focus:ring-2 transition bg-white/5 border text-white light:bg-slate-50 light:text-slate-900 light:border-slate-200 light:placeholder:text-slate-400';

const cardClass =
  'bg-[#0b0f1a] rounded-3xl border border-white/5 light:bg-white light:border-slate-200 light:shadow-sm';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSending(true);

    try {
      await emailjs.send(
        'service_dmtwyzq',
        'template_co02jo6',
        data,
        'PrkToXv9BwBqyb8qk'
      );

      toast.success('Message sent successfully 🚀');
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="pt-12 pb-24 md:pb-32 bg-slate-900 px-4 relative overflow-hidden light:bg-white"
    >
      <Toaster position="top-right" />

      <div className="absolute top-0 right-0 w-72 h-72 md:w-125 md:h-125 bg-indigo-600/10 blur-[120px] rounded-full z-0 light:bg-indigo-200/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4 light:text-cyan-600"
          >
            Connection
          </motion.p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-6 light:text-slate-900">
            Get In <span className="text-cyan-400 light:text-cyan-600">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                label: 'Email Me',
                val: 'natenaeltemesgen1@gmail.com',
                color: 'text-cyan-400 light:text-cyan-600',
              },
              {
                icon: Phone,
                label: 'Call Me',
                val: '+251 934 075 339',
                color: 'text-indigo-400 light:text-indigo-600',
              },
              {
                icon: MapPin,
                label: 'Location',
                val: 'Addis Ababa, Ethiopia',
                color: 'text-pink-500 light:text-pink-600',
              },
            ].map((item, i) => (
              <div key={i} className={`p-6 ${cardClass} flex items-center gap-6`}>
                <div className={`p-4 bg-white/5 rounded-2xl ${item.color} light:bg-slate-100`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-black text-white uppercase text-xs tracking-widest mb-1 light:text-slate-900">
                    {item.label}
                  </h4>
                  <p className="text-slate-400 text-sm light:text-slate-600">{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`lg:col-span-2 p-8 md:p-12 rounded-[3rem] shadow-2xl ${cardClass}`}>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  {...register('user_name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  })}
                  className={`${inputBase} ${
                    errors.user_name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-white/10 focus:ring-cyan-500'
                  }`}
                  placeholder="Your Name"
                />
                {errors.user_name && (
                  <p className="text-red-400 text-xs mt-2 light:text-red-500">
                    {errors.user_name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...register('user_email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|io|dev)$/i,
                      message: 'Enter a valid email ending with .com, .net, .org, etc.',
                    },
                  })}
                  className={`${inputBase} ${
                    errors.user_email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-white/10 focus:ring-indigo-500'
                  }`}
                  placeholder="Your Email"
                />
                {errors.user_email && (
                  <p className="text-red-400 text-xs mt-2 light:text-red-500">
                    {errors.user_email.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <textarea
                  rows={4}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                  className={`${inputBase} rounded-3xl resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-white/10 focus:ring-pink-500'
                  }`}
                  placeholder="Your Message"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-2 light:text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValid || isSending}
                className="md:col-span-2 group relative overflow-hidden bg-white text-black font-black py-5 rounded-2xl transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-widest text-sm flex items-center justify-center gap-3 light:bg-slate-900 light:text-white"
              >
                {isSending ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin light:border-white" />
                ) : (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
