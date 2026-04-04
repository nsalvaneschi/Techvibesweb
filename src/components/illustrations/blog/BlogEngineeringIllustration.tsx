'use client';

export default function BlogEngineeringIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.9; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .draw { stroke-dasharray: 300; animation: draw 2.5s ease-out forwards; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .float { animation: float 3s ease-in-out infinite; }
      `}</style>
      <rect x="50" y="50" width="300" height="200" rx="6" stroke="#CBD4BF" strokeWidth="1" className="draw" style={{ animationDelay: '0.1s' }} />
      <line x1="50" y1="120" x2="350" y2="120" stroke="#A9C1A9" strokeWidth="0.5" className="draw" style={{ animationDelay: '0.5s' }} />
      <line x1="50" y1="190" x2="350" y2="190" stroke="#A9C1A9" strokeWidth="0.5" className="draw" style={{ animationDelay: '0.7s' }} />
      <line x1="150" y1="50" x2="150" y2="250" stroke="#A9C1A9" strokeWidth="0.5" className="draw" style={{ animationDelay: '0.9s' }} />
      <line x1="250" y1="50" x2="250" y2="250" stroke="#A9C1A9" strokeWidth="0.5" className="draw" style={{ animationDelay: '1.1s' }} />
      <path d="M80 100 L120 70 L120 100 Z" stroke="#E3F498" strokeWidth="1" className="draw" style={{ animationDelay: '1.3s' }} />
      <rect x="170" y="70" width="60" height="40" rx="3" stroke="#CBD4BF" strokeWidth="0.8" className="draw" style={{ animationDelay: '1.5s' }} />
      <rect x="270" y="70" width="60" height="40" rx="3" stroke="#CBD4BF" strokeWidth="0.8" className="draw" style={{ animationDelay: '1.7s' }} />
      <rect x="80" y="140" width="50" height="35" rx="3" stroke="#CBD4BF" strokeWidth="0.8" className="draw" style={{ animationDelay: '1.9s' }} />
      <rect x="170" y="140" width="60" height="35" rx="3" stroke="#CBD4BF" strokeWidth="0.8" className="draw" style={{ animationDelay: '2.1s' }} />
      <rect x="270" y="140" width="50" height="35" rx="3" stroke="#CBD4BF" strokeWidth="0.8" className="draw" style={{ animationDelay: '2.3s' }} />
      <circle cx="100" cy="85" r="3" fill="#E3F498" className="pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="200" cy="90" r="3" fill="#E3F498" className="pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="300" cy="90" r="3" fill="#E3F498" className="pulse" style={{ animationDelay: '0.9s' }} />
      <circle cx="105" cy="157" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '1.2s' }} />
      <circle cx="200" cy="157" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '1.5s' }} />
      <circle cx="295" cy="157" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '1.8s' }} />
      <g className="float">
        <circle cx="370" cy="40" r="5" fill="#CBD4BF" opacity="0.15" />
        <circle cx="30" cy="270" r="4" fill="#A9C1A9" opacity="0.15" />
      </g>
    </svg>
  );
}
