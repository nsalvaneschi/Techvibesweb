'use client';

export default function SecurityIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes shieldPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        @keyframes lockBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes ring { 0% { r: 60; opacity: 0.3; } 100% { r: 120; opacity: 0; } }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .shield { animation: shieldPulse 3s ease-in-out infinite; transform-origin: 200px 150px; }
        .lock { animation: lockBounce 2s ease-in-out infinite; }
        .ring { animation: ring 2.5s ease-out infinite; }
      `}</style>
      <circle cx="200" cy="150" r="60" stroke="#A9C1A9" strokeWidth="0.5" className="ring" />
      <circle cx="200" cy="150" r="60" stroke="#A9C1A9" strokeWidth="0.5" className="ring" style={{ animationDelay: '0.8s' }} />
      <g className="shield">
        <path d="M200 80 L260 110 L260 170 C260 210 230 240 200 260 C170 240 140 210 140 170 L140 110 Z" stroke="#CBD4BF" strokeWidth="1.5" fill="#CBD4BF" fillOpacity="0.03" />
      </g>
      <g className="lock">
        <rect x="185" y="145" width="30" height="25" rx="4" stroke="#E3F498" strokeWidth="1.5" fill="none" />
        <path d="M192 145 L192 135 C192 128 208 128 208 135 L208 145" stroke="#E3F498" strokeWidth="1.5" fill="none" />
        <circle cx="200" cy="157" r="3" fill="#E3F498" />
        <line x1="200" y1="160" x2="200" y2="165" stroke="#E3F498" strokeWidth="1.5" />
      </g>
      <circle cx="120" cy="100" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="280" cy="100" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="100" cy="200" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '0.9s' }} />
      <circle cx="300" cy="200" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '1.2s' }} />
    </svg>
  );
}
