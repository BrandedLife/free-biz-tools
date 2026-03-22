"use client";

import { useState } from "react";

export default function WorkingCapitalCalculator() {
  const [currentAssets, setCurrentAssets] = useState("");
  const [currentLiabilities, setCurrentLiabilities] = useState("");

  const currentAssetsNum = Number(currentAssets);
  const currentLiabilitiesNum = Number(currentLiabilities);

  let workingCapital: string | null = null;

  if (currentAssets !== "" && currentLiabilities !== "") {
    workingCapital = (currentAssetsNum - currentLiabilitiesNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Current Assets</label>
        <input type="number" value={currentAssets} onChange={(e) => setCurrentAssets(e.target.value)} className="input-premium" placeholder="Enter current assets" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Current Liabilities</label>
        <input type="number" value={currentLiabilities} onChange={(e) => setCurrentLiabilities(e.target.value)} className="input-premium" placeholder="Enter current liabilities" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Working Capital</p>
        <p className="text-2xl font-semibold text-gray-900">{workingCapital ?? "—"}</p>
      </div>
    </div>
  );
}
