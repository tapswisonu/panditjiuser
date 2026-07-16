import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import { MandalaRing } from '../components/DecorativeElements';
import PoojaCard from '../components/PoojaCard';

const ALL_SERVICES = [
  { id: '1', name: 'Satyanarayan Katha', description: 'Sacred Vishnu pooja for prosperity, blessings and peace in the household.', price: 5100, durationMinutes: 180, panditsRequired: 1, rating: 4.9, reviews: 342, category: 'Katha', image: 'https://images.unsplash.com/photo-1604928141064-207cea6f5822?q=80&w=600', isPopular: true },
  { id: '2', name: 'Griha Pravesh', description: 'Divine house-warming ceremony performed by experienced Vedic pandits.', price: 11000, durationMinutes: 240, panditsRequired: 2, rating: 4.8, reviews: 184, category: 'Ceremony', isPopular: true },
  { id: '3', name: 'Ganesh Pooja', description: 'Remove all obstacles with the blessings of Lord Ganesha.', price: 3100, durationMinutes: 90, panditsRequired: 1, rating: 5.0, reviews: 456, category: 'Festival' },
  { id: '4', name: 'Rudrabhishek', description: 'Powerful Shiva pooja with Panchamrit Abhishek for divine grace.', price: 7500, durationMinutes: 120, panditsRequired: 2, rating: 4.9, reviews: 267, category: 'Shiv' },
  { id: '5', name: 'Marriage Ceremony', description: 'Complete Vedic wedding ceremony with all sacred rituals.', price: 21000, durationMinutes: 480, panditsRequired: 3, rating: 4.9, reviews: 198, category: 'Vivah', isPopular: true },
  { id: '6', name: 'Hawan & Yagya', description: 'Sacred fire ritual purifying the environment and attracting positive energy.', price: 4500, durationMinutes: 120, panditsRequired: 1, rating: 4.8, reviews: 312, category: 'Purification' },
  { id: '7', name: 'Navgrah Shanti', description: 'Pacify the nine planets to remove obstacles and bring harmony.', price: 6500, durationMinutes: 180, panditsRequired: 2, rating: 4.7, reviews: 143, category: 'Graha' },
  { id: '8', name: 'Vastu Shanti', description: 'Harmonise your home or office with Vedic Vastu principles.', price: 6000, durationMinutes: 180, panditsRequired: 1, rating: 4.8, reviews: 201, category: 'Vastu' },
  { id: '9', name: 'Lakshmi Pooja', description: 'Invite the goddess of wealth and prosperity into your home.', price: 3100, durationMinutes: 90, panditsRequired: 1, rating: 4.9, reviews: 388, category: 'Goddess' },
];

const CATEGORIES = ['All', 'Katha', 'Ceremony', 'Festival', 'Shiv', 'Vivah', 'Purification', 'Graha', 'Vastu', 'Goddess'];

export default function Services() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = ALL_SERVICES.filter(s => activeCategory === 'All' || s.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <section className="relative py-20 bg-hero-gradient overflow-hidden text-center">
        <MandalaRing className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.04]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">All Services</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-haldi">Pooja Services</span></h1>
          <p className="text-lg text-white/80">Browse all 24+ authentic Vedic rituals. Transparent pricing. Complete samagri included.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-sand"><path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80Z" /></svg>
        </div>
      </section>

      <section className="flex-1 py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 mb-12 justify-center reveal">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCategory === cat ? 'btn-divine shadow-sm' : 'bg-white border border-gold/20 text-brown hover:border-gold hover:shadow-card'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((s, i) => (
              <div key={s.id} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <PoojaCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}