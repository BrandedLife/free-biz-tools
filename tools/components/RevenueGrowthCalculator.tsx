"use client";

import { useState } from "react";

export default function RevenueGrowthCalculator() {
  const [previousRevenue, setPreviousRevenue] = useState("");
  const [currentRevenue, setCurrentRevenue] = useState("");

  const previousRevenueNum = Number(previousRevenue);
  const currentRevenueNum = Number(currentRevenue);

  let growthAmount: string | null = null;
  let growthRate: string | null = null;

  if (
    previousRevenue !== "" &&
    currentRevenue !== "" &&
    previousRevenueNum > 0
  ) {
    const growth = currentRevenueNum - previousRevenueNum;
    const rate = (growth / previousRevenueNum) * 100;

    growthAmount = growth.toFixed(2);
    growthRate = `${rate.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Previous Revenue
        </label>
        <input
          type="number"
          value={previousRevenue}
          onChange={(e) => setPreviousRevenue(e.target.value)}
          className="input-premium"
          placeholder="Enter previous revenue"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Current Revenue
        </label>
        <input
          type="number"
          value={currentRevenue}
          onChange={(e) => setCurrentRevenue(e.target.value)}
          className="input-premium"
          placeholder="Enter current revenue"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="result-premium">
          <p className="text-sm text-gray-600">Revenue Growth</p>
          <p className="text-2xl font-semibold text-gray-900">
            {growthAmount ?? "—"}
          </p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">Revenue Growth Rate</p>
          <p className="text-2xl font-semibold text-gray-900">
            {growthRate ?? "—"}
          </p>
        </div>
      </div>
    </div>
  );
}