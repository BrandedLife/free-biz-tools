"use client";

import { useState } from "react";

export default function RoasCalculator() {
  const [revenue, setRevenue] = useState("");
  const [adSpend, setAdSpend] = useState("");

  const revenueNum = Number(revenue);
  const adSpendNum = Number(adSpend);

  let result: string | null = null;

  if (revenue !== "" && adSpend !== "" && adSpendNum > 0) {
    const roas = revenueNum / adSpendNum;
    result = `${roas.toFixed(2)}x`;
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
          Ad Spend
        </label>
        <input
          type="number"
          value={adSpend}
          onChange={(e) => setAdSpend(e.target.value)}
          className="input-premium"
          placeholder="Enter ad spend"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">ROAS</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}