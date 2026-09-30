import React from 'react';

interface LogoProps {
  light?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ light = false, className = '', onClick }) => {
  return (
    <div 
      className={`flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
      onClick={onClick}
    >
      {/* ByteSpace Logo Mark */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 32 32" className="w-8 h-8 drop-shadow-sm transition-transform group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#C9F31D" />
          <path 
            d="M10 8H17C19.7614 8 22 10.2386 22 13C22 14.5422 21.3006 15.9209 20.2016 16.8288C21.8741 17.747 23 19.4939 23 21.5C23 24.5376 20.5376 27 17.5 27H10V8Z" 
            fill="#0B50FF"
          />
          <circle cx="15.5" cy="13.5" r="2.5" fill="#C9F31D" />
          <circle cx="16" cy="21.5" r="3" fill="#C9F31D" />
        </svg>
      </div>

      <span className={`text-2xl font-black tracking-tight ${light ? 'text-white' : 'text-gray-900'}`}>
        ByteSpace
      </span>
    </div>
  );
};
