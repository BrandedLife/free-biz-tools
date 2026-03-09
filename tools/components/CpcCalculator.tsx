"use client";

import { useState } from "react";

export default function CpcCalculator() {
  const [adSpend, setAdSpend] = useState("");
  const [clicks, setClicks] = useState("");

  const adSpendNum = Number(adSpend);
  const clicksNum = Number(clicks);

  let result: string | null = null;

  if (adSpend !== "" && clicks !== "" && clicksNum > 0) {
    const cpc = adSpendNum / clicksNum;
    result = cpc.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Ad Spend
        </label>
        <input
          type="number"
          value={adSpend}
          onChange={(e) => setAdSpend(e.target.value)}
          className="input-premium"
          placeholder="Enter ad spend"
        />
      </div>

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

      <div className="result-premium">
        <p className="text-sm text-gray-600">CPC</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}