'use client';

export default function BlogControl4Illustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.7; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes glow { 0%, 100% { filter: drop-shadow(0 0 2px rgba(203,212,191,0.1)); } 50% { filter: drop-shadow(0 0 8px rgba(203,212,191,0.3)); } }
        .pulse { animation: pulse 2.5s ease-in-out infinite; }
        .float { animation: float 3s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
      `}</style>
      <rect x="120" y="60" width="160" height="180" rx="12" stroke="#CBD4BF" strokeWidth="1.5" fill="#CBD4BF" fillOpacity="0.02" className="glow" />
      <rect x="135" y="80" width="130" height="30" rx="4" stroke="#A9C1A9" strokeWidth="0.8" />
      <circle cx="155" cy="95" r="6" stroke="#E3F498" strokeWidth="1" fill="#E3F498" fillOpacity="0.3" className="pulse" />
      <circle cx="185" cy="95" r="6" stroke="#E3F498" strokeWidth="1" fill="#E3F498" fillOpacity="0.3" className="pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="215" cy="95" r="6" stroke="#E3F498" strokeWidth="1" fill="#E3F498" fillOpacity="0.3" className="pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="245" cy="95" r="6" stroke="#E3F498" strokeWidth="1" fill="#E3F498" fillOpacity="0.3" className="pulse" style={{ animationDelay: '0.9s' }} />
      <rect x="135" y="125" width="60" height="40" rx="4" stroke="#CBD4BF" strokeWidth="0.8" />
      <rect x="205" y="125" width="60" height="40" rx="4" stroke="#CBD4BF" strokeWidth="0.8" />
      <rect x="135" y="180" width="130" height="8" rx="4" fill="#A9C1A9" opacity="0.2" />
      <rect x="135" y="195" width="90" height="8" rx="4" fill="#A9C1A9" opacity="0.15" />
      <rect x="135" y="210" width="110" height="8" rx="4" fill="#A9C1A9" opacity="0.1" />
      <g className="float">
        <circle cx="70" cy="100" r="4" fill="#CBD4BF" opacity="0.15" />
        <circle cx="330" cy="120" r="3" fill="#A9C1A9" opacity="0.15" />
        <circle cx="340" cy="240" r="5" fill="#E3F498" opacity="0.1" />
      </g>
    </svg>
  );
}
