"use client";

import { useState } from "react";

export default function FunnelConversionCalculator() {
  const [finalConversions, setFinalConversions] = useState("");
  const [topOfFunnelVisitors, setTopOfFunnelVisitors] = useState("");

  const finalConversionsNum = Number(finalConversions);
  const topOfFunnelVisitorsNum = Number(topOfFunnelVisitors);

  let funnelConversionRate: string | null = null;

  if (finalConversions !== "" && topOfFunnelVisitors !== "" && topOfFunnelVisitorsNum > 0) {
    const result = (finalConversionsNum / topOfFunnelVisitorsNum) * 100;
    funnelConversionRate = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Final Conversions</label>
        <input type="number" value={finalConversions} onChange={(e) => setFinalConversions(e.target.value)} className="input-premium" placeholder="Enter final conversions" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Top-of-Funnel Visitors</label>
        <input type="number" value={topOfFunnelVisitors} onChange={(e) => setTopOfFunnelVisitors(e.target.value)} className="input-premium" placeholder="Enter top-of-funnel visitors" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Funnel Conversion Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{funnelConversionRate ?? "—"}</p>
      </div>
    </div>
  );
}
