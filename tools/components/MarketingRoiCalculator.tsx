"use client";

import { useState } from "react";

export default function MarketingRoiCalculator() {
  const [revenue, setRevenue] = useState("");
  const [cost, setCost] = useState("");

  const revenueNum = Number(revenue);
  const costNum = Number(cost);

  let result: string | null = null;

  if (revenue !== "" && cost !== "" && costNum > 0) {
    result = `${(((revenueNum - costNum) / costNum) * 100).toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Marketing Revenue
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
          Marketing Cost
        </label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="input-premium"
          placeholder="Enter cost"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Marketing ROI</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}