"use client";

import { useState } from "react";

export default function OperatingProfitCalculator() {
  const [grossProfit, setGrossProfit] = useState("");
  const [operatingExpenses, setOperatingExpenses] = useState("");

  const grossProfitNum = Number(grossProfit);
  const operatingExpensesNum = Number(operatingExpenses);

  let operatingProfit: string | null = null;

  if (grossProfit !== "" && operatingExpenses !== "") {
    operatingProfit = (grossProfitNum - operatingExpensesNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Gross Profit</label>
        <input type="number" value={grossProfit} onChange={(e) => setGrossProfit(e.target.value)} className="input-premium" placeholder="Enter gross profit" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Operating Expenses</label>
        <input type="number" value={operatingExpenses} onChange={(e) => setOperatingExpenses(e.target.value)} className="input-premium" placeholder="Enter operating expenses" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Operating Profit</p>
        <p className="text-2xl font-semibold text-gray-900">{operatingProfit ?? "—"}</p>
      </div>
    </div>
  );
}
