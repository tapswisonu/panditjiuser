import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gold/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Online Pandit Ji"
            className="h-14 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { to: '/poojas', label: 'Browse Poojas' },
            { to: '/pandits', label: 'Find Pandit' },
          ].map(link => (
            <Link key={link.to} to={link.to}
              className="relative text-brown/80 hover:text-kumkum font-medium text-sm transition-colors group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-kumkum to-saffron rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link to="/dashboard"
                className="flex items-center gap-2.5 bg-lotus border border-gold/30 px-4 py-2 rounded-full hover:bg-light-gold transition-all">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-kumkum to-saffron flex items-center justify-center text-white text-xs font-bold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-semibold text-brown">{user?.name?.split(' ')[0]}</span>
              </Link>
              <button onClick={() => { logout(); navigate('/'); }}
                className="text-sm text-brown/60 hover:text-kumkum transition-colors">Logout</button>
            </div>
          ) : (
            <Link to="/auth" className="btn-divine text-sm">
              <span className="mr-1.5">🪔</span> Login / Register
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-lotus border border-gold/20" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-brown text-xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-gold/20 px-4 py-5 space-y-3 animate-fade-up">
          <Link to="/poojas" className="block py-2.5 text-brown font-medium border-b border-gold/10" onClick={() => setMenuOpen(false)}>Browse Poojas</Link>
          <Link to="/pandits" className="block py-2.5 text-brown font-medium border-b border-gold/10" onClick={() => setMenuOpen(false)}>Find Pandit</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="block py-2.5 text-brown font-medium" onClick={() => setMenuOpen(false)}>My Dashboard</Link>
              <button onClick={() => { logout(); navigate('/'); setMenuOpen(false); }} className="block py-2.5 text-kumkum font-medium w-full text-left">Logout</button>
            </>
          ) : (
            <Link to="/auth" className="btn-divine block text-center text-sm" onClick={() => setMenuOpen(false)}>Login / Register</Link>
          )}
        </div>
      )}
    </nav>
  );
}
