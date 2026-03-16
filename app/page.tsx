import Link from "next/link";
import { tools } from "@/tools/data/tools";
import { toolCategories } from "@/tools/data/categories";
import ToolCard from "@/tools/components/ToolCard";
import CalculatorSearch from "@/tools/components/CalculatorSearch";

export default function HomePage() {
  const featuredSlugs = [
    "profit-margin-calculator",
    "markup-calculator",
    "break-even-calculator",
    "roas-calculator",
    "loan-payment-calculator",
    "vat-calculator",
  ];

  const featuredTools = featuredSlugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));

  return (
    <main>
      <section className="section-shell py-20 md:py-28">
        <div className="surface-card-soft overflow-hidden p-8 md:p-14">
          <p className="eyebrow">Free Biz Tools</p>

          <h1 className="mt-5 max-w-4xl hero-title">
            Free business calculators for pricing, growth, ecommerce, and smarter decisions
          </h1>

          <p className="mt-6 max-w-2xl body-lg">
            A fast, clean calculator library for operators, founders, marketers,
            and store owners. Built to give quick answers without the clutter.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/tools" className="button-primary">
              Browse all calculators
            </Link>
            <Link
              href="/tools/profit-margin-calculator"
              className="button-secondary"
            >
              Try a popular tool
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
              <p className="text-sm text-slate-500">Live calculators</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                {tools.length}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
              <p className="text-sm text-slate-500">Categories</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                {toolCategories.length}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
              <p className="text-sm text-slate-500">Built for</p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                Pricing, finance, marketing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16">
        <CalculatorSearch />
      </section>

      <section className="section-shell pb-16">
        <div className="mb-8">
          <p className="eyebrow">Browse by category</p>
          <h2 className="mt-3 section-title">Start with the area you need most</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Each category groups calculators by use case, making it easier to
            move from one calculation to the next.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {toolCategories.map((category) => {
            const count = tools.filter((tool) => tool.category === category.slug).length;

            return (
              <Link
                key={category.slug}
                href={`/tools/category/${category.slug}`}
                className="surface-card group block p-7 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950 transition group-hover:text-indigo-600">
                      {category.name}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                    {count} tools
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="mb-8">
          <p className="eyebrow">Featured calculators</p>
          <h2 className="mt-3 section-title">Popular starting points</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </main>
  );
}