import { motion } from 'motion/react';
import { Phone, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-warm">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5F2ED] z-0 hidden lg:block" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 bg-brand-primary/10 text-brand-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-6 rounded-sm">
                Exquisite Catering Since 2010
              </span>
              <h1 className="text-4xl md:text-7xl xl:text-8xl font-serif text-text-main leading-[1.1] mb-6 md:mb-8 text-balance">
                Creating <span className="text-brand-primary italic">Memorable</span> Feasts for Your Finest Moments.
              </h1>
              <p className="text-base md:text-lg text-text-main/70 mb-8 md:mb-10 max-w-xl leading-relaxed">
                Experience the authentic flavors of Odisha and beyond. From grand weddings in Bhubaneswar to intimate gatherings in Cuttack, we bring professional planning and exceptional taste to every plate.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-primary/95 transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2"
                >
                  Get Catering Quote <ChevronRight size={16} />
                </a>
                <a
                  href="tel:9861120209"
                  className="w-full sm:w-auto border border-brand-primary/20 text-brand-primary px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-primary/5 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t luxury-border flex items-center gap-8">
                <div>
                  <p className="text-2xl font-serif font-bold text-brand-primary">500+</p>
                  <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Events Served</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-brand-primary">15+</p>
                  <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-brand-primary">4.9/5</p>
                  <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Customer Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Imagery */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" 
                  alt="Premium Catering Setup" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Now Booking</span>
                </div>
                <p className="text-sm font-serif font-semibold leading-snug">Available for Wedding Season 2026/27</p>
              </motion.div>
            </motion.div>
            
            {/* Secondary Decorator Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -top-12 -right-12 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-8 border-bg-warm hidden xl:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                alt="Delicious Food" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
