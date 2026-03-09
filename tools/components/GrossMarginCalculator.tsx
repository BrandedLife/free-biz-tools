"use client";

import { useState } from "react";

export default function GrossMarginCalculator() {
  const [revenue, setRevenue] = useState("");
  const [costOfGoodsSold, setCostOfGoodsSold] = useState("");

  const revenueNum = Number(revenue);
  const costOfGoodsSoldNum = Number(costOfGoodsSold);

  let result: string | null = null;

  if (revenue !== "" && costOfGoodsSold !== "" && revenueNum > 0) {
    const grossMargin =
      ((revenueNum - costOfGoodsSoldNum) / revenueNum) * 100;
    result = `${grossMargin.toFixed(2)}%`;
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
          Cost of Goods Sold
        </label>
        <input
          type="number"
          value={costOfGoodsSold}
          onChange={(e) => setCostOfGoodsSold(e.target.value)}
          className="input-premium"
          placeholder="Enter cost of goods sold"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Gross Margin</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}