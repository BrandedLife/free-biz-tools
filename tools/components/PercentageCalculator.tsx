"use client";

import { useState } from "react";

export default function PercentageCalculator() {
  const [part, setPart] = useState("");
  const [whole, setWhole] = useState("");

  const partNum = Number(part);
  const wholeNum = Number(whole);

  let percentage: string | null = null;

  if (part !== "" && whole !== "" && wholeNum !== 0) {
    percentage = `${((partNum / wholeNum) * 100).toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Part
        </label>
        <input
          type="number"
          value={part}
          onChange={(e) => setPart(e.target.value)}
          className="input-premium"
          placeholder="Enter the part value"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Whole
        </label>
        <input
          type="number"
          value={whole}
          onChange={(e) => setWhole(e.target.value)}
          className="input-premium"
          placeholder="Enter the whole value"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Percentage</p>
        <p className="text-2xl font-semibold text-gray-900">
          {percentage ?? "—"}
        </p>
      </div>
    </div>
  );
}