'use client';

export default function BlogIotIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes dash { to { stroke-dashoffset: 0; } }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .float { animation: float 3s ease-in-out infinite; }
        .dash { stroke-dasharray: 50; animation: dash 1.5s ease-out forwards; }
      `}</style>
      <circle cx="200" cy="150" r="50" stroke="#CBD4BF" strokeWidth="1" strokeDasharray="8 4" fill="#CBD4BF" fillOpacity="0.03" />
      <text x="200" y="145" textAnchor="middle" fill="#E3F498" fontSize="14" fontFamily="monospace" fontWeight="bold">IoT</text>
      <text x="200" y="165" textAnchor="middle" fill="#A9C1A9" fontSize="8" fontFamily="sans-serif">Consumer</text>
      <circle cx="80" cy="80" r="30" stroke="#A9C1A9" strokeWidth="1.5" fill="#A9C1A9" fillOpacity="0.03" />
      <text x="80" y="77" textAnchor="middle" fill="#CBD4BF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Smart</text>
      <text x="80" y="90" textAnchor="middle" fill="#CBD4BF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Bulb</text>
      <circle cx="320" cy="80" r="30" stroke="#A9C1A9" strokeWidth="1.5" fill="#A9C1A9" fillOpacity="0.03" />
      <text x="320" y="77" textAnchor="middle" fill="#CBD4BF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Smart</text>
      <text x="320" y="90" textAnchor="middle" fill="#CBD4BF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Plug</text>
      <circle cx="80" cy="220" r="30" stroke="#A9C1A9" strokeWidth="1.5" fill="#A9C1A9" fillOpacity="0.03" />
      <text x="80" y="217" textAnchor="middle" fill="#CBD4BF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Voice</text>
      <text x="80" y="230" textAnchor="middle" fill="#CBD4BF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Assist</text>
      <circle cx="320" cy="220" r="30" stroke="#A9C1A9" strokeWidth="1.5" fill="#A9C1A9" fillOpacity="0.03" />
      <text x="320" y="217" textAnchor="middle" fill="#CBD4BF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Sensor</text>
      <text x="320" y="230" textAnchor="middle" fill="#CBD4BF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Temp</text>
      <line x1="110" y1="95" x2="160" y2="130" stroke="#A9C1A9" strokeWidth="0.8" strokeDasharray="4 4" className="dash" style={{ animationDelay: '0.3s' }} />
      <line x1="290" y1="95" x2="240" y2="130" stroke="#A9C1A9" strokeWidth="0.8" strokeDasharray="4 4" className="dash" style={{ animationDelay: '0.6s' }} />
      <line x1="110" y1="205" x2="160" y2="170" stroke="#A9C1A9" strokeWidth="0.8" strokeDasharray="4 4" className="dash" style={{ animationDelay: '0.9s' }} />
      <line x1="290" y1="205" x2="240" y2="170" stroke="#A9C1A9" strokeWidth="0.8" strokeDasharray="4 4" className="dash" style={{ animationDelay: '1.2s' }} />
      <circle cx="80" cy="80" r="3" fill="#E3F498" className="pulse" style={{ animationDelay: '0.2s' }} />
      <circle cx="320" cy="80" r="3" fill="#E3F498" className="pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="80" cy="220" r="3" fill="#E3F498" className="pulse" style={{ animationDelay: '0.8s' }} />
      <circle cx="320" cy="220" r="3" fill="#E3F498" className="pulse" style={{ animationDelay: '1.1s' }} />
      <g className="float">
        <circle cx="370" cy="40" r="4" fill="#CBD4BF" opacity="0.15" />
        <circle cx="30" cy="270" r="5" fill="#A9C1A9" opacity="0.15" />
      </g>
    </svg>
  );
}
