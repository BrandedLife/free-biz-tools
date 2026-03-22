"use client";

import { useState } from "react";

export default function SafetyStockCalculator() {
  const [maximumDailyUsage, setMaximumDailyUsage] = useState("");
  const [averageDailyUsage, setAverageDailyUsage] = useState("");
  const [maximumLeadTime, setMaximumLeadTime] = useState("");
  const [averageLeadTime, setAverageLeadTime] = useState("");

  const maximumDailyUsageNum = Number(maximumDailyUsage);
  const averageDailyUsageNum = Number(averageDailyUsage);
  const maximumLeadTimeNum = Number(maximumLeadTime);
  const averageLeadTimeNum = Number(averageLeadTime);

  let safetyStock: string | null = null;

  if (
    maximumDailyUsage !== "" &&
    averageDailyUsage !== "" &&
    maximumLeadTime !== "" &&
    averageLeadTime !== ""
  ) {
    const result =
      maximumDailyUsageNum * maximumLeadTimeNum -
      averageDailyUsageNum * averageLeadTimeNum;
    safetyStock = result.toFixed(0);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Maximum Daily Usage</label>
        <input type="number" value={maximumDailyUsage} onChange={(e) => setMaximumDailyUsage(e.target.value)} className="input-premium" placeholder="Enter maximum daily usage" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Average Daily Usage</label>
        <input type="number" value={averageDailyUsage} onChange={(e) => setAverageDailyUsage(e.target.value)} className="input-premium" placeholder="Enter average daily usage" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Maximum Lead Time</label>
        <input type="number" value={maximumLeadTime} onChange={(e) => setMaximumLeadTime(e.target.value)} className="input-premium" placeholder="Enter maximum lead time" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Average Lead Time</label>
        <input type="number" value={averageLeadTime} onChange={(e) => setAverageLeadTime(e.target.value)} className="input-premium" placeholder="Enter average lead time" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Safety Stock</p>
        <p className="text-2xl font-semibold text-gray-900">{safetyStock ?? "—"}</p>
      </div>
    </div>
  );
}
