export default function Footer() {
  return (
    <footer className="bg-text-main text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-4">
            <div className="mb-8">
              <span className="text-3xl font-serif font-bold tracking-tight text-white block">Tasty Kitchen</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-semibold text-white/50">Caterers Bhubaneswar</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
              Crafting authentic flavors and memorable events since 2010. We are your premium catering partners for weddings, corporate meets, and special family celebrations across Odisha.
            </p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-4">Direct Contact</p>
            <p className="text-white font-serif mb-8 italic">tastycatering.pradeep20209@gmail.com</p>
            <div className="flex items-center gap-4">
               {/* Placeholders for social icons */}
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-text-main transition-all cursor-pointer">FB</div>
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-text-main transition-all cursor-pointer">IG</div>
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-text-main transition-all cursor-pointer">YT</div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white/40">Services</h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Wedding Catering</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Corporate Events</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Birthday Parties</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Traditional Pujas</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Private Dining</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white/40">Quick Links</h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Chef's Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Get Inquiry</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white/40">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6">Receive seasonal menu updates and event planning tips.</p>
            <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" />
                <button className="bg-white text-text-main px-6 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all">Join</button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Tasty Kitchen Caterers. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <p>Made with Care in Odisha</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
