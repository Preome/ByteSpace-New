import React from 'react';
import { ViewRoute } from '../types';

interface NotFoundPageProps {
  onNavigate: (route: ViewRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-grid-blue py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[640px] flex items-center justify-center text-center">
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-radial-at-c from-blue-500/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto space-y-6 z-10">
        
        {/* Giant Lime Gradient 404 Number (Image 16) */}
        <h1 className="text-8xl sm:text-[160px] md:text-[210px] font-black tracking-tighter leading-none select-none bg-clip-text text-transparent bg-gradient-to-b from-[#EEFF41] via-[#C9F31D] to-[#88B802] drop-shadow-2xl">
          404
        </h1>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          The page you are looking <br className="hidden sm:inline" />
          for doesn't exist
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-blue-100 font-normal max-w-md mx-auto leading-relaxed">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Back to Home Button */}
        <div className="pt-4">
          <button
            onClick={() => onNavigate('home')}
            className="bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-extrabold px-9 py-3.5 rounded-full text-base transition-all duration-200 cursor-pointer shadow-xl hover:scale-105 active:scale-95"
          >
            Back to Home
          </button>
        </div>

      </div>

    </div>
  );
};
