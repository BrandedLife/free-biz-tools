"use client";

import { useState } from "react";

export default function ReorderPointCalculator() {
  const [averageDailyUsage, setAverageDailyUsage] = useState("");
  const [leadTimeDays, setLeadTimeDays] = useState("");

  const averageDailyUsageNum = Number(averageDailyUsage);
  const leadTimeDaysNum = Number(leadTimeDays);

  let reorderPoint: string | null = null;

  if (averageDailyUsage !== "" && leadTimeDays !== "") {
    reorderPoint = (averageDailyUsageNum * leadTimeDaysNum).toFixed(0);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Average Daily Usage</label>
        <input type="number" value={averageDailyUsage} onChange={(e) => setAverageDailyUsage(e.target.value)} className="input-premium" placeholder="Enter average daily usage" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Lead Time (Days)</label>
        <input type="number" value={leadTimeDays} onChange={(e) => setLeadTimeDays(e.target.value)} className="input-premium" placeholder="Enter lead time in days" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Reorder Point</p>
        <p className="text-2xl font-semibold text-gray-900">{reorderPoint ?? "—"}</p>
      </div>
    </div>
  );
}
