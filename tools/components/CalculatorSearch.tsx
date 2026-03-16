"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CalculatorSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/tools?search=${encodeURIComponent(query)}`);
  }

  return (
    <section className="surface-card p-8 md:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Find the right calculator</p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          Search 50+ free business calculators
        </h2>

        <p className="mt-4 text-slate-600">
          Quickly find tools for pricing, ecommerce, finance, marketing,
          SaaS metrics, and business planning.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            placeholder="Try: profit margin, loan payment, SaaS MRR..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-premium flex-1"
          />

          <button type="submit" className="button-primary">
            Search tools
          </button>
        </form>
      </div>
    </section>
  );
}