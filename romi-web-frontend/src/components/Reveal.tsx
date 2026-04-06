"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Animation direction */
  type?: "up" | "left" | "right" | "scale";
  /** Delay in ms before the transition starts once visible */
  delay?: number;
  /** IntersectionObserver root margin to trigger earlier/later */
  rootMargin?: string;
  style?: CSSProperties;
}

const typeClass: Record<NonNullable<RevealProps["type"]>, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export default function Reveal({
  children,
  className = "",
  type = "up",
  delay = 0,
  rootMargin = "0px 0px -40px 0px",
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={`${typeClass[type]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
    >
      {children}
    </div>
  );
}
