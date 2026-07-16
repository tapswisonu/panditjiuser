import { StarIcon, ShieldCheckIcon } from './Icons';

interface PanditCardProps {
  name: string;
  expertise: string[];
  experienceYears: number;
  rating?: number;
  reviewCount?: number;
  isVerified: boolean;
  onSelect?: () => void;
  selected?: boolean;
}

export default function PanditCard({
  name,
  expertise,
  experienceYears,
  rating = 4.8,
  reviewCount = 0,
  isVerified,
  onSelect,
  selected,
}: PanditCardProps) {
  return (
    <div
      onClick={onSelect}
      className={`card-divine p-5 cursor-pointer border-2 transition-all duration-300 ${
        selected ? 'border-kumkum bg-lotus/20 shadow-red' : 'border-gold/10 hover:border-gold/30'
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-kumkum to-saffron flex items-center justify-center text-white text-xl font-bold flex-shrink-0 shadow-sm border border-gold/30">
          {name.charAt(name.startsWith('Pt. ') ? 4 : 0)}
        </div>
        
        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="font-bold text-brown font-serif text-lg leading-tight truncate">{name}</h3>
            {isVerified && (
              <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200 flex-shrink-0">
                <ShieldCheckIcon size={12} className="text-green-600" />
                <span>Verified</span>
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-1 mb-2">
            <StarIcon className="text-haldi fill-haldi" size={13} />
            <span className="text-xs font-bold text-brown">{rating.toFixed(1)}</span>
            <span className="text-[10px] text-brown/50">({reviewCount} reviews)</span>
          </div>
          
          <p className="text-[11px] text-brown/60 mb-2 font-medium">
            🛡️ {experienceYears} Years Vedic Practice
          </p>
          
          <div className="flex flex-wrap gap-1">
            {expertise.slice(0, 3).map((exp) => (
              <span key={exp} className="text-[10px] bg-lotus text-kumkum px-2 py-0.5 rounded-md font-semibold border border-kumkum/10">
                {exp}
              </span>
            ))}
          </div>
        </div>

        {/* Selected Checkbox indicator */}
        {onSelect && (
          <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all flex-shrink-0 ${
            selected ? 'bg-kumkum border-kumkum text-white shadow-sm' : 'border-gold/40'
          }`}>
            {selected && (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
