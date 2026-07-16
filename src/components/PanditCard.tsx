import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Award, Video } from 'lucide-react';
import { StarFilledIcon } from './SacredIcons';

interface PanditCardProps {
  id: string;
  name: string;
  experience: number;
  languages: string[];
  rating: number;
  reviews: number;
  specialization: string[];
  location: string;
  isVerified: boolean;
  image?: string;
  videoConsultation?: boolean;
}

export default function PanditCard({
  id, name, experience, languages, rating, reviews: _reviews, specialization, location, isVerified, image, videoConsultation
}: PanditCardProps) {
  
  return (
    <div className="card-pandit group flex flex-col h-full bg-white relative p-5">
      
      {/* Top Header Section */}
      <div className="flex gap-4 mb-5 relative">
        
        {/* Avatar/Image */}
        <div className="relative shrink-0">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-sand border-2 border-gold/20 p-1">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover rounded-xl" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-saffron to-kumkum rounded-xl flex items-center justify-center text-white font-bold text-3xl font-serif">
                {name.charAt(0)}
              </div>
            )}
          </div>
          {isVerified && (
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-0.5 shadow-sm" title="Verified Pandit">
              <ShieldCheck size={20} className="text-green-500" strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1 min-w-0 justify-center">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-serif font-bold text-lg text-deep-brown truncate group-hover:text-kumkum transition-colors">
              {name}
            </h3>
            <div className="flex items-center gap-1 shrink-0 bg-sand px-2 py-0.5 rounded-md border border-gold/20">
              <StarFilledIcon size={12} color="#F4B400" />
              <span className="text-xs font-bold text-brown">{rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-xs text-brown/60 mb-2 truncate">{experience}+ Years Experience</p>
          <div className="flex items-center gap-1 text-xs text-brown/70 font-medium">
            <MapPin size={12} strokeWidth={1.5} className="text-gold" />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </div>

      {/* Specialization Chips */}
      <div className="mb-4">
        <p className="text-[10px] text-brown/50 uppercase tracking-widest font-semibold mb-2">Expert In</p>
        <div className="flex flex-wrap gap-2">
          {specialization.slice(0, 3).map((spec, i) => (
            <span key={i} className="inline-flex items-center px-2 py-1 rounded bg-lotus border border-kumkum/10 text-[11px] font-medium text-kumkum">
              {spec}
            </span>
          ))}
          {specialization.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded bg-sand border border-gold/10 text-[11px] font-medium text-brown">
              +{specialization.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Details List */}
      <div className="space-y-2 mb-6 mt-auto">
        <div className="flex items-start gap-2">
          <Award size={14} strokeWidth={1.5} className="text-gold mt-0.5 shrink-0" />
          <p className="text-xs text-brown/70 leading-relaxed">
            <span className="font-semibold text-brown">Languages:</span> {languages.join(', ')}
          </p>
        </div>
        {videoConsultation && (
          <div className="flex items-center gap-2">
            <Video size={14} strokeWidth={1.5} className="text-green-600" />
            <p className="text-xs text-green-700 font-medium">Video Consultation Available</p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
        <Link 
          to={`/pandit/${id}`}
          className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold text-brown bg-sand hover:bg-gold/10 border border-gold/20 transition-colors"
        >
          View Profile
        </Link>
        <Link 
          to={`/book-pandit/${id}`}
          className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-divine shadow-red hover:shadow-glow transition-all"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
