import { useState } from 'react';
import PoojaCard from '../components/PoojaCard';
import { DivineGradients, SearchIcon } from '../components/Icons';

const ALL_POOJAS = [
  { id: '1', name: 'Satyanarayan Katha', description: 'A sacred pooja dedicated to Lord Vishnu, performed for prosperity and blessings in all endeavors.', price: 5100, durationMinutes: 180, panditsRequired: 1, category: 'Vishnu' },
  { id: '2', name: 'Griha Pravesh', description: 'House warming ceremony to bless your new home with peace, prosperity and positive energy.', price: 11000, durationMinutes: 240, panditsRequired: 2, category: 'Home' },
  { id: '3', name: 'Ganesh Pooja', description: 'Remove obstacles from your life with Lord Ganesha\'s blessings.', price: 3100, durationMinutes: 90, panditsRequired: 1, category: 'Ganesh' },
  { id: '4', name: 'Rudrabhishek', description: 'Powerful Shiva pooja with Panchamrit Abhishek. Brings health, wealth and removes negativity.', price: 7500, durationMinutes: 120, panditsRequired: 2, category: 'Shiva' },
  { id: '5', name: 'Hawan', description: 'Sacred fire ritual purifying the environment and invoking divine blessings.', price: 4500, durationMinutes: 120, panditsRequired: 1, category: 'General' },
  { id: '6', name: 'Navgrah Shanti', description: 'Balance all nine planets in your horoscope and nullify their negative effects.', price: 9000, durationMinutes: 300, panditsRequired: 2, category: 'Navagraha' },
  { id: '7', name: 'Marriage Pooja', description: 'Complete Vedic wedding ceremony with all rituals performed by experienced pandits.', price: 21000, durationMinutes: 480, panditsRequired: 3, category: 'Marriage' },
  { id: '8', name: 'Naamkaran', description: 'Name-giving ceremony for your newborn to bless them with a divine name.', price: 5100, durationMinutes: 120, panditsRequired: 1, category: 'Family' },
  { id: '9', name: 'Pitra Dosh Nivaran', description: 'Ancestral debt removal pooja to bring peace to departed souls and prosperity.', price: 8100, durationMinutes: 240, panditsRequired: 2, category: 'Pitru' },
  { id: '10', name: 'Bhoomi Poojan', description: 'Ground-breaking ceremony before construction for auspicious beginning.', price: 6100, durationMinutes: 90, panditsRequired: 1, category: 'Home' },
];

const CATEGORIES = ['All', 'Vishnu', 'Shiva', 'Ganesh', 'Home', 'Marriage', 'Family', 'General'];
const SORT_OPTIONS = ['Popular', 'Price: Low to High', 'Price: High to Low', 'Duration'];

export default function Poojas() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Popular');

  const filtered = ALL_POOJAS
    .filter(p => category === 'All' || p.category === category)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price;
      if (sort === 'Price: High to Low') return b.price - a.price;
      if (sort === 'Duration') return a.durationMinutes - b.durationMinutes;
      return 0;
    });

  return (
    <div className="min-h-screen pt-24 bg-sand text-brown font-sans">
      <DivineGradients />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-kumkum via-kumkum to-saffron py-14 px-4 text-center text-white relative overflow-hidden shadow-red">
        <div className="absolute right-0 bottom-0 translate-y-1/3 text-white/5 font-serif text-[280px] pointer-events-none select-none">
          ॐ
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2">Sacred Pooja Rituals</h1>
          <p className="text-white/80 text-sm max-w-md mx-auto">Choose from {ALL_POOJAS.length} traditional ceremonies performed by verified Vedic pandits</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Filters */}
        <div className="bg-white rounded-3xl border border-gold/15 shadow-card p-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brown/40">
              <SearchIcon size={16} />
            </span>
            <input
              type="text"
              placeholder="Search poojas..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input-divine pl-11 py-3 text-xs"
            />
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="input-divine md:w-52 py-3 text-xs cursor-pointer font-semibold"
          >
            {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                category === cat
                  ? 'bg-kumkum text-white border-kumkum shadow-md'
                  : 'bg-white text-brown/60 hover:bg-lotus hover:text-kumkum border-gold/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-up">
            {filtered.map(pooja => <PoojaCard key={pooja.id} {...pooja} />)}
          </div>
        ) : (
          <div className="text-center py-20 text-brown/40">
            <span className="text-5xl block mb-3">🪷</span>
            <p className="text-lg font-bold font-serif">No poojas found</p>
            <p className="text-xs">Try changing your search query or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
