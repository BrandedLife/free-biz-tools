"use client";

import { useState } from "react";

export default function MarketplaceFeeCalculator() {
  const [salePrice, setSalePrice] = useState("");
  const [feePercentage, setFeePercentage] = useState("");

  const salePriceNum = Number(salePrice);
  const feePercentageNum = Number(feePercentage);

  let marketplaceFee: string | null = null;
  let netAmount: string | null = null;

  if (salePrice !== "" && feePercentage !== "") {
    const fee = salePriceNum * (feePercentageNum / 100);
    marketplaceFee = fee.toFixed(2);
    netAmount = (salePriceNum - fee).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Sale Price</label>
        <input type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} className="input-premium" placeholder="Enter sale price" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Marketplace Fee (%)</label>
        <input type="number" value={feePercentage} onChange={(e) => setFeePercentage(e.target.value)} className="input-premium" placeholder="Enter marketplace fee percentage" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Marketplace Fee</p>
        <p className="text-2xl font-semibold text-gray-900">{marketplaceFee ?? "—"}</p>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Net Amount After Fee</p>
        <p className="text-2xl font-semibold text-gray-900">{netAmount ?? "—"}</p>
      </div>
    </div>
  );
}
