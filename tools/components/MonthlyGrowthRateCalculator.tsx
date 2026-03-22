"use client";

import { useState } from "react";

export default function MonthlyGrowthRateCalculator() {
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");

  const startValueNum = Number(startValue);
  const endValueNum = Number(endValue);

  let result: string | null = null;

  if (startValue !== "" && endValue !== "" && startValueNum > 0) {
    result =
      (((endValueNum - startValueNum) / startValueNum) * 100).toFixed(2) + "%";
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Start Value
        </label>
        <input
          type="number"
          value={startValue}
          onChange={(e) => setStartValue(e.target.value)}
          className="input-premium"
          placeholder="Enter start"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          End Value
        </label>
        <input
          type="number"
          value={endValue}
          onChange={(e) => setEndValue(e.target.value)}
          className="input-premium"
          placeholder="Enter end"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Growth Rate</p>
        <p className="text-2xl font-semibold text-gray-900">
          {result ?? "—"}
        </p>
      </div>
    </div>
  );
}