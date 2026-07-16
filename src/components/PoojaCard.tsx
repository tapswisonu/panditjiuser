import { Link } from 'react-router-dom';
import { DivineGradients, LotusIcon, StarIcon, ClockIcon, UserIcon } from './Icons';

interface PoojaCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  panditsRequired: number;
  rating?: number;
  reviews?: number;
}

export default function PoojaCard({
  id,
  name,
  description,
  price,
  durationMinutes,
  panditsRequired,
  rating = 4.9,
  reviews = 124,
}: PoojaCardProps) {
  const hours = Math.floor(durationMinutes / 60);
  const mins = durationMinutes % 60;
  const durationText = hours > 0 ? `${hours}h ${mins > 0 ? mins + 'm' : ''}` : `${mins}m`;

  return (
    <div className="group relative rounded-3xl bg-white border border-gold/20 overflow-hidden shadow-card hover:shadow-divine transition-all duration-300 flex flex-col h-full">
      <DivineGradients />
      
      {/* Decorative background aura */}
      <div className="absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br from-kumkum/10 to-saffron/10 rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
      
      {/* Header section with category icon */}
      <div className="p-6 pb-4 bg-gradient-to-b from-lotus/40 to-white flex items-center justify-between border-b border-gold/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lotus to-white border border-gold/30 flex items-center justify-center shadow-sm">
            <LotusIcon className="text-kumkum animate-breathe" size={24} />
          </div>
          <div>
            <span className="text-[10px] font-bold text-saffron tracking-widest uppercase">VEDIC RITUAL</span>
            <div className="flex items-center gap-1 mt-0.5">
              <StarIcon className="text-haldi fill-haldi" size={12} />
              <span className="text-xs font-bold text-brown">{rating.toFixed(1)}</span>
              <span className="text-[10px] text-brown/50">({reviews})</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-brown/50 block font-medium">Starting from</span>
          <span className="text-xl font-bold text-kumkum">₹{price.toLocaleString()}</span>
        </div>
      </div>

      {/* Body section */}
      <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-brown font-serif mb-2 group-hover:text-kumkum transition-colors">
            {name}
          </h3>
          <p className="text-brown/70 text-xs leading-relaxed line-clamp-3 mb-5">
            {description}
          </p>
        </div>

        <div>
          {/* Metadata Chips */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sand border border-gold/10 text-brown/70 text-xs font-medium">
              <ClockIcon className="text-saffron" size={14} />
              <span>{durationText}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sand border border-gold/10 text-brown/70 text-xs font-medium">
              <UserIcon className="text-saffron" size={14} />
              <span>{panditsRequired} Pandit{panditsRequired > 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Glowing Divine CTA Button */}
          <Link
            to={`/book/${id}`}
            className="w-full text-center block btn-divine text-xs py-3.5"
          >
            Book Pooja Ritual 🪔
          </Link>
        </div>
      </div>
    </div>
  );
}
