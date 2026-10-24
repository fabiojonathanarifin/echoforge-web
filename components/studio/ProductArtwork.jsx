"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { STUDIO_PRODUCTS } from "@/lib/studioProducts";
import ProductClip from "./ProductClip";

function ScreenImage({ media, className = "" }) {
  return <Image className={className} src={media.src} alt={media.alt} width={media.width} height={media.height} unoptimized sizes="(max-width: 760px) 48vw, 24vw" />;
}

export default function ProductArtwork({ name }) {
  const product = STUDIO_PRODUCTS[name];
  const { primary, secondary } = product.media;
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const mainY = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const secondY = useTransform(scrollYProgress, [0, 1], [32, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 0]);
  const secondRotate = useTransform(scrollYProgress, [0, 1], [6, 2]);

  return (
    <div ref={ref} className={`product-art art-${product.tone} ${primary.isWeb ? "art-web" : "art-mobile"}`}>
      {secondary && (
        <motion.div className={`screen-secondary ${secondary.isDetail ? "screen-detail" : "screen-device"}`} style={shouldReduceMotion ? undefined : { y: secondY, rotate: secondRotate }}>
          <ScreenImage media={secondary} />
        </motion.div>
      )}
      <motion.div className={`screen-primary ${primary.isWeb ? "screen-browser" : "screen-device"} ${secondary ? "has-secondary" : ""}`} style={shouldReduceMotion ? undefined : { y: mainY, rotate }}>
        {primary.video ? <ProductClip media={primary} name={name} /> : <ScreenImage media={primary} />}
      </motion.div>
    </div>
  );
}
