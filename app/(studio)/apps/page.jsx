import { ProductGallery, ProductDirectory } from "@/components/studio/ProductGallery";

export const metadata = { title: "Products", alternates: { canonical: "/apps" } };

export default function ProductsPage() {
  return (
    <div className="studio-wrap collection-page">
      <div className="page-heading"><h1>Our products.</h1></div>
      <ProductGallery />
      <section className="more-section"><div className="section-heading"><h2>More from EchoForge.</h2></div><ProductDirectory /></section>
    </div>
  );
}
