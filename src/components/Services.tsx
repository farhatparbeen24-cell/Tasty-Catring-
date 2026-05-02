import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Wedding Catering",
    description: "Grand buffet setups, royal traditional thalis, and contemporary fusion menus tailored for your big day.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    size: "large"
  },
  {
    id: "02",
    title: "Corporate Events",
    description: "Professional lunch boxes, premium tea-time snacks, and executive dinner services for businesses.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    size: "normal"
  },
  {
    id: "03",
    title: "Private Parties",
    description: "Birthday celebrations, anniversaries, and family reunions with personalized themes and child-friendly options.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1961&auto=format&fit=crop",
    size: "normal"
  },
  {
    id: "04",
    title: "Traditional Functions",
    description: "Authentic Odia feasts for housewarmings (Griha Pravesh), engagements, and thread ceremonies.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop",
    size: "large"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-warm">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-6xl font-serif text-text-main leading-tight">
              Crafting <span className="italic font-normal">the Perfect</span> Service for Every Occasion.
            </h2>
          </div>
          <p className="text-text-main/60 max-w-sm mb-2 leading-relaxed">
            From formal corporate galas to vibrant wedding celebrations, we deliver professionalism and taste at every scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-white ${
                service.size === 'large' ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div className="aspect-[4/3] lg:aspect-auto h-full min-h-[400px] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold tracking-[0.3em] opacity-60 mb-2">{service.id}</span>
                <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-white/70 max-w-md mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                  View Service Details <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
            <div className="h-[1px] w-full bg-brand-primary/10 max-w-4xl mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl">
                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Serviceable Radii</p>
                    <p className="font-serif text-lg">100 KM</p>
                </div>
                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Menu Varieties</p>
                    <p className="font-serif text-lg">200+ Items</p>
                </div>
                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Daily Guests</p>
                    <p className="font-serif text-lg">Upto 5000</p>
                </div>
                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Food Standards</p>
                    <p className="font-serif text-lg">FSSAI Certified</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
