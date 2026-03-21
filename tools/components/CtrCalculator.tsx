"use client";

import { useState } from "react";

export default function CtrCalculator() {
  const [clicks, setClicks] = useState("");
  const [impressions, setImpressions] = useState("");

  const clicksNum = Number(clicks);
  const impressionsNum = Number(impressions);

  let ctr: string | null = null;

  if (clicks !== "" && impressions !== "" && impressionsNum > 0) {
    const result = (clicksNum / impressionsNum) * 100;
    ctr = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Clicks
        </label>
        <input
          type="number"
          value={clicks}
          onChange={(e) => setClicks(e.target.value)}
          className="input-premium"
          placeholder="Enter clicks"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Impressions
        </label>
        <input
          type="number"
          value={impressions}
          onChange={(e) => setImpressions(e.target.value)}
          className="input-premium"
          placeholder="Enter impressions"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Click-Through Rate</p>
        <p className="text-2xl font-semibold text-gray-900">
          {ctr ?? "—"}
        </p>
      </div>
    </div>
  );
}
