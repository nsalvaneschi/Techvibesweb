'use client';

export default function NetworkIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes flow { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        @keyframes radiate { 0% { r: 10; opacity: 0.5; } 100% { r: 40; opacity: 0; } }
        .pulse { animation: pulse 2s ease-in-out infinite; transform-origin: center; }
        .flow { animation: flow 1s linear infinite; }
        .radiate { animation: radiate 2s ease-out infinite; }
      `}</style>
      <circle cx="200" cy="150" r="40" stroke="#CBD4BF" strokeWidth="1.5" fill="none" />
      <circle cx="200" cy="150" r="4" fill="#E3F498" className="pulse" />
      <circle cx="200" cy="150" r="10" stroke="#A9C1A9" strokeWidth="0.5" className="radiate" />
      <circle cx="200" cy="150" r="10" stroke="#A9C1A9" strokeWidth="0.5" className="radiate" style={{ animationDelay: '0.6s' }} />
      <line x1="200" y1="110" x2="200" y2="60" stroke="#A9C1A9" strokeWidth="1" strokeDasharray="4 4" className="flow" />
      <line x1="200" y1="190" x2="200" y2="240" stroke="#A9C1A9" strokeWidth="1" strokeDasharray="4 4" className="flow" />
      <line x1="160" y1="150" x2="100" y2="150" stroke="#A9C1A9" strokeWidth="1" strokeDasharray="4 4" className="flow" />
      <line x1="240" y1="150" x2="300" y2="150" stroke="#A9C1A9" strokeWidth="1" strokeDasharray="4 4" className="flow" />
      <line x1="172" y1="122" x2="130" y2="80" stroke="#A9C1A9" strokeWidth="1" strokeDasharray="4 4" className="flow" />
      <line x1="228" y1="122" x2="270" y2="80" stroke="#A9C1A9" strokeWidth="1" strokeDasharray="4 4" className="flow" />
      <line x1="172" y1="178" x2="130" y2="220" stroke="#A9C1A9" strokeWidth="1" strokeDasharray="4 4" className="flow" />
      <line x1="228" y1="178" x2="270" y2="220" stroke="#A9C1A9" strokeWidth="1" strokeDasharray="4 4" className="flow" />
      <circle cx="200" cy="50" r="6" fill="#CBD4BF" className="pulse" style={{ animationDelay: '0.2s' }} />
      <circle cx="200" cy="250" r="6" fill="#CBD4BF" className="pulse" style={{ animationDelay: '0.4s' }} />
      <circle cx="90" cy="150" r="6" fill="#CBD4BF" className="pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="310" cy="150" r="6" fill="#CBD4BF" className="pulse" style={{ animationDelay: '0.8s' }} />
      <circle cx="120" cy="70" r="6" fill="#CBD4BF" className="pulse" style={{ animationDelay: '1s' }} />
      <circle cx="280" cy="70" r="6" fill="#CBD4BF" className="pulse" style={{ animationDelay: '1.2s' }} />
      <circle cx="120" cy="230" r="6" fill="#CBD4BF" className="pulse" style={{ animationDelay: '1.4s' }} />
      <circle cx="280" cy="230" r="6" fill="#CBD4BF" className="pulse" style={{ animationDelay: '1.6s' }} />
    </svg>
  );
}
