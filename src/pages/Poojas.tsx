import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import PoojaCard from '../components/PoojaCard';
import Footer from '../components/Footer';
import { MandalaRing } from '../components/DecorativeElements';

const ALL_POOJAS = [
  { id: '1', name: 'Satyanarayan Katha', description: 'A sacred pooja dedicated to Lord Vishnu, performed for prosperity and blessings.', price: 5100, durationMinutes: 180, panditsRequired: 1, category: 'Vishnu', rating: 4.9, reviews: 342, isPopular: true },
  { id: '2', name: 'Griha Pravesh', description: 'House warming ceremony to bless your new home with peace and positive energy.', price: 11000, durationMinutes: 240, panditsRequired: 2, category: 'Home', rating: 4.8, reviews: 184, isPopular: true },
  { id: '3', name: 'Ganesh Pooja', description: 'Remove obstacles from your life with Lord Ganesha\'s blessings.', price: 3100, durationMinutes: 90, panditsRequired: 1, category: 'Ganesh', rating: 5.0, reviews: 456 },
  { id: '4', name: 'Rudrabhishek', description: 'Powerful Shiva pooja with Panchamrit Abhishek. Brings health, wealth and removes negativity.', price: 7500, durationMinutes: 120, panditsRequired: 2, category: 'Shiva', rating: 4.9, reviews: 267 },
  { id: '5', name: 'Hawan & Yagya', description: 'Sacred fire ritual purifying the environment and invoking divine blessings.', price: 4500, durationMinutes: 120, panditsRequired: 1, category: 'General', rating: 4.8, reviews: 312 },
  { id: '6', name: 'Navgrah Shanti', description: 'Balance all nine planets in your horoscope and nullify their negative effects.', price: 9000, durationMinutes: 300, panditsRequired: 2, category: 'Navagraha', rating: 4.7, reviews: 143 },
  { id: '7', name: 'Marriage Ceremony', description: 'Complete Vedic wedding ceremony with all rituals performed by experienced pandits.', price: 21000, durationMinutes: 480, panditsRequired: 3, category: 'Marriage', rating: 4.9, reviews: 198, isPopular: true },
  { id: '8', name: 'Namkaran Ceremony', description: 'Name-giving ceremony for your newborn to bless them with a divine name.', price: 5100, durationMinutes: 120, panditsRequired: 1, category: 'Family', rating: 4.8, reviews: 89 },
  { id: '9', name: 'Pitra Dosh Nivaran', description: 'Ancestral debt removal pooja to bring peace to departed souls and prosperity.', price: 8100, durationMinutes: 240, panditsRequired: 2, category: 'Pitru', rating: 4.7, reviews: 56 },
  { id: '10', name: 'Bhoomi Poojan', description: 'Ground-breaking ceremony before construction for auspicious beginning.', price: 6100, durationMinutes: 90, panditsRequired: 1, category: 'Home', rating: 4.8, reviews: 167 },
  { id: '11', name: 'Lakshmi Pooja', description: 'Invite the goddess of wealth and prosperity into your home for abundance.', price: 3100, durationMinutes: 90, panditsRequired: 1, category: 'Goddess', rating: 4.9, reviews: 388 },
  { id: '12', name: 'Durga Pooja', description: 'Celebrate the divine feminine and invoke Goddess Durga\'s blessings.', price: 5999, durationMinutes: 180, panditsRequired: 2, category: 'Goddess', rating: 4.8, reviews: 201 },
];

const CATEGORIES = ['All', 'Vishnu', 'Shiva', 'Ganesh', 'Goddess', 'Home', 'Marriage', 'Family', 'General', 'Navagraha'];
const SORT_OPTIONS = ['Most Popular', 'Price: Low to High', 'Price: High to Low', 'Duration'];

export default function Poojas() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Most Popular');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = ALL_POOJAS
    .filter(p => category === 'All' || p.category === category)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price;
      if (sort === 'Price: High to Low') return b.price - a.price;
      if (sort === 'Duration') return a.durationMinutes - b.durationMinutes;
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    });

  return (
    <div className="min-h-screen flex flex-col pt-20">

      {/* Hero */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden text-center">
        <MandalaRing className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.04]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">Sacred Ceremonies</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Sacred Pooja <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-haldi">Rituals</span></h1>
          <p className="text-lg text-white/80">Choose from {ALL_POOJAS.length}+ traditional ceremonies. All pandits verified & certified.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-sand"><path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80Z" /></svg>
        </div>
      </section>

      <section className="flex-1 py-12 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Filters */}
          <div className="card-glass p-4 mb-8 flex flex-col md:flex-row gap-4 items-center reveal">
            <div className="w-full flex-1 relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brown/40" />
              <input type="text" placeholder="Search poojas..." value={search} onChange={e => setSearch(e.target.value)} className="input-divine pl-11 py-3.5 text-sm w-full" />
            </div>
            <select value={sort} onChange={e => setSort(e.target.value)} className="input-divine md:w-52 py-3.5 text-sm cursor-pointer font-medium">
              {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>

          {/* Categories */}
          <div className="flex gap-2 flex-wrap mb-10 reveal">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${category === cat ? 'btn-divine shadow-sm' : 'bg-white border border-gold/20 text-brown hover:border-gold hover:shadow-card'}`}>
                {cat}
              </button>
            ))}
          </div>

          <p className="text-brown/60 text-sm mb-6 reveal"><span className="font-bold text-brown text-lg">{filtered.length}</span> poojas found</p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pooja, i) => (
                <div key={pooja.id} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <PoojaCard {...pooja} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-6xl mb-4 opacity-30">🪷</div>
              <p className="text-xl font-bold font-serif text-brown">No poojas found</p>
              <p className="text-brown/60 text-sm mt-2">Try changing your search query or category filter</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}