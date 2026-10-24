import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import { STUDIO_PRODUCTS, STUDIO_SUMMARIES } from "@/lib/studioProducts";
import ProductArtwork from "./ProductArtwork";
import { Reveal } from "./StudioMotion";

export function ProductGallery() {
  return (
    <div className="product-gallery">
      {products.slice(0, 4).map((product, index) => {
        const story = STUDIO_PRODUCTS[product.name];
        return (
          <Reveal as="article" className="gallery-product" key={product.name} delay={(index % 2) * 0.1}>
            <div className="gallery-stage">
              <ProductArtwork name={product.name} />
              <a className="art-open" href={product.href} aria-label={story.action}>
                <ArrowUpRight size={21} />
              </a>
            </div>
            <div className="product-info">
              <div className="product-byline">
                <div><Image src={product.icon} width={25} height={25} alt="" /><h3>{product.name}</h3></div>
                <span>{story.category}</span>
              </div>
              <h4>{story.title}</h4>
              <p>{story.description}</p>
              <a className="text-link" href={product.href}>{story.action}<ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function ProductDirectory({ featuredOnly = false }) {
  const otherProducts = products.slice(4).filter((product) => !featuredOnly || product.isFeatured);
  return (
    <div className="product-directory">
      {otherProducts.map((product) => (
        <a key={product.name} href={product.href} className="directory-product">
          <Image src={product.icon} width={42} height={42} alt="" />
          <div><h3>{product.name}</h3><p>{STUDIO_SUMMARIES[product.name] || product.tagline}</p></div>
          <ArrowUpRight size={18} />
        </a>
      ))}
    </div>
  );
}
