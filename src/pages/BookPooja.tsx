import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PanditCard from '../components/PanditCard';
import { useAuth } from '../context/AuthContext';
import { DivineGradients, ShieldCheckIcon, CoinsIcon, ClockIcon, TempleIcon, VideoIcon, UserIcon } from '../components/Icons';

const POOJAS_DATA: Record<string, { name: string; description: string; price: number; durationMinutes: number; panditsRequired: number; samagri: string[] }> = {
  '1': { name: 'Satyanarayan Katha', description: 'A sacred pooja dedicated to Lord Vishnu, performed for prosperity and blessings in all endeavors of life.', price: 5100, durationMinutes: 180, panditsRequired: 1, samagri: ['Panchamrit', 'Tulsi leaves', 'Flowers', 'Dhoop', 'Incense', 'Banana', 'Coconut', 'Yellow cloth'] },
  '2': { name: 'Griha Pravesh', description: 'House warming ceremony to bless your new home with peace, prosperity and positive energy.', price: 11000, durationMinutes: 240, panditsRequired: 2, samagri: ['Mango leaves', 'Coconut', 'Flowers', 'Rice', 'Turmeric', 'Kumkum', 'Ghee', 'Dhoop', 'Red cloth'] },
  '3': { name: 'Ganesh Pooja', description: 'Remove obstacles from your life with Lord Ganesha\'s divine blessings.', price: 3100, durationMinutes: 90, panditsRequired: 1, samagri: ['Modak', 'Durva grass', 'Red flowers', 'Dhoop', 'Coconut', 'Incense'] },
  '4': { name: 'Rudrabhishek', description: 'Powerful Shiva pooja with Panchamrit Abhishek. Brings health, wealth and removes negativity.', price: 7500, durationMinutes: 120, panditsRequired: 2, samagri: ['Milk', 'Honey', 'Curd', 'Ghee', 'Sugar', 'Bel leaves', 'Dhatura', 'Flowers'] },
  '5': { name: 'Hawan', description: 'Sacred fire ritual purifying the environment.', price: 4500, durationMinutes: 120, panditsRequired: 1, samagri: ['Samagri mix', 'Ghee', 'Hawan Kund', 'Mango wood', 'Sesame seeds'] },
};

const MOCK_PANDITS = [
  { id: 'p1', name: 'Pt. Ramesh Sharma', expertise: ['Satyanarayan', 'Hawan', 'Griha Pravesh'], experienceYears: 15, isVerified: true, rating: 4.9, reviewCount: 124 },
  { id: 'p2', name: 'Pt. Suresh Joshi', expertise: ['Navgrah', 'Marriage', 'Rudrabhishek'], experienceYears: 22, isVerified: true, rating: 4.8, reviewCount: 89 },
  { id: 'p3', name: 'Pt. Mahesh Trivedi', expertise: ['Griha Pravesh', 'Ganesh Pooja', 'Hawan'], experienceYears: 10, isVerified: true, rating: 4.7, reviewCount: 67 },
];

const STEPS = ['Pooja Details', 'Date & Time', 'Location', 'Select Pandit', 'Confirm'];

export default function BookPooja() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [step, setStep] = useState(0);
  const [selectedPandit, setSelectedPandit] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    locationType: '',
    address: '',
    city: '',
  });

  const pooja = POOJAS_DATA[id || '1'];
  if (!pooja) return <div className="pt-24 text-center text-brown font-serif">Pooja not found.</div>;

  const hours = Math.floor(pooja.durationMinutes / 60);
  const mins = pooja.durationMinutes % 60;

  const handleNext = () => {
    if (step === 0 && !isAuthenticated) {
      navigate('/auth');
      return;
    }
    if (step < STEPS.length - 1) setStep(step + 1);
  };

  const handleBook = () => {
    navigate('/checkout', { state: { pooja, panditId: selectedPandit, ...formData } });
  };

  return (
    <div className="min-h-screen pt-24 bg-sand text-brown font-sans">
      <DivineGradients />
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-10 overflow-x-auto pb-4">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex flex-col items-center ${i <= step ? 'text-kumkum' : 'text-brown/30'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                  i < step ? 'bg-kumkum border-kumkum text-white shadow-red' :
                  i === step ? 'border-kumkum text-kumkum bg-lotus shadow-gold' :
                  'border-brown/20 text-brown/30'
                }`}>
                  {i < step ? '✓' : i + 1}
                </div>
                <span className="text-[11px] mt-2 whitespace-nowrap font-semibold tracking-wide uppercase">{s}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`h-0.5 w-8 md:w-16 mx-2 transition-all ${i < step ? 'bg-kumkum' : 'bg-brown/10'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 bg-white rounded-3xl border border-gold/20 shadow-card p-6 md:p-8">
            {/* Step 0: Pooja Details */}
            {step === 0 && (
              <div className="animate-fade-up">
                <h2 className="text-3xl font-bold mb-4 text-brown font-serif">{pooja.name}</h2>
                <p className="text-brown/70 text-sm leading-relaxed mb-6">{pooja.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-lotus/40 border border-kumkum/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-kumkum">₹{pooja.price.toLocaleString()}</div>
                    <div className="text-brown/60 text-xs mt-1 font-semibold uppercase tracking-wider">Total Ritual Price</div>
                  </div>
                  <div className="bg-light-gold/40 border border-gold/20 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-saffron">{hours}h {mins > 0 ? `${mins}m` : ''}</div>
                    <div className="text-brown/60 text-xs mt-1 font-semibold uppercase tracking-wider">Duration</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-brown font-serif mb-3 text-lg">Included Sacred Samagri (We Arrange)</h3>
                  <div className="flex flex-wrap gap-2">
                    {pooja.samagri.map(s => (
                      <span key={s} className="bg-sand border border-gold/10 text-brown/80 text-xs px-3 py-1.5 rounded-full font-medium">
                        🪷 {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Date & Time */}
            {step === 1 && (
              <div className="animate-fade-up space-y-5">
                <h2 className="text-2xl font-bold text-brown font-serif">Choose Date & Time</h2>
                <div>
                  <label className="block text-sm font-semibold text-brown/80 mb-2">Select Auspicious Date</label>
                  <input type="date" className="input-divine" min={new Date().toISOString().split('T')[0]} value={formData.date} onChange={e => setFormData(p => ({ ...p, date: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brown/80 mb-2">Preferred Shubh Muhurat Time</label>
                  <input type="time" className="input-divine" value={formData.time} onChange={e => setFormData(p => ({ ...p, time: e.target.value }))} />
                </div>
                {formData.time && (
                  <p className="text-xs text-saffron font-medium">
                    ⏰ Expected Ritual End Time: {(() => {
                      const [h, m] = formData.time.split(':').map(Number);
                      const end = new Date(); end.setHours(h + hours); end.setMinutes(m + mins);
                      return end.toTimeString().substring(0, 5);
                    })()}
                  </p>
                )}
              </div>
            )}

            {/* Step 2: Location */}
            {step === 2 && (
              <div className="animate-fade-up space-y-5">
                <h2 className="text-2xl font-bold text-brown font-serif">Choose Ceremony Mode</h2>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { type: 'HOME_VISIT', label: 'Home Visit', desc: 'Vedic priest visits you', icon: <TempleIcon className="text-kumkum" /> },
                    { type: 'TEMPLE', label: 'At Temple', desc: 'Conducted at sacred temple', icon: <TempleIcon className="text-saffron" /> },
                    { type: 'ONLINE', label: 'Online / E-Pooja', desc: 'Live video ritual', icon: <VideoIcon className="text-haldi" /> },
                  ].map(loc => (
                    <button
                      key={loc.type}
                      onClick={() => setFormData(p => ({ ...p, locationType: loc.type }))}
                      className={`p-4 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center gap-2 ${
                        formData.locationType === loc.type ? 'border-kumkum bg-lotus/20 shadow-red' : 'border-gold/25 hover:border-gold/50 bg-white'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center shadow-sm">
                        {loc.icon}
                      </div>
                      <div className="text-xs font-bold text-brown">{loc.label}</div>
                      <div className="text-[9px] text-brown/50 hidden sm:block">{loc.desc}</div>
                    </button>
                  ))}
                </div>
                
                {formData.locationType === 'HOME_VISIT' && (
                  <div className="space-y-4 animate-fade-up">
                    <div>
                      <label className="block text-sm font-semibold text-brown/80 mb-2">City</label>
                      <input className="input-divine" placeholder="e.g. Mumbai, Delhi, Ahmedabad" value={formData.city} onChange={e => setFormData(p => ({ ...p, city: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brown/80 mb-2">Full Pooja Location Address</label>
                      <textarea className="input-divine min-h-24 resize-none" placeholder="House No., Street, Area, Pincode" value={formData.address} onChange={e => setFormData(p => ({ ...p, address: e.target.value }))} />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Select Pandit */}
            {step === 3 && (
              <div className="animate-fade-up space-y-4">
                <h2 className="text-2xl font-bold text-brown font-serif">Select Pandit Ji</h2>
                <p className="text-brown/50 text-xs">Browse profiles and select your preferred priest</p>
                <div className="space-y-3">
                  {MOCK_PANDITS.map(p => (
                    <PanditCard
                      key={p.id}
                      {...p}
                      selected={selectedPandit === p.id}
                      onSelect={() => setSelectedPandit(p.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Confirm */}
            {step === 4 && (
              <div className="animate-fade-up space-y-4">
                <h2 className="text-2xl font-bold text-brown font-serif">Booking Summary</h2>
                <div className="space-y-3 bg-light-gold/30 border border-gold/20 rounded-2xl p-5">
                  <div className="flex justify-between text-sm"><span className="text-brown/60">Pooja Ritual</span><span className="font-bold text-brown">{pooja.name}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-brown/60">Shubh Date</span><span className="font-bold text-brown">{formData.date || '—'}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-brown/60">Shubh Time</span><span className="font-bold text-brown">{formData.time || '—'}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-brown/60">Mode</span><span className="font-bold text-brown">{formData.locationType || '—'}</span></div>
                  {formData.address && <div className="flex justify-between text-sm"><span className="text-brown/60">Address</span><span className="font-bold text-brown text-right max-w-xs">{formData.address}</span></div>}
                  <div className="flex justify-between text-sm"><span className="text-brown/60">Selected Pandit</span><span className="font-bold text-brown">{MOCK_PANDITS.find(p => p.id === selectedPandit)?.name || 'Auto-assign Best Pandit'}</span></div>
                  
                  <div className="border-t border-gold/20 pt-3 flex justify-between text-lg font-bold text-brown">
                    <span>Dakshina Amount</span><span className="text-kumkum">₹{pooja.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button onClick={() => setStep(s => s - 1)} className="btn-outline-gold flex-1 py-3 text-xs">
                  ← Back
                </button>
              )}
              {step < STEPS.length - 1 ? (
                <button onClick={handleNext} className="btn-divine flex-1 text-xs py-3.5">
                  Continue →
                </button>
              ) : (
                <button onClick={handleBook} className="btn-divine flex-1 text-xs py-3.5">
                  Proceed to Dakshina Payment (₹{pooja.price.toLocaleString()})
                </button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl border border-gold/20 shadow-card p-5">
              <h3 className="font-bold text-brown font-serif mb-4 text-lg">Dakshina Summary</h3>
              <div className="space-y-3 text-xs font-semibold">
                <div className="flex justify-between text-brown/60">
                  <span>Ritual Fee</span><span>₹{pooja.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-brown/60">
                  <span>Platform Fee</span><span className="text-green-600">FREE</span>
                </div>
                <div className="border-t border-gold/10 pt-3 flex justify-between text-sm font-bold text-brown">
                  <span>Total Dakshina</span><span className="text-kumkum">₹{pooja.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50/50 border border-green-200 rounded-2xl p-4 flex gap-3 text-xs text-green-800">
              <ShieldCheckIcon className="text-green-600 flex-shrink-0" size={18} />
              <div>
                <strong className="block mb-0.5">Verified Vedic Priests</strong>
                All Pandits are certified & follow traditional ritual steps.
              </div>
            </div>
            
            <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-4 flex gap-3 text-xs text-blue-800">
              <CoinsIcon className="text-blue-600 flex-shrink-0" size={18} />
              <div>
                <strong className="block mb-0.5">100% Refund Policy</strong>
                Full dakshina returned if ritual is not conducted.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
