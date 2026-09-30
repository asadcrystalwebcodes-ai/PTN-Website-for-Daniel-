import React from 'react';

interface PTNLogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PTNLogo: React.FC<PTNLogoProps> = ({
  variant = 'full',
  theme = 'dark',
  className = '',
  size = 'md',
}) => {
  // Dimension scalers
  const sizeMap = {
    sm: { icon: 32, height: 32, textScale: 'text-base', subScale: 'text-[9px]' },
    md: { icon: 42, height: 42, textScale: 'text-xl', subScale: 'text-[11px]' },
    lg: { icon: 52, height: 52, textScale: 'text-2xl', subScale: 'text-xs' },
    xl: { icon: 64, height: 64, textScale: 'text-3xl', subScale: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  // Colors based on theme
  const isDark = theme === 'dark' || theme === 'auto';
  const ringPrimaryColor = isDark ? '#FFFFFF' : '#0B1F44';
  const accentColor = '#00A3E0';
  const textColor = isDark ? '#FFFFFF' : '#0B1F44';
  const subtextColor = isDark ? '#00A3E0' : '#0B1F44';
  const dividerColor = isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(11, 31, 68, 0.25)';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Reticle Icon */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-label="PTN Target Logo"
      >
        {/* Reticle Segments */}
        {/* Top-Right Arc (Electric Blue Accent) */}
        <path
          d="M 50 12 A 38 38 0 0 1 88 50"
          stroke={accentColor}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Bottom-Right Arc */}
        <path
          d="M 88 50 A 38 38 0 0 1 50 88"
          stroke={ringPrimaryColor}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Bottom-Left Arc */}
        <path
          d="M 50 88 A 38 38 0 0 1 12 50"
          stroke={ringPrimaryColor}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Top-Left Arc */}
        <path
          d="M 12 50 A 38 38 0 0 1 50 12"
          stroke={ringPrimaryColor}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Crosshair Lines Extending Through Center */}
        {/* Top Crosshair Line */}
        <line x1="50" y1="2" x2="50" y2="24" stroke={ringPrimaryColor} strokeWidth="3.5" strokeLinecap="square" />
        {/* Bottom Crosshair Line */}
        <line x1="50" y1="76" x2="50" y2="98" stroke={ringPrimaryColor} strokeWidth="3.5" strokeLinecap="square" />
        {/* Left Crosshair Line */}
        <line x1="2" y1="50" x2="22" y2="50" stroke={ringPrimaryColor} strokeWidth="3.5" strokeLinecap="square" />
        {/* Right Crosshair Line */}
        <line x1="78" y1="50" x2="98" y2="50" stroke={ringPrimaryColor} strokeWidth="3.5" strokeLinecap="square" />

        {/* PTN Monogram Center Glyphs */}
        <g fill={ringPrimaryColor}>
          {/* P */}
          <path d="M 23 37 H 34 C 38.5 37 41.5 39.5 41.5 43.5 C 41.5 47.5 38.5 50 34 50 H 29 V 63 H 23 V 37 Z M 29 42 V 45.2 H 33.5 C 35.2 45.2 36.2 44.5 36.2 43.6 C 36.2 42.7 35.2 42 33.5 42 H 29 Z" />
          
          {/* T */}
          <path d="M 40 37 H 59 V 42.5 H 52.5 V 63 H 46.5 V 42.5 H 40 V 37 Z" />
          
          {/* N */}
          <path d="M 58 37 H 64 L 72 53.5 V 37 H 77 V 63 H 71.5 L 63.5 46.5 V 63 H 58 V 37 Z" />
        </g>
      </svg>

      {/* Text Wordmark & Subtitle */}
      {variant !== 'mark' && (
        <div className="flex items-center gap-3">
          {/* Vertical Separator */}
          <div
            className="w-[1.5px] self-stretch my-0.5 rounded-full"
            style={{ backgroundColor: dividerColor }}
          />

          <div className="flex flex-col justify-center leading-none">
            <span
              className={`font-extrabold tracking-tight uppercase ${currentSize.textScale}`}
              style={{ color: textColor }}
            >
              PRECISION
            </span>
            <span
              className={`font-semibold tracking-[0.22em] uppercase mt-1 ${currentSize.subScale}`}
              style={{ color: subtextColor }}
            >
              TALENT NETWORK
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
