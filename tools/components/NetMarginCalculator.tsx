"use client";

import { useState } from "react";

export default function NetMarginCalculator() {
  const [netProfit, setNetProfit] = useState("");
  const [revenue, setRevenue] = useState("");

  const netProfitNum = Number(netProfit);
  const revenueNum = Number(revenue);

  let result: string | null = null;

  if (netProfit !== "" && revenue !== "" && revenueNum > 0) {
    result = ((netProfitNum / revenueNum) * 100).toFixed(2) + "%";
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Net Profit
        </label>
        <input
          type="number"
          value={netProfit}
          onChange={(e) => setNetProfit(e.target.value)}
          className="input-premium"
          placeholder="Enter net profit"
        />
      </div>

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

      <div className="result-premium">
        <p className="text-sm text-gray-600">Net Margin</p>
        <p className="text-2xl font-semibold text-gray-900">
          {result ?? "—"}
        </p>
      </div>
    </div>
  );
}