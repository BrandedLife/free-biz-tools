"use client";

import { useState } from "react";

export default function ClicksCalculator() {
  const [impressions, setImpressions] = useState("");
  const [ctr, setCtr] = useState("");

  const impressionsNum = Number(impressions);
  const ctrNum = Number(ctr);

  let clicks: string | null = null;

  if (impressions !== "" && ctr !== "") {
    const result = impressionsNum * (ctrNum / 100);
    clicks = result.toFixed(0);
  }

  return (
    <div className="space-y-5">
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

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          CTR (%)
        </label>
        <input
          type="number"
          value={ctr}
          onChange={(e) => setCtr(e.target.value)}
          className="input-premium"
          placeholder="Enter CTR"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated Clicks</p>
        <p className="text-2xl font-semibold text-gray-900">
          {clicks ?? "—"}
        </p>
      </div>
    </div>
  );
}
