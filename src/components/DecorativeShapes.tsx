import React from 'react';

// Neon Lime 3D Spiral Spring (Left Top)
export const LimeSpiral: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 160 220" className={`filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M35 30C95 10 145 45 130 90C115 135 25 110 20 145C15 180 90 200 135 210"
      stroke="#1E7A00"
      strokeWidth="38"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.3"
      transform="translate(4, 6)"
    />
    <path
      d="M35 30C95 10 145 45 130 90C115 135 25 110 20 145C15 180 90 200 135 210"
      stroke="url(#lime_grad_body)"
      strokeWidth="34"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35 30C95 10 145 45 130 90C115 135 25 110 20 145C15 180 90 200 135 210"
      stroke="url(#lime_grad_highlight)"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
    <defs>
      <linearGradient id="lime_grad_body" x1="20" y1="20" x2="140" y2="210" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F4FF4D" />
        <stop offset="0.3" stopColor="#D4FB17" />
        <stop offset="0.7" stopColor="#B3E600" />
        <stop offset="1" stopColor="#7DAE00" />
      </linearGradient>
      <linearGradient id="lime_grad_highlight" x1="40" y1="20" x2="120" y2="190" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="0.5" stopColor="#F5FF80" stopOpacity="0.3" />
        <stop offset="1" stopColor="#D4FB17" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// White Clay Squiggle Spring (Left Middle & Right Bottom)
export const WhiteSquiggle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 110 140" className={`filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)] ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25 20C65 15 95 38 88 65C80 90 28 85 24 105C20 125 65 130 90 135"
      stroke="url(#white_clay_base)"
      strokeWidth="24"
      strokeLinecap="round"
    />
    <path
      d="M25 20C65 15 95 38 88 65C80 90 28 85 24 105C20 125 65 130 90 135"
      stroke="url(#white_clay_shine)"
      strokeWidth="10"
      strokeLinecap="round"
      opacity="0.9"
    />
    <defs>
      <linearGradient id="white_clay_base" x1="15" y1="15" x2="90" y2="135" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.6" stopColor="#E6ECF5" />
        <stop offset="1" stopColor="#CBD5E1" />
      </linearGradient>
      <linearGradient id="white_clay_shine" x1="20" y1="15" x2="80" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#F8FAFC" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// White 3D Torus / Donut (Left Bottom)
export const WhiteTorus: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 180 180" className={`filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer Torus Body */}
    <ellipse cx="90" cy="90" rx="80" ry="62" transform="rotate(-28 90 90)" fill="url(#torus_3d_grad)" />
    {/* Specular Highlight Arc */}
    <path
      d="M40 70C55 45 105 40 135 60"
      stroke="#FFFFFF"
      strokeWidth="12"
      strokeLinecap="round"
      opacity="0.85"
      filter="blur(2px)"
    />
    {/* Torus Inner Hole showing blue background */}
    <ellipse cx="90" cy="90" rx="36" ry="26" transform="rotate(-28 90 90)" fill="#0B50FF" />
    {/* Inner shadow in hole */}
    <ellipse cx="88" cy="88" rx="36" ry="26" transform="rotate(-28 90 90)" fill="url(#hole_shadow)" />
    <defs>
      <radialGradient id="torus_3d_grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(75 60) rotate(50) scale(95 80)">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.45" stopColor="#F1F5F9" />
        <stop offset="0.8" stopColor="#CBD5E1" />
        <stop offset="1" stopColor="#94A3B8" />
      </radialGradient>
      <radialGradient id="hole_shadow" cx="0.4" cy="0.4" r="0.6">
        <stop stopColor="#05267E" stopOpacity="0.8" />
        <stop offset="1" stopColor="#0B50FF" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// White 3D Pyramid / Tetrahedron (Right Middle)
export const WhitePyramid: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 130 150" className={`filter drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)] ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(12 65 75)">
      {/* Light facet */}
      <polygon points="65,10 15,120 85,140" fill="url(#pyr_facet_light)" />
      {/* Shaded facet */}
      <polygon points="65,10 85,140 125,95" fill="url(#pyr_facet_dark)" />
      {/* Edge highlight */}
      <line x1="65" y1="10" x2="85" y2="140" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9" />
    </g>
    <defs>
      <linearGradient id="pyr_facet_light" x1="65" y1="10" x2="45" y2="135" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.7" stopColor="#F1F5F9" />
        <stop offset="1" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="pyr_facet_dark" x1="65" y1="10" x2="110" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E2E8F0" />
        <stop offset="0.6" stopColor="#CBD5E1" />
        <stop offset="1" stopColor="#94A3B8" />
      </linearGradient>
    </defs>
  </svg>
);

// Lime 3D Cylinder (Right Top)
export const LimeCylinder: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 160 200" className={`filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(22 80 100)">
      {/* Body */}
      <rect x="30" y="35" width="95" height="130" rx="18" fill="url(#cyl_body_grad)" />
      {/* Top Cap */}
      <ellipse cx="77.5" cy="35" rx="47.5" ry="20" fill="url(#cyl_top_cap)" />
      {/* Bottom Cap rim */}
      <ellipse cx="77.5" cy="165" rx="47.5" ry="20" fill="#88B802" />
    </g>
    <defs>
      <linearGradient id="cyl_body_grad" x1="30" y1="35" x2="125" y2="35" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5FF59" />
        <stop offset="0.25" stopColor="#D4FB17" />
        <stop offset="0.75" stopColor="#A8DE00" />
        <stop offset="1" stopColor="#75A600" />
      </linearGradient>
      <linearGradient id="cyl_top_cap" x1="30" y1="20" x2="125" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFF85" />
        <stop offset="0.6" stopColor="#E6FF42" />
        <stop offset="1" stopColor="#C9F31D" />
      </linearGradient>
    </defs>
  </svg>
);

// Lime 3D Torus / Donut Ring (Top Left of Login)
export const LimeTorus: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 180 180" className={`filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="90" cy="90" rx="80" ry="62" transform="rotate(-28 90 90)" fill="url(#lime_torus_grad)" />
    <path
      d="M40 70C55 45 105 40 135 60"
      stroke="#FFFFFF"
      strokeWidth="12"
      strokeLinecap="round"
      opacity="0.85"
      filter="blur(2px)"
    />
    <ellipse cx="90" cy="90" rx="36" ry="26" transform="rotate(-28 90 90)" fill="#0B50FF" />
    <ellipse cx="88" cy="88" rx="36" ry="26" transform="rotate(-28 90 90)" fill="url(#lime_hole_shadow)" />
    <defs>
      <radialGradient id="lime_torus_grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(75 60) rotate(50) scale(95 80)">
        <stop stopColor="#EEFF41" />
        <stop offset="0.4" stopColor="#C9F31D" />
        <stop offset="0.8" stopColor="#88B802" />
        <stop offset="1" stopColor="#557700" />
      </radialGradient>
      <radialGradient id="lime_hole_shadow" cx="0.4" cy="0.4" r="0.6">
        <stop stopColor="#05267E" stopOpacity="0.8" />
        <stop offset="1" stopColor="#0B50FF" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// Yellow/Lime 3D Pyramid
export const YellowPyramid: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 130 150" className={`filter drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)] ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(12 65 75)">
      <polygon points="65,10 15,120 85,140" fill="url(#yellow_pyr_light)" />
      <polygon points="65,10 85,140 125,95" fill="url(#yellow_pyr_dark)" />
      <line x1="65" y1="10" x2="85" y2="140" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9" />
    </g>
    <defs>
      <linearGradient id="yellow_pyr_light" x1="65" y1="10" x2="45" y2="135" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EEFF41" />
        <stop offset="0.7" stopColor="#C9F31D" />
        <stop offset="1" stopColor="#A3D400" />
      </linearGradient>
      <linearGradient id="yellow_pyr_dark" x1="65" y1="10" x2="110" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A3D400" />
        <stop offset="0.6" stopColor="#7DAE00" />
        <stop offset="1" stopColor="#557700" />
      </linearGradient>
    </defs>
  </svg>
);

// Collaborative Figma Cursor Tag (as seen in Figma preview: Mohammad Amzad & Md Akash)
export const FigmaCursor: React.FC<{ name: string; color?: string; className?: string }> = ({
  name,
  color = '#A855F7',
  className = ''
}) => (
  <div className={`inline-flex items-start gap-1 select-none pointer-events-none z-30 ${className}`}>
    <svg className="w-4 h-4 drop-shadow-sm -mr-1" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 2L6 14L8.5 9L13.5 7.5L2 2Z"
        fill={color}
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
    <span
      className="text-[11px] font-bold text-white px-2 py-0.5 rounded-md shadow-md whitespace-nowrap"
      style={{ backgroundColor: color }}
    >
      {name}
    </span>
  </div>
);
