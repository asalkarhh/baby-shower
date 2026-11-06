import React from 'react';

interface PeacockMotifProps {
  className?: string;
  size?: number;
  variant?: 'feather' | 'eye' | 'flourish';
}

export const PeacockMotif: React.FC<PeacockMotifProps> = ({
  className = '',
  size = 48,
  variant = 'feather',
}) => {
  if (variant === 'eye') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`peacock-motif-svg ${className}`}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#00D2C4" />
            <stop offset="35%" stop-color="#183B7E" />
            <stop offset="65%" stop-color="#0E6E55" />
            <stop offset="85%" stop-color="#D4AF37" />
            <stop offset="100%" stop-color="transparent" />
          </radialGradient>
        </defs>
        <circle cx="24" cy="24" r="18" fill="url(#eyeGlow)" opacity="0.9" />
        <circle cx="24" cy="24" r="11" fill="#183B7E" />
        <circle cx="24" cy="24" r="6" fill="#00D2C4" />
        <circle cx="24" cy="24" r="2.5" fill="#041217" />
        <circle cx="24" cy="24" r="20" stroke="#D4AF37" stroke-width="0.75" stroke-dasharray="2 3" opacity="0.6" />
      </svg>
    );
  }

  // Full detailed graceful peacock feather
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 64 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`peacock-feather-svg ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldStem" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2CF75" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C6527" />
        </linearGradient>
        <radialGradient id="featherEyeGrad" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#00D2C4" />
          <stop offset="35%" stopColor="#183B7E" />
          <stop offset="70%" stopColor="#0E6E55" />
          <stop offset="90%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#06282E" />
        </radialGradient>
      </defs>

      {/* Stem spine */}
      <path
        d="M20 92 C24 76 30 52 38 18"
        stroke="url(#goldStem)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Delicate side barbs (wisps) */}
      <path d="M22 80 C16 75 14 68 18 64" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" />
      <path d="M25 74 C33 70 37 64 34 58" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" />
      <path d="M27 62 C20 56 18 48 23 44" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7" strokeLinecap="round" />
      <path d="M30 54 C39 49 43 43 40 37" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7" strokeLinecap="round" />
      <path d="M32 44 C24 38 23 30 30 25" stroke="#E5C158" strokeWidth="0.9" opacity="0.75" strokeLinecap="round" />
      <path d="M34 38 C43 32 47 26 44 20" stroke="#E5C158" strokeWidth="0.9" opacity="0.75" strokeLinecap="round" />

      {/* Peacock Feather Eye Outer Halo */}
      <path
        d="M38 16 C48 10 56 22 47 34 C41 42 32 40 28 32 C24 24 30 14 38 16 Z"
        fill="url(#featherEyeGrad)"
        stroke="#E5C158"
        strokeWidth="1.2"
      />

      {/* Sapphire inner ring */}
      <ellipse
        cx="39"
        cy="26"
        rx="7"
        ry="9"
        transform="rotate(-15 39 26)"
        fill="#183B7E"
        stroke="#D4AF37"
        strokeWidth="0.75"
      />

      {/* Turquoise heart */}
      <ellipse
        cx="39"
        cy="26"
        rx="4.2"
        ry="5.5"
        transform="rotate(-15 39 26)"
        fill="#00D2C4"
      />

      {/* Deep nucleus */}
      <circle cx="39" cy="26" r="2.2" fill="#041419" />

      {/* Top radiating fine golden rays */}
      <path d="M38 14 C39 8 41 4 43 2" stroke="#F2CF75" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
      <path d="M35 15 C33 9 31 5 28 3" stroke="#F2CF75" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
      <path d="M42 16 C46 12 50 8 54 7" stroke="#F2CF75" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
};

export const OrnateDivider: React.FC<{ label?: string; compact?: boolean }> = ({
  label,
  compact = false,
}) => {
  return (
    <div className={`ornate-divider ${compact ? 'compact' : ''}`} role="presentation">
      <div className="ornate-line left" />
      <div className="ornate-center">
        <span className="gold-diamond">✦</span>
        {label ? (
          <span className="ornate-label">{label}</span>
        ) : (
          <span className="peacock-icon-dot">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8" fill="#0D5A68" stroke="#D4AF37" strokeWidth="1.2" />
              <circle cx="12" cy="12" r="4.5" fill="#183B7E" />
              <circle cx="12" cy="12" r="2.2" fill="#00D2C4" />
            </svg>
          </span>
        )}
        <span className="gold-diamond">✦</span>
      </div>
      <div className="ornate-line right" />
    </div>
  );
};

export const CornerFlourish: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ position }) => {
  return (
    <svg
      className={`corner-flourish ${position}`}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 34 L2 6 C2 3.79 3.79 2 6 2 L34 2"
        stroke="#D4AF37"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M6 34 L6 8 C6 6.89 6.89 6 8 6 L34 6"
        stroke="#C87D55"
        strokeWidth="0.75"
        fill="none"
        opacity="0.8"
      />
      <circle cx="12" cy="12" r="2" fill="#F2CF75" />
    </svg>
  );
};

