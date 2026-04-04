'use client';

export default function AudioVideoIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes wave { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes ring { 0% { r: 30; opacity: 0.5; } 100% { r: 80; opacity: 0; } }
        .wave { animation: wave 1.2s ease-in-out infinite; transform-origin: center bottom; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .ring { animation: ring 2s ease-out infinite; }
      `}</style>
      <rect x="140" y="100" width="120" height="80" rx="6" stroke="#CBD4BF" strokeWidth="1.5" fill="#CBD4BF" fillOpacity="0.03" />
      <rect x="155" y="115" width="90" height="50" rx="3" stroke="#A9C1A9" strokeWidth="0.8" fill="none" />
      <circle cx="200" cy="140" r="15" stroke="#E3F498" strokeWidth="1" fill="none" />
      <polygon points="195,133 210,140 195,147" fill="#E3F498" />
      <line x1="170" y1="180" x2="230" y2="180" stroke="#CBD4BF" strokeWidth="1" />
      <line x1="200" y1="180" x2="200" y2="200" stroke="#CBD4BF" strokeWidth="1" />
      <rect x="180" y="200" width="40" height="5" rx="2" fill="#A9C1A9" opacity="0.3" />
      <circle cx="200" cy="140" r="30" stroke="#A9C1A9" strokeWidth="0.5" className="ring" />
      <circle cx="200" cy="140" r="30" stroke="#A9C1A9" strokeWidth="0.5" className="ring" style={{ animationDelay: '0.6s' }} />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect
          key={i}
          x={60 + i * 10}
          y={230}
          width="4"
          height={20 + Math.sin(i * 0.8) * 15}
          rx="2"
          fill="#CBD4BF"
          opacity="0.4"
          className="wave"
          style={{ animationDelay: `${i * 0.15}s`, transformOrigin: `${64 + i * 10}px 250px` }}
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect
          key={`r${i}`}
          x={290 + i * 10}
          y={230}
          width="4"
          height={20 + Math.cos(i * 0.8) * 15}
          rx="2"
          fill="#A9C1A9"
          opacity="0.4"
          className="wave"
          style={{ animationDelay: `${i * 0.15 + 0.5}s`, transformOrigin: `${294 + i * 10}px 250px` }}
        />
      ))}
      <circle cx="80" cy="80" r="3" fill="#E3F498" className="pulse" />
      <circle cx="330" cy="70" r="3" fill="#CBD4BF" className="pulse" style={{ animationDelay: '0.5s' }} />
    </svg>
  );
}
