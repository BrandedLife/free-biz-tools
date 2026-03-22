"use client";

import { useState } from "react";

export default function AnnualGrowthRateCalculator() {
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [years, setYears] = useState("");

  const startValueNum = Number(startValue);
  const endValueNum = Number(endValue);
  const yearsNum = Number(years);

  let result: string | null = null;

  if (
    startValue !== "" &&
    endValue !== "" &&
    years !== "" &&
    startValueNum > 0 &&
    yearsNum > 0
  ) {
    const rate = (Math.pow(endValueNum / startValueNum, 1 / yearsNum) - 1) * 100;
    result = rate.toFixed(2) + "%";
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
          placeholder="Enter start value"
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
          placeholder="Enter end value"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Years
        </label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="input-premium"
          placeholder="Enter years"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Annual Growth Rate</p>
        <p className="text-2xl font-semibold text-gray-900">
          {result ?? "—"}
        </p>
      </div>
    </div>
  );
}