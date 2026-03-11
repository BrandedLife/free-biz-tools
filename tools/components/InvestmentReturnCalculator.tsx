"use client";

import { useState } from "react";

export default function InvestmentReturnCalculator() {
  const [initialValue, setInitialValue] = useState("");
  const [endingValue, setEndingValue] = useState("");

  const initialValueNum = Number(initialValue);
  const endingValueNum = Number(endingValue);

  let amount: string | null = null;
  let percentage: string | null = null;

  if (initialValue !== "" && endingValue !== "" && initialValueNum > 0) {
    const gain = endingValueNum - initialValueNum;
    amount = gain.toFixed(2);
    percentage = `${((gain / initialValueNum) * 100).toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Initial Investment
          </label>
          <input
            type="number"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
            className="input-premium"
            placeholder="Enter initial value"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Ending Value
          </label>
          <input
            type="number"
            value={endingValue}
            onChange={(e) => setEndingValue(e.target.value)}
            className="input-premium"
            placeholder="Enter ending value"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="result-premium">
          <p className="text-sm text-gray-600">Return Amount</p>
          <p className="text-2xl font-semibold text-gray-900">{amount ?? "—"}</p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">Return %</p>
          <p className="text-2xl font-semibold text-gray-900">
            {percentage ?? "—"}
          </p>
        </div>
      </div>
    </div>
  );
}