import AppCard from "@/components/AppCard";
import { products } from "@/lib/products";

export default function AppsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl font-black tracking-tight text-foreground">Apps</h1>
        <p className="text-muted text-xl max-w-2xl">Focused tools for focused minds.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product) => (
          <AppCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
