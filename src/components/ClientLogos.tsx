import React from 'react';

export const ClientLogos: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFAFA] border-t border-b border-gray-100 py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-80 text-gray-700">
          
          {/* Logo 1: Wave */}
          <div className="flex items-center gap-2.5">
            <svg className="w-8 h-8 text-gray-600" viewBox="0 0 32 32" fill="none">
              <path d="M4 11C10 6 22 6 28 11M4 16C10 11 22 11 28 16M4 21C10 16 22 16 28 21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-gray-800">Logoipsum</span>
          </div>

          {/* Logo 2: Sun Burst / Radial */}
          <div className="flex items-center gap-2.5">
            <svg className="w-8 h-8 text-gray-600" viewBox="0 0 32 32" fill="currentColor">
              <circle cx="16" cy="16" r="4.5" />
              <rect x="14.5" y="2" width="3" height="6" rx="1.5" />
              <rect x="14.5" y="24" width="3" height="6" rx="1.5" />
              <rect x="2" y="14.5" width="6" height="3" rx="1.5" />
              <rect x="24" y="14.5" width="6" height="3" rx="1.5" />
              <rect x="5.5" y="6.5" width="5" height="3" rx="1.5" transform="rotate(45 8 8)" />
              <rect x="21.5" y="22.5" width="5" height="3" rx="1.5" transform="rotate(45 24 24)" />
              <rect x="22.5" y="5.5" width="3" height="5" rx="1.5" transform="rotate(45 24 8)" />
              <rect x="6.5" y="21.5" width="3" height="5" rx="1.5" transform="rotate(45 8 24)" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-gray-800">Logoipsum</span>
          </div>

          {/* Logo 3: Lightning Bolt in Circle */}
          <div className="flex items-center gap-2.5">
            <svg className="w-8 h-8 text-gray-600" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" fill="currentColor" />
              <path d="M17 7L10 17H16L15 25L22 15H16L17 7Z" fill="#FAFAFA" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-gray-800">Logoipsum</span>
          </div>

          {/* Logo 4: 4-lobed Flower Cross */}
          <div className="flex items-center gap-2.5">
            <svg className="w-8 h-8 text-gray-600" viewBox="0 0 32 32" fill="currentColor">
              <circle cx="16" cy="9" r="4" />
              <circle cx="16" cy="23" r="4" />
              <circle cx="9" cy="16" r="4" />
              <circle cx="23" cy="16" r="4" />
              <circle cx="16" cy="16" r="2.5" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-gray-800">Logoipsum</span>
          </div>

          {/* Logo 5: Labyrinth / Concentric Spiral */}
          <div className="flex items-center gap-2.5">
            <svg className="w-8 h-8 text-gray-600" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
              <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
              <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
              <circle cx="16" cy="16" r="2" fill="currentColor" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-gray-800">Logoipsum</span>
          </div>

        </div>
      </div>
    </div>
  );
};
