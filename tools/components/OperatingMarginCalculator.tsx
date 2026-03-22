"use client";

import { useState } from "react";

export default function OperatingMarginCalculator() {
  const [operatingIncome, setOperatingIncome] = useState("");
  const [revenue, setRevenue] = useState("");

  const operatingIncomeNum = Number(operatingIncome);
  const revenueNum = Number(revenue);

  let result: string | null = null;

  if (operatingIncome !== "" && revenue !== "" && revenueNum > 0) {
    result = ((operatingIncomeNum / revenueNum) * 100).toFixed(2) + "%";
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Operating Income
        </label>
        <input
          type="number"
          value={operatingIncome}
          onChange={(e) => setOperatingIncome(e.target.value)}
          className="input-premium"
          placeholder="Enter operating income"
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
        <p className="text-sm text-gray-600">Operating Margin</p>
        <p className="text-2xl font-semibold text-gray-900">
          {result ?? "—"}
        </p>
      </div>
    </div>
  );
}