"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform, animate } from "framer-motion";
import ProductClip from "@/components/studio/ProductClip";

const EASE = [0.22, 0.61, 0.36, 1];
const TRANSITION = { type: "tween", duration: 0.45, ease: EASE };
const subscribeHydration = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function useMotionEnabled() {
  const hasHydrated = useSyncExternalStore(subscribeHydration, getClientSnapshot, getServerSnapshot);
  const shouldReduceMotion = useReducedMotion();
  return hasHydrated && shouldReduceMotion === false;
}

export function BrandReveal({ children, className = "", delay = 0, as = "div" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const isMotionEnabled = useMotionEnabled();
  const Component = as === "article" ? motion.article : motion.div;
  return <Component ref={ref} className={className} initial={false}
    animate={{ y: !isMotionEnabled || isInView ? 0 : 32 }}
    transition={{ ...TRANSITION, duration: isMotionEnabled ? 0.45 : 0, delay }}>{children}</Component>;
}

export function BrandHero({ lines, children }) {
  const ref = useRef(null);
  const isMotionEnabled = useMotionEnabled();
  const isInView = useInView(ref);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pointerAnimations = useRef([]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const lineY = useTransform(scrollYProgress, [0, 1], [0, -135]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, 95]);
  const wordOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  useEffect(() => {
    const syncVisibility = () => setIsPageVisible(!document.hidden);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  useEffect(() => () => pointerAnimations.current.forEach(animation => animation.stop()), []);

  const moveLines = (x, y) => {
    pointerAnimations.current.forEach(animation => animation.stop());
    pointerAnimations.current = [animate(pointerX, x, TRANSITION), animate(pointerY, y, TRANSITION)];
  };

  const handlePointerMove = event => {
    if (!isMotionEnabled || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    moveLines((event.clientX - bounds.left - bounds.width / 2) * 0.04, (event.clientY - bounds.top - bounds.height / 2) * 0.04);
  };

  return <section ref={ref} className="echo-hero" onPointerMove={handlePointerMove} onPointerLeave={() => moveLines(0, 0)} data-running={isInView && isPageVisible && isMotionEnabled}>
    <motion.div className="echo-line-depth" style={{ y: isMotionEnabled ? lineY : 0 }}>
      <motion.div className="echo-line-pointer" style={{ x: isMotionEnabled ? pointerX : 0, y: isMotionEnabled ? pointerY : 0 }}>{lines}</motion.div>
    </motion.div>
    <motion.div className="echo-hero-wordmark" aria-hidden="true" style={isMotionEnabled ? { y: wordY, opacity: wordOpacity } : undefined}><span>ECHOFORGE</span></motion.div>
    {children}
  </section>;
}

function ProductMedia({ media, name }) {
  return media.video ? <ProductClip media={media} name={name} showControls={false} /> : <Image src={media.src} alt={media.alt} width={media.width} height={media.height} unoptimized sizes="(max-width: 700px) 70vw, 30vw" />;
}

export function ProductStage({ name, media, children }) {
  const ref = useRef(null);
  const isMotionEnabled = useMotionEnabled();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const mainY = useTransform(scrollYProgress, [0, 1], [42, -32]);
  const secondY = useTransform(scrollYProgress, [0, 1], [70, -12]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 1]);

  return <div ref={ref} className={`echo-product-art ${media.primary.isWeb ? "echo-web-art" : ""} ${media.secondary ? "echo-paired-art" : ""}`}>
    {children}
    {media.secondary && <motion.div className={`echo-secondary-screen ${media.secondary.isDetail ? "echo-detail-screen" : ""}`} style={isMotionEnabled ? { y: secondY, rotate: 5 } : undefined}><ProductMedia media={media.secondary} name={name} /></motion.div>}
    <motion.div className="echo-screen-depth" style={isMotionEnabled ? { y: mainY, rotate } : undefined}><div className="echo-product-screen"><ProductMedia media={media.primary} name={name} /></div></motion.div>
  </div>;
}
