"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

interface Particle {
  id: number;
  text: string;
  x: number;
  y: number;
  deltaX: number;
  deltaY: number;
  rotation: number;
  colorClass: string;
  durationMs: number;
}

// Tech pools with weighted distribution
const PRIMARY_TECHS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Python",
];

const SECONDARY_TECHS = [
  "Java",
  "C",
  "C++",
  "C#",
  "Go",
  "Rust",
  "PHP",
  "SQL",
];

// Aesthetic subtle accent styles
const COLOR_CLASSES = [
  "text-indigo-300 border-indigo-500/30 bg-indigo-950/40 shadow-indigo-500/10",
  "text-cyan-300 border-cyan-500/30 bg-cyan-950/40 shadow-cyan-500/10",
  "text-violet-300 border-violet-500/30 bg-violet-950/40 shadow-violet-500/10",
  "text-emerald-300 border-emerald-500/30 bg-emerald-950/40 shadow-emerald-500/10",
  "text-sky-300 border-sky-500/30 bg-sky-950/40 shadow-sky-500/10",
  "text-purple-300 border-purple-500/30 bg-purple-950/40 shadow-purple-500/10",
];

export default function LanguageCursorEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isOverInteractive, setIsOverInteractive] = useState(false);
  const [isHoverDevice, setIsHoverDevice] = useState(false);

  const lastSpawnRef = useRef<{ x: number; y: number; time: number }>({
    x: 0,
    y: 0,
    time: 0,
  });
  const idCounterRef = useRef<number>(0);

  // Pick a random tech with weighted frequency (75% primary, 25% secondary)
  const getRandomTech = useCallback((): string => {
    const isPrimary = Math.random() < 0.75;
    const pool = isPrimary ? PRIMARY_TECHS : SECONDARY_TECHS;
    return pool[Math.floor(Math.random() * pool.length)];
  }, []);

  // Check whether the cursor is currently over any interactive or ignored element
  const checkIsInteractive = useCallback((target: EventTarget | null, x: number, y: number): boolean => {
    let el = target as HTMLElement | null;
    if (!el && typeof document !== "undefined") {
      el = document.elementFromPoint(x, y) as HTMLElement | null;
    }
    if (!el) return false;

    // Selector matching all buttons, links, inputs, and elements marked with role="button" or data-cursor-ignore
    const interactiveSelector =
      'button, a, input, textarea, select, [role="button"], [data-cursor-ignore], [contenteditable="true"]';
    if (el.closest(interactiveSelector)) {
      return true;
    }

    // Inspect computed cursor: pointer on the element or its parent tree
    let current: HTMLElement | null = el;
    while (current && current !== document.body && current !== document.documentElement) {
      if (current.hasAttribute("data-cursor-ignore")) {
        return true;
      }
      try {
        const style = window.getComputedStyle(current);
        if (style.cursor === "pointer") {
          return true;
        }
      } catch {
        // Safe catch if element is detached
      }
      current = current.parentElement;
    }

    return false;
  }, []);

  useEffect(() => {
    // Only enable on desktop pointer devices and respect reduced motion
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!hoverQuery.matches || motionQuery.matches) {
      setIsHoverDevice(false);
      return;
    }

    setIsHoverDevice(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setMousePos({ x, y });

      const interactive = checkIsInteractive(e.target, x, y);
      setIsOverInteractive(interactive);

      // DO NOT generate particles when over buttons, links, inputs, or interactive elements
      if (interactive) {
        // Reset reference position to current cursor so when returning to content,
        // it doesn't immediately spawn an abrupt jump
        lastSpawnRef.current = { x, y, time: performance.now() };
        return;
      }

      const now = performance.now();
      const last = lastSpawnRef.current;
      const dx = x - last.x;
      const dy = y - last.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Distance threshold of 38px and time threshold of 70ms for fluid trail
      if (distance >= 38 && now - last.time >= 70) {
        lastSpawnRef.current = { x, y, time: now };

        // Randomized organic drift (travel 25–70px in random directions)
        const angle = Math.random() * Math.PI * 2;
        const speed = 25 + Math.random() * 45;
        const deltaX = Math.cos(angle) * speed;
        const deltaY = Math.sin(angle) * speed;
        const rotation = (Math.random() - 0.5) * 22; // -11 to +11 deg
        const colorClass = COLOR_CLASSES[Math.floor(Math.random() * COLOR_CLASSES.length)];
        const durationMs = 800 + Math.random() * 350; // 800ms - 1150ms

        const newId = ++idCounterRef.current;
        const newParticle: Particle = {
          id: newId,
          text: getRandomTech(),
          x,
          y,
          deltaX,
          deltaY,
          rotation,
          colorClass,
          durationMs,
        };

        setParticles((prev) => {
          // Cap at max 14 active particles for peak 60fps performance
          const trimmed = prev.length >= 14 ? prev.slice(prev.length - 13) : prev;
          return [...trimmed, newParticle];
        });

        // Automatically clean up particle from memory/DOM once finished
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newId));
        }, durationMs);
      }
    };

    const handleMouseLeave = () => {
      setMousePos(null);
      setIsOverInteractive(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [getRandomTech, checkIsInteractive]);

  if (!isHoverDevice) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none"
    >
      {/* Subtle Custom Follower Dot (smoothly transitions over buttons without particles) */}
      {mousePos && (
        <div
          className={`fixed rounded-full pointer-events-none transition-all duration-100 ease-out -translate-x-1/2 -translate-y-1/2 ${
            isOverInteractive
              ? "w-4 h-4 bg-indigo-400/20 border border-indigo-400/40"
              : "w-2.5 h-2.5 bg-indigo-400/60 blur-[0.5px] shadow-sm shadow-indigo-400/50"
          }`}
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      {/* Floating Programming Language Particles (only generated over normal content) */}
      {particles.map((p) => (
        <span
          key={p.id}
          className={`fixed inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-medium tracking-tight border backdrop-blur-md shadow-sm transition-all pointer-events-none particle-fade-anim ${p.colorClass}`}
          style={
            {
              left: `${p.x}px`,
              top: `${p.y}px`,
              "--delta-x": `${p.deltaX}px`,
              "--delta-y": `${p.deltaY}px`,
              "--rotation": `${p.rotation}deg`,
              "--duration": `${p.durationMs}ms`,
            } as React.CSSProperties
          }
        >
          {p.text}
        </span>
      ))}
    </div>
  );
}
