"use client";

import { useEffect, useRef } from "react";

const DOT = "rgb(4 120 87 / 0.42)";
const LINE = "rgb(4 120 87 / 0.14)";
const R_MAX = 1.6;
const CONNECT_DIST = 88;
const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
const SPEED = 0.12;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function HeroConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const reducedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = reducedMq.matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const initParticles = () => {
      const area = width * height;
      const base = Math.min(95, Math.max(42, Math.floor(area / 12000)));
      const n = reducedRef.current ? Math.floor(base * 0.55) : base;
      const out: Particle[] = [];
      const rand = (seed: number) => {
        const x = Math.sin(seed * 12.9898 + seed * 78.233) * 43758.5453;
        return x - Math.floor(x);
      };
      for (let i = 0; i < n; i++) {
        const rx = rand(i * 3 + 1) * width;
        const ry = rand(i * 3 + 2) * height;
        const a = rand(i * 3 + 3) * Math.PI * 2;
        out.push({
          x: rx,
          y: ry,
          vx: Math.cos(a) * SPEED * (0.6 + rand(i + 10) * 0.8),
          vy: Math.sin(a) * SPEED * (0.6 + rand(i + 11) * 0.8),
          r: 1 + rand(i + 20) * R_MAX,
        });
      }
      particlesRef.current = out;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      if (width < 1 || height < 1) return;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const step = () => {
      if (reducedRef.current || !ctx) return;
      ctx.clearRect(0, 0, width, height);

      const parts = particlesRef.current;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }

      ctx.strokeStyle = LINE;
      ctx.lineWidth = 1;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x;
          const dy = parts[i].y - parts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < CONNECT_DIST_SQ && d2 > 1) {
            const t = 1 - d2 / CONNECT_DIST_SQ;
            ctx.globalAlpha = t * 0.85;
            ctx.beginPath();
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = DOT;
      for (const p of parts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    const drawStatic = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const parts = particlesRef.current;
      ctx.strokeStyle = LINE;
      ctx.lineWidth = 1;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x;
          const dy = parts[i].y - parts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < CONNECT_DIST_SQ && d2 > 1) {
            const t = 1 - d2 / CONNECT_DIST_SQ;
            ctx.globalAlpha = t * 0.85;
            ctx.beginPath();
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = DOT;
      for (const p of parts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onReducedChange = () => {
      reducedRef.current = reducedMq.matches;
      cancelAnimationFrame(rafRef.current);
      initParticles();
      if (reducedRef.current) drawStatic();
      else step();
    };

    reducedMq.addEventListener("change", onReducedChange);
    resize();
    window.addEventListener("resize", resize);

    if (reducedRef.current) drawStatic();
    else step();

    return () => {
      window.removeEventListener("resize", resize);
      reducedMq.removeEventListener("change", onReducedChange);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
      aria-hidden
    />
  );
}
