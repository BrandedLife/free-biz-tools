"use client";

import { useState } from "react";

export default function BundlePricingCalculator() {
  const [totalItemPrices, setTotalItemPrices] = useState("");
  const [bundleDiscountPercentage, setBundleDiscountPercentage] = useState("");

  const totalItemPricesNum = Number(totalItemPrices);
  const bundleDiscountPercentageNum = Number(bundleDiscountPercentage);

  let bundlePrice: string | null = null;

  if (totalItemPrices !== "" && bundleDiscountPercentage !== "") {
    const price = totalItemPricesNum * (1 - bundleDiscountPercentageNum / 100);
    bundlePrice = price.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Total Individual Item Prices
        </label>
        <input
          type="number"
          value={totalItemPrices}
          onChange={(e) => setTotalItemPrices(e.target.value)}
          className="input-premium"
          placeholder="Enter total item prices"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Bundle Discount Percentage
        </label>
        <input
          type="number"
          value={bundleDiscountPercentage}
          onChange={(e) => setBundleDiscountPercentage(e.target.value)}
          className="input-premium"
          placeholder="Enter bundle discount percentage"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Bundle Price</p>
        <p className="text-2xl font-semibold text-gray-900">
          {bundlePrice ?? "—"}
        </p>
      </div>
    </div>
  );
}
