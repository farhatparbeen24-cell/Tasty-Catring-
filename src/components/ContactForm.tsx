import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Send, Check } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { 
        icon: <Phone size={24} />, 
        label: "Call for Inquiry", 
        value: "+91 98611 20209", 
        sub: "Available 9 AM - 9 PM",
        link: "tel:9861120209"
    },
    { 
        icon: <MapPin size={24} />, 
        label: "Main Office", 
        value: "Bhubaneswar, Odisha", 
        sub: "Near Sahid Nagar",
        link: "https://maps.google.com"
    },
    { 
        icon: <Mail size={24} />, 
        label: "Email Us", 
        value: "tastycatering.pradeep20209@gmail.com", 
        sub: "Quotes within 24 hours",
        link: "mailto:tastycatering.pradeep20209@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Details Side */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-text-main leading-tight mb-8">
                Let's Plan Your <span className="text-brand-primary">Grand</span> Celebration.
              </h2>
              <p className="text-text-main/60 mb-12 text-lg leading-relaxed">
                Whether it's a wedding for 2,000 or a corporate lunch for 50, our team is ready to bring your vision to life. Get in touch for a personalized proposal.
              </p>

              <div className="space-y-10">
                {contactInfo.map((item) => (
                  <a 
                    href={item.link} 
                    key={item.label} 
                    className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">{item.label}</p>
                      <p className="text-xl font-serif font-bold text-text-main">{item.value}</p>
                      <p className="text-xs text-text-main/50 mt-1">{item.sub}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-3xl bg-bg-warm border luxury-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">Service Coverage</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['Bhubaneswar', 'Cuttack', 'Puri', 'Khurdha', 'Jatni'].map(city => (
                    <span key={city} className="px-4 py-2 bg-white rounded-full text-xs font-semibold shadow-sm border luxury-border">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-bg-warm rounded-[2.5rem] p-8 md:p-12 border luxury-border shadow-2xl shadow-brand-primary/5"
            >
              <h3 className="text-2xl font-serif font-bold text-text-main mb-8">Get a Personalized Quote</h3>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-60 ml-2">Name</label>
                        <input type="text" required placeholder="Your full name" className="w-full px-6 py-4 rounded-2xl bg-white border luxury-border focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium text-sm" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-60 ml-2">Phone</label>
                        <input type="tel" required placeholder="+91 00000 00000" className="w-full px-6 py-4 rounded-2xl bg-white border luxury-border focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium text-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-60 ml-2">Event Type</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-white border luxury-border focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium text-sm appearance-none">
                            <option>Wedding</option>
                            <option>Birthday Party</option>
                            <option>Corporate Lunch</option>
                            <option>Traditional / Home Pooja</option>
                            <option>Other Event</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-60 ml-2">Guest Count</label>
                        <input type="number" placeholder="Approx number" className="w-full px-6 py-4 rounded-2xl bg-white border luxury-border focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium text-sm" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-60 ml-2">Message & Specific Requirements</label>
                    <textarea rows={4} placeholder="Tell us more about your event..." className="w-full px-6 py-4 rounded-2xl bg-white border luxury-border focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium text-sm resize-none"></textarea>
                  </div>

                  <button className="w-full bg-brand-primary text-white py-5 rounded-2xl text-xs uppercase tracking-widest font-extrabold hover:bg-brand-primary/95 transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3">
                    Send Quote Request <Send size={16} />
                  </button>
                  <p className="text-[10px] text-center text-text-main/40 uppercase tracking-tighter">
                    By submitting you agree to our response turnaround time of 12-24 hours.
                  </p>
                </form>
              ) : (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6">
                        <Check size={40} />
                    </div>
                    <h4 className="text-3xl font-serif font-bold mb-4">Request Received!</h4>
                    <p className="text-text-main/60 max-w-sm">Thank you for considering Tasty Kitchen Caterers. Our planners will contact you shortly to discuss your menu.</p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="mt-8 text-brand-primary font-bold uppercase tracking-widest text-[10px] border-b border-brand-primary"
                    >
                        Send Another Inquiry
                    </button>
                </motion.div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
