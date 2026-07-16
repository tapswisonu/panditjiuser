import React, { useState, useEffect } from 'react';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import Footer from '../components/Footer';
import { MandalaRing } from '../components/DecorativeElements';
import { WhatsAppIcon } from '../components/SacredIcons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 800);
  };

  const CONTACT_CARDS = [
    { icon: <Phone size={24} className="text-kumkum" />, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Sat, 8 AM – 9 PM', bg: 'from-lotus to-white', href: 'tel:+919876543210' },
    { icon: <WhatsAppIcon size={24} />, label: 'WhatsApp', value: 'Chat Now', sub: 'Instant Response', bg: 'from-green-50 to-white', href: '#' },
    { icon: <Mail size={24} className="text-saffron" />, label: 'Email Us', value: 'namaste@panditji.com', sub: 'Reply within 24 hrs', bg: 'from-light-gold to-white', href: 'mailto:namaste@panditji.com' },
    { icon: <MapPin size={24} className="text-kumkum" />, label: 'Visit Us', value: 'Vrindavan, UP', sub: '108 Spiritual Center', bg: 'from-lotus to-white', href: '#' },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-20">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative py-24 bg-hero-gradient overflow-hidden text-center">
        <MandalaRing className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.04]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-haldi">Help & Guide</span></h1>
          <p className="text-lg text-white/80">Have a question, need a custom quote, or want to learn more about our services? Our spiritual advisors are ready to help.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-sand"><path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80Z" /></svg>
        </div>
      </section>

      {/* ── CONTACT CARDS ──────────────────────────── */}
      <section className="py-16 bg-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-5 reveal">
          {CONTACT_CARDS.map((card, i) => (
            <a key={i} href={card.href} className={`card-glass p-6 text-center group flex flex-col items-center gap-3 bg-gradient-to-br ${card.bg} hover:-translate-y-2`}>
              <div className="w-14 h-14 rounded-2xl bg-white shadow-card flex items-center justify-center border border-gold/10 group-hover:shadow-glow transition-shadow">
                {card.icon}
              </div>
              <p className="font-bold text-brown text-sm">{card.label}</p>
              <p className="text-kumkum font-semibold text-sm">{card.value}</p>
              <p className="text-brown/60 text-xs">{card.sub}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ── FORM + MAP ─────────────────────────────── */}
      <section className="py-12 bg-sand pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <div className="card-divine p-8 md:p-10 reveal-left">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check size={36} className="text-green-600" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-brown mb-3">Message Received!</h3>
                <p className="text-brown/70">Our team will get back to you within 24 hours. Jai Shri Krishna 🙏</p>
              </div>
            ) : (
              <>
                <h2 className="font-serif font-bold text-3xl text-brown mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Full Name</label>
                      <input type="text" required placeholder="Your Name" className="input-divine" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Phone</label>
                      <input type="tel" placeholder="+91 9876543210" className="input-divine" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Email Address</label>
                    <input type="email" required placeholder="you@example.com" className="input-divine" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Subject</label>
                    <select className="input-divine" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}>
                      <option value="">Select a topic</option>
                      <option>Booking Enquiry</option>
                      <option>Pandit Registration</option>
                      <option>Pricing & Packages</option>
                      <option>Technical Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Message</label>
                    <textarea rows={5} required placeholder="Tell us how we can help you..." className="input-divine resize-none" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
                  </div>
                  <button type="submit" className="btn-divine w-full text-base py-4">
                    Send Message 🙏
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Map + Info */}
          <div className="flex flex-col gap-6 reveal-right">
            <div className="card-divine overflow-hidden h-72">
              <iframe
                title="Pandit Ji Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, filter: 'hue-rotate(30deg) saturate(0.8)' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28566.697571438!2d77.66346!3d27.57325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974ae9f5e1dc7d7%3A0x44cfc4a78bffb0ed!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              ></iframe>
            </div>

            <div className="card-glass p-6">
              <h3 className="font-serif font-bold text-xl text-brown mb-4">Office Hours</h3>
              <div className="space-y-3">
                {[
                  { day: 'Monday – Friday', time: '8:00 AM – 9:00 PM' },
                  { day: 'Saturday', time: '9:00 AM – 7:00 PM' },
                  { day: 'Sunday', time: '10:00 AM – 5:00 PM' },
                  { day: 'Festivals & Auspicious Days', time: 'Open 24 hours' },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-gold/10 pb-3 last:border-none last:pb-0">
                    <span className="text-brown/70 font-medium">{h.day}</span>
                    <span className="text-saffron font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}