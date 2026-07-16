import { useEffect } from 'react';
import { Check } from 'lucide-react';
import Footer from '../components/Footer';
import { MandalaRing } from '../components/DecorativeElements';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    name: 'Basic Ritual',
    price: 1999,
    badge: null,
    color: 'from-sand to-white',
    border: 'border-gold/20',
    features: [
      '1 Pandit Ji',
      'Up to 2 hours ceremony',
      'Pooja Samagri included',
      'Hindi / English support',
      'Home or Temple visit',
      '24-hour support',
    ],
    disabled: ['Video consultation', 'Prasad delivery', 'Dedicated coordinator'],
  },
  {
    name: 'Sacred Premium',
    price: 4999,
    badge: 'Most Popular',
    color: 'from-kumkum to-deep-maroon',
    border: 'border-gold',
    features: [
      '2 Pandit Ji',
      'Up to 4 hours ceremony',
      'Complete Samagri Kit',
      'Multi-language support',
      'Home, Temple or Online',
      '24/7 Priority support',
      'Video consultation',
      'Prasad delivery',
    ],
    disabled: ['Dedicated coordinator'],
    isPopular: true,
  },
  {
    name: 'Divine Luxury',
    price: 11999,
    badge: 'Best Value',
    color: 'from-temple-brown to-deep-brown',
    border: 'border-gold/40',
    features: [
      '3+ Pandit Ji',
      'Full-day ceremony',
      'Premium Samagri Box',
      'All Indian languages',
      'Any location + Live stream',
      '24/7 Dedicated support',
      'Video consultation',
      'Prasad & Flowers delivery',
      'Dedicated coordinator',
    ],
    disabled: [],
  },
];

const ALL_SERVICES = [
  { name: 'Griha Pravesh', duration: '4–6 hrs', price: 7999, category: 'Home' },
  { name: 'Satyanarayan Katha', duration: '3 hrs', price: 5100, category: 'Katha' },
  { name: 'Ganesh Pooja', duration: '1.5 hrs', price: 3100, category: 'Festival' },
  { name: 'Rudrabhishek', duration: '2 hrs', price: 7500, category: 'Shiv' },
  { name: 'Marriage Ceremony', duration: 'Full day', price: 21000, category: 'Vivah' },
  { name: 'Hawan / Yagya', duration: '2 hrs', price: 4500, category: 'Purification' },
  { name: 'Navgrah Shanti', duration: '3 hrs', price: 6500, category: 'Graha' },
  { name: 'Namkaran Ceremony', duration: '1.5 hrs', price: 3500, category: 'Sanskar' },
  { name: 'Bhoomi Pujan', duration: '2 hrs', price: 5500, category: 'Property' },
  { name: 'Vastu Shanti', duration: '3 hrs', price: 6000, category: 'Vastu' },
  { name: 'Lakshmi Pooja', duration: '1.5 hrs', price: 3100, category: 'Goddess' },
  { name: 'Durga Pooja', duration: '3 hrs', price: 5999, category: 'Goddess' },
];

export default function Pricing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const formatPrice = (p: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p);

  return (
    <div className="min-h-screen flex flex-col pt-20">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative py-24 bg-hero-gradient overflow-hidden text-center">
        <MandalaRing className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.04]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">Transparent Pricing</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            No Hidden Charges. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-haldi">Sacred & Honest.</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Complete pooja pricing upfront. What you see is what you pay.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-sand"><path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80Z" /></svg>
        </div>
      </section>

      {/* ── PRICING PLANS ──────────────────────────── */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-sacred-pattern opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">Choose Your Package</span>
            <h2 className="section-title">Pooja Packages</h2>
            <div className="gold-divider max-w-24 mx-auto mt-4"></div>
            <p className="section-subtitle mt-4 max-w-xl mx-auto">Select a package that matches your ceremony. All packages include authentic Vedic rituals performed by verified pandits.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {PLANS.map((plan, i) => (
              <div key={i} className={`relative rounded-3xl overflow-hidden border-2 ${plan.border} transition-all duration-300 hover:-translate-y-3 hover:shadow-divine reveal flex flex-col`} style={{ transitionDelay: `${i * 100}ms` }}>
                
                {plan.isPopular && (
                  <div className="bg-gradient-divine text-white text-xs font-bold tracking-widest uppercase text-center py-2.5">
                    ⭐ Most Popular
                  </div>
                )}
                {plan.badge && !plan.isPopular && (
                  <div className="bg-gold text-deep-brown text-xs font-bold tracking-widest uppercase text-center py-2.5">
                    ✨ {plan.badge}
                  </div>
                )}

                <div className={`bg-gradient-to-br ${plan.color} p-8 ${plan.isPopular ? 'text-white' : 'text-brown'}`}>
                  <h3 className={`font-serif font-bold text-2xl mb-2 ${plan.isPopular ? 'text-white' : 'text-brown'}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-semibold opacity-70">Starting</span>
                    <span className={`text-5xl font-serif font-bold ${plan.isPopular ? 'text-white' : plan.name === 'Divine Luxury' ? 'text-gold' : 'text-kumkum'}`}>{formatPrice(plan.price)}</span>
                  </div>
                  <p className={`text-sm mt-1 ${plan.isPopular ? 'text-white/70' : 'text-brown/60'}`}>per ceremony</p>
                </div>

                <div className="bg-white p-8 flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-brown">
                        <Check size={16} className="text-green-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                    {plan.disabled.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-brown/30 line-through">
                        <div className="w-4 h-4 rounded-full border border-brown/20 shrink-0"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/poojas" className={`w-full text-center py-4 rounded-2xl font-bold text-sm transition-all ${plan.isPopular ? 'btn-divine' : 'btn-outline-gold'}`}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE PRICE LIST ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">A-la-carte</span>
            <h2 className="section-title">Individual Pooja Prices</h2>
            <p className="section-subtitle mt-4 max-w-xl mx-auto">All prices include samagri, pandit fees, and travel (within city limits)</p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-gold/20 shadow-card reveal">
            <div className="grid grid-cols-3 bg-gradient-divine text-white text-xs font-bold uppercase tracking-widest px-6 py-4">
              <span>Pooja / Ritual</span>
              <span className="text-center">Duration</span>
              <span className="text-right">Starting Price</span>
            </div>
            {ALL_SERVICES.map((svc, i) => (
              <div key={i} className={`grid grid-cols-3 items-center px-6 py-4 border-b border-gold/10 hover:bg-sand/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-sand/30'}`}>
                <div>
                  <p className="font-semibold text-brown">{svc.name}</p>
                  <span className="text-[11px] text-brown/50 bg-lotus px-2 py-0.5 rounded-full">{svc.category}</span>
                </div>
                <p className="text-center text-sm text-brown/70">{svc.duration}</p>
                <p className="text-right font-serif font-bold text-lg text-kumkum">{formatPrice(svc.price)}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-brown/50 mt-6">* Prices may vary based on location, specific requirements, and number of pandits needed. Contact us for a custom quote.</p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────── */}
      <section className="py-24 bg-sand">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="section-title">Pricing FAQs</h2>
          </div>
          {[
            { q: 'Is samagri included in the price?', a: 'Yes, all our packages include the complete pooja samagri (materials). No need to purchase anything separately.' },
            { q: 'Are there any travel charges?', a: 'Travel within 25 km of city center is free. Beyond that, a small travel allowance is applicable and shown before booking.' },
            { q: 'What is your cancellation policy?', a: 'Free cancellation up to 24 hours before the booked time. 50% refund for cancellations within 24 hours.' },
            { q: 'Can I request a specific pandit?', a: 'Yes! On the pandit profile page, you can view their availability and book directly with them.' },
          ].map((faq, i) => (
            <details key={i} className="faq-item mb-4 group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-brown list-none">
                {faq.q}
                <span className="text-gold group-open:rotate-180 transition-transform text-xl font-bold">+</span>
              </summary>
              <div className="px-6 pb-5 text-sm text-brown/70 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}