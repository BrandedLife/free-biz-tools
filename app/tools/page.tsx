import Link from "next/link";
import { toolCategories } from "@/tools/data/categories";
import { tools } from "@/tools/data/tools";
import ToolCard from "@/tools/components/ToolCard";

export const metadata = {
  title: "Free Business Calculators | Free Biz Tools",
  description:
    "Browse free calculators for pricing, ecommerce, marketing, and business planning.",
};

export default function ToolsPage() {
  const grouped = toolCategories.map((category) => ({
    ...category,
    items: tools
      .filter((tool) => tool.category === category.slug)
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));

  return (
    <main className="section-shell py-16">
      <header className="mb-12">
        <p className="eyebrow">Calculator library</p>
        <h1 className="mt-3 hero-title max-w-4xl">
          Browse every business calculator in one place
        </h1>
        <p className="mt-6 max-w-2xl body-lg">
          Explore calculators by category and move naturally between related
          pricing, marketing, ecommerce, and business calculations.
        </p>
      </header>

      <section className="mb-16 grid gap-6 sm:grid-cols-2">
        {grouped.map((category) => (
          <Link
            key={category.slug}
            href={`/tools/category/${category.slug}`}
            className="surface-card block p-7 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {category.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                {category.items.length}
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="space-y-14">
        {grouped.map((category) => (
          <div key={category.slug}>
            <div className="mb-6 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow">{category.slug}</p>
                <h2 className="mt-2 section-title">{category.name}</h2>
              </div>

              <Link
                href={`/tools/category/${category.slug}`}
                className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
              >
                View all →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}