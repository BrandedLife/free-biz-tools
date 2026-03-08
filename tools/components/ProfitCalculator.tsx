"use client";

import { useState } from "react";

export default function ProfitCalculator() {
  const [revenue, setRevenue] = useState("");
  const [totalCosts, setTotalCosts] = useState("");

  const revenueNum = Number(revenue);
  const totalCostsNum = Number(totalCosts);

  let result: string | null = null;

  if (revenue !== "" && totalCosts !== "") {
    const profit = revenueNum - totalCostsNum;
    result = profit.toFixed(2);
  }

  return (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Revenue
        </label>
        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter revenue"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Total Costs
        </label>
        <input
          type="number"
          value={totalCosts}
          onChange={(e) => setTotalCosts(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter total costs"
        />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">Profit</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}