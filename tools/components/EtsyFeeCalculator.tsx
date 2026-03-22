"use client";

import { useState } from "react";

export default function EtsyFeeCalculator() {
  const [salePrice, setSalePrice] = useState("");
  const [listingFee, setListingFee] = useState("");
  const [transactionFeePercentage, setTransactionFeePercentage] = useState("");

  const salePriceNum = Number(salePrice);
  const listingFeeNum = Number(listingFee);
  const transactionFeePercentageNum = Number(transactionFeePercentage);

  let totalFee: string | null = null;
  let netAmount: string | null = null;

  if (salePrice !== "" && listingFee !== "" && transactionFeePercentage !== "") {
    const fee = listingFeeNum + salePriceNum * (transactionFeePercentageNum / 100);
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
        <label className="mb-1 block text-sm font-medium text-gray-700">Listing Fee</label>
        <input type="number" value={listingFee} onChange={(e) => setListingFee(e.target.value)} className="input-premium" placeholder="Enter listing fee" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Transaction Fee (%)</label>
        <input type="number" value={transactionFeePercentage} onChange={(e) => setTransactionFeePercentage(e.target.value)} className="input-premium" placeholder="Enter transaction fee percentage" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated Etsy Fee</p>
        <p className="text-2xl font-semibold text-gray-900">{totalFee ?? "—"}</p>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated Net Amount</p>
        <p className="text-2xl font-semibold text-gray-900">{netAmount ?? "—"}</p>
      </div>
    </div>
  );
}
