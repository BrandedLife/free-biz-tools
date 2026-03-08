"use client";

import { useState } from "react";

export default function RoiCalculator() {
  const [gain, setGain] = useState("");
  const [cost, setCost] = useState("");

  const gainNum = Number(gain);
  const costNum = Number(cost);

  let roi: string | null = null;

  if (gain !== "" && cost !== "" && costNum > 0) {
    const result = ((gainNum - costNum) / costNum) * 100;
    roi = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Gain / Return
        </label>
        <input
          type="number"
          value={gain}
          onChange={(e) => setGain(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter gain or return"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Cost / Investment
        </label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter cost or investment"
        />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">ROI</p>
        <p className="text-2xl font-semibold text-gray-900">{roi ?? "—"}</p>
      </div>
    </div>
  );
}