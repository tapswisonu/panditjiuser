import { useEffect, useState } from 'react';
import { ArrowRight, Clock, Search, User } from 'lucide-react';
import Footer from '../components/Footer';
import { MandalaRing } from '../components/DecorativeElements';
import { Link } from 'react-router-dom';

const CATEGORIES = ['All', 'Festivals', 'Rituals', 'Astrology', 'Vastu', 'Mantras', 'Lifestyle'];

const POSTS = [
  {
    id: '1',
    title: 'The Sacred Science of Griha Pravesh: What Every Homeowner Must Know',
    excerpt: 'Moving into a new home is a milestone. Discover the deep Vedic significance behind Griha Pravesh and why the right rituals can bring decades of peace and prosperity.',
    category: 'Rituals',
    author: 'Pt. Ramesh Sharma',
    date: 'July 10, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Mahashivratri 2026: Complete Guide to Performing Rudrabhishek at Home',
    excerpt: 'A step-by-step guide to performing Rudrabhishek on Mahashivratri with the correct mantras, materials, and timing.',
    category: 'Festivals',
    author: 'Pt. Suresh Dwivedi',
    date: 'July 5, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Vastu Shastra Basics: The 5 Most Important Directions in Your Home',
    excerpt: 'Understand how the placement of your bedroom, kitchen, and pooja room impacts the flow of positive energy in your home.',
    category: 'Vastu',
    author: 'Pt. Arvind Joshi',
    date: 'June 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1604928141064-207cea6f5822?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Why Mahamrityunjaya Mantra is the Most Powerful Healing Prayer in Vedic Tradition',
    excerpt: 'The science and spirituality behind the Mahamrityunjaya Mantra — how 108 repetitions can transform your mental and physical health.',
    category: 'Mantras',
    author: 'Pt. Ramesh Sharma',
    date: 'June 20, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Navgrah Shanti: How Planetary Alignment Affects Your Daily Life',
    excerpt: 'Explore the influence of the nine planets (Navgrahas) in Vedic astrology and which shanti poojas can help balance their energies.',
    category: 'Astrology',
    author: 'Pt. Arvind Joshi',
    date: 'June 14, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1565060169194-19fabf63012a?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = POSTS.find(p => p.isFeatured);
  const filteredPosts = POSTS.filter(p => !p.isFeatured)
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col pt-20">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden text-center">
        <MandalaRing className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.04]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">Spiritual Wisdom</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            The Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-haldi">Blog</span>
          </h1>
          <p className="text-lg text-white/80 mb-10">Vedic insights, festival guides, and spiritual wisdom for the modern devotee.</p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/60" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-4 pl-14 pr-6 text-white placeholder-white/60 outline-none focus:border-gold transition-colors"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-sand"><path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80Z" /></svg>
        </div>
      </section>

      <section className="flex-1 py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-14 reveal justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? 'btn-divine shadow-md' : 'bg-white border border-gold/20 text-brown hover:border-gold hover:shadow-card'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featured && activeCategory === 'All' && !searchQuery && (
            <Link to={`/blog/${featured.id}`} className="block mb-16 reveal group">
              <div className="card-pandit overflow-hidden grid md:grid-cols-2">
                <div className="h-64 md:h-full overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge-featured">{featured.category}</span>
                    <span className="badge-sacred">Featured Article</span>
                  </div>
                  <h2 className="font-serif font-bold text-3xl md:text-4xl text-brown mb-4 leading-tight group-hover:text-kumkum transition-colors">{featured.title}</h2>
                  <p className="text-brown/70 text-sm leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-brown/50 mb-6">
                    <span className="flex items-center gap-1"><User size={12} /> {featured.author}</span>
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                  </div>
                  <span className="btn-divine w-fit gap-2">Read Article <ArrowRight size={16} /></span>
                </div>
              </div>
            </Link>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="card-pandit group flex flex-col reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge-sacred">{post.category}</span>
                    <span className="text-xs text-brown/50">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brown mb-3 leading-tight group-hover:text-kumkum transition-colors line-clamp-2 flex-1">{post.title}</h3>
                  <p className="text-sm text-brown/60 line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-brown/50 pt-4 border-t border-gold/10 mt-auto">
                    <div className="w-6 h-6 rounded-full bg-gradient-divine flex items-center justify-center text-white text-[10px] font-bold">{post.author.charAt(0)}</div>
                    <span>{post.author}</span>
                    <span className="ml-auto">{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-24">
              <div className="text-6xl mb-4 opacity-30">🔍</div>
              <h3 className="font-serif font-bold text-2xl text-brown mb-2">No articles found</h3>
              <p className="text-brown/60">Try a different category or search term.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}