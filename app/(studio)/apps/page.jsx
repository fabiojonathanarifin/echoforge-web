import { ProductGallery, ProductDirectory } from "@/components/studio/ProductGallery";

export const metadata = { title: "Products", alternates: { canonical: "/apps" } };

export default function ProductsPage() {
  return (
    <div className="studio-wrap collection-page">
      <div className="page-heading"><p className="small-label">Our products</p><h1>Apps from<br />EchoForge.</h1><p>Budgeting, calling, reading, study, and more.</p></div>
      <ProductGallery />
      <section className="more-section"><div className="section-heading"><h2>The rest of the collection.</h2></div><ProductDirectory /></section>
    </div>
  );
}
