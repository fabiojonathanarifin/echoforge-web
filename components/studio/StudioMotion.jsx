"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";

export const STUDIO_EASE = [0.22, 0.61, 0.36, 1];

export function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const shouldReduceMotion = useReducedMotion();
  const Component = as === "article" ? motion.article : motion.div;

  return (
    <Component
      ref={ref}
      className={`studio-reveal ${className}`}
      initial={false}
      animate={{ y: shouldReduceMotion || isInView ? 0 : 28 }}
      transition={{ type: "tween", duration: shouldReduceMotion ? 0 : 0.5, delay, ease: STUDIO_EASE }}
    >
      {children}
    </Component>
  );
}

export function CoastScene({ children }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div ref={ref} className="coast-photo">
      <motion.div className="coast-image-layer" style={{ y: shouldReduceMotion ? 0 : y }}>
        {children}
      </motion.div>
    </div>
  );
}
