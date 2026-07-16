/**
 * Sacred Icons – Premium Lucide React Icon Layer
 * All icons are from lucide-react (premium, pixel-perfect, consistent stroke).
 * Custom SVGs are kept ONLY for elements with no Lucide equivalent:
 *   - OmIcon, WhatsAppIcon (brand), LotusSVG
 */

// ── RE-EXPORT LUCIDE ICONS WITH PROJECT NAMING ────────────────────────────
export {
  // Navigation
  Menu        as MenuIcon,
  X           as XIcon,
  ChevronDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft  as ChevronLeftIcon,
  ChevronUp    as ChevronUpIcon,
  ArrowRight  as ArrowRightIcon,
  ArrowLeft   as ArrowLeftIcon,

  // Actions
  Search      as SearchIcon,
  Filter      as FilterIcon,
  SlidersHorizontal as FilterAltIcon,
  Heart       as HeartIcon,
  Check       as CheckIcon,
  Plus        as PlusIcon,
  Minus       as MinusIcon,
  Trash2      as TrashIcon,
  Edit3       as EditIcon,
  Copy        as CopyIcon,
  Share2      as ShareIcon,
  Download    as DownloadIcon,
  Upload      as UploadIcon,
  RefreshCw   as RefreshIcon,

  // UI
  Sun         as SunIcon,
  Moon        as MoonIcon,
  Eye         as EyeIcon,
  EyeOff      as EyeOffIcon,
  Bell        as BellIcon,
  Settings    as SettingsIcon,
  LogOut      as LogOutIcon,
  LogIn       as LogInIcon,
  AlertCircle as AlertIcon,
  Info        as InfoIcon,
  HelpCircle  as HelpIcon,

  // People & Identity
  User        as UserIcon,
  Users       as UsersIcon,
  UserCheck   as UserCheckIcon,
  BadgeCheck  as BadgeCheckIcon,
  ShieldCheck as VerifiedIcon,
  Shield      as ShieldIcon,

  // Location
  MapPin      as LocationIcon,
  Map         as MapIcon,
  Navigation  as NavigationIcon,
  Globe       as GlobeIcon,

  // Communication
  Phone       as PhoneIcon,
  Mail        as MailIcon,
  MessageCircle as MessageIcon,
  MessageSquare as ChatIcon,
  Send        as SendIcon,

  // Media
  Video       as VideoIcon,
  Camera      as CameraIcon,
  Image       as ImageIcon,
  Play        as PlayIcon,
  Mic         as MicIcon,

  // Time & Schedule
  Calendar    as CalendarIcon,
  Clock       as ClockIcon,
  Timer       as TimerIcon,
  AlarmClock  as AlarmIcon,

  // Finance
  CreditCard  as CreditCardIcon,
  Wallet      as WalletIcon,
  DollarSign  as PriceIcon,
  IndianRupee as RupeeIcon,
  Receipt     as ReceiptIcon,
  Banknote    as BanknoteIcon,

  // Content
  BookOpen    as BookIcon,
  FileText    as DocumentIcon,
  Newspaper   as NewsIcon,
  Tag         as TagIcon,
  Award       as AwardIcon,
  Trophy      as TrophyIcon,
  Star        as StarIcon,

  // Nature & Spiritual
  Flame       as FireIcon,
  Wind        as WindIcon,
  Sun         as DiyaIconFallback,
  Flower2     as FlowerIcon,
  Sparkles    as SparklesIcon,
  Gem         as GemIcon,

  // Home & Building
  Home        as HomeIcon,
  Building    as BuildingIcon,
  Landmark    as TempleIconFallback,
  DoorOpen    as DoorIcon,

  // Status
  CheckCircle as CheckCircleIcon,
  XCircle     as XCircleIcon,
  Loader2     as SpinnerIcon,
  Zap         as ZapIcon,
} from 'lucide-react';

// Re-export Star with a filled variant wrapper
export { Star as StarOutlineIcon } from 'lucide-react';

// ── CUSTOM: STAR FILLED ───────────────────────────────────────────────────
export function StarFilledIcon({ size = 16, className = '', color = '#F4B400' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
    </svg>
  );
}

// ── CUSTOM: OM SYMBOL ─────────────────────────────────────────────────────
export function OmIcon({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill={color} xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontSize="72" fontFamily="serif" fill={color}>ॐ</text>
    </svg>
  );
}

// ── CUSTOM: WHATSAPP (Brand) ─────────────────────────────────────────────
export function WhatsAppIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

// ── CUSTOM: CERTIFICATE (Lucide has Award but we keep a richer one) ───────
export function CertificateIcon({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) {
  // Using Lucide's GraduationCap concept via SVG
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="13" rx="2" stroke={color} strokeWidth="1.5"/>
      <path d="M6 8H18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 12H13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17" cy="17.5" r="3.5" stroke={color} strokeWidth="1.5"/>
      <path d="M19.5 20.5L22 23" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ── CUSTOM: DIYA / LAMP ──────────────────────────────────────────────────
export function DiyaIcon({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C12 3 9.5 5.5 9.5 7C9.5 8.38 10.62 9.5 12 9.5C13.38 9.5 14.5 8.38 14.5 7C14.5 5.5 12 3 12 3Z" fill={color} stroke={color} strokeWidth="0.5"/>
      <line x1="12" y1="9" x2="12" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 16H17L16 21H8L7 16Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 16C7 14.1 9.24 12.5 12 12.5C14.76 12.5 17 14.1 17 16" stroke={color} strokeWidth="1.5"/>
      <line x1="5" y1="21" x2="19" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ── CUSTOM: KALASH ────────────────────────────────────────────────────────
export function KalashIcon({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C10 2 8.5 3.5 8.5 5C8.5 6.5 12 8 12 8C12 8 15.5 6.5 15.5 5C15.5 3.5 14 2 12 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 8H15V11C15 13.5 16 15 16 17H8C8 15 9 13.5 9 11V8Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="7" y="17" width="10" height="2" rx="1" stroke={color} strokeWidth="1.5"/>
      <rect x="8" y="19" width="8" height="3" rx="1" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
}

// ── CUSTOM: TRISHUL ──────────────────────────────────────────────────────
export function TrishulIcon({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="22" x2="12" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="10" x2="12" y2="4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 4C9 2.5 10 1 12 1C14 1 15 2.5 15 4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 4C7.5 4.5 7 6 8.5 7.5L12 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 4C16.5 4.5 17 6 15.5 7.5L12 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="9" y1="14" x2="15" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ── CUSTOM: CONCH / SHANKH ──────────────────────────────────────────────
export function ConchIcon({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5C17.5 6.5 19 9 19 12C19 16 16 19 12 19C10 19 8.5 18.2 7.5 17L5 19.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 5C13 3.5 10.5 3.5 8.5 5C6.5 6.5 6.5 9.5 8.5 11C9.5 12 11 12 12 11" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 11C13 10 14 9 14.5 8C15 7 15 6 15 5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 19.5L6.5 21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 10.5C17.5 12 17 13.5 16.5 14.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ── CUSTOM: RUDRAKSHA ────────────────────────────────────────────────────
export function RudrakshaIcon({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5"/>
      <line x1="12" y1="3" x2="12" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="16" x2="12" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="3" y1="12" x2="8" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="16" y1="12" x2="21" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5.6" y1="5.6" x2="8.9" y2="8.9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15.1" y1="15.1" x2="18.4" y2="18.4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5.6" y1="18.4" x2="8.9" y2="15.1" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15.1" y1="8.9" x2="18.4" y2="5.6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ── CUSTOM: PEACOCK FEATHER ──────────────────────────────────────────────
export function PeacockIcon({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22V12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 12C12 12 7.5 9.5 6 6.5C5 4.5 6.5 2.5 8.5 3.5C9.5 4 11 6 12 8C13 6 14.5 4 15.5 3.5C17.5 2.5 19 4.5 18 6.5C16.5 9.5 12 12 12 12Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <ellipse cx="12" cy="10" rx="2.5" ry="3" stroke={color} strokeWidth="1.5"/>
      <circle cx="12" cy="10" r="1" fill={color}/>
    </svg>
  );
}

// ── LOTUS SVG (decorative, large) ──────────────────────────────────────
export function LotusIcon({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20C12 20 4 14 4 9C4 6.5 6 5 8 6C9 6.5 10 8 11 10C11.5 8 12.5 5.5 14 5C16 4.5 18 6 18 8.5C18 13 12 20 12 20Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 20C12 20 8.5 13.5 7.5 10C7 8.5 8 6.5 10 7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 20C12 20 15.5 13.5 16.5 10C17 8.5 16 6.5 14 7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="20" x2="12" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="13" r="2" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
}
