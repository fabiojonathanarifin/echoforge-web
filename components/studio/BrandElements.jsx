import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import { STUDIO_PRODUCTS, STUDIO_SUMMARIES } from "@/lib/studioProducts";
import { BrandReveal, ProductStage } from "./BrandMotion";

export function EchoLines({ className = "", variant = "hero" }) {
  const gradientId = `echo-thread-${variant}`;
  const viewBox = variant === "studio" ? "300 120 1050 700" : "0 0 1600 850";
  return (
    <svg className={`echo-lines ${className}`} viewBox={viewBox} fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={gradientId} x1="300" y1="850" x2="1350" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0" />
          <stop offset=".48" stopColor="currentColor" stopOpacity=".26" />
          <stop offset="1" stopColor="currentColor" stopOpacity=".65" />
        </linearGradient>
      </defs>
      <g className="echo-line-fan">{Array.from({ length: 23 }, (_, i) => (
        <path key={i} d={`M ${200 + i * 38} 980 C ${-250 + i * 43} ${340 + i * 6}, ${1120 + i * 22} ${160 + i * 15}, ${1150 + i * 37} -160`} stroke={`url(#${gradientId})`} strokeWidth=".7" />
      ))}</g>
      <g className="echo-line-current">{Array.from({ length: 15 }, (_, i) => (
        <path key={i} d={`M ${560 + i * 41} 980 C ${900 + i * 18} ${550 + i * 10}, ${1530 + i * 19} ${670 - i * 18}, 1760 ${230 - i * 14}`} stroke={`url(#${gradientId})`} strokeWidth=".8" />
      ))}</g>
    </svg>
  );
}

export function ProductCollection({ compact = false }) {
  const collection = compact ? products.filter(product => !STUDIO_PRODUCTS[product.name]) : products;
  return <div className="echo-directory">{collection.map((product, index) => (
    <BrandReveal key={product.name} delay={(index % 2) * 0.08}><Link href={product.href} className="echo-directory-item">
      <Image src={product.icon} alt="" width={48} height={48} className="echo-icon" />
      <div><h3>{product.name}</h3><p>{STUDIO_PRODUCTS[product.name]?.description || STUDIO_SUMMARIES[product.name] || product.tagline}</p></div>
      <ArrowUpRight size={19} aria-hidden="true" />
    </Link></BrandReveal>
  ))}</div>;
}

export function SelectedProducts() {
  return <div className="echo-selected">{products.filter(product => STUDIO_PRODUCTS[product.name]).map((product, index) => {
    const detail = STUDIO_PRODUCTS[product.name];
    return <BrandReveal as="article" delay={(index % 2) * 0.1} className={`echo-product echo-product-${detail.tone}`} key={product.name}>
      <ProductStage name={product.name} media={detail.media}>
        <Link href={product.href} className="echo-art-caption" aria-label={`Visit ${product.name}`}><Image src={product.icon} width={34} height={34} alt="" /><span>{product.name}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>
      </ProductStage>
      <div className="echo-product-copy"><p className="echo-meta">{detail.category}</p><h3><Link href={product.href}>{detail.title}</Link></h3><p>{detail.description}</p></div>
    </BrandReveal>;
  })}</div>;
}
