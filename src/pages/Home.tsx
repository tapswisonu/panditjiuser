import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PoojaCard from '../components/PoojaCard';

const FLOATING = [
  { emoji: '🪷', top: '10%', left: '5%',  delay: '0s',   size: 'text-5xl', anim: 'animate-float' },
  { emoji: '🌸', top: '20%', right: '8%', delay: '1s',   size: 'text-4xl', anim: 'animate-float-r' },
  { emoji: '🔔', top: '45%', left: '3%',  delay: '0.5s', size: 'text-3xl', anim: 'animate-float' },
  { emoji: '🕯️', top: '55%', right: '5%', delay: '2s',   size: 'text-4xl', anim: 'animate-diya' },
  { emoji: '🌺', top: '70%', left: '8%',  delay: '1.5s', size: 'text-3xl', anim: 'animate-float-r' },
  { emoji: '🪔', top: '15%', right: '20%',delay: '3s',   size: 'text-3xl', anim: 'animate-diya' },
  { emoji: '✨', top: '80%', right: '10%',delay: '0.8s', size: 'text-2xl', anim: 'animate-breathe' },
];

const TRUST = [
  { icon: '✅', label: 'Verified Pandits', value: '500+' },
  { icon: '📍', label: 'Cities Served',    value: '50+' },
  { icon: '⭐', label: 'Average Rating',   value: '4.9' },
  { icon: '⚡', label: 'Instant Booking',  value: '< 2 min' },
];

const MOCK_POOJAS = [
  { id: '1', name: 'Satyanarayan Katha', description: 'Sacred Vishnu pooja for prosperity, blessings and peace in the household.', price: 5100, durationMinutes: 180, panditsRequired: 1, rating: 4.9, reviews: 342 },
  { id: '2', name: 'Griha Pravesh',      description: 'Divine house-warming ceremony performed by experienced Vedic pandits.', price: 11000, durationMinutes: 240, panditsRequired: 2, rating: 4.8, reviews: 184 },
  { id: '3', name: 'Ganesh Pooja',       description: 'Remove all obstacles with the blessings of Lord Ganesha.', price: 3100, durationMinutes: 90, panditsRequired: 1, rating: 5.0, reviews: 456 },
  { id: '4', name: 'Rudrabhishek',       description: 'Powerful Shiva pooja with Panchamrit Abhishek for divine grace.', price: 7500, durationMinutes: 120, panditsRequired: 2, rating: 4.9, reviews: 267 },
  { id: '5', name: 'Marriage Pooja',     description: 'Complete Vedic wedding ceremony with all sacred rituals.', price: 21000, durationMinutes: 480, panditsRequired: 3, rating: 4.9, reviews: 198 },
  { id: '6', name: 'Hawan',              description: 'Sacred fire ritual purifying the environment and attracting positive energy.', price: 4500, durationMinutes: 120, panditsRequired: 1, rating: 4.8, reviews: 312 },
];

const TESTIMONIALS = [
  { name: 'Priya Sharma', city: 'Mumbai', text: 'The experience was divine. Pt. Ramesh conducted our Griha Pravesh with so much devotion. Highly recommended!', rating: 5, pooja: 'Griha Pravesh' },
  { name: 'Rajesh Patel', city: 'Ahmedabad', text: 'Transparent pricing, punctual pandit, and flawless ceremony. This is how a pooja should be!', rating: 5, pooja: 'Satyanarayan Katha' },
  { name: 'Sunita Agarwal', city: 'Jaipur', text: 'Beautiful online booking experience. The Rudrabhishek was conducted perfectly. My family was in tears of joy.', rating: 5, pooja: 'Rudrabhishek' },
];

const FEATURES = [
  { icon: '🔍', title: 'Verified Pandits', desc: 'Every pandit is background-checked, document-verified and trained in Vedic traditions.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. Full price disclosed before you book. No surprises.' },
  { icon: '📱', title: 'Book in Minutes', desc: 'Simple 5-step booking. Choose pooja, date, location and pay online instantly.' },
  { icon: '🌍', title: 'Online & Home Visit', desc: 'Book for your home, at a temple, or join digitally from anywhere in the world.' },
];

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-sand overflow-hidden">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6D1515] via-[#C62828] to-[#FF8F00]"></div>

        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute top-1/2 left-1/2 w-px h-full opacity-5"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,215,0,0.8), transparent)',
                transform: `rotate(${i * 30}deg) translateY(-50%)`,
                transformOrigin: 'top center',
                animation: `lightRay ${6 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}></div>
          ))}
        </div>

        {/* Om watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-white opacity-5 font-serif animate-breathe"
            style={{ fontSize: 'clamp(200px,30vw,400px)', fontFamily: 'Cormorant Garamond, serif' }}>
            ॐ
          </span>
        </div>

        {/* Mandala Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] opacity-[0.07] animate-spin-slow pointer-events-none">
          <div className="w-full h-full rounded-full border-4 border-gold"></div>
          <div className="absolute inset-4 rounded-full border-2 border-haldi"></div>
          <div className="absolute inset-8 rounded-full border border-saffron"></div>
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute top-1/2 left-1/2 w-0.5 h-1/2 bg-gold opacity-50"
              style={{ transform: `rotate(${i * 30}deg)`, transformOrigin: 'top center', marginLeft: '-1px' }}></div>
          ))}
        </div>

        {/* Floating elements */}
        {FLOATING.map((el, i) => (
          <div key={i} className={`absolute pointer-events-none ${el.size} ${el.anim}`}
            style={{ top: el.top, left: el.left, right: el.right, animationDelay: el.delay }}>
            {el.emoji}
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-up stagger-1 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-white/90 text-sm mb-8">
            <span className="animate-breathe text-lg">🪷</span>
            <span>Trusted by 50,000+ devotees across India</span>
          </div>

          <h1 className="animate-fade-up stagger-2 text-5xl md:text-7xl font-bold text-white leading-tight mb-6 font-serif">
            Book Verified<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-haldi to-sand">
              Pandit Ji
            </span> Online
          </h1>

          <p className="animate-fade-up stagger-3 text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing • Certified pandits • Instant booking<br />
            For home visits, temple ceremonies, or online poojas
          </p>

          {/* Search Bar */}
          <div className="animate-fade-up stagger-4 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-12">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Search pooja (e.g. Griha Pravesh...)"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-5 py-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/30 text-brown placeholder-brown/50 outline-none focus:bg-white transition-all text-sm shadow-xl"
              />
            </div>
            <button onClick={() => navigate('/poojas')}
              className="btn-outline-gold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-brown font-semibold px-8 py-4 rounded-2xl whitespace-nowrap">
              Find Pandits →
            </button>
          </div>

          {/* Trust Badges */}
          <div className="animate-fade-up stagger-5 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {TRUST.map(t => (
              <div key={t.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-center">
                <div className="text-xl mb-1">{t.icon}</div>
                <div className="text-white font-bold text-lg leading-none">{t.value}</div>
                <div className="text-white/70 text-xs mt-0.5">{t.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFF8EE"/>
          </svg>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────── */}
      <section className="py-20 bg-sand">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="section-title">India's Most Trusted<br />Pandit Booking Platform</h2>
            <div className="gold-divider max-w-24 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`card-divine p-7 text-center group animate-fade-up stagger-${i+1}`}>
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-lotus to-sand flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-card">
                  {f.icon}
                </div>
                <h3 className="font-bold text-brown mb-2 text-lg font-serif">{f.title}</h3>
                <p className="text-brown/60 text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-4 h-0.5 w-12 mx-auto rounded-full bg-gradient-to-r from-kumkum to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POOJA PACKAGES ───────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #FFF8EE 0%, #FDECEC 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">Sacred Rituals</p>
            <h2 className="section-title">Popular Pooja Packages</h2>
            <div className="gold-divider max-w-24 mx-auto mt-4"></div>
            <p className="section-subtitle mt-4 max-w-xl mx-auto">Carefully curated Vedic rituals performed by certified pandits with complete samagri</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {MOCK_POOJAS.map(p => <PoojaCard key={p.id} {...p} />)}
          </div>

          <div className="text-center">
            <Link to="/poojas" className="btn-divine inline-flex items-center gap-2">
              View All Poojas <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-20 bg-sand relative overflow-hidden">
        <div className="om-watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">ॐ</div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">Devotee Stories</p>
            <h2 className="section-title">What Our Devotees Say</h2>
            <div className="gold-divider max-w-24 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`card-divine p-7 relative animate-fade-up stagger-${i+1}`}>
                {/* Decorative quote */}
                <div className="absolute top-5 right-6 text-5xl text-gold/20 font-serif leading-none select-none">"</div>
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => <span key={j} className="text-haldi">★</span>)}
                </div>
                <p className="text-brown/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kumkum to-saffron flex items-center justify-center text-white font-bold text-lg border-2 border-gold/30 shadow-gold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-brown font-serif">{t.name}</p>
                    <p className="text-xs text-saffron">{t.pooja} • {t.city}</p>
                  </div>
                </div>
                {/* Lotus corner */}
                <div className="absolute bottom-4 right-5 text-2xl opacity-20 select-none">🪷</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6D1515] via-kumkum to-[#FF8F00]"></div>
        {/* Om */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-white opacity-[0.04] font-serif animate-breathe" style={{ fontSize: '400px' }}>ॐ</span>
        </div>
        {/* Hanging bells */}
        <div className="absolute top-0 left-0 right-0 flex justify-around px-8">
          {['🔔','🔔','🔔','🔔','🔔'].map((b, i) => (
            <div key={i} className="animate-float text-2xl opacity-60" style={{ animationDelay: `${i * 0.4}s` }}>{b}</div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="text-haldi font-semibold tracking-widest uppercase text-sm mb-4">Start Your Spiritual Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Book Your Sacred Ritual Today</h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">Join 50,000+ devotees who trust Pandit Ji for all their spiritual needs — with transparent pricing and verified pandits</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/poojas"
              className="inline-flex items-center gap-2 bg-white text-kumkum font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-glow">
              <span className="text-xl">🪔</span> Browse Poojas
            </Link>
            <Link to="/auth"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
              Create Free Account
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer style={{ background: 'linear-gradient(135deg, #1A0A00, #3E2723, #4E342E)' }} className="text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Gold divider */}
          <div className="gold-divider mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl animate-breathe">🪷</span>
                <div>
                  <p className="text-xl font-bold font-serif text-gold">ॐ Pandit Ji</p>
                  <p className="text-xs text-saffron tracking-widest">DIVINE SERVICES</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                India's most trusted platform for booking verified Pandits for all sacred rituals. 
                Transparent pricing, authentic pandits, and instant booking.
              </p>
              <div className="flex gap-3 mt-5">
                {['📘','📷','🐦','▶️'].map((s, i) => (
                  <button key={i} className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold transition-all duration-200 flex items-center justify-center text-sm">
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gold mb-4 font-serif">Services</h3>
              <ul className="space-y-2 text-white/50 text-sm">
                {['Griha Pravesh', 'Marriage Pooja', 'Satyanarayan Katha', 'Rudrabhishek', 'Hawan & Yagya'].map(s => (
                  <li key={s} className="hover:text-saffron cursor-pointer transition-colors">{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gold mb-4 font-serif">Quick Links</h3>
              <ul className="space-y-2 text-white/50 text-sm">
                {['About Us', 'Find Pandit', 'Become a Pandit', 'Blog', 'Support'].map(l => (
                  <li key={l} className="hover:text-saffron cursor-pointer transition-colors">{l}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="gold-divider mb-6"></div>
          <div className="flex flex-col md:flex-row items-center justify-between text-white/30 text-xs gap-3">
            <span>© 2025 Pandit Ji. All rights reserved. Made with 🪷 in India.</span>
            <span>Privacy Policy • Terms of Service • Refund Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
