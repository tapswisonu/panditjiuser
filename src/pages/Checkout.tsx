import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pooja, date, time, locationType } = (location.state || {}) as any;
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [processing, setProcessing] = useState(false);
  const [paid, setPaid] = useState(false);

  if (!pooja) return (
    <div className="pt-24 text-center text-gray-500 min-h-screen flex flex-col items-center justify-center">
      <div className="text-6xl mb-4">🛒</div>
      <p className="text-xl font-medium text-gray-700">No booking in progress</p>
      <button onClick={() => navigate('/poojas')} className="btn-primary mt-6">Browse Poojas</button>
    </div>
  );

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaid(true);
    }, 2000);
  };

  if (paid) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-green-50">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center animate-slide-up">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed! 🎉</h2>
          <p className="text-gray-500 mb-4">Your booking for <strong>{pooja.name}</strong> has been confirmed. The pandit will contact you shortly.</p>
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-left space-y-2 mb-6">
            <div className="flex justify-between"><span className="text-gray-500">Booking ID</span><span className="font-mono font-semibold">#PJ{Math.floor(100000 + Math.random() * 900000)}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Pooja</span><span className="font-semibold">{pooja.name}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Date</span><span className="font-semibold">{date}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Amount Paid</span><span className="font-semibold text-green-600">₹{pooja.price.toLocaleString()}</span></div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn-primary w-full">Track Your Booking</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Secure Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Payment Panel */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-5">Choose Payment Method</h2>
            <div className="space-y-3 mb-6">
              {[
                { key: 'upi', label: 'UPI', icon: '📱' },
                { key: 'card', label: 'Credit / Debit Card', icon: '💳' },
                { key: 'netbanking', label: 'Net Banking', icon: '🏦' },
                { key: 'wallet', label: 'Wallet', icon: '👛' },
              ].map(m => (
                <button
                  key={m.key}
                  onClick={() => setPaymentMethod(m.key)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${paymentMethod === m.key ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-200'}`}
                >
                  <span className="text-2xl">{m.icon}</span>
                  <span className="font-semibold text-gray-700">{m.label}</span>
                  {paymentMethod === m.key && <span className="ml-auto text-orange-500">●</span>}
                </button>
              ))}
            </div>

            {paymentMethod === 'upi' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Enter UPI ID</label>
                <input className="input" placeholder="yourname@upi" value={upiId} onChange={e => setUpiId(e.target.value)} />
              </div>
            )}
            {paymentMethod === 'card' && (
              <div className="space-y-4 mb-6">
                <input className="input" placeholder="Card Number" maxLength={19} />
                <div className="grid grid-cols-2 gap-4">
                  <input className="input" placeholder="MM/YY" maxLength={5} />
                  <input className="input" placeholder="CVV" maxLength={3} type="password" />
                </div>
                <input className="input" placeholder="Cardholder Name" />
              </div>
            )}

            <button onClick={handlePay} disabled={processing} className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-base">
              {processing ? (
                <>
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Processing Payment...
                </>
              ) : (
                `Pay ₹${pooja.price.toLocaleString()} Securely 🔒`
              )}
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">🔒 256-bit SSL encrypted. Your payment is 100% secure.</p>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-md p-5">
              <h3 className="font-bold text-gray-800 mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Pooja</span><span className="font-semibold text-right">{pooja.name}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Date</span><span className="font-semibold">{date}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Time</span><span className="font-semibold">{time}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Location</span><span className="font-semibold">{locationType}</span></div>
                <div className="border-t pt-3 flex justify-between font-bold text-base">
                  <span>Total</span><span className="text-orange-600">₹{pooja.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-4 text-xs text-green-700 space-y-2">
              <p>✅ Free cancellation up to 24h before</p>
              <p>✅ 100% refund if pandit doesn't arrive</p>
              <p>✅ Verified & background-checked pandits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
