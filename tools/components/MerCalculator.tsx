"use client";

import { useState } from "react";

export default function MerCalculator() {
  const [totalRevenue, setTotalRevenue] = useState("");
  const [totalAdSpend, setTotalAdSpend] = useState("");

  const revenue = Number(totalRevenue);
  const adSpend = Number(totalAdSpend);
  const valid = totalRevenue !== "" && totalAdSpend !== "" && revenue >= 0 && adSpend > 0;

  const mer = valid ? revenue / adSpend : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">MER Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          Marketing Efficiency Ratio shows how much revenue your business generates for each unit of ad spend.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Total revenue</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={totalRevenue}
            onChange={(e) => setTotalRevenue(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="500000"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Total ad spend</span>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={totalAdSpend}
            onChange={(e) => setTotalAdSpend(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="100000"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6">
        <p className="text-sm text-gray-500">Marketing efficiency ratio</p>
        <p className="text-3xl font-semibold">{mer !== null ? `${mer.toFixed(2)}x` : "—"}</p>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>MER = Total Revenue ÷ Total Ad Spend</strong>
      </p>
    </div>
  );
}
