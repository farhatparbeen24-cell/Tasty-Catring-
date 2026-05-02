/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import MenuHighlights from './components/MenuHighlights';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-primary/10 selection:text-brand-primary">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <MenuHighlights />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />

      {/* Floating WhatsApp / Contact CTA */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <a 
          href="https://wa.me/919861120209" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group relative"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 bg-white text-text-main px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border luxury-border">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}

