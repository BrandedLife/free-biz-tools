"use client";

import { useState } from "react";

export default function EbayFeeCalculator() {
  const [salePrice, setSalePrice] = useState("");
  const [finalValueFeePercentage, setFinalValueFeePercentage] = useState("");

  const salePriceNum = Number(salePrice);
  const finalValueFeePercentageNum = Number(finalValueFeePercentage);

  let totalFee: string | null = null;
  let netAmount: string | null = null;

  if (salePrice !== "" && finalValueFeePercentage !== "") {
    const fee = salePriceNum * (finalValueFeePercentageNum / 100);
    totalFee = fee.toFixed(2);
    netAmount = (salePriceNum - fee).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Sale Price</label>
        <input type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} className="input-premium" placeholder="Enter sale price" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Final Value Fee (%)</label>
        <input type="number" value={finalValueFeePercentage} onChange={(e) => setFinalValueFeePercentage(e.target.value)} className="input-premium" placeholder="Enter final value fee percentage" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated eBay Fee</p>
        <p className="text-2xl font-semibold text-gray-900">{totalFee ?? "—"}</p>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated Net Amount</p>
        <p className="text-2xl font-semibold text-gray-900">{netAmount ?? "—"}</p>
      </div>
    </div>
  );
}
