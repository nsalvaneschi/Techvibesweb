'use client';

export default function BlogAudioVideoIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes wave { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }
        @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.7; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .wave { animation: wave 1s ease-in-out infinite; transform-origin: center bottom; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .float { animation: float 3s ease-in-out infinite; }
      `}</style>
      <rect x="130" y="60" width="140" height="90" rx="6" stroke="#CBD4BF" strokeWidth="1.5" fill="#CBD4BF" fillOpacity="0.02" />
      <rect x="145" y="75" width="110" height="60" rx="3" stroke="#A9C1A9" strokeWidth="0.8" />
      <polygon points="190,95 220,105 190,115" fill="#E3F498" opacity="0.6" />
      <rect x="170" y="150" width="60" height="6" rx="3" fill="#A9C1A9" opacity="0.2" />
      <rect x="185" y="156" width="30" height="30" rx="3" stroke="#CBD4BF" strokeWidth="0.8" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <rect
          key={i}
          x={50 + i * 8}
          y={200}
          width="3"
          height={15 + Math.sin(i * 0.7) * 20}
          rx="1.5"
          fill="#CBD4BF"
          opacity="0.3"
          className="wave"
          style={{ animationDelay: `${i * 0.08}s`, transformOrigin: `${51.5 + i * 8}px 235px` }}
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <rect
          key={`r${i}`}
          x={270 + i * 8}
          y={200}
          width="3"
          height={15 + Math.cos(i * 0.7) * 20}
          rx="1.5"
          fill="#A9C1A9"
          opacity="0.3"
          className="wave"
          style={{ animationDelay: `${i * 0.08 + 0.4}s`, transformOrigin: `${271.5 + i * 8}px 235px` }}
        />
      ))}
      <g className="float">
        <circle cx="60" cy="50" r="4" fill="#E3F498" className="pulse" />
        <circle cx="350" cy="70" r="3" fill="#CBD4BF" className="pulse" style={{ animationDelay: '0.5s' }} />
      </g>
    </svg>
  );
}
