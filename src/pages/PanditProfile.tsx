import { useState, useEffect } from 'react';
import { Award, Check, Clock, MapPin, ShieldCheck, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { StarFilledIcon } from '../components/SacredIcons';

const PANDIT_DATA = {
  id: '1',
  name: 'Pt. Ramesh Kumar Sharma',
  title: 'Vedic Pandit & Ritual Specialist',
  experience: 25,
  languages: ['Hindi', 'Sanskrit', 'English'],
  rating: 4.9,
  reviews: 432,
  specialization: ['Griha Pravesh', 'Hawan & Yagya', 'Satyanarayan Katha', 'Vivah', 'Navgrah Shanti'],
  location: 'Delhi NCR',
  isVerified: true,
  videoConsultation: true,
  about: 'I am a fifth-generation Vedic Pandit trained in the Kashi tradition under Pt. Ramaswamy Shastri. I have performed over 5,000 ceremonies across India and internationally for NRI families. My approach combines strict adherence to Vedic scripture with a compassionate understanding of modern family dynamics.',
  certifications: ['Kashi Vidvat Parishad Certificate', 'Vedic University Varanasi Degree', 'ISKCON Certification in Sanskrit'],
  totalBookings: 5240,
  completionRate: 99.2,
  repeatCustomers: 78,
};

const REVIEWS = [
  { name: 'Priya Sharma', city: 'Gurgaon', rating: 5, pooja: 'Griha Pravesh', text: 'Pandit ji was incredible. He arrived on time, performed the entire ceremony with full devotion and explained every step. Our home feels truly blessed.', date: 'July 5, 2026' },
  { name: 'Rahul Verma', city: 'Noida', rating: 5, pooja: 'Satyanarayan Katha', text: 'Best pandit we have ever had. Very knowledgeable, patient with questions, and maintains a very spiritual atmosphere throughout the pooja.', date: 'June 18, 2026' },
  { name: 'Sunita Agarwal', city: 'Delhi', rating: 5, pooja: 'Vivah', text: 'Our wedding ceremony was conducted beautifully. Pandit Ramesh ji made sure every ritual was authentic and meaningful. Highly recommend!', date: 'May 30, 2026' },
];

const SERVICES = [
  { name: 'Griha Pravesh', duration: '4–6 hrs', price: 9999 },
  { name: 'Satyanarayan Katha', duration: '3 hrs', price: 5999 },
  { name: 'Hawan & Yagya', duration: '2 hrs', price: 5500 },
  { name: 'Vivah Ceremony', duration: 'Full day', price: 25000 },
];

const TIME_SLOTS = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'];
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const AVAILABLE = [0, 1, 3, 4, 5]; // available weekday indices

export default function PanditProfile() {
  // const { id } = useParams(); // Reserved for API fetch
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [activeTab, setActiveTab] = useState('about');

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

      {/* ── PROFILE HERO ───────────────────────────── */}
      <section className="bg-gradient-to-br from-[#4A0E0E] via-kumkum to-[#FF6F00] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(244,180,0,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-8">

            {/* Avatar */}
            <div className="relative">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-gradient-to-br from-haldi to-saffron border-4 border-white/30 shadow-divine flex items-center justify-center text-white font-serif font-bold text-6xl overflow-hidden">
                {PANDIT_DATA.name.charAt(0)}
              </div>
              {PANDIT_DATA.isVerified && (
                <div className="absolute -bottom-3 -right-3 bg-white rounded-xl p-1.5 shadow-gold">
                  <ShieldCheck size={28} color="#4CAF50" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="badge-sacred mb-3 bg-white/20 text-white border-white/30">✦ Verified Expert Pandit</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{PANDIT_DATA.name}</h1>
              <p className="text-white/80 text-lg mb-4">{PANDIT_DATA.title} · {PANDIT_DATA.experience}+ Years</p>
              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2"><StarFilledIcon size={16} color="#F4D483" /> <span className="font-bold text-white">{PANDIT_DATA.rating}</span> ({PANDIT_DATA.reviews} reviews)</div>
                <div className="flex items-center gap-2"><MapPin size={16} className="text-haldi" /> {PANDIT_DATA.location}</div>
                {PANDIT_DATA.videoConsultation && <div className="flex items-center gap-2"><Video size={16} className="text-green-300" /> Video Available</div>}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 text-center shrink-0">
              {[
                { v: `${PANDIT_DATA.totalBookings}+`, l: 'Ceremonies' },
                { v: `${PANDIT_DATA.completionRate}%`, l: 'Completion' },
                { v: `${PANDIT_DATA.repeatCustomers}%`, l: 'Repeat' },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-serif font-bold text-white">{s.v}</div>
                  <div className="text-white/70 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-10 fill-sand"><path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60Z" /></svg>
        </div>
      </section>

      {/* ── MAIN CONTENT ───────────────────────────── */}
      <section className="py-12 bg-sand flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-8 items-start">

          {/* Left: Detail Tabs */}
          <div className="lg:col-span-2 space-y-8">

            {/* Tabs */}
            <div className="flex gap-1 bg-white rounded-2xl p-1.5 shadow-sm border border-gold/10 reveal">
              {['about', 'reviews', 'services'].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-3 rounded-xl text-sm font-semibold capitalize transition-all ${activeTab === tab ? 'bg-gradient-divine text-white shadow-sm' : 'text-brown hover:bg-sand'}`}>
                  {tab}
                </button>
              ))}
            </div>

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-6 reveal">
                <div className="card-divine p-7">
                  <h2 className="font-serif font-bold text-2xl text-brown mb-4">About Pandit Ji</h2>
                  <p className="text-brown/70 leading-relaxed">{PANDIT_DATA.about}</p>
                </div>
                <div className="card-divine p-7">
                  <h2 className="font-serif font-bold text-2xl text-brown mb-4">Certifications</h2>
                  <ul className="space-y-3">
                    {PANDIT_DATA.certifications.map((c, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Award size={20} className="text-gold shrink-0" />
                        <span className="text-brown/80 text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-divine p-7">
                  <h2 className="font-serif font-bold text-2xl text-brown mb-4">Specializations</h2>
                  <div className="flex flex-wrap gap-3">
                    {PANDIT_DATA.specialization.map((s, i) => (
                      <span key={i} className="badge-sacred text-sm px-4 py-2">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-5 reveal">
                <div className="card-divine p-7 flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-6xl font-serif font-bold text-kumkum">{PANDIT_DATA.rating}</div>
                    <div className="flex gap-0.5 justify-center my-1">{[...Array(5)].map((_, i) => <StarFilledIcon key={i} size={16} />)}</div>
                    <div className="text-brown/60 text-xs">{PANDIT_DATA.reviews} reviews</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3].map(r => (
                      <div key={r} className="flex items-center gap-3">
                        <span className="text-xs text-brown/60 w-4">{r}</span>
                        <div className="flex-1 h-2 rounded-full bg-sand overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-divine" style={{ width: r === 5 ? '82%' : r === 4 ? '13%' : '5%' }}></div>
                        </div>
                        <span className="text-xs text-brown/60">{r === 5 ? '82%' : r === 4 ? '13%' : '5%'}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {REVIEWS.map((r, i) => (
                  <div key={i} className="card-divine p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-divine flex items-center justify-center text-white font-bold">{r.name.charAt(0)}</div>
                        <div>
                          <p className="font-bold text-brown text-sm">{r.name}</p>
                          <p className="text-xs text-brown/50">{r.pooja} · {r.city}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">{[...Array(r.rating)].map((_, j) => <StarFilledIcon key={j} size={12} />)}</div>
                    </div>
                    <p className="text-sm text-brown/70 leading-relaxed italic">"{r.text}"</p>
                    <p className="text-xs text-brown/40 mt-3">{r.date}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="space-y-4 reveal">
                {SERVICES.map((s, i) => (
                  <div key={i} className={`card-divine p-6 flex items-center justify-between cursor-pointer transition-all ${selectedService === s.name ? 'border-kumkum border-2 shadow-red' : ''}`} onClick={() => setSelectedService(s.name)}>
                    <div className="flex items-center gap-4">
                      {selectedService === s.name && <Check size={20} className="text-kumkum shrink-0" />}
                      <div>
                        <h3 className="font-bold text-brown">{s.name}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-brown/60 flex items-center gap-1"><Clock size={12} /> {s.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-serif font-bold text-xl text-kumkum">{formatPrice(s.price)}</p>
                      <p className="text-xs text-brown/50">incl. samagri</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Booking Widget */}
          <div className="lg:sticky lg:top-28 reveal-right">
            <div className="card-divine p-7">
              <h3 className="font-serif font-bold text-2xl text-brown mb-6">Book This Pandit</h3>

              {PANDIT_DATA.videoConsultation && (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6 flex items-center gap-3">
                  <Video size={20} className="text-green-600 shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800 text-sm">Video Consultation Available</p>
                    <p className="text-green-700 text-xs">Chat before booking — free of charge</p>
                  </div>
                </div>
              )}

              {/* Calendar Availability */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-brown/70 mb-3 uppercase tracking-wider">Available This Week</p>
                <div className="grid grid-cols-7 gap-1">
                  {WEEKDAYS.map((day, i) => (
                    <div key={i} className={`text-center py-2.5 rounded-xl text-xs font-medium cursor-pointer transition-all ${AVAILABLE.includes(i) ? 'bg-green-50 text-green-700 border border-green-200 hover:border-green-400' : 'bg-sand text-brown/30 cursor-not-allowed'}`}>
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-brown/70 mb-3 uppercase tracking-wider">Select Time</p>
                <div className="grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map(slot => (
                    <button key={slot} onClick={() => setSelectedTime(slot)} className={`py-2.5 rounded-xl text-xs font-semibold border transition-all ${selectedTime === slot ? 'bg-gradient-divine text-white border-transparent' : 'border-gold/30 text-brown hover:border-gold hover:bg-sand'}`}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <Link to={`/book/${PANDIT_DATA.id}`} className="btn-divine w-full text-center flex justify-center py-4 text-base">
                Book Now 🙏
              </Link>
              <p className="text-center text-xs text-brown/50 mt-4">Free cancellation up to 24 hours before</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}