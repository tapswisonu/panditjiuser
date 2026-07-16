import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  duotone?: boolean;
}

// Global gradient definition to insert into SVGs
export const DivineGradients = () => (
  <svg className="absolute w-0 h-0" width="0" height="0">
    <defs>
      <linearGradient id="kumkum-haldi" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B71C1C" />
        <stop offset="100%" stopColor="#F4B400" />
      </linearGradient>
      <linearGradient id="saffron-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF8F00" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
    </defs>
  </svg>
);

export const OmIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Spiritual Om Icon Path */}
    <path d="M12 3a9 9 0 0 0-9 9c0 2.5 1.5 4.5 3.5 5.5.5.25.75-.25.5-.75-.5-1-1-2.25-1-3.75 0-3.5 2.5-6 6-6s6 2.5 6 6c0 1.5-.5 2.75-1 3.75-.25.5 0 1 .5.75C19.5 16.5 21 14.5 21 12a9 9 0 0 0-9-9z" />
    <path d="M12 6a6 6 0 0 0-6 6c0 1.5.5 2.5 1.25 3.25.3.3.7-.1.5-.5A4.5 4.5 0 0 1 12 8c2.5 0 4 1.5 4 4 0 .8-.2 1.5-.5 2-.2.4.2.8.5.5C16.8 13.8 17 13 17 12a5 5 0 0 0-5-6z" />
    <path d="M9 12c0-.5.4-.9.9-.9.6 0 1.1.4 1.1.9 0 .6-.5 1-1.1 1-.5 0-.9-.4-.9-1z" />
    <path d="M12 17c-2 0-3.5-1-3.5-2.5 0-.8.5-1.5 1.2-1.8.3-.1.5.2.3.4-.4.4-.5.9-.5 1.4 0 1 .8 1.5 2.5 1.5s2.5-.5 2.5-1.5c0-.5-.1-1-.5-1.4-.2-.2 0-.5.3-.4.7.3 1.2 1 1.2 1.8 0 1.5-1.5 2.5-3.5 2.5z" />
    <path d="M11 2.5c.3-.5.7-1 1.2-1 .5 0 .9.5 1.2 1M10.5 4c.5-.7 1.3-1 2-1s1.5.3 2 1" />
  </svg>
);

export const LotusIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M12 22C12 22 7 17 7 12C7 9.5 9 8 12 5C15 8 17 9.5 17 12C17 17 12 22 12 22Z" fill="url(#kumkum-haldi)" fillOpacity="0.15" />}
    <path d="M12 22C12 22 7 17 7 12C7 9.5 9 8 12 5C15 8 17 9.5 17 12C17 17 12 22 12 22Z" />
    <path d="M12 22C12 22 3 18 3 13C3 10.5 6 10 9 11C8.5 8 10 7 12 5" />
    <path d="M12 22C12 22 21 18 21 13C21 10.5 18 10 15 11C15.5 8 14 7 12 5" />
    <path d="M12 22C12 22 8 20 8 16C8 14 9.5 13 12 11.5C14.5 13 16 14 16 16C16 20 12 22 12 22Z" />
  </svg>
);

export const DiyaIcon = ({ size = 24, className = '', duotone = true, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {duotone && <path d="M12 6C12 6 9.5 9.5 9.5 11.5C9.5 13 10.5 14 12 14C13.5 14 14.5 13 14.5 11.5C14.5 9.5 12 6 12 6Z" fill="url(#saffron-gold)" fillOpacity="0.3" />}
    <path d="M2 13c0 5 4.5 7 10 7s10-2 10-7H2z" />
    <path d="M12 6C12 6 9.5 9.5 9.5 11.5C9.5 13 10.5 14 12 14C13.5 14 14.5 13 14.5 11.5C14.5 9.5 12 6 12 6Z" />
    <path d="M12 20v2M7 16.5v1.5M17 16.5v1.5" />
  </svg>
);

export const BellIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    <path d="M12 2v2" />
  </svg>
);

export const TempleIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2v4M4 10l8-6 8 6M3 10h18M5 10v10h14V10M9 20v-6a3 3 0 0 1 6 0v6" />
    <path d="M2 20h20" />
  </svg>
);

export const ShieldCheckIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

export const CoinsIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="8" cy="8" r="6" />
    <circle cx="16" cy="16" r="6" />
    <path d="M12 8a6 6 0 0 1 4.5 4.5" />
    <path d="M8 12a6 6 0 0 0 4.5-4.5" />
  </svg>
);

export const CalendarCheckIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

export const StarIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const SearchIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const MapPinIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const VideoIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="m22 8-6 4 6 4V8Z" />
    <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
  </svg>
);

export const CreditCardIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

export const UserIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const HeartIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export const ChatBubbleIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const HeadsetIcon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);
