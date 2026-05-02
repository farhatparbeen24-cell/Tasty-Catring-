import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const points = [
    "Expert event planning & coordination",
    "Tailored menu options (Veg & Non-Veg)",
    "Strict hygiene & quality standards",
    "Professional & uniformed serving staff",
    "Serving Bhubaneswar, Cuttack & Puri",
    "Affordable luxury pricing models"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Kitchen Preparation" 
                  className="rounded-3xl shadow-lg w-full aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fine Dining" 
                  className="rounded-3xl shadow-lg w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-12 space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                  alt="Wedding Setup" 
                  className="rounded-3xl shadow-lg w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
                  alt="Chef at work" 
                  className="rounded-3xl shadow-lg w-full aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white p-8 rounded-full shadow-2xl text-center flex flex-col items-center justify-center border-8 border-white">
              <span className="text-4xl font-serif font-bold">15+</span>
              <span className="text-[10px] uppercase font-bold tracking-tighter">Years of</span>
              <span className="text-[10px] uppercase font-bold tracking-tighter">Excellence</span>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-text-main leading-tight">
                Trustworthy & Experienced <br />
                <span className="text-brand-primary">Local Caterers</span> in Odisha.
              </h2>
              
              <div className="space-y-6 text-text-main/70 leading-relaxed max-w-xl">
                <p>
                  At <span className="font-bold text-text-main italic">Tasty Kitchen Caterers</span>, we believe that food is the heart of every celebration. Based in the heritage-rich city of Bhubaneswar, we have spent over 15 years perfecting the art of hospitality.
                </p>
                <p>
                  Our journey started with a simple goal: to serve authentic, home-style flavors with professional elegance. Today, we are proud to be one of the most trusted names for weddings and corporate events across Bhubaneswar, Cuttack, Puri, and Khurdha.
                </p>
                <p>
                  We don't just provide food; we provide an experience. From custom menu planning to meticulous event coordination, our team ensures that your guests leave with a smile and a satisfied palate.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-primary shrink-0" size={20} />
                    <span className="text-sm font-medium text-text-main/80">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-6 p-6 rounded-2xl bg-bg-warm border luxury-border">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977730f90?q=80&w=1968&auto=format&fit=crop" 
                  alt="Owner" 
                  className="w-16 h-16 rounded-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-serif font-bold italic text-lg leading-none">"Flavor is our heritage, service is our passion."</p>
                  <p className="text-xs uppercase tracking-widest mt-1 opacity-60">— The Tasty Kitchen Family</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
