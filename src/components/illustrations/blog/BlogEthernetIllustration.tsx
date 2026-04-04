'use client';

export default function BlogEthernetIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.8; } }
        @keyframes flow { 0% { stroke-dashoffset: 12; } 100% { stroke-dashoffset: 0; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .flow { animation: flow 0.8s linear infinite; }
        .float { animation: float 3s ease-in-out infinite; }
      `}</style>
      <rect x="150" y="100" width="100" height="60" rx="6" stroke="#CBD4BF" strokeWidth="1.5" fill="#CBD4BF" fillOpacity="0.03" />
      <rect x="165" y="115" width="70" height="30" rx="3" stroke="#A9C1A9" strokeWidth="0.8" />
      <rect x="175" y="122" width="10" height="16" rx="2" stroke="#E3F498" strokeWidth="0.8" />
      <rect x="195" y="122" width="10" height="16" rx="2" stroke="#E3F498" strokeWidth="0.8" />
      <rect x="215" y="122" width="10" height="16" rx="2" stroke="#E3F498" strokeWidth="0.8" />
      <line x1="250" y1="130" x2="330" y2="130" stroke="#A9C1A9" strokeWidth="1.5" />
      <line x1="250" y1="130" x2="330" y2="130" stroke="#E3F498" strokeWidth="2" strokeDasharray="6 6" className="flow" />
      <line x1="150" y1="130" x2="70" y2="130" stroke="#A9C1A9" strokeWidth="1.5" />
      <line x1="150" y1="130" x2="70" y2="130" stroke="#E3F498" strokeWidth="2" strokeDasharray="6 6" className="flow" />
      <rect x="330" y="115" width="50" height="30" rx="4" stroke="#CBD4BF" strokeWidth="1" />
      <circle cx="355" cy="130" r="3" fill="#E3F498" className="pulse" />
      <rect x="20" y="115" width="50" height="30" rx="4" stroke="#CBD4BF" strokeWidth="1" />
      <circle cx="45" cy="130" r="3" fill="#E3F498" className="pulse" style={{ animationDelay: '0.3s' }} />
      <line x1="250" y1="160" x2="310" y2="200" stroke="#A9C1A9" strokeWidth="1" strokeDasharray="4 4" className="flow" />
      <line x1="150" y1="160" x2="90" y2="200" stroke="#A9C1A9" strokeWidth="1" strokeDasharray="4 4" className="flow" />
      <rect x="310" y="200" width="50" height="30" rx="4" stroke="#CBD4BF" strokeWidth="1" />
      <circle cx="335" cy="215" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '0.6s' }} />
      <rect x="40" y="200" width="50" height="30" rx="4" stroke="#CBD4BF" strokeWidth="1" />
      <circle cx="65" cy="215" r="3" fill="#A9C1A9" className="pulse" style={{ animationDelay: '0.9s' }} />
      <g className="float">
        <circle cx="370" cy="50" r="4" fill="#CBD4BF" opacity="0.15" />
        <circle cx="30" cy="260" r="5" fill="#A9C1A9" opacity="0.15" />
      </g>
    </svg>
  );
}
