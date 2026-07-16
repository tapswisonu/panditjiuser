import { useState, useEffect } from 'react';
import { MapPin, Search, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import PoojaCard from '../components/PoojaCard';
import CountdownTimer from '../components/CountdownTimer';
import Footer from '../components/Footer';
import { FloatingPetals, MandalaRing, IncenseSmoke, TempleSilhouette, RangoliCorner } from '../components/DecorativeElements';
import { OmIcon, StarFilledIcon } from '../components/SacredIcons';

// Mock Data
const MOCK_POOJAS = [
  { id: '1', name: 'Satyanarayan Katha', description: 'Sacred Vishnu pooja for prosperity, blessings and peace in the household.', price: 5100, durationMinutes: 180, panditsRequired: 1, rating: 4.9, reviews: 342, category: 'Household', image: 'https://images.unsplash.com/photo-1604928141064-207cea6f5822?q=80&w=600&auto=format&fit=crop', isPopular: true },
  { id: '2', name: 'Griha Pravesh', description: 'Divine house-warming ceremony performed by experienced Vedic pandits.', price: 11000, durationMinutes: 240, panditsRequired: 2, rating: 4.8, reviews: 184, category: 'Ceremony', image: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=600&auto=format&fit=crop', isPopular: true },
  { id: '3', name: 'Ganesh Pooja', description: 'Remove all obstacles with the blessings of Lord Ganesha.', price: 3100, durationMinutes: 90, panditsRequired: 1, rating: 5.0, reviews: 456, category: 'Festival', image: 'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=600&auto=format&fit=crop' },
];

const CATEGORIES = [
  { name: 'Griha Pravesh', icon: '🏠' },
  { name: 'Marriage', icon: '💍' },
  { name: 'Hawan', icon: '🔥' },
  { name: 'Navgrah Shanti', icon: '✨' },
  { name: 'Satyanarayan', icon: '🕉️' },
  { name: 'Online Pooja', icon: '💻' },
];

const TRUST_BADGES = [
  { icon: <StarFilledIcon size={24} color="#F4B400" />, label: '4.9/5 Rating' },
  { icon: <ShieldCheck size={24} color="#4CAF50" />, label: '5000+ Verified Pandits' },
  { icon: <MapPin size={24} color="#C62828" />, label: '100+ Cities' },
  { icon: <div className="text-2xl">🔒</div>, label: 'Secure Payments' },
];

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-20"> {/* PT-20 to account for fixed navbar */}
      
      {/* ── 1. PREMIUM HERO SECTION ────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none">
          <OmIcon size={600} color="#FFFFFF" />
        </div>
        
        <MandalaRing className="w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.04]" />
        
        {/* Subtle Radial Lighting overlay for that glowing effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(244,180,0,0.15)_0%,transparent_60%)] pointer-events-none"></div>

        <TempleSilhouette className="text-deep-maroon/20 h-48" />
        <IncenseSmoke className="bottom-0 left-1/4 h-64 w-32" />
        <IncenseSmoke className="bottom-0 right-1/4 h-64 w-32" />
        <FloatingPetals count={20} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col items-center text-center">
          
          <div className="animate-fade-up stagger-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-8 font-medium shadow-glow">
            <span className="text-gold">✨</span> Trusted by 100,000+ Devotees
          </div>

          <h1 className="animate-fade-up stagger-2 text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-6 hero-text-shadow">
            Experience Divine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-haldi to-white animate-gold-shimmer">
              Spiritual Harmony
            </span>
          </h1>

          <p className="animate-fade-up stagger-3 text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Book highly qualified, verified Vedic Pandit Ji for all your sacred rituals. <br className="hidden md:block" />
            Transparent pricing, complete samagri, and authentic ceremonies at your doorstep.
          </p>

          {/* Premium Search Bar */}
          <div className="animate-fade-up stagger-4 w-full max-w-4xl mx-auto mb-16 relative group">
            <div className="absolute inset-0 bg-gold blur-2xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full"></div>
            <div className="relative flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-xl border border-white/30 rounded-[2rem] p-2 shadow-2xl">
              
              {/* Category Dropdown */}
              <div className="w-full md:w-auto border-b md:border-b-0 md:border-r border-white/20 px-4 py-3 flex items-center justify-between cursor-pointer">
                <select 
                  className="bg-transparent text-white/90 text-sm font-medium outline-none cursor-pointer appearance-none pr-8 w-full md:w-36"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="All" className="text-deep-brown">All Poojas</option>
                  <option value="Home" className="text-deep-brown">Home Rituals</option>
                  <option value="Temple" className="text-deep-brown">Temple Poojas</option>
                  <option value="Online" className="text-deep-brown">e-Poojas</option>
                </select>
                <span className="text-white/70 pointer-events-none -ml-6 text-xs">▼</span>
              </div>

              {/* Search Input */}
              <div className="flex-1 flex items-center px-4 py-3 w-full">
                <Search size={20} className="text-white/70 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search for Griha Pravesh, Satyanarayan Katha..." 
                  className="w-full bg-transparent text-white placeholder-white/60 outline-none text-base"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="ml-2 text-white/70 hover:text-white transition-colors" title="Voice Search">
                  🎙️
                </button>
              </div>

              {/* Search CTA */}
              <button 
                onClick={() => navigate('/poojas')}
                className="w-full md:w-auto mt-2 md:mt-0 bg-gradient-gold text-deep-brown font-bold text-sm px-8 py-4 rounded-full hover:scale-105 transition-all shadow-gold flex items-center justify-center gap-2 group/btn"
              >
                Find Pandit Ji
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Trust Badges - Premium Glass Cards */}
          <div className="animate-fade-up stagger-5 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  {badge.icon}
                </div>
                <span className="text-white/90 text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>

        </div>
        
        {/* Bottom curve divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-sand">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.35,189.92,97.63,235.8,83.84,279.7,70.5,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* ── 2. POPULAR CATEGORIES ────────────────────────────────────────── */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <RangoliCorner position="top-left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center mb-16 reveal">
            <h2 className="section-title">Sacred Offerings</h2>
            <div className="gold-divider max-w-[120px] mx-auto mt-6"></div>
            <p className="section-subtitle mt-4 max-w-2xl mx-auto">Explore our wide range of authentic Vedic rituals performed with devotion</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 reveal">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="category-card group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="feature-icon-wrap text-3xl">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-brown text-sm">{cat.name}</h3>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ── 3. FEATURED POOJAS ──────────────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 reveal">
            <div>
              <span className="section-tag">Most Booked</span>
              <h2 className="section-title">Trending Poojas</h2>
            </div>
            <Link to="/poojas" className="btn-ghost mt-4 md:mt-0">
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {MOCK_POOJAS.map((pooja, i) => (
              <div key={pooja.id} className="reveal-up" style={{ transitionDelay: `${i * 150}ms` }}>
                {/* Note: In a real app we'd update PoojaCard component. Using it as is for now, but wrapped in animation */}
                <PoojaCard {...pooja} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS (Timeline) ──────────────────────────────────── */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-sacred-pattern opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20 reveal">
            <span className="section-tag">Simple & Secure</span>
            <h2 className="section-title">How It Works</h2>
            <div className="gold-divider max-w-[120px] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Select Pooja', desc: 'Browse our list of verified poojas and rituals.', icon: '🔍' },
              { step: 2, title: 'Choose Time', desc: 'Pick a date and time that suits your muhurat.', icon: '📅' },
              { step: 3, title: 'Secure Payment', desc: 'Pay online securely to confirm your booking.', icon: '💳' },
              { step: 4, title: 'Pandit Arrives', desc: 'Experienced Pandit Ji arrives with complete samagri.', icon: '🙏' },
            ].map((s, i) => (
              <div key={i} className="timeline-step reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="timeline-step-number">{s.step}</div>
                {i < 3 && <div className="timeline-connector hidden md:block"></div>}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold/10 w-full mt-4 hover:-translate-y-2 transition-transform">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-brown text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-brown/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. UPCOMING FESTIVALS ────────────────────────────────────────── */}
      <section className="py-24 bg-maroon-gradient text-white relative overflow-hidden">
        <MandalaRing className="w-[600px] h-[600px] -right-40 top-0 text-white opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 reveal-left">
            <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">Upcoming Festival</span>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">Maha Shivaratri</h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Book a special Rudrabhishek or Shiva Pooja for your home. Our expert Pandits will perform the rituals according to authentic Vedic traditions.
            </p>
            <div className="flex gap-4">
              <button className="btn-gold">Book Rudrabhishek</button>
              <button className="btn-outline-gold border-white text-white hover:bg-white hover:text-kumkum">Learn More</button>
            </div>
          </div>

          <div className="lg:w-1/2 reveal-right w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl text-center shadow-2xl">
              <CountdownTimer targetDate="2026-03-08T00:00:00" title="Time Remaining" />
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. FOOTER ────────────────────────────────────────────────────── */}
      <Footer />
      
    </div>
  );
}