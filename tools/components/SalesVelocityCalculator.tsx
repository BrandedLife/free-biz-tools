"use client";

import { useState } from "react";

export default function SalesVelocityCalculator() {
  const [opportunities, setOpportunities] = useState("");
  const [averageDealValue, setAverageDealValue] = useState("");
  const [winRate, setWinRate] = useState("");
  const [salesCycleLength, setSalesCycleLength] = useState("");

  const opps = Number(opportunities);
  const dealValue = Number(averageDealValue);
  const win = Number(winRate);
  const cycle = Number(salesCycleLength);

  const valid = opportunities !== "" && averageDealValue !== "" && winRate !== "" && salesCycleLength !== "" && opps >= 0 && dealValue >= 0 && win >= 0 && win <= 100 && cycle > 0;

  const salesVelocity = valid ? (opps * dealValue * (win / 100)) / cycle : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Sales Velocity Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          Estimate how much revenue moves through your pipeline each day.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Number of opportunities</span>
          <input
            type="number"
            min="0"
            step="1"
            value={opportunities}
            onChange={(e) => setOpportunities(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="40"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Average deal value</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={averageDealValue}
            onChange={(e) => setAverageDealValue(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="15000"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Win rate (%)</span>
          <input
            type="number"
            min="0"
            max="100"
            step="0.01"
            value={winRate}
            onChange={(e) => setWinRate(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="25"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Sales cycle length (days)</span>
          <input
            type="number"
            min="1"
            step="1"
            value={salesCycleLength}
            onChange={(e) => setSalesCycleLength(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="30"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6">
        <p className="text-sm text-gray-500">Sales velocity per day</p>
        <p className="text-3xl font-semibold">{salesVelocity !== null ? salesVelocity.toFixed(2) : "—"}</p>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>Sales Velocity = Opportunities × Deal Value × Win Rate ÷ Sales Cycle Length</strong>
      </p>
    </div>
  );
}
