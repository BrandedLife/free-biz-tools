"use client";

import { useState } from "react";

export default function AmazonFbaFeeCalculator() {
  const [salePrice, setSalePrice] = useState("");
  const [referralFeePct, setReferralFeePct] = useState("15");
  const [fbaFee, setFbaFee] = useState("4");

  const salePriceNum = Number(salePrice);
  const referralFeePctNum = Number(referralFeePct);
  const fbaFeeNum = Number(fbaFee);

  let totalFees: string | null = null;
  let net: string | null = null;

  if (salePrice !== "") {
    const referral = (salePriceNum * referralFeePctNum) / 100;
    const total = referral + fbaFeeNum;

    totalFees = total.toFixed(2);
    net = (salePriceNum - total).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Sale Price
        </label>
        <input
          type="number"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
          className="input-premium"
          placeholder="Enter sale price"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Referral Fee %
          </label>
          <input
            type="number"
            value={referralFeePct}
            onChange={(e) => setReferralFeePct(e.target.value)}
            className="input-premium"
            placeholder="15"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            FBA Fee
          </label>
          <input
            type="number"
            value={fbaFee}
            onChange={(e) => setFbaFee(e.target.value)}
            className="input-premium"
            placeholder="4"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="result-premium">
          <p className="text-sm text-gray-600">Total Fees</p>
          <p className="text-2xl font-semibold text-gray-900">{totalFees ?? "—"}</p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">Net Revenue</p>
          <p className="text-2xl font-semibold text-gray-900">{net ?? "—"}</p>
        </div>
      </div>
    </div>
  );
}