import { Link } from 'react-router-dom';
import { OmIcon, WhatsAppIcon } from './SacredIcons';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-temple-gradient text-white overflow-hidden pt-20 pb-10 border-t-4 border-gold">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0L40 20L20 40L0 20Z" fill="currentColor"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#footer-pattern)"/>
        </svg>
      </div>

      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-md border border-gold/20 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          
          <div className="md:w-1/2">
            <h3 className="text-3xl font-serif font-bold mb-3 flex items-center gap-3">
              <span className="text-gold">✨</span> Stay Spiritually Connected
            </h3>
            <p className="text-white/70">Subscribe to our newsletter for daily panchang, festival updates, and exclusive pooja offers.</p>
          </div>
          
          <div className="md:w-1/2 w-full flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-black/20 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/50 outline-none focus:border-gold transition-colors"
            />
            <button className="btn-gold whitespace-nowrap px-8">Subscribe</button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kumkum to-saffron flex items-center justify-center border-2 border-gold/50 group-hover:scale-105 transition-transform">
                <OmIcon size={24} color="white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-serif text-gold">Pandit Ji</h2>
                <p className="text-xs text-white/50 tracking-widest uppercase">Divine Services</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm">
              India's premier spiritual platform. We connect devotees with verified, experienced Vedic Pandits for all sacred rituals, ensuring authenticity and devotion in every ceremony.
            </p>
            
            <div className="flex gap-4">
              {[
                { label: 'fb', link: '#' },
                { label: 'tw', link: '#' },
                { label: 'in', link: '#' },
                { label: 'ig', link: '#' },
              ].map(({ label, link }, i) => (
                <a key={i} href={link} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-deep-brown transition-all duration-300 text-xs font-bold">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-gold font-bold font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Browse Poojas', path: '/poojas' },
                { label: 'Find a Pandit', path: '/pandits' },
                { label: 'Pricing Plans', path: '/pricing' },
                { label: 'Spiritual Blog', path: '/blog' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-white/70 text-sm hover:text-gold transition-colors flex items-center gap-2">
                    <span className="text-gold text-xs">▸</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-gold font-bold font-serif text-xl mb-6">Support</h4>
            <ul className="space-y-3">
              {[
                { label: 'Contact Us', path: '/contact' },
                { label: 'FAQs', path: '/faq' },
                { label: 'Terms & Conditions', path: '/terms' },
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Refund Policy', path: '/refund' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-white/70 text-sm hover:text-gold transition-colors flex items-center gap-2">
                    <span className="text-gold text-xs">▸</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-gold font-bold font-serif text-xl mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={18} className="text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <span>108 Spiritual Center, Mathura Road, Vrindavan, UP 281121</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={18} className="text-gold shrink-0" strokeWidth={1.5} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={18} className="text-gold shrink-0" strokeWidth={1.5} />
                <span>namaste@panditji.com</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 bg-[#25D366]/20 text-[#25D366] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#25D366]/30 transition-colors border border-[#25D366]/30">
                <WhatsAppIcon size={16} /> Chat with us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Pandit Ji Online Services. All rights reserved. Made with <span className="text-kumkum">❤️</span> in India.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-white/50 text-sm">Verified & Secure</span>
            <div className="flex gap-2 opacity-50">
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-black text-[10px] font-bold">VISA</div>
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-black text-[10px] font-bold">MC</div>
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-black text-[10px] font-bold">UPI</div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
