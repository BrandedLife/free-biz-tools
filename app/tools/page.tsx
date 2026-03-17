import { Suspense } from "react";
import { toolCategories } from "@/tools/data/categories";
import { tools } from "@/tools/data/tools";
import ToolsExplorer from "@/tools/components/ToolsExplorer";

export const metadata = {
  title: "Free Business Calculators | Free Biz Tools",
  description:
    "Browse free calculators for pricing, ecommerce, marketing, and business planning.",
};

function ToolsExplorerFallback() {
  return (
    <section className="surface-card p-8 md:p-12">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Loading</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          Loading calculator explorer...
        </h2>
        <p className="mt-4 text-slate-600">
          Please wait while the tool library loads.
        </p>
      </div>
    </section>
  );
}

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

      <Suspense fallback={<ToolsExplorerFallback />}>
        <ToolsExplorer tools={tools} categories={toolCategories} />
      </Suspense>
    </main>
  );
}