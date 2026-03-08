import Link from "next/link";
import { tools } from "@/tools/data/tools";
import { toolCategories } from "@/tools/data/categories";
import ToolCard from "@/tools/components/ToolCard";

export default function HomePage() {
  const featuredTools = tools.slice(0, 6);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">
          Free Biz Tools
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-gray-900">
          Free business calculators for pricing, growth, and decision-making
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Practical calculators for ecommerce, pricing, marketing, and business
          planning. Fast, simple, and built for operators.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/tools"
            className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Browse all tools
          </Link>

          <Link
            href="/tools/profit-margin-calculator"
            className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
          >
            Try a calculator
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          Browse by category
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {toolCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/tools/category/${category.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-gray-400 hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {category.description}
              </p>
            </Link>
          ))}
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