"use client";

import { useState } from "react";

export default function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState("");
  const [cost, setCost] = useState("");

  const revenueNum = Number(revenue);
  const costNum = Number(cost);

  let result: string | null = null;

  if (revenue !== "" && cost !== "" && revenueNum > 0) {
    const margin = ((revenueNum - costNum) / revenueNum) * 100;
    result = `${margin.toFixed(2)}%`;
  }

  return (
    <div className="space-y-4 rounded-2xl border p-6">
      <div>
        <label className="mb-1 block text-sm font-medium">Revenue</label>
        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Enter revenue"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Cost</label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Enter cost"
        />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">Profit Margin</p>
        <p className="text-2xl font-semibold">{result ?? "—"}</p>
      </div>
    </div>
  );
}