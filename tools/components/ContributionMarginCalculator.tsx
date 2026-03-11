"use client";

import { useState } from "react";

export default function ContributionMarginCalculator() {
  const [revenue, setRevenue] = useState("");
  const [variableCosts, setVariableCosts] = useState("");

  const revenueNum = Number(revenue);
  const variableCostsNum = Number(variableCosts);

  let amount: string | null = null;
  let percentage: string | null = null;

  if (revenue !== "" && variableCosts !== "" && revenueNum > 0) {
    const marginAmount = revenueNum - variableCostsNum;
    const marginPct = (marginAmount / revenueNum) * 100;

    amount = marginAmount.toFixed(2);
    percentage = `${marginPct.toFixed(2)}%`;
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
          Variable Costs
        </label>
        <input
          type="number"
          value={variableCosts}
          onChange={(e) => setVariableCosts(e.target.value)}
          className="input-premium"
          placeholder="Enter variable costs"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="result-premium">
          <p className="text-sm text-gray-600">Contribution Margin</p>
          <p className="text-2xl font-semibold text-gray-900">{amount ?? "—"}</p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">Contribution Margin %</p>
          <p className="text-2xl font-semibold text-gray-900">
            {percentage ?? "—"}
          </p>
        </div>
      </div>
    </div>
  );
}