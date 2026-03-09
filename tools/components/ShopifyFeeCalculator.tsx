"use client";

import { useState } from "react";

export default function ShopifyFeeCalculator() {
  const [saleAmount, setSaleAmount] = useState("");
  const [feePercent, setFeePercent] = useState("2.9");
  const [fixedFee, setFixedFee] = useState("0.30");

  const saleAmountNum = Number(saleAmount);
  const feePercentNum = Number(feePercent);
  const fixedFeeNum = Number(fixedFee);

  let fee: string | null = null;
  let net: string | null = null;

  if (saleAmount !== "" && saleAmountNum >= 0) {
    const totalFee = (saleAmountNum * feePercentNum) / 100 + fixedFeeNum;
    const netAmount = saleAmountNum - totalFee;

    fee = totalFee.toFixed(2);
    net = netAmount.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Sale Amount
        </label>
        <input
          type="number"
          value={saleAmount}
          onChange={(e) => setSaleAmount(e.target.value)}
          className="input-premium"
          placeholder="Enter sale amount"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Fee Percentage
          </label>
          <input
            type="number"
            value={feePercent}
            onChange={(e) => setFeePercent(e.target.value)}
            className="input-premium"
            placeholder="2.9"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Fixed Fee
          </label>
          <input
            type="number"
            value={fixedFee}
            onChange={(e) => setFixedFee(e.target.value)}
            className="input-premium"
            placeholder="0.30"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="result-premium">
          <p className="text-sm text-gray-600">Estimated Fee</p>
          <p className="text-2xl font-semibold text-gray-900">{fee ?? "—"}</p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">Net Amount</p>
          <p className="text-2xl font-semibold text-gray-900">{net ?? "—"}</p>
        </div>
      </div>
    </div>
  );
}