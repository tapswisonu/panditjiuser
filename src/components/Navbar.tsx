import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { OmIcon } from './SacredIcons';
import { Menu, X, Sun, Moon, ChevronDown, User } from 'lucide-react';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    
    // Init dark mode
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('dark');
    }
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Poojas', path: '/poojas' },
    { name: 'Pandits', path: '/pandits' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-card py-3'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${scrolled ? 'bg-gradient-divine shadow-red' : 'bg-white/20 backdrop-blur-md border border-white/30'}`}>
              <OmIcon size={20} color={scrolled ? 'white' : (isDark ? '#D4AF37' : '#B71C1C')} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-serif font-bold leading-none ${scrolled ? 'text-brown' : (isDark ? 'text-white' : 'text-deep-brown')}`}>
                Pandit Ji
              </span>
              <span className={`text-[10px] tracking-[0.2em] font-medium uppercase ${scrolled ? 'text-saffron' : (isDark ? 'text-gold' : 'text-kumkum')}`}>
                Divine Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-medium text-sm transition-colors group py-2
                    ${location.pathname === link.path 
                      ? 'text-kumkum' 
                      : (scrolled ? 'text-brown/80 hover:text-kumkum' : (isDark ? 'text-white/80 hover:text-white' : 'text-deep-brown/80 hover:text-kumkum'))
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-divine transition-all duration-300 rounded-full ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
              
              {/* More Dropdown */}
              <div className="relative group cursor-pointer py-2">
                <div className={`flex items-center gap-1 font-medium text-sm transition-colors ${scrolled ? 'text-brown/80 hover:text-kumkum' : (isDark ? 'text-white/80 hover:text-white' : 'text-deep-brown/80 hover:text-kumkum')}`}>
                  More <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 mt-2 w-48 rounded-2xl overflow-hidden glass shadow-divine opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="p-2 flex flex-col">
                    <Link to="/blog" className="px-4 py-2 text-sm text-brown hover:bg-gold/10 hover:text-kumkum rounded-xl transition-colors">Spiritual Blog</Link>
                    <Link to="/contact" className="px-4 py-2 text-sm text-brown hover:bg-gold/10 hover:text-kumkum rounded-xl transition-colors">Contact Us</Link>
                    <div className="h-px bg-gold/20 my-1 mx-2"></div>
                    <Link to="/careers" className="px-4 py-2 text-sm text-saffron font-medium hover:bg-gold/10 rounded-xl transition-colors flex items-center justify-between">
                      Become a Pandit <span className="bg-kumkum text-white text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider">Hiring</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-px h-6 bg-gold/30"></div>

            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${scrolled ? 'bg-black/5 hover:bg-black/10 text-brown' : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'}`}
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Auth / Profile */}
              {isAuthenticated ? (
                <div className="relative group">
                  <div className={`flex items-center gap-2 px-1.5 py-1.5 rounded-full cursor-pointer transition-all border ${scrolled ? 'bg-white/50 border-gold/30 hover:border-gold' : 'bg-white/10 border-white/20 hover:border-white/40 backdrop-blur-sm'}`}>
                    <div className="w-8 h-8 rounded-full bg-gradient-divine flex items-center justify-center text-white font-bold text-sm shadow-sm">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                    <span className={`text-sm font-medium pr-2 ${scrolled ? 'text-brown' : 'text-white'}`}>
                      {user?.name?.split(' ')[0] || 'User'}
                    </span>
                  </div>
                  
                  {/* Profile Dropdown */}
                  <div className="absolute top-full right-0 mt-3 w-56 rounded-2xl glass shadow-divine opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="p-4 border-b border-gold/20 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-divine flex items-center justify-center text-white font-bold">
                        {user?.name?.charAt(0) || 'U'}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brown">{user?.name}</p>
                        <p className="text-xs text-brown/60 truncate w-32">{user?.phone}</p>
                      </div>
                    </div>
                    <div className="p-2 flex flex-col">
                      <Link to="/dashboard" className="px-4 py-2 text-sm text-brown hover:bg-gold/10 hover:text-kumkum rounded-xl transition-colors flex items-center gap-2">
                        <User size={16} /> My Dashboard
                      </Link>
                      <button onClick={logout} className="px-4 py-2 text-sm text-kumkum text-left hover:bg-kumkum/10 rounded-xl transition-colors flex items-center gap-2 mt-1">
                        <X size={16} /> Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/auth" className="btn-divine py-2.5 px-6 shadow-none">
                  Login / Register
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button 
              onClick={toggleDarkMode}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${scrolled ? 'bg-black/5 text-brown' : 'bg-white/10 text-white backdrop-blur-sm'}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${scrolled ? 'bg-black/5 text-brown' : 'bg-white/10 text-white backdrop-blur-sm'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuOpen(false)}></div>
      
      <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm glass z-50 transition-transform duration-500 ease-spring ${menuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-divine flex items-center justify-center">
                <OmIcon size={20} color="white" />
              </div>
              <span className="text-xl font-serif font-bold text-brown">Pandit Ji</span>
            </div>
            <button onClick={() => setMenuOpen(false)} className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-brown hover:bg-black/10 transition-colors">
              <X size={20} />
            </button>
          </div>

          {isAuthenticated && (
            <div className="bg-white/50 rounded-2xl p-4 mb-6 flex items-center gap-3 border border-gold/20">
              <div className="w-12 h-12 rounded-full bg-gradient-divine flex items-center justify-center text-white font-bold text-lg">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div>
                <p className="font-bold text-brown">{user?.name}</p>
                <Link to="/dashboard" className="text-xs text-saffron font-medium hover:underline">View Dashboard →</Link>
              </div>
            </div>
          )}

          <div className="space-y-1 mb-8">
            {[...navLinks, { name: 'Blog', path: '/blog' }, { name: 'Contact', path: '/contact' }].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${location.pathname === link.path ? 'bg-gradient-divine text-white shadow-md' : 'text-brown hover:bg-gold/10'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <Link to="/careers" className="w-full btn-outline-gold justify-center">
              Become a Pandit
            </Link>
            {isAuthenticated ? (
              <button onClick={logout} className="w-full py-3.5 rounded-full font-bold text-kumkum bg-kumkum/10 hover:bg-kumkum/20 transition-colors">
                Logout
              </button>
            ) : (
              <Link to="/auth" className="w-full btn-divine flex">
                Login / Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
