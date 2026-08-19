import { useEffect, useRef, useState, type ReactNode } from "react";

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useInView<T extends HTMLElement>(threshold = 0.18, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** entrance direction / style — defaults to fade-up */
  variant?: "up" | "left" | "right" | "scale" | "blur";
}

export function Reveal({ children, delay = 0, className = "", variant = "up" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-v={variant === "up" ? undefined : variant}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ ["--rv-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* Animated counter that starts when scrolled into view */
export function CountUp({
  value,
  suffix = "",
  duration = 1400,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {display}
      {suffix}
    </span>
  );
}

/* Staggered line-mask reveal for hero / page titles */
export function MaskLines({
  lines,
  baseDelay = 0,
  step = 120,
  className = "",
  lineClassName = "",
}: {
  lines: ReactNode[];
  baseDelay?: number;
  step?: number;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`mask-line ${lineClassName}`}>
          <span style={{ ["--ml-delay" as string]: `${baseDelay + i * step}ms` }}>{line}</span>
        </span>
      ))}
    </span>
  );
}
