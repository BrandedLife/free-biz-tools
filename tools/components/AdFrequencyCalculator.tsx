"use client";

import { useState } from "react";

export default function AdFrequencyCalculator() {
  const [impressions, setImpressions] = useState("");
  const [reach, setReach] = useState("");

  const impressionsNum = Number(impressions);
  const reachNum = Number(reach);

  let frequency: string | null = null;

  if (impressions !== "" && reach !== "" && reachNum > 0) {
    frequency = (impressionsNum / reachNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Impressions</label>
        <input type="number" value={impressions} onChange={(e) => setImpressions(e.target.value)} className="input-premium" placeholder="Enter impressions" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Reach</label>
        <input type="number" value={reach} onChange={(e) => setReach(e.target.value)} className="input-premium" placeholder="Enter reach" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Ad Frequency</p>
        <p className="text-2xl font-semibold text-gray-900">{frequency ?? "—"}</p>
      </div>
    </div>
  );
}
