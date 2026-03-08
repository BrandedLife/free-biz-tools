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
  const featuredTools = [...tools]
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 6);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Free Business Calculators
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          A collection of practical calculators for pricing, ecommerce,
          marketing, and business planning.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          Browse by category
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {toolCategories.map((category) => {
            const count = tools.filter((tool) => tool.category === category.slug).length;

            return (
              <Link
                key={category.slug}
                href={`/tools/category/${category.slug}`}
                className="rounded-2xl border border-gray-200 p-6 transition hover:border-gray-400 hover:bg-gray-50"
              >
                <h2 className="text-2xl font-semibold text-gray-900">
                  {category.name}
                </h2>
                <p className="mt-2 text-gray-600">{category.description}</p>
                <p className="mt-3 text-sm text-gray-500">
                  {count} tool{count === 1 ? "" : "s"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          Featured tools
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </main>
  );
}