"use client";

import { useState } from "react";

export default function CpcToCpaCalculator() {
  const [cpc, setCpc] = useState("");
  const [conversionRate, setConversionRate] = useState("");

  const cpcNum = Number(cpc);
  const conversionRateNum = Number(conversionRate);

  let result: string | null = null;

  if (cpc !== "" && conversionRate !== "" && conversionRateNum > 0) {
    result = (cpcNum / (conversionRateNum / 100)).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          CPC
        </label>
        <input
          type="number"
          value={cpc}
          onChange={(e) => setCpc(e.target.value)}
          className="input-premium"
          placeholder="Enter CPC"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Conversion Rate (%)
        </label>
        <input
          type="number"
          value={conversionRate}
          onChange={(e) => setConversionRate(e.target.value)}
          className="input-premium"
          placeholder="Enter conversion rate"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated CPA</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}