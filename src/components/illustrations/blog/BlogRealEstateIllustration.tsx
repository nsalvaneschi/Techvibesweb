'use client';

export default function BlogRealEstateIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.7; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .float { animation: float 3s ease-in-out infinite; }
        .draw { stroke-dasharray: 200; animation: draw 2s ease-out forwards; }
      `}</style>
      <path d="M200 60 L300 130 L300 240 L100 240 L100 130 Z" stroke="#CBD4BF" strokeWidth="1.5" fill="#CBD4BF" fillOpacity="0.02" className="draw" />
      <path d="M200 60 L300 130 L100 130 Z" fill="#CBD4BF" fillOpacity="0.05" />
      <rect x="170" y="170" width="60" height="70" rx="4" stroke="#A9C1A9" strokeWidth="1" className="draw" style={{ animationDelay: '0.5s' }} />
      <circle cx="200" cy="205" r="4" fill="#E3F498" className="pulse" />
      <rect x="120" y="150" width="35" height="25" rx="3" stroke="#CBD4BF" strokeWidth="0.8" className="draw" style={{ animationDelay: '0.8s' }} />
      <rect x="245" y="150" width="35" height="25" rx="3" stroke="#CBD4BF" strokeWidth="0.8" className="draw" style={{ animationDelay: '1.1s' }} />
      <circle cx="137" cy="162" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="262" cy="162" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '0.6s' }} />
      <line x1="155" y1="162" x2="170" y2="185" stroke="#A9C1A9" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="245" y1="162" x2="230" y2="185" stroke="#A9C1A9" strokeWidth="0.5" strokeDasharray="3 3" />
      <g className="float">
        <circle cx="60" cy="90" r="4" fill="#CBD4BF" opacity="0.15" />
        <circle cx="340" cy="100" r="3" fill="#A9C1A9" opacity="0.15" />
        <circle cx="350" cy="250" r="5" fill="#E3F498" opacity="0.1" />
      </g>
    </svg>
  );
}
