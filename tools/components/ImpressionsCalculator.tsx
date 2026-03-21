"use client";

import { useState } from "react";

export default function ImpressionsCalculator() {
  const [spend, setSpend] = useState("");
  const [cpm, setCpm] = useState("");

  const spendNum = Number(spend);
  const cpmNum = Number(cpm);

  let impressions: string | null = null;

  if (spend !== "" && cpm !== "" && cpmNum > 0) {
    const result = (spendNum / cpmNum) * 1000;
    impressions = result.toFixed(0);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Ad Spend
        </label>
        <input
          type="number"
          value={spend}
          onChange={(e) => setSpend(e.target.value)}
          className="input-premium"
          placeholder="Enter ad spend"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          CPM
        </label>
        <input
          type="number"
          value={cpm}
          onChange={(e) => setCpm(e.target.value)}
          className="input-premium"
          placeholder="Enter CPM"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated Impressions</p>
        <p className="text-2xl font-semibold text-gray-900">
          {impressions ?? "—"}
        </p>
      </div>
    </div>
  );
}
