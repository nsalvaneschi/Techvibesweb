'use client';

export default function SupportIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes gearSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes gearSpinRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .gear { animation: gearSpin 8s linear infinite; transform-origin: center; }
        .gearRev { animation: gearSpinRev 6s linear infinite; transform-origin: center; }
        .float { animation: float 3s ease-in-out infinite; }
      `}</style>
      <g className="gear" style={{ transformOrigin: '170px 150px' }}>
        <circle cx="170" cy="150" r="35" stroke="#CBD4BF" strokeWidth="1.5" fill="none" />
        <circle cx="170" cy="150" r="12" stroke="#CBD4BF" strokeWidth="1" fill="none" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1={170 + 35 * Math.cos((angle * Math.PI) / 180)}
            y1={150 + 35 * Math.sin((angle * Math.PI) / 180)}
            x2={170 + 45 * Math.cos((angle * Math.PI) / 180)}
            y2={150 + 45 * Math.sin((angle * Math.PI) / 180)}
            stroke="#CBD4BF"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </g>
      <g className="gearRev" style={{ transformOrigin: '250px 180px' }}>
        <circle cx="250" cy="180" r="25" stroke="#A9C1A9" strokeWidth="1.5" fill="none" />
        <circle cx="250" cy="180" r="8" stroke="#A9C1A9" strokeWidth="1" fill="none" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <line
            key={i}
            x1={250 + 25 * Math.cos((angle * Math.PI) / 180)}
            y1={180 + 25 * Math.sin((angle * Math.PI) / 180)}
            x2={250 + 33 * Math.cos((angle * Math.PI) / 180)}
            y2={180 + 33 * Math.sin((angle * Math.PI) / 180)}
            stroke="#A9C1A9"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
      </g>
      <g className="float">
        <circle cx="100" cy="80" r="4" fill="#E3F498" className="pulse" />
        <circle cx="310" cy="90" r="3" fill="#CBD4BF" className="pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="320" cy="250" r="4" fill="#A9C1A9" className="pulse" style={{ animationDelay: '1s' }} />
      </g>
      <path d="M130 100 L155 120" stroke="#A9C1A9" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
      <path d="M290 110 L270 140" stroke="#A9C1A9" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  );
}
