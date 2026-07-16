import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO date string e.g. "2026-11-12T00:00:00"
  title?: string;
}

export default function CountdownTimer({ targetDate, title = "Upcoming Festival" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center">
      {title && <p className="text-saffron font-medium text-sm mb-4 tracking-wider uppercase">{title}</p>}
      
      <div className="flex gap-4 md:gap-6">
        <TimeBlock value={timeLeft.days} label="Days" />
        <TimeDivider />
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <TimeDivider />
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <TimeDivider />
        <TimeBlock value={timeLeft.seconds} label="Secs" highlight />
      </div>
    </div>
  );
}

function TimeBlock({ value, label, highlight = false }: { value: number, label: string, highlight?: boolean }) {
  const formattedValue = value < 10 ? `0${value}` : value;
  
  return (
    <div className="flex flex-col items-center group cursor-default">
      <div className={`
        relative overflow-hidden w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center
        transition-all duration-300 group-hover:scale-105 shadow-card group-hover:shadow-glow
        ${highlight ? 'bg-gradient-divine border-none text-white' : 'bg-white border border-gold/30 text-brown'}
      `}>
        {/* Glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <span className={`text-3xl md:text-4xl font-serif font-bold ${highlight ? 'text-white' : 'text-brown'}`}>
          {formattedValue}
        </span>
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest mt-3 text-brown/70 group-hover:text-kumkum transition-colors">
        {label}
      </span>
    </div>
  );
}

function TimeDivider() {
  return (
    <div className="flex flex-col items-center justify-center h-16 md:h-20 pb-2">
      <span className="text-2xl font-bold text-gold animate-pulse">:</span>
    </div>
  );
}
