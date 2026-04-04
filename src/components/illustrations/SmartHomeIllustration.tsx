'use client';

export default function SmartHomeIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.4; r: 3; } 50% { opacity: 1; r: 5; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes glow { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.3; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .float { animation: float 3s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .slide { animation: slideUp 0.6s ease-out forwards; }
      `}</style>
      <path d="M200 60 L320 140 L320 260 L80 260 L80 140 Z" stroke="#CBD4BF" strokeWidth="1.5" fill="none" />
      <path d="M200 60 L320 140 L80 140 Z" fill="#CBD4BF" opacity="0.05" />
      <rect x="170" y="180" width="60" height="80" rx="4" stroke="#A9C1A9" strokeWidth="1" fill="none" />
      <circle cx="200" cy="220" r="3" fill="#A9C1A9" className="pulse" />
      <rect x="100" y="160" width="40" height="30" rx="3" stroke="#CBD4BF" strokeWidth="0.8" fill="none" />
      <rect x="260" y="160" width="40" height="30" rx="3" stroke="#CBD4BF" strokeWidth="0.8" fill="none" />
      <circle cx="120" cy="175" r="3" fill="#E3F498" className="pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="280" cy="175" r="3" fill="#E3F498" className="pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="200" cy="120" r="15" fill="#CBD4BF" className="glow" />
      <path d="M195 115 L200 110 L205 115 L205 125 L195 125 Z" stroke="#E3F498" strokeWidth="1" fill="none" />
      <g className="float">
        <circle cx="60" cy="80" r="4" fill="#CBD4BF" opacity="0.2" />
        <circle cx="340" cy="100" r="3" fill="#A9C1A9" opacity="0.2" />
        <circle cx="350" cy="240" r="5" fill="#E3F498" opacity="0.1" />
      </g>
      <line x1="140" y1="175" x2="170" y2="200" stroke="#A9C1A9" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
      <line x1="260" y1="175" x2="230" y2="200" stroke="#A9C1A9" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
    </svg>
  );
}
