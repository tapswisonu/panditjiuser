import { useState } from 'react';
import { Check, Clock, User } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { OmIcon } from '../components/SacredIcons';

const STEPS = [
  { label: 'Pooja', icon: '🕉️' },
  { label: 'Date & Time', icon: '📅' },
  { label: 'Location', icon: '📍' },
  { label: 'Payment', icon: '💳' },
  { label: 'Confirm', icon: '✅' },
];

const POOJAS = [
  { id: '1', name: 'Satyanarayan Katha', duration: '3 hrs', price: 5100, pandits: 1 },
  { id: '2', name: 'Griha Pravesh', duration: '4–6 hrs', price: 11000, pandits: 2 },
  { id: '3', name: 'Ganesh Pooja', duration: '1.5 hrs', price: 3100, pandits: 1 },
  { id: '4', name: 'Rudrabhishek', duration: '2 hrs', price: 7500, pandits: 2 },
];

const TIME_SLOTS = ['07:00 AM', '09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'];

const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI / GPay / PhonePe', icon: '📱' },
  { id: 'card', label: 'Credit / Debit Card', icon: '💳' },
  { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
  { id: 'cod', label: 'Cash on Day (COD)', icon: '💵' },
];

export default function BookPooja() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedPooja, setSelectedPooja] = useState(POOJAS.find(p => p.id === id) || POOJAS[0]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [locationType, setLocationType] = useState<'home' | 'temple' | 'online'>('home');
  const [address, setAddress] = useState({ line1: '', city: '', pincode: '' });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const formatPrice = (p: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p);

  const canProceed = () => {
    if (step === 0) return !!selectedPooja;
    if (step === 1) return !!selectedDate && !!selectedTime;
    if (step === 2) return locationType === 'online' || (address.line1 && address.city && address.pincode);
    if (step === 3) return !!paymentMethod;
    return true;
  };

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsConfirmed(true);
    }, 2000);
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-sand pt-20 px-4">
        <div className="card-divine p-12 max-w-lg w-full text-center animate-scale-in">
          <div className="w-24 h-24 rounded-full bg-gradient-divine flex items-center justify-center mx-auto mb-6 animate-glow">
            <OmIcon size={48} color="white" />
          </div>
          <h2 className="font-serif font-bold text-4xl text-brown mb-4">Booking Confirmed!</h2>
          <p className="text-brown/70 mb-6">Your <strong className="text-kumkum">{selectedPooja.name}</strong> has been confirmed. Pandit Ji will arrive at the scheduled time with all required samagri.</p>
          <div className="bg-sand rounded-2xl p-5 text-left space-y-3 mb-8 border border-gold/20">
            <div className="flex justify-between text-sm"><span className="text-brown/60">Booking ID</span><span className="font-bold text-brown">#PJ{Math.floor(Math.random() * 90000) + 10000}</span></div>
            <div className="flex justify-between text-sm"><span className="text-brown/60">Pooja</span><span className="font-semibold text-brown">{selectedPooja.name}</span></div>
            <div className="flex justify-between text-sm"><span className="text-brown/60">Date & Time</span><span className="font-semibold text-brown">{selectedDate} at {selectedTime}</span></div>
            <div className="flex justify-between text-sm"><span className="text-brown/60">Amount Paid</span><span className="font-bold text-kumkum">{formatPrice(selectedPooja.price)}</span></div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => navigate('/dashboard')} className="btn-divine flex-1">View Booking</button>
            <button onClick={() => navigate('/')} className="btn-outline-gold flex-1">Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pt-20 bg-sand">
      
      {/* Header */}
      <div className="bg-white border-b border-gold/10 px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif font-bold text-3xl text-brown mb-6">Book a Pooja</h1>
          
          {/* Step Progress */}
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-sand -z-0"></div>
            <div className="absolute left-0 top-6 h-0.5 bg-gradient-divine -z-0 transition-all duration-500" style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}></div>
            
            {STEPS.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2 relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all duration-300 ${
                  i < step ? 'bg-green-500 border-green-500 text-white' :
                  i === step ? 'bg-gradient-divine border-kumkum text-white shadow-red' :
                  'bg-white border-gold/30 text-brown/40'
                }`}>
                  {i < step ? <Check size={20} /> : s.icon}
                </div>
                <span className={`text-xs font-semibold hidden md:block ${i === step ? 'text-kumkum' : i < step ? 'text-green-600' : 'text-brown/40'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* ── STEP 0: SELECT POOJA ── */}
          {step === 0 && (
            <div className="animate-fade-in">
              <h2 className="font-serif font-bold text-3xl text-brown mb-8">Select Pooja</h2>
              <div className="space-y-4">
                {POOJAS.map(pooja => (
                  <div key={pooja.id} onClick={() => setSelectedPooja(pooja)} className={`card-divine p-6 cursor-pointer flex items-center justify-between transition-all ${selectedPooja.id === pooja.id ? 'border-2 border-kumkum shadow-red' : ''}`}>
                    <div className="flex items-center gap-5">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPooja.id === pooja.id ? 'border-kumkum bg-kumkum' : 'border-gold/40'}`}>
                        {selectedPooja.id === pooja.id && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <div>
                        <p className="font-bold text-brown text-lg">{pooja.name}</p>
                        <div className="flex items-center gap-4 text-xs text-brown/60 mt-1">
                          <span className="flex items-center gap-1"><Clock size={12} /> {pooja.duration}</span>
                          <span className="flex items-center gap-1"><User size={12} /> {pooja.pandits} Pandit{pooja.pandits > 1 ? 's' : ''}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-serif font-bold text-2xl text-kumkum">{formatPrice(pooja.price)}</p>
                      <p className="text-xs text-brown/50">incl. samagri</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 1: DATE & TIME ── */}
          {step === 1 && (
            <div className="animate-fade-in space-y-8">
              <h2 className="font-serif font-bold text-3xl text-brown">Choose Date & Time</h2>
              <div>
                <label className="block text-xs font-semibold text-brown/70 mb-3 uppercase tracking-wider">Pooja Date</label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className="input-divine w-full"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brown/70 mb-3 uppercase tracking-wider">Preferred Start Time</label>
                <div className="grid grid-cols-3 gap-3">
                  {TIME_SLOTS.map(slot => (
                    <button key={slot} onClick={() => setSelectedTime(slot)} className={`py-4 rounded-2xl text-sm font-semibold border-2 transition-all ${selectedTime === slot ? 'bg-gradient-divine text-white border-transparent shadow-red' : 'border-gold/30 bg-white text-brown hover:border-gold'}`}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
                💡 <strong>Muhurat Tip:</strong> For best results, consult with the pandit to find the most auspicious muhurat for your specific ritual.
              </div>
            </div>
          )}

          {/* ── STEP 2: LOCATION ── */}
          {step === 2 && (
            <div className="animate-fade-in space-y-8">
              <h2 className="font-serif font-bold text-3xl text-brown">Ceremony Location</h2>
              <div className="grid grid-cols-3 gap-4">
                {(['home', 'temple', 'online'] as const).map(type => (
                  <button key={type} onClick={() => setLocationType(type)} className={`py-6 rounded-2xl border-2 flex flex-col items-center gap-2 text-sm font-semibold capitalize transition-all ${locationType === type ? 'border-kumkum bg-lotus shadow-red text-kumkum' : 'border-gold/30 bg-white text-brown hover:border-gold'}`}>
                    <span className="text-3xl">{type === 'home' ? '🏠' : type === 'temple' ? '🛕' : '💻'}</span>
                    {type}
                  </button>
                ))}
              </div>
              {locationType !== 'online' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Address Line 1 *</label>
                    <input type="text" placeholder="House/Flat No., Building Name, Street" className="input-divine w-full" value={address.line1} onChange={e => setAddress({ ...address, line1: e.target.value })} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">City *</label>
                      <input type="text" placeholder="City" className="input-divine w-full" value={address.city} onChange={e => setAddress({ ...address, city: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brown/70 mb-2 uppercase tracking-wider">Pincode *</label>
                      <input type="text" placeholder="110001" maxLength={6} className="input-divine w-full" value={address.pincode} onChange={e => setAddress({ ...address, pincode: e.target.value })} />
                    </div>
                  </div>
                </div>
              )}
              {locationType === 'online' && (
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-sm text-blue-800">
                  📹 <strong>Online Pooja:</strong> A video link will be shared on WhatsApp 30 minutes before the ceremony. Make sure your device is charged and you have a stable internet connection.
                </div>
              )}
            </div>
          )}

          {/* ── STEP 3: PAYMENT ── */}
          {step === 3 && (
            <div className="animate-fade-in space-y-6">
              <h2 className="font-serif font-bold text-3xl text-brown">Payment Method</h2>
              
              {/* Summary */}
              <div className="bg-white rounded-3xl border border-gold/20 shadow-sm p-6 space-y-3">
                <h3 className="font-semibold text-brown text-lg mb-4">Booking Summary</h3>
                <div className="flex justify-between text-sm text-brown/70"><span>{selectedPooja.name}</span><span>{formatPrice(selectedPooja.price)}</span></div>
                <div className="flex justify-between text-sm text-brown/70"><span>Samagri Included</span><span className="text-green-600">Free</span></div>
                <div className="flex justify-between text-sm text-brown/70"><span>Platform Fee</span><span>₹0</span></div>
                <div className="gold-divider-sm"></div>
                <div className="flex justify-between font-bold text-lg text-brown"><span>Total</span><span className="text-kumkum">{formatPrice(selectedPooja.price)}</span></div>
              </div>
              
              <div className="space-y-3">
                {PAYMENT_METHODS.map(pm => (
                  <div key={pm.id} onClick={() => setPaymentMethod(pm.id)} className={`card-divine p-5 cursor-pointer flex items-center gap-4 ${paymentMethod === pm.id ? 'border-2 border-kumkum shadow-red' : ''}`}>
                    <span className="text-2xl">{pm.icon}</span>
                    <span className="font-semibold text-brown">{pm.label}</span>
                    <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === pm.id ? 'border-kumkum bg-kumkum' : 'border-gold/40'}`}>
                      {paymentMethod === pm.id && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 4: CONFIRM ── */}
          {step === 4 && (
            <div className="animate-fade-in space-y-6">
              <h2 className="font-serif font-bold text-3xl text-brown">Review & Confirm</h2>
              <div className="card-divine p-8 space-y-5">
                <h3 className="font-serif font-bold text-2xl text-brown mb-6">Booking Details</h3>
                {[
                  { icon: '🕉️', label: 'Pooja', value: selectedPooja.name },
                  { icon: '📅', label: 'Date', value: selectedDate || '—' },
                  { icon: '🕐', label: 'Time', value: selectedTime || '—' },
                  { icon: '📍', label: 'Location', value: locationType === 'online' ? 'Online (Video)' : `${address.line1}, ${address.city} - ${address.pincode}` },
                  { icon: '💳', label: 'Payment', value: PAYMENT_METHODS.find(p => p.id === paymentMethod)?.label || '—' },
                  { icon: '💰', label: 'Total Amount', value: formatPrice(selectedPooja.price) },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 py-3 border-b border-gold/10 last:border-none last:py-0 last:pb-0">
                    <span className="text-xl w-8">{item.icon}</span>
                    <div className="flex-1">
                      <p className="text-xs text-brown/50 uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="font-semibold text-brown">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 text-sm text-brown/70 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <span className="text-2xl">🙏</span>
                <p>By confirming this booking, you agree to our <span className="text-kumkum font-medium">Terms of Service</span>. The pandit will call you 1 hour before arrival.</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-10">
            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)} className="btn-outline-gold px-8">← Back</button>
            )}
            <button
              onClick={step < STEPS.length - 1 ? () => setStep(s => s + 1) : handleConfirm}
              disabled={!canProceed() || isProcessing}
              className="btn-divine flex-1 gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>Processing... <span className="animate-spin">⏳</span></>
              ) : step < STEPS.length - 1 ? (
                'Continue →'
              ) : (
                'Confirm & Pay 🙏'
              )}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}