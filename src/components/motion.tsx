import { useEffect, useRef, useState, type ReactNode } from "react";
import { prefersReducedMotion } from "./Reveal";

function useRafScroll(callback: () => void, deps: unknown[]) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      callback();
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/* ---------- Parallax: shifts children against scroll for depth ---------- */
export function Parallax({
  children,
  speed = 0.12,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useRafScroll(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const center = rect.top + rect.height / 2 - window.innerHeight / 2;
    el.style.transform = `translate3d(0, ${(-center * speed).toFixed(1)}px, 0)`;
  }, [speed]);
  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/* ---------- ScrollFade: hero content eases away as you scroll down ---------- */
export function ScrollFade({
  children,
  className = "",
  distance = 56,
  fadeTo = 0.12,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  fadeTo?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useRafScroll(() => {
    const el = ref.current;
    if (!el) return;
    const p = Math.min(1, window.scrollY / (window.innerHeight * 0.85));
    el.style.opacity = String(1 - p * (1 - fadeTo));
    el.style.transform = `translate3d(0, ${(-p * distance).toFixed(1)}px, 0)`;
  }, [distance, fadeTo]);
  return (
    <div ref={ref} className={`will-change-[transform,opacity] ${className}`}>
      {children}
    </div>
  );
}

/* ---------- VelocityTilt: tilts with scroll speed, settles back ---------- */
export function VelocityTilt({
  children,
  className = "",
  max = 3,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    let current = 0;
    let target = 0;
    let lastY = window.scrollY;
    let raf = 0;
    let running = true;
    const loop = () => {
      if (!running) return;
      current += (target - current) * 0.09;
      target *= 0.9;
      el.style.transform = Math.abs(current) > 0.02 ? `skewX(${current.toFixed(2)}deg)` : "";
      raf = requestAnimationFrame(loop);
    };
    const onScroll = () => {
      const y = window.scrollY;
      target = Math.max(-max, Math.min(max, (y - lastY) * 0.09));
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [max]);
  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/* ---------- Scroll progress across an element (0 → 1) ---------- */
export function useScrollProgress<T extends HTMLElement>(startAt = 0.85, endAt = 0.35) {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  useRafScroll(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * startAt;
    const end = vh * endAt;
    const total = rect.height + (start - end);
    setProgress(Math.min(1, Math.max(0, (start - rect.top) / total)));
  }, [startAt, endAt]);
  return { ref, progress };
}

/* ---------- Back to top ---------- */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" })}
      aria-label="Back to top"
      title="Back to top"
      className={`group fixed bottom-6 z-40 flex h-12 w-12 items-center justify-center border border-gold-500/40 bg-navy-900/95 text-gold-400 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-500 hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950 ltr:left-6 rtl:right-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5m-6 6 6-6 6 6" />
      </svg>
    </button>
  );
}
