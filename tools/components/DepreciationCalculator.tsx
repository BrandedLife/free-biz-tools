"use client";

import { useState } from "react";

export default function DepreciationCalculator() {
  const [assetCost, setAssetCost] = useState("");
  const [salvageValue, setSalvageValue] = useState("");
  const [usefulLife, setUsefulLife] = useState("");

  const assetCostNum = Number(assetCost);
  const salvageValueNum = Number(salvageValue);
  const usefulLifeNum = Number(usefulLife);

  let annualDepreciation: string | null = null;

  if (assetCost !== "" && salvageValue !== "" && usefulLife !== "" && usefulLifeNum > 0) {
    annualDepreciation = ((assetCostNum - salvageValueNum) / usefulLifeNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Asset Cost</label>
        <input type="number" value={assetCost} onChange={(e) => setAssetCost(e.target.value)} className="input-premium" placeholder="Enter asset cost" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Salvage Value</label>
        <input type="number" value={salvageValue} onChange={(e) => setSalvageValue(e.target.value)} className="input-premium" placeholder="Enter salvage value" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Useful Life (Years)</label>
        <input type="number" value={usefulLife} onChange={(e) => setUsefulLife(e.target.value)} className="input-premium" placeholder="Enter useful life" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Annual Depreciation</p>
        <p className="text-2xl font-semibold text-gray-900">{annualDepreciation ?? "—"}</p>
      </div>
    </div>
  );
}
