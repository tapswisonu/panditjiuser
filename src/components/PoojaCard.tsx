import { Link } from 'react-router-dom';
import { Clock, Users, MapPin, Heart } from 'lucide-react';
import { StarFilledIcon } from './SacredIcons';

interface PoojaCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  panditsRequired: number;
  rating: number;
  reviews: number;
  category?: string;
  image?: string;
  isPopular?: boolean;
}

export default function PoojaCard({ 
  id, name, description, price, durationMinutes, panditsRequired, rating, reviews, category, image, isPopular 
}: PoojaCardProps) {
  
  // Format price to Indian Rupees
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);

  // Format duration
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  const durationText = hours > 0 
    ? `${hours} hr${hours > 1 ? 's' : ''} ${minutes > 0 ? `${minutes} min` : ''}`
    : `${minutes} min`;

  return (
    <div className="card-pandit group flex flex-col h-full bg-white relative">
      
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isPopular && <span className="badge-featured shadow-md">⭐ Popular</span>}
        {category && <span className="badge-sacred shadow-sm bg-white/90 backdrop-blur-sm">{category}</span>}
      </div>
      
      {/* Wishlist Button */}
        <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-brown hover:text-kumkum transition-colors">
          <Heart size={16} strokeWidth={1.5} />
        </button>

      {/* Image Area */}
      <div className="h-48 w-full relative overflow-hidden bg-sand">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-sand to-lotus flex items-center justify-center">
            <div className="w-24 h-24 opacity-10">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 4 15 4 9C4 7 6 5 8 6C9 6.5 10 7.5 11 9C11.5 7 12.5 5 14 4.5C16 4 18 5.5 18 8C18 12 12 20 12 20Z"/></svg>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
        
        {/* Rating overlay */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white">
          <StarFilledIcon size={14} color="#F4D483" />
          <span className="font-bold text-sm leading-none">{rating.toFixed(1)}</span>
          <span className="text-xs text-white/80 leading-none">({reviews})</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif font-bold text-xl text-deep-brown mb-2 group-hover:text-kumkum transition-colors line-clamp-1">{name}</h3>
        <p className="text-sm text-brown/70 line-clamp-2 mb-5 flex-1 leading-relaxed">
          {description}
        </p>

        {/* Info Tags */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
          <div className="flex items-center gap-1.5 text-xs font-medium text-brown/80">
            <Clock size={14} strokeWidth={1.5} className="text-gold" />
            {durationText}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-brown/80">
            <Users size={14} strokeWidth={1.5} className="text-gold" />
            {panditsRequired} Pandit{panditsRequired > 1 ? 's' : ''}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-brown/80">
            <MapPin size={14} strokeWidth={1.5} className="text-gold" />
            Home / Temple
          </div>
        </div>

        <div className="gold-divider-sm mb-4 opacity-50"></div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-[10px] text-brown/50 uppercase tracking-widest font-semibold mb-0.5">Starting From</p>
            <p className="price-tag text-xl leading-none">{formattedPrice}</p>
          </div>
          <Link 
            to={`/book/${id}`}
            className="btn-outline-gold px-5 py-2 text-xs hover:bg-gradient-gold hover:text-white hover:border-transparent transition-all border-gold/50"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
