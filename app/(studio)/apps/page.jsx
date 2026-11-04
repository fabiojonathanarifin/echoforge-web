import { ProductCollection, SelectedProducts } from "@/components/studio/BrandElements";
import { BrandReveal } from "@/components/studio/BrandMotion";

export const metadata = { alternates: { canonical: "/apps" }, title: "Apps" };

export default function StudioApps() {
  return <section className="echo-wrap echo-inner-page"><BrandReveal className="echo-page-heading"><h1>Our products.</h1></BrandReveal><SelectedProducts /><section className="echo-apps-more"><BrandReveal className="echo-section-heading"><h2>More from EchoForge.</h2></BrandReveal><ProductCollection compact /></section></section>;
}
