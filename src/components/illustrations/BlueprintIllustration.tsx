'use client';

export default function BlueprintIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .line { stroke-dasharray: 200; animation: drawLine 2s ease-out forwards; }
        .dot { animation: pulse 2s ease-in-out infinite; }
        .float { animation: float 3s ease-in-out infinite; }
      `}</style>
      <rect x="40" y="40" width="320" height="220" rx="8" stroke="#CBD4BF" strokeWidth="1.5" className="line" style={{ animationDelay: '0.2s' }} />
      <line x1="40" y1="150" x2="360" y2="150" stroke="#A9C1A9" strokeWidth="0.8" className="line" style={{ animationDelay: '0.6s' }} />
      <line x1="200" y1="40" x2="200" y2="260" stroke="#A9C1A9" strokeWidth="0.8" className="line" style={{ animationDelay: '0.8s' }} />
      <rect x="70" y="70" width="100" height="60" rx="4" stroke="#CBD4BF" strokeWidth="1" className="line" style={{ animationDelay: '1s' }} />
      <rect x="230" y="70" width="100" height="60" rx="4" stroke="#CBD4BF" strokeWidth="1" className="line" style={{ animationDelay: '1.2s' }} />
      <rect x="70" y="170" width="100" height="60" rx="4" stroke="#CBD4BF" strokeWidth="1" className="line" style={{ animationDelay: '1.4s' }} />
      <rect x="230" y="170" width="100" height="60" rx="4" stroke="#CBD4BF" strokeWidth="1" className="line" style={{ animationDelay: '1.6s' }} />
      <circle cx="120" cy="100" r="4" fill="#A9C1A9" className="dot" style={{ animationDelay: '0.5s' }} />
      <circle cx="280" cy="100" r="4" fill="#A9C1A9" className="dot" style={{ animationDelay: '0.8s' }} />
      <circle cx="120" cy="200" r="4" fill="#A9C1A9" className="dot" style={{ animationDelay: '1.1s' }} />
      <circle cx="280" cy="200" r="4" fill="#A9C1A9" className="dot" style={{ animationDelay: '1.4s' }} />
      <g className="float">
        <circle cx="350" cy="30" r="8" fill="#CBD4BF" opacity="0.15" />
        <circle cx="50" cy="270" r="6" fill="#A9C1A9" opacity="0.15" />
      </g>
      <path d="M180 95 L200 85 L220 95" stroke="#E3F498" strokeWidth="1.5" className="line" style={{ animationDelay: '1.8s' }} />
      <path d="M180 195 L200 185 L220 195" stroke="#E3F498" strokeWidth="1.5" className="line" style={{ animationDelay: '2s' }} />
    </svg>
  );
}
