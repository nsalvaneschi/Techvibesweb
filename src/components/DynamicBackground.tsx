'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
}

interface GradientOrb {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  speed: number;
  angle: number;
  wobbleSpeed: number;
  wobbleAmount: number;
}

const COLORS = [
  'rgba(203, 212, 191,',
  'rgba(169, 193, 169,',
  'rgba(227, 244, 152,',
  'rgba(107, 122, 99,',
];

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const orbsRef = useRef<GradientOrb[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);
  const prefersReducedMotion = useRef(false);

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 10000), 120);
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    return particles;
  }, []);

  const initOrbs = useCallback((width: number, height: number) => {
    const orbs: GradientOrb[] = [];
    const orbConfigs = [
      { color: 'rgba(203, 212, 191,', radius: 0.5, speed: 0.0002, wobbleSpeed: 0.003, wobbleAmount: 0.15 },
      { color: 'rgba(169, 193, 169,', radius: 0.45, speed: 0.0003, wobbleSpeed: 0.004, wobbleAmount: 0.12 },
      { color: 'rgba(227, 244, 152,', radius: 0.4, speed: 0.0004, wobbleSpeed: 0.005, wobbleAmount: 0.1 },
      { color: 'rgba(107, 122, 99,', radius: 0.35, speed: 0.0005, wobbleSpeed: 0.006, wobbleAmount: 0.08 },
    ];

    for (let i = 0; i < orbConfigs.length; i++) {
      const config = orbConfigs[i];
      const angle = (i / orbConfigs.length) * Math.PI * 2;
      orbs.push({
        x: width / 2 + Math.cos(angle) * width * 0.3,
        y: height / 2 + Math.sin(angle) * height * 0.3,
        targetX: width / 2 + Math.cos(angle) * width * 0.3,
        targetY: height / 2 + Math.sin(angle) * height * 0.3,
        radius: Math.max(width, height) * config.radius,
        color: config.color,
        speed: config.speed,
        angle,
        wobbleSpeed: config.wobbleSpeed,
        wobbleAmount: config.wobbleAmount,
      });
    }

    return orbs;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      particlesRef.current = initParticles(window.innerWidth, window.innerHeight);
      orbsRef.current = initOrbs(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, active: true };
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    const animate = () => {
      if (prefersReducedMotion.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      timeRef.current += 0.016;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, width, height);

      // Draw gradient orbs - more dramatic
      orbsRef.current.forEach((orb) => {
        orb.angle += orb.speed;

        const wobbleX = Math.sin(timeRef.current * orb.wobbleSpeed * 60) * width * orb.wobbleAmount;
        const wobbleY = Math.cos(timeRef.current * orb.wobbleSpeed * 60 * 0.7) * height * orb.wobbleAmount;

        orb.targetX = width / 2 + Math.cos(orb.angle) * width * 0.3 + wobbleX;
        orb.targetY = height / 2 + Math.sin(orb.angle) * height * 0.3 + wobbleY;

        // Mouse influence - stronger
        if (mouse.active) {
          const dx = mouse.x - orb.targetX;
          const dy = mouse.y - orb.targetY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / (width * 0.6));

          orb.x += (orb.targetX + dx * influence * 0.25 - orb.x) * 0.03;
          orb.y += (orb.targetY + dy * influence * 0.25 - orb.y) * 0.03;
        } else {
          orb.x += (orb.targetX - orb.x) * 0.02;
          orb.y += (orb.targetY - orb.y) * 0.02;
        }

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        const breathe = Math.sin(timeRef.current * 0.3 + orb.angle) * 0.04;
        const baseOpacity = 0.12 + breathe;

        gradient.addColorStop(0, `${orb.color}${baseOpacity + 0.06})`);
        gradient.addColorStop(0.3, `${orb.color}${baseOpacity * 0.7})`);
        gradient.addColorStop(0.7, `${orb.color}${baseOpacity * 0.3})`);
        gradient.addColorStop(1, `${orb.color}0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Mouse glow effect
      if (mouse.active) {
        const mouseGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
        mouseGradient.addColorStop(0, 'rgba(203, 212, 191, 0.08)');
        mouseGradient.addColorStop(0.5, 'rgba(169, 193, 169, 0.03)');
        mouseGradient.addColorStop(1, 'rgba(203, 212, 191, 0)');
        ctx.fillStyle = mouseGradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw and update particles
      const particles = particlesRef.current;
      const connectionDistance = 150;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse attraction/repulsion
        if (mouse.active) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 200 && mDist > 5) {
            const force = (200 - mDist) / 200;
            p.vx += (mdx / mDist) * force * 0.03;
            p.vy += (mdy / mDist) * force * 0.03;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        // Damping
        p.vx *= 0.998;
        p.vy *= 0.998;

        // Wrap around
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Pulse opacity
        const pulse = Math.sin(timeRef.current * p.pulseSpeed * 60 + p.pulseOffset);
        const currentOpacity = p.opacity * (0.4 + pulse * 0.6);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentOpacity})`;
        ctx.fill();

        // Glow on particles
        if (p.radius > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${currentOpacity * 0.15})`;
          ctx.fill();
        }

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(203, 212, 191, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    if (!prefersReducedMotion.current) {
      animate();
    } else {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [initParticles, initOrbs]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#000000' }}
      aria-hidden="true"
    />
  );
}
