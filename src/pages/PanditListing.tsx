import { useState, useEffect } from 'react';
import { Filter, Search } from 'lucide-react';
import Footer from '../components/Footer';
import PanditCard from '../components/PanditCard';
import { MandalaRing } from '../components/DecorativeElements';

const ALL_PANDITS = [
  { id: '1', name: 'Pt. Ramesh Kumar Sharma', experience: 25, languages: ['Hindi', 'Sanskrit', 'English'], rating: 4.9, reviews: 432, specialization: ['Griha Pravesh', 'Hawan', 'Satyanarayan Katha', 'Vivah'], location: 'Delhi NCR', isVerified: true, videoConsultation: true, priceRange: '₹2,000+' },
  { id: '2', name: 'Pt. Suresh Tripathi', experience: 18, languages: ['Hindi', 'Sanskrit', 'Marathi'], rating: 4.8, reviews: 287, specialization: ['Rudrabhishek', 'Shiv Pooja', 'Mahamrityunjaya'], location: 'Mumbai', isVerified: true, videoConsultation: true, priceRange: '₹1,500+' },
  { id: '3', name: 'Pt. Arvind Joshi', experience: 20, languages: ['Hindi', 'Sanskrit', 'Gujarati'], rating: 5.0, reviews: 611, specialization: ['Vastu Shanti', 'Navgrah', 'Bhoomi Pujan', 'Ganesh Pooja'], location: 'Ahmedabad', isVerified: true, videoConsultation: false, priceRange: '₹1,800+' },
  { id: '4', name: 'Pt. Dinesh Pandey', experience: 15, languages: ['Hindi', 'Sanskrit', 'Bhojpuri'], rating: 4.7, reviews: 198, specialization: ['Kaal Sarp', 'Pitra Dosh', 'Namkaran', 'Mundan'], location: 'Varanasi', isVerified: true, videoConsultation: true, priceRange: '₹1,200+' },
  { id: '5', name: 'Pt. Gopal Bhatt', experience: 30, languages: ['Hindi', 'Sanskrit', 'Kannada'], rating: 4.9, reviews: 524, specialization: ['Bhagwat Katha', 'Sundarkand', 'Vivah', 'Satyanarayan'], location: 'Bangalore', isVerified: true, videoConsultation: true, priceRange: '₹3,000+' },
  { id: '6', name: 'Pt. Shiva Kumar', experience: 12, languages: ['Hindi', 'Sanskrit', 'Tamil', 'Telugu'], rating: 4.6, reviews: 156, specialization: ['South Indian Rituals', 'Satyanarayan', 'Lakshmi Pooja'], location: 'Chennai', isVerified: true, videoConsultation: false, priceRange: '₹1,000+' },
];

const CITIES = ['All Cities', 'Delhi NCR', 'Mumbai', 'Ahmedabad', 'Varanasi', 'Bangalore', 'Chennai', 'Jaipur', 'Pune'];
const SPECS = ['All Specializations', 'Griha Pravesh', 'Vivah', 'Rudrabhishek', 'Navgrah', 'Vastu', 'Katha', 'Hawan'];

export default function PanditListing() {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('All Cities');
  const [spec, setSpec] = useState('All Specializations');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = ALL_PANDITS
    .filter(p => !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.specialization.some(s => s.toLowerCase().includes(search.toLowerCase())))
    .filter(p => city === 'All Cities' || p.location === city)
    .filter(p => spec === 'All Specializations' || p.specialization.some(s => s.includes(spec)))
    .filter(p => p.rating >= minRating)
    .sort((a, b) => sortBy === 'rating' ? b.rating - a.rating : sortBy === 'experience' ? b.experience - a.experience : b.reviews - a.reviews);

  return (
    <div className="min-h-screen flex flex-col pt-20">

      {/* Hero */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden text-center">
        <MandalaRing className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.04]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">Our Pandits</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-haldi">Perfect Pandit Ji</span></h1>
          <p className="text-lg text-white/80">All verified, experienced, and devoted to serving your spiritual needs</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-sand"><path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80Z" /></svg>
        </div>
      </section>

      <section className="flex-1 py-12 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Search + Sort Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 reveal">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brown/50" />
              <input type="text" placeholder="Search by name or specialization..." className="input-divine pl-11 w-full" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="flex gap-3">
              <select className="input-divine w-auto" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="rating">Sort: Top Rated</option>
                <option value="experience">Sort: Most Experienced</option>
                <option value="reviews">Sort: Most Reviews</option>
              </select>
              <button onClick={() => setShowFilters(!showFilters)} className={`flex items-center gap-2 px-5 py-3.5 rounded-2xl font-medium text-sm border transition-all ${showFilters ? 'bg-kumkum text-white border-kumkum' : 'bg-white border-gold/30 text-brown hover:border-gold'}`}>
                <Filter size={16} /> Filters
              </button>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="card-glass p-6 mb-8 animate-slide-down grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">City</label>
                <select className="input-divine w-full" value={city} onChange={e => setCity(e.target.value)}>
                  {CITIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Specialization</label>
                <select className="input-divine w-full" value={spec} onChange={e => setSpec(e.target.value)}>
                  {SPECS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Minimum Rating</label>
                <div className="flex gap-2">
                  {[0, 4, 4.5, 4.8].map(r => (
                    <button key={r} onClick={() => setMinRating(r)} className={`flex-1 py-3 rounded-xl border text-xs font-bold transition-all ${minRating === r ? 'bg-gradient-divine text-white border-transparent' : 'border-gold/30 text-brown hover:border-gold'}`}>
                      {r === 0 ? 'All' : `${r}+`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results header */}
          <div className="flex items-center justify-between mb-6 reveal">
            <p className="text-brown/70 text-sm font-medium"><span className="font-bold text-brown text-lg">{filtered.length}</span> Pandits Found</p>
            <div className="flex gap-2">
              {city !== 'All Cities' && <span className="badge-sacred">{city} <button onClick={() => setCity('All Cities')} className="ml-1 text-xs hover:text-kumkum">✕</button></span>}
              {spec !== 'All Specializations' && <span className="badge-sacred">{spec} <button onClick={() => setSpec('All Specializations')} className="ml-1 text-xs hover:text-kumkum">✕</button></span>}
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4 opacity-30">🙏</div>
              <h3 className="font-serif font-bold text-2xl text-brown mb-2">No Pandits Found</h3>
              <p className="text-brown/60">Try adjusting your filters to find available pandits.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <PanditCard {...p} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}