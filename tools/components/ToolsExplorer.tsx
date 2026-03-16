"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Tool } from "@/tools/data/tools";
import ToolCard from "@/tools/components/ToolCard";

type Category = {
  slug: string;
  name: string;
  description: string;
};

type ToolsExplorerProps = {
  tools: Tool[];
  categories: Category[];
};

export default function ToolsExplorer({
  tools,
  categories,
}: ToolsExplorerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlSearch = searchParams.get("search") ?? "";

  const [search, setSearch] = useState(urlSearch);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

  const popularSlugs = [
    "profit-margin-calculator",
    "markup-calculator",
    "break-even-calculator",
    "roas-calculator",
    "loan-payment-calculator",
    "vat-calculator",
  ];

  const recentSlugs = [
    "saas-mrr-calculator",
    "saas-arr-calculator",
    "loan-interest-calculator",
    "investment-return-calculator",
    "amortization-calculator",
    "payback-period-calculator",
  ];

  const popularTools = popularSlugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter((tool): tool is Tool => Boolean(tool));

  const recentTools = recentSlugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter((tool): tool is Tool => Boolean(tool));

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();

    return tools
      .filter((tool) => {
        const matchesCategory =
          activeCategory === "all" || tool.category === activeCategory;

        const matchesSearch =
          query === "" ||
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.slug.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [tools, search, activeCategory]);

  const quickResults = filteredTools.slice(0, 6);

  function updateSearch(value: string) {
    setSearch(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    const queryString = params.toString();
    router.replace(queryString ? `/tools?${queryString}` : "/tools", {
      scroll: false,
    });
  }

  return (
    <div className="space-y-16">
      <section className="surface-card p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">Find calculators faster</p>
            <h2 className="mt-3 section-title">Search and filter the full library</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Search by tool name, problem, or topic, then narrow the list by
              category.
            </p>

            <div className="mt-6">
              <label
                htmlFor="tool-search"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Search calculators
              </label>

              <input
                id="tool-search"
                type="text"
                value={search}
                onChange={(e) => updateSearch(e.target.value)}
                placeholder="Try: profit, loan, VAT, SaaS, margin..."
                className="input-premium"
              />

              {search.trim() && (
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  {quickResults.length > 0 ? (
                    <div className="space-y-2">
                      {quickResults.map((tool) => (
                        <Link
                          key={tool.slug}
                          href={`/tools/${tool.slug}`}
                          className="block rounded-xl px-4 py-3 transition hover:bg-slate-50"
                        >
                          <div className="text-sm font-semibold text-slate-950">
                            {tool.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-600">
                            {tool.description}
                          </div>
                        </Link>
                      ))}

                      {filteredTools.length > quickResults.length && (
                        <div className="px-4 pt-2 text-sm text-slate-500">
                          View the full filtered list below.
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="px-4 py-3 text-sm text-slate-600">
                      No matching calculators found.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-slate-700">
              Filter by category
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === "all"
                    ? "bg-indigo-600 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                All
              </button>

              {categories.map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => setActiveCategory(category.slug)}
                  className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category.slug
                      ? "bg-indigo-600 text-white"
                      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Results</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                {filteredTools.length}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Matching calculators appear below the search box and in the full list
                below.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Popular tools</p>
            <h2 className="mt-3 section-title">Most used calculators</h2>
          </div>

          <Link
            href="/tools"
            className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
          >
            View all calculators →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8">
          <p className="eyebrow">Recently added</p>
          <h2 className="mt-3 section-title">New calculators in the library</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8">
          <p className="eyebrow">All calculators</p>
          <h2 className="mt-3 section-title">
            {activeCategory === "all"
              ? "Browse the full calculator library"
              : `Browse ${categories.find((c) => c.slug === activeCategory)?.name ?? "filtered"} calculators`}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Explore the complete list of calculators, filtered to match what
            you’re looking for.
          </p>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="surface-card p-8">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              No calculators found
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Try a broader search term or switch back to all categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
                router.replace("/tools", { scroll: false });
              }}
              className="button-secondary mt-6"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}