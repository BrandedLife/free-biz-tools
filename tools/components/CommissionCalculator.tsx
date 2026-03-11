"use client";

import { useState } from "react";

export default function CommissionCalculator() {
  const [salesAmount, setSalesAmount] = useState("");
  const [commissionRate, setCommissionRate] = useState("");

  const salesAmountNum = Number(salesAmount);
  const commissionRateNum = Number(commissionRate);

  let result: string | null = null;

  if (salesAmount !== "" && commissionRate !== "") {
    result = ((salesAmountNum * commissionRateNum) / 100).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Sales Amount
          </label>
          <input
            type="number"
            value={salesAmount}
            onChange={(e) => setSalesAmount(e.target.value)}
            className="input-premium"
            placeholder="Enter sales amount"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Commission Rate %
          </label>
          <input
            type="number"
            value={commissionRate}
            onChange={(e) => setCommissionRate(e.target.value)}
            className="input-premium"
            placeholder="Enter commission rate"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Commission</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}