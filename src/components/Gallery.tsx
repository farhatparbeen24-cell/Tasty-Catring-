import { motion } from 'motion/react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop",
    title: "Plated Excellence",
    category: "Main Course"
  },
  {
    url: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2069&auto=format&fit=crop",
    title: "Vibrant Starters",
    category: "Appetizers"
  },
  {
    url: "https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=1974&auto=format&fit=crop",
    title: "Elegant Table Settings",
    category: "Decor"
  },
  {
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    title: "Refreshing Beverages",
    category: "Bar"
  },
  {
    url: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1974&auto=format&fit=crop",
    title: "Artisanal Desserts",
    category: "Sweets"
  },
  {
    url: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=1974&auto=format&fit=crop",
    title: "Buffet Presentation",
    category: "Service"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:after:mb-16">
          <span className="text-brand-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Visual Journey</span>
          <h2 className="text-3xl md:text-5xl font-serif text-text-main mb-6">Capturing the <span className="italic">Essence</span> of Taste.</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-70 border-b border-white/30 pb-2 mb-2 w-fit">{image.category}</span>
                <h3 className="text-lg font-serif font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
