import { toolCategories } from "@/tools/data/categories";
import { tools } from "@/tools/data/tools";
import ToolsExplorer from "@/tools/components/ToolsExplorer";

export const metadata = {
  title: "Free Business Calculators | Free Biz Tools",
  description:
    "Browse free calculators for pricing, ecommerce, marketing, and business planning.",
};

export default function ToolsPage() {
  return (
    <main className="section-shell py-16">
      <header className="mb-12">
        <p className="eyebrow">Calculator library</p>
        <h1 className="mt-3 hero-title max-w-4xl">
          Browse every business calculator in one place
        </h1>
        <p className="mt-6 max-w-2xl body-lg">
          Search, filter, and explore calculators for pricing, ecommerce,
          marketing, finance, and business planning.
        </p>
      </header>

      <ToolsExplorer tools={tools} categories={toolCategories} />
    </main>
  );
}