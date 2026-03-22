"use client";

import { useState } from "react";

export default function ProductBundleProfitCalculator() {
  const [bundlePrice, setBundlePrice] = useState("");
  const [totalBundleCost, setTotalBundleCost] = useState("");

  const bundlePriceNum = Number(bundlePrice);
  const totalBundleCostNum = Number(totalBundleCost);

  let bundleProfit: string | null = null;
  let bundleMargin: string | null = null;

  if (bundlePrice !== "" && totalBundleCost !== "" && bundlePriceNum > 0) {
    const profit = bundlePriceNum - totalBundleCostNum;
    const margin = (profit / bundlePriceNum) * 100;
    bundleProfit = profit.toFixed(2);
    bundleMargin = `${margin.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Bundle Price</label>
        <input type="number" value={bundlePrice} onChange={(e) => setBundlePrice(e.target.value)} className="input-premium" placeholder="Enter bundle price" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Total Bundle Cost</label>
        <input type="number" value={totalBundleCost} onChange={(e) => setTotalBundleCost(e.target.value)} className="input-premium" placeholder="Enter total bundle cost" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Bundle Profit</p>
        <p className="text-2xl font-semibold text-gray-900">{bundleProfit ?? "—"}</p>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Bundle Margin</p>
        <p className="text-2xl font-semibold text-gray-900">{bundleMargin ?? "—"}</p>
      </div>
    </div>
  );
}
