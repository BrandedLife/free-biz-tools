"use client";

import { useState } from "react";

export default function CpmCalculator() {
  const [adSpend, setAdSpend] = useState("");
  const [impressions, setImpressions] = useState("");

  const adSpendNum = Number(adSpend);
  const impressionsNum = Number(impressions);

  let result: string | null = null;

  if (adSpend !== "" && impressions !== "" && impressionsNum > 0) {
    const cpm = (adSpendNum / impressionsNum) * 1000;
    result = cpm.toFixed(2);
  }

  return (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Ad Spend
        </label>
        <input
          type="number"
          value={adSpend}
          onChange={(e) => setAdSpend(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter ad spend"
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
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter impressions"
        />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">CPM</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}