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
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Revenue
        </label>
        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          className="input-premium"
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
          className="input-premium"
          placeholder="Enter total costs"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Profit</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}