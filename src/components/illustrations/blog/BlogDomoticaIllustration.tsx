'use client';

export default function BlogDomoticaIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.1); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes ring { 0% { r: 20; opacity: 0.5; } 100% { r: 60; opacity: 0; } }
        .pulse { animation: pulse 2s ease-in-out infinite; transform-origin: center; }
        .float { animation: float 3s ease-in-out infinite; }
        .ring { animation: ring 2s ease-out infinite; }
      `}</style>
      <rect x="100" y="100" width="200" height="140" rx="8" stroke="#CBD4BF" strokeWidth="1.5" />
      <rect x="120" y="120" width="160" height="80" rx="4" stroke="#A9C1A9" strokeWidth="0.8" />
      <circle cx="200" cy="160" r="20" stroke="#E3F498" strokeWidth="1" className="ring" />
      <circle cx="200" cy="160" r="20" stroke="#E3F498" strokeWidth="1" className="ring" style={{ animationDelay: '0.6s' }} />
      <path d="M193 155 L200 150 L207 155 L207 165 L193 165 Z" stroke="#E3F498" strokeWidth="1" />
      <circle cx="150" cy="150" r="4" fill="#A9C1A9" className="pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="250" cy="150" r="4" fill="#A9C1A9" className="pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="150" cy="180" r="4" fill="#CBD4BF" className="pulse" style={{ animationDelay: '0.9s' }} />
      <circle cx="250" cy="180" r="4" fill="#CBD4BF" className="pulse" style={{ animationDelay: '1.2s' }} />
      <line x1="154" y1="150" x2="180" y2="155" stroke="#A9C1A9" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="246" y1="150" x2="220" y2="155" stroke="#A9C1A9" strokeWidth="0.5" strokeDasharray="3 3" />
      <g className="float">
        <circle cx="60" cy="80" r="5" fill="#CBD4BF" opacity="0.15" />
        <circle cx="340" cy="100" r="4" fill="#A9C1A9" opacity="0.15" />
        <circle cx="350" cy="230" r="6" fill="#E3F498" opacity="0.1" />
      </g>
      <rect x="140" y="250" width="120" height="6" rx="3" fill="#CBD4BF" opacity="0.1" />
      <rect x="160" y="260" width="80" height="4" rx="2" fill="#A9C1A9" opacity="0.1" />
    </svg>
  );
}
