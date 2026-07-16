import { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { StarFilledIcon } from '../components/SacredIcons';

const BOOKINGS = [
  { id: 'PJ12458', pooja: 'Satyanarayan Katha', pandit: 'Pt. Ramesh Sharma', date: 'July 20, 2026', time: '09:00 AM', status: 'upcoming', amount: 5100 },
  { id: 'PJ11892', pooja: 'Griha Pravesh', pandit: 'Pt. Arvind Joshi', date: 'July 5, 2026', time: '07:00 AM', status: 'completed', amount: 11000 },
  { id: 'PJ10034', pooja: 'Ganesh Pooja', pandit: 'Pt. Suresh Tripathi', date: 'June 15, 2026', time: '11:00 AM', status: 'completed', amount: 3100 },
];

const STATUS_CONFIG = {
  upcoming: { label: 'Upcoming', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  completed: { label: 'Completed', color: 'bg-green-100 text-green-700 border-green-200' },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-700 border-red-200' },
};

const NAV_ITEMS = [
  { id: 'bookings', label: 'My Bookings', icon: '📋' },
  { id: 'wishlist', label: 'Wishlist', icon: '❤️' },
  { id: 'notifications', label: 'Notifications', icon: '🔔' },
  { id: 'profile', label: 'My Profile', icon: '👤' },
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bookings');

  const formatPrice = (p: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p);

  return (
    <div className="min-h-screen flex flex-col pt-20 bg-sand">
      
      {/* Header Banner */}
      <div className="bg-gradient-divine text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(244,180,0,0.15)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-5 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center font-serif font-bold text-3xl shadow-inner">
            {user?.name?.charAt(0) || 'D'}
          </div>
          <div>
            <p className="text-white/70 text-sm">Welcome back,</p>
            <h1 className="text-2xl md:text-3xl font-serif font-bold">{user?.name || 'Devotee'}</h1>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-4">
            <Link to="/poojas" className="btn-gold text-sm py-3">Book a Pooja</Link>
          </div>
        </div>
      </div>

      <div className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="card-divine p-4 sticky top-28">
              <nav className="space-y-1">
                {NAV_ITEMS.map(item => (
                  <button key={item.id} onClick={() => setActiveTab(item.id)} className={`sidebar-item w-full text-left ${activeTab === item.id ? 'active' : ''}`}>
                    <span className="text-xl">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
                <div className="gold-divider-sm my-3"></div>
                <button onClick={() => { logout(); navigate('/'); }} className="sidebar-item w-full text-left text-kumkum hover:bg-kumkum/10">
                  <span className="text-xl">🚪</span> Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">

            {/* ── BOOKINGS TAB ── */}
            {activeTab === 'bookings' && (
              <>
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Total Bookings', value: BOOKINGS.length, icon: '📋', color: 'from-lotus to-white' },
                    { label: 'Upcoming', value: BOOKINGS.filter(b => b.status === 'upcoming').length, icon: '📅', color: 'from-blue-50 to-white' },
                    { label: 'Completed', value: BOOKINGS.filter(b => b.status === 'completed').length, icon: '✅', color: 'from-green-50 to-white' },
                  ].map((s, i) => (
                    <div key={i} className={`card-divine p-5 bg-gradient-to-br ${s.color} hover:-translate-y-1`}>
                      <div className="text-3xl mb-2">{s.icon}</div>
                      <div className="text-3xl font-serif font-bold text-brown">{s.value}</div>
                      <div className="text-xs text-brown/60 font-medium mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bookings List */}
                <div className="card-divine overflow-hidden">
                  <div className="px-6 py-5 border-b border-gold/10 flex items-center justify-between">
                    <h2 className="font-serif font-bold text-xl text-brown">My Bookings</h2>
                    <Link to="/poojas" className="btn-outline-gold text-xs py-2 px-4">+ New Booking</Link>
                  </div>
                  <div className="divide-y divide-gold/10">
                    {BOOKINGS.map(booking => (
                      <div key={booking.id} className="p-6 hover:bg-sand/40 transition-colors group">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h3 className="font-bold text-brown text-lg group-hover:text-kumkum transition-colors">{booking.pooja}</h3>
                              <span className={`badge-sacred text-[11px] border ${STATUS_CONFIG[booking.status as keyof typeof STATUS_CONFIG].color}`}>
                                {STATUS_CONFIG[booking.status as keyof typeof STATUS_CONFIG].label}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-brown/60">
                              <span className="flex items-center gap-1.5"><User size={13} /> {booking.pandit}</span>
                              <span className="flex items-center gap-1.5"><Calendar size={13} /> {booking.date}</span>
                              <span className="flex items-center gap-1.5"><Clock size={13} /> {booking.time}</span>
                            </div>
                            <p className="text-xs text-brown/40 mt-1">Booking ID: #{booking.id}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="font-serif font-bold text-xl text-kumkum">{formatPrice(booking.amount)}</p>
                            {booking.status === 'upcoming' && (
                              <button className="mt-2 text-xs text-red-500 hover:text-red-700 font-medium">Cancel Booking</button>
                            )}
                            {booking.status === 'completed' && (
                              <div className="flex items-center gap-1 justify-end mt-1">
                                {[...Array(5)].map((_, i) => <StarFilledIcon key={i} size={12} color="#F4B400" />)}
                                <span className="text-xs text-brown/50 ml-1">5.0</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ── WISHLIST TAB ── */}
            {activeTab === 'wishlist' && (
              <div className="card-divine p-12 text-center">
                <div className="text-6xl mb-4">❤️</div>
                <h3 className="font-serif font-bold text-2xl text-brown mb-3">Your Wishlist is Empty</h3>
                <p className="text-brown/60 mb-8">Save your favourite poojas to easily book them later.</p>
                <Link to="/poojas" className="btn-divine">Browse Poojas</Link>
              </div>
            )}

            {/* ── NOTIFICATIONS TAB ── */}
            {activeTab === 'notifications' && (
              <div className="card-divine overflow-hidden">
                <div className="px-6 py-5 border-b border-gold/10">
                  <h2 className="font-serif font-bold text-xl text-brown">Notifications</h2>
                </div>
                <div className="divide-y divide-gold/10">
                  {[
                    { icon: '🙏', title: 'Booking Confirmed', desc: 'Your Satyanarayan Katha on July 20 is confirmed.', time: '2 hours ago', isNew: true },
                    { icon: '📲', title: 'Pandit Ji will call', desc: 'Pt. Ramesh Sharma will call you 1 hour before the ceremony.', time: '5 hours ago', isNew: true },
                    { icon: '⭐', title: 'Rate your experience', desc: 'How was your Griha Pravesh with Pt. Arvind Joshi?', time: '3 days ago', isNew: false },
                  ].map((n, i) => (
                    <div key={i} className={`p-5 flex gap-4 hover:bg-sand/30 transition-colors ${n.isNew ? 'bg-lotus/30' : ''}`}>
                      <div className="w-11 h-11 rounded-full bg-lotus border border-gold/20 flex items-center justify-center text-xl shrink-0">{n.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-brown text-sm">{n.title}</p>
                          {n.isNew && <span className="w-2 h-2 rounded-full bg-kumkum"></span>}
                        </div>
                        <p className="text-xs text-brown/60 leading-relaxed">{n.desc}</p>
                        <p className="text-xs text-brown/40 mt-1">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── PROFILE TAB ── */}
            {activeTab === 'profile' && (
              <div className="card-divine p-8">
                <h2 className="font-serif font-bold text-2xl text-brown mb-8">Edit Profile</h2>
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gold/10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-divine flex items-center justify-center text-white font-serif font-bold text-3xl">
                    {user?.name?.charAt(0) || 'D'}
                  </div>
                  <div>
                    <p className="font-bold text-brown text-xl">{user?.name}</p>
                    <p className="text-brown/60 text-sm">{user?.phone}</p>
                    <button className="text-saffron text-xs font-medium mt-2 hover:underline">Change Photo</button>
                  </div>
                </div>
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Full Name</label>
                      <input type="text" className="input-divine w-full" defaultValue={user?.name || ''} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Phone</label>
                      <input type="tel" className="input-divine w-full" placeholder="+91 9876543210" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Email</label>
                    <input type="email" className="input-divine w-full" defaultValue={user?.phone || ''} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Default City</label>
                    <input type="text" className="input-divine w-full" placeholder="Your city" />
                  </div>
                  <button type="button" className="btn-divine">Save Changes</button>
                </form>
              </div>
            )}

          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}