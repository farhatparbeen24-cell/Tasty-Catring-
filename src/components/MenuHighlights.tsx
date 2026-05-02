import { motion } from 'motion/react';

const categories = [
  {
    title: "The Starters",
    items: [
      { name: "Paneer Malai Tikka", desc: "Creamy clay-oven roasted cottage cheese" },
      { name: "Crispy Baby Corn", desc: "Szechuan style spiced crunchy baby corn" },
      { name: "Galouti Kebab", desc: "Melt-in-mouth minced mutton with secret spices" },
      { name: "Prawn Butterfly", desc: "Golden fried jumbo prawns with citrus dip" }
    ]
  },
  {
    title: "Odisha Specials",
    items: [
      { name: "Authentic Dalma", desc: "Traditional lentil with farm fresh vegetables" },
      { name: "Chhena Poda", desc: "Caramelized cottage cheese dessert" },
      { name: "Machha Besara", desc: "Fish in mustard gravy with sun-dried mango" },
      { name: "Mutton Kasa", desc: "Slow-cooked goat meat in thick spicy gravy" }
    ]
  },
  {
    title: "Grand Main Course",
    items: [
      { name: "Dum Handi Biryani", desc: "Fragrant long-grain basmati with spices" },
      { name: "Butter Chicken Masala", desc: "Tandoori chicken in rich cashew tomato gravy" },
      { name: "Veg Navratan Korma", desc: "Nine variants of gems in creamy white sauce" },
      { name: "Assorted Bread Basket", desc: "Naan, Kulcha, and Missi Roti selection" }
    ]
  },
  {
    title: "Sweet Delights",
    items: [
      { name: "Kesaria Rasmalai", desc: "Spongy milk patties in saffron thickened milk" },
      { name: "Hot Gulab Jamun", desc: "Served with a drizzle of cardamon syrup" },
      { name: "Baked Gajar Halwa", desc: "Seasonal carrot fudge with crushed pistachios" },
      { name: "Ice Cream Parlor", desc: "Live counter with artisanal flavors" }
    ]
  }
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-brand-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">A Glimpse of our Craft</span>
          <h2 className="text-3xl md:text-6xl font-serif text-text-main leading-tight mb-4 md:mb-6">
            A Symphony of <span className="italic">Flavors</span>
          </h2>
          <p className="text-text-main/60 leading-relaxed">
            While we customize every menu to your exact preferences, here is a showcase of our most requested signature dishes that define high-end hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIdx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-b luxury-border pb-8 last:pb-0"
            >
              <h3 className="text-2xl font-serif font-bold text-brand-primary mb-8 flex items-center gap-4">
                <span className="h-[1px] w-8 bg-brand-primary/30" />
                {category.title}
              </h3>
              <div className="space-y-8">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-serif font-semibold text-text-main">{item.name}</h4>
                      <p className="text-xs text-text-main/50 mt-1 uppercase tracking-wider">{item.desc}</p>
                    </div>
                    <div className="h-[1px] flex-1 border-b border-dotted luxury-border mx-4 self-center" />
                    <div className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-accent/40" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-brand-primary text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Want a Custom Menu for your Event?</h3>
                    <p className="opacity-80">Our chefs are experts at creating dietary-specific and theme-focused menus that fit your budget.</p>
                </div>
                <a href="mailto:tastycatering.pradeep20209@gmail.com?subject=Custom Menu Inquiry - Tasty Kitchen Caterers" className="bg-white text-brand-primary px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-opacity-90 transition-all whitespace-nowrap">
                    Request Custom Menu
                </a>
            </div>
        </div>

      </div>
    </section>
  );
}
