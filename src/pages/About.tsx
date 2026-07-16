import { useEffect } from 'react';
import { Check } from 'lucide-react';
import Footer from '../components/Footer';
import { MandalaRing, RangoliCorner } from '../components/DecorativeElements';
import { OmIcon } from '../components/SacredIcons';

const STATS = [
  { value: '50,000+', label: 'Happy Devotees', icon: '🙏' },
  { value: '5,000+', label: 'Verified Pandits', icon: '🕉️' },
  { value: '100+', label: 'Cities Covered', icon: '📍' },
  { value: '24+', label: 'Pooja Types', icon: '🪔' },
];

const TEAM = [
  { name: 'Pt. Ramesh Sharma', role: 'Head Pandit & Founder', exp: '30+ Years', speciality: 'Vedic Rituals & Yagya', initial: 'R' },
  { name: 'Pt. Suresh Dwivedi', role: 'Senior Ritual Advisor', exp: '25+ Years', speciality: 'Marriage & Griha Pravesh', initial: 'S' },
  { name: 'Pt. Arvind Joshi', role: 'Vastu & Astrology Expert', exp: '20+ Years', speciality: 'Vastu Shastra & Navgrah', initial: 'A' },
];

const VALUES = [
  { title: 'Authenticity', icon: '🕉️', desc: 'Every ritual performed according to authentic Vedic scriptures and traditions.' },
  { title: 'Transparency', icon: '💎', desc: 'Complete price breakdowns before booking. No hidden charges, ever.' },
  { title: 'Devotion', icon: '🪷', desc: 'Our pandits treat every ceremony with the same reverence as their own family rituals.' },
  { title: 'Trust', icon: '🛡️', desc: 'Rigorous verification, background checks, and training for every pandit on our platform.' },
];

const JOURNEY = [
  { year: '2018', title: 'The Beginning', desc: 'Founded in Varanasi with a vision to connect devotees with authentic Vedic pandits.' },
  { year: '2019', title: 'First 500 Pandits', desc: 'Onboarded 500 verified pandits across 10 major Indian cities.' },
  { year: '2021', title: 'Online Poojas', desc: 'Launched video pooja services to reach devotees worldwide during the pandemic.' },
  { year: '2023', title: '50,000 Devotees', desc: 'Crossed 50,000 happy customers, expanding to 100+ cities.' },
  { year: '2025', title: 'Pan-India Leader', desc: "India's most trusted spiritual booking platform with award-winning service." },
];

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-20">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative py-24 md:py-32 bg-hero-gradient overflow-hidden text-center">
        <MandalaRing className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.04]" />
        <div className="absolute inset-0 opacity-[0.04] flex items-center justify-center pointer-events-none">
          <OmIcon size={400} color="white" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Connecting Devotees <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-haldi">With Divine Grace</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Since 2018, we've been on a sacred mission — making authentic Vedic rituals accessible to every Indian household, wherever they are.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-sand">
            <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80Z" />
          </svg>
        </div>
      </section>

      {/* ── MISSION & VISION ───────────────────────── */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <RangoliCorner position="top-right" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <span className="section-tag">Our Purpose</span>
            <h2 className="section-title mb-6">Spirituality, <br />Made Accessible</h2>
            <p className="section-subtitle mb-6">
              In a world moving at digital speed, sacred traditions must not be left behind. We built Pandit Ji Online to bridge the ancient and the modern — so that every devotee can access authentic, verified Vedic services at their convenience.
            </p>
            <p className="section-subtitle">
              From a simple Ganesh pooja to a grand Bhagwat Katha, we ensure every ritual is conducted with the utmost reverence, by pandits who have devoted their lives to this sacred knowledge.
            </p>
          </div>
          <div className="reveal-right grid grid-cols-2 gap-4">
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'To digitize and democratize access to authentic Vedic rituals across India and beyond.' },
              { icon: '🌟', title: 'Our Vision', desc: 'To be the most trusted spiritual platform connecting 1 million devotees by 2030.' },
              { icon: '💡', title: 'Our Approach', desc: 'Technology-enabled, tradition-rooted services that honour both convenience and sanctity.' },
              { icon: '🤝', title: 'Our Promise', desc: 'Every booking is a guarantee of quality, authenticity, and a divine experience.' },
            ].map((item, i) => (
              <div key={i} className="card-glass p-6 group hover:-translate-y-2">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-serif font-bold text-brown text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-brown/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATISTICS ─────────────────────────────── */}
      <section className="py-20 bg-gradient-divine">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="reveal p-6 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ───────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20 reveal">
            <span className="section-tag">Milestones</span>
            <h2 className="section-title">Our Journey</h2>
            <div className="gold-divider max-w-24 mx-auto mt-4"></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-kumkum via-gold to-saffron -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12">
              {JOURNEY.map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 reveal ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 card-glass p-6 hover:-translate-y-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="font-serif font-bold text-xl text-brown mb-2">{item.title}</h3>
                    <p className="text-sm text-brown/70 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-divine flex items-center justify-center shadow-divine border-4 border-white shrink-0">
                    <span className="text-white font-bold text-sm font-serif">{item.year.slice(2)}</span>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ────────────────────────────── */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-sacred-pattern opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">Our Pillars</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="card-divine p-8 text-center group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="font-serif font-bold text-xl text-brown mb-3">{v.title}</h3>
                <p className="text-sm text-brown/70 leading-relaxed">{v.desc}</p>
                <div className="mt-5 h-0.5 w-12 mx-auto rounded-full bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">The Pandits</span>
            <h2 className="section-title">Meet Our Experts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="card-pandit text-center p-8 group reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="w-20 h-20 rounded-full bg-gradient-divine flex items-center justify-center text-white font-bold text-3xl font-serif mx-auto mb-5 border-4 border-gold/30 shadow-gold">
                  {member.initial}
                </div>
                <div className="badge-verified mx-auto mb-4 w-fit"><Check size={12} /> Verified Expert</div>
                <h3 className="font-serif font-bold text-xl text-brown mb-1">{member.name}</h3>
                <p className="text-saffron text-sm font-semibold mb-1">{member.role}</p>
                <p className="text-brown/60 text-xs mb-4">{member.exp} · {member.speciality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}