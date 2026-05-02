import { motion } from 'motion/react';
import { ShieldCheck, Utensils, Zap, Users, IndianRupee, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="text-brand-primary" />,
    title: "ISO & FSSAI Certified",
    desc: "Strict adherence to hygiene and health standards in every dish we prepare."
  },
  {
    icon: <Utensils className="text-brand-primary" />,
    title: "Diverse Menu",
    desc: "Over 200+ authentic veg and non-veg options spanning across cuisines."
  },
  {
    icon: <Zap className="text-brand-primary" />,
    title: "Punctual Delivery",
    desc: "Our team ensures the buffet is ready 30 minutes before your first guest arrives."
  },
  {
    icon: <Users className="text-brand-primary" />,
    title: "Expert Staff",
    desc: "Well-trained, groomed, and polite hospitality professionals at your service."
  },
  {
    icon: <IndianRupee className="text-brand-primary" />,
    title: "Affordable Luxury",
    desc: "Premium experience at competitive rates that respect your budget."
  },
  {
    icon: <MapPin className="text-brand-primary" />,
    title: "Wide Coverage",
    desc: "Reliable service across Bhubaneswar, Cuttack, Puri, and neighboring districts."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-bg-warm luxury-border border-y">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-brand-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Why Tasty Kitchen?</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-8 leading-tight">Setting the <span className="italic">Benchmark</span> for Local Catering.</h2>
            <p className="text-text-main/60 leading-relaxed mb-10">
              We aren't just selling food; we are selling the peace of mind that comes with knowing your event's dining experience is in expert hands.
            </p>
            <a href="#contact" className="inline-block border-b-2 border-brand-primary pb-2 font-bold uppercase tracking-widest text-xs text-brand-primary hover:tracking-[0.2em] transition-all duration-300">
                Discuss Your Requirements
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-black/5 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-6">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-text-main mb-3">{reason.title}</h3>
                  <p className="text-sm text-text-main/50 leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
