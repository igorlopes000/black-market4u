import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function SlideBg({ src, overlay = "linear" }: { src: string; overlay?: "linear" | "radial" }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            overlay === "linear"
              ? "linear-gradient(180deg, rgba(11,11,11,0.72), rgba(11,11,11,0.35))"
              : "radial-gradient(ellipse at center, rgba(11,11,11,0.45) 0%, rgba(11,11,11,0.82) 100%)",
        }}
      />
    </div>
  );
}

export function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display font-extrabold uppercase leading-[0.95] tracking-[0.01em] text-deck-title ${className}`}
      style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
    >
      {children}
    </h2>
  );
}

export function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`font-sans font-medium text-deck-body ${className}`}
      style={{ fontSize: "clamp(18px, 2.6vw, 34px)" }}
    >
      {children}
    </p>
  );
}

export function Footer({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p
      className={`absolute bottom-[6%] font-sans text-deck-footer ${
        center ? "left-1/2 -translate-x-1/2 text-center" : "left-[7%]"
      }`}
      style={{ fontSize: "clamp(12px, 1.1vw, 18px)" }}
    >
      {children}
    </p>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-reveal=""
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span
      className="mb-4 block font-sans font-semibold uppercase tracking-[0.22em] text-deck-green"
      style={{ fontSize: "clamp(10px, 1vw, 16px)" }}
    >
      {children}
    </span>
  );
}
