"use client";

import { useState } from "react";

export default function CustomerPaybackPeriodCalculator() {
  const [cac, setCac] = useState("");
  const [monthlyGrossProfit, setMonthlyGrossProfit] = useState("");

  const cacNum = Number(cac);
  const monthlyGrossProfitNum = Number(monthlyGrossProfit);

  let result: string | null = null;

  if (cac !== "" && monthlyGrossProfit !== "" && monthlyGrossProfitNum > 0) {
    result = (cacNum / monthlyGrossProfitNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          CAC
        </label>
        <input
          type="number"
          value={cac}
          onChange={(e) => setCac(e.target.value)}
          className="input-premium"
          placeholder="Enter CAC"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Monthly Gross Profit
        </label>
        <input
          type="number"
          value={monthlyGrossProfit}
          onChange={(e) => setMonthlyGrossProfit(e.target.value)}
          className="input-premium"
          placeholder="Enter monthly profit"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Payback Period</p>
        <p className="text-2xl font-semibold text-gray-900">
          {result ?? "—"}
        </p>
      </div>
    </div>
  );
}