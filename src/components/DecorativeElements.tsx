// Premium Decorative SVG Overlays – Pandit Ji Platform


// ── FLOATING PETALS (For Hero/Special Sections) ───────────────────────
export function FloatingPetals({ count = 15 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-10">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const animDelay = Math.random() * 10;
        const animDuration = Math.random() * 5 + 10;
        const isLeft = Math.random() > 0.5;
        
        return (
          <div
            key={i}
            className={`absolute top-[-50px] ${isLeft ? 'animate-petal' : 'animate-petal-l'}`}
            style={{
              left: `${left}%`,
              animationDelay: `${animDelay}s`,
              animationDuration: `${animDuration}s`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          >
            {/* Simple Rose Petal SVG */}
            <svg viewBox="0 0 24 24" fill="var(--kumkum-light)" className="w-full h-full drop-shadow-sm" style={{ transform: `rotate(${Math.random() * 360}deg)` }}>
              <path d="M12 2C8 2 4 6 4 12C4 18 8 22 12 22C16 22 20 18 20 12C20 6 16 2 12 2Z" opacity="0.8"/>
              <path d="M12 4C9.5 4 7 7.5 7 12C7 16.5 9.5 20 12 20C14.5 20 17 16.5 17 12C17 7.5 14.5 4 12 4Z" fill="var(--kumkum)"/>
            </svg>
          </div>
        );
      })}
    </div>
  );
}

// ── MANDALA RING (Rotating background element) ────────────────────────
export function MandalaRing({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none opacity-[0.03] animate-spin-slow ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5"/>
        <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1"/>
        <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="3" strokeDasharray="10 10"/>
        
        {/* Inner Petals */}
        {[...Array(12)].map((_, i) => (
          <path
            key={`petal-${i}`}
            d="M200 70C215 100 230 130 200 200C170 130 185 100 200 70Z"
            fill="currentColor"
            style={{ transform: `rotate(${i * 30}deg)`, transformOrigin: '200px 200px' }}
          />
        ))}
        
        {/* Outer Dots */}
        {[...Array(24)].map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx="200"
            cy="20"
            r="4"
            fill="currentColor"
            style={{ transform: `rotate(${i * 15}deg)`, transformOrigin: '200px 200px' }}
          />
        ))}
      </svg>
    </div>
  );
}

// ── INCENSE SMOKE (Rising smoke animation) ───────────────────────────
export function IncenseSmoke({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none overflow-visible ${className}`}>
      <svg viewBox="0 0 100 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 200 C30 150 70 100 50 50 C30 0 70 -50 50 -100"
          stroke="url(#smoke-grad)"
          strokeWidth="15"
          strokeLinecap="round"
          className="animate-smoke"
          style={{
            animation: 'incenseRise 4s ease-in-out infinite',
            filter: 'blur(8px)',
          }}
        />
        <defs>
          <linearGradient id="smoke-grad" x1="0" y1="200" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ── TEMPLE SILHOUETTE (Bottom background) ─────────────────────────────
export function TempleSilhouette({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 pointer-events-none select-none opacity-10 ${className}`}>
      <svg viewBox="0 0 1440 200" className="w-full h-full" fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 200V150H10V100L50 20L90 100H100V150H150V100L190 20L230 100H240V150H1440V200H0Z" />
        <path d="M250 160V110L280 50L310 110V160H250Z" />
        <path d="M1200 160V90L1250 10L1300 90V160H1200Z" />
        <path d="M800 180V120L840 40L880 120V180H800Z" />
      </svg>
    </div>
  );
}

// ── RANGOLI CORNER (Decorative corners) ───────────────────────────────
export function RangoliCorner({ className = '', position = 'top-left' }: { className?: string, position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  
  let posClass = '';
  switch(position) {
    case 'top-left': posClass = 'top-0 left-0 origin-top-left'; break;
    case 'top-right': posClass = 'top-0 right-0 rotate-90 origin-top-right'; break;
    case 'bottom-right': posClass = 'bottom-0 right-0 rotate-180 origin-bottom-right'; break;
    case 'bottom-left': posClass = 'bottom-0 left-0 -rotate-90 origin-bottom-left'; break;
  }

  return (
    <div className={`absolute pointer-events-none select-none opacity-[0.04] ${posClass} ${className}`}>
      <svg viewBox="0 0 200 200" width="200" height="200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L200 0 C180 50 150 100 100 150 C50 180 0 200 0 200 Z" opacity="0.3"/>
        <circle cx="30" cy="30" r="10" />
        <circle cx="70" cy="20" r="8" />
        <circle cx="20" cy="70" r="8" />
        <path d="M0 100 Q 50 100 70 70 Q 100 50 100 0" stroke="currentColor" strokeWidth="4" fill="none"/>
        <path d="M0 150 Q 80 150 110 110 Q 150 80 150 0" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="6 6"/>
      </svg>
    </div>
  );
}
