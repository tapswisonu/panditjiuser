import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { DivineGradients } from '../components/Icons';

const MOCK_BOOKINGS = [
  { id: '#PJ829341', pooja: 'Satyanarayan Katha', pandit: 'Pt. Ramesh Sharma', date: '2025-08-20', time: '09:00', status: 'CONFIRMED', amount: 5100, location: 'Home Visit' },
  { id: '#PJ712983', pooja: 'Ganesh Pooja', pandit: 'Pt. Mahesh Trivedi', date: '2025-07-25', time: '08:00', status: 'COMPLETED', amount: 3100, location: 'Temple' },
  { id: '#PJ601234', pooja: 'Hawan', pandit: 'Auto-assigned', date: '2025-09-10', time: '07:00', status: 'PENDING', amount: 4500, location: 'Online' },
];

const STATUS_STYLES: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  CONFIRMED: 'bg-blue-100 text-blue-800 border-blue-200',
  COMPLETED: 'bg-green-100 text-green-800 border-green-200',
  CANCELLED: 'bg-red-100 text-red-800 border-red-200',
};

const TABS = ['My Bookings', 'Chat / Call', 'Reviews', 'Profile'];

export default function Dashboard() {
  const { user, isAuthenticated, logout } = useAuth();
  const [tab, setTab] = useState('My Bookings');
  const [review, setReview] = useState({ rating: 5, comment: '' });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  if (!isAuthenticated) return <Navigate to="/auth" replace />;

  return (
    <div className="min-h-screen pt-24 bg-sand text-brown font-sans">
      <DivineGradients />
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-kumkum to-saffron rounded-3xl p-6 md:p-8 mb-8 text-white flex items-center justify-between shadow-red relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 text-white/5 font-serif text-[240px] pointer-events-none select-none">
            ॐ
          </div>
          <div className="relative z-10">
            <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Devotee Portal 🙏</p>
            <h1 className="text-3xl font-bold font-serif">{user?.name}</h1>
            <p className="text-white/80 text-sm mt-1">+91 {user?.phone}</p>
          </div>
          <div className="text-right hidden md:block relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4">
            <p className="text-white/80 text-xs font-bold uppercase tracking-wider">Total Rituals Booked</p>
            <p className="text-4xl font-bold font-serif mt-1">{MOCK_BOOKINGS.length}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-white border border-gold/15 rounded-2xl shadow-card p-1.5 mb-8 overflow-x-auto">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                tab === t ? 'bg-kumkum text-white shadow-md' : 'text-brown/60 hover:text-kumkum'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* My Bookings */}
        {tab === 'My Bookings' && (
          <div className="space-y-4 animate-fade-up">
            {MOCK_BOOKINGS.map(b => (
              <div key={b.id} className="bg-white rounded-3xl border border-gold/20 shadow-card p-6 flex flex-col md:flex-row md:items-center gap-6 hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-brown font-serif">{b.pooja}</h3>
                    <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold border ${STATUS_STYLES[b.status]}`}>{b.status}</span>
                  </div>
                  <p className="text-xs text-brown/60 font-medium">📅 {b.date} at {b.time} • 📍 {b.location}</p>
                  <p className="text-xs text-brown/60 font-medium mt-1">🧑‍🏫 {b.pandit}</p>
                </div>
                <div className="flex items-center gap-4 justify-between md:justify-end">
                  <div className="text-left md:text-right">
                    <span className="text-[10px] text-brown/40 block font-semibold uppercase tracking-wider">Dakshina</span>
                    <span className="font-bold text-kumkum text-lg">₹{b.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-brown/40 bg-sand px-2.5 py-1.5 rounded-lg border border-gold/10">{b.id}</span>
                    {b.status === 'CONFIRMED' && (
                      <button className="btn-divine text-xs py-2 px-4 rounded-xl">Track 🪔</button>
                    )}
                    {b.status === 'COMPLETED' && (
                      <button onClick={() => setTab('Reviews')} className="btn-outline-gold text-xs py-2 px-4 rounded-xl">Review</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center pt-4">
              <Link to="/poojas" className="btn-divine inline-block text-xs">Book Another Pooja</Link>
            </div>
          </div>
        )}

        {/* Chat / Call */}
        {tab === 'Chat / Call' && (
          <div className="animate-fade-up bg-white rounded-3xl border border-gold/20 shadow-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-brown font-serif mb-6">Chat & Call with Pandit Ji</h2>
            {MOCK_BOOKINGS.filter(b => b.status === 'CONFIRMED').map(b => (
              <div key={b.id} className="flex items-center justify-between p-5 bg-sand rounded-2xl border border-gold/10 mb-4 hover:border-gold/30 transition-colors">
                <div>
                  <p className="font-bold text-brown font-serif text-lg">{b.pandit}</p>
                  <p className="text-xs text-brown/50 mt-0.5">For: {b.pooja} on {b.date}</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors">📞 Call</button>
                  <button className="bg-kumkum hover:bg-kumkum/90 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors">💬 Chat</button>
                </div>
              </div>
            ))}
            {MOCK_BOOKINGS.filter(b => b.status === 'CONFIRMED').length === 0 && (
              <div className="text-center py-12 text-brown/40">
                <span className="text-4xl block mb-3">💬</span>
                <p className="text-sm font-medium">No active bookings. Pandit details will appear here once booking is confirmed.</p>
              </div>
            )}
          </div>
        )}

        {/* Reviews */}
        {tab === 'Reviews' && (
          <div className="animate-fade-up bg-white rounded-3xl border border-gold/20 shadow-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-brown font-serif mb-6">Devotee Review</h2>
            {!reviewSubmitted ? (
              <div className="space-y-4">
                <p className="text-sm text-brown/70 font-medium">How was your Ganesh Pooja experience with Pt. Pt. Mahesh Trivedi?</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(s => (
                    <button key={s} onClick={() => setReview(r => ({ ...r, rating: s }))} className="text-3xl transition-transform hover:scale-110">
                      {s <= review.rating ? '★' : '☆'}
                    </button>
                  ))}
                </div>
                <textarea
                  className="input-divine min-h-28 resize-none"
                  placeholder="Share your spiritual experience about the pandit's knowledge, punctuality, and overall service..."
                  value={review.comment}
                  onChange={e => setReview(r => ({ ...r, comment: e.target.value }))}
                />
                <button onClick={() => setReviewSubmitted(true)} className="btn-divine text-xs py-3">Submit Review</button>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="text-4xl mb-3">🙏</div>
                <h3 className="text-xl font-bold text-brown font-serif">Thank you for your feedback!</h3>
                <p className="text-brown/50 text-xs mt-1">Your review helps other devotees select the best Pandit.</p>
              </div>
            )}
          </div>
        )}

        {/* Profile */}
        {tab === 'Profile' && (
          <div className="animate-fade-up bg-white rounded-3xl border border-gold/20 shadow-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-brown font-serif mb-6">My Profile</h2>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-kumkum to-saffron flex items-center justify-center text-white text-3xl font-bold shadow-md border border-gold/20">
                {user?.name?.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brown font-serif">{user?.name}</h3>
                <p className="text-xs text-brown/50 font-medium">+91 {user?.phone}</p>
                <span className="text-[10px] bg-green-50 text-green-700 px-3 py-1 rounded-full font-bold mt-2 inline-block border border-green-200 uppercase tracking-wider">Devotee</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center mb-8">
              <div className="bg-sand border border-gold/15 rounded-2xl p-4">
                <div className="text-3xl font-bold text-kumkum font-serif">{MOCK_BOOKINGS.length}</div>
                <div className="text-brown/50 text-xs font-semibold uppercase tracking-wider mt-1">Total Booked</div>
              </div>
              <div className="bg-green-50/40 border border-green-200/50 rounded-2xl p-4">
                <div className="text-3xl font-bold text-green-700 font-serif">{MOCK_BOOKINGS.filter(b => b.status === 'COMPLETED').length}</div>
                <div className="text-brown/50 text-xs font-semibold uppercase tracking-wider mt-1">Completed</div>
              </div>
            </div>
            <button onClick={logout} className="btn-secondary w-full text-xs py-3.5 hover:bg-red-50 hover:border-red-400 hover:text-red-600 transition-colors">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
