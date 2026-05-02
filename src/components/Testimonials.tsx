import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Mohanty",
    role: "Groom's Father",
    text: "Truly impressive service at my son's wedding in Janpath, Bhubaneswar. The Mutton Kasa and the starter platter were the talk of the evening. Professional staff and very clean setup.",
    rating: 5
  },
  {
    name: "Sneha Pattnaik",
    role: "Corporate Event Manager",
    text: "We hired Tasty Kitchen for our company's annual meet in Puri. The logistics were flawless, and the quality of food was consistent for all 400 guests. Highly recommended for corporate catering.",
    rating: 5
  },
  {
    name: "Arun Das",
    role: "Birthday Host",
    text: "Managed my daughter's first birthday party perfectly. The themes they suggested for the food stalls were creative and the kids loved the pasta and dessert bar.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-bg-warm overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-brand-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Kind Words</span>
          <h2 className="text-4xl md:text-6xl font-serif text-text-main leading-tight mb-4">
            Hear From Our <span className="italic font-normal">Happy</span> Guests.
          </h2>
          <div className="flex items-center gap-1 text-brand-accent">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <span className="ml-2 text-xs font-bold uppercase tracking-widest text-text-main/40">Highly Rated on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-8 right-10 text-brand-primary/10">
                <Quote size={60} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 text-brand-accent mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-text-main/70 italic text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center font-serif font-bold text-brand-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-text-main leading-none">{testimonial.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest font-semibold opacity-40 mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-between items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            {/* These would be logos of corporate clients or venues */}
            <span className="text-2xl font-serif font-bold">Infratech Ltd</span>
            <span className="text-2xl font-serif font-bold">Odisha Tourism</span>
            <span className="text-2xl font-serif font-bold">Royal Palm Resort</span>
            <span className="text-2xl font-serif font-bold">Tech Park Cuttack</span>
            <span className="text-2xl font-serif font-bold">Saffron Weddings</span>
        </div>

      </div>
    </section>
  );
}
