"use client";

import { useEffect, useRef } from "react";

export function ScanlineEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 217, 255, 0.03) 0px,
            transparent 1px,
            transparent 2px,
            rgba(0, 217, 255, 0.03) 3px
          )`,
        }}
      />
    </div>
  );
}

export function GridOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[99] opacity-[0.02]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}

export function VignetteEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[98]">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 60%,
            rgba(0, 0, 0, 0.4) 100%
          )`,
        }}
      />
    </div>
  );
}

export function HolographicGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create moving gradient effect
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const offset = (frame % 1000) / 1000;
      gradient.addColorStop(0, `rgba(0, 217, 255, ${0.02 * Math.sin(offset * Math.PI)})`);
      gradient.addColorStop(0.5, `rgba(138, 43, 226, ${0.015 * Math.cos(offset * Math.PI)})`);
      gradient.addColorStop(1, `rgba(0, 217, 255, ${0.01 * Math.sin(offset * Math.PI)})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[97]"
    />
  );
}
