import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import Footer from '../components/Footer';
import { MandalaRing } from '../components/DecorativeElements';
import { OmIcon } from '../components/SacredIcons';

const BENEFITS = [
  { icon: '💰', title: 'Earn More', desc: 'Set your own rates and earn ₹50,000–₹2,00,000+ per month.' },
  { icon: '📱', title: 'Digital Tools', desc: 'Manage your schedule, bookings, and payments from one app.' },
  { icon: '🌍', title: 'Reach More', desc: 'Connect with devotees across India and internationally via online poojas.' },
  { icon: '🛡️', title: 'We Handle Everything', desc: 'We manage payments, customer support, and logistics. You focus on dharma.' },
];

const STEPS = [
  { step: 1, title: 'Apply Online', desc: 'Fill in your details, specializations, and years of experience.' },
  { step: 2, title: 'Document Verification', desc: 'Submit your certificates and credentials for our verification team to review.' },
  { step: 3, title: 'Virtual Interview', desc: 'A 20-minute call with our Pandit Success team to understand your expertise.' },
  { step: 4, title: 'Go Live & Earn', desc: 'Your profile goes live. Start receiving bookings within 48 hours.' },
];

const SPECIALIZATIONS = [
  'Griha Pravesh', 'Vivah', 'Satyanarayan Katha', 'Rudrabhishek', 'Hawan & Yagya',
  'Ganesh Pooja', 'Navgrah Shanti', 'Vastu Shanti', 'Kaal Sarp Dosh', 'Namkaran',
  'Sundarkand', 'Bhagwat Katha', 'Pitru Dosh', 'Mahamrityunjaya Jaap',
];

export default function Careers() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '', experience: '', selectedSpecs: [] as string[], about: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleSpec = (spec: string) => {
    setForm(f => ({
      ...f,
      selectedSpecs: f.selectedSpecs.includes(spec) ? f.selectedSpecs.filter(s => s !== spec) : [...f.selectedSpecs, spec]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <div className="min-h-screen flex flex-col pt-20">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative py-28 bg-hero-gradient overflow-hidden text-center">
        <MandalaRing className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.04]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">📢 Now Hiring</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Join India's Largest <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-haldi">Pandit Network</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Are you a qualified Vedic Pandit or priest? Partner with us to grow your practice, reach more devotees, and earn with dignity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#apply-form" className="btn-gold text-base px-10 py-4">Apply to Join</a>
            <a href="#how-it-works" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Learn More</a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-sand"><path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80Z" /></svg>
        </div>
      </section>

      {/* ── BENEFITS ───────────────────────────────── */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">Why Partner With Us</span>
            <h2 className="section-title">Grow Your Sacred Practice</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="card-divine p-8 group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform">{b.icon}</div>
                <h3 className="font-serif font-bold text-xl text-brown mb-3">{b.title}</h3>
                <p className="text-sm text-brown/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────── */}
      <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-sacred-pattern opacity-50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20 reveal">
            <span className="section-tag">Simple 4-Step Process</span>
            <h2 className="section-title">How to Become a Verified Pandit</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="absolute top-7 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-gold to-saffron hidden md:block"></div>
            {STEPS.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="w-14 h-14 rounded-full bg-gradient-divine text-white font-serif font-bold text-xl flex items-center justify-center shadow-divine mb-5 relative z-10">
                  {s.step}
                </div>
                <h3 className="font-bold text-brown font-serif text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-brown/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ──────────────────────── */}
      <section id="apply-form" className="py-24 bg-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 reveal">
            <span className="section-tag">Apply Now</span>
            <h2 className="section-title">Pandit Ji Application</h2>
            <p className="section-subtitle mt-4">Approved within 48–72 business hours</p>
          </div>

          <div className="card-divine p-8 md:p-12 reveal">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check size={36} className="text-green-600" />
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-divine flex items-center justify-center mx-auto mb-6">
                  <OmIcon size={30} color="white" />
                </div>
                <h3 className="font-serif font-bold text-3xl text-brown mb-3">Application Submitted!</h3>
                <p className="text-brown/70 text-lg max-w-md mx-auto">Our team will review your details and contact you within 48–72 hours. Jai Shri Ram 🙏</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Full Name *</label>
                    <input type="text" required placeholder="Pt. Your Name" className="input-divine" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Phone *</label>
                    <input type="tel" required placeholder="+91 9876543210" className="input-divine" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Email Address</label>
                    <input type="email" placeholder="your@email.com" className="input-divine" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Your City *</label>
                    <input type="text" required placeholder="e.g. Varanasi" className="input-divine" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Years of Experience *</label>
                  <select required className="input-divine" value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })}>
                    <option value="">Select Experience</option>
                    <option value="1-3">1–3 Years</option>
                    <option value="3-5">3–5 Years</option>
                    <option value="5-10">5–10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brown/70 mb-3 uppercase tracking-wider">Your Specializations (Select all that apply)</label>
                  <div className="flex flex-wrap gap-2">
                    {SPECIALIZATIONS.map(spec => (
                      <button
                        key={spec} type="button"
                        onClick={() => toggleSpec(spec)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${form.selectedSpecs.includes(spec) ? 'bg-gradient-divine text-white shadow-sm' : 'bg-lotus border border-kumkum/20 text-brown hover:border-kumkum'}`}
                      >
                        {spec}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Tell Us About Yourself</label>
                  <textarea rows={4} placeholder="Your training, lineage, certifications, and what makes you special..." className="input-divine resize-none" value={form.about} onChange={e => setForm({ ...form, about: e.target.value })}></textarea>
                </div>

                <div className="flex items-start gap-3 text-sm text-brown/70">
                  <input type="checkbox" required className="mt-1 accent-kumkum" id="terms" />
                  <label htmlFor="terms">I agree to the <span className="text-kumkum font-medium">Terms & Conditions</span> and <span className="text-kumkum font-medium">Pandit Partner Agreement</span>.</label>
                </div>

                <button type="submit" className="btn-divine w-full text-base py-4 gap-2">
                  <OmIcon size={20} /> Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}