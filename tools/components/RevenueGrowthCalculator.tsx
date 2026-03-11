"use client";

import { useState } from "react";

export default function RevenueGrowthCalculator() {
  const [oldRevenue, setOldRevenue] = useState("");
  const [newRevenue, setNewRevenue] = useState("");

  const oldRevenueNum = Number(oldRevenue);
  const newRevenueNum = Number(newRevenue);

  let result: string | null = null;

  if (oldRevenue !== "" && newRevenue !== "" && oldRevenueNum !== 0) {
    result = `${(((newRevenueNum - oldRevenueNum) / oldRevenueNum) * 100).toFixed(
      2
    )}%`;
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Old Revenue
          </label>
          <input
            type="number"
            value={oldRevenue}
            onChange={(e) => setOldRevenue(e.target.value)}
            className="input-premium"
            placeholder="Enter old revenue"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            New Revenue
          </label>
          <input
            type="number"
            value={newRevenue}
            onChange={(e) => setNewRevenue(e.target.value)}
            className="input-premium"
            placeholder="Enter new revenue"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Revenue Growth</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}