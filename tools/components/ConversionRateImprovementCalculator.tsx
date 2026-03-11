"use client";

import { useState } from "react";

export default function ConversionRateImprovementCalculator() {
  const [oldRate, setOldRate] = useState("");
  const [newRate, setNewRate] = useState("");

  const oldRateNum = Number(oldRate);
  const newRateNum = Number(newRate);

  let result: string | null = null;

  if (oldRate !== "" && newRate !== "" && oldRateNum > 0) {
    result = `${(((newRateNum - oldRateNum) / oldRateNum) * 100).toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Old Conversion Rate (%)
          </label>
          <input
            type="number"
            value={oldRate}
            onChange={(e) => setOldRate(e.target.value)}
            className="input-premium"
            placeholder="Enter old rate"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            New Conversion Rate (%)
          </label>
          <input
            type="number"
            value={newRate}
            onChange={(e) => setNewRate(e.target.value)}
            className="input-premium"
            placeholder="Enter new rate"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Improvement</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}