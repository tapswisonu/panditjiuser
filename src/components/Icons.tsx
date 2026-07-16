import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  duotone?: boolean;
}

// ─── Global SVG gradient definitions (render once at app root) ────────────────
export const DivineGradients = () => (
  <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true" focusable="false">
    <defs>
      {/* Kumkum Red → Haldi Gold */}
      <linearGradient id="kumkum-haldi" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B71C1C" />
        <stop offset="100%" stopColor="#F4B400" />
      </linearGradient>
      {/* Saffron → Gold */}
      <linearGradient id="saffron-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF8F00" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
      {/* Lotus Pink → White */}
      <linearGradient id="lotus-white" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F8BBD0" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
      {/* Camphor Blue */}
      <linearGradient id="camphor-blue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B3E5FC" />
        <stop offset="100%" stopColor="#4FC3F7" />
      </linearGradient>
      {/* Sacred Fire */}
      <linearGradient id="sacred-fire" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B71C1C" />
        <stop offset="50%" stopColor="#FF8F00" />
        <stop offset="100%" stopColor="#F4B400" />
      </linearGradient>
    </defs>
  </svg>
);

// ─── HINDU SPIRITUAL ICONS ────────────────────────────────────────────────────

/** OM / AUM — the primordial sacred sound */
export const OmIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    {duotone && <ellipse cx="12" cy="13" rx="8" ry="6" fill="url(#kumkum-haldi)" fillOpacity="0.12" />}
    {/* OM glyph rendered as outline paths */}
    <path d="M8 8C8 6.3 9.3 5 11 5C12.7 5 14 6.3 14 8C14 9.7 12.7 11 11 11C9.3 11 8 9.7 8 8Z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 8C6 9 5 11 5 13C5 15.8 7.2 18 10 18C11.5 18 12.8 17.3 13.5 16.2"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 11C13 11 15 12.5 15 14.5C15 16 13.8 17 12.5 17"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8.5C16.5 8 18 8.5 18.5 10C19 11.5 18 13 16.5 13.5"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 13.5C16 14.5 16 15.5 16.5 16.5"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 5.5C15 4.5 16.5 4.8 17 6"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Lotus — purity, spiritual awakening */
export const LotusIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M12 20C12 20 7.5 16.5 7.5 12C7.5 9.5 9.2 8.2 12 6C14.8 8.2 16.5 9.5 16.5 12C16.5 16.5 12 20 12 20Z"
      fill="url(#kumkum-haldi)" fillOpacity="0.18" stroke="none" />}
    {/* Center petal */}
    <path d="M12 20C12 20 7.5 16.5 7.5 12C7.5 9.5 9.2 8.2 12 6C14.8 8.2 16.5 9.5 16.5 12C16.5 16.5 12 20 12 20Z" />
    {/* Left petal */}
    <path d="M12 20C12 20 4 17 4 12C4 9.5 6.5 9 9.5 10.5C9 8 10.5 6.5 12 6" />
    {/* Right petal */}
    <path d="M12 20C12 20 20 17 20 12C20 9.5 17.5 9 14.5 10.5C15 8 13.5 6.5 12 6" />
    {/* Inner petals */}
    <path d="M12 20C12 20 8.5 18.5 8.5 15.5C8.5 13.5 10 12.5 12 11.5C14 12.5 15.5 13.5 15.5 15.5C15.5 18.5 12 20 12 20Z" />
    {/* Stem */}
    <line x1="12" y1="20" x2="12" y2="22.5" />
  </svg>
);

/** Diya (oil lamp) — divine light, auspiciousness */
export const DiyaIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Flame */}
    {duotone && <path d="M12 2C12 2 9.5 5.5 9.5 7.5C9.5 9 10.6 10 12 10C13.4 10 14.5 9 14.5 7.5C14.5 5.5 12 2 12 2Z"
      fill="url(#sacred-fire)" fillOpacity="0.7" stroke="none" />}
    <path d="M12 2C12 2 9.5 5.5 9.5 7.5C9.5 9 10.6 10 12 10C13.4 10 14.5 9 14.5 7.5C14.5 5.5 12 2 12 2Z" />
    {/* Inner flame glow */}
    <path d="M12 5C12 5 11 7 11 8C11 8.6 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7 12 5 12 5Z"
      fill="url(#saffron-gold)" fillOpacity="0.5" stroke="none" />
    {/* Diya bowl */}
    <path d="M4 14C4 14 4.5 18 12 18C19.5 18 20 14 20 14H4Z" />
    {/* Diya base */}
    <path d="M6 18C5 19.5 5 21 12 21C19 21 19 19.5 18 18" />
    {/* Wick */}
    <line x1="12" y1="10" x2="12" y2="14" />
    {/* Light rays */}
    <line x1="12" y1="2" x2="12" y2="0.5" strokeWidth="1.5" stroke="currentColor" strokeOpacity="0.5" />
    <line x1="9" y1="3" x2="8" y2="2" strokeWidth="1.5" stroke="currentColor" strokeOpacity="0.4" />
    <line x1="15" y1="3" x2="16" y2="2" strokeWidth="1.5" stroke="currentColor" strokeOpacity="0.4" />
  </svg>
);

/** Bell / Ghanti — calls to prayer, divine sound */
export const BellIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M5 9A7 7 0 0 1 19 9C19 16 22 18 22 18H2S5 16 5 9Z"
      fill="url(#saffron-gold)" fillOpacity="0.15" stroke="none" />}
    <path d="M5 9A7 7 0 0 1 19 9C19 16 22 18 22 18H2S5 16 5 9Z" />
    <path d="M13.73 21A2 2 0 0 1 10.27 21" />
    <line x1="12" y1="2" x2="12" y2="4" />
    {/* Bell top ring */}
    <path d="M10.5 2C10.5 1.17 11.17 0.5 12 0.5C12.83 0.5 13.5 1.17 13.5 2" />
  </svg>
);

/** Temple / Mandir */
export const TempleIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M3 11H21V22H3Z" fill="url(#kumkum-haldi)" fillOpacity="0.12" stroke="none" />}
    {/* Shikhara (tower) */}
    <path d="M12 2L14 6H10Z" />
    <path d="M10 6L8 10H16L14 6" />
    {/* Flag on top */}
    <line x1="12" y1="2" x2="12" y2="0.5" />
    {/* Main structure */}
    <rect x="3" y="10" width="18" height="12" rx="0.5" />
    {/* Door */}
    <path d="M9 22V16C9 14.9 9.9 14 11 14H13C14.1 14 15 14.9 15 16V22" />
    {/* Steps */}
    <line x1="1" y1="22" x2="23" y2="22" />
    <line x1="2" y1="20.5" x2="22" y2="20.5" strokeWidth="1" strokeOpacity="0.4" />
    {/* Columns */}
    <line x1="6" y1="10" x2="6" y2="22" strokeWidth="1.5" />
    <line x1="18" y1="10" x2="18" y2="22" strokeWidth="1.5" />
  </svg>
);

/** Kalash (sacred pot) — abundance, auspiciousness */
export const KalashIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M8 10C8 10 7 18 12 18C17 18 16 10 16 10Z"
      fill="url(#kumkum-haldi)" fillOpacity="0.2" stroke="none" />}
    {/* Coconut top */}
    <path d="M10 4C10 3 11 2 12 2C13 2 14 3 14 4" />
    {/* Mango leaves */}
    <path d="M8 5C8 5 7 3 9 3C10 3 10 4 10 4" />
    <path d="M16 5C16 5 17 3 15 3C14 3 14 4 14 4" />
    <path d="M12 2V5" />
    {/* Neck */}
    <path d="M9 5H15C15.5 5 16 5.5 16 6V7C16 7.5 15.5 8 15 8H9C8.5 8 8 7.5 8 7V6C8 5.5 8.5 5 9 5Z" />
    {/* Body */}
    <path d="M8 8C7 9 6.5 11 7 13C7.5 16 9 18 12 18C15 18 16.5 16 17 13C17.5 11 17 9 16 8H8Z" />
    {/* Base */}
    <rect x="8" y="18" width="8" height="2" rx="1" />
    <rect x="7" y="20" width="10" height="2" rx="1" />
    {/* Decorative line on pot */}
    <path d="M8.5 12C10 13 14 13 15.5 12" strokeWidth="1.5" strokeOpacity="0.5" />
  </svg>
);

/** Trishul — Lord Shiva's trident */
export const TrishulIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M12 8V22" stroke="url(#sacred-fire)" strokeWidth="3" strokeOpacity="0.2" />}
    {/* Center prong */}
    <path d="M12 2V14" />
    <path d="M10 2L12 6L14 2" />
    {/* Left prong */}
    <path d="M7 3L9 7" />
    <path d="M6.5 2L7 3L8.5 5.5" />
    {/* Right prong */}
    <path d="M17 3L15 7" />
    <path d="M17.5 2L17 3L15.5 5.5" />
    {/* Cross bar */}
    <line x1="7" y1="8" x2="17" y2="8" />
    {/* Handle */}
    <line x1="12" y1="14" x2="12" y2="22" strokeWidth="2.5" />
    {/* Damru symbol on handle */}
    <path d="M10 18L14 18" strokeWidth="1.5" />
  </svg>
);

/** Conch Shell / Shankh */
export const ConchIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M6 12C6 12 7 18 13 19C16 19.5 19 17 19 14C19 11 17 9 14 9C11 9 9 11 9 13C9 15 11 16 13 16C15 16 16 15 16 13"
      fill="url(#lotus-white)" fillOpacity="0.35" stroke="none" />}
    <path d="M6 12C6 12 7 18 13 19C16 19.5 19 17 19 14C19 11 17 9 14 9C11 9 9 11 9 13C9 15 11 16 13 16C15 16 16 15 16 13" />
    {/* Spire */}
    <path d="M6 12C5 9 5 6 8 4C10 3 12 4 13 6C14 8 13 10 12 10" />
    <path d="M8 4C7 3 6 2 5 2.5C4 3 4 5 5 6" />
    {/* Mouthpiece */}
    <path d="M19 14L22 16" />
    {/* Swirls */}
    <path d="M11 13C11 13 11.5 14 13 14" strokeWidth="1.5" />
  </svg>
);

/** Havan Kund (sacred fire pit) */
export const HavanKundIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M7 15L12 4L17 15Z" fill="url(#sacred-fire)" fillOpacity="0.5" stroke="none" />}
    {/* Flames */}
    <path d="M12 3C12 3 10 7 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9C14 7 12 3 12 3Z" />
    <path d="M9 5C9 5 8 8 8 9.5C8 10.3 8.7 11 9.5 11" />
    <path d="M15 5C15 5 16 8 16 9.5C16 10.3 15.3 11 14.5 11" />
    {/* Kund (square fire pit) */}
    <path d="M5 15L7 11H17L19 15H5Z" />
    <rect x="4" y="15" width="16" height="3" rx="0.5" />
    <rect x="5" y="18" width="14" height="2" rx="0.5" />
    {/* Legs */}
    <line x1="7" y1="20" x2="6" y2="22" />
    <line x1="17" y1="20" x2="18" y2="22" />
    <line x1="12" y1="20" x2="12" y2="22" />
  </svg>
);

/** Incense / Agarbatti */
export const IncenseIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Smoke wisps */}
    <path d="M8 2C8 2 7 4 8 5C9 6 8 8 7 9" strokeLinecap="round" strokeOpacity="0.6" />
    <path d="M12 1C12 1 11 3.5 12 5C13 6.5 11.5 8.5 11 10" strokeLinecap="round" strokeOpacity="0.8" />
    {duotone && <path d="M12 1C12 1 11 3.5 12 5C13 6.5 11.5 8.5 11 10"
      stroke="url(#saffron-gold)" strokeWidth="2" strokeLinecap="round" />}
    {/* Stick */}
    <line x1="12" y1="10" x2="16" y2="22" strokeWidth="2.5" />
    {/* Holder */}
    <path d="M13.5 18H18.5C19 18 19 18.5 19 18.5V20.5C19 21 18.5 21 18.5 21H13.5C13 21 13 20.5 13 20.5V18.5C13 18 13.5 18 13.5 18Z" />
    {/* Ash glow at tip */}
    <circle cx="11.7" cy="10.5" r="1" fill="url(#sacred-fire)" stroke="none" fillOpacity="0.7" />
  </svg>
);

/** Peacock Feather — associated with Lord Krishna */
export const PeacockFeatherIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <ellipse cx="12" cy="8" rx="4" ry="5" fill="url(#camphor-blue)" fillOpacity="0.25" stroke="none" />}
    {/* Eye of feather */}
    <ellipse cx="12" cy="8" rx="4" ry="5" />
    <ellipse cx="12" cy="8" rx="2" ry="2.5" />
    <circle cx="12" cy="8" r="1" fill="currentColor" fillOpacity="0.6" stroke="none" />
    {/* Quill lines on eye */}
    <path d="M12 3V6" strokeWidth="1" />
    <path d="M8.5 5.5L10 7" strokeWidth="1" />
    <path d="M15.5 5.5L14 7" strokeWidth="1" />
    {/* Central stem */}
    <line x1="12" y1="13" x2="12" y2="22" strokeWidth="2" />
    {/* Barbs */}
    <path d="M12 16C11 15 10 15 9 16" strokeWidth="1.5" />
    <path d="M12 16C13 15 14 15 15 16" strokeWidth="1.5" />
    <path d="M12 18.5C11 17.5 9.5 17.5 8.5 18.5" strokeWidth="1.5" />
    <path d="M12 18.5C13 17.5 14.5 17.5 15.5 18.5" strokeWidth="1.5" />
    <path d="M12 21C11.5 20 10 20 9 20.5" strokeWidth="1.5" />
    <path d="M12 21C12.5 20 14 20 15 20.5" strokeWidth="1.5" />
  </svg>
);

/** Tulsi Leaf */
export const TulsiIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M12 20C12 20 5 15 5 9C5 5 8 3 12 3C16 3 19 5 19 9C19 15 12 20 12 20Z"
      fill="#4CAF50" fillOpacity="0.15" stroke="none" />}
    {/* Main leaf */}
    <path d="M12 20C12 20 5 15 5 9C5 5 8 3 12 3C16 3 19 5 19 9C19 15 12 20 12 20Z" />
    {/* Center vein */}
    <line x1="12" y1="3" x2="12" y2="20" strokeDasharray="2 1.5" strokeWidth="1.5" />
    {/* Side veins */}
    <path d="M12 8L9 10" strokeWidth="1" />
    <path d="M12 8L15 10" strokeWidth="1" />
    <path d="M12 12L9 14" strokeWidth="1" />
    <path d="M12 12L15 14" strokeWidth="1" />
    {/* Stem */}
    <line x1="12" y1="20" x2="12" y2="23" strokeWidth="2" />
  </svg>
);

/** Rudraksha bead */
export const RudrakshaIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <circle cx="12" cy="12" r="7" fill="url(#kumkum-haldi)" fillOpacity="0.15" stroke="none" />}
    <circle cx="12" cy="12" r="7" />
    {/* Mukhi lines (5 mukhi) */}
    <path d="M12 5C12 5 9 8 9 12C9 16 12 19 12 19" strokeWidth="1.5" />
    <path d="M12 5C12 5 15 8 15 12C15 16 12 19 12 19" strokeWidth="1.5" />
    <path d="M5.5 9.5C5.5 9.5 8.5 10 10 12C11.5 14 11 17 11 17" strokeWidth="1.5" />
    <path d="M18.5 9.5C18.5 9.5 15.5 10 14 12C12.5 14 13 17 13 17" strokeWidth="1.5" />
    <path d="M7 17C7 17 9 14.5 12 14.5C15 14.5 17 17 17 17" strokeWidth="1.5" />
    {/* Top hole */}
    <circle cx="12" cy="4" r="1.2" fill="currentColor" fillOpacity="0.3" stroke="none" />
    {/* Bottom hole */}
    <circle cx="12" cy="20" r="1.2" fill="currentColor" fillOpacity="0.3" stroke="none" />
    {/* String */}
    <line x1="12" y1="2" x2="12" y2="4" strokeWidth="1.5" />
    <line x1="12" y1="20" x2="12" y2="22" strokeWidth="1.5" />
  </svg>
);

/** Marigold Flower */
export const MarigoldIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <circle cx="12" cy="12" r="3.5" fill="url(#saffron-gold)" fillOpacity="0.4" stroke="none" />}
    {/* Petals - 8 petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 12 + 4 * Math.cos(rad);
      const y1 = 12 + 4 * Math.sin(rad);
      const x2 = 12 + 7.5 * Math.cos(rad);
      const y2 = 12 + 7.5 * Math.sin(rad);
      return (
        <ellipse
          key={i}
          cx={(x1 + x2) / 2}
          cy={(y1 + y2) / 2}
          rx="2"
          ry="1"
          transform={`rotate(${angle}, ${(x1 + x2) / 2}, ${(y1 + y2) / 2})`}
          fill={duotone ? "url(#saffron-gold)" : "none"}
          fillOpacity={duotone ? "0.3" : "0"}
        />
      );
    })}
    <circle cx="12" cy="12" r="7.5" />
    <circle cx="12" cy="12" r="3.5" />
    {/* Center dots */}
    <circle cx="12" cy="12" r="1.5" fill="currentColor" fillOpacity="0.5" stroke="none" />
    {/* Stem */}
    <line x1="12" y1="19.5" x2="12" y2="23" strokeWidth="2" />
    <path d="M12 21L10 20" strokeWidth="1.5" />
  </svg>
);

/** Holy Book / Scripture */
export const HolyBookIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <rect x="4" y="3" width="14" height="17" rx="2" fill="url(#kumkum-haldi)" fillOpacity="0.15" stroke="none" />}
    {/* Book body */}
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" />
    {/* Lines of text */}
    <line x1="8" y1="8" x2="16" y2="8" strokeWidth="1.5" />
    <line x1="8" y1="11" x2="16" y2="11" strokeWidth="1.5" />
    <line x1="8" y1="14" x2="14" y2="14" strokeWidth="1.5" />
    {/* Om on cover */}
    <path d="M10 5.5C10 4.9 10.4 4.5 11 4.5C11.6 4.5 12 4.9 12 5.5C12 6.1 11.6 6.5 11 6.5"
      strokeWidth="1.5" />
    <path d="M11 6.5C12.2 6.5 13 7.2 13 8C13 8.8 12.2 9 11 9" strokeWidth="1.5" />
  </svg>
);

/** Garland / Mala */
export const GarlandIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M3 5C8 5 16 5 21 5C21 10 18 18 12 20C6 18 3 10 3 5Z"
      fill="url(#kumkum-haldi)" fillOpacity="0.12" stroke="none" />}
    {/* Garland arc */}
    <path d="M3 5C8 5 16 5 21 5C21 10 18 18 12 20C6 18 3 10 3 5Z" />
    {/* Flowers on garland */}
    <circle cx="5" cy="6" r="1.5" />
    <circle cx="8.5" cy="5.2" r="1.5" />
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="15.5" cy="5.2" r="1.5" />
    <circle cx="19" cy="6" r="1.5" />
    <circle cx="20" cy="9.5" r="1.5" />
    <circle cx="18" cy="14" r="1.5" />
    <circle cx="14.5" cy="18" r="1.5" />
    <circle cx="12" cy="19.5" r="1.5" />
    <circle cx="9.5" cy="18" r="1.5" />
    <circle cx="6" cy="14" r="1.5" />
    <circle cx="4" cy="9.5" r="1.5" />
    {/* Hanging string ends */}
    <line x1="3" y1="5" x2="3" y2="2" strokeWidth="1.5" />
    <line x1="21" y1="5" x2="21" y2="2" strokeWidth="1.5" />
  </svg>
);

/** Camphor Flame */
export const CamphorFlameIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M12 2C12 2 8 6 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 6 12 2 12 2Z"
      fill="url(#sacred-fire)" fillOpacity="0.5" stroke="none" />}
    {/* Main flame */}
    <path d="M12 2C12 2 8 6 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 6 12 2 12 2Z" />
    {/* Inner bright flame */}
    <path d="M12 6C12 6 10.5 8.5 10.5 10C10.5 11 11.2 11.5 12 11.5C12.8 11.5 13.5 11 13.5 10C13.5 8.5 12 6 12 6Z"
      fill="url(#camphor-blue)" fillOpacity="0.6" stroke="currentColor" strokeWidth="1" />
    {/* Camphor plate */}
    <ellipse cx="12" cy="16" rx="4" ry="1" />
    <path d="M8 16L7.5 19H16.5L16 16" />
    {/* Plate stand */}
    <path d="M9 19H15" strokeWidth="2.5" />
    <line x1="10" y1="19" x2="9.5" y2="22" />
    <line x1="14" y1="19" x2="14.5" y2="22" />
    <line x1="9.5" y1="22" x2="14.5" y2="22" />
  </svg>
);

/** Swastik — traditional Hindu auspicious symbol */
export const SwastikIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <rect x="4" y="4" width="16" height="16" rx="3" fill="url(#saffron-gold)" fillOpacity="0.1" stroke="none" />}
    {/* Center cross */}
    <line x1="12" y1="6" x2="12" y2="18" />
    <line x1="6" y1="12" x2="18" y2="12" />
    {/* Clockwise arms (traditional Swastik) */}
    <path d="M12 6L16 6L16 10" />
    <path d="M18 12L18 8L14 8" strokeWidth="1" strokeOpacity="0.7" />
    <path d="M12 18L8 18L8 14" />
    <path d="M6 12L6 16L10 16" strokeWidth="1" strokeOpacity="0.7" />
    {/* Dots in quadrants */}
    <circle cx="8" cy="8" r="1" fill="currentColor" fillOpacity="0.4" stroke="none" />
    <circle cx="16" cy="16" r="1" fill="currentColor" fillOpacity="0.4" stroke="none" />
  </svg>
);

/** Banana Leaf */
export const BananaLeafIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M4 20C4 20 6 10 12 6C18 2 22 4 22 4C22 4 20 14 14 18C8 22 4 20 4 20Z"
      fill="#4CAF50" fillOpacity="0.2" stroke="none" />}
    <path d="M4 20C4 20 6 10 12 6C18 2 22 4 22 4C22 4 20 14 14 18C8 22 4 20 4 20Z" />
    {/* Center vein */}
    <line x1="4" y1="20" x2="22" y2="4" strokeDasharray="3 2" strokeWidth="1.5" />
    {/* Side veins */}
    <path d="M8 17L12 13" strokeWidth="1" />
    <path d="M10 19L14 14" strokeWidth="1" />
    <path d="M14 8L17 11" strokeWidth="1" />
    <path d="M17 6L19 9" strokeWidth="1" />
    {/* Stem */}
    <line x1="4" y1="20" x2="2" y2="22" strokeWidth="2.5" />
  </svg>
);

/** Coconut */
export const CoconutIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <ellipse cx="12" cy="13" rx="7" ry="7" fill="url(#kumkum-haldi)" fillOpacity="0.15" stroke="none" />}
    {/* Leaves */}
    <path d="M12 6C12 6 9 4 7 2C9 3 11 5 12 6Z" />
    <path d="M12 6C12 6 15 4 17 2C15 3 13 5 12 6Z" />
    <path d="M12 6C12 6 12 3 12 1" />
    {/* Coconut body */}
    <ellipse cx="12" cy="13" rx="7" ry="7" />
    {/* Three eyes of coconut */}
    <circle cx="10" cy="10.5" r="0.8" fill="currentColor" fillOpacity="0.5" stroke="none" />
    <circle cx="12" cy="9.5" r="0.8" fill="currentColor" fillOpacity="0.5" stroke="none" />
    <circle cx="14" cy="10.5" r="0.8" fill="currentColor" fillOpacity="0.5" stroke="none" />
    {/* Texture lines */}
    <path d="M5.5 11C6.5 12.5 8 14 10 15" strokeWidth="1.2" strokeOpacity="0.4" />
    <path d="M6 14C7 15 8.5 16 10.5 17" strokeWidth="1.2" strokeOpacity="0.4" />
  </svg>
);

// ─── UI / UTILITY ICONS ───────────────────────────────────────────────────────

/** Shield Check — verified pandits */
export const ShieldCheckIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M12 22S4 18 4 12V5L12 2L20 5V12C20 18 12 22 12 22Z"
      fill="url(#kumkum-haldi)" fillOpacity="0.15" stroke="none" />}
    <path d="M12 22S4 18 4 12V5L12 2L20 5V12C20 18 12 22 12 22Z" />
    <path d="M9 12L11 14L15 10" strokeWidth="2.5" />
  </svg>
);

/** Coins / Wallet — transparent pricing */
export const CoinsIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <circle cx="8" cy="8" r="6" fill="url(#saffron-gold)" fillOpacity="0.2" stroke="none" />}
    {duotone && <circle cx="16" cy="16" r="6" fill="url(#saffron-gold)" fillOpacity="0.2" stroke="none" />}
    <circle cx="8" cy="8" r="6" />
    <circle cx="16" cy="16" r="6" />
    <path d="M14 8H10V12H14" strokeWidth="1.5" />
    <line x1="12" y1="8" x2="12" y2="12" strokeWidth="1.5" />
  </svg>
);

/** Calendar Check — instant booking */
export const CalendarCheckIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <rect x="3" y="4" width="18" height="18" rx="2" fill="url(#saffron-gold)" fillOpacity="0.12" stroke="none" />}
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M9 16L11 18L15 14" strokeWidth="2.5" />
  </svg>
);

/** Star — ratings */
export const StarIcon = ({ size = 24, className = '', duotone = false, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill="url(#saffron-gold)" fillOpacity="0.25" stroke="none" />}
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/** Search / Magnifying Glass */
export const SearchIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

/** Map Pin — location */
export const MapPinIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z"
      fill="url(#kumkum-haldi)" fillOpacity="0.15" stroke="none" />}
    <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/** Clock — duration */
export const ClockIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <circle cx="12" cy="12" r="10" fill="url(#saffron-gold)" fillOpacity="0.1" stroke="none" />}
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/** Video Camera — online pooja */
export const VideoIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <rect x="2" y="6" width="14" height="12" rx="2" fill="url(#camphor-blue)" fillOpacity="0.2" stroke="none" />}
    <path d="M23 7L16 12L23 17V7Z" />
    <rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
);

/** Credit Card / UPI Payment */
export const CreditCardIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <rect x="1" y="4" width="22" height="16" rx="2" fill="url(#saffron-gold)" fillOpacity="0.12" stroke="none" />}
    <rect x="1" y="4" width="22" height="16" rx="2" />
    <line x1="1" y1="10" x2="23" y2="10" strokeWidth="2.5" />
    <line x1="5" y1="16" x2="9" y2="16" strokeWidth="1.5" />
    <line x1="12" y1="16" x2="14" y2="16" strokeWidth="1.5" />
  </svg>
);

/** Headset — support */
export const HeadsetIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M3 18V12A9 9 0 0 1 21 12V18" fill="none" stroke="none" />}
    {duotone && <path d="M3 18V12A9 9 0 0 1 21 12V18"
      fill="url(#saffron-gold)" fillOpacity="0.1" />}
    <path d="M3 18V12A9 9 0 0 1 21 12V18" />
    <path d="M21 19A2 2 0 0 1 19 21H18A2 2 0 0 1 16 19V16A2 2 0 0 1 18 14H21Z" />
    <path d="M3 19A2 2 0 0 0 5 21H6A2 2 0 0 0 8 19V16A2 2 0 0 0 6 14H3Z" />
  </svg>
);

/** Chat Bubble — reviews */
export const ChatBubbleIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5Z"
      fill="url(#lotus-white)" fillOpacity="0.3" stroke="none" />}
    <path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5Z" />
    <line x1="8" y1="9" x2="16" y2="9" strokeWidth="1.5" />
    <line x1="8" y1="13" x2="13" y2="13" strokeWidth="1.5" />
  </svg>
);

/** User — profile */
export const UserIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <circle cx="12" cy="7" r="4" fill="url(#lotus-white)" fillOpacity="0.5" stroke="none" />}
    <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

/** Heart — favorites */
export const HeartIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M20.84 4.61A5.5 5.5 0 0 0 12 8.3 5.5 5.5 0 0 0 3.16 4.61C1.45 6.31 1.45 9 3.16 10.7L12 20L20.84 10.7C22.55 9 22.55 6.31 20.84 4.61Z"
      fill="url(#kumkum-haldi)" fillOpacity="0.2" stroke="none" />}
    <path d="M20.84 4.61A5.5 5.5 0 0 0 12 8.3 5.5 5.5 0 0 0 3.16 4.61C1.45 6.31 1.45 9 3.16 10.7L12 20L20.84 10.7C22.55 9 22.55 6.31 20.84 4.61Z" />
  </svg>
);

/** Home Temple — home pooja */
export const HomeTempleIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M3 12L12 3L21 12V21H3Z" fill="url(#kumkum-haldi)" fillOpacity="0.12" stroke="none" />}
    <path d="M3 12L12 3L21 12V21H3Z" />
    {/* Temple door arch */}
    <path d="M9 21V15C9 13.3 10.3 12 12 12C13.7 12 15 13.3 15 15V21" />
    {/* Miniature shikhara on roof */}
    <line x1="12" y1="3" x2="12" y2="1" />
    <path d="M11 3L12 1L13 3" strokeWidth="1.5" />
    {/* Windows */}
    <rect x="5" y="13" width="3" height="3" rx="0.5" />
    <rect x="16" y="13" width="3" height="3" rx="0.5" />
  </svg>
);

/** Arrow Right */
export const ArrowRightIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/** Check Circle */
export const CheckCircleIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <circle cx="12" cy="12" r="10" fill="#4CAF50" fillOpacity="0.15" stroke="none" />}
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12L11 14L15 10" strokeWidth="2.5" />
  </svg>
);

/** Sparkles / Divine light */
export const SparklesIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z"
      fill="url(#saffron-gold)" fillOpacity="0.4" stroke="none" />}
    <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
    <path d="M19 17L19.5 19.5L22 20L19.5 20.5L19 23L18.5 20.5L16 20L18.5 19.5L19 17Z" strokeWidth="1.5" />
    <path d="M5 2L5.35 3.65L7 4L5.35 4.35L5 6L4.65 4.35L3 4L4.65 3.65L5 2Z" strokeWidth="1.5" />
  </svg>
);

/** Menu / Hamburger */
export const MenuIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="3" y1="7" x2="21" y2="7" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="17" x2="21" y2="17" />
  </svg>
);

/** Close / X */
export const CloseIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/** Log out / Door */
export const LogOutIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M9 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H9" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

/** Phone Call */
export const PhoneIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 16.92V19.92A2 2 0 0 1 20.35 21.83C17.03 21.52 13.85 20.35 11.08 18.43C8.49 16.67 6.3 14.48 4.54 11.89C2.61 9.11 1.44 5.91 1.14 2.57A2 2 0 0 1 3.11 0.4H6.11A2 2 0 0 1 8.11 2.18C8.34 3.64 8.78 5.06 9.41 6.39C9.65 6.89 9.52 7.49 9.09 7.84L7.77 8.88C9.42 11.78 11.88 14.24 14.78 15.89L15.82 14.57C16.17 14.14 16.77 14.01 17.27 14.25C18.6 14.88 20.02 15.32 21.48 15.55C21.85 15.61 22.18 15.82 22.4 16.13A2 2 0 0 1 22 16.92Z" />
  </svg>
);

/** Social icons */
export const FacebookIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M18 2H15A5 5 0 0 0 10 7V10H7V14H10V22H14V14H17L18 10H14V7A1 1 0 0 1 15 6H18Z" />
  </svg>
);

export const InstagramIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const YoutubeIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22.54 6.42A2.78 2.78 0 0 0 20.59 4.47C18.88 4 12 4 12 4S5.12 4 3.41 4.47A2.78 2.78 0 0 0 1.46 6.42C1 8.14 1 11.72 1 11.72S1 15.3 1.46 17.02A2.78 2.78 0 0 0 3.41 18.97C5.12 19.44 12 19.44 12 19.44S18.88 19.44 20.59 18.97A2.78 2.78 0 0 0 22.54 17.02C23 15.3 23 11.72 23 11.72S23 8.14 22.54 6.42Z" />
    <polygon points="9.75 15.02 15.5 11.72 9.75 8.42 9.75 15.02" />
  </svg>
);

export const TwitterIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M4 4L20 20M4 20L20 4" strokeWidth="1.5" />
    <path d="M20 4H14L4 20H10L20 4Z" />
  </svg>
);

/** Fire — energy, power */
export const FireIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M8.5 14C8.5 11 10 8 12 5C14 8 15.5 11 15.5 14C15.5 17.038 13.985 19.5 12 19.5C10.015 19.5 8.5 17.038 8.5 14Z"
      fill="url(#sacred-fire)" fillOpacity="0.4" stroke="none" />}
    <path d="M12 2C12 2 7 8 7 13C7 16.866 9.239 20 12 20C14.761 20 17 16.866 17 13C17 8 12 2 12 2Z" />
    <path d="M12 12C12 12 10 14 10 15.5C10 16.328 10.895 17 12 17C13.105 17 14 16.328 14 15.5C14 14 12 12 12 12Z"
      fill="url(#sacred-fire)" fillOpacity="0.6" stroke="none" />
  </svg>
);

/** Mandala decorative (used for backgrounds) */
export const MandalaIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor"
    strokeWidth="0.8" strokeLinecap="round" className={className} {...props}>
    <circle cx="50" cy="50" r="48" />
    <circle cx="50" cy="50" r="36" />
    <circle cx="50" cy="50" r="24" />
    <circle cx="50" cy="50" r="12" />
    <circle cx="50" cy="50" r="4" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => {
      const rad = (a * Math.PI) / 180;
      return (
        <g key={i}>
          <line
            x1={50 + 12 * Math.cos(rad)} y1={50 + 12 * Math.sin(rad)}
            x2={50 + 48 * Math.cos(rad)} y2={50 + 48 * Math.sin(rad)}
          />
          <ellipse
            cx={50 + 30 * Math.cos(rad)} cy={50 + 30 * Math.sin(rad)}
            rx="5" ry="2"
            transform={`rotate(${a}, ${50 + 30 * Math.cos(rad)}, ${50 + 30 * Math.sin(rad)})`}
          />
        </g>
      );
    })}
  </svg>
);
