"use client";

import { useState } from "react";

export default function BurnRateCalculator() {
  const [cashSpent, setCashSpent] = useState("");
  const [months, setMonths] = useState("");

  const cashSpentNum = Number(cashSpent);
  const monthsNum = Number(months);

  let result: string | null = null;

  if (cashSpent !== "" && months !== "" && monthsNum > 0) {
    result = (cashSpentNum / monthsNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Cash Spent
        </label>
        <input
          type="number"
          value={cashSpent}
          onChange={(e) => setCashSpent(e.target.value)}
          className="input-premium"
          placeholder="Enter spend"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Months
        </label>
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          className="input-premium"
          placeholder="Enter months"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Burn Rate</p>
        <p className="text-2xl font-semibold text-gray-900">
          {result ?? "—"}
        </p>
      </div>
    </div>
  );
}