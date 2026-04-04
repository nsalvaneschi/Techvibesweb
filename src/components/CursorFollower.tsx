'use client';

import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const dotPosRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const animate = () => {
      const mouse = mouseRef.current;
      const dotPos = dotPosRef.current;
      const ringPos = ringPosRef.current;

      dotPos.x += (mouse.x - dotPos.x) * 0.25;
      dotPos.y += (mouse.y - dotPos.y) * 0.25;
      ringPos.x += (mouse.x - ringPos.x) * 0.08;
      ringPos.y += (mouse.y - ringPos.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.x - 4}px, ${dotPos.y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.x - 20}px, ${ringPos.y - 20}px)`;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (isTouchDevice.current) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#CBD4BF] pointer-events-none z-[9999] mix-blend-difference"
        style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#CBD4BF]/30 pointer-events-none z-[9998]"
        style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
        aria-hidden="true"
      />
    </>
  );
}
