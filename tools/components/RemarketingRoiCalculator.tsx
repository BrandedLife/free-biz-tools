"use client";

import { useState } from "react";

export default function RemarketingRoiCalculator() {
  const [remarketingRevenue, setRemarketingRevenue] = useState("");
  const [remarketingCost, setRemarketingCost] = useState("");

  const remarketingRevenueNum = Number(remarketingRevenue);
  const remarketingCostNum = Number(remarketingCost);

  let roi: string | null = null;

  if (remarketingRevenue !== "" && remarketingCost !== "" && remarketingCostNum > 0) {
    const result = ((remarketingRevenueNum - remarketingCostNum) / remarketingCostNum) * 100;
    roi = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Remarketing Revenue</label>
        <input type="number" value={remarketingRevenue} onChange={(e) => setRemarketingRevenue(e.target.value)} className="input-premium" placeholder="Enter remarketing revenue" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Remarketing Cost</label>
        <input type="number" value={remarketingCost} onChange={(e) => setRemarketingCost(e.target.value)} className="input-premium" placeholder="Enter remarketing cost" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Remarketing ROI</p>
        <p className="text-2xl font-semibold text-gray-900">{roi ?? "—"}</p>
      </div>
    </div>
  );
}
